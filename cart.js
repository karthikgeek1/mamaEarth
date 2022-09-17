// =====================cart===========
document.querySelector(".icon").addEventListener("click", function () {
  document.querySelector(".cart_ITEM").style.display = "flex";
  show_cart()
});

document.querySelector("#mycarticon").addEventListener("click", function () {
  document.querySelector(".cart_ITEM").style.display = "none";
});
let cart_content3 = document.querySelector(".cart_content3");
function add_to_cart(e){
    console.log(e.target.id);
    let category_id;
    if(PAGE_TYPE=="gift"){
        category_id=5;
    }
    else if(PAGE_TYPE=="products"){
        category_id=21
    }
    else{
        category_id=31
    }
    fetch(`https://mmrth-nd-api.honasa-production.net/v1/categories/${category_id}/products`).then(res=>res.json())
    .then(data=>data.bestsellers.map((item)=>{
        let iddval = item.id
        if(e.target.id.includes(iddval)){
            let cartArr=[]
            if(JSON.parse(localStorage.getItem('cartCheckout'))){
                cartArr=JSON.parse(localStorage.getItem('cartCheckout'))
            }
            cartArr.push(item)
            localStorage.setItem("cartCheckout", JSON.stringify(cartArr))
            console.log(cartArr);
        }
  }))
}
function show_cart(){
    cart_content3.innerHTML=''
    let data =JSON.parse(localStorage.getItem('cartCheckout'))
    data.map((item)=>{
        html=`<div class="cart_data" id="cont${item.id}" >
      <img src=${item.images[0]} alt="mamaearth" class="cart_image_name">
      <p class="image_name" >${item.name}</p>
      <p class="price_name" > Rs.${item.price}</p>
       <button class="deletebutton" id=${item.id} onclick="deleteData(event)">Drop</button>`
       cart_content3.innerHTML+=html

    })
}

function deleteData(e) {
    let data = JSON.parse(localStorage.getItem('cartCheckout'))
    let itemToBeRemoved;
    for(let i=0; i<data.length; i++){
        if(e.target.id==data[i].id){
            itemToBeRemoved=i
        }
    }
    data.splice(itemToBeRemoved,1)
    localStorage.setItem("cartCheckout", JSON.stringify(data))
    show_cart()
}