const projects = [
    {
        idProject: 1,
        imgProject: 'assets/img/portafolio.png',
        titleProject: 'Mi Portafolio',
        descriptionProject: 'Mi portafolio es una herramienta para mostrar mis proyectos en un formato atractivo y fácil de navegar.',
        linkProject: 'https://hoja-de-vida-ashy.vercel.app/',
    }
]

const references = [
    {
        idReference: 1,
        name: 'Luis Cervantes Ortega',
        occupation: 'Desarrollador Frontend',
        linkedin: 'https://www.linkedin.com/in/luis-antonio-cervantes-ortega/',
    },
    {
        idReference: 2,
        name: 'Juan Pablo López',
        occupation: 'Desarrollador Backend',
        linkedin: 'https://www.linkedin.com/in/juanpablolopez/',
    }
]

const experiences = [
    {
        idExperience: 1,
        languageName: "JavaScript",
        percentProgress: 50,
        image: "assets/img/js.svg",
        level: 'Básico'
    },
    {
        idExperience: 2,
        languageName: "HTML",
        percentProgress: 50,
        image: "assets/img/html.svg",
        level: 'Básico'
    },
    {
        idExperience: 3,
        languageName: "CSS",
        percentProgress: 50,
        image: "assets/img/css.svg",
        level: 'Básico'
    }
]

function loadSectionProjects() {
    projects.forEach( project => createCardsProjects(project))
}

function loadSectionReferences (){
    references.forEach( reference => createCardsReferences(reference))
}

function loadSectionExperiences (){
    experiences.forEach ( experience => createCardsExperiences(experience))
}


function createCardsProjects(project) {
    const cardProject = document.createElement('div');
    cardProject.classList.add('card-projects');

    const containerImg = document.createElement('div');
    containerImg.classList.add('container-img-card');

    const imgCard = document.createElement('img');
    imgCard.src = project.imgProject;
    imgCard.alt = project.titleProject;
    
    const containerDescription = document.createElement('div');
    containerDescription.classList.add('container-description-card');

    const titleCard = document.createElement('h3');
    titleCard.textContent = project.titleProject;

    const descriptionCard = document.createElement('p');
    descriptionCard.textContent = project.descriptionProject;

    const goToProject = document.createElement('a');
    goToProject.href = project.linkProject;

    goToProject.target = '_blank';
    goToProject.rel = 'noopener noreferrer';
    goToProject.textContent = 'Ir a proyecto';

    cardProject.appendChild(containerImg);
    cardProject.appendChild(containerDescription);

    containerImg.appendChild(imgCard);
    containerDescription.appendChild(titleCard);
    containerDescription.appendChild(descriptionCard);
    containerDescription.appendChild(goToProject);

    document.querySelector('.container-cards').appendChild(cardProject)

} 

function createField(label, value) {
    const p = document.createElement('p');
    p.textContent = `${label}: `;
    const span = document.createElement('span');
    span.textContent = value;
    p.appendChild(span);
    return p;
}

function createCardsReferences(reference) {
    const cardReference = document.createElement('div');
    cardReference.classList.add('card-reference');

    const pLinkedin = document.createElement('p');
    pLinkedin.textContent = 'LinkedIn: ';
    const aLinkedin = document.createElement('a');
    aLinkedin.href = reference.linkedin;
    aLinkedin.target = '_blank';
    aLinkedin.rel = 'noopener noreferrer';
    aLinkedin.setAttribute('aria-label', `LinkedIn de ${reference.name}`);
    aLinkedin.classList.add('bx', 'bxl-linkedin');
    pLinkedin.appendChild(aLinkedin);

    cardReference.append(
        createField('Nombre', reference.name),
        createField('Ocupación', reference.occupation),
        pLinkedin
    );

    document.querySelector('.card-references').appendChild(cardReference);
}

function createCardsExperiences(experience) {

const cardExperience = document.createElement('div')
cardExperience.classList.add('card-experience')

const imgCard = document.createElement('img')
imgCard.src = experience.image
imgCard.alt = `Logo de ${experience.languageName}`

const title = document.createElement('h4')
title.textContent = experience.languageName

const level = document.createElement('h5')
level.textContent = experience.level

const progress = document.createElement('progress')
progress.classList.add('progress-bar')
progress.setAttribute('value', experience.percentProgress)
progress.setAttribute('max','100')

cardExperience.appendChild(imgCard)
cardExperience.appendChild(title)
cardExperience.appendChild(progress)
cardExperience.appendChild(level)

document.querySelector('.container-experiences').appendChild(cardExperience)
}
loadSectionProjects()
loadSectionReferences()
loadSectionExperiences()
