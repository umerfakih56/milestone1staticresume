document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var toggleButton = document.getElementById("toggleSkillsButton");
    var skillsSection = document.getElementById("Skills");
    var profilePictureInput = document.getElementById("profilePicture");
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
