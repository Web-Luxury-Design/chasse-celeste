const Game=document.querySelector(".game")

const MoveHero=()=>{
    let ArrowUp=true
    document.body.addEventListener("keydown",(e)=>{
        if (e.key==="ArrowUp") {
            if (ArrowUp) {
                ArrowUp=false
                herosMain.style.bottom="35%"
                setTimeout(()=>{
                herosMain.style.bottom="10%"
                },500)
            }
            setTimeout(()=>{
                ArrowUp=true
            },1000)
        }
    })
}
MoveHero()
const MoveWicked = () => {
    let Wicked = document.createElement("img");
    Wicked.src = "image-fond/wicked1.png";
    Game.appendChild(Wicked);
    Wicked.classList.add("Wicked");
}
MoveWicked();
const TouchWicked=()=>{
    document.body.addEventListener("click",(e)=>{
        let Touch=e.target
        if (Touch.classList.contains("Wicked")) {
            Touch.remove()
            console.log("toucher");
        }
    })
}
TouchWicked()
let Space=true
let interval;
window.addEventListener("keydown", (e) => {
    if (e.key === " " && Space) {
        interval=setInterval(()=>{
            MoveWicked() 
            Space=false
        },2000)
    }else if(e.key === " " && !Space){
        clearInterval(interval)
    }
})