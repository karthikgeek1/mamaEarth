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

// 
// ----------------------gift section page

const data_fetch = document.querySelector(".data_fetch");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/5/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.bestsellers.map((item) => {
        // console.log(item);
        html = `<div class="g1">
            <div class="gift_logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="p_img" onclick="display(event)" id="p_${item.id}">
            <p class="cont">${item.name}</p>
            <p class="cont"><i class="fa-solid fa-star rate"></i>${(5 * parseInt(item.avg_rating_percent)) / 100}<span> | ${item.review_count}<span></p>
            <p class="cont"> Rs.${item.price}</p>
            <button id=${item.id}  class="gift_btn" onclick="add_to_cart(event)">Add to cart</button>
            </div>`;
        data_fetch.innerHTML += html;
      });
    });
});


let details=[]
function display(e){
  console.log(e.target.id);
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/5/products")
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

function movieSearch(){
  let inputvalue = document.querySelector('.input').value;
// console.log(inputvalue)
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/5/products")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let filterData = data.bestsellers.filter((item)=>{
        // console.log(item)
        if(item.name.toLowerCase().includes(inputvalue.toLowerCase()))
          return item
      })
      console.log(filterData)
      data_fetch.innerHTML="";
      filterData.map((item)=> {
        data_fetch.innerHTML+=`<div class="g1">
        <div class="gift_logo">Best seller</div>
        <img src=${item.images[0]} alt="mamaearth" class="p_img" id="pro_${item.id}" onclick="display(event)">
        <p class="cont">${item.name}</p>
        <p class="cont"><i class="fa-solid fa-star rate"></i>${(5 * parseInt(item.avg_rating_percent)) / 100}<span> | ${item.review_count}<span></p>
        <p class="cont"> Rs.${item.price}</p>
        <button id=${item.id}  class="gift_btn" onclick="add_to_cart(event)">Add to cart</button>
        </div>`;
      })

      
  })
  
}
// =====================cart===================

document.querySelector(".icon").addEventListener("click", function () {
  document.querySelector(".cart_ITEM").style.display = "flex";
});

document.querySelector("#mycarticon").addEventListener("click", function () {
  document.querySelector(".cart_ITEM").style.display = "none";
});
let cart_content3 = document.querySelector(".cart_content3");
let cartArr=[]
function add_to_cart(e){
  console.log(e.target.id);
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/5/products").then(res=>res.json())
  .then(data=>data.bestsellers.map((item)=>{
    let iddval = item.id
    if(e.target.id.includes(iddval)){
      html=`<div class="cart_data" id="cont${iddval}" >
      <img src=${item.images[0]} alt="mamaearth" class="cart_image_name">
      <p class="image_name" >${item.name}</p>
      <p class="price_name" > Rs.${item.price}</p>
       <button class="deletebutton" id=${iddval} onclick="deleteData(event)">Drop</button>`
       cart_content3.innerHTML+=html
       cartArr.push(item)
       localStorage.setItem("cartCheckout", JSON.stringify(cartArr))
       console.log(cartArr);
    }
  }))
}

function deleteData(e) {
  // console.log(cartData);
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == e.target.id) {
      cartArr.splice(i,1)
      e.target.parentElement.remove()
      localStorage.setItem("cartCheckout", JSON.stringify(cartArr))
    }
  }
}