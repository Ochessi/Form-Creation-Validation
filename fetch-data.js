document.addEventListener('DOMContentLoaded', async () => {
    // Define API URL (as constant)
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Get DOM element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        
        // Check response status
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse JSON
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create list element
        const userList = document.createElement('ul');
        
        // Populate list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Display list
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        const errorElement = document.createElement('div');
        errorElement.textContent = 'Failed to load user data.';
        errorElement.style.color = '#dc3545';
        dataContainer.appendChild(errorElement);
        
        console.error('Error fetching data:', error);
    }
});