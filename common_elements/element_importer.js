document.addEventListener("DOMContentLoaded", function () {
    var scripts = document.querySelectorAll("[data_container_id]");
    var containerData = [];

    scripts.forEach(function (script) {
        var containerId = script.getAttribute("data_container_id");
        var sharedElementId = script.getAttribute("data_element_id");
        var blogNest = script.getAttribute("blog_nest");

        if (containerId) {
            containerData.push({ containerId: containerId, sharedElementId: sharedElementId, blogNest: blogNest });
        }
    });

    containerData.forEach(function (data) {
        var containerId = data.containerId;
        var sharedElementId = data.sharedElementId;
        var blogNest = data.blogNest;
        var fetchPath = blogNest === "True" ? "../blog_common.html" : "./common_elements/common.html";

        fetch(fetchPath)
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
