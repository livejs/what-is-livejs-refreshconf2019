import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText} from '../components'
import {css} from 'styled-components'
import {Grid, Half, HalfVertical} from '../masters'
import {ImportantLink} from '../components/links'
import {topCenter, LargeImage} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'

const {Slide, A} = Main
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3 />
    <p />
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Fragment order={0}>
        <Title>
          ❤️ <RainbowText text="THANK YOU" /> ❤️
        </Title>
      </Fragment>
      <br />
      <br />
      <StyledList className="center">
        <Fragment order={0}>
          <li className="no-border">
            <ImportantLink href="https://twitter.com/LiveJS_network">
              twitter.com/LiveJS_network
            </ImportantLink>
          </li>
        </Fragment>
      </StyledList>
    </A>

    {/* <B>

    </B> */}
  </Slide>
)
