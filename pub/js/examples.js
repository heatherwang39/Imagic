//make the header and title
const body = document.querySelector("body");
body.style = "font-family: Impact;";
const h1 = document.querySelector("h1");
h1.innerText = "Imagic Gallery";
h1.style = "text-align:center;margin-bottom:0;";
const description = document.querySelector("#description");
description.innerText = "Click on the images you like";
description.style = "margin:10px auto;color:gray;text-align:center;";

/********
 Use the Imagic library
********/

//ImageGenerator API
const catImgs = new ImageGenerator();
const dogImgs = new ImageGenerator();
const mf = new MouseFollower();

function examples() {
  catImgs.insertImages("cats", [
    "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/d8/95/0f/d8950f17-9f8b-ca78-edc2-845c7888a188/source/256x256bb.jpg",
    "https://pbs.twimg.com/profile_images/619376781360017409/XThKeCR5.jpg",
    "https://i.gzn.jp/img/2019/02/22/this-cat-does-not-exist/s14.jpg",
    "https://cdn141.picsart.com/280394983009201.jpg?type=webp&to=crop&r=256",
    "https://cdn131.picsart.com/303024160128201.jpg?type=webp&to=crop&r=256",
    "https://i.pinimg.com/originals/33/e4/be/33e4beceaf7324774de75efef923f09b.jpg",
  ]);
  dogImgs.insertImages("dogs", [
    "https://a.thumbs.redditmedia.com/0i7tOG9r8W21U-T-6zte-mlFjvo-pHpKuOR6A3wWAC8.png",
    "https://styles.redditmedia.com/t5_1ys4bj/styles/profileIcon_968o7s5frbn41.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=fdaa0f7cd2013d5f508976cfd4ff2e66cd6f8689",
    "https://cdn131.picsart.com/316184753010201.jpg?type=webp&to=crop&r=256",
    "https://i.pinimg.com/474x/d5/ff/4f/d5ff4fd9289929255beb60702ddd87f6.jpg",
    "https://pbs.twimg.com/profile_images/602630130431762432/XJrnsLXy.jpg",
    "https://cdn.domestika.org/c_fill,dpr_auto,h_256,t_base_params.format_jpg,w_256/v1385823949/avatars/000/024/711/24711-original.jpg?1385823949",
  ]);
  catImgs.setSizeToGroup("30%", "30%", "1.66%"); // catImgs.setSizeToGroup("15%", "15%", "0.83%");
  dogImgs.setSizeToGroup("30%", "30%", "1.66%"); // dogImgs.setSizeToGroup("15%", "15%", "0.83%");
  catImgs.addElement("click", "&hearts;");
  dogImgs.addElement("click", "&hearts;");
  catImgs.addTitle(catImgs.elements); //use the id as the title
  dogImgs.addTitle(dogImgs.elements); //use the id as the title

  mf.generateMouseFollower();
  mf.removeMouseFollowerBy("keydown");

  mf.setProperty("#f7cac900", "auto", "auto", 1);

  mf.addText(
    "Are you old enough to browse this website??",
    "20px",
    "bold", //font-weight,
    "#c94c4c",
    "center"
  );
  mf.addText(
    "Press any key to delete this follower!",
    "15px",
    100, //"bold",
    "#50394c",
    "center"
  );
}

examples();

//catImgs.changeDirectionOfGroup("column");//align as row by default. can be row, column and overlap

// catImgs.addTitle(["Jimmy", "Becky", "Heather", "Tom", "Jerry", "Aya"]);

//MouseFollower API

// mf.addImages(
//   [
//     "https://i.pinimg.com/originals/06/87/85/0687851cc6a9bb1213b5a12c9f8408ac.png",
//     "https://www.dictionary.com/e/wp-content/uploads/2018/09/smirking-face-300x300.png",
//     "https://i.pinimg.com/originals/33/f2/95/33f29537979ddcc9512bd9b07413c37e.png",
//     "https://www.papertraildesign.com/wp-content/uploads/2017/06/emoji-nerd-glasses.png",
//   ],
//   "50px",
//   "50px",
//   true
// );
// mf.toggleImages("click");

//the mousefollower should either be overlap images or text
