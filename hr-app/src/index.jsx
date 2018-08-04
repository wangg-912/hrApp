import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
