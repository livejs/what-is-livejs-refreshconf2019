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
import {topCenter, LargeImage, LiveJSLogo} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3 />
    <p />
  </Notes>
)

import ReactSVG from 'react-svg'

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}
    <A>
      <Title>&nbsp;&nbsp;What is</Title>
    </A>

    <B>
      <LiveJSLogo>
        <ReactSVG src="media/live-js-logo.svg" />
      </LiveJSLogo>
    </B>
  </Slide>
)
