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
  SmallImage,
  LivejsLogo
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
    <div class="who-jan">Jan</div>
    <ul>
      <li>New Projections for 2050 by ClimateCentral</li>
      <li>
        I'll tweet out <a href="https://coastal.climatecentral.org">the link</a>{' '}
        to the interactive map
      </li>
      <li>
        (Normal high tide, moderate emission cuts, medium luck, mid range
        projections)
      </li>
      <li>What does this have to do with live:js?</li>
      <li>Well...</li>
    </ul>
  </Notes>
)

// const code = `npm start`

// const ranges = []

// const codeOptions = {
//   lineNumbers: false,
//   mode: 'bash',
//   theme: 'dracula'
// }

/*

        background="#fff"
        mixin="--slide-color: black"
        animationOut={flip.y}
        animationIn={flip.y}
*/
export default (
  <Slide
    key={uuid()}
    background={`url("media/sea-level-rise-by-2050.png") center`}>
    {/*
        luminave={['green']}
      */}
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Fragment order={1}>
        <Title>
          CO<sub>2</sub> wasted by{' '}
          <LivejsLogo height="40vh" colorText="#000"></LivejsLogo> since 2016
        </Title>
      </Fragment>
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
