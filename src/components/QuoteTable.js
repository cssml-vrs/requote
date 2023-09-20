import React, {useState, Fragment, useEffect} from "react";
import "./QuoteTable.css";
import { TablePagination } from '@mui/base/TablePagination';
import {nanoid} from 'nanoid';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import fs from 'fs';
//on componentdidmount, grab what was from storage, if there is, then overwrite whatever was on there
const QuoteTable = () => {
    
  const [quotes, setQuotes] = useState([
    {
      "id":1,
      "quote":"Life isn’t about getting and having, it’s about giving and being.",
      "author":"Kevin Kruse",
      "date": "N/A"},
    {
      "id":2,"quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill", "date": "N/A"},
    {
      "id":3,"quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein", "date": "N/A"}
  ]);
  useEffect(() => {
		const savedQuotes = JSON.parse(
			localStorage.getItem('react-quotes-app-data')
		);

		if (savedQuotes) {
			setQuotes(savedQuotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-quotes-app-data',
			JSON.stringify(quotes)
		);
	}, [quotes]);

  const [addFormData, setAddFormData] =useState({
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

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
    

  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newQuote = {
      id: nanoid(),
      quote: addFormData.quote,
      author: addFormData.author,
      date: addFormData.date
    };


    const newQuotes = [...quotes, newQuote];
    setQuotes(newQuotes);
    
    


    // const entryData = JSON.stringify(newQuote);
    // fs.writeFile("quote-data.json", entryData, (error) => {
    //   if (error) {
    //     console.error(error);
    //     throw error;
    //   }

      // console.log("quote-data.json written correctly");
    // })
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedQuote = {
      id: editQuoteId,
      quote: editFormData.quote,
      author: editFormData.author,
      date: editFormData.date
    }

    const newQuotes = [...quotes];

    const index = quotes.findIndex((quotedata) => quotedata.id === editQuoteId);

    newQuotes[index] = editedQuote;

    setQuotes(newQuotes);
    setEditQuoteId(null);
  };

  const handleEditClick = (event, quotedata) => {
    event.preventDefault();
    setEditQuoteId(quotedata.id);

    const formValues = {
      quote: quotedata.quote,
      author: quotedata.author,
      date: quotedata.date
    }

    setEditFormData(formValues);
  }

  const handleCancelClick = () => {
    setEditQuoteId(null);
  }

  const handleDeleteClick = (quoteId) => {
    const newQuotes= quotes.filter((quotedata) => quotedata.id !== quoteId);
    setQuotes(newQuotes);
    
  }

  return <div className="app-container">
    <form onSubmit={handleEditFormSubmit}>
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
              (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
              ) : (
              <ReadOnlyRow quotedata={quotedata} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
              )}
            </Fragment>
          ))}
          
        </tbody>
    </table>
    </form>

    <h2>Add a Quote</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="quote" required="required" placeholder="Enter a quote..." onChange={handleAddFormChange}/>
      <input type="text" name="author" required="required" placeholder="Enter the author..." onChange={handleAddFormChange}/>
      <input type="date" name="date" required="required" placeholder="Enter the date..." onChange={handleAddFormChange}/>
      <button type="submit">Add</button>
    </form>
  </div>
}

export default QuoteTable;