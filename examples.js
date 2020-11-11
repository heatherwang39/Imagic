console.log("this is from example.js");
const h1 = document.querySelector("h1");
h1.innerText = "Hello! Welcome to Heather's Gallery!";

const img = new ImageGenerator();

// img.insertImage(
//   "https://styles.redditmedia.com/t5_2t58u/styles/communityIcon_00mtvhwe0s051.jpg?width=256&format=pjpg&s=75200ec54fa5ba4117642366c1f8810894cf66b1"
// );

img.insertImages("cats", [
  "https://avatarfiles.alphacoders.com/182/thumb-1920-182910.jpg",
  "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/d8/95/0f/d8950f17-9f8b-ca78-edc2-845c7888a188/source/256x256bb.jpg",
  "https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ywYzbVHspxnvKmwaAi-pxfZ2bOXmavD4nA&usqp=CAU",
  "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
  "https://styles.redditmedia.com/t5_2yb9w/styles/communityIcon_lqalsz65mlf51.jpg?width=256&format=pjpg&s=6214cd47f21b8f0e1e7cdce6801653fbaf9e4a89",
]);

img.insertImages("dogs", [
  "https://news.artnet.com/app/news-upload/2018/01/2.-Riley-the-dog-at-the-Museum-of-Fine-Arts-Boston-256x256.jpg",
  "https://www.stylist.co.uk/images/app/uploads/2020/04/22145557/img_3340-copy-crop-1587563792-1529x1529.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
  "https://images.pexels.com/users/avatars/230845/alexandru-rotariu-904.jpeg?w=256&h=256&fit=crop&auto=compress",
  "https://styles.redditmedia.com/t5_2pr82s/styles/profileIcon_e5ytycl81jn51.jpg?width=256&height=256&crop=256:256,smart&frame=1&s=bb8e24b5bc995bafd4f1b85150f1f0de2d007b5a",
  "https://newenham.com.au/content/uploads/2019/06/dog-friendly-1200x800-256x256.jpg",
  "https://static.wixstatic.com/media/275e2e_93afa389c9514944949dd9cda3a23b46~mv2.jpg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01/Koda%20and%20Walt%20dog%20walking.webp",
]);
img.setSizeToGroup(".cats", "15%", "15%", "0.83%");
img.setSizeToGroup(".dogs", "30%", "30%", "1.66%");
img.changeDirectionOfGroup(".cats", "row");
img.addClickableHeart(".cats", "200%", "click");
img.addClickableHeart(".dogs", "400%", "mouseover");
