const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hypertext Machine Language",
        d: "Cars SUVs Sailboats",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What is a software 'bug' ?",
        a: "An unwanted and unintended property",
        b: "Documentation of software",
        c: "Part of the software design process",
        d: "A repeated cycle in software processes",
        correct: "a",
    },
    {
        question: "What is Software Engineering?",
        a: "Engineering of software hardware",
        b: "Application of engineering principles to software development",
        c: "Development of new software languages",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is the difference between software engineering and computer science?",
        a: "There is no difference",
        b: "Computer science focuses on theory and algorithms, while software engineering focuses on practical application and development",
        c: "Both focus on hardware development",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is the purpose of unit testing in software engineering?",
        a: "To test the software as a whole",
        b: "To verify that individual units of code function as expected",
        c: "To validate user interface elements",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is deployment in software engineering?",
        a: "The process of removing bugs from the software",
        b: "The process of making the software available for use",
        c: "The process of downsizing the software",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is a software bug tracking system?",
        a: "A system for tracking software development progress",
        b: "A system for keeping track of software features",
        c: "A system for recording and managing software bugs reported by users or testers",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the purpose of version control systems in software engineering?",
        a: "To track changes made to software code",
        b: "To organize team communication",
        c: "To create different versions of software",
        d: "To automate testing processes",
        correct: "a",
    },
    {
        question: "What does the term 'API' stand for in software development?",
        a: "Application Program Interface",
        b: "Advanced Programming Instruction",
        c: "Automated Project Integration",
        d: "Application Programming Integration",
        correct: "a",
    },
    {
        question: "What is the primary goal of unit testing in software development?",
        a: "To check if the software meets the customer requirements",
        b: "To ensure that individual units of code work as intended",
        c: "To identify vulnerabilities in the software",
        d: "To measure the software performance",
        correct: "b",
    },
    {
        question: "What does the acronym 'SDLC' stand for in software development?",
        a: "Software Development Lifespan Cycle",
        b: "System Development Lifecycle",
        c: "Structured Development Life Cycle",
        d: "Software Deployment and Lifecycle",
        correct: "b",
    },
    {
        question: "What is the purpose of a software requirement specification (SRS) document?",
        a: "To determine the program's budget",
        b: "To create a roadmap for project development",
        c: "To outline the functional and non-functional requirements of the software",
        d: "To define the project's target audience",
        correct: "c",
    },
    {
        question: "What does 'IDE' stand for in software engineering?",
        a: "Interconnected Development Environment",
        b: "Integrated Development Environment",
        c: "Individual Development Execution",
        d: "Instructional Design Environment",
        correct: "b",
    },
    {
        question: "What is the purpose of a 'code review' in software development?",
        a: "To modify the programming language",
        b: "To check for possible bugs and ensure the quality of the code",
        c: "To enforce coding standards",
        d: "To solve customer issues",
        correct: "b",
    },
    {
        question: "Which software development approach focuses on an iterative and incremental process?",
        a: "Waterfall",
        b: "Spiral",
        c: "Agile",
        d: "RAD (Rapid Application Development)",
        correct: "c",
    },
    {
        question: "What does 'OOP' stand for in programming?",
        a: "Object-Oriented Programming",
        b: "Ordinary Object Protocol",
        c: "Ordered Operation Process",
        d: "Object-Oriented Protocol",
        correct: "a",
    },
    {
        question: "What is the purpose of a 'UML diagram' in software engineering?",
        a: "To track user interactions with the system",
        b: "To represent the design of a system",
        c: "To organize code modules",
        d: "To build user interfaces",
        correct: "b",
    },
    {
        question: "What does 'CI/CD' stand for in software development?",
        a: "Continuous Integration/Continuous Deployment",
        b: "Continuous Interaction/Continuous Departure",
        c: "Continuous Interface/Continuous Development",
        d: "Continuous Inheritance/Continuous Distribution",
        correct: "a",
    },
    {
        question: "What does the acronym 'SQL' stand for in the context of databases?",
        a: "Sequential Query Language",
        b: "Structured Query Language",
        c: "System Query Language",
        d: "Standardized Query Language",
        correct: "b",
    },
    {
        question: "Which programming language is commonly used for creating web-based applications?",
        a: "C#",
        b: "Python",
        c: "JavaScript",
        d: "Java",
        correct: "c",
    },
    {
        question: "What is the purpose of 'refactoring' in software development?",
        a: "To slow down the development process",
        b: "To remove unnecessary complexity from the code",
        c: "To add more bugs to the software",
        d: "To demonstrate the expertise of the developers",
        correct: "b",
    },
    {
        question: "What is the objective of 'performance testing' in software engineering?",
        a: "To create a user-friendly interface",
        b: "To analyze the efficiency of the software under various conditions",
        c: "To verify that the software fulfills the customer's requirements",
        d: "To ensure that the software functions across different devices",
        correct: "b",
    }
];

let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
const qurstionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    qurstionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelect() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelect();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
			<h2>You answered ${score}/${quizData.length} questions correctly</h2>
			<button onclick="location.reload()">Reload</button>
			`;
        }
    }
});