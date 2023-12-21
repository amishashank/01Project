const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 180) {
        navbar.classList.add('bg');
    }else{
        navbar.classList.remove('bg')
    }
   console.log(scrollY);
})

//image collage

/*const collageImages =[...document.querySelectorAll('.img-collage')]

collageImages.map((item,i)=>{
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if (index != i) {
                image.style.filter = `blur(10px)`;
                item.style.zindex = 2;
            }
        })
    })
    item.addEventListener('mouseleave' () => {
        collageImages.map((image.index) => {
            image.style=null;
        })
    })
    
})*/
