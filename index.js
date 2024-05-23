document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = { name, email };

    fetch('https://script.google.com/macros/s/AKfycbwoxXysfnAnTcG3epLSUP7ST39iBu_-J7FQr52lRsvXtc0nNWhkEB_9Nnqc25Cyamwvhw/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.result === 'success') {
            document.getElementById('message').textContent = 'Data submitted successfully!';
        } else {
            document.getElementById('message').textContent = 'Error: ' + data.message;
        }
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Error submitting data: ' + error.message;
        console.error('Error:', error);
    });
});