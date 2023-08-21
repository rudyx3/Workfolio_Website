window.addEventListener('DOMContentLoaded', function() {
  var closeButtons = document.querySelectorAll('#myTable #close_button');
  var table = document.getElementById('myTable');
  var summaryList = document.querySelector('.summary-card ul');
  var totalPriceSpan = document.querySelector('.summary-card .total-price');

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
      updateSummary();
    });
  });

  function updateSummary() {
    var items = table.rows;
    var total = 0;
  
    summaryList.innerHTML = '';
  
    for (var i = 0; i < items.length; i++) {
      var serviceName = items[i].querySelector('.service-details h2.service-name').textContent;
      var servicePrice = items[i].querySelector('.service-details h2.service-price').textContent;
  
      total += parseFloat(servicePrice.substring(7));
  
      var listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="item-name">${serviceName}</span>
        <span class="item-price">${servicePrice}</span>
      `;
  
      summaryList.appendChild(listItem);
    }
  
    totalPriceSpan.innerText = '$' + total.toFixed(2);
  }
  

  // Fetch service data from JSON file
  fetch('checkout_services.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var services = data.services;

      services.forEach(function(service) {
        var newRow = table.insertRow();
        var imageCell = newRow.insertCell();
        var detailsCell = newRow.insertCell();

        imageCell.innerHTML = '<img src="' + service.image + '" alt="">';
        detailsCell.classList.add('service-details');
        detailsCell.innerHTML = `
          <button id="close_button"><img src="x-close-icon-13.jpeg" alt="buttonpng" style="width: 24px; height: 24px;"/></button>
          <h2 class="service-name">${service.name}</h2>
          <p>${service.description}</p>
          <h2 class="service-price">Total: ${service.price}</h2>
        `;

   
        var closeButton = detailsCell.querySelector('#close_button');
        closeButton.addEventListener('click', function() {
          table.deleteRow(newRow.rowIndex);
          updateSummary();
        });
      });

      updateSummary();
    })
    .catch(function(error) {
      console.log('Error fetching service data:', error);
    });
});

