# GAL Study Group #4: Promises

### Agenda:

#### TLDR;

- Overview
- Egghead Video
- Put it into practice
- Share & Discuss

## Topic

- **What is a Promise?**
  - "The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value." -- [The Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) It's pretty much a new way to handle asynchronous code.

- **Where can I use this new syntax? Is it supported?**
  - You can see which browsers support which features [here](http://caniuse.com/#feat=promises), in the compatibility table.
  - If you want to make sure your code's supported as widely as possible, you can use [a polyfill](http://ourcodeworld.com/articles/read/316/top-5-best-javascript-promises-polyfills).

- **Why should I learn it?**
  1. Because you can define a single `catch` callback that will handle failures in one place
  1. Because you can use the amazing [`Promise.all`]()
  1. Because it can help clean up your files by avoiding excessive indentation

  Nice explanation here: https://stackoverflow.com/questions/22539815/arent-promises-just-callbacks

## [Video!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Practice

- Open `index.html` (preferably in Chrome) and also check out `practice.js`

## References I Used

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
1. https://egghead.io/lessons/javascript-convert-a-callback-to-a-promise
1. http://caniuse.com/#feat=promises
1. http://ourcodeworld.com/articles/read/316/top-5-best-javascript-promises-polyfills
1. https://stackoverflow.com/questions/22539815/arent-promises-just-callbacks
