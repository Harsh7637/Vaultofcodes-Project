document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.querySelector('.profile-pic');
    const cameraIcon = document.querySelector('#camera-icon');
    const fileInput = document.querySelector('#file-input');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    const passwordStrength = document.querySelector('#passwordStrength');

    // Handle profile picture upload when the camera icon is clicked
    cameraIcon.addEventListener('click', function() {
        fileInput.click();
    });

    // Handle the file selection for profile picture
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                profilePic.src = e.target.result;
            }

            reader.readAsDataURL(this.files[0]);
        }
    });

    // Handle password strength and match indicators
    password.addEventListener('input', updatePasswordStrength);
    confirmPassword.addEventListener('input', updatePasswordStrength);

    function updatePasswordStrength() {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;

        if (passwordValue === confirmPasswordValue) {
            passwordStrength.textContent = "Passwords Match";
            passwordStrength.style.color = "green";
        } else if (confirmPasswordValue !== "") {
            passwordStrength.textContent = "Passwords Do Not Match";
            passwordStrength.style.color = "red";
        } else if (passwordValue.length >= 8) {
            passwordStrength.textContent = "Strong";
            passwordStrength.style.color = "green";
        } else if (passwordValue.length >= 6) {
            passwordStrength.textContent = "Medium";
            passwordStrength.style.color = "orange";
        } else {
            passwordStrength.textContent = "Weak";
            passwordStrength.style.color = "red";
        }
    }
});
