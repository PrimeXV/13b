//get next button element clickable to perform a function

const nextE1 = document.querySelector(".next");

const imgsE1 = document.querySelectorAll("img");
console.log(imgsE1);

const imageContainerE1 = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextE1.addEventListener("click", ()=> {
  currentImg++;
  clearTimeout(timeout);
  updateImage();
})


updateImage();

function updateImage() {
  if (currentImg > imgsE1.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
  currentImg = imgsE1.length;
  }
  imageContainerE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(()=> {
    currentImg++;
    updateImage();
  }, 3000 );
}


//get prev button element clickable to perform a function

const prevE1 = document.querySelector(".prev");

prevE1.addEventListener("click", ()=> {
  currentImg--;
  clearTimeout(timeout);
  updateImage();
})



