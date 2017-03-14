import React from 'react'

require('styles//App.scss');

const App = (props) => (
  <div className='app'>
    <div className='app__header'>This is header</div>
    <div className='app__body'>
      {props.children}
    </div>
    <div className='app__footer'>This is footer</div>
  </div>
);

export default App
