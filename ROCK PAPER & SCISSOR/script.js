const Name = prompt("Enter Your Name");

// Check if userName is not null (user clicked cancel)
if (Name !== null) {
    // Proceed with the game
    let userScore = 0; // initialization of human score
    let compScore = 0; // initialization of AI score

    const choice = document.querySelectorAll(".choice"); // class choice is accessed through query selector
    const msg = document.querySelector(".score"); // accessing the score paragraph so that we can update it !

        
    const yourNumber = document.querySelector(".user-score-number")// accessing the score number of user
    const aiNumber = document.querySelector(".ai-score-number") // accessing the score number of ai

    
    const you = document.querySelector(".user-score-name")

    you.innerText = Name
    


    
    
    //computer generated
    
    const genCompChoice = () => {
        //to gereate random we need an array !
    
        const option = ["rock", "paper", "scissor"] // we have made array becuase we can take their index value and we can generate random things
    
        const randomIndex = Math.floor(Math.random() * 3); // math floor represent that it will give whole number and math.random will give random whole numbers and then multiplied by 3 means it will give 3 choices its means choice at index 0,1,2 = 3 choices 
    
        return option[randomIndex]; // here the index will get returned randomly 
    
    }
    
    const drawgame = () => {
    
        msg.innerText = Name + " Its A draw. Play again !"
    
        msg.style.backgroundColor = "black"
    }
    
    
    
    const showWinner = (userWin, computerChoice, userChoice) => { // we are making another function to show the winnners result
        if (userWin) {
    
            userScore++;
            yourNumber.innerText = userScore
    
            msg.innerText = Name + ` wins ! Your ${userChoice} Beats ${computerChoice}`
            msg.style.backgroundColor = "orange"
    
    
    
        } else {
    
    
            compScore++;
            aiNumber.innerText = compScore;
    
            msg.innerText = ` AI wins ! ${userChoice} Lost to ${computerChoice}`
            msg.style.backgroundColor = "red"
        }
    }
    //human generated
    const playGame = (userChoice) => {
        console.log("the user choice is ", userChoice)
    
        // generate computer choice below :-
    
        const computerChoice = genCompChoice();
        console.log("computer choice ", computerChoice)
    
        //IF ELSE CONDITIONS TO DECIDE WHO IS THE WINNER 
    
        //lets start with draw scene 
    
        if (userChoice === computerChoice) {
            drawgame(); // we called the draw function and attached to the proper
        } else {
            let userWin = true;
            if (userChoice === "rock") // paper and scissors left
            {
                userWin = computerChoice === "paper" ? false : true;
            } else if (userChoice === "paper") // rock and scissors left
            {
                userWin = computerChoice === "scissor" ? false : true;
                // rock and paper
            } else if (userChoice === "scissor") // rock and scissors left
            {
                userWin = computerChoice === "rock" ? false : true;
            }
    
            // NOW WE WILL SHOW HERE THE WINNER 
    
            showWinner(userWin, computerChoice, userChoice);
        }
    }
    
    
    choice.forEach((choice) => { //each class is accessed through for each
    
        choice.addEventListener("click", () => { // listener event like click is added
            const userChoice = choice.getAttribute('id') // here we access the individual id like rock, paper and scissors 
    
            playGame(userChoice)
    
        })
    });


} else {
    // Handle the case where user clicked cancel
    alert("You did not enter your name. Refresh the page to try again.");
}


