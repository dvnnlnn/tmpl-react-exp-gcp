import React from 'react';

export default function NormalButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}
