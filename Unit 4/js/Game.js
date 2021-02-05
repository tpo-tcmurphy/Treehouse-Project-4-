/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Created a Game class for the programing of the game
class Game {
  constructor () {
    this.missed = 0
    this.phrases = this.createPhrases()
    this.activePhrase = null
  }

  /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
  createPhrases () {
    const newPhrases = [
      new Phrase ('We live in a twilight world'),
      new Phrase ('There are no friends at dusk'),
      new Phrase ('By any means necessary'),
      new Phrase ('Just do it'),
      new Phrase ('Heavy is the head that wears the crown'),
      new Phrase ('Beating around the bush'),
      new Phrase ('A fool and his money are soon parted')
    ]
    return newPhrases
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
}
