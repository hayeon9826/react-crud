import React from "react";
import GlobalStyle from "./styles/global"
import Navbar from '../components/Navbar'
import List from '../components/List'

const App: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <List/>
    </>
  );
};

export default App;