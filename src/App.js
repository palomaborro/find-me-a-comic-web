import { Route, Switch } from 'react-router';
import './App.css';
import ComicDetail from './components/comicDetail/ComicDetail';
import ComicList from './components/comicList/ComicList';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/new'>
          <ComicList />
        </Route>
        <Route exact path='/new/:id'>
          <ComicDetail />
        </Route>
      </Switch>
    </div>
  );
}