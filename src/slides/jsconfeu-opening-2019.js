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
import {StyledListLarge, StyledList} from '../components/list'

const {Slide, A} = Main
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <div class="who-tim">Tim</div>
    <h3>JSConf EU 2019</h3>
    <ul>
      <li>
        For this years JSConf EU the whole crew was in Berlin to do the full
        opening of the conference
      </li>
      <li>
        We had a lot of fun, but also many many problems. One of them you can
        actually see in the video: The visuals on the big screen that covers the
        whole stage crashed the second before we started. When you listen
        cloesly you can even hear Matt laugh because of this.
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
  <Slide key={uuid()} background="#000" mixin="--slide-color: white">
    {/*
        luminave={['green']}
      */}
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Sequence order={1} steps={2} time={-1}>
        {(index, time, timeline) => {
          return (
            <SuperVideo
              src="media/JSConfEU_2019_LiveJS_Intro.mp4"
              isPlaying={index === 0}
              style={{width: '100%'}}
            />
          )
        }}
      </Sequence>

      <StyledFooter>
        <Subtitle>JSConf EU 2019</Subtitle>
        <ImportantLink href="https://www.youtube.com/watch?v=o1rzsna263c&t=1222">
          youtube.com/watch?v=o1rzsna263c&t=1222
        </ImportantLink>
      </StyledFooter>

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
    </A>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
