fetch("../../sidebar2.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("sidebar-container").innerHTML = data;})
    .catch(err => console.error("Sidebar load error:", err));


function openNav() {
            document.getElementById("mySidebar").style.width = "280px";
            document.getElementById("main").style.marginLeft = "280px";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }