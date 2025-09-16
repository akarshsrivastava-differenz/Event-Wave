import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Content from './Content';
import { Outlet } from "react-router";


const App = () => {
  return (
    <>
      <Header />
        <Content>
            <Outlet/>
        </Content>
      <Footer />
    </>
  )
}

export default App
