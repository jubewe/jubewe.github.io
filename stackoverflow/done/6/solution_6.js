let sidebarEl = document.getElementsByClassName("sidebar-item");
for(item in [...sidebarEl]){
    console.log([...sidebarEl][item]);
    [...sidebarEl][item].addEventListener("click", ev => {
        console.log("add")
        var w = window.innerWidth;
        if (w <= 991) {
            sidebarEl.classList.remove("active");
        }
    });
    
};