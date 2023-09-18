import React, {useState, Fragment} from "react";
import "./QuoteTable.css";
import data from "./quote-data.json";
import { TablePagination } from '@mui/base/TablePagination';
import {nanoid} from 'nanoid';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const QuoteTable = () => {

  const [quotes, setQuotes] = useState(data);
  const [addQuoteData, setAddQuoteData] =useState({
    quote:'',
    author:'',
    date:''
  })

  const [editFormData, setEditFormData] = useState({
    quote:'',
    author:'',
    date:''
  })

  const [editQuoteId, setEditQuoteId] = useState(null);

  const handleAddQuoteChange = (event) => {
    event.preventDefault();

    const fieldQuote = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newQuoteData = { ...addQuoteData};
    newQuoteData[fieldQuote] = fieldValue;

    setAddQuoteData(newQuoteData);

  }

  const handleAddQuoteSubmit = (event) => {
    event.preventDefault();

    const newQuote = {
      id: nanoid(),
      quote: addQuoteData.quote,
      author: addQuoteData.author,
      date: addQuoteData.date
    };

    const newQuotes = [...quotes, newQuote];
    setQuotes(newQuotes);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditQuoteId(contact.id);
  }

  return <div className="app-container">
    <form>
    <table>
      <thead>
        <tr>
          <th>Quote</th>
          <th>Author</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
        <tbody>
          {quotes.map((quotedata) => (
            <Fragment>
              {editQuoteId === quotedata.id ? 
              (<EditableRow/>
              ) : (
              <ReadOnlyRow quotedata={quotedata} handleEditClick={handleEditClick}/>
              )}
            </Fragment>
          ))}
          
        </tbody>
    </table>
    </form>

    <h2>Add a Quote</h2>
    <form onSubmit={handleAddQuoteSubmit}>
      <input type="text" name="quote" required="required" placeholder="Enter a quote..." onChange={handleAddQuoteChange}/>
      <input type="text" name="author" required="required" placeholder="Enter the author..." onChange={handleAddQuoteChange}/>
      <input type="date" name="date" required="required" placeholder="Enter the date..." onChange={handleAddQuoteChange}/>
      <button type="submit">Add</button>
    </form>
  </div>
}

export default QuoteTable;