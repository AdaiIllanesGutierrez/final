
const first = document.querySelector("#post");
const form = document.querySelector("#posts-form");
const div = document.querySelector("#amigos-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const post = first.value;
  if (post===""){
    alert("no es posible registrar un post sin un texto");
    return;
  }else{
  div.innerHTML = "<p>" +  post + "</p>";
  }
});
