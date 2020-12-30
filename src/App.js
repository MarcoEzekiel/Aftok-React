import React ,{ useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Login from './components/Login';

import Projects from './components/Projects';
import Tracker from './components/Tracker';
import Revenue from './components/Revenue';
import Auctions from './components/Auctions';
import './css/App.css';

const App = () =>{
  var cookie = Document.cookie
  console.log(cookie)
  const [loggedIn, setLoggedinState] = useState({
    loggedIn:false
  })
  const handleLoggedinState = (bool) =>{
    var loggedinState={
      loggedIn:true
    }
    setLoggedinState(loggedinState)
  }


  const [pageFocus, setPagefocus] = useState({
        login:true,
        projects:false,
        tracker:false,
        revenue:false,
        auctions:false
    })


  const handlePageFocus = (selected) =>{
    var focusState
    switch(selected){
      case 'login':
        focusState={
          login:true,
          projects:false,
          tracker:false,
          revenue:false,
          auctions:false
        }
        break;
      case 'projects':
        focusState={
          login:false,
          projects:true,
          tracker:false,
          revenue:false,
          auctions:false
        }
        break;
      case 'tracker':
        focusState={
          login:false,
          projects:false,
          tracker:true,
          revenue:false,
          auctions:false
        }
        break;
      case 'revenue':
        focusState={
          login:false,
          projects:false,
          tracker:false,
          revenue:true,
          auctions:false
        }
        break;
      case 'auctions':
        focusState={
          login:false,
          projects:false,
          tracker:false,
          revenue:false,
          auctions:true
        }
        break;
      default:
        console.log('oopsie doopsie!');
      
    }

    setPagefocus(focusState)

  }

  const getPage = () =>{  
    if (pageFocus.login){
      return <Login state={pageFocus} onClickHandler={handlePageFocus} loggedIn={loggedIn} loggedInHandler={handleLoggedinState}/>;
    }else if (pageFocus.projects){
      return <Projects />;
    }else if (pageFocus.revenue){
      return <Revenue />;
    }else if (pageFocus.tracker){
      return <Tracker />;
    }else if (pageFocus.auctions){
      return <Auctions />;
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Tabs state={pageFocus} onClickHandler={handlePageFocus} loggedIn={loggedIn}/>
        {getPage()}
      </div>
      <Footer /> 
    </div>
  );
}


export default App;
