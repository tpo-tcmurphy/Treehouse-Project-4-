/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// Created a Game class for the programing of the game
class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('We Live in a twilight World'),
      new Phrase('I know kung fu'),
      new Phrase('I have a dream'),
      new Phrase('Just do it'),
      new Phrase('There are no Friends at Dusk'),
      new Phrase('You Shall Not Pass'),
      new Phrase('This is Sparta')
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

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
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

  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

  gameOver (gameWon) {
    const startScreen = document.getElementById('overlay')
    startScreen.style.display = 'block'

    const gameEndMessage = document.getElementById('game-over-message')
    const gameEndOverlay = document.getElementById('overlay')
    if (gameWon) {
      gameEndMessage.textContent = 'Great Job, You Won!'
      gameEndOverlay.classList.replace('start', 'win')
    } else {
      gameEndMessage.textContent = 'So Sorry You Lost... Beter Luck Next Time!'
      gameEndOverlay.classList.replace('start', 'lose')
    }
  }

  /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
  removeLife () {
    const heart = document.getElementsByTagName('img')
    heart[this.missed].setAttribute('src', 'images/lostHeart.png')
    this.missed += 1

    if (this.missed === 5) {
      this.gameOver()
    }
  }

  /**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

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
