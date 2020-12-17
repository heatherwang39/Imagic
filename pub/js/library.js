const log = console.log;

(function (global, document) {
  //private variables
  let _totalImageGroups = 0;
  let _totalMouseFollowers = 0;

  //private functions
  function _randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // const a = Math.random();
    // return `rgba(${r},${g},${b},${a})`;
    return `rgb(${r},${g},${b})`;
  }

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
        imageContainer.style = "display:inline-block;width: 23%;margin: 1%;";
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
    },

    setSizeToGroup: function (width, margin) {
      className = `.${this.className}`;
      const imageContainers = document.querySelectorAll(className);
      for (let imageContainer of imageContainers) {
        imageContainer.style.width = width;
        // imageContainer.style.height = height;
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
        let i = 0;
        for (let imageContainer of imageContainers) {
          imageContainer.style.position = "absolute";
          imageContainer.style.zIndex = this.elements.length - i; //the first picture will show on the top
          i++;
        }
      } else {
        log("Invalid Input!");
      }
      log(`Direction of ${direction} has been set!`);
    },

    //textlist should have the same length of the group, otherwise the subtitle will be the same elements and all the same
    addTitle(textlist) {
      className = `.${this.className}`;
      const imageContainers = document.querySelectorAll(className);
      let index = 0;
      for (let imageContainer of imageContainers) {
        const textDiv = document.createElement("div");
        if (textlist.length == this.elements.length) {
          textDiv.innerText = textlist[index];
        } else {
          textDiv.innerText = textlist[0];
        }
        textDiv.style =
          "font-size:15px;color:gray;text-align:center;font-weight:200;";
        imageContainer.append(textDiv);
        index++;
      }
    },

    //event:click,mouover,keydown
    //elementCode: html code for the element, recommended:'&#128681(flag)','&hearts;'(heart),'&starf;'(star),'&clubs;'(club in poker)
    //elementSize should be 100%-500%
    addElement(
      eventType,
      elementCode,
      elementColor = "red",
      elementSize = "200%"
    ) {
      className = `.${this.className}`;
      const imageContainers = document.querySelectorAll(className);
      for (let imageContainer of imageContainers) {
        imageContainer.style.position = "relative";
        const element = document.createElement("div");
        element.innerHTML = elementCode;
        element.style = `font-size:${elementSize};color:${elementColor};opacity:0.2;position:absolute;bottom:8%;right:10%`;
        let likeStatus = "unlike";

        imageContainer.append(element);
        const self = this;
        imageContainer.addEventListener(eventType, function () {
          if (likeStatus == "unlike") {
            element.style.opacity = "1";
            likeStatus = "like";
          } else {
            element.style.opacity = "0.2";
            likeStatus = "unlike";
          }
          const currentId = imageContainer.getAttribute("id");
          const index = currentId.split(self.className).pop();
          self.seperateCounter[index]++;
          log(
            `${currentId} image in ${self.className} group counter: ${self.seperateCounter[index]}`
          );
          self.groupCounter++;
          log(
            `the whole ${self.className} group counter: ${self.groupCounter}`
          );
          //update the counter
        });
      }
    },

    //event:click,mouover,keydown
    //elementCode: html code for the element, recommended:'&#128681(flag)','&hearts;'(heart).'&starf;'
    //elementSize should be 100%-500%
    addElements(
      eventType,
      elementCode = "&hearts;",
      elementColor = "red",
      elementSize = "200%"
    ) {
      className = `.${this.className}`;
      const body = document.querySelector("body");
      const imageContainers = document.querySelectorAll(className);
      const self = this;
      for (let imageContainer of imageContainers) {
        imageContainer.addEventListener(eventType, function (e) {
          const element = document.createElement("div");
          element.innerHTML = elementCode;
          element.style = `font-size:${elementSize};color:${elementColor};opacity:0.8;position:absolute;`;
          element.style.left = e.pageX - 3 + "px";
          element.style.top = e.pageY - 12 + "px";
          if (elementColor === "random") {
            element.style.color = _randomColor();
          }
          const currentId = imageContainer.getAttribute("id");
          const index = currentId.split(self.className).pop();
          self.seperateCounter[index]++;
          log(`You've marked ${self.seperateCounter[index]} places`);
          body.append(element);
          element.addEventListener("click", function () {
            element.remove();
            self.seperateCounter[index]--;
            log(`You've marked ${self.seperateCounter[index]} places`);
          });
        });
      }
    },
  };

  function MouseFollower() {
    this.follower = {};
    this.duration = 0; //seconds before the user close the mouse follower
  }

  //private variables _start and _end to calculate the duration of mouse follower
  let _start = 0;
  let _end = 0;

  MouseFollower.prototype = {
    generateMouseFollower() {
      _start = new Date().getTime();
      log(_start);
      const body = document.querySelector("body");
      const div = document.createElement("div");
      div.style =
        "width:100px;height:100px;background-color:pink;position:absolute;font-family:Comic Sans MS;";
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

    addImages(imagesUrl, imagesWidth, imagesHeight, overlap = true) {
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
        _end = new Date().getTime();
        self.duration = (_end - _start) / 1000;
        log(self.duration);
      });
    },

    updateTimer(selector) {
      const divTimer = document.querySelector(selector);
      log(divTimer);
      const update = setInterval(() => {
        const now = new Date().getTime();
        divTimer.innerHTML = Math.floor((now - _start) / 1000);
        if (this.duration > 0) {
          clearInterval(update);
        }
      }, 1000);
    },
  };

  /* Can do all other library setup below without conflicting with the global namespace */
  // ...
  // ...

  // After setup:
  // Add the CircleGenerator to the window object if it doesn't already exist.
  global.ImageGenerator = global.ImageGenerator || ImageGenerator;
  global.MouseFollower = global.MouseFollower || MouseFollower;
})(window, window.document);
