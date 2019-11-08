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
    <div class="who-tim">Tim</div>
    <h3>Matt McKegg</h3>
    <ul>
      <li>
        At LiveJS he does music as DESTROY WITH SCIENCE using his own software
        loop drop. The first version was written in JS, but this one is in rust
        as the Web Audio API is not very accurate for what he is after.
      </li>
      <li>co-founder & CTO of a business that does Finacial Audit Software</li>
      <li>
        Besides using loop drop he is in love with syntesizer and has a lot of
        them. He always travels with a bunch of them in a big suitcase.
      </li>
      <li>
        Contributs to the decentralized platform Scuttlebutt and has created the
        desktop client Patchwork. You should really check it out if you don't
        want to give big corporations your own content for free.
      </li>
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
      <Title>Matt McKegg</Title>
    </A>

    <B>
      <Columns amount="2" gap="3.5em">
        <div>
          <FitImage src="media/matt_mckegg.jpg" alt=""></FitImage>
        </div>
        <div>
          <StyledList>
            <Fragment order={0}>
              <li class="space-bottom">
                <span class="emoji">
                  <LivejsLogo height="7vh" colorText="#000"></LivejsLogo>
                </span>
                Music with{' '}
                <ImportantLink href="https://github.com/mmckegg/rust-loop-drop">
                  loop drop
                </ImportantLink>{' '}
                as DESTROY WITH SCIENCE
              </li>
            </Fragment>
            <Fragment order={0}>
              <li class="space-bottom">
                <span class="emoji">💵</span>
                Co-founder & CTO of a business that does Finacial Audit Software
              </li>
            </Fragment>
            <Fragment order={0}>
              <li class="space-bottom no-border">
                <span class="emoji">❤️</span>
                Synthesizer, Art~Hack Wellington,{' '}
                <ImportantLink href="https://www.scuttlebutt.nz/">
                  Scuttlebutt
                </ImportantLink>{' '}
                &{' '}
                <ImportantLink href="https://github.com/ssbc/patchwork">
                  Patchwork
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
