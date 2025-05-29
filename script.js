const form = document.getElementById("form");
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password")
};

const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Simple validators
  const validations = {
    name: v => v.trim() !== "",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    phone: v => /^\d{10}$/.test(v),
    password: v => v.length >= 6
  };

  for (let key in fields) {
    const input = fields[key];
    const value = input.value.trim();
    const error = input.nextElementSibling;

    if (!validations[key](value)) {
      error.textContent = `Invalid ${key}`;
      error.style.visibility = "visible";
      input.style.borderColor = "red";
      valid = false;
    } else {
      error.style.visibility = "hidden";
      input.style.borderColor = "green";
    }
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
    Object.values(fields).forEach(f => f.style.borderColor = "#ccc");
  } else {
    successMsg.textContent = "";
  }
});
