document.addEventListener('DOMContentLoaded', function() {
    window.Telegram.WebApp.expand();

    const userId = 1; // Replace with the actual user ID, possibly retrieved from Telegram Web App context or another source
    const apiUrl = 'https://fefe-185-137-140-138.ngrok-free.app';

    fetch(`${apiUrl}/api/users/${userId}/referrer-id`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const invitationLink = `https://t.me/HoldemCoinBot?start=${data}`;
            document.getElementById('invitation-link').textContent = invitationLink;
        })
        .catch(error => {
            console.error('Error fetching referrer ID:', error);
            document.getElementById('invitation-link').textContent = 'Error loading invitation link';
        });
});

function openInvitePage() {
    window.location.href = 'invite.html';
}