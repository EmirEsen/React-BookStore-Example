import { IBook } from '../../models/IBook'

function BookCard(props: { book: IBook }) {
    return (
        <>
            <div className="card text-center m-2 shadow" style={{ width: '18rem' }}>
                <center>
                    <img src={`../../utils/${props.book.imageLink}`} className="card-img-top mt-3" style={{ borderRadius: '50%', width: '40%', border: '1px solid' }} />
                </center>
                <div className="card-body">
                    <h4 className="card-title">Title: {props.book.title}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Author: {props.book.author}</li>
                    <li className="list-group-item">Country: {props.book.country}</li>
                    <li className="list-group-item">Pages: {props.book.pages}</li>
                </ul>
            </div>
        </>
    )
}

export default BookCard
