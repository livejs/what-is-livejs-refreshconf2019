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
import {Grid, Half, HalfVertical, HalfLeftSmallRightBig} from '../masters'
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

// const {Slide, A} = Main
const {Slide, A, B} = HalfLeftSmallRightBig

const notes = (
  <Notes>
    <div class="who-tim">Tim</div>
    <h3>We as LiveJS?</h3>
    <ul>
      <li>
        Workshops to empower local communities to do shows themselves and
        without us. We share everything we know and learned over the years to
        create a new generation of artists that don't know yet what is inside
        them.
      </li>
      <li>
        We give talks to give context and spread creativity to everyone.
        Hopefully they will then go to a workshop by us or build something
        completly else, but with the courage that you can use technology for
        anything you want.
      </li>
      <li>
        We help conferences & events to organize a Call for Artists to get new
        talent into spaces they never were before.
      </li>
      <li>
        We run LiveJS Community on Slack, if you want to talk with others that
        are interested in hardware, music, visuals, light or any technology, you
        are happy to join us.
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
    {/*
        luminave={['green']}
      */}
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>
        We as
        <LivejsLogo height="50vh" colorText="#000"></LivejsLogo>
      </Title>
    </A>

    <B>
      <StyledOrderedListLarge>
        <Fragment order={2}>
          <li>Workshops to empower local communities to do shows themselves</li>
        </Fragment>
        <Fragment order={3}>
          <li>Talks to give context and spread creativity</li>
        </Fragment>
        <Fragment order={4}>
          <li>Call for Artists</li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border">
            <ImportantLink href="https://join.slack.com/t/live-js/shared_invite/enQtNjI3ODEwMzg2MzU5LTA2NDgxZWVlMDk1OTc2ZTgxOWU5ZGVlZTQ0Y2Y1NDZjZjZkMGE3ZmY3NTU0MWI5ZTg5ZDgyMWM5ZDZlY2IxNzA">
              LiveJS Community on Slack
            </ImportantLink>
          </li>
        </Fragment>
      </StyledOrderedListLarge>
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
