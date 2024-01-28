let abox = document.querySelectorAll(".box");
let restart = document.querySelector("#reset-btn");
let newBtn =  document.querySelector("#new-btn");
let msgContain = document.querySelector(".msg-continer");
let msg = document.querySelector("#msg");
const  winerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let resultfinal = true;
abox.forEach((box)=>{
    box.addEventListener("click", ()=>{
      if(resultfinal){
        box.innerText="x";
        resultfinal=false;
      }else{
        box.innerText="0";
        resultfinal=true;
      }
      box.disabled = true;

      checkNow();
    })
   
})
const reSetgame = ()=>{
   resultfinal = true;
   gameStart();
   msgContain.classList.add("hide");
}
const gameOver = ()=>{
    for(let box of abox){
        box.disabled = true;
    }
}
const gameStart = ()=>{
    for(let box of abox){
        box.disabled = false;
        box.innerText="";
    }
}
const shoWiner = (result)=>{
   msg.innerText = `winner ${result}`;
   msgContain.classList.remove("hide");
   gameOver();
}
const checkNow = () => {
  for (let patten of winerPattern) {
 
   let val1 = abox[patten[0]].innerText;
   let val2 = abox[patten[1]].innerText;
   let val3 =  abox[patten[2]].innerText;
   if(val1 != "" && val2 != "" && val3 != ""){
    if(val1 === val2 && val2 === val3){
        console.log("winner");
        shoWiner(val1);
    }
   }
   }
};
newBtn.addEventListener("click", reSetgame);
restart.addEventListener("click", reSetgame);