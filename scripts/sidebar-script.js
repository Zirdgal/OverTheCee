const btn = document.getElementById("sidebar-button");
const sideBarContent = document.getElementById("sidebar-full-container");

let sideBarState = true;

btn.onclick = function moveSideBar() {
    if (sideBarState === true) {
        sideBarContent.style.display = "none";
        btn.innerHTML = ">";
        sideBarState = false;
    } else {
        sideBarContent.style.display = "block";
        btn.innerHTML = "<";
        sideBarState = true;
    }
};