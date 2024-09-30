
function RockPapersScissors(x){
    let options = ['scissors', 'rock','paper'];
    let randOpIndex = Math.floor(Math.random() * 3); // random operator
    let RPSRand = options[randOpIndex];

    let ele = document.createElement("h3")
    let div = document.getElementById("div")

     let user = 0;
     let cpu = 0;
    
        if(RPSRand == x.value){// figure out a way to distanguish rock paper and scissor
            console.log("tie")
            // ele.innerHTML = (`tie`)
            // div.appendChild(ele) works
        }

        if(RPSRand == "rock" && x.value == "scissors"){
            console.log(`CPU chose: ${RPSRand} && user: ${x.value}`)
            // ele.innerHTML = (`CPU chose: ${RPSRand} && user: ${x.value}`)
            // div.(ele)
            console.log("CPU won")
        
        }else if(RPSRand == "scissors" && x.value == "rock"){
            console.log(`CPU chose: ${RPSRand} && user: ${x.value}`)
            console.log("user won")
        }

        if(RPSRand == "paper" && x.value == "rock"){
            console.log(`CPU chose: ${RPSRand} && user: ${x.value}`)
            console.log("CPU won")
        }else if(RPSRand == "rock" && x.value == "paper"){
            console.log(`CPU chose: ${RPSRand} && user: ${x.value}`)
            console.log("user won")
        }

        if(RPSRand == "scissors" && x.value == "paper"){
            console.log(`CPU chose: ${RPSRand} && user: ${x.value}`)
            console.log("CPU won")
        }else if(RPSRand == "paper" && x.value == "scissors"){
            console.log(`CPU chose: ${RPSRand} && user: ${x.value}`)
            console.log("user won")
        }
    
    
   
}