import React from 'react';

const inputStyle = {
  width: '100%',
}

const Column = (props) =>  {
   const { value, index, callback } = props;
  return (
    <td key={index}>
      <input style={inputStyle}
        value={value}
        onChange={(e) => {
          return callback(e, index)}
        }
        maxLength='1'
        type='number' />
    </td>
  )
}

export default Column;
