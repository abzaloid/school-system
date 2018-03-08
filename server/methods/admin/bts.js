import { calculateRating } from "../../modules/bts/rating";
import { recheck } from "../../modules/bts/recheck";
import { calculateObj } from "../../modules/bts/calculateObj"


Meteor.methods({
    "BtsAnswerKeys.Insert": function (answerKeys) {
        if (!this.userId || !Roles.userIsInRole(this.userId, ['admin']))
            throw new Meteor.Error(401, 'Please login as administrator')
        
            //check if same variant exists in database
        sameVariant = BtsAnswerKeys.findOne({
            academicYear: answerKeys.academicYear,
            grade: answerKeys.grade,
            quarter: answerKeys.quarter,
            day: answerKeys.day,
            variant: answerKeys.variant
        })
        if (sameVariant)
            throw new Meteor.Error(322, 'Answer keys with same variant already exists please change variant')
        keysId = BtsAnswerKeys.insert(answerKeys)
        return keysId;
    },

    "BtsAnswerKeys.Delete": function(id) {
            if(Roles.userIsInRole(this.userId,['admin'])) {
                let answerKeys = BtsAnswerKeys.findOne({_id:id})
                if(answerKeys) {
                    BtsAnswerKeys.remove({_id:id})
                }
            } else {
                throw new Meteor.Error('auth-error','Admin rights required.')
            }
        },

    "BtsAnswerKeys.Update": function(id,answerKeys) {
        if (!this.userId || !Roles.userIsInRole(this.userId, ['admin']))
            throw new Meteor.Error(401, 'Please login as administrator')
        
        sameVariant = BtsAnswerKeys.findOne({_id:id});
        if (sameVariant) {
            BtsAnswerKeys.update({_id:id},{$set:answerKeys})
            let config = Configs.findOne({_id:"btsUpload"})
            if (config[sameVariant.quarter] == "enabled") {
                //let schools = Schools.find().fetch()
                
                // recheck student results
                recheck(sameVariant.academicYear,sameVariant.quarter,sameVariant.variant,sameVariant.day)
                //
                console.log("admin: calculated rating for schools")
            }
        }
    },

    "BtsObjectives.Insert": function (objectives) {
        if (!this.userId || !Roles.userIsInRole(this.userId, ['admin']))
            throw new Meteor.Error(401, 'Please login as administrator')
        
            //check if same variant exists in database
        sameObjective = BtsObjectivesList.findOne({
            academicYear: objectives.academicYear,
            grade: objectives.grade,
            quarter: objectives.quarter,
            variant1: objectives.variant1,
            variant2: objectives.variant2,
            objectiveId: objectives.objectiveId
        })
        if (sameObjective)
            throw new Meteor.Error(322, 'same objective already exists')
        objectiveId = BtsObjectivesList.insert(objectives)
        return objectiveId;
    },

    "BtsObjectives.Delete": function(id) {
            if(Roles.userIsInRole(this.userId,['admin'])) {
                let objective = BtsObjectivesList.findOne({_id:id})
                if(objective) {
                    BtsObjectivesList.remove({_id:id})
                }
            } else {
                throw new Meteor.Error('auth-error','Admin rights required.')
            }
    },

    "BtsObjectives.Update": function(id,objectives) {
        if (!this.userId || !Roles.userIsInRole(this.userId, ['admin']))
            throw new Meteor.Error(401, 'Please login as administrator')
        
        sameObjective = BtsObjectivesList.findOne({_id:id});
        if (sameObjective) {
            BtsObjectivesList.update({_id:id},{$set:objectives})
        }
    },

    'BtsObjectives.Calculate':function(academicYear,btsNo,grade) {
        if (!this.userId || !Roles.userIsInRole(this.userId, ['admin']))
            throw new Meteor.Error(401, 'Please login as administrator')

        bts = Configs.findOne({
            _id: 'btsUpload'
        });
        if (bts[btsNo] == 'disabled')
            throw new Meteor.Error('upload-disabled', 'БТС жүктеу жабық.Өтініш, IT Department-ке хабарласыңыз.')
                if (!Roles.userIsInRole(this.userId,"admin"))
            throw new Meteor.Error('access-denied', 'Access denied!')
            calculateObj(academicYear,btsNo,grade)
            //console.log("it's ok !")

    }
});
