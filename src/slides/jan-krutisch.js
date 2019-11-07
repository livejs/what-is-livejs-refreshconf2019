import Config from './config'
import Fragment from '@dekk/fragment'
import {default as MaskedImage, FitImage} from '@dekk/image'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import React from 'react'
import uuid from 'uuid/v4'
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
    <h3>Jan Krutisch</h3>
    <ul>
      <li>At LiveJS he does music as halfbyte using his own improjam.</li>
      <li>Co-Founder at depfu</li>
      <li>
        He loves to play around with all kind of controllers and Synthesizers
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
      <Title>Jan Krutisch</Title>
    </A>
    <B>
      <Columns amount="2" gap="3.5em">
        <div>
          <FitImage src="media/jan_krutisch.jpg" alt="" />
        </div>
        <div>
          <StyledList>
            <Fragment order={2}>
              <li class="space-bottom">
                <span class="emoji">
                  <LivejsLogo height="7vh" colorText="#000"></LivejsLogo>
                </span>
                Music with{' '}
                <ImportantLink href="https://github.com/halfbyte/improjam">
                  improjam
                </ImportantLink>{' '}
                &{' '}
                <ImportantLink href="https://github.com/livejs/sl-1201">
                  "teapot"
                </ImportantLink>{' '}
                as half/byte
              </li>
            </Fragment>
            <Fragment order={3}>
              <li class="space-bottom">
                <span class="emoji">💵</span>
                Co-Founder at depfu
              </li>
            </Fragment>
            <Fragment order={4}>
              <li class="space-bottom no-border">
                <span class="emoji">❤️</span>Controllers, Synthesizers
              </li>
            </Fragment>
          </StyledList>
        </div>
      </Columns>
    </B>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
