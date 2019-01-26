import React from 'react';
import Column from './Column';

const tdStyle = {
  width: '50%',
  paddingBottom: '50%'
}

export default (props) => {
  return (
    <React.Fragment>
      <tr style={tdStyle}>
        {
          props.field.map((column, columnIndex) => {
            return <Column value={column[columnIndex]}
              index={columnIndex}
              callback={props.handleChange}
              key={columnIndex} />
          })
        }
      </tr>
    </React.Fragment>
  )
}
