import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from '../src/components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import ShareRecipes from './pages/share-recipes';
import BrowseRecipes from './pages/browse-recipes';
import Ingredients from './pages/ingredients';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/share-recipes" element={<ShareRecipes />} />
          <Route path="/browse-recipes" element={<BrowseRecipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;
