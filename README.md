<h1>What is {live:js}?</h1>

- [Slides](#slides)
  - [Run locally](#run-locally)
    - [Modes](#modes)
  - [Add a new slide](#add-a-new-slide)

---

## Slides

### Run locally

* Install dependencies with `npm install`
* Start the server with `npm start`
* Open the slides on http://localhost:8083

#### Modes

* [Normal](http://localhost:8083) (will be used during development)
* [Present - Live](http://localhost:8083?live=true) (will be used on the projector for the audience)
* [Present - Speaker](http://localhost:8083?present=true)


### Add a new slide

* Create a new slide in `src/slides` using the template from `blueprint-templates/slide/__name__.js__`
  * The name of the slide should be lower-case with `-` to separate words
* When the slide was created, put it at the position you want it to be visible inside the `mySlides` array in `src/index.js`

