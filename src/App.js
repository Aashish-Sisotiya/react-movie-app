import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import MovieDetails from './Components/MovieDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Banner />
            <Movies />
          </>
        } />

        <Route path='/favourites' element={<Favourite />} />
        <Route path='/moviedetails' element={<MovieDetails />} />
 
      </Routes>


      {/* <Banner /> */}
      {/* <Movies /> */}
      {/* <Favourite /> */}
    </Router>

  );
}

export default App;

// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTdTeVFOcGJaTmx5VEpWNXpUOGt0My04NlotQXxBQ3Jtc0tuMjZtOFhBRDhGdU5GbVQta0dtVVBTVm12cGxZaVI2TmZyZzVqQXY1MjFybDByWlZ6dVRrMzBGeElpUnZtYkZORzBYZ09VeDNncndSWDdVbVBuNXJQTUJBaFZhLXVsbU9CalFMM0NPVDBVUUZnVmdlMA&q=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fbootstrap%405.1.1%2Fdist%2Fcss%2Fbootstrap.min.css&v=hcPQPtJ7_LM

// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGVBWm9QWWRvZXhoTkQ1bE5Vek84RHhVLUFEZ3xBQ3Jtc0tsOWltMHo4U2RwNW9fVjd3eXNOUllKaEF4QkhBYzNGSDVHQ2dlbVhxakRPUXVySjhsZ2JJQWs3bEF6NGpFVGJ4QW9nUklyZlpKbmJkM2xoel93RzJQU3lNckFzWEZlRjBQQjZadWZ5UVk0aW5iNmtHQQ&q=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%24&v=hcPQPtJ7_LM


// 67f62b2bb6b291d7a43a0c2a694a5ea4
