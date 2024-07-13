import React from 'react';
import ReactDOM from 'react-dom/client';
import NewBook from './pages/NewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './pages/BookList';
import Rental from './pages/Rental';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router =
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/new-book' element={<NewBook />} />
        <Route path='/book-list' element={<BookList />} />
        <Route path='/User' element={<Rental />} />
      </Routes>
    </BrowserRouter>
  </Provider>

root.render(router);
