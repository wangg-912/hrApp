import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
