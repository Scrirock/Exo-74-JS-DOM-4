let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    let stashePic = document.getElementById("mustache-pic");
    stashePic.style.top = e.clientY+"px";
    stashePic.style.left = e.clientX+"px";
};

catPic.addEventListener("click", onCatClick);








