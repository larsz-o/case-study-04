const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p>Likewise, Chaplaincy Services wanted to know if the worship services, sacred text study, group counseling, and faith-based reentry services were helpful to inmates. Chaplaincy Services wondered: Are spiritual care resources being used? Who is using the resources? Do federal prison inmates even know that these resources exist?
</p> This is the first time you've worked with the BOP to conduct any kind of survey. You know that your work will be thoroughly reviewed to ensure that it meets all policies and requirements.</p>
<p>What is your first course of action?</p>`,
      options: [
        { text: `Ask for a copy of the Food Service Branch survey so that you can review its format.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You should review the survey that Chaplaincy Services was inspired by to see if you can use it as a starting point.` },
        { text: `Visit the prison and hold focus group meetings with prisoners about their experiences with Chaplaincy Services.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. Chaplaincy Services asked you to administer a survey, not focus groups.` },
        {text: `Send Chaplaincy Services the policy on prisoners’ rights to worship.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. Chaplaincy Services asked you to administer a survey, not for information about a policy.`}
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<p><strong>You ask Chaplaincy Services for a copy of the Food Service Branch survey so that you can see the types of questions that prisoners are already being asked.</strong></p>

      <p>When you review the survey, you know you’re going to face some challenges. The Food Service Branch survey simply presents the prison menu and asks inmates to rate every item as “like” or “dislike.” </p>
      <p>You know it would make more sense for the Chaplaincy Services survey to have multiple choice questions with more than two responses, since you need to learn about complex topics.</p>
      <p>Chaplaincy Services share additional requirements with you as you begin to draft survey questions: </p>
      <ul>
      <li>You cannot ask about staff performance. </li>
      <li>Questions must be provided in both English and Spanish. </li>
      <li>You must use BOP-provided language when asking about religious affiliation, which asks about small religions that are not common in the general population.</li>
      </ul>
      <p>What is your next step in this work?</li>
      `, 
      options: [
        { text: `Refuse to continue - these requirements violate your professional values.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. You should be able to work with Chaplaincy Services to create an appropriate survey within their requirements.` },
        { text: `Attempt to write questions in a like/dislike format. `, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. Like/dislike questions will not get you the data Chaplaincy Services needs.` },
        { text: `Inform Chaplaincy Services that you will have to write multiple choice questions.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You will need to write multiple choice questions, so inform Chaplaincy Services of a change to the format.` },
      ],
      multipleSelect: false,
      type: "choice", 
  }, 
  "3": {
      question: `<p><strong>You inform Chaplaincy Services that you will have to write multiple choice questions to solicit the types of answers they’re looking for.</strong></p><p>They agree and you begin writing questions.</p><p>You know that federal inmates have a lower average reading level than the general population. While a general population survey should be written at an 8th grade
reading level, you research the population of federal inmates and decide that a survey for inmates should be written at a 5th grade reading level for maximum accessibility.</p><p>While you work on questions, you’re informed that the survey will be distributed through common-area computer kiosks in the prisons. You decide that you will create groups of questions that can be “blocked” together on short pages.</p>`,
      
      multipleSelect: false, 
      type: "none", 
     
  },
  "4": {
    question: `<p>There is one major difference between the Food Service survey and the Chaplaincy Services survey was that, while everyone needs to eat food, not everyone would describe themselves as religious and/or spiritual. </p>
    <p>Because of this, it would be important to learn more about the target population: people who are religious and/or spiritual. The first block of questions would focus on this information. </p>
    <p>Select all of the questions you would add to a section to learn about a person’s religious and/or spiritual background.</p>`,
    options: [{text: `a) Do you consider yourself to be religious?`,conditions: {type: null, command: "NEXT", index: null}, feedback: `` }, {text: `b) Do you consider yourself to be spiritual?`, conditions: {type: null, command: "NEXT", index: null}, feedback: ``}, {text: 'c) Do you spend time with the prison chaplain? ',conditions: {type: null, command: "NEXT", index: null}, feedback: ``}, {text: `d) Did you attend a church, mosque, or other place of worship before being incarcerated?`,conditions: {type: null, command: "NEXT", index: null}, feedback: ``}, {text: `e) Do you pray/meditate?`, conditions: {type: null, command: "NEXT", index: null}, feedback: ``}],
    multipleSelect: true, 
    type: "choice", 
    submit: true, 
    multipleFeedbackData: `A, B, D, and E are all great questions to ask to learn about a person’s religious and/or spiritual background. C is a question related to a person’s use of chaplain services in prison, so it should go in another section.`
},
"5": {
  question: `<p>The second block of questions asks about familiarity with chaplains (e.g. “Do you know a Chaplain who works at your facility?”) and the third block asks about participation (e.g. “How often do you participate in worship services at your facility?”). </p><p>These questions can be answered on a Likert-type scale. Scale questions are a nuanced way to gauge attitudes or opinions. For example, a person might pray more than once a day, daily, weekly, monthly, almost never, or never – data that would not be captured by a simple “yes or no” question.</p> 

`,
  multipleSelect: false, 
  type: "none",

  },
  "6": {
    question: `<p>The last block of questions asks for demographic information. You know it’s important to keep the survey anonymous, so for this section you: </p>`,
    options: [{text: `Decide not to ask any questions beyond “What is your religion?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. Demographic data is important to learn about who is using chaplaincy services.` }, {text: `Include the option “Prefer not to answer” for each question.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You should collect demographic data, but allow the user the option not to answer to protect their privacy. You should also inform them of how this data is being shared.` }, {text: `Capture user data from the computer, but don’t share it with Chaplaincy Services.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. Chaplaincy Services wants demographic data for their research, and you should ask the user to share information in their own words.` }],
    multipleSelect: false, 
    type: "choice", 
    },
  "5": {
  question: `<p>You include the option “Prefer not to answer” for each question in the demographic section. Once you’ve written all 20 questions, you share them with the Bureau Research Review Board for their review.</p> 
`,
  multipleSelect: false, 
  type: "none",
  end: true

  },
}
)
export default partA;