console.log("this is from library");
const log = console.log;

function ImageGenerator() {
  this.className = "";
  this.groupCounter = 0;
  this.elements = [];
  this.seperateCounter = [];
}

ImageGenerator.prototype = {
  insertImages: function (className, imagesUrl) {
    const body = document.querySelector("body");
    const groupContainer = document.createElement("div");
    for (let i = 0; i < imagesUrl.length; i++) {
      const imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", className);
      imageContainer.setAttribute("id", `${className}${i}`);
      imageContainer.style =
        "display:inline-block;width: 23%; height: 23%; margin: 1%;";
      const image = document.createElement("img");
      image.setAttribute("src", imagesUrl[i]);
      image.style = "width:100%;height:100%;";
      imageContainer.append(image);
      groupContainer.append(imageContainer);
      this.elements.push(`${className}${i}`);
      this.seperateCounter.push(0);
    }
    body.append(groupContainer);
    // this.classLists.push(className);
    this.className = className;
    log(this.elements);
  },

  setSizeToGroup: function (width, height, margin) {
    className = `.${this.className}`;
    const imageContainers = document.querySelectorAll(className);
    for (let imageContainer of imageContainers) {
      imageContainer.style.width = width;
      imageContainer.style.height = height;
      imageContainer.style.margin = margin;
    }
  },

  //direction can be row(default), column,overlap
  changeDirectionOfGroup: function (direction) {
    className = `.${this.className}`;
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
  addHeart(heartSize, eventType) {
    className = `.${this.className}`;
    const imageContainers = document.querySelectorAll(className);
    for (let imageContainer of imageContainers) {
      imageContainer.style.position = "relative";
      const heart = document.createElement("div");
      heart.innerHTML = `&hearts;`;
      heart.style = `font-size:${heartSize};color:red;opacity:0.2;position:absolute;bottom:6%;right:10%`;
      let likeStatus = "unlike";

      imageContainer.append(heart);
      const self = this;
      imageContainer.addEventListener(eventType, function () {
        if (likeStatus == "unlike") {
          heart.style.opacity = "1";
          likeStatus = "like";
        } else {
          heart.style.opacity = "0.2";
          likeStatus = "unlike";
        }
        const currentId = imageContainer.getAttribute("id");
        const index = currentId.split(self.className).pop();
        self.seperateCounter[index]++;
        log(
          `The counter for ${currentId} image in ${self.className} group is: ${self.seperateCounter[index]}`
        );
        self.groupCounter++;
        log(
          `The counter for the whole ${self.className} group is: ${self.groupCounter}`
        );
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

  setProperty(backgroundColor, width, height, opacity) {
    this.follower.style.backgroundColor = backgroundColor;
    this.follower.style.width = width;
    this.follower.style.height = height;
    this.follower.style.opacity = opacity;
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

  //event could be "keydown","click"
  removeMouseFollowerBy(event) {
    const body = document.querySelector("body");
    const self = this;
    body.addEventListener(event, function () {
      self.follower.remove();
    });
  },
};
