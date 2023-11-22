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

    // Ajouter un gestionnaire d'événement de transition
    Wicked.addEventListener('transitionend', function() {
        // Obtenez la position actuelle après la transition
        let computedStyle = window.getComputedStyle(Wicked);
        let topValue = parseInt(computedStyle.top);
        
        // Vérifiez si la position est à 75%
        if (topValue === 75) {
            console.log("ueue");
        }
    });
}
MoveWicked();
