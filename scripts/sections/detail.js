import { availableProjects } from '../availableProjects.js'

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const project = params.project;
  const selectedProject = availableProjects[project];
  
  if(selectedProject) {
    const detailTitle = document.querySelector('.detail-title');
    detailTitle.textContent = selectedProject.title;

    const detailArea = document.querySelector('.detail-area');
    detailArea.textContent = selectedProject.area;

    const detailDate = document.querySelector('.detail-date span');
    detailDate.textContent = selectedProject.completedDate;

    const detailImage = document.querySelector('.detail-image');
    detailImage.style.backgroundImage = `url(${selectedProject.backgroundImage})`

    const detailDescription = document.querySelector('.detail-description');
    selectedProject.description.forEach(paragraph => {
        const pTag = document.createElement('p');
        const textNode = document.createTextNode(paragraph);
        pTag.appendChild(textNode);
        detailDescription.appendChild(pTag);
    });
  }

