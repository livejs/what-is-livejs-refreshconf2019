import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css, keyframes} from 'styled-components'
import Deck, {Elements, Plugins} from '@dekk/dekk'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import './styles/codemirror'
import Luminave from './plugins/luminave'
import StyledHeader from './components/styledHeader'
import StyledFooter from './components/styledFooter'
import LuminaveButton from './components/luminaveButton'

const mySlides = [
  'cover',

  'livejs-name-explained',

  'collective-of-digital-artists',
  // TODO: Update every person with their role at livejs, what they love and how they make money
  'ruth-john',
  'tim-pietrusky',
  'martin-schuhfuss',
  'matt-mckegg',
  'sam-wray',
  'jan-krutisch',

  'history-of-livejs',
  'livejs-manifesto',
  'what-is-a-live-show',
  'how-to-run-a-show-in-3-phases',

  'refreshconf-lunch-show-explained',

  'jans-current-stack',
  'improjam',
  'improjam-2',
  'teapot',
  'teapot-2',

  'tims-current-stack',
  // TODO diagram to explain what I'm using? And then a live demo?

  // 'dmx512',
  'dmx512-universe-diagram',
  // 'dmx512-fixture',
  // 'dmx512-universe',
  // dmx512 diagram to explain how this works
  // 'dmx512-controller',
  // 'arduino-leonardo',
  'webusb-dmx512-controller',
  'cyberpunk-goggles',
  // maybe a diagram?

  'jsconfeu-opening-2019',
  'jsconf-asia-2019',
  'jsconf-budapest-2019',
  'shows-around-the-world',
  'this-is-really-cool-but',
  'co2-wasted-by-livejs-since-the-beginning',

  // TODO: a chart where everyone is living -> Airport -> CO2

  'tons-of-co2',
  'personal-budget',
  // TODO: I'm going to try to find numbers for this, if not, just leave it out
  'co2-per-person-year-in-groningen',

  // show me your hands!
  // TODO: The question should be a fragment
  'play-in-empty-rooms',
  // 'do-you-want-to-party-after-a-long-day-of-talks',

  'what-can-we-do-about-this',
  'we-as-livejs',
  /*
 Empower local communities to do shows themselves by doing workshops
Call for artists at Conferences
Give talks to empower creativity and to give context
Online community on Slack

  */

  'what-is-jan-doing',
  'extinction-rebellion',

  'what-is-tim-doing',
  'thorium-spaceship-simulator',

  'what-can-you-do',

  'art-is-giving-back-positive-energy-into-the-community',
  // It’s not about that we can do music and control lights live to perform on stage,
  // but how we can do it, the technology behind it, the context so
  // that you can do this too, to show the possibility, to extend your horizons

  'thank-you'
]

const {present, live} = search.parse(window.location.href)

const baseStyles = css`
  --slide-color: #000;
  --font-family: 'Montserrat', sans-serif;
  --title-font-size: 6em;
  --subtitle-font-size: 3em;
  --theme-primary: #000;
  --theme-primary-dark: #333;
  --theme-on-primary: #fff;
  --theme-background: #fff;
  --theme-surface: #fff;

  --color-green: #35c9a4;
  --color-red: #da4453;
  --color-yellow: #ec9f00;
  --color-blue: #3caee5;

  background: var(--theme-background);

  h1,
  h2,
  h3 {
    /*text-align: left;*/
  }

  a {
    /* color: var(--color-red); */
  }

  h1,
  h2 {
    width: 100%;
  }

  .center {
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .center > h2 {
    text-align: center;
  }

  .strobe-1 {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    animation: strobe 500ms steps(1, end) infinite;

    @keyframes strobe {
      74% {
        background: white;
      }
      75% {
        background: black;
      }
    }
  }

  .invert {
    background: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    > h2 {
      text-align: center;
    }
  }

  .overlay {
    position: relative;
    height: 100%;
    width: 100%;

    .child {
      position: absolute;
      bottom: 15vh;
      left: 0;
    }
  }

  .columns {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1em;
    justify-items: center;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
    this.slides = this.props.slides
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return (
      <Deck mixin={baseStyles} timer={30}>
        <Elements mode={['live']}>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="http://localhost:8081"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>
        </Elements>

        <Plugins mode={['present']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Luminave
            publish
            showFrame={this.state.showFrame}
            handleFrame={this.setFrame}
          />
          <LuminaveButton onClick={this.setFrame}>Luminave</LuminaveButton>
        </Plugins>

        <Plugins mode={['live']}>
          <LocalStorage subscribe />
          <Luminave
            subscribe
            handleFrame={this.handleFrame}
            slides={this.slides}
          />
        </Plugins>

        <Plugins mode={['default']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
        </Plugins>

        {this.slides}

        {/* <Elements mode={["default"]}>
          <StyledFooter isActive={true}>
            <h1>jo jo jo</h1>
          </StyledFooter>
        </Elements> */}
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

/**
 * Dynamically import the slides
 */
async function loadSlides() {
  const slides = []

  await Promise.all(
    mySlides.map(async (slide, index) => {
      let module = await import(`./slides/${slide}.js`)
      slides[index] = module.default
    })
  )

  return slides
}

loadSlides().then(slides => {
  render(<App slides={slides} />, mountPoint)
})
