/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shashi Kumar Kasturi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shashi Kumar Kasturi Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Shashi Kumar Kasturi",
  logo_name: "ShashiKumarKasturi",
  nickname: "",
  subTitle:
    "Software Developer who is dynamic and creative and has over 2 years of experience writing solid code. Seeking a challenging position in a Technical organization that will allow me to use my skills in the best possible way to achieve the company's goals, enhance my professional skills in a dynamic and stable workplace, and solve problems in an effective manner. Always seeks to work on complete solutions that create impact through the development of scalable and sustainable social and technical systems.",
  resumeLink:
    "https://drive.google.com/file/d/1r7lG8xk7jyVcN_EFhtrtfudhVWg6gLLG/view?usp=share_link",
  portfolio_repository: "",
  githubProfile: "https://github.com/kshashikumar",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kshashikumar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shashikumarkasturi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shashikumarkasturi2712@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shashi_patel_kasturi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Full stack responsive websites by integrating both efficiently coded frontend and backend",
        "⚡ Developing web applications using Sping boot, React, Angular, Vuejs, GoLang and automated batch jobs using Spring batch",
        "⚡ Creating application backend in Spring boot, Java, python and GoLang",
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "springboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "goLang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "vuedotjs",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "nodedotjs",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Software Development Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on developing backend software systems using java",
        "⚡ Hosting and maintaining applications on Linux, Docker and OCP instances along with integration of databases",
        "⚡ Deploying applications with muliple instances so to handle high volumes",
        "⚡ Increasing the performance of application by efficiently improving the code",
      ],
      softwareSkills: [
        {
          skillName: "c",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "cplusplus",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "java",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "mariadb",
          fontAwesomeClassname: "simple-icons:mariadb",
          style: {
            color: "#003545",
          },
        },
        {
          skillName: "mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "redhatopenshift",
          fontAwesomeClassname: "simple-icons:redhatopenshift",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    /*{
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        
      ],
    },
    */
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/17h51a0576",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shashi163",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/shashipatel2712/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shashipatel_27",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CMR College of Engineering and Technology",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "cmr.jpg",
      alt_name: "CMR College of Engineering and Technology",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Java, DS, Algorithms, DBMS, OS, CA, ML etc.",
        "⚡ Apart from this, I have done courses on Application Design, Application Development, MERN/MEAN Stack and Full Stack Development.",
        "⚡ I was selected for Telangana Merit Scholarship. I have also done a internship during my bachelors and apart from that i received several offers from DBS, ADP, Virtusa, TCS, Wipro, Accenture and Capgemini.",
      ],
      website_link: "https://cmrcet.ac.in/",
    },
    {
      title: "New York Institute of Technology",
      subtitle: "M.S. in Computer Science",
      logo_path: "NYIT.jpg",
      alt_name: "New York Institute of Technology",
      duration: "2023 - present",
      descriptions: [
        "⚡ I have recently joined NYIT and focused on learning Machine learning and advancements from bachelors.",
      ],
      website_link: "https://www.nyit.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ACM - International Collegiate Programming Contest",
      subtitle: "- ACM ICPC",
      logo_path: "ACM-ICPC-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1k_WP8SdF3Z8Qj0H--cjjZcXt7XIEib4x/view?usp=share_link",
      alt_name: "ACM - International Collegiate Programming Contest",
      color_code: "#00000099",
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      subtitle: "- Oracle",
      logo_path: "oracle.webp",
      certificate_link:
        "https://www.credly.com/badges/a397584b-ad6c-4c4a-9606-0f42a74de819",
      alt_name: "Oracle Certified Associate, Java SE 8 Programmer",
      color_code: "#00000099",
    },
    {
      title: "AI for India",
      subtitle: "- GUVI Geek Networks",
      logo_path: "GUVI.webp",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=Uar1969S1944847t88#",
      alt_name: "AI for India",
      color_code: "#8C151599",
    },
    {
      title: "DBS Super Rookie Recognition - Outward D3",
      subtitle: "- DBS Tech",
      logo_path: "DBS.png",
      certificate_link:
        "https://drive.google.com/file/d/1daCgoSnRs8nGaCwOVSINnF-iGWw-t-eM/view?usp=share_link",
      alt_name: "DBS Super Rookie Recognition - Outward D3",
      color_code: "#00000099",
    },
    {
      title: "DBS Super Rookie Recognition - FPS Oct Release",
      subtitle: "- DBS Tech",
      logo_path: "DBS.png",
      certificate_link:
        "https://drive.google.com/file/d/1zJRm5V0KOW-BVYx-ttS5UbZN53RNZ-0n/view?usp=share_link",
      alt_name: "DBS Super Rookie Recognition - FPS Oct Release",
      color_code: "#00000099",
    },
    {
      title: "DBS Appsec Titan Bronze",
      subtitle: "- DBS Tech",
      logo_path: "DBS.png",
      certificate_link:
        "https://drive.google.com/file/d/1uUqymY0ePnVzxBGQn863c1baDqFmzNoF/view?usp=share_link",
      alt_name: "DBS Appsec Titan Bronze",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with MNC companies as a Full Stack Application Developer and Application Designer. I have also done a Internship during my bachelors, where i worked as an SDE - Intern. I love to take challenging problems to solve, parallely improving my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title:
            "Analyst, Specialist, Application Developer, Corporate Banking ",
          company: "DBS Tech",
          company_url: "https://www.dbs.com/dbstechindia/index.html",
          logo_path: "DBS.png",
          duration: "June 2021 - Aug 2023",
          location: "Hyderabad, Telangana",
          description:
            "I have worked on Integrated online payments Engine Project, which is the core heart of every online payment systems. The projects involves processing of a transaction end-to-end within 6 seconds. I also worked on developing spring batch jobs to automate huge number of transations and also developed User interfaces, which are used by the bank officials to view the transaction details. Our goal is to make banking easy. Think more, Bank less",
          color: "#f5f5f5",
          workPoints: [
            "Collaborated with a six-person team and Worked for Fast payments for countries Hong Kong and Vietnam.",
            "Developed a batch module for Outward C3 which allows to on-board any DBS customers without further system enhancement, support both proxy and bank account transfer into the same product code, make our bank competitive as providing late cut-off time at 7PM SGT and NoOps process on return reject cases.",
            "Developed resiliency workflow to provide supplementary information feedback to our DBS customers on Payee Account crediting status. For FPS outward real-time transfer, on top of existing account verification result provided from payee banks we can receive and return the new acknowledgement message from payee banks for crediting status.",
            "Developed Batch Job for data archiving for real time and bulk transaction processing and automated the process completely for Hongkong and Vietnam countries in which the system performance improved with enhanced results.",
            "Migrated the Internal operations team User Interface from Struts, JSP to Angular framework and implemented MFA.",
            "Fixed Log4j Critical Vulnerability issue in Integrated Payment Engine 2 for Hongkong Country.",
            "Developed and supported for Migration from VIC to OCP so the system can run with high scalability, resiliency and availability. Used HPA and Auto and De Scaling and used Service Monitor for pushing the logs to a centralized logging system GrayLog.",
            "Developed simulator for testing which is available for chromium browsers which helps to automate the Regression and Load testing.",
            "Developed Batch Job for Consolidated Payments which supports both enquiry and bulk payment. It helps the customers to do bulk transactions through online processing taking the help of batch jobs to process the bulk files.",
            "Trained interns on Full stack development by making them develop two different applications namely Industry Stub and Migration of UI from JSPs to Angular JS.",
          ],
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "SDE - Intern",
          company: "Virtusa",
          company_url: "https://www.virtusa.com/",
          logo_path: "virtusa.webp",
          duration: "May 2020 - Aug 2020",
          location: "Hyderabad, Telangana",
          description:
            "Built a User Interface with Rest Apis calls to view all the insights of github repositories. The project helped the users to view the detailed analysis of a repository in Github. It provides insights in different types of charts and graphs, so to make it easy for users to understand.",
          color: "#f5f5f5",
          workPoints: [
            "Worked as a Software Engineer using Golang programming language as backend and Vue JS as frontend technology stack.",
            "During my summer internship, I developed a project which deals with code analysis of a repository from Github. This project shows a detailed analysis of repositories in the form of tables and charts, helping the developers to analyze their code metrics of repository in a better way.",
            "Evaluated and analyzed data of repositories to provide the best analysis using Apex Charts.",
            "Used gogit to implement and execute git commands in the backend services. Collected data based on user search and evaluated it for user’s output.",
            "Introduced file structure design to switch between different folders and files of repository code.",
          ],
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Integarted systems projects using Full Stack technologies and deploy them to web applications using Linux, Docker or OCP.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "cartoon-nobg.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Python, Spring boot, Spring Batch, Angular, React, GoLang, Linux, Docker, OCP, Application Development and Full Staack Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "209 Princess St, Hicksville, NY 11801",
    locality: "Hicksville",
    country: "USA",
    region: "New York",
    postalCode: "11801",
    streetAddress: "Princess St",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/xEEmX2nEto1iSrjZ8",
  },
  phoneSection: {
    title: "shashikumarkasturi2712@gmail.com",
    subtitle: "+1 (516) 9797932",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
