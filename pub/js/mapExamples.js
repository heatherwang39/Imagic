//make the header and title
const body = document.querySelector("body");
body.style = "font-family: Impact;";
const h1 = document.querySelector("h1");
h1.innerText = "Map";
h1.style = "text-align:center;margin-bottom:0;";
const description = document.querySelector("#description");
description.innerText = "Click on the where you travelled";
description.style = "margin:10px auto;color:gray;text-align:center;";

const mapImg = new ImageGenerator();

function examples() {
  mapImg.insertImages("uoft", [
    "https://www.utm.utoronto.ca/sites/files/default/public/shared/studentaffairs/images/CampusMap_bw_final.jpg",
  ]);
  mapImg.setSizeToGroup("80%", "80%", "0 10%");

  mapImg.addElements("click", "&#128681"); //sun(&#9728;)
}
examples();
