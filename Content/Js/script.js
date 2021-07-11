// Primary Function

function rpsGame(yourChoice) {
    var humanChoice, botChoice, results, message;

    humanChoice = yourChoice.id;
    botChoice = randomChoice();
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomChoice() {
    const rand = Math.floor(Math.random() * 3);
    return Object.keys(rpsDatabase)[rand]
}

const rpsDatabase = {
    'rock': {scissors: 1, rock: 0, paper: -1},
    'paper': {rock: 1, paper: 0, scissors: -1},
    'scissors': {paper: 1, scissors: 0, rock: -1},
  };

function decideWinner (yourChoice, computerChoice) {
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];   
}

function finalMessage ([yourScore, computerScore]) {
    if (yourScore > computerScore)
      return {message: 'You won!', color: 'green'}
    else if (computerScore > yourScore)
      return {message: 'You lost!', color: 'red'}
    else 
      return {message: 'You tied!', color: 'yellow'}
  }

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //Let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //Create Divs for the outcome
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //Append the image into the Divs
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' width='150' height='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' width='150' height='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

    document.getElementById('flex-box-weapons-div').appendChild(humanDiv);
    document.getElementById('flex-box-weapons-div').appendChild(messageDiv);
    document.getElementById('flex-box-weapons-div').appendChild(botDiv);
}

