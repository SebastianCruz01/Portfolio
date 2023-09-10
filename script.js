const projects = [
    {
        image: "project1.jpg",
        title: "Project 1",
        description: "This is a description of my first project."
    },
    {
        image: "project2.jpg",
        title: "Project 2",
        description: "This is a description of my second project."
    }
];

const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showProject(index) {
    const project = projects[index];
    projectImage.src = project.image;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
}

nextBtn.addEventListener("click", nextProject);
prevBtn.addEventListener("click", prevProject);

// Display the first project initially
showProject(currentIndex);
