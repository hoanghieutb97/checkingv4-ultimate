import React from 'react';
import { useStore, actions } from '../store';
import copy from 'copy-to-clipboard';

function CopyOrderId(props) {
    const [state, dispatch] = useStore();
    const { gllm, sheet } = state;
 
    let copyOrderId = () => {
        let arr = sheet.map(item => (" " + item.orderId + "\n")).join("");
        copy(arr);

    }
    return (

        <button className="btc-orderid" onClick={copyOrderId}>Copy Order</button>

    );
}

export default CopyOrderId;