let track = document.querySelector('.carousel_track');
let slides = Array.from(track.children);
console.log(slides)
let nextButton = document.querySelector('.carousel_button--right');
let prevButton = document.querySelector('.carousel_button--left');
let dotNav = document.querySelector('.carousel_nav');
let dots= Array.from(dotNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);


//arrange the slides next to one another
let slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
    slides.forEach(slidePosition);



    let moveSlide =(track, currentSlide, targetSlide)=>{
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current_slide');
        targetSlide.classList.add('current_slide');

    }


    let updateDots=(currentDot,targetDot)=>{

         currentDot.classList.remove('current_slide');
         targetDot.classList.add('current_slide');
    }

    let hideArrows=(slides,targetIndex,prevButton,nextButton)=>{
        
       if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
       }

       else if(targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');

       }

       else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
       }
    }





     prevButton.addEventListener('click',(event)=>{
        const currentSlide = track.querySelector('.current_slide');
        const prevSlide = currentSlide.previousElementSibling;
         let currentDot = dotNav.querySelector('.current_slide');
         const prevDot = currentDot.previousElementSibling;
         let prevIndex = slides.findIndex(slide => slide === prevSlide);

        
         moveSlide(track, currentSlide, prevSlide);
          updateDots(currentDot,prevDot);
          hideArrows(slides,prevIndex,prevButton,nextButton)
       
      
    })


    nextButton.addEventListener('click',(event)=>{
        const currentSlide = track.querySelector('.current_slide');
        const nextSlide = currentSlide.nextElementSibling;
         let currentDot = dotNav.querySelector('.current_slide');
         const nextDot = currentDot.nextElementSibling;
          let nextIndex = slides.findIndex(slide => slide === nextSlide);


         moveSlide(track, currentSlide, nextSlide);
          updateDots(currentDot,nextDot);
          hideArrows(slides,nextIndex,prevButton,nextButton)
   
    })


    dotNav.addEventListener('click',(event)=>{
      
        const targetDot = event.target.closest('button');
       
             if(!targetDot) return;
        let currentSlide = track.querySelector('.current_slide');
        let currentDot = dotNav.querySelector('.current_slide');
        let targetIndex = dots.findIndex(dot => dot === targetDot);
        let targetSlide = slides[targetIndex];

        //console.log(targetSlide)
       moveSlide(track, currentSlide, targetSlide);
       updateDots(currentDot,targetDot);
       hideArrows(slides,targetIndex,prevButton,nextButton);



        
       

    })








    
    

