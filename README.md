# Imagic

Imagic is a Front-end library with 2 Image-processing APIs based on JavaScript, CSS and HTML. It allows developers to manipulate DOM very easily. With Imagic, developers can generate, insert and customize images to web pages with simple commands. Developers can also add user interactive options to the images, or convert the image to a mouse follower with simple commands. The number of image interactions and the time the images are displayed are also recorded for analysis in the backend. Imagic is very useful for building an interactive website, for example, a social media website that allows the user to click liked images, or an eCommerce website that wants to attach an advertisement to users' mouse. 

## Link

To see some examples of the implementation of Imagic, you can access the example site [here](https://imagic-library.herokuapp.com/). Or copy this URL: https://imagic-library.herokuapp.com/

## Getting Started

### Setting up the library

To use this library you need to add **"&lt;script defer type="text/javascript" src='js/library.js'&gt;&lt;/script&gt;"**</b> to the head in your html file.</h4>

### Basic Tutorial

There are two APIs in the Imagic library, the **ImageGenerator** API and **MouseFollower** API.

**Instructions for using ImageGenerator:**

1. Initialize a new ImageGenerator().
2. You need to call insertImages(className, imagesUrl) first to add a group of images to your page. The imagesUrl needs to be an array, even if you only want to insert one image. Some properties have been set to this group of images, but you can still modify them by using setSizeToGroup(). You can also change the direction of your images by using changeDirectionOfGroup() to make them arrange as columns or overlap with each other. If you want to add titles to each image, you can use addTitle() and input a list of titles.
3. To add some interactive element, you can choose:
   (1) addElement, to add an element that can interact with the user by html code to a fixed postion of each image in this group. The interaction can be any event like "click", "mouseover" or "keydown". The element will be "♥" by default(&hearts), and it can be any html codes, for example, "⚑"(flag),"☀"(sun). You can also change its color and position if you want. Each element will have their own counters for recording how many times the user performs interaction, and there is also a total counter for the whole group recording the number of interactions. You have access to them by the groupCounter and seperateCounter members in this API.
   (2) addElements, to add multiple repeating elements as the response to user's operations to each image in this group. The position of the added elements is the position of the user's mouse. The added elements can be removed by clicking on itself again. The element will be "♥" by default(&hearts), and it can be any html codes, for example, "⚑"(flag),"☀"(sun). You can also change its color and position if you want. Each element will have their own counters for recording how many times the user performs interaction, and there is also a total counter for the whole group recording the number of interactions. You have access to them by the groupCounter and seperateCounter members in this API. If you want to update the counter to the website, you can specify the totalSelector or seperate selectors to determine where to update the counter. This functionality is shown in the Map Example.

**Instructions for using MouseFollower:**

1. Initialize a new MouseFollower().
2. You need to call generateMouseFollower() first to generate a default mouse follower. It will be a pink square that follows the mouse, can be changed to other forms later.
3. Some properties have been set to this mouse follower, but you can still modify them by using setProperty() and set the background color, width, opacity, etc.
4. There are two types of mouse follower you can choose:
   (1) text mouse follower by using addText(). See the Gallery Example.
   (2) images mouse follower by using addImages(). You can add a group of images but only the first one in the imagesUrls will show, others will hide temporarily. Then you can use toggleImages(event), to specify how the user can switch the images. See the Map Example(image follower without toggleImages) and Other Example(image follower without toggleImages("click")).
5. You can specify how the user can shut down the mouser follower by using removeMouseFollowerBy().
6. Use updateTimer() to specify where to show the duration of the mouse follower. See the Gallery Example and Other Example.

## See more in the Documentation Page

You can access the documentation [here](https://imagic-library.herokuapp.com/documentation/). Or copy this URL: https://imagic-library.herokuapp.com/documentation/
