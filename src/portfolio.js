/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import React from 'react'
import emoji from "react-easy-emoji";
import spring from "./icons/spring-framework-icon.svg"
import hibernate from "./icons/hibernate.svg"
import os from "./icons/operating-system.jpg"
// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Prabhakar",
  title: "Hi all, I'm Rahul Prabhakar",
  subTitle: emoji(
    "A passionate Full Stack Software Developer with experience of working on multiple frontend and backend projects. \n A competitive coding enthusiast with 5 star rating on codechef. A life long Learner."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rprabhakar789",
  linkedin: "https://www.linkedin.com/in/rp789/",
  gmail: "pra.rahul98@gmail.com",
  codechef:"https://www.codechef.com/users/rp789",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Develop backend applications using SpringBoot java"),
    emoji(
      "⚡ Solve technical problems using the knowledge of Data Structures and Algorithms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName:"C++",
      fontAwesomeClassname:"",
      link: <i class="fab fa-cuttlefish">++</i>
    },
    {
      skillName:"Java",
      fontAwesomeClassname:"fab fa-java"
    },
    {
      skillName:"Data Structures",
      fontAwesomeClassname:"fas fa-code"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Spring Framework",
      fontAwesomeClassname: "",
      link: <img style={{"maxHeight":"50px", "maxWidth":"50px"}} src={spring}/>
    },
    {
      skillName: "Hibernate",
      fontAwesomeClassname: "",
      link: <img style={{"maxHeight":"50px", "maxWidth":"50px"}} src={hibernate}/>
    },
    {
      skillName: "Operating System",
      fontAwesomeClassname: "",
      link: <img style={{"maxHeight":"50px", "maxWidth":"50px"}} src={os}/>
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology, Warangal",
      logo: require("./icons/nitw.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "2016 - 2020",
      descBullets: [
        "Graduated with a CGPA of 7.79",
        "Scored the highest grade (EX) in Data Structure course",
        "Successfully organised and managed an event Code debugging in tech fest Technozion'17",
        "Achieved Rank 2 in inter-college coding contest National Programming League hosted by NITW in Technozion'18",
        "Achieved Rank 2 in college in coding contest CodersBit hosted by InterviewBit",
        "Got selected in ACM student chapter, NITW",
        "Organised programming sessions and coding contests to help juniors improve their coding skills"
      ]
    },
    {
      schoolName: "KDHS Fulkaha",
      subHeader: "Intermediate",
      duration: "2014 - 2016",
      desc: "Ranked 7 in state in intermediate examination",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },

    {
      Stack: "SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Front End Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Wells Fargo",
      companylogo: require("./assets/images/wellsfargologo.png"),
      date: "Jan 2021 – Present",
      desc: "Working as a software developer in an agile environment on multiple frontend and backend projects.",
      descBullets: [
        " Developed SpringBoot based java applications for FXTrades reports generation.",
        " Built attractive and responsive UI for various applications using React.",
        " Fixed multiple critical issues detected by findBugs."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Resolab",
      companylogo: require("./assets/images/Logo_2.jpg"),
      date: "Oct 2020 – Jan 2021",
      desc: "Worked as a front end developer on their website Resolab",
      descBullets: [
        " Developed attractive and responsive UI for their website Resolab",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Samsung",
      companylogo: require("./assets/images/samsungLogo.jpg"),
      date: "May 2019 – July 2019",
      desc: "Worked on Samsung Pay Android Application.",
      descBullets: [
        " Developed a program to learn user activity pattern inside Samsung Pay android application in order to identify the most used features with the aim to improve user experience in future.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS AND STUFFS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/Quiz Portal-logos.jpeg"),
      projectName: "Quiz Portal",
      projectDesc: "A full stack web application to host and take quizzes.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rprabhakar789.github.io/exam-portal.github.io/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/heart-beat.jpg"),
      projectName: "CNN based approach to detect CHF",
      projectDesc: "A Convulational neural network based approach for early detection of congestive heart failure by monitoring heart beat",
      footerLink: [

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/brickbreaker.png"),
      projectName: "Brick Breaker using javaFX",
      projectDesc: "A GUI based game in which the player must smash a wall of bricks by deflecting a bouncing ball with a paddle.",
      footerLink: [

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tictactoe.png"),
      projectName: "Tic Tac Toe",
      projectDesc: "A GUI based TIC-TAC-TOE game using React.js which could be played by two players or with computer.",
      footerLink: [

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sneaker.jpg"),
      projectName: "E-Commerce Product main page",
      projectDesc: "A demo e-commerce product main page build using HTML, CSS and JavaScript",
      footerLink: [
        {
          name: "View page",
          url: "https://rprabhakar789.github.io/E-Commerce-Product-Page/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Recognition!",

  achievementsCards: [
    {
      title: "Star of the month",
      subtitle:
        "Awarded with the title of 'Star of the month' in the month July 2021.",
      image: require("./assets/images/wellsfargologo.png"),
      footerLink: [
      ]
    },
    {
      title: "5 star on Codechef",
      subtitle:
        "Achieved 5 star rating on competitive coding platform Codechef",
      image: require("./assets/images/codechef-logo.jpg"),
      footerLink: [
        {
          name: "View my codechef profile",
          url: "https://www.codechef.com/users/rp789"
        }
      ]
    },

    {
      title: "2nd Rank in CodersBit",
      subtitle: "Achieved rank 2 in college in a coding contest CodersBit hosted by InterviewBit",
      image: require("./assets/images/codersbit.jpg"),
      footerLink: [
      ]
    },
    {
      title: "Codechef Contests",
      subtitle: "Achieved below 100 global rank in many codechef contests",
      image: require("./assets/images/codechef-logo.jpg"),
      footerLink: [

        {
          name: "June Cook-Off 2018",
          url: "https://www.codechef.com/JUNE18B"
        },
        {
          name: "July Cook-Off 2018",
          url: "https://www.codechef.com/COOK96B"
        },
        {
          name: "October Cook-Off 2018",
          url: "https://www.codechef.com/COOK99A"
        },
        {
          name: "November Lunch-Time 2018",
          url: "https://www.codechef.com/LTIME66A"
        },
      ]
    },
    {
      title: "Intermediate Exam Topper",
      subtitle:
        "Achieved 7th rank in state in +2 board examination.",
      image: require("./assets/images/cap.jpg"),
      footerLink: [
      ]
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a feedback, want to hire me or just want to say hi? My Inbox is open for all.",
  number: "+91-7997956656",
  email_address: "rprabhakar790@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
