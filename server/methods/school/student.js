import { Meteor } from 'meteor/meteor';
Meteor.methods({
    "Student.updateOlympiadSubject": function(student_id,subjectId) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let student = Students.findOne({_id:student_id})
            if (student) {
                Students.update({_id:student._id},{$set:{olympiad:subjectId}})
            }
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    "Student.insert": function(studentObject) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let school = Schools.findOne({userId:this.userId})
            if(school) {
                let id = IdCounter.findOne()
                studentId = id['studentId']+1
                IdCounter.update({_id:id._id},{$set:{studentId:studentId}})

                let student = studentObject
                student.studentId = studentId
                student.schoolId = school.schoolId

                Students.insert(student)
            }
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    "Student.update": function(studentObject,student_id) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let student = Students.findOne({_id:student_id})
            if(student) {
                console.log(studentObject)
                console.log(student_id)
                Students.update({_id:student_id},{$set:studentObject})
            }
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    "Student.transfer": function(student_id) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let student = Students.findOne({_id:student_id})
            if(student) {
                Students.remove({_id:student_id})
                StudentTransferList.insert(student)
            }
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    "Student.acceptToSchool": function(student_id) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let student = StudentTransferList.findOne({_id:student_id})
            if(student) {
                StudentTransferList.remove({_id:student_id})
                let school = Schools.findOne({userId:this.userId})
                student.schoolId = school.schoolId
                Students.insert(student)
            }
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    "Student.upgrade": function() {
        if(Roles.userIsInRole(this.userId,'school')) {
            let school = Schools.findOne({userId:this.userId})
            Students.remove({grade:"11",schoolId:school.schoolId})
            let students = Students.find({schoolId:school.schoolId}).fetch()
            _.each(students,(student) => {
                let grade = +student.grade+1+""
                Students.update({_id:student._id},{$set:{grade:grade}})
            })
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    // added this
    "Student.downgrade": function() {
        if(Roles.userIsInRole(this.userId,'school')) {
            let school = Schools.findOne({userId:this.userId})
            Students.remove({grade:"7",schoolId:school.schoolId})
            let students = Students.find({schoolId:school.schoolId}).fetch()
            _.each(students,(student) => {
                let grade = +student.grade-1+""
                Students.update({_id:student._id},{$set:{grade:grade}})
            })
        } else {
            throw new Meteor.Error('auth-error','School rights required.')
        }
    },
    "Student.addUser": function(student_id) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let student = Students.findOne({_id:student_id})

            let newUserData = {
                username: "student" + student.studentId,
                password: "student" + student.studentId
            };

            let userId = Accounts.createUser(newUserData);
            Roles.addUsersToRoles(userId,['student'])
            student.userId = userId;
            student.hasProfile = 'yes';
            Students.update({_id:student_id},{$set:student});

            //console.log("student added:" + student.name + student.surname)
            }
    },
    "Student.addMultipleUsers": function() {
        if(Roles.userIsInRole(this.userId,'school')) {

            let school = Schools.findOne({userId:this.userId})

            let students = Students.find({schoolId:school.schoolId}).fetch()
            _.each(students,(student) => {
                let newUserData = {
                    username: "student" + student.studentId,
                    password: "student" + student.studentId
                };

                let userId = Accounts.createUser(newUserData);
                Roles.addUsersToRoles(userId,['student'])
                student.userId = userId;
                student.hasProfile = 'yes';
                Students.update({studentId:student.studentId},{$set:student});
            })
        }
    },
    "Student.deleteMultipleUsers": function() {
        if(Roles.userIsInRole(this.userId,'school')) {

            let school = Schools.findOne({userId:this.userId})

            let students = Students.find({schoolId:school.schoolId}).fetch()
            _.each(students,(student) => {

                Meteor.users.remove(student.userId)
                student.hasProfile = 'no';
                Students.update({studentId:student.studentId},{$set:student});
            })
        }
    },
    "Student.deleteAccount": function(student_id) {
        if(Roles.userIsInRole(this.userId,'school')) {
            let student = Students.findOne({_id:student_id})
            Meteor.users.remove(student.userId)
            //Roles.removeUser(student.userId,[])

            student.hasProfile = 'no';
            Students.update({_id:student_id},{$set:student});
            //console.log("student deleted:" + student.name + student.surname)
            }
    },
})
