import React from 'react';

function ChildComponent(props) {
  return (
    <div>
        <h2> In ChildComponent{props.heading}</h2>
    <p>{JSON.stringify(props.details)}</p>
    {props.data}
    </div>
  );
}

export default ChildComponent;