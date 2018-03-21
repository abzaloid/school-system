import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './btsStudentResults.html';
import { parseStudentKey } from "./parseAnswerKeyForStudent";;
import { parseAnswerKeyForStudent } from "./parseAnswerKeyForStudent";

Template.btsStudentResults.onCreated(function(){
    let template = this
    template.day = new ReactiveVar('1');
    template.autorun(()=>{
        template.subscribe("btsStudentResults",academicYear.get(),FlowRouter.getParam("btsNo"))
        template.subscribe("btsKeys",academicYear.get(),FlowRouter.getParam("btsNo"))
    })
})

Template.btsStudentResults.helpers({
    answerPhysicsKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parsePhysicsKeys = parseAnswerKeyForStudent(answerKeysDay1.physics)
        let correctKeys = {};

        correctKeys.first = parsePhysicsKeys[0];
        correctKeys.second = parsePhysicsKeys[1];
        correctKeys.third = parsePhysicsKeys[2];
        correctKeys.fourth = parsePhysicsKeys[3];
        correctKeys.fifth = parsePhysicsKeys[4];
        correctKeys.sixth = parsePhysicsKeys[5];
        correctKeys.seventh = parsePhysicsKeys[6];
        correctKeys.eighth = parsePhysicsKeys[7];
        correctKeys.ninth = parsePhysicsKeys[8];
        correctKeys.tenth = parsePhysicsKeys[9];

        return correctKeys;
    },
    answerChemistryKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseChemistryKeys = parseAnswerKeyForStudent(answerKeysDay1.chemistry)
        let correctKeys = {};

        correctKeys.first = parseChemistryKeys[0];
        correctKeys.second = parseChemistryKeys[1];
        correctKeys.third = parseChemistryKeys[2];
        correctKeys.fourth = parseChemistryKeys[3];
        correctKeys.fifth = parseChemistryKeys[4];
        correctKeys.sixth = parseChemistryKeys[5];
        correctKeys.seventh = parseChemistryKeys[6];
        correctKeys.eighth = parseChemistryKeys[7];
        correctKeys.ninth = parseChemistryKeys[8];
        correctKeys.tenth = parseChemistryKeys[9];

        return correctKeys;
    },
    answerBiologyKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseBiologyKeys = parseAnswerKeyForStudent(answerKeysDay1.biology)
        let correctKeys = {};

        correctKeys.first = parseBiologyKeys[0];
        correctKeys.second = parseBiologyKeys[1];
        correctKeys.third = parseBiologyKeys[2];
        correctKeys.fourth = parseBiologyKeys[3];
        correctKeys.fifth = parseBiologyKeys[4];
        correctKeys.sixth = parseBiologyKeys[5];
        correctKeys.seventh = parseBiologyKeys[6];
        correctKeys.eighth = parseBiologyKeys[7];
        correctKeys.ninth = parseBiologyKeys[8];
        correctKeys.tenth = parseBiologyKeys[9];

        return correctKeys;
    },
    answerEnglishKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseEnglishKeys = parseAnswerKeyForStudent(answerKeysDay1.english)
        let correctKeys = {};

        correctKeys.first = parseEnglishKeys[0];
        correctKeys.second = parseEnglishKeys[1];
        correctKeys.third = parseEnglishKeys[2];
        correctKeys.fourth = parseEnglishKeys[3];
        correctKeys.fifth = parseEnglishKeys[4];
        correctKeys.sixth = parseEnglishKeys[5];
        correctKeys.seventh = parseEnglishKeys[6];
        correctKeys.eighth = parseEnglishKeys[7];
        correctKeys.ninth = parseEnglishKeys[8];
        correctKeys.tenth = parseEnglishKeys[9];
        correctKeys.eleven = parseEnglishKeys[10];
        correctKeys.twelve = parseEnglishKeys[11];
        correctKeys.thirteen = parseEnglishKeys[12];
        correctKeys.fourteen = parseEnglishKeys[13];
        correctKeys.fifteen = parseEnglishKeys[14];
        correctKeys.sixteen = parseEnglishKeys[15];
        correctKeys.seventeen = parseEnglishKeys[16];
        correctKeys.eighteen = parseEnglishKeys[17];
        correctKeys.nineteen = parseEnglishKeys[18];
        correctKeys.twenty = parseEnglishKeys[19];

        return correctKeys;
    },
    answerKazakhKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseKazakhKeys = {}
        if (cursor.languageGroup == 'kaz'){
            parseKazakhKeys = parseAnswerKeyForStudent(answerKeysDay1.kazakh_kaz)
        }
        else {
            parseKazakhKeys = parseAnswerKeyForStudent(answerKeysDay1.kazakh_rus)
        }
        let correctKeys = {};

        correctKeys.first = parseKazakhKeys[0];
        correctKeys.second = parseKazakhKeys[1];
        correctKeys.third = parseKazakhKeys[2];
        correctKeys.fourth = parseKazakhKeys[3];
        correctKeys.fifth = parseKazakhKeys[4];
        correctKeys.sixth = parseKazakhKeys[5];
        correctKeys.seventh = parseKazakhKeys[6];
        correctKeys.eighth = parseKazakhKeys[7];
        correctKeys.ninth = parseKazakhKeys[8];
        correctKeys.tenth = parseKazakhKeys[9];

        return correctKeys;
    },
    answerKazLitKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseKazLitKeys = {}
        if (cursor.languageGroup == 'kaz'){
            parseKazLitKeys = parseAnswerKeyForStudent(answerKeysDay1.kazakh_literature_kaz)
        }
        else {
            parseKazLitKeys = parseAnswerKeyForStudent(answerKeysDay1.kazakh_literature_rus)
        }
        let correctKeys = {};

        correctKeys.first = parseKazLitKeys[0];
        correctKeys.second = parseKazLitKeys[1];
        correctKeys.third = parseKazLitKeys[2];
        correctKeys.fourth = parseKazLitKeys[3];
        correctKeys.fifth = parseKazLitKeys[4];
        correctKeys.sixth = parseKazLitKeys[5];
        correctKeys.seventh = parseKazLitKeys[6];
        correctKeys.eighth = parseKazLitKeys[7];
        correctKeys.ninth = parseKazLitKeys[8];
        correctKeys.tenth = parseKazLitKeys[9];

        return correctKeys;
    },
    answerRussianKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay1 = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseRussianKeys = parseAnswerKeyForStudent(answerKeysDay1.russian)
        let correctKeys = {};

        correctKeys.first = parseRussianKeys[0];
        correctKeys.second = parseRussianKeys[1];
        correctKeys.third = parseRussianKeys[2];
        correctKeys.fourth = parseRussianKeys[3];
        correctKeys.fifth = parseRussianKeys[4];
        correctKeys.sixth = parseRussianKeys[5];
        correctKeys.seventh = parseRussianKeys[6];
        correctKeys.eighth = parseRussianKeys[7];
        correctKeys.ninth = parseRussianKeys[8];
        correctKeys.tenth = parseRussianKeys[9];

        return correctKeys;
    },
    answerAlgebraKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseAlgebraKeys = parseAnswerKeyForStudent(answerKeysDay2.algebra)
        let correctKeys = {};

        correctKeys.first = parseAlgebraKeys[0];
        correctKeys.second = parseAlgebraKeys[1];
        correctKeys.third = parseAlgebraKeys[2];
        correctKeys.fourth = parseAlgebraKeys[3];
        correctKeys.fifth = parseAlgebraKeys[4];
        correctKeys.sixth = parseAlgebraKeys[5];
        correctKeys.seventh = parseAlgebraKeys[6];
        correctKeys.eighth = parseAlgebraKeys[7];
        correctKeys.ninth = parseAlgebraKeys[8];
        correctKeys.tenth = parseAlgebraKeys[9];

        return correctKeys;
    },
    answerGeometryKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseGeometryKeys = parseAnswerKeyForStudent(answerKeysDay2.geometry)
        let correctKeys = {};

        correctKeys.first = parseGeometryKeys[0];
        correctKeys.second = parseGeometryKeys[1];
        correctKeys.third = parseGeometryKeys[2];
        correctKeys.fourth = parseGeometryKeys[3];
        correctKeys.fifth = parseGeometryKeys[4];
        correctKeys.sixth = parseGeometryKeys[5];
        correctKeys.seventh = parseGeometryKeys[6];
        correctKeys.eighth = parseGeometryKeys[7];
        correctKeys.ninth = parseGeometryKeys[8];
        correctKeys.tenth = parseGeometryKeys[9];

        return correctKeys;
    },
    answerComputerKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseComputerKeys = parseAnswerKeyForStudent(answerKeysDay2.computer)
        let correctKeys = {};

        correctKeys.first = parseComputerKeys[0];
        correctKeys.second = parseComputerKeys[1];
        correctKeys.third = parseComputerKeys[2];
        correctKeys.fourth = parseComputerKeys[3];
        correctKeys.fifth = parseComputerKeys[4];
        correctKeys.sixth = parseComputerKeys[5];
        correctKeys.seventh = parseComputerKeys[6];
        correctKeys.eighth = parseComputerKeys[7];
        correctKeys.ninth = parseComputerKeys[8];
        correctKeys.tenth = parseComputerKeys[9];

        return correctKeys;
    },
    answerTurkishKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseTurkishKeys = parseAnswerKeyForStudent(answerKeysDay2.turkish)
        let correctKeys = {};

        correctKeys.first = parseTurkishKeys[0];
        correctKeys.second = parseTurkishKeys[1];
        correctKeys.third = parseTurkishKeys[2];
        correctKeys.fourth = parseTurkishKeys[3];
        correctKeys.fifth = parseTurkishKeys[4];
        correctKeys.sixth = parseTurkishKeys[5];
        correctKeys.seventh = parseTurkishKeys[6];
        correctKeys.eighth = parseTurkishKeys[7];
        correctKeys.ninth = parseTurkishKeys[8];
        correctKeys.tenth = parseTurkishKeys[9];
        correctKeys.eleven = parseTurkishKeys[10];
        correctKeys.twelve = parseTurkishKeys[11];
        correctKeys.thirteen = parseTurkishKeys[12];
        correctKeys.fourteen = parseTurkishKeys[13];
        correctKeys.fifteen = parseTurkishKeys[14];
        correctKeys.sixteen = parseTurkishKeys[15];
        correctKeys.seventeen = parseTurkishKeys[16];
        correctKeys.eighteen = parseTurkishKeys[17];
        correctKeys.nineteen = parseTurkishKeys[18];
        correctKeys.twenty = parseTurkishKeys[19];

        return correctKeys;
    },
    answerWHistoryKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseWHistoryKeys = parseAnswerKeyForStudent(answerKeysDay2.world_history)
        let correctKeys = {};

        correctKeys.first = parseWHistoryKeys[0];
        correctKeys.second = parseWHistoryKeys[1];
        correctKeys.third = parseWHistoryKeys[2];
        correctKeys.fourth = parseWHistoryKeys[3];
        correctKeys.fifth = parseWHistoryKeys[4];
        correctKeys.sixth = parseWHistoryKeys[5];
        correctKeys.seventh = parseWHistoryKeys[6];
        correctKeys.eighth = parseWHistoryKeys[7];
        correctKeys.ninth = parseWHistoryKeys[8];
        correctKeys.tenth = parseWHistoryKeys[9];

        return correctKeys;
    },
    answerKazHistoryKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseKazHistoryKeys = parseAnswerKeyForStudent(answerKeysDay2.kazakh_history)
        let correctKeys = {};

        correctKeys.first = parseKazHistoryKeys[0];
        correctKeys.second = parseKazHistoryKeys[1];
        correctKeys.third = parseKazHistoryKeys[2];
        correctKeys.fourth = parseKazHistoryKeys[3];
        correctKeys.fifth = parseKazHistoryKeys[4];
        correctKeys.sixth = parseKazHistoryKeys[5];
        correctKeys.seventh = parseKazHistoryKeys[6];
        correctKeys.eighth = parseKazHistoryKeys[7];
        correctKeys.ninth = parseKazHistoryKeys[8];
        correctKeys.tenth = parseKazHistoryKeys[9];

        return correctKeys;
    },
    answerGeographyKeys() {
        let cursor = BtsResults.findOne()
        let answerKeysDay2 = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let parseGeographyKeys = parseAnswerKeyForStudent(answerKeysDay2.geography)
        let correctKeys = {};

        correctKeys.first = parseGeographyKeys[0];
        correctKeys.second = parseGeographyKeys[1];
        correctKeys.third = parseGeographyKeys[2];
        correctKeys.fourth = parseGeographyKeys[3];
        correctKeys.fifth = parseGeographyKeys[4];
        correctKeys.sixth = parseGeographyKeys[5];
        correctKeys.seventh = parseGeographyKeys[6];
        correctKeys.eighth = parseGeographyKeys[7];
        correctKeys.ninth = parseGeographyKeys[8];
        correctKeys.tenth = parseGeographyKeys[9];

        return correctKeys;
    },

    studentPhysicsKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let studentKeysPhysics = parseStudentKey(parseAnswerKeyForStudent(answerKeys.physics),cursor.day_1_keys.slice(0,50))
        let studentKeys = {};

        studentKeys.first = studentKeysPhysics[0];
        studentKeys.second = studentKeysPhysics[1];
        studentKeys.third = studentKeysPhysics[2];
        studentKeys.fourth = studentKeysPhysics[3];
        studentKeys.fifth = studentKeysPhysics[4];
        studentKeys.sixth = studentKeysPhysics[5];
        studentKeys.seventh = studentKeysPhysics[6];
        studentKeys.eighth = studentKeysPhysics[7];
        studentKeys.ninth = studentKeysPhysics[8];
        studentKeys.tenth = studentKeysPhysics[9];

        return studentKeys;
    },
    studentChemistryKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let studentKeysChemistry = parseStudentKey(parseAnswerKeyForStudent(answerKeys.chemistry),cursor.day_1_keys.slice(50,100))
        let studentKeys = {};

        studentKeys.first = studentKeysChemistry[0];
        studentKeys.second = studentKeysChemistry[1];
        studentKeys.third = studentKeysChemistry[2];
        studentKeys.fourth = studentKeysChemistry[3];
        studentKeys.fifth = studentKeysChemistry[4];
        studentKeys.sixth = studentKeysChemistry[5];
        studentKeys.seventh = studentKeysChemistry[6];
        studentKeys.eighth = studentKeysChemistry[7];
        studentKeys.ninth = studentKeysChemistry[8];
        studentKeys.tenth = studentKeysChemistry[9];

        return studentKeys;
    },
    studentBiologyKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let studentKeysBiology = parseStudentKey(parseAnswerKeyForStudent(answerKeys.biology),cursor.day_1_keys.slice(100,150))
        let studentKeys = {};

        studentKeys.first = studentKeysBiology[0];
        studentKeys.second = studentKeysBiology[1];
        studentKeys.third = studentKeysBiology[2];
        studentKeys.fourth = studentKeysBiology[3];
        studentKeys.fifth = studentKeysBiology[4];
        studentKeys.sixth = studentKeysBiology[5];
        studentKeys.seventh = studentKeysBiology[6];
        studentKeys.eighth = studentKeysBiology[7];
        studentKeys.ninth = studentKeysBiology[8];
        studentKeys.tenth = studentKeysBiology[9];

        return studentKeys;
    },
    studentEnglishKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let studentKeysEnglish = parseStudentKey(parseAnswerKeyForStudent(answerKeys.english),cursor.day_1_keys.slice(150,250))
        let studentKeys = {};

        studentKeys.first = studentKeysEnglish[0];
        studentKeys.second = studentKeysEnglish[1];
        studentKeys.third = studentKeysEnglish[2];
        studentKeys.fourth = studentKeysEnglish[3];
        studentKeys.fifth = studentKeysEnglish[4];
        studentKeys.sixth = studentKeysEnglish[5];
        studentKeys.seventh = studentKeysEnglish[6];
        studentKeys.eighth = studentKeysEnglish[7];
        studentKeys.ninth = studentKeysEnglish[8];
        studentKeys.tenth = studentKeysEnglish[9];
        studentKeys.eleven = studentKeysEnglish[10];
        studentKeys.twelve = studentKeysEnglish[11];
        studentKeys.thirteen = studentKeysEnglish[12];
        studentKeys.fourteen = studentKeysEnglish[13];
        studentKeys.fifteen = studentKeysEnglish[14];
        studentKeys.sixteen = studentKeysEnglish[15];
        studentKeys.seventeen = studentKeysEnglish[16];
        studentKeys.eighteen = studentKeysEnglish[17];
        studentKeys.nineteen = studentKeysEnglish[18];
        studentKeys.twenty = studentKeysEnglish[19];

        return studentKeys;
    },
    studentKazakhKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseKazakhKeys = {}
        if (cursor.languageGroup == 'kaz'){
            parseKazakhKeys = parseAnswerKeyForStudent(answerKeys.kazakh_kaz)
        }
        else {
            parseKazakhKeys = parseAnswerKeyForStudent(answerKeys.kazakh_rus)
        }
        let studentKeysKazakh = parseStudentKey(parseKazakhKeys,cursor.day_1_keys.slice(250,300))
        let studentKeys = {};

        studentKeys.first = studentKeysKazakh[0];
        studentKeys.second = studentKeysKazakh[1];
        studentKeys.third = studentKeysKazakh[2];
        studentKeys.fourth = studentKeysKazakh[3];
        studentKeys.fifth = studentKeysKazakh[4];
        studentKeys.sixth = studentKeysKazakh[5];
        studentKeys.seventh = studentKeysKazakh[6];
        studentKeys.eighth = studentKeysKazakh[7];
        studentKeys.ninth = studentKeysKazakh[8];
        studentKeys.tenth = studentKeysKazakh[9];

        return studentKeys;
    },
    studentKazLitKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let parseKazLitKeys = {}
        if (cursor.languageGroup == 'kaz'){
            parseKazLitKeys = parseAnswerKeyForStudent(answerKeys.kazakh_literature_kaz)
        }
        else {
            parseKazLitKeys = parseAnswerKeyForStudent(answerKeys.kazakh_literature_rus)
        }
        let studentKeysKazLit = parseStudentKey(parseKazLitKeys,cursor.day_1_keys.slice(300,350))
        let studentKeys = {};

        studentKeys.first = studentKeysKazLit[0];
        studentKeys.second = studentKeysKazLit[1];
        studentKeys.third = studentKeysKazLit[2];
        studentKeys.fourth = studentKeysKazLit[3];
        studentKeys.fifth = studentKeysKazLit[4];
        studentKeys.sixth = studentKeysKazLit[5];
        studentKeys.seventh = studentKeysKazLit[6];
        studentKeys.eighth = studentKeysKazLit[7];
        studentKeys.ninth = studentKeysKazLit[8];
        studentKeys.tenth = studentKeysKazLit[9];

        return studentKeys;
    },
    studentRussianKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_1})
        let studentKeysRussian = parseStudentKey(parseAnswerKeyForStudent(answerKeys.russian),cursor.day_1_keys.slice(350,400))
        let studentKeys = {};

        studentKeys.first = studentKeysRussian[0];
        studentKeys.second = studentKeysRussian[1];
        studentKeys.third = studentKeysRussian[2];
        studentKeys.fourth = studentKeysRussian[3];
        studentKeys.fifth = studentKeysRussian[4];
        studentKeys.sixth = studentKeysRussian[5];
        studentKeys.seventh = studentKeysRussian[6];
        studentKeys.eighth = studentKeysRussian[7];
        studentKeys.ninth = studentKeysRussian[8];
        studentKeys.tenth = studentKeysRussian[9];

        return studentKeys;
    },
    studentAlgebraKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentKeysAlgebra = parseStudentKey(parseAnswerKeyForStudent(answerKeys.algebra),cursor.day_2_keys.slice(0,50))
        let studentKeys = {};

        studentKeys.first = studentKeysAlgebra[0];
        studentKeys.second = studentKeysAlgebra[1];
        studentKeys.third = studentKeysAlgebra[2];
        studentKeys.fourth = studentKeysAlgebra[3];
        studentKeys.fifth = studentKeysAlgebra[4];
        studentKeys.sixth = studentKeysAlgebra[5];
        studentKeys.seventh = studentKeysAlgebra[6];
        studentKeys.eighth = studentKeysAlgebra[7];
        studentKeys.ninth = studentKeysAlgebra[8];
        studentKeys.tenth = studentKeysAlgebra[9];

        return studentKeys;
    },
    studentGeometryKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentKeysGeometry = parseStudentKey(parseAnswerKeyForStudent(answerKeys.geometry),cursor.day_2_keys.slice(50,100))
        let studentKeys = {};

        studentKeys.first = studentKeysGeometry[0];
        studentKeys.second = studentKeysGeometry[1];
        studentKeys.third = studentKeysGeometry[2];
        studentKeys.fourth = studentKeysGeometry[3];
        studentKeys.fifth = studentKeysGeometry[4];
        studentKeys.sixth = studentKeysGeometry[5];
        studentKeys.seventh = studentKeysGeometry[6];
        studentKeys.eighth = studentKeysGeometry[7];
        studentKeys.ninth = studentKeysGeometry[8];
        studentKeys.tenth = studentKeysGeometry[9];

        return studentKeys;
    },
    studentComputerKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentKeysComputer = parseStudentKey(parseAnswerKeyForStudent(answerKeys.computer),cursor.day_2_keys.slice(100,150))
        let studentKeys = {};

        studentKeys.first = studentKeysComputer[0];
        studentKeys.second = studentKeysComputer[1];
        studentKeys.third = studentKeysComputer[2];
        studentKeys.fourth = studentKeysComputer[3];
        studentKeys.fifth = studentKeysComputer[4];
        studentKeys.sixth = studentKeysComputer[5];
        studentKeys.seventh = studentKeysComputer[6];
        studentKeys.eighth = studentKeysComputer[7];
        studentKeys.ninth = studentKeysComputer[8];
        studentKeys.tenth = studentKeysComputer[9];

        return studentKeys;
    },
    studentTurkishKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentKeysTurkish = parseStudentKey(parseAnswerKeyForStudent(answerKeys.turkish),cursor.day_2_keys.slice(150,250))
        let studentKeys = {};

        studentKeys.first = studentKeysTurkish[0];
        studentKeys.second = studentKeysTurkish[1];
        studentKeys.third = studentKeysTurkish[2];
        studentKeys.fourth = studentKeysTurkish[3];
        studentKeys.fifth = studentKeysTurkish[4];
        studentKeys.sixth = studentKeysTurkish[5];
        studentKeys.seventh = studentKeysTurkish[6];
        studentKeys.eighth = studentKeysTurkish[7];
        studentKeys.ninth = studentKeysTurkish[8];
        studentKeys.tenth = studentKeysTurkish[9];
        studentKeys.eleven = studentKeysTurkish[10];
        studentKeys.twelve = studentKeysTurkish[11];
        studentKeys.thirteen = studentKeysTurkish[12];
        studentKeys.fourteen = studentKeysTurkish[13];
        studentKeys.fifteen = studentKeysTurkish[14];
        studentKeys.sixteen = studentKeysTurkish[15];
        studentKeys.seventeen = studentKeysTurkish[16];
        studentKeys.eighteen = studentKeysTurkish[17];
        studentKeys.nineteen = studentKeysTurkish[18];
        studentKeys.twenty = studentKeysTurkish[19];

        return studentKeys;
    },
    studentWHistoryKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentKeysWHistory = parseStudentKey(parseAnswerKeyForStudent(answerKeys.world_history),cursor.day_2_keys.slice(250,300))
        let studentKeys = {};

        studentKeys.first = studentKeysWHistory[0];
        studentKeys.second = studentKeysWHistory[1];
        studentKeys.third = studentKeysWHistory[2];
        studentKeys.fourth = studentKeysWHistory[3];
        studentKeys.fifth = studentKeysWHistory[4];
        studentKeys.sixth = studentKeysWHistory[5];
        studentKeys.seventh = studentKeysWHistory[6];
        studentKeys.eighth = studentKeysWHistory[7];
        studentKeys.ninth = studentKeysWHistory[8];
        studentKeys.tenth = studentKeysWHistory[9];

        return studentKeys;
    },
    studentKazHistoryKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentKeysKazHistory = parseStudentKey(parseAnswerKeyForStudent(answerKeys.kazakh_history),cursor.day_2_keys.slice(300,350))
        let studentKeys = {};

        studentKeys.first = studentKeysKazHistory[0];
        studentKeys.second = studentKeysKazHistory[1];
        studentKeys.third = studentKeysKazHistory[2];
        studentKeys.fourth = studentKeysKazHistory[3];
        studentKeys.fifth = studentKeysKazHistory[4];
        studentKeys.sixth = studentKeysKazHistory[5];
        studentKeys.seventh = studentKeysKazHistory[6];
        studentKeys.eighth = studentKeysKazHistory[7];
        studentKeys.ninth = studentKeysKazHistory[8];
        studentKeys.tenth = studentKeysKazHistory[9];

        return studentKeys;
    },
    studentGeographyKeys() {
        let cursor = BtsResults.findOne();
        let answerKeys = BtsAnswerKeys.findOne({variant:cursor.variant_day_2})
        let studentGeography = parseStudentKey(parseAnswerKeyForStudent(answerKeys.geography),cursor.day_2_keys.slice(350,400))
        let studentKeys = {};

        studentKeys.first = studentGeography[0];
        studentKeys.second = studentGeography[1];
        studentKeys.third = studentGeography[2];
        studentKeys.fourth = studentGeography[3];
        studentKeys.fifth = studentGeography[4];
        studentKeys.sixth = studentGeography[5];
        studentKeys.seventh = studentGeography[6];
        studentKeys.eighth = studentGeography[7];
        studentKeys.ninth = studentGeography[8];
        studentKeys.tenth = studentGeography[9];

        return studentKeys;
    },
    dayOne() {
        return '1' == Template.instance().day.get();
    },
    btsNo() {
        return FlowRouter.getParam("btsNo")
    },
    results() {
        return BtsResults.findOne()
    }
})

Template.btsStudentResults.events({
    'change #select'(event,template) {
        template.day.set(template.find('[name=day]').value)

        let day = FlowRouter.getParam('_id')
    }
})
