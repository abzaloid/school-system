import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './olympiadAllInterResults.html';

Template.olympiadAllInterResults.onCreated(function() {
    let template = this
    template.subject = new ReactiveVar("")
    template.medal_select = new ReactiveVar("")
    template.attendedFor = new ReactiveVar("")
    template.schoolId_select = new ReactiveVar("")
    template.olympiadId_select = new ReactiveVar("")
    
    template.subscribe('schools')
    template.subscribe('subjects')
    template.subscribe('olympiads')
    template.autorun(()=>{
        template.subscribe("olympiadAllResults",academicYear.get())
    })
})

Template.olympiadAllInterResults.helpers({
    olympiads() {
        return Olympiads.find({},{sort:{olympiadId:1}})
    },
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
        let medal_select = new RegExp(Template.instance().medal_select.get())
        let attendedFor = new RegExp(Template.instance().attendedFor.get())
        let schoolId_select = new RegExp(Template.instance().schoolId_select.get())
        let olympiadId_select = new RegExp(Template.instance().olympiadId_select.get())
        
        return OlympiadResults.find({
            schoolId: schoolId_select,
            olympiadType:'science',
            olympiadId:olympiadId_select,
            attendedFor: attendedFor,
            subjectId:subject,
            olympiadRegion:'international',
            medal:medal_select,
        },{sort:{schoolId:1, passed:-1, subjectId:1, attendedFor:1, medal:1, absolutePlace:1}
        })
    },
})

Template.olympiadAllInterResults.events({
    "change #select"(event,template) {
        template.subject.set(template.find('[name=subject]').value)
        template.medal_select.set(template.find('[name=medal_select]').value)
        template.attendedFor.set(template.find('[name=attendedFor]').value)
        template.schoolId_select.set(template.find('[name=schoolId_select]').value)
        template.olympiadId_select.set(template.find('[name=olympiadId_select]').value)


        let subject = FlowRouter.getParam('_id')
        let schoolId_select = FlowRouter.getParam('_id')
        let medal_select = FlowRouter.getParam('_id')
        let attendedFor = FlowRouter.getParam('_id')
        let olympiadId_select = FlowRouter.getParam('_id')
    }
})

