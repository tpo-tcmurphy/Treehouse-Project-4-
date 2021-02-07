/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Created a Phrase class for programing phrases
class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  // Adds letter placeholders to the display when the game starts.
  addPhraseToDisplay () {
    const chars = this.phrase.split('')
    const patt = /[a-z]/

    for (const char of chars) {
      const result = patt.test(char)
      if (result) {
        const li = document.createElement('li')

        li.textContent = char
        li.classList.add('hide', 'letter', char)

        document.querySelector('#phrase ul').appendChild(li)
      } else {
        const li = document.createElement('li')

        li.textContent = char
        li.className = 'space'

        document.querySelector('#phrase ul').appendChild(li)
      }
    }
  }

  // Checks to see if the letter selected by player matches a letter in the phrase
  checkLetter (letter) {
    if (this.phrase.toLowerCase().includes(letter)) {
      return true
    } else {
      return false
    }
  }

  // Reveals the letters on the board that match the selection

  showMatchedLetter (letter) {
    const matched = document.querySelectorAll(`.${letter}`)
    matched.forEach(matching => (matching.className = `show letter ${letter}`))
  }
}
