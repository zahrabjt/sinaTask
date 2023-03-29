import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import reduxList from './components/reduxList';
import UserList from './components/UserList';


function App() {
  return (
    <Router>
      <>
        <nav>

          <ul class="nav">
            <li class="nav-item">
              <NavLink  activeClassName="active-menu" className="nav-link" to="/">HomePage</NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active-menu" className="nav-link" to="/products">ProductList</NavLink>
            </li>
            <li class="nav-item">
              <NavLink  activeClassName="active-menu" className="nav-link" to="/categories">CategoryList</NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active-menu" className="nav-link" to="/reduxList">ReduxList</NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active-menu" className="nav-link" to="/userList">UserList</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route  path='/' Component={HomePage} />
            <Route path='/categories' Component={CategoryList} />
            <Route path='/products' Component={ProductList} />
            <Route path='/reduxList' Component={reduxList}/>
            <Route path='/userList' Component={UserList}/>
          </Routes>


        </main>
      </>
    </Router>
  );
}

export default App;
