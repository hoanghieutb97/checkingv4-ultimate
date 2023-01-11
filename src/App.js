import React, { useEffect } from 'react';
import Navbar from './Layout/Navbar';
import Body from './Layout/Body';
import { useStore, actions } from './store';
import axios from 'axios';
import * as constants from './constants'
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
  changenameItem({ gllm, sheet })
  // console.log(sheet);
  return (
    <React.Fragment>
      <Navbar />
      <Body />
    </React.Fragment>
  );
}

export default App;
function changenameItem({ gllm, sheet }) {
  console.log(sheet);


  gllm = gllm.map(item => ({
    ...item,
    nameId: item.nameId,
    hight: Number(item.hight),
    width: Number(item.width),
    box: item.box,
    direction: item.direction,
    ProductType: item.ProductType.split(",").filter(param2 => param2 !== "").map(param => param.toLowerCase().trim()),
    variant: item.variant.split(",").filter(param2 => param2 !== "").map(param => param.toLowerCase().trim()),
    button: item.tool
  }))

  sheet = sheet.map(item => ({
    ...item,
    product: item.product.toLowerCase(),
    variant: item.variant.toLowerCase()

  }))

  // console.log(gllm);
  // items = items.filter(item => (item.idClient !== undefined || item.amount !== undefined)); // lọc loại bỏ những item trắng
  // items = items.map(item => { return { ...item, amount: parseInt(item.amount) } }) // chuyển amount từ string sang number
}