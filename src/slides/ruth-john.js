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
import {
  Grid,
  Half,
  HalfVertical,
  HalfVerticalTopSmallBottomBig
} from '../masters'
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
import {Columns, ColumnCaption} from '../components/grid'

// const {Slide, A} = Main
const {Slide, A, B} = HalfVerticalTopSmallBottomBig

const notes = (
  <Notes>
    <div class="who-jan">Jan</div>
    <h3>Ruth John</h3>
    <ul>
      <li>At LiveJS she does visuals as rumyra using her own software Vizra</li>
      <li>
        She is a creative developer (freelance), teacher, speaker and writes
        documentation and demos for MDN for topics such as the Web Audio API
      </li>
      <li>Runs the Generative Art Podcast together with Tim Holman</li>
    </ul>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {/*
        luminave={['green']}
      */}
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>Ruth John</Title>
    </A>

    <B>
      <Columns amount="2">
        <div>
          <FitImage src="media/ruth_john.jpg" alt=""></FitImage>
        </div>
        <div>
          <StyledList>
            <Fragment order={2}>
              <li class="space-bottom">
                <span class="emoji">
                  <LivejsLogo height="7vh" colorText="#000"></LivejsLogo>
                </span>
                Visuals as rumyra with{' '}
                <ImportantLink href="https://github.com/livejs/VizraVid">
                  Vizra
                </ImportantLink>
              </li>
            </Fragment>
            <Fragment order={3}>
              <li class="space-bottom">
                <span class="emoji">💵</span>
                Creative Developer, Teacher, Speaker, Writer for{'  '}
                <ImportantLink href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">
                  MDN
                </ImportantLink>
              </li>
            </Fragment>
            <Fragment order={4}>
              <li class="space-bottom no-border">
                <span class="emoji">❤️</span>
                <ImportantLink href="https://twitter.com/GenArtPodcast">
                  Generative Art Podcast
                </ImportantLink>
              </li>
            </Fragment>
          </StyledList>
        </div>
      </Columns>
    </B>

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
  </Slide>
)
