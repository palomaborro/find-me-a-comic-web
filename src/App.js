import { Route, Switch } from 'react-router';
import './App.css';
import ComicDetail from './components/comicDetail/ComicDetail';
import ComicList from './components/comicList/ComicList';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/comics'>
          <ComicList />
        </Route>
        <Route exact path='/comics/:comicId'>
          <ComicDetail />
        </Route>
      </Switch>
    </div>
  );
}