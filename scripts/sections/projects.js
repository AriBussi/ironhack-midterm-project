import { getProjectsPreview } from '../availableProjects.js';

const projectsPreview = getProjectsPreview();
const cardsContainer = document.querySelector('#projects-section .cards-container');

const createCard = (project) => {
    const formattedTitle = (project.title).toLowerCase();

    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const cardImage = document.createElement('div');
    cardImage.className = `project-image ${formattedTitle}-project`;
    cardImage.style.backgroundImage = `url('../../assets/projects-section/${project.backgroundImage}')`
    
    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = project.title;

    const cardArea = document.createElement('p');
    cardArea.innerText = project.area;

    const cardLink = document.createElement('a');
    cardLink.innerText = 'Learn more';
    cardLink.href = `/detail.html?project=${formattedTitle}`

    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardArea);
    cardInfo.appendChild(cardLink);

    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardInfo);

    return cardElement;
};

projectsPreview.forEach(project => cardsContainer.appendChild(createCard(project)));
