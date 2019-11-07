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
import {topCenter, LargeImage, LivejsLogo} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'

const {Slide, A} = Main

const notes = (
  <Notes>
    <div class="who-jan">Jan</div>
    <ul>
      <li>
        Do you want to know what LiveJS really is? Well then let's get started!
      </li>
    </ul>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#000" mixin="--slide-color: white">
    <Plugins.Data luminave={['']} />
    {notes}
    <A>
      <Title>
        What is<LivejsLogo></LivejsLogo>?
      </Title>
    </A>
  </Slide>
)
