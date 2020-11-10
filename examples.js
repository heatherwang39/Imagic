console.log("this is from example.js");
const h1 = document.querySelector("h1");
h1.innerText = "Hello! Welcome to Heather's Gallery!";

const img = new ImageGenerator();

// img.insertImage(
//   "https://styles.redditmedia.com/t5_2t58u/styles/communityIcon_00mtvhwe0s051.jpg?width=256&format=pjpg&s=75200ec54fa5ba4117642366c1f8810894cf66b1"
// );
// img.insertImage(
//   "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/d8/95/0f/d8950f17-9f8b-ca78-edc2-845c7888a188/source/256x256bb.jpg"
// );
// img.insertImage(
//   "https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg"
// );
// img.insertImage(
//   "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/cat-landing-hero-sm.jpg?bust=1536935166"
// );
// img.insertImage(
//   "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg"
// );
// img.insertImage(
//   "https://styles.redditmedia.com/t5_2yb9w/styles/communityIcon_lqalsz65mlf51.jpg?width=256&format=pjpg&s=6214cd47f21b8f0e1e7cdce6801653fbaf9e4a89"
// );

img.insertImages(
  [
    "https://styles.redditmedia.com/t5_2t58u/styles/communityIcon_00mtvhwe0s051.jpg?width=256&format=pjpg&s=75200ec54fa5ba4117642366c1f8810894cf66b1",
    "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/d8/95/0f/d8950f17-9f8b-ca78-edc2-845c7888a188/source/256x256bb.jpg",
    "https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg",
    "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/cat-landing-hero-sm.jpg?bust=1536935166",
    "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
    "https://styles.redditmedia.com/t5_2yb9w/styles/communityIcon_lqalsz65mlf51.jpg?width=256&format=pjpg&s=6214cd47f21b8f0e1e7cdce6801653fbaf9e4a89",
  ],
  "cats"
);

img.insertImages(
  [
    "https://news.artnet.com/app/news-upload/2018/01/2.-Riley-the-dog-at-the-Museum-of-Fine-Arts-Boston-256x256.jpg",
    "https://www.stylist.co.uk/images/app/uploads/2020/04/22145557/img_3340-copy-crop-1587563792-1529x1529.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
    "https://images.pexels.com/users/avatars/230845/alexandru-rotariu-904.jpeg?w=256&h=256&fit=crop&auto=compress",
    "https://static.toiimg.com/photo/msid-74508525/74508525.jpg?resizemode=4&width=400",
    "https://newenham.com.au/content/uploads/2019/06/dog-friendly-1200x800-256x256.jpg",
    "https://static.wixstatic.com/media/275e2e_93afa389c9514944949dd9cda3a23b46~mv2.jpg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01/Koda%20and%20Walt%20dog%20walking.webp",
  ],
  "dogs"
);
img.setSizeToGroup("15%", "15%", ".cats");
img.setSizeToGroup("30%", "30%", ".dogs");

img.setMarginToGroup("0.83%", ".cats");
img.setMarginToGroup("1.66%", ".dogs");
