const allLinks = document.querySelectorAll("a"); // selects all the anchor tags

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!"; // makes the inner text in all anchor tag "I AM A LINK!!!!"
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}
 