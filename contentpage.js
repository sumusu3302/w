if (localStorage.getItem("close-alert") === null) {
const bootstrapjs = document.createElement("script");
bootstrapjs.setAttribute(
  "src",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
);
const bootstrapcss = document.createElement("script");
bootstrapcss.setAttribute(
  "src",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
);

document.body.append(bootstrapjs, bootstrapcss);
var alertdiv = document.createElement('div')
alertdiv.setAttribute('class', 'sticky-top')
alertdiv.innerHTML = `

<div class="alert alert-primary d-flex align-items-center alert-dismissible fade show" role="alert">
<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<div>
    An example alert with an icon<a href="/settings" class="alert-link">settings</a>
  </div>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
document.body.append(alertdiv);
}
let url = window.location.pathname; //get path
let host = window.location.host
/*let urlsub = "";
if (urlstring.indexOf("html") > -1) {
  //Check of html String in URL.
  urlsub = urlstring.substring(1, urlstring.lastIndexOf("."));
}*/
let pageurl = "";

if (url.indexOf("html") > -1) {
  pageurl = url.match(/([^\/]+)(?=\.\w+$)/)[0];
} else {
  pageurl = url.substring(url.lastIndexOf("/") + 1, url.length);
}

//if we find a match for the element, create the info


const buildogDiv = (games) => {
  const $divwrap = document.createElement("div");
  $divwrap.classList.add("og-item");
  const $imgcontainer = buildimgcontainer(games);
  const $gridcardtext = buildgridcardtext(games);

  $divwrap.appendChild($imgcontainer);
  $divwrap.appendChild($gridcardtext);
  return $divwrap;
};

const buildimgcontainer = (games) => {
  const $imgcontainer = document.createElement("div"); //create div imagecontainer
  $imgcontainer.classList.add("img-container");

  const $anchor = document.createElement("a"); //create anchor tag inside that
  $anchor.href = "/" + games.link + ".html";

  const $imgtag = document.createElement("img"); //create the img tag
  $imgtag.classList.add("hover-center");
  $imgtag.src = "/assets/img/games/" + games.imgsrc;
  $imgtag.alt = games.name; //alt is the same as the game's name

  $anchor.appendChild($imgtag);
  $imgcontainer.appendChild($anchor);

  return $imgcontainer;
};

const buildgridcardtext = (games) => {
  const $gridcardtext = document.createElement("div"); //create div gridcardtext
  $gridcardtext.classList.add("grid-card-text");

  const $p = document.createElement("p"); //create the p tag
  $p.classList.add("game-name");
  $p.innerText = games.name; //set the title

  const $h1 = document.createElement("h1"); //create h1 tag inside that
  $h1.classList.add("game-developer");
  $h1.innerText = "by " + games.developer;

  $gridcardtext.appendChild($p);
  $gridcardtext.appendChild($h1);

  return $gridcardtext;
};

//# of elements for other games

const randomGame = () => {
  setTimeout(() => {
    let elemCount = 2;

    if (document.getElementsByClassName("adsbygoogle")[0]){
      if (document.getElementsByClassName("adsbygoogle")[0].dataset.adStatus == 'filled'){
        elemCount = 1;
      }
    }
    const set = new Set();
    while (set.size < elemCount) {
      set.add(Math.floor(Math.random() * gamesArr.length)); //add 5 random numbers to the set
    }

    const ogwrap = document.querySelector(".og-wrap");

    let ind = set.values(); //set of 5 random numbers w/o dupes
    for (let i = 0; i < elemCount; i++) {
      let randInd = ind.next().value; //get each value from the set
      let $item = buildogDiv(gamesArr[randInd]);
      ogwrap.appendChild($item);
    }
  }, 2000)
};

randomGame();

//Fullscreen function
const reqFs = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
};

//iframe fullscreen
const iFullscreen = () => {
  const elem = document.getElementsByTagName("iframe")[0];
  reqFs(elem);
};

//Canvas fullscreen
const cFullscreen = () => {
  const elem = document.getElementById("canvas");
  reqFs(elem);
};

//Ruffle fullscreen
const rFullscreen = () => {
  const elem = document.getElementById("player");
  reqFs(elem);
};

//Emulator fullscreen
const eFullscreen = () => {
  const elem = document.getElementById("game");
  reqFs(elem);
};
