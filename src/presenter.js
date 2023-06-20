
const first = document.querySelector("#post");
const form = document.querySelector("#posts-form");
const div = document.querySelector("#amigos-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const post = first.value;

  div.innerHTML = "<p>" +  post + "</p>";
});
