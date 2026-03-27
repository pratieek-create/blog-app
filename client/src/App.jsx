import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/login"     element={<Login />} />
          <Route path="/register"  element={<Register />} />

          {/* Protected routes — must be logged in */}
          <Route path="/create" element={
            <PrivateRoute><CreatePost /></PrivateRoute>
          }/>
          <Route path="/edit/:id" element={
            <PrivateRoute><EditPost /></PrivateRoute>
          }/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;