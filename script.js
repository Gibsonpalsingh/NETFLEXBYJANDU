document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle dark mode on button click
    const toggleBtn = document.getElementById('toggle-theme');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Example: Show selected movie details
    const movieList = document.getElementById('movie-list');
    const movieDetails = document.getElementById('movie-details');

    if (movieList && movieDetails) {
        movieList.addEventListener('click', (e) => {
            const target = e.target.closest('.movie-item');
            if (target) {
                const title = target.dataset.title;
                const desc = target.dataset.description;
                movieDetails.innerHTML = `
                    <h2>${title}</h2>
                    <p>${desc}</p>
                `;
                movieDetails.style.display = 'block';
            }
        });
    }

    // Redirect "Movies" option to external link
    const moviesOption = document.getElementById('movies-option');
    if (moviesOption) {
        moviesOption.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://netfree2.cc/verify';
        });
    }
});