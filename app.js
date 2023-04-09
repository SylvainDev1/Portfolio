const form = document.querySelector("form");
const confirm = document.getElementById("confirm");
// const button = document.getElementById("button")
let url = new URL(window.location.toLocaleString());

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
  form.classList.add("was-validated");
});

let afterSubmit = url.searchParams.get("after_submit");
if (afterSubmit) {
  confirm.classList.toggle("initial");
  confirm.classList.toggle("success");
}
console.log(afterSubmit);
let params = new URLSearchParams(url.search);
console.log(params);

params.delete("after_submit");
