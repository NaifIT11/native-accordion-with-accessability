


const accordionItems = document.querySelectorAll(".accordions__item");
const accordionTriggers = document.querySelectorAll(".accordion-trigger");
const accordionContents = document.querySelectorAll(".accordion-content");


accordionTriggers.forEach((at , index) => {
    at.addEventListener("click" , () => {
        accordionTriggers.forEach((at ,index) => {
            if(at.getAttribute("aria-expanded" , 'true')){
                at.setAttribute("aria-expanded" , 'false');
                at.setAttribute("data-state" , 'closed')
                accordionItems[index].classList.remove("open");
                accordionContents[index].setAttribute("data-state" , "closed")
            }
        })
        at.setAttribute("aria-expanded" , 'true');
        at.setAttribute("data-state" , 'opened')
        accordionItems[index].classList.add("open");
        accordionContents[index].setAttribute("data-state" , "opened")
    });
})
