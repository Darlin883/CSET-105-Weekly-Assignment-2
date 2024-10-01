     
     let user = 0;
     let tie = 0;
     let cpu = 0;

function RockPapersScissors(x){
    let options = ['scissors', 'rock','paper'];
    let randOpIndex = Math.floor(Math.random() * 3); // random operator
    let RPSRand = options[randOpIndex];


        let randomSelect = document.getElementById("randomSelect")
        let userSelect = document.getElementById("userSelect")
        let userScore = document.getElementById("userScore")
        let cpuScore = document.getElementById("cpuScore")
        let tieScore = document.getElementById("tieScore")
    
        if(RPSRand == x.value){// figure out a way to distanguish rock paper and scissor
            tie = tie + 1;
            console.log("tie")
            tieScore.innerText = tie;
            
        }

        if(RPSRand == "rock" && x.value == "scissors" || RPSRand == "paper" && x.value == "rock" || RPSRand == "scissors" && x.value == "paper" ){
            randomSelect.innerText = RPSRand;
            userSelect.innerText = x.value;
            cpu++;
            cpuScore.innerText = cpu;
        
        }else if(RPSRand == "scissors" && x.value == "rock" || RPSRand == "rock" && x.value == "paper" || RPSRand == "paper" && x.value == "scissors"){
            randomSelect.innerText = RPSRand;
            userSelect.innerText = x.value;
            user++;
            userScore.innerText = user;
        }
       
   
}