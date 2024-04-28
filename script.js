const ques1 = document.getElementById('ques-1');
const ques2 = document.getElementById('ques-2');
const ques3 = document.getElementById('ques-3');
const ques4 = document.getElementById('ques-4');
//Button declaration
const svg1 = document.getElementById('minus-1');
const svg2 = document.getElementById('minus-2');
const svg3 = document.getElementById('minus-3');
const svg4 = document.getElementById('minus-4');
const answers = [`Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`,` Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`,`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`,`The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.
      `]
//Functions

function toggleAnswer1() {
    const answerElement = document.querySelector('#ques-1 .add1');
    
    //  Creating Answer element
    if (!answerElement) {
        const p = document.createElement('p');
        p.classList.add('add1');
        p.textContent = answers[0];
        ques1.appendChild(p);
        svg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
    } else {
        answerElement.classList.toggle('hidden');

        if (answerElement.classList.contains('hidden')) {
            svg1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>'; // Change SVG back to original
        } else {
            svg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`; // Change SVG here
        }
    }
}

function toggleAnswer2() {
    const answerElement2 = document.querySelector('#ques-2 .add1');
    
    //  Creating Answer element
    if (!answerElement2) {
        const p = document.createElement('p');
        p.classList.add('add1');
        p.textContent = answers[1];
        ques2.appendChild(p);
        svg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
    } else {
        answerElement2.classList.toggle('hidden');

        if (answerElement2.classList.contains('hidden')) {
            svg2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>'; // Change SVG back to original
        } else {
            svg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`; // Change SVG here
        }
    }
}

function toggleAnswer3() {
    const answerElement3 = document.querySelector('#ques-3 .add1');
    
    //  Creating Answer element
    if (!answerElement3) {
        const p = document.createElement('p');
        p.classList.add('add1');
        p.textContent = answers[2];
        ques3.appendChild(p);
        svg3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
    } else {
        answerElement3.classList.toggle('hidden');

        if (answerElement3.classList.contains('hidden')) {
            svg3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>'; // Change SVG back to original
        } else {
            svg3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`; // Change SVG here
        }
    }
}

function toggleAnswer4() {
    const answerElement = document.querySelector('#ques-4 .add1');
    
    //  Creating Answer element
    if (!answerElement) {
        const p = document.createElement('p');
        p.classList.add('add1');
        p.textContent = answers[3];
        ques4.appendChild(p);
        svg4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
    } else {
        answerElement.classList.toggle('hidden');

        if (answerElement.classList.contains('hidden')) {
            svg4.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>'; // Change SVG back to original
        } else {
            svg4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`; // Change SVG here
        }
    }
}

svg1.addEventListener('click', toggleAnswer1);
svg2.addEventListener('click', toggleAnswer2);
svg3.addEventListener('click', toggleAnswer3);
svg4.addEventListener('click', toggleAnswer4);