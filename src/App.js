import React,{useCallback} from 'react';
import './App.css';
import {
  USNormal,
  USBasedOnPrevious,
  USObject,
  USArray,
  UEDocument,
  UETimer,
  UEListener,
  UCShareData
} from './hooks-apis'
import Main from './Main'
import SubMain from './SubMain'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path='/' component={Main}/>
        <Route exact path='/useState' component={SubMain}/>
        <Route exact path='/useState/previousState' component={USBasedOnPrevious} />
        <Route exact path='/useState/normal' component={USNormal} />
        <Route exact path='/useState/object' component={USObject} />
        <Route exact path='/useState/array' component={USArray} />
        <Route exact path='/useEffect' component={SubMain} />
        <Route exact path='/useEffect/document' component={UEDocument} />
        <Route exact path='/useEffect/timer' component={UETimer} />
        <Route exact path='/useEffect/listener' component={UEListener} />
        <Route exact path='/useContext' component={SubMain} />
        <Route exact path='/useContext/shareData' component={UCShareData} />
        <Route exact path='/useContext/normal' component={USNormal} />
    </Router>
  );
}

export default App;
