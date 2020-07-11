import React from 'react';
import './App.css';
import TopMenu from './TopMenu';
import ArticleContainer from './ArticleContainer';

function App() {
  return (
    <div className='App'>
      <div className='ui  header'>
        {' '}
        {/*Our sticky menu  */}
        <TopMenu />
      </div>

      <div
        className='ui center aligned page grid'
        style={{ marginTop: '40px' }}
      >
        {/* Main component, that will render news */}
        <ArticleContainer />
      </div>
    </div>
  );
}

export default App;
