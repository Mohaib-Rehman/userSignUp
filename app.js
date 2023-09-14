// Get HTML elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const signupLink = document.getElementById("signup-link");
const togglePassword = document.getElementById("toggle-password");

// Toggle between login and sign-up forms
signupLink.addEventListener("click", () => {
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
  const passwordInput = document.getElementById("login-password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

// Handle Sign Up
const signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", () => {
  // Get user input
  const firstName = document.getElementById("signup-firstname").value;
  const lastName = document.getElementById("signup-lastname").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const address = document.getElementById("signup-address").value;
  const phone = document.getElementById("signup-phone").value;
  const imageUpload = document.getElementById("image-upload").files[0];

  // Validate input (add your own validation logic here)

  // Create user object
  const user = {
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
    image: URL.createObjectURL(imageUpload), // Store the image URL
  };

  // Store user data in local storage
  localStorage.setItem(email, JSON.stringify(user));

  // Clear the form
  // signupForm.reset();

  // Redirect to login
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

// Handle Login (you can implement this part)
// Handle Login
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
  // Get user input
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Retrieve user data from local storage
  const userData = localStorage.getItem(email);

  // Check if user data exists
  if (userData) {
    const user = JSON.parse(userData);
    // Check if the entered password matches the stored password
    if (password === user.password) {
      alert("Login successful!");
      // You can add code to redirect the user to another page here
    } else {
      alert("Incorrect password. Please try again.");
    }
  } else {
    alert("User not found. Please sign up.");
  }
});
const takeimg = () => {
  Webcam.set({
    width: 220,
    height: 190,
    image_format: "jpeg",
    jpeg_quality: 100,
  });
  Webcam.attach("#camera");

  // SHOW THE SNAPSHOT.
  takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
      document.getElementById("snapShot").innerHTML =
        '<img src="' + data_uri + '" width="70px" height="50px" />';
    });
  };
};
