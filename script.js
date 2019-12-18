const startButton = document.querySelector('.start-button')

startButton.addEventListener('click', () =>
{
    document.querySelector('.start-screen').style.display = 'none'
    document.querySelector('.background .ground .movement-effect .dot-line-01').style.animationPlayState = 'running' 
    document.querySelector('.background .ground .movement-effect .dot-line-02').style.animationPlayState = 'running' 
    document.querySelector('.background .ground .movement-effect .dot-line-03').style.animationPlayState = 'running' 
    document.querySelector('.background .ground .movement-effect .dot-line-04').style.animationPlayState = 'running' 

    const audio = new Audio('sounds/corneria_ost.mp3');
    audio.play();
})