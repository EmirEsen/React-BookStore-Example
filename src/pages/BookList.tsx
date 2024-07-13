import React, { useState } from 'react'
import BookCard from '../components/molecules/BookCard';
import { IBook } from '../models/IBook';
import { useSelector } from 'react-redux';

function BookList() {

    const books: IBook[] = useSelector((state: any) => {
        return state.book.bookList;
    });

    const [search, setSearch] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const filteredData = books.filter((book: IBook) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <div className="row shadow p-3 justify-content-center">
                <div className="col-10">
                    <div className="input-group mb-4">
                        <span className="input-group-text" id="basic-addon1">Search Book</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={search}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row row-cols-1 justify-content-center">
                        {filteredData.map((book: IBook, idx) => (
                            <BookCard key={idx} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookList
