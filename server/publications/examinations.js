import { Meteor } from 'meteor/meteor'

Meteor.publish('btsResults',function(academicYear,grade,btsNo) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = BtsResults.find({academicYear:academicYear,grade:grade,btsNo:btsNo,schoolId:school.schoolId})
        return cursor
    }
    return this.ready()
})

Meteor.publish('btsAllResults',function(academicYear,grade,btsNo) {
    if (this.userId) {
        return BtsResults.find({academicYear:academicYear,grade:grade,btsNo:btsNo})
    }
    return this.ready()
})

Meteor.publish('btsRating',function(academicYear,grade,btsNo) {
    if (this.userId) {
        let cursor = BtsRatings.find({academicYear:academicYear,grade:grade,btsNo:btsNo})
        return cursor
    }
    return this.ready()
})

Meteor.publish('btsObjectivesResults',function(academicYear,quarter) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = BtsObjectivesResults.find({academicYear:academicYear,quarter:quarter,schoolId:school.schoolId})
        return cursor
    }
    return this.ready()
})

Meteor.publish('btsAllObjectivesResults',function(academicYear,quarter,grade) {
    if (this.userId) {
        return BtsObjectivesResults.find({academicYear:academicYear,quarter:quarter,grade:grade})
    }
    return this.ready()
})

Meteor.publish('btsObjectivesRatings',function(academicYear,quarter,grade) {
    if (this.userId) {
        return BtsObjectivesRatings.find({academicYear:academicYear,quarter:quarter,grade:grade})
    }
    return this.ready()
})

Meteor.publish('btsObjectivesSchoolRatings',function(academicYear,quarter) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = BtsObjectivesRatings.find({academicYear:academicYear,quarter:quarter,schoolId:school.schoolId})
        return cursor
    }
    return this.ready()
})

Meteor.publish('kboRating',function(academicYear,grade,kboNo) {
    if (this.userId) {
        let cursor = KboRatings.find({academicYear:academicYear,grade:grade,kboNo:kboNo})
        return cursor
    }
    return this.ready()
})

Meteor.publish('kboResults',function(academicYear,grade,subjectId,kboNo) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = KboResults.find({academicYear:academicYear,grade:RegExp(grade),subjectId:RegExp(subjectId),kboNo:kboNo,schoolId:school.schoolId})
        return cursor
    } 
    return this.ready()
})

Meteor.publish('kboAllResults',function(academicYear,subjectId,grade) {
    if (this.userId) {
        let cursor = KboResults.find({academicYear:academicYear,subjectId:RegExp(subjectId),grade:RegExp(grade)})
        return cursor
    } else {
        return this.ready()
    }
})

Meteor.publish('tatRating',function(academicYear,subjectId,tatNo) {
    if (this.userId) {
        let cursor = TatRating.find({academicYear:academicYear,tatNo:tatNo,subjectId:subjectId})
        return cursor
    }
    return this.ready()
})

Meteor.publish('tatResults',function(academicYear,subjectId,tatNo) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = TatResults.find({academicYear:academicYear,subjectId:RegExp(subjectId),tatNo:tatNo,schoolId:school.schoolId})
        return cursor
    } else {
        return this.ready()
    }
})

Meteor.publish('tatAllSeparateResults',function(academicYear,subjectId,tatNo) {
    if (this.userId) {
        let cursor = TatResults.find({academicYear:academicYear,subjectId:RegExp(subjectId),tatNo:tatNo})
        return cursor
    } else {
        return this.ready()
    }
})

Meteor.publish('tatAllResults',function(academicYear,subjectId) {
    if (this.userId) {
        let cursor = TatResults.find({academicYear:academicYear,subjectId:RegExp(subjectId),position:{$ne:"intern"}})
        return cursor
    } else {
        return this.ready()
    }
})

Meteor.publish('uhdResults',function(academicYear) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = UhdResults.find({academicYear:academicYear,schoolId:school.schoolId})
        return cursor
    } else {
        return this.ready()
    }
})

Meteor.publish('uhdStudentsRatings',function(academicYear) {
    if (this.userId) {
        let school = Schools.findOne({userId:this.userId})
        let cursor = UhdStudentRatings.find({academicYear:academicYear,schoolId:school.schoolId})
        return cursor
    }
    return this.ready()
})

Meteor.publish('uhdSchoolRatings',function(academicYear) {
    if (this.userId) {
        let cursor = UhdSchoolRatings.find({academicYear:academicYear})
        return cursor
    }
    return this.ready()
})
