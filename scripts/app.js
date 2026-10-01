const projects = [
    {
        idProject: 1,
        imgProject: 'assets/img/portafolio.png',
        titleProject: 'Portafolio web',
        descriptionProject: 'Sitio personal responsivo para presentar mi perfil, habilidades y proyectos.',
        demoProject: 'https://lauras527.github.io/miportafolio-enyoi/',
        sourceProject: 'https://github.com/lauraS527/miportafolio-enyoi',
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

const skills = [
    {
        idExperience: 1,
        languageName: "JavaScript",
        image: "assets/img/js.svg",
        level: 'Básico'
    },
    {
        idExperience: 2,
        languageName: "HTML",
        image: "assets/img/html.svg",
        level: 'Básico'
    },
    {
        idExperience: 3,
        languageName: "CSS",
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

function loadSectionSkills (){
    skills.forEach(skill => createSkillCard(skill))
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

    const projectLinks = document.createElement('div');
    projectLinks.classList.add('project-links');

    const demoLink = document.createElement('a');
    demoLink.href = project.demoProject;
    demoLink.target = '_blank';
    demoLink.rel = 'noopener noreferrer';
    demoLink.textContent = 'Ver demo';

    const sourceLink = document.createElement('a');
    sourceLink.href = project.sourceProject;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    sourceLink.textContent = 'Ver código';

    cardProject.appendChild(containerImg);
    cardProject.appendChild(containerDescription);

    containerImg.appendChild(imgCard);
    containerDescription.appendChild(titleCard);
    containerDescription.appendChild(descriptionCard);
    containerDescription.appendChild(projectLinks);
    projectLinks.appendChild(demoLink);
    projectLinks.appendChild(sourceLink);

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

function createSkillCard(skill) {

const cardExperience = document.createElement('div')
cardExperience.classList.add('card-experience')

const imgCard = document.createElement('img')
imgCard.src = skill.image
imgCard.alt = `Logo de ${skill.languageName}`

const title = document.createElement('h4')
title.textContent = skill.languageName

const levelDescription = document.createElement('p')
levelDescription.classList.add('skill-level')
levelDescription.textContent = `Nivel actual: ${skill.level}`

cardExperience.appendChild(imgCard)
cardExperience.appendChild(title)
cardExperience.appendChild(levelDescription)

document.querySelector('.container-experiences').appendChild(cardExperience)
}
loadSectionProjects()
loadSectionReferences()
loadSectionSkills()
