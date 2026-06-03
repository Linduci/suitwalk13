const galleryPage = document.getElementById("gallery-page");
const warningScreen = document.getElementById("warning-screen");
const hackerScreen = document.getElementById("hacker-screen");
const animeUI = document.getElementById("anime-ui");
const progress = document.querySelector(".progress");

// indulás 8 mp után
setTimeout(() => {
  galleryPage.style.transition = "filter 0.8s ease";
  galleryPage.style.filter = "brightness(0.35)";

  warningScreen.classList.add("active");

  setTimeout(() => {
    warningScreen.classList.remove("active");

    setTimeout(() => {
      galleryPage.style.opacity = "0";

      setTimeout(() => {
        galleryPage.style.display = "none";

        hackerScreen.style.display = "flex";
        hackerScreen.style.opacity = "0";
        hackerScreen.style.filter = "blur(0px)";

        setTimeout(() => {
          hackerScreen.style.transition = "opacity 1s ease";
          hackerScreen.style.opacity = "1";
        }, 100);

        let width = 0;

        const loading = setInterval(() => {
          width++;
          progress.style.width = width + "%";

          if (width >= 100) {
            clearInterval(loading);

            setTimeout(() => {
              hackerScreen.style.transition = "all 1.2s ease";
              hackerScreen.style.opacity = "0";
              hackerScreen.style.filter = "blur(10px)";

              setTimeout(() => {
                hackerScreen.style.display = "none";

                animeUI.style.display = "block";
                animeUI.style.opacity = "0";

                setTimeout(() => {
                  animeUI.style.transition = "opacity 1.5s ease";
                  animeUI.style.opacity = "1";
                }, 100);
              }, 1200);
            }, 300);
          }
        }, 40);
      }, 700);
    }, 300);
  }, 1500);
}, 8000);
const matrix = document.querySelector(".matrix");

const chars = "0101010101010101";

for (let i = 0; i < 80; i++) {

  const span = document.createElement("span");

  let text = "";

  for (let j = 0; j < 40; j++) {

    text += chars[Math.floor(Math.random() * chars.length)] + "<br>";

  }

  span.innerHTML = text;

  span.style.left = Math.random() * 100 + "vw";

  span.style.animationDuration =
    3 + Math.random() * 5 + "s";

  span.style.opacity =
    Math.random();

  span.style.fontSize =
    12 + Math.random() * 14 + "px";

  matrix.appendChild(span);

}