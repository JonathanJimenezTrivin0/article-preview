const share = document.getElementById("share");
const btn = document.getElementById("description__btn");
const btnShare = document.getElementById("share__btn");

btn.addEventListener("click", (e) => {
  share.classList.toggle("share-js");
});

btnShare.addEventListener("click", (e) => {
  btnShare.style.cursor = "pointer";
  share.classList.toggle("share-js");
});
