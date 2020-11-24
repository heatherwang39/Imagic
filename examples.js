console.log("this is from example.js");
const h1 = document.querySelector("h1");
h1.innerText = "Hello! Welcome to Heather's Gallery!";

const catImgs = new ImageGenerator();
const dogImgs = new ImageGenerator();

catImgs.insertImages("cats", [
  "https://avatarfiles.alphacoders.com/182/thumb-1920-182910.jpg",
  "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/d8/95/0f/d8950f17-9f8b-ca78-edc2-845c7888a188/source/256x256bb.jpg",
  "https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ywYzbVHspxnvKmwaAi-pxfZ2bOXmavD4nA&usqp=CAU",
  "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
  "https://styles.redditmedia.com/t5_2yb9w/styles/communityIcon_lqalsz65mlf51.jpg?width=256&format=pjpg&s=6214cd47f21b8f0e1e7cdce6801653fbaf9e4a89",
]);

dogImgs.insertImages("dogs", [
  "https://news.artnet.com/app/news-upload/2018/01/2.-Riley-the-dog-at-the-Museum-of-Fine-Arts-Boston-256x256.jpg",
  "https://www.stylist.co.uk/images/app/uploads/2020/04/22145557/img_3340-copy-crop-1587563792-1529x1529.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
  "https://images.pexels.com/users/avatars/230845/alexandru-rotariu-904.jpeg?w=256&h=256&fit=crop&auto=compress",
  "https://styles.redditmedia.com/t5_2pr82s/styles/profileIcon_e5ytycl81jn51.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=bb8e24b5bc995bafd4f1b85150f1f0de2d007b5a",
  "https://newenham.com.au/content/uploads/2019/06/dog-friendly-1200x800-256x256.jpg",
  "https://static.wixstatic.com/media/275e2e_93afa389c9514944949dd9cda3a23b46~mv2.jpg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01/Koda%20and%20Walt%20dog%20walking.webp",
]);
catImgs.setSizeToGroup("15%", "15%", "0.83%");
dogImgs.setSizeToGroup("15%", "15%", "0.83%");
// img.setSizeToGroup(".cats", "30%", "30%", "1.66%");
// img.setSizeToGroup(".dogs", "30%", "30%", "1.66%");
// img.changeDirectionOfGroup(".cats", "row");
catImgs.addHeart("200%", "click");
dogImgs.addHeart("200%", "click");

const mf = new mouseFollower();

mf.generateMouseFollower();
mf.removeMouseFollowerBy("keydown");

mf.setProperty("#f7cac900", "auto", "auto", 1);
mf.addImages(
  [
    "https://i.pinimg.com/originals/06/87/85/0687851cc6a9bb1213b5a12c9f8408ac.png",
    "https://www.dictionary.com/e/wp-content/uploads/2018/09/smirking-face-300x300.png",
    "https://i.pinimg.com/originals/33/f2/95/33f29537979ddcc9512bd9b07413c37e.png",
    "https://www.papertraildesign.com/wp-content/uploads/2017/06/emoji-nerd-glasses.png",
  ],
  "50px",
  "50px",
  true
);
mf.toggleImages("click");

//addText conflicts with the overlap images
// mf.addText(
//   "Click on the images you like!",
//   "20px",
//   300, //"bold",
//   "#c94c4c",
//   "center"
// );

// mf.addText(
//   "Press any key to delete this follower!",
//   "15px",
//   100, //"bold",
//   "#50394c",
//   "center"
// );
