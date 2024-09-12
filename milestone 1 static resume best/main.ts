document.addEventListener('DOMContentLoaded' , ()=>{
    const toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
    const skillsSection = document.getElementById("Skills") as HTMLElement;
    const profilePictureInput = document.getElementById(`profilePicture`)as HTMLInputElement;
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile):'';

      toggleButton.addEventListener('click',()=>{
        if (skillsSection.style.display === 'none'){
          skillsSection.style.display = 'block';
        } else {
          skillsSection.style.display = 'none';
        }
      })
     }
  )