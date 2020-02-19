import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './Counter/Counter'; 
import ListAll from './ListAll/ListAll';
import Store from './Store/Store';
import {BrowserRouter,Route} from 'react-router-dom';
const App =()=>{
    return (<div>
        <BrowserRouter>
       <Route exact path="/" component={Counter}/>
       <Route path="/show" component={ListAll}/>
       </BrowserRouter>
        </div>)
}

ReactDom.render(
<Provider store = {Store}>
<App/>
</Provider>, document.querySelector('#root'));