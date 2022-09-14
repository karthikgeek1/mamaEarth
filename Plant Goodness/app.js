//======================================= NAV FUNCTIONALIY ================================

let subMenu = document.querySelector("#subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

const body = document.querySelector("body");
const baby_modal = document.querySelector(".display-none");
function babyData() {
  baby_modal.style.display = "flex";
  beauty.style.display = "none";
  hair.style.display = "none";
}

function babyDataRemove() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
}
const beauty = document.querySelector(".beauty-display-none");
function beautyData() {
  baby_modal.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  beauty.style.display = "flex";
}

const hair = document.querySelector(".hair-display-none");
function hairData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
  hair.style.display = "flex";
}

const face = document.querySelector(".face-display-none");
function faceData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  bodyData.style.display = "none";
  face.style.display = "flex";
}

const bodyData = document.querySelector(".body-display-none");
function bodyShowData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "flex";
}

// ============================================== PLANT GOODNESS FUNCTIONALITY ======================================

let previews = [
  {
    id: 1,
    img: "Ritu_Image.png",
    text: "A much needed invitative in the present times, just by taking a small step this can bring about a big changes",
  },
  {
    id: 2,
    img: "2nd_Quote_1.jpg",
    text: "Thank you for initiating a much needed programme which contributes back to our enviroment.",
  },
];

const rituImage = document.querySelector("#ritu-image");
const rituQuote = document.querySelector("#ritu-quote");
const preBtn = document.querySelector("#preview");
const nextBtn = document.querySelector("#next");

let currentItem = 0;
function showPerson() {
  let item = previews[currentItem];
  rituImage.src = item.img;
  rituQuote.textContent = item.text;
}
showPerson();

nextBtn.addEventListener("click", (event) => {
  currentItem++;
  if (currentItem > previews.length - 1) {
    currentItem = 0;
  }

  showPerson();
});

preBtn.addEventListener("click", (event) => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = previews.length - 1;
  }

  showPerson();
});

// ============================================= CHAT BOT =======================================

const chatBotContainer = document.querySelector(".chatbot");
const chatBotBtn = document.querySelector("#chatbot");

chatBotBtn.addEventListener("click", (event) => {
  chatBotContainer.style.display = "none";

  const chatBotPopUpModal = document.createElement("div");
  chatBotPopUpModal.classList.add("chatbot_popup_modal");
  body.append(chatBotPopUpModal);

  //======================== CHATBOT HEADER ====================

  const chatBotHeader = document.createElement("div");
  chatBotHeader.classList.add("chatbot_header");
  chatBotPopUpModal.append(chatBotHeader);

  const heading = document.createElement("h2");
  heading.textContent = "Mamaearth";
  chatBotHeader.append(heading);

  const paraImageContainer = document.createElement("div");
  paraImageContainer.classList.add("para_image_container");
  chatBotHeader.append(paraImageContainer);

  const para = document.createElement("div");
  para.classList.add("para");
  para.textContent = "Typically replies in few minutes";
  paraImageContainer.append(para);
  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("images_container");
  paraImageContainer.append(imagesContainer);

  const img1 = document.createElement("img");
  img1.src = "1.jpg";
  imagesContainer.append(img1);
  const img2 = document.createElement("img");
  img2.src = "2.jpg";
  imagesContainer.append(img2);
  const img3 = document.createElement("img");
  img3.src = "3.jpg";
  imagesContainer.append(img3);

  const downBtn = document.createElement("button");
  downBtn.setAttribute("id", "down_btn");
  downBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
  chatBotHeader.append(downBtn);

  downBtn.addEventListener("click", (event) => {
    chatBotPopUpModal.remove();
    chatBotContainer.style.display = "block";
  });

  //========================= CHATBOT MAIN SECTION ==============

  const chatBotMainSection = document.createElement("div");
  chatBotMainSection.classList.add("chatbot_main_section");
  chatBotPopUpModal.append(chatBotMainSection);

  const leftCenterRight = document.createElement("div");
  leftCenterRight.classList.add("left_center_right");
  chatBotMainSection.append(leftCenterRight);

  const left = document.createElement("div");
  left.classList.add("chatbot_main_left");
  leftCenterRight.append(left);

  const center = document.createElement("div");
  center.classList.add("chatbot_main_center");
  center.textContent = "Today";
  leftCenterRight.append(center);

  const right = document.createElement("div");
  right.classList.add("chatbot_main_right");
  leftCenterRight.append(right);

  // ======================= CHATBOT FOOTER SECTION ==============

  const footer = document.createElement("div");
  footer.classList.add("chatbot_footer");
  chatBotPopUpModal.append(footer);

  const footerInput = document.createElement("input");
  footerInput.classList.add("footer_input");
  footerInput.setAttribute("placeholder", "Enter Your Message...");
  footer.append(footerInput);

  const imojiBtn = document.createElement("button");
  imojiBtn.classList.add("imoji_btn");
  imojiBtn.innerHTML = '<i class="fa-regular fa-face-smile"></i>';
  footer.append(imojiBtn);

  const sendBtn = document.createElement("button");
  sendBtn.classList.add("imoji_btn");
  sendBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
  footer.append(sendBtn);

  sendBtn.addEventListener("click", (event) => {
    const pasteDiv = document.createElement("div");
    pasteDiv.classList.add("paste_div");
    pasteDiv.textContent = footerInput.value;
    chatBotMainSection.append(pasteDiv);

    footerInput.value = "";
  });
});
