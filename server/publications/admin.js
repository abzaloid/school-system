import { Meteor } from 'meteor/meteor'

Meteor.publish('btsKeys', function(academicYear, quarter){
	if (this.userId) {
		return BtsAnswerKeys.find({academicYear:academicYear,quarter:quarter})	
	} 
	return this.ready()
})

Meteor.publish('btsSchoolKeys', function(academicYear){
	if (this.userId) {
		return BtsAnswerKeys.find({academicYear:academicYear})	
	} 
	return this.ready()
})

Meteor.publish("btsKey", function(keyId) {
	if (this.userId) {
		return BtsAnswerKeys.find({_id:keyId})
	}
	return this.ready()
})

Meteor.publish('btsObjectivesList',function(academicYear,quarter) {
    if (this.userId) {
        return BtsObjectivesList.find({academicYear:academicYear,quarter:quarter})
    }
    return this.ready()
})

Meteor.publish("btsObjective", function(objectiveId) {
	if (this.userId) {
		return BtsObjectivesList.find({_id:objectiveId})
	}
	return this.ready()
})

Meteor.publish('lessonObjectives',function() {
    if (this.userId) {
        return LessonObjectives.find()
    }
    return this.ready()
})

Meteor.publish("lessonObjective", function(objectiveId) {
    if (this.userId) {
        return LessonObjectives.find({_id:objectiveId})
    }
    return this.ready()
})

Meteor.publish('tatKeys', function(academicYear,tatNo){
	if (this.userId) {
		return TatAnswerKeys.find({academicYear:academicYear,tatNo:tatNo})	
	} 
	return this.ready()
})

Meteor.publish('tatSchoolKeys', function(academicYear){
	if (this.userId) {
		return TatAnswerKeys.find({academicYear:academicYear})	
	} 
	return this.ready()
})

Meteor.publish("tatKey",function (id) {
	if (this.userId) {
		return TatAnswerKeys.find({_id: id})
	}
	return this.ready()
})

Meteor.publish('kboKeys', function(academicYear,kboNo){
	if (this.userId) {
		return KboKeys.find({academicYear:academicYear,kboNo:kboNo})	
	} 
	return this.ready()
})

Meteor.publish('kboSchoolKeys', function(academicYear){
	if (this.userId) {
		return KboKeys.find({academicYear:academicYear})	
	} 
	return this.ready()
})

Meteor.publish("kboKey",function (id) {
	if (this.userId) {
		return KboKeys.find({_id: id})
	}
	return this.ready()
})

Meteor.publish("configs",function() {
	if (this.userId) {
		return Configs.find()
	}
	return this.ready()
})