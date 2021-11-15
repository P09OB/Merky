const navBar = document.querySelector(".navBar");
const btns = navBar.querySelectorAll("button");

console.log(navBar);
console.log(btns);

const navParams = new URLSearchParams(location.search);
const currenScreen = navParams.get('screen');

btns[1].addEventListener("click", () =>{

    window.location="./list.html?screen=lists";

})

btns[2].addEventListener("click", () =>{

    window.location="./communityListScreen.html?screen=community";

})


switch (currenScreen) {

    case "lists":

         btns[1].classList.add("navBar__list--active");

        break;

    case "community":
        btns[2].classList.add("navBar__community--active");

        break;

}
