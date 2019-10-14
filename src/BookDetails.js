import React, { Component }  from 'react'

class BookDetails extends Component {
  getImageLink = (book) => {  
    if (book.imageLinks != null){
      return book.imageLinks.smallThumbnail
    }
    else{
      return 'icons/noimage.jpg';
    }
  }
  render() {
    const {book, onUpdateShelf}  = this.props
    return(   
      <li key={book.id}>
        <div className="book">
          <div className="book-top">                           
            <div className="book-cover" className="book-cover img-thumbnail" 
                  style={{backgroundImage: "url(" + this.getImageLink(book) + ")"}}>      
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => onUpdateShelf(book, e.target.value)}>
                  <option value="disabled" disabled>Move to...</option>                 
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option> 
                  <option value="none">None</option>             
                </select> 
              </div>     
            </div>
          </div>
          </div>
          
          <span className="book-title">{book.title}</span><br/>
          <span className="book-authors">{book.authors ? book.authors[0] : ""}</span>  
      </li>
    )
  }
}
export default BookDetails
