import React, { useEffect } from 'react';
import Navbar from './Layout/Navbar';
import Body from './Layout/Body';
import { useStore, actions } from './store';
import axios from 'axios';
import * as constants from './constants';
import AddActiveLocalFile from './Components/AddActiveLocalFile';

function App(props) {
  const [state, dispatch] = useStore();
  const { gllm, sheet } = state

  useEffect(() => { // fetch GLLM
    async function fetchData() {
      const gllmAPI = await axios(constants.GLLM);
      dispatch(actions.dispatchGLLM(gllmAPI.data))
    }
    fetchData();
  }, []);

  // console.log(gllm);
  return (
    <React.Fragment>
      <Navbar />
      {localStorage.ActiveFileDesign !== "" ? <Body /> : <AddActiveLocalFile />}

    </React.Fragment>
  );
}

export default App;

