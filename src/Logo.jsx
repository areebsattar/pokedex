import React from 'react'

export default function Logo(props) {
  return (
    <>
      <header>
        <h1>Welcome to the {props.appName}</h1>
        <img src="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png" />
      </header>
    </>
  );
}
