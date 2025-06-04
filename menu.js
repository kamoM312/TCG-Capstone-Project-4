const menuItem = document.getElementsByClassName("menu-item");

const menuModal = document.querySelector("#menu-modal");

let index = 0;

function currentItem() {
    index = parseInt(this.getAttribute("data-index"));
    // console.log(parseInt(this.getAttribute("data-index")));
    let imageLocation = menuItem[index].children[0].children[0].getAttribute("src");
    let itemName = menuItem[index].children[1].children[0].innerText;
    let itemDescription = menuItem[index].children[3].children[0].innerText;
    
    document.querySelector("#menu-modal").style.backgroundImage = `url('${imageLocation}')`;
    document.querySelector(".item-name").innerText = itemName;
    document.querySelector(".item-description").innerText = itemDescription;
    document.querySelector('#menu-modal').classList.remove("hidden");
}

// make click event work on every gallery item
for( i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", currentItem);
}

menuModal.addEventListener("click", () => {
    menuModal.classList.add("hidden");
})

