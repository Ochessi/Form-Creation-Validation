document.addEventListener('DOMContentLoaded', async () => {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Get DOM elements
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse JSON response
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create user list
        const userList = document.createElement('ul');
        
        // Add each user to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append list to container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Failed to load user data.';
        errorMessage.style.color = '#dc3545';
        errorMessage.style.padding = '15px';
        errorMessage.style.textAlign = 'center';
        dataContainer.appendChild(errorMessage);
        
        console.error('Fetch error:', error);
    }
});