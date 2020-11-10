console.log("this is from library");

function ImageGenerator() {
  // the constructor function shouhld instantiate any variables that
  //  each Circle Generator instance should have a unique version of.
  //  In this case, each CG should have its own array of circles separate from
  //  other CGs.
  this.images = [];
  // this..
  // this.. (any values you need for each 'instance' of this library)
}

// For funcionality and values common to all CircleGenerators,
//  we can add to the prototype property of the constructor.
ImageGenerator.prototype = {
  // Every CG will make use of the same makeCircle() and changeCircleColors function
  insertImage: function (imageUrl) {
    const image = document.createElement("img");
    image.style = "width: 300px; height: 300px; margin: 10px;";
    image.setAttribute("src", imageUrl);

    const body = document.querySelector("body");
    body.append(image);

    this.images.push(image); // add to the circles list
  },

  insertImages: function (imagesUrl, className) {
    const body = document.querySelector("body");
    for (let i = 0; i < imagesUrl.length; i++) {
      const image = document.createElement("img");
      image.style = "width: 300px; height: 300px; margin: 10px;";
      image.setAttribute("src", imagesUrl[i]);
      image.setAttribute("class", className);
      body.append(image);
    }
  },

  setMarginToGroup: function (magin, className) {
    const imagesGroup = document.querySelectorAll(className);
    for (let image of imagesGroup) {
      image.style.margin = magin;
    }
  },

  setSizeToGroup: function (width, height, className) {
    const imagesGroup = document.querySelectorAll(className);
    for (let image of imagesGroup) {
      image.style.width = width;
      image.style.height = height;
    }
  },
};
