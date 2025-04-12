fetch('log.php')
    .then(response => response.json())
    .then(data => {
        console.log('User info logged:', data);
    })
    .catch(error => {
        console.error('Error logging user info:', error);
    });
