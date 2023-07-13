//Import common elements
document.addEventListener("DOMContentLoaded", function () {
    var scripts = document.getElementsByTagName("div");
    var containerData = [];
  
    // Find the script tags with the data_container_id attribute
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute("data_container_id")) {
        var containerId = scripts[i].getAttribute("data_container_id");
        var sharedElementId = scripts[i].getAttribute("data_element_id");
        if (containerId) {
          containerData.push({ containerId: containerId, sharedElementId: sharedElementId });
        }
      }
    }
  
    // Process each container data
    containerData.forEach(function (data) {
      var containerId = data.containerId;
      var sharedElementId = data.sharedElementId;
  
      // Fetch the common.html file
      fetch("./common_elements/common.html")
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          var tempContainer = document.createElement("div");
          tempContainer.innerHTML = html;
  
          var desiredElement = tempContainer.querySelector('[data_element_id="' + sharedElementId + '"]');
          var container = document.querySelector('[data_container_id="' + containerId + '"]');
          var newElement = document.createElement(desiredElement.tagName);
          newElement.innerHTML = desiredElement.innerHTML;
  
          container.parentNode.insertBefore(newElement, container.nextSibling);
  
          container.removeAttribute("data_container_id");
        });
    });
  });