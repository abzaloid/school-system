import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './tatAllResults.html';

Template.tatAllResults.onCreated(function(){
    let template = this
    template.subjectId = new ReactiveVar('01')
    template.subscribe('schools')
    template.autorun(()=>{
        template.subscribe('tatAllSeparateResults',academicYear.get(),template.subjectId.get(),FlowRouter.getParam('tatNo'))
    })

})

Template.tatAllResults.helpers({
    tatNo() {
        return FlowRouter.getParam('tatNo')
    },
    results() {
        return TatResults.find({},{sort:{result:-1}})
    }
})

Template.tatAllResults.events({
    'change #subjectId'(event,template) {
        template.subjectId.set(event.target.value)
    }
})
