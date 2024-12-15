// Handle Like Button
const likeButton = document.querySelector('.post button');

likeButton.addEventListener('click', () => {
    if (likeButton.textContent === 'Like') {
        likeButton.textContent = 'Liked';
        likeButton.style.backgroundColor = '#ff6666'; // Red when liked
    } else {
        likeButton.textContent = 'Like';
        likeButton.style.backgroundColor = '#0099ff'; // Reset to blue
    }
});