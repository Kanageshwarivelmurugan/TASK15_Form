
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const pincode = document.getElementById('pincode').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            
            const foodoption = document.querySelectorAll('input[name="food"]:checked');
            const foodValues = Array.from(foodoption).map(option => option.value).join(', ');
            
            const state = document.getElementById('state').value;
            const country = document.getElementById('country').value;
            
            /*
            if (foodValues.split(', ').length < 2) {
                alert('Please select at least 2 food options.');
                return;
            }*/

            
            const tableBody = document.getElementById('dataTable').querySelector('tbody');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${pincode}</td>
                <td>${gender}</td>
                <td>${foodValues}</td>
                <td>${state}</td>
                <td>${country}</td>
            `;
            tableBody.appendChild(newRow);

            // Clear form
            document.getElementById('form').reset();
        });
    
