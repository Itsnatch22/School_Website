let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },

});

var swiper = new Swiper(".teachers-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },

});

var swiper = new Swiper(".reviews-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },

});

document.querySelectorAll('.view-tutor-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const tutorId = event.target.getAttribute('data-tutor');
        const modal = document.getElementById('tutor-modal');
        const tutorName = document.getElementById('tutor-name');
        const tutorBio = document.getElementById('tutor-bio');
        const tutorExpertise = document.getElementById('tutor-expertise');

        if (tutorId === '1') {
            tutorName.textContent = 'Katelyn Snow';
            tutorBio.textContent = 'Katelyn has over 10 years of experience in computer science and software engineering.';
            tutorExpertise.textContent = 'Expert in Python, JavaScript, and Web Development.';
        } else if (tutorId === '2') {
            tutorName.textContent = 'Cisco Ramon';
            tutorBio.textContent = 'Cisco is an experienced tutor with a passion for teaching coding to beginners.';
            tutorExpertise.textContent = 'Expert in Front-End Development and UI/UX Design.';
        }

        modal.style.display = 'block';
    });
});

document.querySelectorAll('.view-course-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const courseId = event.target.getAttribute('data-course');
        const modal = document.getElementById('course-modal');
        const courseName = document.getElementById('course-name');
        const courseDescription = document.getElementById('course-description');

        if (courseId === '1') {
            courseName.textContent = 'Web Development';
            courseDescription.textContent = 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.';
        }

        modal.style.display = 'block';
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('tutor-modal').style.display = 'none';
        document.getElementById('course-modal').style.display = 'none';
    });
});

document.querySelector('form[action=""]').addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Thank you for submission, We hope that we\'ll reach back to you soon enough and proceed with your admission');

    const letterContent = `Dear Student,

Thank you for submitting your details to Innitt. We are excited to inform you that your admission process is being reviewed.

We hope to reach out to you soon and proceed with your enrollment.

Best regards,
The Innitt Team`;

    const blob = new Blob([letterContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'enrollment-letter.pdf'; 

    link.click();
});
