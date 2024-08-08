async function getPostWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.body.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Example usage
getPostWithErrorHandling();
