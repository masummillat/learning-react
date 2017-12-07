import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Main from './Component/Main';
import data from './data/recipe.json'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main  recipes={data}/>, document.getElementById('root'));
registerServiceWorker();
