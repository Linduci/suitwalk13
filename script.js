const galleryPage = document.getElementById('gallery-page');
const hackerScreen = document.getElementById('hacker-screen');
const animeUI = document.getElementById('anime-ui');

// gyorsabb indulás
setTimeout(() => {

  // gallery fade out
  galleryPage.style.transition = "opacity 1s ease";
  galleryPage.style.opacity = "0";

  setTimeout(() => {
    galleryPage.style.display = 'none';

    // hacker screen megjelenik
    hackerScreen.style.display = 'flex';
    hackerScreen.style.opacity = '0';

    setTimeout(() => {
      hackerScreen.style.transition = "opacity 1s ease";
      hackerScreen.style.opacity = '1';
    }, 100);

  }, 1000);

  // hacker rész után anime UI
  setTimeout(() => {

    // hacker fade out
    hackerScreen.style.transition = "all 1.5s ease";
    hackerScreen.style.opacity = '0';
    hackerScreen.style.filter = 'blur(10px)';

    setTimeout(() => {
      hackerScreen.style.display = 'none';

      animeUI.style.display = 'block';
      animeUI.style.opacity = '0';

      setTimeout(() => {
        animeUI.style.transition = "opacity 1.5s ease";
        animeUI.style.opacity = '1';
      }, 100);

    }, 1500);

  }, 4000);

}, 8000);