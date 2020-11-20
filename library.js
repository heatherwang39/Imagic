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
      const groupContainer = imageContainers[0].parentElement;
      groupContainer.style.position = "relative";
      for (let imageContainer of imageContainers) {
        imageContainer.style.position = "abosolute";
      }
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

function mouseFollower() {
  this.follower = {};
  this.timer = {};
}
mouseFollower.prototype = {
  generateMouseFollower() {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.style =
      "width:100px;height:100px;background-color:pink;position:absolute;";
    body.append(div);

    document.addEventListener("mousemove", function (e) {
      div.style.left = e.pageX + 10 + "px"; //add some pixel to make sure this event won't conflict with the click event
      div.style.top = e.pageY + +10 + "px";
    });
    this.follower = div;
  },

  setProperty(backgroundColor, width, height) {
    this.follower.style.backgroundColor = backgroundColor;
    this.follower.style.width = width;
    this.follower.style.height = height;
  },

  addImages(imagesUrl, imagesWidth, imagesHeight, overlap = false) {
    const imagesContainer = this.follower;
    for (let i = 0; i < imagesUrl.length; i++) {
      const imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", "followingImages");
      imageContainer.style = `display:inline-block;width:${imagesWidth}; height: ${imagesHeight};`;
      const image = document.createElement("img");
      image.setAttribute("src", imagesUrl[i]);
      image.style = "width:100%;height:100%;position:abosulute;";
      if (overlap) {
        imageContainer.style.position = "absolute";
        imageContainer.style.top = "0";
        imageContainer.style.left = "0";
        imageContainer.style.zIndex = imagesUrl.length - i;
      }
      imageContainer.append(image);
      imagesContainer.append(imageContainer);
    }
  },

  toggleImages(event) {
    const body = document.querySelector("body");
    const images = document.querySelectorAll(".followingImages");
    let count = 0;
    body.addEventListener(event, function () {
      if (count < images.length - 1) {
        images[count].style.display = "none";
        count++;
      } else {
        for (let image of images) {
          image.style.display = "inline-block";
        }
        count = 0;
      }
    });
  },

  addText(text, fontSize, fontWeight, color, align) {
    const textContainer = this.follower;
    const textDiv = document.createElement("div");
    textDiv.innerText = text;
    textDiv.style = `font-size:${fontSize};color:${color};font-weight:${fontWeight};text-align:${align};`;
    textContainer.append(textDiv);
  },

  //event could be "keydown"
  removeMouseFollowerBy(event) {
    const body = document.querySelector("body");
    const self = this;
    body.addEventListener(event, function () {
      self.follower.remove();
    });
  },
};
