/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// Created a Game class for the programing of the game
class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('We live in a twilight world'),
      new Phrase('There are no friends at dusk'),
      new Phrase('By any means necessary'),
      new Phrase('Just do it'),
      new Phrase('Heavy is the head that wears the crown'),
      new Phrase('Beating around the bush'),
      new Phrase('A fool and his money are soon parted')
    ]
    this.activePhrase = null
  }

  /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
  getRandomPhrase () {
    const randomIndex = Math.floor(Math.random() * this.phrases.length)
    const randomPhrase = this.phrases[randomIndex]
    return randomPhrase
  }

  /**
* Begins game by selecting a random phrase and displaying it to user
*/
  startGame () {
    document.getElementById('overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  // Checks to see if player has revealed all of the letters in the active phrase
  checkForWin () {
    const shown = document.getElementsByClassName('letter')
    const shownArr = [...shown]

    for (const show of shownArr) {
      if (show.classList.contains('hide')) {
        return false
      }
    }
    return true
  }

  // If player loses 5 lives, game ends

  gameOver (gameWon) {
    const startScreen = document.getElementById('overlay')
    startScreen.style.display = 'block'

    const gameEndMessage = document.getElementById('game-over-message')
    const gameEndOverlay = document.getElementById('overlay')
    if (gameWon) {
      gameEndMessage.textContent = 'Great Job, You Won!'
      gameEndOverlay.classList.replace('start', 'win')
    } else {
      gameEndMessage.textContent = 'You Lost... Beter Luck Next Time!'
      gameEndOverlay.classList.replace('start', 'lose')
    }
  }

  // Removes a life if player is wrong
  removeLife () {
    const heart = document.getElementsByTagName('img')
    heart[this.missed].setAttribute('src', 'images/lostHeart.png')
    this.missed += 1

    if (this.missed === 5) {
      this.gameOver()
    }
  }

  // Disable selected letter's onscreen keyboard button
  // If phrase dosent include guessed letter , add wrong (CSS class)
  // If phrase includes the right letter, add correct (CSS class)
  handleInteraction (keyButton) {
    const keys = document.getElementsByClassName('key')
    for (const key of keys) {
      if (key.textContent === keyButton.textContent) {
        key.setAttribute('disabled', 'disabled')
      }
    }
    const isMatched = this.activePhrase.checkLetter(keyButton.textContent)
    if (isMatched) {
      keyButton.classList.add('chosen')
      this.activePhrase.showMatchedLetter(keyButton.textContent)
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin())
      }
    } else {
      keyButton.classList.add('wrong')
      this.removeLife()
    }
  }
}
