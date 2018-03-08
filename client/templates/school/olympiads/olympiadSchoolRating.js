import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './olympiadSchoolRating.html';

Template.olympiadSchoolRating.onCreated(function() {
    let template = this
    template.subject = new ReactiveVar("all")
    template.grade = new ReactiveVar("all")
    template.schoolId_select = new ReactiveVar("")
    
    template.subscribe('schools')
    template.subscribe('subjects')
    template.subscribe('olympiads')
    template.autorun(()=>{
        template.subscribe("olympiadRatings",academicYear.get())
    })
})

Template.olympiadSchoolRating.helpers({
    schools()  {
        return Schools.find({},{sort:{schoolId:1}})
    },
    subjects() {
        return Subjects.find({},{sort:{subjectId:1}})
    },
    olympiads(){
        return Olympiads.find()
    },
    results() {
        let subject = new RegExp(Template.instance().subject.get())
        let grade = new RegExp(Template.instance().grade.get())
        let schoolId_select = new RegExp(Template.instance().schoolId_select.get())
        
        return OlympiadRatings.find({
            schoolId: schoolId_select,
            subjectId:subject,
            grade:grade
        },{sort:{regTotalOlymp:-1, schoolId:1}
        })
    },
})

Template.olympiadSchoolRating.events({
    "change #select"(event,template) {
        template.subject.set(template.find('[name=subject]').value)
        template.grade.set(template.find('[name=grade]').value)
        template.schoolId_select.set(template.find('[name=schoolId_select]').value)

        let subject = FlowRouter.getParam('_id')
        let grade = FlowRouter.getParam('_id')
        let schoolId_select = FlowRouter.getParam('_id')
    }
})

