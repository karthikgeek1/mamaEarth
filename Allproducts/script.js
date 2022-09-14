// Write all the selectors here
let subMenu = document.querySelector("#subMenu");

// Fetch Data from Api
const getProductData = async (index) => {
    const response = await axios.get(`https://mmrth-nd-api.honasa-production.net/v1/categories/${index}/products`);
    console.log(index);
    return response.data;
}





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






const productCont = document.querySelector('.all-pro-sub')

window.addEventListener('DOMContentLoaded', async () => {
    
        let data = await getProductData(21);
        console.log("data", data);
        createProdItemCard(data.bestsellers);
})
const fileterBtn = document.querySelector(".filters");
console.log(all);
/* prev code
all.addEventListener("click", ()=>{
    fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/21/products")
    .then(res=>res.json()).then(data=>{
        show(data.bestsellers)}).catch(err=>err)
}) 
*/

fileterBtn.addEventListener('click', async (e) => {
    let index = 17;
    console.log(e.target.id);
    switch (e.target.id) {
        case 'all': index = 21;
        break;
        case 'hair': index = 27;
        break;
        case 'face': index = 21;
        break;
        case 'body': index = 26;
        break;
        case 'baby': index = 13;
        break;
        default: index = index;
        break;
        
    }
    
    // console.log(index);
    let data = await getProductData(index);
    // console.log("data", data);
    createProdItemCard(data.bestsellers);
})


function createProdItemCard(data) {
    let prodItem;
    productCont.innerHTML = null
    // console.log("data", data);
    data.map((e) => {
        // console.log("each", e.images[0]);
        prodItem = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${e.images[0]} alt="mamaearth" id="product_img_${e.id}" class="img2">
            <p>${e.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${5 * parseInt(e.avg_rating_percent) / 100}<span> | ${e.review_count} reviews</span></p>
            <p> Rs.${e.price}</p>
            <button id=${e.id} class="butn">Add to cart</button>
        </div>`
        productCont.innerHTML += prodItem

    })
}

// ==================================login=============================================



let details=[]
async function display(e){
    if(e.target.classList.contains('img2')){
        let productData = await getProductData(21)
        productData.bestsellers.map((item)=>{
        let idVal = item.id
          // details=null
        
          if(e.target.id.includes(idVal)){
            details.push(item)
            console.log(details);
            localStorage.setItem('detailsPage', JSON.stringify(details))
            window.location.href="/details/index.html"
          }
    })
  }
}
  productCont.addEventListener("click", display)