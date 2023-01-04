import React, { useContext } from 'react';
import Navbar from './Layout/Navbar';
import { StoreContext } from './store';
import Body from './Layout/Body';
import { useStore, actions } from './store';
function App(props) {
  // const state = useContext(StoreContext);
  const [state, dispatch] = useStore();
  const { todo, todoInput } = state
  console.log(state);
  return (
    <React.Fragment>
      <input
        defaultValue={todoInput}
        onChange={e => dispatch(actions.set_todo(e.target.value))}
      />
      {/* <Navbar />
      <Body /> */}
    </React.Fragment>
  );
}

export default App;