const spanElements = document.getElementsByClassName("span");
const checkboxElements = document.getElementsByClassName("check");


for (let index = 0 ; index < checkboxElements.length ; index++) {
    checkboxElements[index].addEventListener("click", () => {
        spanElements[index].classList.toggle("dashed");
    })
}