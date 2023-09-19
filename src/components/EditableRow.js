import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="Enter a quote..." name="quote" value={editFormData.quote} onChange={handleEditFormChange}></input>    
      </td>
      <td>
        <input type="text" required="required" placeholder="Enter an author..." name="author" value={editFormData.author} onChange={handleEditFormChange}></input>
      </td>
      <td>
       <input type="date" required="required" placeholder="Enter a date..." name="date" value={editFormData.date}onChange={handleEditFormChange}></input>
      </td>
      <td>
        <button type="submit"> Save</button>
        <button type="button" onClick={handleCancelClick}> Cancel</button>
      </td>
    </tr>
  )
}

export default EditableRow