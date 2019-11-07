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
import {StyledListLarge, StyledList} from '../components/list'
import {Columns, ColumnCaption} from '../components/grid'

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
      <br />
      <br />

      <Fragment order={0}>
        <Title>
          ❤️ <RainbowText text="THANK YOU" /> ❤️
        </Title>
      </Fragment>

      <br />
      <br />
      {/* <br />
      <br />
      <StyledList className="center">
        <Fragment order={0}>
          <li className="no-border">
            <ImportantLink href="https://twitter.com/LiveJS_network">
              twitter.com/LiveJS_network
            </ImportantLink>
          </li>
        </Fragment>
      </StyledList> */}

      <Columns amount="3">
        <div>
          <ColumnCaption className="small center">
            <ImportantLink href="https://twitter.com/halfbyte">
              twitter.com/halfbyte
            </ImportantLink>
          </ColumnCaption>
          <FitImage src="media/jan_krutisch.jpg" alt=""></FitImage>
        </div>
        <div class="center">
          <ColumnCaption className="small center">
            <ImportantLink href="https://twitter.com/livejs_network">
              twitter.com/LiveJS_network
            </ImportantLink>
          </ColumnCaption>
          <br />
          <br />
          <LivejsLogo colorText="#000" height="50vh"></LivejsLogo>
        </div>
        <div>
          <ColumnCaption className="small center">
            <ImportantLink href="https://twitter.com/TimPietrusky">
              twitter.com/TimPietrusky
            </ImportantLink>
          </ColumnCaption>
          <FitImage src="media/tim_pietrusky.jpg" alt=""></FitImage>
        </div>
      </Columns>
    </A>

    {/* <B>

    </B> */}
  </Slide>
)
