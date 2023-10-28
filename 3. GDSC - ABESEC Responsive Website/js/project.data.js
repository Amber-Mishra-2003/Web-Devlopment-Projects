/* ********************************************************** */
// Projects Details Data Object
/* ********************************************************** */

let projectDetails = [
  {
    id: 1,
    name: "Rock-Paper-Scissor",
    repo: "Developer-Students-Club-ABESEC / Rock-Paper-Scissors",
    desc: "Rock Paper and Scissor game and which is open source 🤩.",

    viewLink: "https://developer-students-club-abesec.github.io/Rock-Paper-Scissors/",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/Rock-Paper-Scissors",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 2,
    name: "Weather Application",
    repo: "Developer-Students-Club-ABESEC / WeatherApp",
    desc: "Open Source Web based Weather App.",

    viewLink: "https://developer-students-club-abesec.github.io/WeatherApp/",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/WeatherApp",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 3,
    name: "Blog Application",
    repo: "Developer-Students-Club-ABESEC / Blog-App",
    desc:
      "A Special Open-Source Repository for all kinds of Blogs related to the technology and various coding langauges",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/Blog-App",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 4,
    name: "Certificate Generator",
    repo: "Developer-Students-Club-ABESEC / certificate-generator",
    desc: "Ever heard about a Picture based Dictionary? , it's here!",

    viewLink: "https://easyfiles.pythonanywhere.com/",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/certificate-generator",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 5,
    name: "GDSC Club Website",
    repo: "Developer-Students-Club-ABESEC / club-website",
    desc: "One place destination to check trending data across websites.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/club-website",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 6,
    name: "TipTime",
    repo: "Developer-Students-Club-ABESEC / TipTime",
    desc: "Productivity Solution for Educators and Students.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/TipTime",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 7,
    name: "Automobile Gallery",
    repo: "Developer-Students-Club-ABESEC / AutomobileGallery",
    desc: "Automobile Gallery made by HTML , CSS and Javascript.",

    viewLink: "https://developer-students-club-abesec.github.io/AutomobileGallery/",
    repoLink: "https://github.com/Developer-Students-Club-ABESEC/AutomobileGallery",

    viewtarget: "_self",
    repotarget: "_blank",
  },
];

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectDiv = document.querySelector(".projects_contents");

Object.values(projectDetails).map((val) => {
  projectDiv.innerHTML += `
        <!-- Project ${val.id} -->
        <div class="project_card">
            <h2>${val.name}</h2>
            <a href="${val.repoLink}" class="repo">${val.repo}</a>
            <p>${val.desc}</p>
            <div class="links">
                <a href="${val.viewLink}" target="${val.viewtarget}">Preview</a>
                <a href="${val.repoLink}" target="${val.repotarget}">Repository</a>
            </div>
        </div>
    `;
});
