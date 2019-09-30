import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import './App.css'

class BooksApp extends React.Component {
  state = {   
    allBooks: [],
    wantToReadBooks: [],
    readBooks: [],
    currentlyReadingBooks: [],
    selfName: [],
  }

  componentDidMount(){
      this.setState( BooksAPI.getAll);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (     
            <BookList
              books={this.state.books}
              allBooks={this.state.allBooks}
              wantToReadBooks={this.state.wantToReadBooks}
              currentlyReadingBooks={this.state.currentlyReadingBooks}           
              readBooks={this.state.readBooks}
              shelfName={this.state.selfName}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
