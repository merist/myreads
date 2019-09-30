import React, { Component }  from 'react'


class BookList extends Component{
    render() {
        const props = this.props
        return (
          <div >
            <div className="list-books-title">
              <h1>My books</h1>
            </div>
               
          </div>
        )
      }
}
export default {BookList}