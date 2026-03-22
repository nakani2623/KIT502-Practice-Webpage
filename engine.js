const form = document.getElementById("submissionForm");
const paperTitle = document.getElementById("paperTitle");
const authorName = document.getElementById("authorName");
const authorEmail = document.getElementById("authorEmail");
const paperType = document.getElementById("paperType");
const abstract = document.getElementById("abstract");

const paperTitleError = document.getElementById("paperTitleError");
const authorNameError = document.getElementById("authorNameError");
const authorEmailError = document.getElementById("authorEmailError");
const paperTypeError = document.getElementById("paperTypeError");
const abstractError = document.getElementById("abstractError");

const tbody = document.getElementById("submissionTableBody");

// initiate the function when the form is submitted
form.addEventListener("submit", function (event) {
  let valid = true;

  // Clear previous errors
  paperTitleError.textContent = "";
  authorNameError.textContent = "";
  authorEmailError.textContent = "";
  paperTypeError.textContent = "";
  abstractError.textContent = "";

  paperTitle.classList.remove("is-invalid");
  authorName.classList.remove("is-invalid");
  authorEmail.classList.remove("is-invalid");
  paperType.classList.remove("is-invalid");
  abstract.classList.remove("is-invalid");

  // check whether all fields are not empty
  if (paperTitle.value.trim() === "") {
    paperTitleError.textContent = "Paper title is required.";
    paperTitle.classList.add("is-invalid");
    valid = false;
  }

  if (authorName.value.trim() === "") {
    authorNameError.textContent = "Author name is required.";
    authorName.classList.add("is-invalid");
    valid = false;
  }

  if (authorEmail.value.trim() === "") {
    authorEmailError.textContent = "Author email is required.";
    authorEmail.classList.add("is-invalid");
    valid = false;
  } else if (!authorEmail.checkValidity()) {
    authorEmailError.textContent = "Please enter a valid email address.";
    authorEmail.classList.add("is-invalid");
    valid = false;
  }

  if (paperType.value === "") {
    paperTypeError.textContent = "Please select a submission type.";
    paperType.classList.add("is-invalid");
    valid = false;
  }

  if (abstract.value.trim() === "") {
    abstractError.textContent = "Abstract is required.";
    abstract.classList.add("is-invalid");
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
    return;
  }

  event.preventDefault();

  // add the new row in the table
  const rowCount = tbody.rows.length + 1;

  // if the abstract is longer than 80 characters, it shows ... instead of displaying the whole abstract
  const shortAbstract =
    abstract.value.length > 80
      ? abstract.value.substring(0, 80) + "…"
      : abstract.value;

  // create a row in the table and display the information
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${rowCount}</td>
    <td>${paperTitle.value}</td>
    <td>${authorName.value}</td>
    <td>${authorEmail.value}</td>
    <td>${paperType.value}</td>
    <td title="${abstract.value.replace(/"/g, "&quot;")}">${shortAbstract}</td>
  `;

  tbody.appendChild(tr);
  form.reset();
});