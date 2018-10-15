export const calculateRating = (academicYear,btsNo,schoolId) => {
    //calculated bts rating here
    //let grades = ["7","8","9","10"]
    let grades = ["9","10"]
    var counter = 0;

    let totalRating = {
        academicYear:academicYear,
        btsNo: btsNo,
        schoolId: schoolId,
        grade: "all",
        // day2
        algebra: 0,
        geometry: 0,
        computer: 0,
        turkish: 0,
        world_history: 0,
        kazakh_history: 0,
        geography: 0,
        // day1
        physics: 0,
        chemistry: 0,
        biology: 0,
        english: 0,
        kazakh: 0,
        russian: 0,
        total: 0
    }

    _.each(grades,(grade) => {

        let gradeRating = calculateBtsRatingForGrade(academicYear,btsNo,schoolId,grade)

        if (grade == gradeRating.grade && gradeRating.total > 0) {
            counter++;
        }

            totalRating.algebra += (gradeRating.algebra || 0)
            totalRating.geometry += (gradeRating.geometry || 0)
            totalRating.computer += (gradeRating.computer || 0)
            totalRating.turkish += (gradeRating.turkish || 0)
            totalRating.world_history += (gradeRating.world_history || 0)
            totalRating.kazakh_history += (gradeRating.kazakh_history || 0)
            totalRating.geography += (gradeRating.geography || 0)
            totalRating.physics += (gradeRating.physics || 0)
            totalRating.chemistry += (gradeRating.chemistry || 0)
            totalRating.biology += (gradeRating.biology || 0)
            totalRating.english += (gradeRating.english || 0)
            totalRating.kazakh += (gradeRating.kazakh || 0)
            totalRating.russian += (gradeRating.russian || 0)
            totalRating.total += (gradeRating.total || 0)
    })

    totalRating.algebra = totalRating.algebra / (counter || 1)
    totalRating.geometry = totalRating.geometry / (counter || 1)
    totalRating.computer = totalRating.computer / (counter || 1)
    totalRating.turkish = totalRating.turkish / (counter || 1)
    totalRating.world_history = totalRating.world_history / (counter || 1)
    totalRating.kazakh_history = totalRating.kazakh_history / (counter || 1)
    totalRating.geography = totalRating.geography / (counter || 1)
    totalRating.physics = totalRating.physics / (counter || 1)
    totalRating.chemistry = totalRating.chemistry / (counter || 1)
    totalRating.biology = totalRating.biology / (counter || 1)
    totalRating.english = totalRating.english / (counter || 1)
    totalRating.kazakh = totalRating.kazakh / (counter || 1)
    totalRating.russian = totalRating.russian / (counter || 1)
    totalRating.total = totalRating.total / (counter || 1)

    // insert total rating to db
    var sameSchoolRating = BtsRatings.findOne({
        btsNo: btsNo,
        schoolId: schoolId,
        academicYear: academicYear,
        grade: 'all'
    })

    if (sameSchoolRating) {
        BtsRatings.update({_id:sameSchoolRating._id},{$set:totalRating})
    } else {
        BtsRatings.insert(totalRating)
    }
}

calculateBtsRatingForGrade = (academicYear,btsNo,schoolId,grade) => {
    let ratingObj = {
        academicYear:academicYear,
        btsNo: btsNo,
        schoolId: schoolId,
        grade: grade,
        // day 2
        algebra: 0,
        geometry: 0,
        computer: 0,
        turkish: 0,
        world_history: 0,
        kazakh_history: 0,
        geography: 0,
        //day1
        physics: 0,
        chemistry: 0,
        biology: 0,
        english: 0,
        kazakh: 0,
        russian: 0,
        total: 0
    }

    let records = BtsResults.find({academicYear:academicYear,btsNo:btsNo,grade:grade,schoolId:schoolId}).fetch()

    let firstDayCounter = 0;
    let secondDayCounter = 0;
    let firstDayTotal = 0;
    let secondDayTotal = 0;

    _.each(records,(record) => {

        if (record.day_1_total) {
            ratingObj.physics += (record.physics || 0)
            ratingObj.chemistry += (record.chemistry || 0)
            ratingObj.biology += (record.biology || 0)
            ratingObj.english += (record.english || 0)
            ratingObj.kazakh += (record.kazakh || 0)
            ratingObj.russian += (record.russian || 0)
            firstDayCounter++;
            firstDayTotal += (record.day_1_total || 0)
        }

        if (record.day_2_total) {
            ratingObj.algebra += (record.algebra || 0)
            ratingObj.geometry += (record.geometry || 0)
            ratingObj.computer += (record.computer || 0)
            ratingObj.turkish += (record.turkish || 0)
            ratingObj.world_history += (record.world_history || 0)
            ratingObj.kazakh_history += (record.kazakh_history || 0)
            ratingObj.geography += (record.geography || 0)
            secondDayCounter++
            secondDayTotal += (record.day_2_total || 0)
        }

    })

    if (firstDayCounter != 0) {
        ratingObj.physics = (ratingObj.physics / firstDayCounter)
        ratingObj.chemistry = (ratingObj.chemistry / firstDayCounter)
        ratingObj.biology = (ratingObj.biology / firstDayCounter)
        ratingObj.english = (ratingObj.english / firstDayCounter)
        ratingObj.kazakh = (ratingObj.kazakh / firstDayCounter)
        ratingObj.russian = (ratingObj.russian / firstDayCounter)
        ratingObj.total += firstDayTotal/firstDayCounter
    }
    if (secondDayCounter != 0) {
        ratingObj.algebra = (ratingObj.algebra / secondDayCounter)
        ratingObj.geometry = (ratingObj.geometry / secondDayCounter)
        ratingObj.computer = (ratingObj.computer / secondDayCounter)
        ratingObj.turkish = (ratingObj.turkish / secondDayCounter)
        ratingObj.world_history = (ratingObj.world_history / secondDayCounter)
        ratingObj.kazakh_history = (ratingObj.kazakh_history / secondDayCounter)
        ratingObj.geography = (ratingObj.geography / secondDayCounter)
        ratingObj.total += secondDayTotal/secondDayCounter
    }

    // insert rating to db
    var sameRating = BtsRatings.findOne({
        btsNo: btsNo,
        academicYear: academicYear,
        schoolId: schoolId,
        grade: grade
    })
    if (!sameRating)
        BtsRatings.insert(ratingObj)
    else {
        BtsRatings.update({_id:sameRating._id}, {
            $set: ratingObj
        })
    }

    return ratingObj
}
