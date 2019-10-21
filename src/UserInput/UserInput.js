import React from 'react';

const userInput = (props) => {
    const inlineStyle = {
        backgroundColor: 'white',
        font:'inherit',
        border: '5x solid blue',
        padding: '8px'

    };

    return (
      <div style={inlineStyle}>
          <input  type='text' onChange={props.handler} value={props.initialValue}/>
      </div>
    );
};

export default userInput;