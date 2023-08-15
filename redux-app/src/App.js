
import './App.css';
import { INC,DEC } from './actions';

import {useSelector,useDispatch} from 'react-redux'
function App() {
  const myState = useSelector((state) => state.ChangetheNumber);
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>dispatch(INC())} >INC</button>
      <p>{myState}</p>
      <button onClick={()=>dispatch(DEC())}>DEC</button>
    </>
  );
}

export default App;
