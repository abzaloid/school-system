import { Meteor } from 'meteor/meteor';
import { calculateTotalGradeSubject } from "../../modules/olympiadRating/olympiadRating"

Meteor.methods({
	"calculateSchoolRating": function() {
        results = SchoolPerformaRatings.find().fetch()
        _.each(results,(result) => {
            result.total_points = (result.ubt_points || 0) + (result.seminar_points || 0) + (result.meeting_points || 0) + (result.outdoor_event_points || 0) + (result.indoorEvent_points || 0) + (result.pbl_points || 0) + (result.olympiad_points || 0) + (result.subject_week_points || 0) + (result.admin_participate_points || 0)

            SchoolPerformaRatings.update({_id:result._id},{$set:{total_points:result.total_points}})
        })
    },

    "deleteEvent": function(event_id) {
        console.log(event_id)
        assess = SchoolAssessments.findOne({_id:event_id})
        schoolRating = SchoolPerformaRatings.findOne({schoolId:assess.schoolId,month:assess.month})
        schoolAnnualRating = SchoolPerformaRatings.findOne({schoolId:assess.schoolId,month:'annual'})

        if (assess.event == 'meeting') {
        	SchoolAssessments.remove(assess);
        	schoolRating.meeting--;
        	schoolRating.meeting_points -= 9;
        	schoolRating.total_points -= 9;

        	schoolAnnualRating.meeting--;
        	schoolAnnualRating.meeting_points -= 9;
        	schoolAnnualRating.total_points -= 9;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'seminar') {
        	SchoolAssessments.remove(assess);
        	schoolRating.seminar--;
        	schoolRating.seminar_points -= 3;
        	schoolRating.total_points -= 3;

        	schoolAnnualRating.meeting--;
        	schoolAnnualRating.meeting_points -= 3;
        	schoolAnnualRating.total_points -= 3;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'indoorEvent') {
        	SchoolAssessments.remove(assess);
        	schoolRating.indoorEvent--;
        	schoolRating.indoorEvent_points -= 3;
        	schoolRating.total_points -= 3;

        	schoolAnnualRating.indoorEvent--;
        	schoolAnnualRating.indoorEvent_points -= 3;
        	schoolAnnualRating.total_points -= 3;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'ubt') {
        	SchoolAssessments.remove(assess);
        	schoolRating.ubt--;
        	schoolRating.ubt_points -= 3;
        	schoolRating.total_points -= 3;

        	schoolAnnualRating.ubt--;
        	schoolAnnualRating.ubt_points -= 3;
        	schoolAnnualRating.total_points -= 3;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'pbl') {
        	SchoolAssessments.remove(assess);
        	schoolRating.pbl--;
        	schoolRating.pbl_points -= 3;
        	schoolRating.total_points -= 3;

        	schoolAnnualRating.pbl--;
        	schoolAnnualRating.pbl_points -= 3;
        	schoolAnnualRating.total_points -= 3;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'olympiad') {
        	SchoolAssessments.remove(assess);
        	schoolRating.olympiad--;
        	schoolRating.olympiad_points -= 3;
        	schoolRating.total_points -= 3;

        	schoolAnnualRating.olympiad--;
        	schoolAnnualRating.olympiad_points -= 3;
        	schoolAnnualRating.total_points -= 3;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'subject_week') {
        	SchoolAssessments.remove(assess);
        	schoolRating.subject_week--;
        	schoolRating.subject_week_points -= 3;
        	schoolRating.total_points -= 3;

        	schoolAnnualRating.subject_week--;
        	schoolAnnualRating.subject_week_points -= 3;
        	schoolAnnualRating.total_points -= 3;

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'outdoor_event') {
        	SchoolAssessments.remove(assess);
        	
        	if (assess.scope == 'city') {
                schoolRating.outdoor_event--;
                schoolRating.outdoor_event_points -= 9;
                schoolRating.total_points -= 9

                schoolAnnualRating.outdoor_event--;
        		schoolAnnualRating.outdoor_event_points -= 9;
        		schoolAnnualRating.total_points -= 9;
            } 
            else if (assess.scope == 'republic') {
                schoolRating.outdoor_event--;
                schoolRating.outdoor_event_points -= 18;
                schoolRating.total_points -= 18;

                schoolAnnualRating.outdoor_event--;
        		schoolAnnualRating.outdoor_event_points -= 18;
        		schoolAnnualRating.total_points -= 18;
            }

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
        if (assess.event == 'admin_participate') {
        	SchoolAssessments.remove(assess);
        	
        	if (assess.scope == 'vice-principal') {
                schoolRating.admin_participate--;
                schoolRating.admin_participate_points -= 0.5;
                schoolRating.total_points -= 0.5;

                schoolAnnualRating.admin_participate--;
        		schoolAnnualRating.admin_participate_points -= 0.5;
        		schoolAnnualRating.total_points -= 0.5;
            } 
            else if (assess.scope == 'principal') {
                schoolRating.admin_participate--;
                schoolRating.admin_participate_points -= 1;
                schoolRating.total_points -= 1;

                schoolAnnualRating.admin_participate--;
        		schoolAnnualRating.admin_participate_points -= 1;
        		schoolAnnualRating.total_points -= 1;
            }

        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:schoolRating.month},{$set:schoolRating});
        	SchoolPerformaRatings.update({schoolId:schoolRating.schoolId,month:'annual'},{$set:schoolAnnualRating});
        }
    },

	"calculateOlympiadRating": function(academicYear) {
        schools = Schools.find().fetch()
        _.each(schools,(school) => {

        	let grades = ['7','8','9','10','11']

        	// average olympiad rating for all grades and all subjects
        	let olympiadGradeTotalRating = {
		                    schoolId:school.schoolId,
		                    academicYear:academicYear,
		                    subjectId: 'all',
		                    grade:'all',
		                    regBronzeOlymp: 0,
		                    regSilverOlymp: 0,
		                    regGoldOlymp: 0,
		                    regTotalOlymp: 0,
		                    natBronzeOlymp: 0,
		                    natSilverOlymp: 0,
		                    natGoldOlymp: 0,
		                    natTotalOlymp: 0, 
		                    interBronzeOlymp: 0,
		                    interSilverOlymp: 0,
		                    interGoldOlymp: 0,
		                    interTotalOlymp: 0,
		                    regBronzeProject: 0,
		                    regSilverProject: 0, 
		                    regGoldProject: 0,
		                    regTotalProject: 0,
		                    natBronzeProject: 0,
		                    natSilverProject: 0,
		                    natGoldProject: 0, 
		                    natTotalProject: 0,
		                    interBronzeProject: 0,
		                    interSilverProject: 0,
		                    interGoldProject: 0,
		                    interTotalProject: 0,
		                }
		    var cGrade = 0;
        	_.each(grades, (grade) => {

	        	var cTotal = 0;
	        	// calculates average olympiad rating for each grade and all subjects
	        	let olympiadTotalRating = {
		                    schoolId:school.schoolId,
		                    academicYear:academicYear,
		                    subjectId: 'all',
		                    grade:grade,
		                    regBronzeOlymp: 0,
		                    regSilverOlymp: 0,
		                    regGoldOlymp: 0,
		                    regTotalOlymp: 0,
		                    natBronzeOlymp: 0,
		                    natSilverOlymp: 0,
		                    natGoldOlymp: 0,
		                    natTotalOlymp: 0, 
		                    interBronzeOlymp: 0,
		                    interSilverOlymp: 0,
		                    interGoldOlymp: 0,
		                    interTotalOlymp: 0,
		                    regBronzeProject: 0,
		                    regSilverProject: 0, 
		                    regGoldProject: 0,
		                    regTotalProject: 0,
		                    natBronzeProject: 0,
		                    natSilverProject: 0,
		                    natGoldProject: 0, 
		                    natTotalProject: 0,
		                    interBronzeProject: 0,
		                    interSilverProject: 0,
		                    interGoldProject: 0,
		                    interTotalProject: 0,
		                }

	        	subjects = KboCourses.find().fetch()
	        	_.each(subjects,(subject) => {

	        		var c = 0;
	        		// average olympiad rating for each grade and each subject
		            let olympiadRating = {
		                    schoolId:school.schoolId,
		                    academicYear:academicYear,
		                    subjectId: subject.subjectId,
		                    grade:grade,
		                    regBronzeOlymp: 0,
		                    regSilverOlymp: 0,
		                    regGoldOlymp: 0,
		                    regTotalOlymp: 0,
		                    natBronzeOlymp: 0,
		                    natSilverOlymp: 0,
		                    natGoldOlymp: 0,
		                    natTotalOlymp: 0, 
		                    interBronzeOlymp: 0,
		                    interSilverOlymp: 0,
		                    interGoldOlymp: 0,
		                    interTotalOlymp: 0,
		                    regBronzeProject: 0,
		                    regSilverProject: 0, 
		                    regGoldProject: 0,
		                    regTotalProject: 0,
		                    natBronzeProject: 0,
		                    natSilverProject: 0,
		                    natGoldProject: 0, 
		                    natTotalProject: 0,
		                    interBronzeProject: 0,
		                    interSilverProject: 0,
		                    interGoldProject: 0,
		                    interTotalProject: 0,
		                }

		            results = OlympiadResults.find({schoolId:school.schoolId, academicYear:academicYear, subjectId:subject.subjectId, attendedFor:grade}).fetch()
		            _.each(results,(result) => {
		                
		                if (result.olympiadType == 'science') {
		                	if (result.olympiadRegion == 'regional') {
		                		if (result.medal == 'bronze') {
		                			olympiadRating.regBronzeOlymp++
		                			olympiadTotalRating.regBronzeOlymp++
		                			olympiadGradeTotalRating.regBronzeOlymp++
		                		} 
		                		if (result.medal == 'silver') {
		                			olympiadRating.regSilverOlymp++
		                			olympiadTotalRating.regSilverOlymp++
		                			olympiadGradeTotalRating.regSilverOlymp++
		                		}
		                		if (result.medal == 'gold') {
		                			olympiadRating.regGoldOlymp++
		                			olympiadTotalRating.regGoldOlymp++
		                			olympiadGradeTotalRating.regGoldOlymp++
		                		}
		                		olympiadRating.regTotalOlymp++;
		                		olympiadTotalRating.regTotalOlymp++
		                		olympiadGradeTotalRating.regTotalOlymp++
		                	}

							if (result.olympiadRegion == 'national') {
		                		if (result.medal == 'bronze') {
		                			olympiadRating.natBronzeOlymp++
		                			olympiadTotalRating.natBronzeOlymp++
		                			olympiadGradeTotalRating.natBronzeOlymp++
		                		} 
		                		if (result.medal == 'silver') {
		                			olympiadRating.natSilverOlymp++
		                			olympiadTotalRating.natSilverOlymp++
		                			olympiadGradeTotalRating.natSilverOlymp++
		                		}
		                		if (result.medal == 'gold') {
		                			olympiadRating.natGoldOlymp++
		                			olympiadTotalRating.natSilverOlymp++
		                			olympiadGradeTotalRating.natSilverOlymp++
		                		}
		                		olympiadRating.natTotalOlymp++;
		                		olympiadTotalRating.natTotalOlymp++
		                		olympiadGradeTotalRating.natTotalOlymp++
		                	}     

		                	if (result.olympiadRegion == 'international') {
		                		if (result.medal == 'bronze') {
		                			olympiadRating.interBronzeOlymp++
		                			olympiadTotalRating.interBronzeOlymp++
		                			olympiadGradeTotalRating.interBronzeOlymp++
		                		} 
		                		if (result.medal == 'silver') {
		                			olympiadRating.interSilverOlymp++
		                			olympiadTotalRating.interSilverOlymp++
		                			olympiadGradeTotalRating.interSilverOlymp++
		                		}
		                		if (result.medal == 'gold') {
		                			olympiadRating.interGoldOlymp++
		                			olympiadTotalRating.interGoldOlymp++
		                			olympiadGradeTotalRating.interGoldOlymp++
		                		}
		                		olympiadRating.interTotalOlymp++;
		                		olympiadTotalRating.interTotalOlymp++;
		                		olympiadGradeTotalRating.interTotalOlymp++;
		                	}
		                	c++;
		                	cTotal++;
		                	cGrade++; 	
		                }
		                else {
		                	if (result.olympiadRegion == 'regional') {
		                		if (result.medal == 'bronze') {
		                			olympiadRating.regBronzeProject++
		                			olympiadTotalRating.regBronzeProject++
		                			olympiadGradeTotalRating.regBronzeProject++
		                		} 
		                		if (result.medal == 'silver') {
		                			olympiadRating.regSilverProject++
		                			olympiadTotalRating.regSilverProject++
		                			olympiadGradeTotalRating.regSilverProject++
		                		}
		                		if (result.medal == 'gold') {
		                			olympiadRating.regGoldProject++
		                			olympiadTotalRating.regGoldProject++
		                			olympiadGradeTotalRating.regGoldProject++
		                		}
		                		olympiadRating.regTotalProject++;
		                		olympiadTotalRating.regTotalProject++;
		                		olympiadGradeTotalRating.regTotalProject++;
		                	}

							if (result.olympiadRegion == 'national') {
		                		if (result.medal == 'bronze') {
		                			olympiadRating.natBronzeProject++
		                			olympiadTotalRating.natBronzeProject++
		                			olympiadGradeTotalRating.natBronzeProject++
		                		} 
		                		if (result.medal == 'silver') {
		                			olympiadRating.natSilverProject++
		                			olympiadTotalRating.natSilverProject++
		                			olympiadGradeTotalRating.natSilverProject++
		                		}
		                		if (result.medal == 'gold') {
		                			olympiadRating.natGoldProject++
		                			olympiadTotalRating.natGoldProject++
		                			olympiadGradeTotalRating.natGoldProject++
		                		}
		                		olympiadRating.natTotalProject++;
		                		olympiadTotalRating.natTotalProject++;
		                		olympiadGradeTotalRating.natTotalProject++;
		                	}     

		                	if (result.olympiadRegion == 'international') {
		                		if (result.medal == 'bronze') {
		                			olympiadRating.interBronzeProject++
		                			olympiadTotalRating.interBronzeProject++
		                			olympiadGradeTotalRating.interBronzeProject++
		                		} 
		                		if (result.medal == 'silver') {
		                			olympiadRating.interSilverProject++
		                			olympiadTotalRating.interSilverProject++
		                			olympiadGradeTotalRating.interSilverProject++
		                		}
		                		if (result.medal == 'gold') {
		                			olympiadRating.interGoldProject++
		                			olympiadTotalRating.interGoldProject++
		                			olympiadGradeTotalRating.interGoldProject++
		                		}
		                		olympiadRating.interTotalProject++;
		                		olympiadTotalRating.interTotalProject++;
		                		olympiadGradeTotalRating.interTotalProject++;
		                	}
		                	c++;
		                	cTotal++;
		                	cGrade++; 
		                }
		            })

		            let sameRating = OlympiadRatings.findOne({academicYear:academicYear, schoolId:school.schoolId, subjectId:subject.subjectId, grade:grade})

		            if (sameRating) {
		                OlympiadRatings.update({_id:sameRating._id},{$set:olympiadRating})
		            }
		            else {
		            	if (c > 0)
		            		OlympiadRatings.insert(olympiadRating)
		            }
		        })

				let sameTotalRating = OlympiadRatings.findOne({academicYear:academicYear, schoolId:school.schoolId, subjectId:'all', grade:grade})

		            if (sameTotalRating) {
		                OlympiadRatings.update({_id:sameTotalRating._id},{$set:olympiadTotalRating})
		            }
		            else {
		            	if (cTotal > 0)
		            		OlympiadRatings.insert(olympiadTotalRating)
		            }
		    })
			
			let sameGradeTotalRating = OlympiadRatings.findOne({academicYear:academicYear, schoolId:school.schoolId, subjectId:'all', grade:'all'})

		            if (sameGradeTotalRating) {
		                OlympiadRatings.update({_id:sameGradeTotalRating._id},{$set:olympiadGradeTotalRating})
		            }
		            else {
		            	if (cGrade > 0)
		            		OlympiadRatings.insert(olympiadGradeTotalRating)
		            }
       		
       		// calculates average olympiad rating for all grades but each subject
		    calculateTotalGradeSubject(school.schoolId,academicYear)

        })
    }
})