document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});

function fetchUserData() {
    // Define API URL (as constant)
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Get DOM element
    const dataContainer = document.getElementById('api-data');
    
    // Fetch user data
    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (users) {
            // Clear loading message
            dataContainer.innerHTML = '';
            
            // Create list element
            const userList = document.createElement('ul');
            
            // Populate list
            users.forEach(function (user) {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            
            // Display list
            dataContainer.appendChild(userList);
        })
        .catch(function (error) {
            // Handle errors
            dataContainer.innerHTML = '';
            const errorElement = document.createElement('div');
            errorElement.textContent = 'Failed to load user data.';
            errorElement.style.color = '#dc3545';
            dataContainer.appendChild(errorElement);
            
            console.error('Error fetching data:', error);
        });
}
