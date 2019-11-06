import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {
  RainbowText,
  TextMarker,
  Code2,
  YouTube,
  SuperVideo,
  StyledFooter
} from '../components'
import {css} from 'styled-components'
import {Grid, Half, HalfVertical} from '../masters'
import {ImportantLink} from '../components/links'
import {
  topCenter,
  LargeImage,
  MediumImage,
  SmallImage
} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {
  StyledListLarge,
  StyledList,
  StyledOrderedListLarge
} from '../components/list'

const {Slide, A} = Main
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>Tims Stack: Diagram</h3>
    <ul>
      <li>
        First of all we take a look at the computer that I'm using to run both
        luminave (lights) and modV (visuals). It must be a powerful machine to
        be able to use both applications at the same time and ensure that we
        always have 60 fps for smooth visuals.
      </li>
      <li>
        Attachted over USB is an Audio Interface that gets the audio signal
        directly from Jan. The signal is then used in modV to generate visuals
        that are in sync with the music because of live audio analysis.
      </li>
      <li>
        The visuals are then reduced in modV to only get a few colors out of
        them. Those colors are send over WebSocket to luminave, where luminave
        can use that information to control lights.
      </li>

      <li>
        luminave knows which lights exist and you can map the different colors
        that modV is providing to different lights. So whenever modV is giving
        us data, the lights are also updated.
      </li>
      <li>
        The lights get their data from the WebUSB DMX512 controller (which you
        can build yourself using an article that I wrote) which is working
        directly in the browser by leveraging WebUSB. It can transform the
        colors into DMX512 so that the lights understand it.
      </li>
      <li>
        Another consumer of the modV colors are these cyberpunk goggles. They
        contain a LED ring from Adafruit called NeoPixel and are updated over
        WiFi, also with a WebSocket connetion.
      </li>
      <li>
        In order to not use the UI of the software, there is also a MIDI
        controller in use that can control both luminave and modV at the same
        time using WebMIDI.
      </li>
    </ul>
  </Notes>
)

/*
        background={`url("media/dmx512_universe.jpg")`}
        background="#fff"
        mixin="--slide-color: black" 
        animationOut={flip.y} 
        animationIn={flip.y}
*/
export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <LargeImage
        src="media/tims_stack_vj_lj_2019.svg"
        alt="Tims Stack VJ LJ 2019"></LargeImage>

      {/*
      <ImportantLink href=""></ImportantLink>
      */}

      {/*
      <Title>
        <TextMarker>this.stage</TextMarker>
      </Title>
      */}

      {/* 
        <Subtitle></Subtitle> 
      */}

      {/*
      <StyledList>
        <Fragment order={2}>
          <li></li>
        </Fragment>
        <Fragment order={3}>
          <li></li>
        </Fragment>
        <Fragment order={4}>
          <li></li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border"></li>
        </Fragment>
      </StyledList> 
      */}

      {/* 
      <StyledListLarge>
        <Fragment order={0}>
          <li class="no-border">
            Title
            <StyledList>
              <Fragment order={2}>
                <li class="light-border space-top"></li>
              </Fragment>
              <Fragment order={3}>
                <li class="light-border">
                </li>
              </Fragment>
              <Fragment order={4}>
                <li class="light-border"></li>
              </Fragment>
              <Fragment order={5}>
                <li class="light-border">
                </li>
              </Fragment>
              <Fragment order={6}>
                <li class="no-border"></li>
              </Fragment>
            </StyledList>
          </li>
        </Fragment>
      </StyledListLarge>
       */}

      {/* 
      <LargeImage 
          src="media/"
          alt=""
      />
      */}

      {/* 
        <FitImage src="media/" alt="" /> 
      */}

      {/* 
      <Sequence order={1} steps={2} time={-1}>
        {(index, time, timeline) => {
          return <SuperVideo 
                //src="media/IMG_0659.m4v#t=93,170"
                // src="media/JSConfEU_18_Replay_Opener.mp4#t=623"
                src="media/JSConfEU_LiveJS_Performance_2018.mp4#t=2"
                isPlaying={index===0}
          />
        }}
      </Sequence>
      */}

      {/*
       <YouTube videoId="GiTkwz9AKhM" start={93}>
        {props => {
          return (
            <React.Fragment>
              <Sequence order={1} steps={2}>
                {(index, time, timeline) => {
                  return <Live><Video {...props} isPlaying={index===0} /></Live>
                }}
              </Sequence>
            </React.Fragment>
          )
        }}
      </YouTube>
      */}

      {/*
      <DmxChannels channels="6" width="90%" height="10em">
        <Channel background="" label="Red" value="0" className="inactive">
        </Channel>

        <Channel background="" label="Green" value="255" className="active">
        </Channel>

        <Channel background="" label="Blue" value="0" className="inactive">
        </Channel>

        <Channel background="" label="UV" value="0" className="inactive">
        </Channel>

        <Channel background="" label="Dimmer" value="255" className="active">
        </Channel>

        <Channel background="" label="Strobe" value="0" className="inactive">
        </Channel>
      </DmxChannels>
    */}

      {/* <StyledFooter>
        <ImportantLink href="https://www.youtube.com/watch?v=RsqeSfyhzdw">
          youtube.com/watch?v=RsqeSfyhzdw
        </ImportantLink>
      </StyledFooter> */}

      {/* <Code2 ranges={ranges} options={codeOptions}>
            {code}
          </Code2> */}
    </A>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
