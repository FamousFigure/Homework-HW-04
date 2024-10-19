const btn = document.querySelector(".main-btn");
const result = document.querySelector(".main-result");
const loader = document.querySelector(".main-loader");

loader.style.visibility="hidden";

async function f1() {
  loader.style.visibility="visible";
  resolve = await fetch("https://dog.ceo/api/breeds/image/random/20");
  data = await resolve.json()
    .finally(() => {
    loader.style.visibility="hidden";
  })
  data.message.forEach(img => {
    let dog = document.createElement("img");
    dog.setAttribute("style", "width: 400px; height: 400px;");
    dog.src = img;
    result.appendChild(dog);
  })

}

btn.addEventListener("click", function() {
  f1();
}, {once: true})
