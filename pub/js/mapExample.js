const mapImg = new ImageGenerator();

function examples() {
  mapImg.insertImages("uoft", [
    "http://collegesinontario.com/wp-content/uploads/2018/12/University-of-Toronto-Map.jpg",
    "https://www.utm.utoronto.ca/sites/files/default/public/shared/studentaffairs/images/CampusMap_bw_final.jpg",
  ]);
  mapImg.setSizeToGroup("80%", "0 10% 5% 10%");

  mapImg.addElements(
    "#totalCounter",
    ["#seperateCounter0", "#seperateCounter1"],
    "click",
    "&#128681",
    "random"
  ); //sun(&#9728;),flag(&#128681)
}
examples();
