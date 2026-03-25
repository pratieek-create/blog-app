import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/posts/:id"  element={<PostDetail />} />
          <Route path="/create"     element={<CreatePost />} />
          <Route path="/edit/:id"   element={<EditPost />} />
          <Route path="/login"      element={<Login />} />
          <Route path="/register"   element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;