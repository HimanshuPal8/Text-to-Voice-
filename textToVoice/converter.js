text=document.getElementById('textbox');
speed=document.getElementById('speed');
playBtn=document.getElementById('playbtn');
pauseBtn=document.getElementById('pausebtn');
stopBtn=document.getElementById('stopbtn');
let currentChar

playBtn.addEventListener('click',()=>{
    playText(text.value)

})
pauseBtn.addEventListener('click',pauseText)
stopBtn.addEventListener('click',stopText)
speed.addEventListener('input',()=>{
    stopText()
    playText(uttrence.text.substring(currentChar))
    
})

const uttrence=new SpeechSynthesisUtterance()
uttrence.addEventListener('end',()=>{
    text.disabled=false
})
uttrence.addEventListener('boundary',e=>{
   currentChar= e.charIndex
})


function playText(txt){
    if(speechSynthesis.paused && speechSynthesis.speaking)
    {
        return speechSynthesis.resume()
    }
    uttrence.text=txt
    uttrence.rate= speed.value || 1 ;
    text.disabled=true
    speechSynthesis.speak(uttrence);
}

function pauseText(){
    if(speechSynthesis.speaking )
    speechSynthesis.pause()
}

function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}

