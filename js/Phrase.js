/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Created a Phrase class for programing phrases
class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
* Display phrase on game board
*/
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

  // Checks to see of if letter matches the letter in phrase
  checkLetter (letter) {
    if (this.phrase.toLowerCase().includes(letter)) {
      return true
    } else {
      return false
    }
  }

  // Shows matched letters

  showMatchedLetter (letter) {
    const matched = document.querySelectorAll(`.${letter}`)
    matched.forEach(matching => (matching.className = `show letter ${letter}`))
  }
}
