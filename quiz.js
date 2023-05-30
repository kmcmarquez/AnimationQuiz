let SlideOne = document.getElementById('SlideOne')
SlideOne.addEventListener('animationend',
    function(){
        if(SlideOne.classList.contains('slideone')){
            SlideOne.classList.remove('slideone')
            SlideOne.classList.add('slidefade')
        
        }else{
            SlideOne.classList.add('d-none')
        }
    }
)