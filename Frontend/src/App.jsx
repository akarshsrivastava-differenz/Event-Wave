import './App.css';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import Content from './Content';
import { Outlet } from "react-router";
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  
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
