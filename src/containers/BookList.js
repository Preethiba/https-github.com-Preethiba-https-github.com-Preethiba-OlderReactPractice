//These components have direct connection with redux
import React, { Component } from 'react';
//To create a connection between the redux and the booklist component
import { connect } from 'react-redux';

class BookList extends Component {
  renderedBooks() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <div className="col-sm-4 list-group">{this.renderedBooks()}</div>;
  }
}

function mapStateToProps(state) {
  //Whatever returned from this will show up as props
  //booklist component
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
