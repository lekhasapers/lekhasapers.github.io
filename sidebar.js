document.addEventListener("DOMContentLoaded", function () {
    const sidebarContainer = document.querySelector(".sidebar-container");

    if (sidebarContainer) {
        fetch("sidebar.html") // Adjust the path if sidebar.html is in a different folder
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to load sidebar.html: ${response.statusText}`);
                }
                return response.text();
            })
            .then((data) => {
                sidebarContainer.innerHTML = data;

                // Highlight the active link
                const links = document.querySelectorAll(".sidebar a");
                links.forEach((link) => {
                    if (link.href === window.location.href) {
                        link.classList.add("active");
                    }
                });
            })
            .catch((error) => console.error("Error loading sidebar:", error));
    }
});


