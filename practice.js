// ---- Part the First: Creating the Promise ----

console.log('Hello from the JavaScripts')

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Woohoo!')
  }, 5000)
})

/* Uncomment and refresh; watch the console. */

function printMessage(thing) {
  console.log(thing)
}

promise.then(printMessage)

class FakePromise {
  constructor(callback) {
    this.callback = callback
  }

  then(resolve) {
    this.callback(resolve)
  }
}

// ---- Part the Second: Handling failure ----

var $content = $('#content')

// var secondPromise = new Promise((resolve, reject) => {
//   var magicNumber = 30
//   setTimeout(() => {
//     if (magicNumber < 10) {
//       resolve(magicNumber)
//     } else {
//       reject(`ERROR: ${magicNumber} is not less than ten. doy`)
//     }
//   }, 1500)
// })

/*
  Uncomment and refresh. Next, try changing the magicNumber to 30.
*/

// secondPromise
//   .then((number) => {
//     $content.html(`<p>${number} is magical!!</p>`)
//   })
//   .catch((errorMessage) => {
//     $content.html(`<p>${errorMessage}</p>`)
//   })

/*
  Another thing to note - promises will run the
  reject callback if an error is thrown during execution.

  Uncomment and refresh:
*/

// var brokenPromise = new Promise((resolve, reject) => {
//   throw 'OH NO'
// })

// brokenPromise
//   .then(console.log)
//   .catch(console.warn)

// ---- Part the Third: Real Life ----

var apiEndpoint = 'http://pokeapi.co/api/v2/pokemon/pikachu'

/*
  Uncomment the below and reload the page
*/

// var iPromiseToLoadPokemon = new Promise((resolve, reject) => {
//   $.get(apiEndpoint, (data) => {
//     console.log(data)
//     resolve(data)
//   })
// })

// iPromiseToLoadPokemon
//   .then(data => {
//     var pokemon = new Pokemon({
//       name: data.name,
//       imageUrl: data.sprites.front_default
//     })
//     $content.empty()
//     $content.append(pokemon.$displayEl)
//   })
//   .catch(console.error)



// ---- Part the Fourth: Promise.all ----

/*
  Uncomment the below and reload the page
*/

var numbers = [ 120, 20, 99, 40, 50 ]

const endpoint = (id) => `http://pokeapi.co/api/v2/pokemon/${id}`

var promises = numbers.map(number => {
  return new Promise((resolve, reject) => {
    $.get(endpoint(number), (data) => {
      console.log(`Loaded data for pokemon #${number}!`)
      var pokemon = new Pokemon({
        name: data.name,
        imageUrl: data.sprites.front_default
      })
      resolve(pokemon.$displayEl)
    })
  })
})

// promises.forEach(promise => {
//   promise.then(($pokemonEl) => {
//     $content.empty()
//     $content.append($pokemonEl)
//   })
// })

Promise.all(promises)
  .then((values) => {
    $content.empty()
    $content.append(values)
  })

// --- helper function --
class Pokemon {
  constructor({ name, imageUrl }) {
    this.title = $(`<h1>${name}</h1>`)
    this.img = $(`<img src="${imageUrl}"></h1>`)

    var $displayEl = $('<div class="pokemon">')
    $displayEl.append(this.title)
    $displayEl.append(this.img)
    this.$displayEl = $displayEl
  }
}
