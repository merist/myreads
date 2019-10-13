import React, { Component } from 'react'
import BookDetails from './BookDetails'
import { Link } from 'react-router-dom'

class BookList extends Component {

  render() {
    const {books, onUpdateShelf}  = this.props
    const shelvesTitles = [{ key:"currentlyReading", title:"Currently reading" }, 
                            { key:"wantToRead", title:"Want to read" },
                            { key:"read", title:"Read" }
                          ]
    return(
      <div>
        {shelvesTitles.map((shelf, index) =>
        <div key={index}>
          <h2 className="bookshelf-title">{shelf.title}</h2>
          <div className="shelf-title" key={index}>
            <ol className="books-grid">
              {books.filter(book => book.shelf === shelf.key)
              .map(book => (
                <BookDetails
                  onUpdateShelf={onUpdateShelf}
                  book={book}
                  shelf={shelf.title}
                  key={book.id}
                />
              ))}
            </ol>
          </div>
          </div>
        )}
        <div className="open-search"> 
          <Link
            to="/search"
            className="add-button">
            Search
          </Link>
        </div>
      </div>
    )
  }
}

export default BookList
