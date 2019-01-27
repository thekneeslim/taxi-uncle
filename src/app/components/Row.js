import React from 'react';
import Column from './Column';

export default (props) => {
  return (
    <React.Fragment>
      <tr>
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
