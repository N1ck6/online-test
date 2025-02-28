fetch('/api/key')
    .then(response => response.json())
    .then(data => console.log(data.apiKey));
