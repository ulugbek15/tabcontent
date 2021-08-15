let headerNav = document.querySelector(".header__nav");
let tabContent = document.querySelectorAll(".tabcontent");
let tab = document.querySelectorAll(".tab");

function hideTabContent(a){
    for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove("show")
        tabContent[i].classList.add("hide")
    }
};
hideTabContent(1, tabContent);

function showTabContent(z){
    if(tabContent[z].classList.contains('hide')){
        tabContent[z].classList.remove("hide")
        tabContent[z].classList.add("show")
    }
};

headerNav.addEventListener('click', (evt) =>{
    let target = evt.target;
    
        for(let i = 0; i < tab.length; i++){
            if(target == tab[i]){
                hideTabContent(0, tabContent);
                showTabContent(i, tabContent);  
                break;
            }
        }
});

// let data = [
//     {company: "Apple", model: "IphoneX", price: 1000},
//     {company: "Nokia", model: "3110", price: 100},
//     {company: "Samsung", model: "S20", price: 1200},
//     {company: "Motorolla", model: "MotorollaX9", price: 120}
// ]


