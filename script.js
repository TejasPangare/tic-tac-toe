let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner-sect");
let winnerHead = document.querySelector(".winner-sect h1");
let winnerMsg = document.querySelector(".winner-sect p");
let winnerGif = document.querySelector(".winner-sect span");
var winnerName;

const player1 = prompt("Who's playing ZENITSU")
const player2 = prompt("Who's playing INOSUKE")

const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

var win=false
let turnX = true;
let count=0;
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerHTML = '<img src="zenitsu.png" alt=""> <audio id="spray" controls autoplay><source src="slice.mp3" type="audio/mp3" /></audio>'
            turnX = false

        }
        else {
            box.innerHTML = '<img src="ino.png" alt=""> <audio id="spray" controls autoplay><source src="slice.mp3" type="audio/mp3" /></audio>'
            turnX = true
        }
        box.disabled = true
        count++;
        checkWinner();
        noResult();
    })
})



const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winnerName = pos1;
                showWinner();
                win=true
            } 
        }   
    }
    
}

const noResult=()=>{
    if (count===9 && win==false) {
        winner.classList.add("winner-sect-display")
        winnerHead.innerText="OPPS!"
        winnerGif.innerHTML='<img src="sad-players.gif" alt="">'
        winnerMsg.innerText = `There Was A Draw`

    }
}

const showWinner = () => {
    winner.classList.add("winner-sect-display")
    if (winnerName ==='<img src="zenitsu.png" alt=""> <audio id="spray" controls="" autoplay=""><source src="slice.mp3" type="audio/mp3"></audio>') {
        winnerMsg.innerText = `Yayy! ${player1} Won 🎉`
    }
    else {
        winnerMsg.innerText = `Yayy! ${player2} Won 🎉`
    }
    boxes.forEach(box => {
        box.disabled = true
    });
}

//reset button
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerHTML = ""
        box.disabled = false
    });
    winner.classList.remove("winner-sect-display")
    turnX = true
    win = false
    count=0;
})



//function for mute and unmute music
function toggleMute() {
    var myAudio = document.getElementById('bgm');
    var mute = document.getElementById('mute-btn');
    myAudio.muted = !myAudio.muted;
    if (mute.innerHTML === '<i class="fa-solid fa-volume-xmark"></i>') {
        mute.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
    }
    else {
        mute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'
    }
}


//spray music
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {

    })

})
