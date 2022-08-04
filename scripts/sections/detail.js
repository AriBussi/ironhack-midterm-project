import { availableProjects } from '../projects.js'

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const project = params.project;
  const selectedProject = availableProjects[project];

const detailTitle = document.querySelector('.detail-header h1');

detailTitle.textContent = selectedProject.title;



// console.log(project);
