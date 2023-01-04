import React, { useContext } from 'react';
import Navbar from './Layout/Navbar';
import Body from './Layout/Body';
import { useStore, actions } from './store';
function App(props) {
  const [state, dispatch] = useStore();
  const { gllm, silicon } = state
  console.log(state);
  return (
    <React.Fragment>
      <input
        defaultValue={gllm}
        // onChange={e => dispatch(actions.set_todo(e.target.value))}
      />
      {/* <Navbar />
      <Body /> */}
    </React.Fragment>
  );
}

export default App;