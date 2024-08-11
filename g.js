document.addEventListener("DOMContentLoaded", function() {
    const aboutBtn = document.getElementById('about-btn');
    const skillsBtn = document.getElementById('skills-btn');
    const portfolioBtn = document.getElementById('portfolio-btn');

    aboutBtn.addEventListener('click', function() {
        document.getElementById('about').classList.toggle('hidden');
        document.getElementById('skills').classList.add('hidden');
        document.getElementById('portfolio').classList.add('hidden');
    });

    skillsBtn.addEventListener('click', function() {
        document.getElementById('skills').classList.toggle('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById('portfolio').classList.add('hidden');
    });

    portfolioBtn.addEventListener('click', function() {
        document.getElementById('portfolio').classList.toggle('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById('skills').classList.add('hidden');
    });
});



