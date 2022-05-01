
const btn=document.querySelector(".btn");
const text=document.querySelector("#text");
btn.addEventListener("click",(e)=>{

    function change(lenght){
        let result='';
       let char='ABCDEFGHMNOPKRSDQxvzw1234567890';
        let lenghtPass=char.length;
        for(let i=0;i<lenght;i++){
            result+=char.charAt(Math.floor(Math.random()*lenghtPass))
        }
        return text.innerText=result
    }
    change(8)
})