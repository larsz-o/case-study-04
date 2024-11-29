const lessonData = {

  2: {
    checkpoint: false,
    last: false,
    checkpoints: [],
    images: [
    ],
    layoutNumber: 4,
    navigation: [
      { available_scene: "4", current_scene: "2", previous_scene: "1",text: "Continue" },
    ],
    scene_number: "2",
    sidebar: true,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [`<p>This number is from 2024. Learn more about the <a href="https://www.bop.gov/about/statistics/population_statistics.jsp" target="_blank" rel="noopener noreferrer">current federal prison population</a>.</p>`],
    text: [
      `<p>You are a researcher with the Chaplaincy Innovation Lab. As part of your work, you were contacted by Chaplaincy Services, a branch of the Federal Bureau of Prisons (BOP). The BOP is charged with providing all inmates with “reasonable and equitable opportunities” to practice their religion.</p><p> Prison chaplains are the people who carry out this charge. They are responsible for providing spiritual care for approximately 150,000 inmates in 122 facilities across the country.</p>
`
    ],
    title: 'A Research Request',
    videos: [],
    audio: [],
  },
  
  4: {
    checkpoint: false,
    last: false,
    checkpoints: [], 
    images: [
      {alt: 'Federal Prison interior', image: 'https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/Century-Prison-412.jpg', order: 0}
    ],
    layoutNumber: 1,
    navigation: [
      { available_scene: "8", current_scene: "4", previous_scene: "2",text: "Continue" },
    ],
    scene_number: "4",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [
      `<p>Chaplaincy Services contacted you because they wanted to know more about how chaplains are utilized by federal inmates. They were inspired to poll the population of inmates by another BOP entity, the Food Service Branch.</p> <p>Every year, the Food Service Branch conducts a survey on inmate food preferences. The menu survey helps ensure that the dietary needs of inmates are met and that resources are not being wasted.</p>`,
    ],
    title: null,
    videos: [],
    audio: [],
  },
       
  8: {
    checkpoint: false,
    last: false,
    checkpoints: [{
      alt: null,
      answer: false,
      content_type: 5,
      data:
        ``,
      order: 0,
      question_type: 2,
      scene_number: "8",
      sidebar: false,
    }],
    images: [],
    layoutNumber: 9,
    navigation: [
      { available_scene: "10", current_scene: "8", previous_scene: "4",text: "Continue" },
    ],
    scene_number: "7",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [],
    title: null,
    videos: [],
    audio: [],
  },
  
  10: {
    checkpoint: false,
    last: true,
    checkpoints: [],
    images: [],
    layoutNumber: 6,
    navigation: [{available_scene: "10", current_scene: "10", previous_scene: "7",text: "End Lesson" }],
    scene_number: "10",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [
      `<p>You’ve completed this case study lesson. In this situation, you considered the challenges of conducting research on religion and/or spirituality in prisons. You explored some of the ethical and logistical questions related to this research. </p>`
    ],
    title: "Lesson complete",
    videos: [],
    audio: [],
  },
};

export default lessonData;