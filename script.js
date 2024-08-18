// JavaScript to change the content of the About Me section on click

// Select the about section
document.getElementById('about').addEventListener('click', function() {
    // Update the summary text when the section is clicked
    document.getElementById('about-summary').textContent = "Hi! I'm John Smith, a web developer who loves creating interactive and dynamic web experiences. I specialize in JavaScript, CSS, and HTML. In my free time, I enjoy hiking, reading, and experimenting with new web technologies.";
});
