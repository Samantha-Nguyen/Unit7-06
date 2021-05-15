// This connects my "Play" button to the play function down below. I put this here just so that the user can at least see my webpage clearly first before starting the game
document.getElementById('play').addEventListener('click', play)

// Sets my age to 16, user guess to 0
let age = 16
let guess = 0

// This function sends alerts to the user and they must guess my age (16) correctly to break out of the loop
function play () {
  while (guess !== age) {
    guess = prompt('Guess my age!')
    if (guess == age) {
      alert('Congrats, you guessed correctly!')
    } else if (guess < age) {
      alert('Try higher.')
    } else if (guess > age) {
      alert('Try lower.')
    } else {
      alert('Please guess a valid number')
    }
  }
}
