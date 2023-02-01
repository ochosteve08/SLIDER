let tabBox= document.querySelector('.tab-box');
let arrowIcon = document.querySelectorAll('.arrows');
let allTabs = document.querySelectorAll('.tab');


let isSliding = false;

let handleIcon = ()=>{
    let scrollVal = Math.round(tabBox.scrollLeft);
    let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;

    arrowIcon[0].parentElement.style.display= scrollVal>0 ? "flex": "none";
    arrowIcon[1].parentElement.style.display= maxScrollableWidth-1>scrollVal ? "flex": "none";
    //console.log(scrollVal);
    //console.log(maxScrollableWidth-1>scrollVal);
}



arrowIcon.forEach(icon=>{
    icon.addEventListener('click', ()=>{
        //if clicked icon is left, reduce 350 from tabBox scroll left, else add
         tabBox.scrollLeft += icon.id === "left"? -350: 350;
         setTimeout(()=>handleIcon(),50);
})})


allTabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        //removing active class from the previous tab and adding current clicked tab
        tabBox.querySelector('.active').classList.remove('active');
        tab.classList.add('active');
      
})})





tabBox.addEventListener('mousemove',(event)=>{
    //console.log(isSliding)
    if(!isSliding) return;
    tabBox.classList.add('sliding');
    //console.log("sliding on")
    tabBox.scrollLeft -= event.movementX;
    handleIcon();
 })

 // making dragging value true on mouse down event
tabBox.addEventListener('mousedown',(event)=> {
    isSliding = true});

// making dragging value false on mouse button is released
document.addEventListener('mouseup',(event)=> { 
    isSliding = false;
    tabBox.classList.remove('sliding');
    //console.log("sliding stopped");

}
);