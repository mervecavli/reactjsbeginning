import React from 'react'
import Header from './Header'

export default function Container(props) {
    return (
        <div style={{width: '400px', height: '400px', border: '2px solid black', margin: '0px auto'}}>
        <Header baslik={props.title}>   (Helloo im coming from a child component!) </Header>
          <p> {props.title} </p>
          <p> {props.number} </p>
        </div>
    )
}


