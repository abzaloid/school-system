import { check} from "../multipleChoiceChecker";
import { parseAnswerKey } from "../multipleChoiceChecker";
/*
* метод для загрузки текст файла bts
* */

export const upload = (academicYear,btsNo,day,schoolId,results) => {
    _.each(results,(studentObj) => {
        let student = Students.findOne({studentId:parseInt(studentObj.studentId)});

        // getting an answerKey
        let answerKey = BtsAnswerKeys.findOne({
            academicYear: academicYear,
            quarter: btsNo,
            day: day,
            variant: studentObj.variant,
            grade: student.grade
        });

        if (!student || student.schoolId != schoolId || !answerKey)
            return;

        // creating student details for storing in db
        let studentRecord = {
            academicYear: academicYear,
            btsNo: btsNo,
            studentId: student.studentId,
            schoolId: schoolId,
            name: student.name,
            surname: student.surname,
            grade: student.grade,
            division: student.division,
            languageGroup: student.languageGroup,
            elective1: student.elective1,
            elective2: student.elective2,
            total: 0
        }

        // if (student.grade == '7') {
        //     studentRecord.variant_day_1 = answerKey.variant
        //     studentRecord.day_1_keys = studentObj.keys
        //
        //     if (studentRecord.languageGroup == "kaz") {
        //         studentRecord["kazakh"] = check(parseAnswerKey(answerKey.kazakh_kaz), studentObj.keys.slice(0,100))
        //
        //     } else if (studentRecord.languageGroup == "rus") {
        //         studentRecord["kazakh"] = check(parseAnswerKey(answerKey.kazakh_rus), studentObj.keys.slice(0,100))
        //
        //     }
        //     studentRecord["english"] = check(parseAnswerKey(answerKey.english), studentObj.keys.slice(100,200))
        //     studentRecord["algebra"] = check(parseAnswerKey(answerKey.algebra), studentObj.keys.slice(200,250))
        //     studentRecord["physics"] = check(parseAnswerKey(answerKey.physics), studentObj.keys.slice(250,300))
        //
        //     if (studentRecord.languageGroup == "kaz") {
        //         studentRecord["kazakh_history"] = check(parseAnswerKey(answerKey.kazakh_history_kaz), studentObj.keys.slice(300,350))
        //     } else if (studentRecord.languageGroup == "rus") {
        //         studentRecord["kazakh_history"] = check(parseAnswerKey(answerKey.kazakh_history_rus), studentObj.keys.slice(300,350))
        //     }
        //
        //     studentRecord["day_1_total"] = studentRecord["kazakh"] + studentRecord["english"] + studentRecord["algebra"] + studentRecord["physics"] + studentRecord["kazakh_history"]
        //     studentRecord["total"] += studentRecord["day_1_total"]
        // }
        // else {

            if (day == '2') {
                console.log("#####")
                console.log('day:',day)
                console.log('1:',studentRecord.elective1)
                console.log('2:',studentRecord.elective2)

                studentRecord.variant_day_2 = answerKey.variant
                studentRecord.day_2_keys = studentObj.keys

                // studentRecord["algebra"] = check(parseAnswerKey(answerKey.algebra), studentObj.keys.slice(0,50))
                // studentRecord["geometry"] = check(parseAnswerKey(answerKey.geometry), studentObj.keys.slice(50,100))
                // studentRecord["computer"] = check(parseAnswerKey(answerKey.computer), studentObj.keys.slice(100,150))
                // studentRecord["turkish"] = check(parseAnswerKey(answerKey.turkish), studentObj.keys.slice(150,250))
                // studentRecord["world_history"] = check(parseAnswerKey(answerKey.world_history), studentObj.keys.slice(250,300))
                // studentRecord["kazakh_history"] = check(parseAnswerKey(answerKey.kazakh_history), studentObj.keys.slice(300,350))
                // studentRecord["geography"] = check(parseAnswerKey(answerKey.geography), studentObj.keys.slice(350,400))

                studentRecord["russian"] = check(parseAnswerKey(answerKey.russian), studentObj.keys.slice(0,100));
                studentRecord["turkish"] = check(parseAnswerKey(answerKey.turkish), studentObj.keys.slice(100,200));

                if (studentRecord.elective1 == '02') studentRecord.physics = check(parseAnswerKey(answerKey.physics), studentObj.keys.slice(200,300));
                if (studentRecord.elective1 == '03') studentRecord.chemistry = check(parseAnswerKey(answerKey.chemistry), studentObj.keys.slice(200,300));
                if (studentRecord.elective1 == '04') studentRecord.biology = check(parseAnswerKey(answerKey.biology), studentObj.keys.slice(200,300));
                if (studentRecord.elective1 == '06') studentRecord.geography = check(parseAnswerKey(answerKey.geography), studentObj.keys.slice(200,300));
                if (studentRecord.elective1 == '07') studentRecord.world_history = check(parseAnswerKey(answerKey.world_history), studentObj.keys.slice(200,300));
                if (studentRecord.elective1 == '08') studentRecord.computer = check(parseAnswerKey(answerKey.computer), studentObj.keys.slice(200,300));

                if (studentRecord.elective2 == '02') studentRecord.physics = check(parseAnswerKey(answerKey.physics), studentObj.keys.slice(300,400));
                if (studentRecord.elective2 == '03') studentRecord.chemistry = check(parseAnswerKey(answerKey.chemistry), studentObj.keys.slice(300,400))
                if (studentRecord.elective2 == '04') studentRecord.biology = check(parseAnswerKey(answerKey.biology), studentObj.keys.slice(300,400))
                if (studentRecord.elective2 == '06') studentRecord.geography = check(parseAnswerKey(answerKey.geography), studentObj.keys.slice(300,400));
                if (studentRecord.elective2 == '07') studentRecord.world_history = check(parseAnswerKey(answerKey.world_history), studentObj.keys.slice(300,400))
                if (studentRecord.elective2 == '08') studentRecord.computer = check(parseAnswerKey(answerKey.computer), studentObj.keys.slice(300,400))

                studentRecord["day_2_total"] = studentRecord["russian"] + studentRecord["turkish"] + (studentRecord["physics"] || 0) + (studentRecord["chemistry"] || 0) + (studentRecord["biology"] || 0) + (studentRecord["geography"] || 0) + (studentRecord["world_history"] || 0) + (studentRecord["computer"] || 0);
                studentRecord["total"] += studentRecord["day_2_total"];
            } else {
                studentRecord.variant_day_1 = answerKey.variant
                studentRecord.day_1_keys = studentObj.keys

                // studentRecord["physics"] = check(parseAnswerKey(answerKey.physics), studentObj.keys.slice(0,50))
                // studentRecord["chemistry"] = check(parseAnswerKey(answerKey.chemistry), studentObj.keys.slice(50,100))
                // studentRecord["biology"] = check(parseAnswerKey(answerKey.biology), studentObj.keys.slice(100,150))
                // studentRecord["english"] = check(parseAnswerKey(answerKey.english), studentObj.keys.slice(150,250))
                // if (studentRecord.languageGroup == "kaz") {
                //     studentRecord["kazakh"] = check(parseAnswerKey(answerKey.kazakh_kaz), studentObj.keys.slice(250,300))
                //     studentRecord["kazakh_literature"] = check(parseAnswerKey(answerKey.kazakh_literature_kaz), studentObj.keys.slice(300,350))
                // } else if (studentRecord.languageGroup == "rus") {
                //     studentRecord["kazakh"] = check(parseAnswerKey(answerKey.kazakh_rus), studentObj.keys.slice(250,300))
                //     studentRecord["kazakh_literature"] = check(parseAnswerKey(answerKey.kazakh_literature_rus), studentObj.keys.slice(300,350))
                // }
                // studentRecord["russian"] = check(parseAnswerKey(answerKey.russian), studentObj.keys.slice(350,400))
                // studentRecord["day_1_total"] = studentRecord["physics"] + studentRecord["chemistry"] + studentRecord["biology"] + studentRecord["english"] + studentRecord["kazakh"] + studentRecord["kazakh_literature"] + studentRecord["russian"]

                studentRecord["algebra"] = check(parseAnswerKey(answerKey.algebra), studentObj.keys.slice(0,75));
                studentRecord["geometry"] = check(parseAnswerKey(answerKey.geometry), studentObj.keys.slice(75,100));
                if (studentRecord.languageGroup == "kaz") {
                    studentRecord["kazakh"] = check(parseAnswerKey(answerKey.kazakh_kaz), studentObj.keys.slice(100,200));
                } else if (studentRecord.languageGroup == "rus") {
                    studentRecord["kazakh"] = check(parseAnswerKey(answerKey.kazakh_rus), studentObj.keys.slice(100,200));
                }
                studentRecord["english"] = check(parseAnswerKey(answerKey.english), studentObj.keys.slice(200,300));
                studentRecord["kazakh_history"] = check(parseAnswerKey(answerKey.kazakh_history), studentObj.keys.slice(300,400))

                studentRecord["day_1_total"] = studentRecord["algebra"] + studentRecord["geometry"] + studentRecord["kazakh"] + studentRecord["english"] + studentRecord["kazakh_history"];
                studentRecord["total"] += studentRecord["day_1_total"];
            }
        // }

        let recordInDb = BtsResults.findOne({academicYear:academicYear,btsNo:btsNo,studentId:student.studentId,schoolId:schoolId})

        if (recordInDb) {
            if (day == 1) {
                studentRecord["total"] = studentRecord["day_1_total"] + (recordInDb["day_2_total"] || 0)
            } else {
                studentRecord["total"] = studentRecord["day_2_total"] + (recordInDb["day_1_total"] || 0)
            }
            BtsResults.update({_id:recordInDb._id},{$set:studentRecord})
        } else {
            BtsResults.insert(studentRecord)
        }
    })
}
