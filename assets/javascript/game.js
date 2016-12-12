 // Use these variables for wins, losses, and guesses //

      var wins = 0;
      var losses = 0; 
      var guessesLeft = 9; 
      var guessesSoFar = []; 

      // Creating an array for letters of the alphabet for possible Computer Choices.
      
      var alphabet = "abcdefghijklmnopqrstuvwxyz";

      var computerChoices = alphabet.split(""); //the argument is a null string

      // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        
      function computerSelection(){ return computerChoices[Math.floor(Math.random() * computerChoices.length)];
      }

      var computerGuess = computerSelection ();
      console.log("the computer guessed: " + computerGuess);
      
      // When the user presses a key, it will run the following function...
      
      document.onkeyup = function(event) {

          // Determine which key was pressed
        
          var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //toLowerCase normalizes all of my characters

          //push userGuess into the variable guessesSoFar

          // userGuess.push(guessesSoFar); was WRONG!! Returned error that is was not a function, I had these two variables backwards. 
          guessesSoFar.push(userGuess);
          console.log(guessesSoFar);
          document.getElementById("guessesSoFar").innerHTML = guessesSoFar.join(" ");


          //This logic determines the outcome of the game (win, loss, guesses left, and increments the appropriate counter.

          if (userGuess === computerGuess) {
            //increases win counter
            wins++;
            console.log("wins:" + wins);
            document.getElementById("wins").innerHTML = wins;

            //resets the computer's guess
            computerGuess = computerSelection ();
            console.log("the computer guessed: " + computerGuess); 
            //resets the number of guesses
            guessesLeft=9;
            console.log("guessesLeft:" + guessesLeft);
            document.getElementById("guesses").innerHTML = guessesLeft;

            //resets Your Guesses so Far
            guessesSoFar=[]; 

          }

          else {
            //decreases guesses counter
            guessesLeft--;
            console.log("guessesLeft:" + guessesLeft); 
            document.getElementById("guesses").innerHTML = guessesLeft; 
            console.log(userGuess);
          
            }

          if (guessesLeft === 0) {
            //increases losses counter
            losses++;
            console.log("losses:" + losses);
            document.getElementById("losses").innerHTML = losses;

            //resets the guesses counter
            guessesLeft=9;
            console.log("guessesLeft" + guessesLeft);
            document.getElementById("guesses").innerHTML = guessesLeft; 
            
            //resets Your Guesses so Far
            guessesSoFar=[];

          }


          }; //this closing tag ties to .onkeyup function
      
     
