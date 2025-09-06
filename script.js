
/***********************
Part 1: Event Handling 
************************/

// Alert button
const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", () => {
  alert("KWITONDA ALICE");
});

// Create colorButton dynamically
const colorButton = document.createElement("button"); 
colorButton.id = "colorButton";
colorButton.textContent = "Change Background colour";

// Append to interactive section
const interactiveSection = document.getElementById("interactive");
interactiveSection.appendChild(colorButton);

// Button that changes background color randomly
const colors = ["#055a6b", "#472613"];
colorButton.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

/***********************
Part 2: Interactive Elements
************************/

// Dropdown menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
window.addEventListener("click", function(e) {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

/***********************
Part 3: Form Validation
************************/

const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  //  Message
  const successMsg = document.getElementById("formSuccess");
  if (valid) {
    successMsg.textContent = "Registration successful!";
    successMsg.style.color = "green";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
