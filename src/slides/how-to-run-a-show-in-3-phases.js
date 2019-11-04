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
import {Columns, ColumnCaption} from '../components/grid'

// const {Slide, A} = Main
const {Slide, A, B} = HalfVertical

const notes = (
  <Notes>
    <h3>How to run a show in 3 phases</h3>
    <ul>
      <li>This usually happens in 3 phases</li>
      <li>
        <b>1. Initialize</b>: We get into a conversation with the organizer of
        an event and make sure that the base requirements are there and eveyone
        knows what they can expect. We need <b>at least 2 people</b> to run a
        show (music & visuals). The more people there are, the better and longer
        will our show be. Also we can handle more guest artists.
      </li>
      <li>
        <b>2. Prepare</b>: SSOT: All conversation is handled by a livejs
        volunteer for the event, on-sight conversations with the stuff with one
        peson so that everyone else can concentrate on their stuff. All
        information is collected in Notion in one Document.
        <br /> <br />
        Share an airbnb together if that is the only way to get as many people
        on board as possible
        <br /> <br />
        We create custom visuals for the event (e.g. the logo), add the light
        setup (this usually takes a lot of time as every venue is different and
        it's usally a bit of time to get all the information)
      </li>
      <li>
        <b>3. Execute</b>: At least the nights before the event we test the
        audio (DJ mixer & speakears are working), the visual (HDMI to TV or
        projector or LED Wall) & the light (did the patch was succesful) setup
        in the venue. Sometimes we do the intro and parties which are in
        different venues. All of this has to be tested. <br /> <br />
        We help guest artist to use the setup and make their stay as comfortable
        as possible.
        <br />
        During the show we make sure that the acting artists have everything
        they need. <br />
        After the show we talk about the good and the bad things. We also create
        a documentation the days after the show to have a reference in the
        future of what we did.
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
      <Subtitle>How to run a show in 3 phases</Subtitle>
    </A>

    <B>
      <Columns amount="3" className="outer-gap">
        <div>
          <Fragment order={1}>
            <ColumnCaption>1. Initialize</ColumnCaption>
            <StyledList>
              <Fragment order={2}>
                <li>Type of event?</li>
              </Fragment>
              <Fragment order={3}>
                <li>What can we do, what do you need?</li>
              </Fragment>
              <Fragment order={4}>
                <li>How many LiveJS members?</li>
              </Fragment>
              <Fragment order={5}>
                <li>
                  <ImportantLink href="https://www.notion.so/livejs/Technical-Requirements-f69bd653e26d445d8eb37c9396b884ce">
                    Rider
                  </ImportantLink>{' '}
                  (Techical Requirements)
                </li>
              </Fragment>
            </StyledList>
          </Fragment>
        </div>

        <div>
          <Fragment order={7}>
            <ColumnCaption>2. Prepare</ColumnCaption>
            <StyledList>
              <Fragment order={8}>
                <li>Single Source of Truth</li>
              </Fragment>
              <Fragment order={9}>
                <li>Plan Travel & Accomendation</li>
              </Fragment>
              <Fragment order={10}>
                <li>Custom visuals, patch lights, update software</li>
              </Fragment>
            </StyledList>
          </Fragment>
        </div>

        <div>
          <Fragment order={17}>
            <ColumnCaption>3. Execute</ColumnCaption>
            <StyledList>
              <Fragment order={18}>
                <li>Test the audio / visual / light setup at the venue</li>
              </Fragment>
              <Fragment order={19}>
                <li>Handle guest artists</li>
              </Fragment>
              <Fragment order={20}>
                <li>Run the show / talk</li>
              </Fragment>
              <Fragment order={21}>
                <li>Debriefing & documentation</li>
              </Fragment>
            </StyledList>
          </Fragment>
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
