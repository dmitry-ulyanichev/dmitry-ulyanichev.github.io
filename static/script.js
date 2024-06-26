document.addEventListener('DOMContentLoaded', function() {
    window.Telegram.WebApp.expand();

    const userId = 27; // Replace with the actual user ID, possibly retrieved from Telegram Web App context or another source
    const apiUrl = 'https://77e5-185-137-140-138.ngrok-free.app';

    fetch(`${apiUrl}/api/users/${userId}/referrer-id`, {
        headers: {
            'ngrok-skip-browser-warning': 'true',
            'User-Agent': 'CustomUserAgent'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // return response.json();
            return response.text();
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