const canvas = new ImageGenerator();
const mf = new MouseFollower();

function examples() {
  canvas.insertImages("other", [
    "https://cdn.lowgif.com/full/9e2ad99bf87f0b26-.gif",
  ]);
  canvas.setSizeToGroup("90%", "0 5%");
  canvas.addElements("mousemove", null, null, "	&#9835;", "random"); //sun(&#9728;),flag(&#9873)

  mf.generateMouseFollower();
  mf.removeMouseFollowerBy("keydown");
  mf.setProperty("#f7cac900", "auto", "auto", 1); //make the background to be transparent
  mf.addImages(
    [
      "https://ph-files.imgix.net/661cc8b3-c88c-483c-9011-a640c73b7a6e?auto=format",
      "https://blog.joypixels.com/content/images/2019/12/pleading_face.gif",
      "https://emoji.gg/assets/emoji/4610_BlobGuitar.gif",
      "https://blog.joypixels.com/content/images/2019/12/cowboy_hat_face.gif",
      "https://i.pinimg.com/originals/da/41/2b/da412be59cc0b605386330781c29858f.gif",
      "https://i.pinimg.com/originals/59/8f/16/598f16a3dc965337108e915053893a39.gif",
    ],
    "100px",
    "100px"
  );
  mf.toggleImages("click");
  mf.updateTimer("#mouseFollowerTimer");
}

examples();
