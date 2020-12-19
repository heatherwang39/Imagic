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
    "https://cdn.technologynetworks.com/tn/images/thumbs/jpeg/360_360/scientists-use-ancient-dna-to-explore-history-of-dogs-342574.jpg",
    "https://cdn.domestika.org/c_fill,dpr_auto,h_256,t_base_params.format_jpg,w_256/v1385823949/avatars/000/024/711/24711-original.jpg?1385823949",
  ]);
  catImgs.setSizeToGroup("30%", "1.66%"); // catImgs.setSizeToGroup("15%", "15%", "0.83%");
  dogImgs.setSizeToGroup("15%", "0.83%"); // dogImgs.setSizeToGroup("15%", "15%", "0.83%");
  catImgs.addElement("click", "&hearts;");
  dogImgs.addElement("click", "&#9728;", "yellow", "100%", "15%");
  catImgs.addTitle(catImgs.elements); //use the id as the title
  dogImgs.addTitle(dogImgs.elements); //use the id as the title

  mf.generateMouseFollower();
  mf.removeMouseFollowerBy("keydown");
  mf.setProperty("#f7cac900", "auto", "auto", 1);

  mf.addText(
    "Warning: Are you old enough to browse this website??",
    "20px",
    100, //font-weight,
    "#D2D6D9",
    "center"
  );
  mf.addText(
    "Press any key to delete this follower!",
    "15px",
    100, //"bold",
    "#C3C8CD",
    "center"
  );
  mf.updateTimer("#mouseFollowerTimer");
}

examples();
