import { Route, Switch } from 'react-router';
import './App.css';
import ComicDetail from './components/comicDetail/ComicDetail';
import NewComicsList from './components/newComicsList/NewComicsList';
import ComicList from './components/comicList/ComicList';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/signUp/SignUp';
import PrivateRoute from './components/privateRoute/PrivateRoute';


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
        <Route path='/comics'>
          <ComicList />
        </Route>
        <PrivateRoute exact path='/new'>
          <NewComicsList />
        </PrivateRoute>
        <PrivateRoute exact path='/new/:id'>
          <ComicDetail />
        </PrivateRoute>
      </Switch>
    </div>
  );
}