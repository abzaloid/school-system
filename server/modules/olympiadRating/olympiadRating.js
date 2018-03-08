	export const calculateTotalGradeSubject = (schoolId,academicYear) => {

    	subjects = KboCourses.find().fetch()
    	_.each(subjects,(subject) => {
    		var c = 0;

    		let totalGradeRating = {
		                    schoolId:schoolId,
		                    academicYear:academicYear,
		                    subjectId: subject.subjectId,
		                    grade:'all',
		                    regBronzeOlymp: 0,
		                    regSilverOlymp: 0,
		                    regGoldOlymp: 0,
		                    regTotalOlymp: 0,
		                    natBronzeOlymp: 0,
		                    natSilverOlymp: 0,
		                    natGoldOlymp: 0,
		                    natTotalOlymp: 0, 
		                    interBronzeOlymp: 0,
		                    interSilverOlymp: 0,
		                    interGoldOlymp: 0,
		                    interTotalOlymp: 0,
		                    regBronzeProject: 0,
		                    regSilverProject: 0, 
		                    regGoldProject: 0,
		                    regTotalProject: 0,
		                    natBronzeProject: 0,
		                    natSilverProject: 0,
		                    natGoldProject: 0, 
		                    natTotalProject: 0,
		                    interBronzeProject: 0,
		                    interSilverProject: 0,
		                    interGoldProject: 0,
		                    interTotalProject: 0,
		                }

    		let grades = ['7','8','9','10','11']

    		_.each(grades, (grade) => {
		    	ratings = OlympiadRatings.find({schoolId:schoolId,academicYear:academicYear,grade:grade, subjectId:subject.subjectId}).fetch()
		        _.each(ratings,(rating) => {

		        	totalGradeRating.regBronzeOlymp += rating.regBronzeOlymp
		        	totalGradeRating.regSilverOlymp += rating.regSilverOlymp
		            totalGradeRating.regGoldOlymp += rating.regGoldOlymp
		            totalGradeRating.regTotalOlymp += rating.regTotalOlymp
		            totalGradeRating.natBronzeOlymp += rating.natBronzeOlymp
		            totalGradeRating.natSilverOlymp += rating.natSilverOlymp
		            totalGradeRating.natGoldOlymp += rating.natGoldOlymp
		            totalGradeRating.natTotalOlymp += rating.natTotalOlymp
		            totalGradeRating.interBronzeOlymp += rating.interBronzeOlymp
		            totalGradeRating.interSilverOlymp += rating.interSilverOlymp
		            totalGradeRating.interGoldOlymp += rating.interGoldOlymp
		            totalGradeRating.interTotalOlymp += rating.interTotalOlymp
		            totalGradeRating.regBronzeProject += rating.regBronzeProject
		            totalGradeRating.regSilverProject +=  rating.regSilverProject
		            totalGradeRating.regGoldProject += rating.regGoldProject
		            totalGradeRating.regTotalProject += rating.regTotalProject
		            totalGradeRating.natBronzeProject += rating.natBronzeProject
		            totalGradeRating.natSilverProject += rating.natSilverProject
		            totalGradeRating.natGoldProject += rating.natGoldProject
		            totalGradeRating.natTotalProject += rating.natTotalProject
		            totalGradeRating.interBronzeProject += rating.interBronzeProject
		            totalGradeRating.interSilverProject += rating.interSilverProject
		            totalGradeRating.interGoldProject += rating.interGoldProject
		            totalGradeRating.interTotalProject += rating.interTotalProject
		            c++;
		        })
		    })

		    let sameTotalGradeRating = OlympiadRatings.findOne({academicYear:academicYear, schoolId:schoolId, subjectId:subject.subjectId, grade:'all'})

		            if (sameTotalGradeRating) {
		                OlympiadRatings.update({_id:sameTotalGradeRating._id},{$set:totalGradeRating})
		            }
		            else {
		            	if (c > 0)
		            		OlympiadRatings.insert(totalGradeRating)
		            }
	    })
    }