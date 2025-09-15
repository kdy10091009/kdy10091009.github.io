

// 1) 프로젝트 배열 (네 것에 맞게만 수정)
const projects = [
  {
    title: "Google Map Application Project",
    image: "/assets/img/google-map-thumbnail.jpeg",
    summary:
      "A geographic information system (GIS) that provides users with information about various locations around the globe.",
    details: [
      "<b>Tools:</b> C++, OpenStreetMap API, EZGL",
      "Implemented path-finding algorithms (Dijkstra's, A*) using optimized data structures and object-oriented design for efficiency.",
      "The map can zoom in/out smoothly with mouse scroll/drag",
      "The map displays points of interest such as subway stations, bus stops, restaurants, cafes, theatres, etc.",
      "Implemented a search bar so that users can quickly find certain locations.",
    ],
    demo: "https://galvanic-music.herokuapp.com/",
    repo: "https://github.com/varadbhogayata/music-player",
    end_date: "2023-04-30",
  },
  {
    title: "Table Hockey Design Project",
    image: "/assets/img/table-hockey-thumbnail.png",
    summary:
      "Implemented a Table Hockey game on an FPGA board (DE1-SoC) using C and ARM assembly language.",
    details: [
      "<b>Tools:</b> C, ARM Processor of the DE1-SoC, VGA output",
      "Developed a table hockey game in C running on the ARM processor of the DE1-SoC, rendering gameplay via VGA output.",
      "Implemented double-buffered graphics rendering using a pixel buffer controller on the FPGA, enabling smooth visual output.",
    ],
    demo: "https://quiz-up-app.herokuapp.com/",
    repo: "https://github.com/varadbhogayata/QuizUp",
    end_date: "2023-04-10",
  },
  {
    title: "Engineering Strategies & Practices II Project",
    image: "/assets/img/esp2-thumbnail.png",
    summary:
      "A design project to develop a workable solution to boost TTC Line 1 subway ridership during COVID-19.",
    details: [
      "Proposed UV light lamp solutions to boost TTC Line 1 subway ridership by eliminating 99% of airborne SARS-CoV-2 particles.",
    ],
    demo: "https://flask-heroku-blog.herokuapp.com/",
    repo: "https://github.com/varadbhogayata/flask-blog",
    end_date: "2022-04-30",
  },
  {
    title: "Reversi Game",
    image: "/assets/img/reversi-thumbnail.png",
    summary: "A text-based Reversi game.",
    details: [
      "Tool: C",
      "Built a text-based Reversi game in C with move computation algorithms for human and AI players.",
    ],
    demo: "",
    repo: "https://github.com/varadbhogayata/visual-question-answering",
    end_date: "2021-12-01",
  },
];

let idx_total_projects = 0;
const num_projects_per_click = 1;

projects.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));

function buildCardHTML(p) {
  let details = "";
  if (Array.isArray(p.details)) {
    for (const d of p.details) details += `<li>${d}</li>`;
  }
  const summary = p.summary || "";

  return `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img src="${p.image}" alt="${p.title}" class="activator" style="height:100%;width:100%;">
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">
            ${p.title}
            <i class="mdi-navigation-more-vert right"></i>
          </span>
          <p>${summary}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text">
            <small>Accomplishments</small>
            <i class="mdi-navigation-close right"></i>
          </span>
          <ul>
            ${details}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function dynamicLoading() {
  const container = document.getElementById("recent-projects");
  if (!container) return;

  let loadedThisClick = 0;
  while (loadedThisClick < num_projects_per_click && idx_total_projects < projects.length) {
    const p = projects[idx_total_projects];           
    const html = buildCardHTML(p);            
    container.insertAdjacentHTML("beforeend", html);  
    idx_total_projects++;
    loadedThisClick++;
  }

  if (idx_total_projects >= projects.length) {
    const btn = document.getElementById("load-more");
    if (btn) btn.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  dynamicLoading(); 
  const btn = document.getElementById("load-more");
  if (btn) btn.addEventListener("click", dynamicLoading);
});
