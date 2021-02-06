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
    const lettersInPhrase = this.phrase.split('')
    const phraseUl = document.getElementById('phrase')

    lettersInPhrase.forEach(letter => {
      if (letter === '') {
        const spaceLet = document.createElement('li')
        spaceLet.classList.add('space')
        spaceLet.innerHTML = ''
        phraseUl.appendChild(spaceLet)
      } else {
        const letterLi = document.createElement('li')
        letterLi.classList.add('hide', 'letter')
        letterLi.innerHTML = letter
        phraseUl.appendChild(letterLi)
      }
    })
  };

  // checks to see if the letter selected by the player matches a letter in the phrase
  selectedLetter (letter) {
    if (this.phrase.includes(letter)) {
      return true
    } else {
      return false
    }
  }

  // check if the clicked letter exist in the active phrase. If it does, the letter in the phrase gets the 'show' class
  matchedLetter (letter) {
    const letterClass = document.getElementsByClassName(letter)
    for (let j = 0; j < letterClass.length; j++) {
      if (letterClass[j].innerHTML === letter) {
        letterClass[j].classList.add('show')
        letterClass[j].classList.remove('hide')
      }
    }
  }
}
