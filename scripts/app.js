const projects = [
    {
        idProject: 1,
        imgProject: 'https://josecarlosalmansa.com/img/monitor-web.png'
        titleProject: 'Mi Portafolio',
        descriptionProject: 'Mi portafolio es una herramienta para mostrar mis proyectos en un formato atractivo y fácil de navegar.',
        linkProject: 'https://hoja-de-vida-ashy.vercel.app/',
    }
]

const references = [
    {
        idReference: 1,
        name: 'Luis Cervantes Ortega',
        ocupation: 'Desarrollador Frontend',
        phone: 3016869796,
        email: 'https://www.linkedin.com/in/luis-antonio-cervantes-ortega/',
    }
    {
        idReference: 2,
        name: 'Juan Pablo López',
        ocupation: 'Desarrollador Backend',
        phone: 3105908769,
        email: 'https://www.linkedin.com/in/juanpablolopez/',
    }
]

const experiences = [
    {
        idExperience: 1,
        languageName: "Java"
        percentProgress: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hMqKWp3pLEG6UPolvcZpoAUamM-NOXUeCA&s"
        level: 'Básico'
    },
    {
        idExperience: 2,
        languageName: "HTML",
        percentProgress: 50,
        image: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png"
        level: 'Básico'
    },
    {
        idExperience: 3,
        languageName: "CSS",
        percentProgress: 50,
        image: "https://damiandeluca.com.ar/wp-content/uploads/css3Logo.png"
        level: 'Básico'
    }
]

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior:'smooth'
            });
        }
    });
});
// Smooth scrolling for dropdown menus
loadSectionProjects()
function loadSectionProjects() {
    projects.forEach( project => createCardsProjects(project))
}

loadSectionReferences()
function loadSectionReferences (){
    references.forEach( reference => createCardsReferences(reference))
}

loadSectionExperiences()
function loadSectionExperiences (){
    experiences.forEach ( experience => createCardsExperiences(experience))
}


function createCardsProjects(project) {
    const cardProject = document.createElement('div');
    cardProject.classList.add('card-projects');

    const containerImg = document.createElement('div');
    containerImg.classList.add('container-img-card');

    const imgCard = document.createElement('img');
    imgProject.src = project.imgProject;
    imgProject.alt = project.titleProject;
    
    const containerDescription = document.createElement('div');
    containerDescription.classList.add('container-description-card');

    const titleCard = document.createElement('h3');
    titleCard.textContent = project.titleProject;

    const descriptionCard = document.createElement('p');
    descriptionCard.textContent = project.descriptionProject;

    const goToProject = document.createElement('a');
    goToProject.href = project.linkProject;

    goToProject.setAttribute('target','_blank')
    goToProject.textContent = 'Ir a proyecto';

    cardProject.appendChild(containerImg);
    cardProject.appendChild(containerDescription);

    containerImg.appendChild(imgCard);
    containerDescription.appendChild(titleCard);
    containerDescription.appendChild(descriptionCard);
    containerDescription.appendChild(goToProject);

    document.querySelector('container-cards').appendChild(cardProject)

} 

function createCardsReferences(reference) {
    const cardReference = document.createElement('div');
    cardReference.classList.add('card-reference');

    const pName = document.createElement('p')
    pName.textContent = 'Nombre: '
    const spanName = document.createElement('span')
    spanName.textContent = reference.name
    pName.appendChild(spanName)

    const pOcupation = document.createElement('p')
    pOcupation.textContent = 'Ocupación: '
    const spanOcupation = document.createElement('span')
    spanOcupation.textContent = reference.ocupation
    pOcupation.appendChild(spanOcupation)

    const pPhone = document.createElement('p')
    pPhone.textContent = 'Teléfono: '
    const spanPhone = document.createElement('span')
    spanPhone.textContent = reference.phone
    pPhone.appendChild(spanPhone)

    const pEmail = document.createElement('p')
    pEmail.textContent = 'Email: '
    const spanEmail = document.createElement('span')
    spanEmail.textContent = reference.email
    pEmail.appendChild(spanEmail)

    cardReference.appendChild(pName)
    cardReference.appendChild(pOcupation)
    cardReference.appendChild(pPhone)
    cardReference.appendChild(pEmail)

    document.querySelector('.card-refrences') appendChild(cardReference)
}

function createCardsExperiences(experience) {

const cardExperience = document.createElement('div')
cardExperience.classList.add('card-experience')

const imgCard = document.createElement('img')
imgCard.src = experience.image

const title = document.createElemen('h4')
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

document.querySelector('.container-experience').appendCHild(cardExperience)
}