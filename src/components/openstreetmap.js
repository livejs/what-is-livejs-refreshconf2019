// @flow

import React, {Component, Fragment} from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import L from 'leaflet'
import {leaflet} from './../styles/leaflet'

const iconPerson = new L.Icon({
  iconUrl: 'media/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
})

const MyPopupMarker = ({content, position}) => (
  <Marker position={position} icon={iconPerson}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({markers}) => {
  const items = markers.map(({key, ...props}) => (
    <MyPopupMarker key={key} {...props} />
  ))

  return <Fragment>{items}</Fragment>
}

export default class CustomComponent extends Component {
  state = {
    markers: [
      {
        key: 'Edingburgh',
        position: [55.953251, -3.188267],
        content: 'ScotlandJS'
      },
      {
        key: 'Berlin',
        position: [52.520008, 13.404954],
        content: 'ViewSource, JSConf EU'
      },
      {
        key: 'Singapore',
        position: [1.29027, 103.851959],
        content: 'JSConf Asia'
      },
      {
        key: 'Paris',
        position: [48.864716, 2.349014],
        content: 'dotJS'
      },
      {
        key: 'Copenhangen',
        position: [55.676098, 12.568337],
        content: 'Coldfront'
      },
      {
        key: 'Budapest',
        position: [47.497913, 19.040236],
        content: 'CSSConf BP, JSConf BP'
      },
      {
        key: 'Dublin',
        position: [53.35014, -6.266155],
        content: '404 Conf'
      },
      {
        key: 'Bochum',
        position: [51.481846, 7.216236],
        content: 'RuhrJS'
      },
      {
        key: 'Milan',
        position: [45.464664, 9.18854],
        content: 'Codemotion'
      },
      {
        key: 'Groningen',
        position: [53.2194, 6.5665],
        content: 'Refresh Conf'
      },
      {
        key: 'Medellin',
        position: [6.244203, -75.581215],
        content: 'JSConf Colombia'
      },
      {
        key: 'Bangkok',
        position: [13.756331, 100.501762],
        content: 'JavaScript Bangkok'
      },
      {
        key: 'Hamburg',
        position: [53.551086, 9.993682],
        content: 'Wirefly'
      }
    ]
  }

  render() {
    return (
      <LeafletMap center={[23.618103, 9.22213]} zoom={3}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markers} />
      </LeafletMap>
    )
  }
}

export class OpenStreetMap extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    ReactDOM.render(<CustomComponent />, document.getElementById('mysupermap'))
  }

  render() {
    return (
      <Fragment>
        <StyledMap id="mysupermap"></StyledMap>
      </Fragment>
    )
  }
}

const StyledMap = styled.div`
  height: 100%;
  width: 100%;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  ${leaflet}
`
