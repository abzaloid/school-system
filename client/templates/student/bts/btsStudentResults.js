import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './btsStudentResults.html';
Template.btsStudentResults.onCreated(function(){
    let template = this
    template.autorun(()=>{
        template.subscribe("btsStudentResults",academicYear.get(),FlowRouter.getParam("btsNo"))
    })
})
Template.btsStudentResults.helpers({
    btsNo() {
        return FlowRouter.getParam("btsNo")
    },
    results() {
        return BtsResults.find({},{sort:{total:-1}})
    }
})

Template.btsStudentResults.events({
    
})
