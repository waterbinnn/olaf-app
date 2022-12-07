import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import News from './pages/News';
import Nav from './components/Nav';

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/editTodo" element={<EditTodo />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </>
  );
};
