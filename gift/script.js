let subMenu = document.querySelector("#subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// ----------------
var input = document.querySelector(".input");
const body = document.querySelector("body");
const babyModal = document.querySelector(".display-none");
const beauty = document.querySelector(".beauty-display-none");
const hair = document.querySelector(".hair-display-none");
const face = document.querySelector(".face-display-none");
const bodyData = document.querySelector(".body-display-none");

function babyData() {
  babyModal.style.display = "flex";
  beauty.style.display = "none";
  hair.style.display = "none";
}
function babyDataRemove() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
}
function beautyData() {
  babyModal.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  beauty.style.display = "flex";
}
function hairData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
  hair.style.display = "flex";
}
function faceData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  bodyData.style.display = "none";
  face.style.display = "flex";
}
function bodyShowData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "flex";
}

// main section javascript

// const container = document.querySelector(".container");
// window.addEventListener("DOMContentLoaded", () => {
//   fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/18/products")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       data.bestsellers.map((item) => {
//         // console.log(item.images[0]);
//         html = `<div class="c1">
//             <div class="logo">Best seller</div>
//             <img src=${item.images[0]} alt="mamaearth" class="img1">
//             <p>${item.name}</p>
//             <p class="para"><i class="fa-solid fa-star rate"></i>${item.avg_rating_percent}<span> | ${item.review_count}<span></p>
//             <p> Rs.${item.price}</p>
//             <button id=${item.id} class="butn" onclick="add_to_cart(event)" >Add to cart</button>
//         </div>`;
//         container.innerHTML += html;
//       });
//     });
// });

// ----------------------gift section page

const data_fetch = document.querySelector(".data_fetch");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/2/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.bestsellers.map((item) => {
        // console.log(item);
        html = `<div class="g1">
            <div class="gift_logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="p_img" id="pro_${item.id}" onclick="display(event)">
            <p>${item.name}</p>
            <p class="cont"><i class="fa-solid fa-star rate"></i>${item.avg_rating_percent}<span> | ${item.review_count}<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id}  class="gift_btn">Add to cart</button>
            </div>`;
        data_fetch.innerHTML += html;
      });
    });
});

// --------------------------------------------------
// ----------   Pop-up-------

// document.querySelector(".icon").addEventListener("click", function () {
//   document.querySelector(".cart_ITEM").style.display = "flex";
// });

// document.querySelector("#mycarticon").addEventListener("click", function () {
//   document.querySelector(".cart_ITEM").style.display = "none";
// });

// function add_to_cart(e) {
//   // console.log(e.target);
//   console.log(e.target.id);
//   var cart_content3 = document.querySelector(".cart_content3");
//   fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/2/products")
//     .then((re) => re.json())
//     .then((dat) => {
//       // console.log(dat);
//       // console.log(e.target.id);
//       console.log("equal hai");
//       dat.bestsellers.map((item) => {
//         let idvalue = item.id;
//         console.log(idvalue);

//         if (idvalue == e.target.id) {
//           c = `<div class="cart_data">
//             <img src=${item.images[0]} alt="mamaearth" class="cart_image_name">
//             <p class="image_name" >${item.name}</p>
//             <p class="price_name" > Rs.${item.price}</p>
//             // <button class="deletebutton" onclick="deleteData(event)">Delete Item</button>
//             `;
//           // console.log("item", item);
//           localStorage.setItem("itemValues", item);
//           cart_content3.innerHTML += c;
//           console.log(c);
//         }
//       });
//     });
//   console.log("jwhdjkwfkfkwsggwbjs");
//   const cart_data = document.querySelector(".cart");
// }
// // }
// function deleteData() {
//   console.log("WOrkin");
// }
let details=[]
function display(e){
  console.log(e.target.id);
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/2/products")
  .then((res)=>res.json()).then(data=>data.bestsellers.map((item)=>{
    let iddval = item.id
    // details=null
    if(e.target.id.includes(iddval)){
      details.push(item)
      console.log(details);
      localStorage.setItem('detailsPage', JSON.stringify(details))
      window.location.href="/details/index.html"
    }
  }))
}