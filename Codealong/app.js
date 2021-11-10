let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function sendFormInfo() {
  alert("Your message has been sent!");
}

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
    documentBody.style.overflow = "auto";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});

//Albin: Giving the variable "about" an array with data for all the cards. 
//Emma: About-modal-content array 
const about = [
    {
        name: "Name Lastname",
        content: "Maxime cumque porro impedit voluptate natus? Dolorem consequuntur at velit sunt provident, est corporis repellendus ea nostrum, earum nesciunt sit ex quasi?",
        picture: "person1.jpg",
    },
    {
        name: "Name Lastname",
        content: "Laudantium minus repudiandae voluptate, aperiam autem animi minima iste odio illum corrupti blanditiis est voluptates architecto, dolorem hic perspiciatis dignissimos, adipisci maxime!",
        picture: "person2.jpg",
    },
    {
        name: "Name Lastname",
        content: "Sint iste quo ex libero doloribus similique illum, deleniti, doloremque velit soluta aspernatur veritatis quis officiis et! Consequuntur tempora facere magnam dolorum?",
        picture: "person3.jpg",
    },
    {
        name: "Name Lastname",
        content: "Voluptates, cum cupiditate. Sunt qui minus voluptatem minima mollitia ratione enim libero debitis, assumenda eius ex. Reprehenderit facilis molestiae maxime dolore non.",
        picture: "person4.jpg",

    },
];

//Albin: A function to close the card. 
//Emma: Close the card-arrow function. Changing display style on about-modal-wrapper (HTML document) from flex to none. 
const closeAboutModal = () => {
  document.getElementById("about-modal-wrapper").style.display = "none";
};

//Emma: Open the card-arrow function with a for loop. 
const openAboutModal = () => {
  const cards = document.getElementsByClassName("about-card"); //Emma: Getting all the about-cards from HTML document to be able to loop over all of the cards. Becomes an array. 
  for (let i = 0; i < cards.length; i++) { //Emma: For loop to loop over all the cards. Starts with index 0 as the first card does. As long as i is less than cards-length, the loop will run. And it will increase with 1 everytime it runs and match different card-index for everytime it runs. 
    cards[i].addEventListener("click", () => { //Emma: Adding a click-event to the cards so that something will happen when you click on each card. In this case, open the cards. 
      document.getElementById("about-modal-wrapper").style.display = "flex"; //Emma: What happens when you click on each card - the display style changes from none to flex, so it (each card) will appear on the site. 
      for (let j = 0; j < about.length; j++) { //Emma: For Loop to loop over the about-array that we created above. 
          if (i === j) { //Emma: If i is the same as j (card-index same as array-index), it will do what is written bellow (= show array-content in the about-array above in the about-modal/card that has the same index.)
          document.getElementById("about-modal-content").innerHTML = `<h2>${about[j].name}</h2><p>${about[j].content}</p><img src="./media/${about[j].picture}">`;
        }
      }
    });
  }
};

//Albin: Loads the function openAboutModal on start up. 
//Emma: Code that make sure that the function openAboutModal is not able to run until the whole site/document has loaded.
window.addEventListener("load", openAboutModal);

//Albin: An array with the name of some images we will use.
//Emma: 
const images = [
  {
    name: "imgone.jpg",
  },
  {
    name: "imgtwo.jpg",
  },
  {
    name: "imgthree.jpg",
  },
  {
    name: "imgfour.jpg",
  },
  {
    name: "imgfive.jpg",
  },
  {
    name: "imgsix.jpg",
  },
];

//Albin: An function that that sets the src of the div "main-image" 
const setMainImage = (src) => {
  //Albin: Changes the src from "main-image" to the parameter "src" with .setAttribute
  document.getElementById("main-image").setAttribute("src", src);
  //Albin: Activates the function "SetActiveThumbNail" when the page loads
  setActiveThumbNail();
};

