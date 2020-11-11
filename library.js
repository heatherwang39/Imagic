console.log("this is from library");
const log = console.log;

function ImageGenerator() {
  // the constructor function shouhld instantiate any variables that
  //  each Circle Generator instance should have a unique version of.
  //  In this case, each CG should have its own array of circles separate from
  //  other CGs.
  this.classLists = [];
  // this..
  // this.. (any values you need for each 'instance' of this library)
}

// For funcionality and values common to all CircleGenerators,
//  we can add to the prototype property of the constructor.
ImageGenerator.prototype = {
  // Every CG will make use of the same makeCircle() and changeCircleColors function
  // insertImage: function (imageUrl) {
  //   const image = document.createElement("img");
  //   // image.style = "width:23%; height:23%; margin:1%;";
  //   image.setAttribute("src", imageUrl);

  //   const body = document.querySelector("body");
  //   body.append(image);

  //   this.images.push(image); // add to the circles list
  // },

  insertImages: function (className, imagesUrl) {
    const body = document.querySelector("body");
    const groupContainer = document.createElement("div");
    for (let i = 0; i < imagesUrl.length; i++) {
      const imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", className);
      imageContainer.style =
        "display:inline-block;width: 23%; height: 23%; margin: 1%;";
      const image = document.createElement("img");
      image.setAttribute("src", imagesUrl[i]);
      image.style = "width:100%;height:100%;";
      imageContainer.append(image);
      groupContainer.append(imageContainer);
    }
    body.append(groupContainer);
    this.classLists.push(className);
  },

  setSizeToGroup: function (className, width, height, margin) {
    const imageContainers = document.querySelectorAll(className);
    for (let imageContainer of imageContainers) {
      imageContainer.style.width = width;
      imageContainer.style.height = height;
      imageContainer.style.margin = margin;
    }
  },

  //direction can be row(default), column,overlap
  changeDirectionOfGroup: function (className, direction) {
    const imageContainers = document.querySelectorAll(className);
    if (direction === "row") {
      log("The direction is row by default!");
    } else if (direction === "column") {
      for (let imageContainer of imageContainers) {
        imageContainer.style.display = "block";
      }
    } else if (direction == "overlap") {
      log("I'm still working on it!");
    } else {
      log("Invalid Input!");
    }
    log(`Direction of ${direction} has been set!`);
  },

  //event:click,mouover,keydown
  //element:heart,flag
  //heartSize should be 100%-500%
  addClickableHeart(className, heartSize, eventType) {
    const imageContainers = document.querySelectorAll(className);

    for (let imageContainer of imageContainers) {
      imageContainer.style.position = "relative";
      const heart = document.createElement("div");
      heart.innerHTML = `&hearts;`;
      heart.style = `font-size:${heartSize};color:red;opacity:0.2;position:absolute;bottom:6%;right:10%`;
      let likeStatus = "unlike";

      imageContainer.append(heart);

      imageContainer.addEventListener(eventType, function () {
        if (likeStatus == "unlike") {
          heart.style.opacity = "1";
          likeStatus = "like";
        } else {
          heart.style.opacity = "0.2";
          likeStatus = "unlike";
        }
      });
    }
  },
};
