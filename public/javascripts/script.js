function darkMode()
{
    // Dark mode toggle logic
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeIcon.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeIcon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeIcon.textContent = '🌙';
    }
});
}

darkMode()