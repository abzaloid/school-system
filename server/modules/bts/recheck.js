import { parseAnswerKey } from "../multipleChoiceChecker";
import { check } from "../multipleChoiceChecker";
import { calculateRating } from "./rating";

export const recheck = (academicYear,btsNo,variant,day) => {
    
    let answerKeys = BtsAnswerKeys.findOne({academicYear:academicYear,quarter:btsNo,variant:variant})
    //console.log(answerKeys)

    if (day == 1) {
        let results = BtsResults.find({academicYear:academicYear,btsNo:btsNo,variant_day_1:variant}).fetch()
        //console.log(results.length)

        _.each(results,(result) => {
        result["physics"] = check(parseAnswerKey(answerKeys.physics),result.day_1_keys.slice(0,50))
        result["chemistry"] = check(parseAnswerKey(answerKeys.chemistry),result.day_1_keys.slice(50,100))
        result["biology"] = check(parseAnswerKey(answerKeys.biology),result.day_1_keys.slice(100,150))
        result["english"] = check(parseAnswerKey(answerKeys.english),result.day_1_keys.slice(150,250))
        if (result.languageGroup == 'kaz') {
            result["kazakh"] = check(parseAnswerKey(answerKeys.kazakh_kaz),result.day_1_keys.slice(250,300))
            result["kazakh_literature"] = check(parseAnswerKey(answerKeys.kazakh_literature_kaz),result.day_1_keys.slice(300,350))
        } else if (result.languageGroup == 'rus') {
            result["kazakh"] = check(parseAnswerKey(answerKeys.kazakh_rus),result.day_1_keys.slice(250,300))
            result["kazakh_literature"] = check(parseAnswerKey(answerKeys.kazakh_literature_rus),result.day_1_keys.slice(300,350))
        }
        
        result["russian"] = check(parseAnswerKey(answerKeys.russian),result.day_1_keys.slice(350,400))

        result["day_1_total"] = 0;
        result["total"] = 0;
        result["day_1_total"] = result["physics"] + result["chemistry"] + result["biology"] + result["english"] + result["kazakh"] + result["kazakh_literature"] + result["russian"];
        result["total"] = result["day_1_total"] + result["day_2_total"];
        
        BtsResults.update({_id:result._id},{$set:result})
    })
    } else {
        let results = BtsResults.find({academicYear:academicYear,btsNo:btsNo,variant_day_2:variant}).fetch()
        
        _.each(results,(result) => {
        result["algebra"] = check(parseAnswerKey(answerKey.algebra),result.day_2_keys.slice(0,50))
        result["geometry"] = check(parseAnswerKey(answerKey.geometry),result.day_2_keys.slice(50,100))
        result["computer"] = check(parseAnswerKey(answerKey.computer),result.day_2_keys.slice(100,150))
        result["turkish"] = check(parseAnswerKey(answerKey.turkish),result.day_2_keys.slice(150,250))
        result["world_history"] = check(parseAnswerKey(answerKey.world_history),result.day_2_keys.slice(250,300))
        result["kazakh_history"] = check(parseAnswerKey(answerKey.kazakh_history),result.day_2_keys.keys.slice(300,350))
        result["geography"] = check(parseAnswerKey(answerKey.geography),result.day_2_keys.slice(350,400))

        result["day_2_total"] = 0;
        result["total"] = 0;
        result["day_2_total"] = result["algebra"] + result["geometry"] + result["computer"] + result["turkish"] + result["world_history"] + result["kazakh_history"] + result["geography"];
        result["total"] = result["day_1_total"] + result["day_2_total"];

        BtsResults.update({_id:result._id},{$set:result})
        })
    }

    let schools = Schools.find().fetch()
    _.each(schools,(school) => {
        //console.log("admin: rechek shkol")
        calculateRating(academicYear,btsNo,school.schoolId)
        
    })
}