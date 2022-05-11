import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from '../components/Navbar';
import List from '../components/List';
import PostNew from '../src/pages/posts/new';
import PostEdit from '../src/pages/posts/edit';
import PostShow from '../src/pages/posts/show';
import { Route, Routes } from 'react-router-dom';

const App: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div className="route">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:id" element={<PostShow />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
