import React from 'react';

const ReadOnlyRow = ({quotedata, handleEditClick}) => {
  return (
          <tr>
            <td>{quotedata.quote}</td>
            <td>{quotedata.author}</td>
            <td>{quotedata.date}</td>
            <td>
              <button type="button" onClick={(event) => handleEditClick(event, quotedata)}>Edit</button>
            </td>
          </tr>
  )
}

export default ReadOnlyRow