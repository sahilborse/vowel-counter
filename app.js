let inputText =document.querySelector("#input-text");
let buttonEvent =document.querySelector("#button-event");
let addElement=document.querySelector("#add-element")


function countvowel(){
    let vowels=["a","e","i","o","u"]
    input =inputText.value
    let len =input.length
    let base=0
    let sample=0;
    for(let i=0;i < len;i++){
        console.log(input[i])
        base=compare(vowels,i,input)
        console.log("base value "+base)  
        sample+=base 
        console.log(sample)
    } 
    addElement.innerHTML=sample
}


function compare(vowels,i,input){
    let vowelNo =0
    let alpainput =input[i]
    for(let u=0;u<vowels.length;u++){  
       
       if( alpainput == vowels[u]){
        
      
        vowelNo++
        
       }
       else{
        console.log("End program")
       }
    }
     
    return vowelNo;
}
buttonEvent.addEventListener("click",()=>{})