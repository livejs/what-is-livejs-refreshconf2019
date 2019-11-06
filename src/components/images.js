import React from 'react'
import styled, {css} from 'styled-components'
import {default as MaskedImage, FitImage} from '@dekk/image'
import ReactSVG from 'react-svg'

export const smallSquare = css`
  --width: 300px;
  --height: 300px;
`

export const topRight = css`
  --background-position: top right;
`

export const topLeft = css`
  --background-position: top left;
`

export const topCenter = css`
  --background-position: top center;
`

export const zoomOut80 = css`
  --background-size: 80%;
`

export const noRepeat = css`
  background-repeat: no-repeat;
`

export const zoom2 = css`
  --background-size: 200% auto;
`
export const SquareImage = styled(MaskedImage)`
  ${smallSquare};
`

export const ZoomImage = styled(MaskedImage)`
  ${zoom2};
  ${topRight};
`

export const LargeImage = styled.img`
  height: 100vh;
`

export const SmallImage = styled.img`
  height: 40vh;
`

export const VerySmallImage = styled.img`
  height: 15vh;
`

export const MediumImage = styled.img`
  height: 50vh;
`

export const StyledLivejsLogo = styled.span`
  --height: ${({height}) => height};

  vertical-align: middle;

  svg {
    height: var(--height, 60vh);
    width: auto;

    --color-gradient-start: ${({colorGradientStart}) => colorGradientStart};
    --color-gradient-stop: ${({colorGradientStop}) => colorGradientStop};
    --color-text: ${({colorText}) => colorText};
  }
`

export const SmallImageRound = styled(SmallImage)`
  border-radius: 50%;
  border: 0.5em solid var(--theme-primary);
`

export const FitImageBorderLeft = styled(FitImage)`
  border-left: 10px solid #fff;
`

export const ZoomOut80 = styled(MaskedImage)`
  ${topLeft}
  ${zoomOut80}
  ${noRepeat}
`

export const LivejsLogo = props => {
  const {value, label} = props

  return (
    <StyledLivejsLogo {...props}>
      <ReactSVG
        src="media/live-js-logo.svg"
        renumerateIRIElements={false}
        wrapper="span"
      />
    </StyledLivejsLogo>
  )
}
