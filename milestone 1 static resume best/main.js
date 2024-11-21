var skillBtn = document.querySelector("#skills-btn");
var skillList = document.querySelector(".skills");
skillBtn.innerHTML = "Hide Skills";
skillBtn === null || skillBtn === void 0 ? void 0 : skillBtn.addEventListener("click", function () {
    if (skillList.style.display === "none" || !skillList.style.display) {
        skillBtn.innerHTML = "Hide Skills";
        skillList.style.display = "block";
    }
    else {
        skillList.style.display = "none";
        skillBtn.innerHTML = "Show Skills";
    }
});
