import './App.css';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import Content from './Content';
import { Outlet } from "react-router";
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { useEffect } from 'react';

const App = () => {

  // const getCookie = (name) => {
  //     const value = `; ${document.cookie}`;
  //     const parts = value.split(`; ${name}=`);
  //     if (parts.length === 2) return parts.pop().split(';').shift();
  //     return value;
  //   };
  // useEffect(()=>{
  //   // document.cookie = "name=xyz; expires=Thu, 01 Dec 2025 12:00:00 UTC; path=/";
  //   console.log(getCookie("user_cookie"));
  // },[]);


  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <Header />
          <Content>
            <Outlet />
          </Content>
          <Footer />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
