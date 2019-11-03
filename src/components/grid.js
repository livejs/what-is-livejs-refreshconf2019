import React from 'react'
import styled, {css} from 'styled-components'

export const Columns = styled.div`
  --amount: ${({amount}) => amount};
  --gap: ${({gap}) => gap};

  width: var(--width, 100%);
  height: var(--height, 100%);
  display: grid;
  grid-template-columns: repeat(var(--amount), 1fr);
  column-gap: var(--gap, 1em);
  justify-items: center;

  > div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &.outer-gap {
    padding: 0 var(--gap, 1em);
    box-sizing: border-box;
  }
`

export const ColumnCaption = styled.div`
  position: absolute;
  top: -4rem;
  left: 0;
  font-size: 2em;

  &.right {
    right: 0;
    left: initial;
  }
`
