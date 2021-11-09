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

//Albin: Giving the variable "services" an array with data for all the cards. 
//Emma: Service-modal-content array 
const services = [
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
//Emma: Close the card-arrow function. Changing display style on service-modal-wrapper (HTML document) from flex to none. 
const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

//Emma: Open the card-arrow function with a for loop. 
const openServiceModal = () => {
  const cards = document.getElementsByClassName("service-card"); //Emma: Getting all the service-cards from HTML document to be able to loop over all of the cards. Becomes an array. 
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";
      for (let j = 0; j < services.length; j++) {
        if (i === j) {
          document.getElementById("service-modal-content").innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./media/${services[j].picture}">`;
        }
      }
    });
  }
};

//Loads the function openservicemodal on start up. 
window.addEventListener("load", openServiceModal);

//Image-slider code

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

//Gives the <img class="main-image"> an src. 
const setMainImage = (src) => {
  document.getElementById("main-image").setAttribute("src", src);
  setActiveThumbNail();
};

//Checks which img is in the "main-img" with a for loop then gives that thumbnail with the same src a border and if its not the same it gives it a border but with 0px
const setActiveThumbNail = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].src === document.getElementById("main-image").src) {
        thumbs[i].style.border = "2px solid #9C8679";
    } else {
      thumbs[i].style.border = "0px";
    }
  }
};

//
const prevImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== 0
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
      setActiveThumbNail();
    }
  }
};

const nextImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== thumbs.length - 1
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i += 1)].src);
      setActiveThumbNail();
    }
  }
};

window.addEventListener("load", () => {
  document
    .getElementById("main-image")
    .setAttribute("src", `./media/${images[0].name}`);
  document.getElementById("thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./media/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
    )
    .join("");

  
  setActiveThumbNail();
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);


  document.getElementById("gallery-row").innerHTML = rowimages
  .map(
    (img) =>
      `<img src="./media/${img.name}" class="galleryimages">`
  )

  document
    .getElementById("main-image")
    .setAttribute("src", `./media/${images[0].name}`);
  document.getElementById("gallery-row").innerHTML = rowimages
    .map(
      (img) =>
        `<img src="./media/${img.name}" class="galleryimages" onclick="setMainImage(this.src)">`
    )
    .join("");


});


const opengallerymodal = () => {
  document.getElementById("gallery-modal-wrapper").style.display = "flex";
  
};

const closeLightBox = () => {
  document.getElementById("gallery-modal-wrapper").style.display = "none";
};


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
