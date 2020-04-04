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
  UCShareData,
  URBasic,
  URBasic2,
  URComplex,
  URNetwork,
  URWithContext,
} from './hooks-apis'
import Main from './Main'
import SubMain from './SubMain'
import {
  BrowserRouter as Router,
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
        <Route exact path='/useReducer' component={SubMain} />
        <Route exact path='/useReducer/basic' component={URBasic} />
        <Route exact path='/useReducer/basic2' component={URBasic2} />
        <Route exact path='/useReducer/complex' component={URComplex} />
        <Route exact path='/useReducer/complex2' component={URNetwork} />
        <Route exact path='/useReducer/withContext' component={URWithContext} />
    </Router>
  );
}

export default App;