//Albin: Checks which img is in the "main-img" with a for loop then gives that thumbnail with the same src a border and if its not the same it gives it a border but with 0px
const setActiveThumbNail = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  //Albin: An for loop that sets i to 0 and then runs until it is the same number as thumbs length.
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].src === document.getElementById("main-image").src) {
        thumbs[i].style.border = "2px solid #9C8679";
    } else {
      thumbs[i].style.border = "0px";
    }
  }
};

//Albin: Makes the function "PrevImage" using arrow function Syntax.
const prevImage = () => {
  //Albin: An for loop that sets i to 0 and then runs until its the same number as thumbs length.
  const thumbs = document.getElementsByClassName("thumbnail");
  
  for (let i = 0; i < thumbs.length; i++) {
    //Albin: An "if" that checks if thumbs has the same src as the "main-image" and in that case 
    //Albin: it replaces it with the previous value in the array which in this case is an img
    if (
      thumbs[i].src === document.getElementById("main-image").src && 
      //Albin: The !== 0 is to prevent the function from 
      //Albin: firing when we are at the first value in the array
      i !== 0
    ) {
      document
    //Albin: If the "thumbnail" and "main-image" has the same src we get the 
    //Albin: "main-image" with .getElementbyId and uses .SetAttribute to change the src from [i]
    //Albin: to [i -= 1] because then it makes the src of the previous value in the array. 
    //Albin: For example if [i] = [4] then (i -= 1) makes its [3]
         .getElementById("main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
        //Albin: Fires the Function SetActiveThumbnail when the previmages span is clicked
        //Albin: so the correct Thumbnail gets a border. 
      setActiveThumbNail();
    }
  }
};


//Albin: Same syntax as the PrevImage with some small changes


const nextImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      //Albin: We use -1 to prevent the function from firing when we are at the last value in thumbs.
      //Albin: We cant use .length only because we will never get to the last legnth because it starts at 0
      //Albin: That is why we have to put thumbs.legnth -1.
      i !== thumbs.length - 1
    ) {
      document
        .getElementById("main-image")
        //Albin: We use += 1 so we get the next value in the array. 
        .setAttribute("src", thumbs[(i += 1)].src);
        //Albin:   //Albin: Fires the Function SetActiveThumbnail when the previmages span is clicked
        //Albin: so the correct Thumbnail gets a border. 
      setActiveThumbNail();
    }
  }
};

window.addEventListener("load", () => {
 //Albin: Gets the thumbnails-wrapper and fills it with the images from the "images" array
  document.getElementById("thumbnails-wrapper").innerHTML = images
  //Albin: map is used to hold key-value pairs where the keys can be any datatype.
  //Albin: we replace the array values with the img source to get the images and then give them the class thumbnail and 
  //Albin: an onclick to set the main image.The onclick works with this.src to replace the main image with the image that is clicked. 
    .map(
      (img) =>
        `<img src="./media/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
    )
    //Albin: We use .join(""); to make it a string so we dont get the , between the values in the array. 
    .join("");

  
  //Albin: Makes the functions prev and next-btn to work when the site is loaded
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);

  //Albin: Gets the gallery-row div and fills it with the array rowimages.
  //Albin: Uses map the same way as before to fill each value in rowimages with the src to the images. And gives it the class galleryimages
 
  document.getElementById("gallery-row").innerHTML = rowimages
    .map(
      (img) =>
        `<img src="./media/${img.name}" class="galleryimages" onclick="setMainImage(this.src)">`
    )
    .join("");


});

//Albin: Makes an function that displays the gallery-modal-wrapper
const opengallerymodal = () => {
  document.getElementById("gallery-modal-wrapper").style.display = "flex";
  
};

//Albin: Makes an function that "closes" the gallery-modal-wrapper with display none.
const closeLightBox = () => {
  document.getElementById("gallery-modal-wrapper").style.display = "none";
};

//Albin: Makes an array with some of the images that will be used. 
  const rowimages = [
  {
    name: "imgone.jpg",
  },
  {
    name: "imgtwo.jpg",
  },
  {
    name: "imgthree.jpg",
  },
  {
    name: "imgfour.jpg",
  },
  {
    name: "imgfive.jpg",
  },
  {
    name: "imgsix.jpg",
  },
];
