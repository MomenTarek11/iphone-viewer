let all = document.querySelector(".all");
let btn = document.getElementById("btn");
let left = document.querySelector(".left");
let right = document.querySelector(".right img");
let kalam = document.querySelectorAll(".kalam li a");
console.log(kalam);
all.addEventListener("click", (eo) => {
  if (eo.target.className === "img0") {
    document.body.style.backgroundColor = "black";
    left.style.color = "white";
    changeHeaderColor("white");
    // changePictureinsection(0);
  }
  if (eo.target.className === "img1") {
    document.body.style.backgroundColor = "#A2D2FF";
    left.style.color = "black";
    changeHeaderColor("black");
    // changePictureinsection(1);
  }
  if (eo.target.className === "img2") {
    document.body.style.backgroundColor = "#403d39";
    left.style.color = "white";
    changeHeaderColor("white");
    // changePictureinsection(2);
  }
  if (eo.target.className === "img3") {
    document.body.style.backgroundColor = "#b08968";
    left.style.color = "black";
    changeHeaderColor("black");
    // changePictureinsection(3);
  }
  if (eo.target.className === "img4") {
    document.body.style.backgroundColor = "#bb010b";
    left.style.color = "white";
    changeHeaderColor("white");
    // changePictureinsection(4);
  }
});
function changeHeaderColor(hamo) {
  kalam.forEach((element) => {
    element.style.color = hamo;
  });
}
function changesrc(para) {
  right.src = para;
}
