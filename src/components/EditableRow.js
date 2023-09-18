import React from 'react'

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="Enter a quote..." name="quote"></input>    
      </td>
      <td>
        <input type="text" required="required" placeholder="Enter an author..." name="author"></input>
      </td>
      <td>
       <input type="date" required="required" placeholder="Enter a date..." name="date"></input>
      </td>
    </tr>
  )
}

export default EditableRow