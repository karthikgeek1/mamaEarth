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

//===================== main section javascript =================

const container = document.querySelector(".container");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/31/products")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      data.bestsellers.map((item) => {
        // console.log(item.images[0]);
        productItem = `<div class="c1">
            <div class="logo">Best seller</div>
        
            <img src=${item.images[0]} alt="mamaearth" class="img2" id="home_img_${item.id}" onclick="display(event)">
        
            <p>${item.name}</p>
          
            <p class="para"><i class="fa-solid fa-star rate"></i>${
              (5 * parseInt(item.avg_rating_percent)) / 100
            }<span> | ${item.review_count} reviews<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="butn">Add to cart</button>
        </div>`;
        container.innerHTML += productItem;
      });
    })
    .catch((err) => err);
});


//================================================= LOG IN ========================================

const subMenuWrap = document.querySelector(".sub-menu-wrap");
const loginBtn = document.querySelector(".logbut");
const crossBtn = document.querySelector("#cross");
const header = document.querySelector("header");
const main = document.querySelector("main");
const loginWithOtpBtn = document.querySelector("#login_with_otp");
const loginPhoneMunberInput = document.querySelector("#login_input");
const signUpModal = document.querySelector(".signup_popup");
const loginModal = document.querySelector(".login_popup");
const signUpNumber = document.querySelector("#signup_phone_number");
const loginNumber = document.querySelector("#login_input");
const signUpBtn = document.querySelector("#signup_btn");
const signInModal = document.querySelector('.signin_popup');
const logoutModal = document.querySelector(".logout_popup");
const logedname = document.querySelector(".logedname");


function toggleMenu() {
  subMenuWrap.style.display = "block";
}

function toggleMenuRemove() {
  subMenuWrap.style.display = "none";
}

const loginPopUpMainContainer = document.querySelector(
  ".login_popup_main_container"
);

function login() {
  if(loginBtn.innerText=="LOGIN"){
    subMenuWrap.style.display = "none";
    main.classList.toggle("active");
    header.classList.toggle("active");
    loginPopUpMainContainer.style.display = "block";
  }
  else if(loginBtn.innerText=="Log out"){
    localStorage.removeItem('loggedInUser')
    logoutModal.style.display="block"
    main.classList.toggle("active");
    header.classList.toggle("active");
    setTimeout(()=>{ 
      main.classList.toggle("active");
     header.classList.toggle("active")
     logoutModal.style.display="none"
    }, 2000)
    loginBtn.innerText="LOGIN"
    logedname.innerText="Login"
  }
}


function loginPopupRemove() {
  loginPopUpMainContainer.style.display = "none";
  main.classList.toggle("active");
  header.classList.toggle("active");
}

function loginWithOtp() {
  if (loginPhoneMunberInput.value.length > 1) {
    loginModal.remove();
    signUpModal.style.display = "block";
    signUpNumber.value = loginNumber.value;
    loginPopUpMainContainer.append(signUpModal);
  }
}

function backToLogin() {
  signUpModal.remove();
  loginPopUpMainContainer.append(loginModal);
}


let userData = [];
if(localStorage.getItem('userData')){
  userData= JSON.parse(localStorage.getItem('userData'))
}
signUpBtn.addEventListener("click", () => {
  const fName = document.querySelector("#signup_first_name").value;
  const lName = document.querySelector("#signup_last_name").value;
  const eMail = document.querySelector("#signup_email_id").value;

  if (!eMail.endsWith("@gmail.com")) {
    alert("Invalid Email");
  }
else{

  const search = userData.find((x) => {
    return x.userEmail == eMail;
  });
  let userDetails = {
    userFirstName: fName,
    userLastName: lName,
    userEmail: eMail,
  };
  if (search == undefined) {
    userData.push(userDetails);
    localStorage.setItem('userData',JSON.stringify(userData))
    
  } else {
    alert("user already exist");
    //userData.push(userDetails);
    //localStorage.setItem('userData',JSON.stringify(userData))
  }
  localStorage.setItem("loggedInUser", JSON.stringify(userDetails));
  console.log(userData);
  signUpModal.remove();
  signInModal.style.display="block"
  loginPopUpMainContainer.append(signInModal)
}

});

const signInCrossBtn = document.querySelector('#signin_cross');
signInCrossBtn.addEventListener('click', (event)=>{
  signInModal.remove();
  loginPopUpMainContainer.append(loginModal)
  loginPopUpMainContainer.style.display = "none";
  main.classList.toggle("active");
  header.classList.toggle("active");
})


const signInBtn = document.querySelector('#signin_btn');

signInBtn.addEventListener('click', ()=>{
  const signInEmail = document.querySelector('#signin_email').value;

  for(let i=0; i<userData.length; i++){
    if (userData[i].userEmail == signInEmail) {
      // console.log("userEmail", userData[i].userEmail);
      // console.log("singInemail", signInEmail);
      loginPopUpMainContainer.style.display = "none";
    main.classList.remove("active");
    header.classList.remove("active");
    // signUpBtn.innerHTML="LogOut"
    loginBtn.innerHTML="log out"
    logedname.innerHTML=`welcome ${userData[i].userFirstName}`
    // console.log();
  }
  }
})
function getLoggedInUserData(){
  let loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'))
  if(loggedInUserData){
    return 'welcome   '+loggedInUserData.userFirstName
  }
  else{
    return 'Login'
  }
 
}
function isUserLoggedIn(){
  let loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'))
  if(loggedInUserData){
    return true;
  }
  else{
    return false;
  }
}
//========================== add to cart feature============================================/


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


  // ===============================details section =======================================//

let details =[]
if(localStorage.getItem('detailsPage')){
  details=JSON.parse(localStorage.getItem('detailsPage'))
}

function display(e){
  console.log(e.target.id);
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/31/products")
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