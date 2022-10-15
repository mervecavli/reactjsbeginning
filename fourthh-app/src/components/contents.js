import React,{useContext} from 'react'
import {TemaVerisi} from '../App'

export default function Contents() {
  return (
    <div style={useContext(TemaVerisi)}>
      <p></p>
      <h1> I'm learning React</h1>
      <h1> data transport between components using useContext</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>

    </div>
  )
}
