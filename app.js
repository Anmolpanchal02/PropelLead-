document.addEventListener('DOMContentLoaded', function () {
    // Example code to dynamically update mentor card images and names
    const mentorCards = document.querySelectorAll('.mentor-card');
    const mentors = [
        {name: 'Mentor 1', image: 'https://via.placeholder.com/150'},
        {name: 'Mentor 2', image: 'https://via.placeholder.com/150'},
        {name: 'Mentor 3', image: 'https://via.placeholder.com/150'},
    ];

    mentorCards.forEach((card, index) => {
        if (mentors[index]) {
            card.querySelector('h4').innerText = mentors[index].name;
            card.querySelector('img').src = mentors[index].image;
        }
    });

    // Code for other dynamic functionalities like a slider
});
