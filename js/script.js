// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('action-btn');

    // Add a simple click event listener
    actionBtn.addEventListener('click', () => {
        alert('Hello! Your GitHub website is up and running successfully.');
    });
});
