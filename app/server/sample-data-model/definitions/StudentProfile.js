defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;
  let kyID = RadGrad.user.findBySlug("kelsieyamakawa")._id;
  let jdID = RadGrad.user.findBySlug("johndoe")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics111", verified: true, grade: "A", studentID: kyID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "A", studentID: kyID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics141", verified: true, grade: "B", studentID: kyID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "nonICS-1xx", verified: true, grade: "B", studentID: kyID, note: "Math 307"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics141", verified: true, grade: "B", studentID: jdID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "A", studentID: jdID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics111", verified: true, grade: "B", studentID: jdID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "nonICS-1xx", verified: true, grade: "B+", studentID: jdID, note: "Econ 131"}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "ieee-uhm",
      verified: true,
      hrswk: 4,
      studentID: kyID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "hack15",
      verified: true,
      hrswk: 4,
      studentID: kyID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "acm-manoa",
      verified: true,
      hrswk: 4,
      studentID: kyID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "pearl-harbor-internship",
      verified: true,
      hrswk: 4,
      studentID: kyID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "ieee-uhm",
      verified: true,
      hrswk: 4,
      studentID: jdID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "hack15",
      verified: true,
      hrswk: 4,
      studentID: jdID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "acm-manoa",
      verified: true,
      hrswk: 4,
      studentID: jdID
    },
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "pearl-harbor-internship",
      verified: true,
      hrswk: 4,
      studentID: jdID
    }
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));
};

