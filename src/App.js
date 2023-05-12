import React, { useContext, useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Store/ath-context';
// import AuthContext from './Store/ath-context';

function App() {
  const ctx = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect( () => {
  //        const userLoggedInfo = localStorage.getItem('isLoggedIn');
  //        if(userLoggedInfo === '1'){
  //         setIsLoggedIn(true);
  //        }
  // },[]);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn','1')
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false);
  // };

  return (
   
    // <AuthContext.Provider value={{
    //   isLoggedIn: isLoggedIn,
    //   onLogout: logoutHandler,
    // }}>
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home />}
      </main>
     
   </React.Fragment>
  );
}

export default App;
