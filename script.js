const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const joke = [
    'Wife : I am going to London for a month.What should I bring for you?  Husband: A nice British Blonde... *after 1 month*  Husband : Where is my gift?    Wife : Wait for 9 months.',
    ' Why did the chatbot cross the road? Because it was programmed to be a chicken!' ,
    ' Knock-knock!  Who’s there?   It’s Siri....... Siri who?  My thoughts exactly.  ',
    ' You know, I was chatting to a lumberjack the other day. He seemed like a decent feller.',
    ' Knock-knock!  Who’s there?   Doctor!   Doctor who?  No thanks, I’m not in the mood for spoilers. ' ,
 
]

const gretting = [ "Not so well, does it bother you?",
"Its great mostly until I meet someone and then it changes according to whom I am meeting.",
"Have been doing well unless weather has different plans in store.",
"Well enough to chat with you if you wish to.",
"Thank you for asking,though you can judge yourself.",
"Doing good, will do better and then the best.",
"Doing good unless you have an HIV disease and transmit STD's.",
"Doing good unless you have intentions of shooting me."]





const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();
 
recognition.onstart = function() {
    console.log(" the microphone is activated");    
};

recognition.onresult = function(event){
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript ;
        content.textContent = transcript;
        readOutLoud(transcript);
};

//adding event listener  to the button 

btn.addEventListener('click', ()=>{
        recognition.start();

});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
  
    speech.text = 'i dont understand , and even  siri or alexa could ,cause they are dumb'; 
    
    if (message.includes('tell me a joke')) {
        const finalText = joke[Math.floor(Math.random()* joke.length)];
      
        speech.text = finalText;
    }
    if (message.includes('who was the programmer')) {
        const finalText = ['Shrey Was my programmer isnt he a cool guy '] ;

        speech.text = finalText ;
    }

    if (message.includes('what is your humour percentage')){
        const finalText = ['75% ..... self destructing in Tminus9.....Tminus8.....Tminus7.....Tminus6.....Tminus5.....okay just kidding you littl prick of love '] ;
        speech.text = finalText ;
    }
    if (message.includes('How are you')||message.includes("how you doing")){
        const finalText = gretting[Math.floor(Math.random() * gretting.length)];
        speech.text = finalText ;
    }
  
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 0.8;
  
    window.speechSynthesis.speak(speech);
}