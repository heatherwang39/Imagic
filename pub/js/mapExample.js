const mapImg = new ImageGenerator();
const mf = new MouseFollower();

function examples() {
  mapImg.insertImages("uoft", [
    "http://collegesinontario.com/wp-content/uploads/2018/12/University-of-Toronto-Map.jpg",
    "https://www.utm.utoronto.ca/sites/files/default/public/shared/studentaffairs/images/CampusMap_bw_final.jpg",
  ]);
  mapImg.setSizeToGroup("80%", "0 10% 1% 10%");
  mapImg.addElements(
    "click",
    "#totalCounter",
    ["#seperateCounter0", "#seperateCounter1"],
    "&#9873"
  ); //sun(&#9728;),flag(&#9873)

  mf.generateMouseFollower();
  mf.removeMouseFollowerBy("keydown");
  mf.setProperty("#f7cac900", "auto", "auto", 1); //make the background to be transparent
  mf.addImages(
    [
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",
    ],
    "100px",
    "100px",
    true
  );
}
examples();
