import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

const Book = (props) => {
    return (
        <li key={props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageUrl}")` }}></div>
                    <BookShelfChanger bookID={props.book.bookID} shelfValue={props.book.state} bookShelves={props.bookShelves} />
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.author}</div>
            </div>
        </li>
    );

};

Book.propTypes = {
    book: PropTypes.object,
    bookShelves: PropTypes.array
};

export default Book;