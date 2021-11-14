// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokeman = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;

  pokeman.appendChild(newImg);
  pokeman.appendChild(label);
  container.appendChild(pokeman);
}

{
  /* <div>
    <img>
    <span>#1</span>
</div> */
} // this shows us how our work looks like
