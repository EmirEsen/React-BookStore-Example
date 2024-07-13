// ## Ödev-7

import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../models/IBook";
import { useState } from "react";
import { addBook } from "../store/features/bookSlice";
import BookList from "./BookList";
import { useNavigate } from "react-router-dom";


//     1- Kitap Takip Uygulaması yazılacak,
//     Sayfalar;
//     - Kitap Ekle
//     - Kitapların Listesi -> kitap resmi, adı, yazarı ve fiyati
//     - Kiralama -> tablo, hangi kitabı(resim,ad,yazar,fiyat) kim(kiralayan adı) ne zaman kiralamış?
//     redux-toolkit, react-touter, boostrap
//     ---------------
//     kitapSlice -> kitap listesi bilgisi tutunuz.

function NewBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [country, setCountry] = useState('');
    const [pages, setPages] = useState('');
    const [image, setImage] = useState('');

    const dispatch = useDispatch()

    const addNewBook = () => {
        let newBook = { title, author, country, pages, image };
        console.log(newBook);

        dispatch(addBook(newBook));
    };

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row my-4 shadow p-3">
                <div className="col-9">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='title' onChange={(evt) => setTitle(evt.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='Author' onChange={(evt) => setAuthor(evt.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='country' onChange={(evt) => setCountry(evt.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" placeholder='page number' onChange={(evt) => setPages(evt.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='imageURL' onChange={(evt) => setImage(evt.target.value)} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="row">
                        <button onClick={addNewBook} type="button" className="btn btn-primary">Add Book</button>
                    </div>
                    <div className="row mt-3">
                        <button onClick={() => navigate('/book-list')} type="button" className="btn btn-primary">Go to Book-List</button>
                    </div>
                </div>
                <div className="row mt3">
                    <BookList />
                </div>
            </div>
        </div >
    )
}

export default NewBook
