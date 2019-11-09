# Contributing

If you want to contribute please follow the guide in this file.

<!-- toc -->

- [Contributing](#contributing)
  - [Slides](#slides)
    - [Run locally](#run-locally)
      - [Modes](#modes)
    - [Add a new slide](#add-a-new-slide)
    - [Generate static version](#generate-static-version)
  - [Pull request](#pull-request)
  - [Issues](#issues)

<!-- tocstop -->

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

### Generate static version

To generate a static version that can be used with GitHub-Pages use:

```bash
npm run build
```

This will put everything into the `docs` folder.

---

## Pull request

Ensure that the changes are tested and documented.  
DO NOT commit any built versions.  

This project uses commitizen and conventional changelog. Please use either
to ensure that the changes are listed correctly and the commits can be parsed.

---

## Issues

Please include the browser and operating system.

A snippet of example code helps a lot, a link to the repo with the issue helps even more.
If the issue can be seen live please provide a link.

Include info about your development environment

* Chrome version
