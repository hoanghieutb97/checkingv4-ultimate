import React from 'react';
import { useStore, actions } from '../store';
import AcrylicPlaque from './HuongDan/AcrylicPlaque';
import Badwoodbase from './HuongDan/Badwoodbase';
import BadWoodBaseTeemazing from './HuongDan/BadWoodBaseTeemazing';
import Bamboowireless from './HuongDan/Bamboowireless';

function HuongDan(props) {
    const [state, dispatch] = useStore();
    const activeProduct = state.activeProduct.product
    console.log(activeProduct);
    let noidung = "";
    switch (activeProduct) {
        case "3d wood base":
            noidung = <Badwoodbase />
            break;
        case "3d woodBase Teemazing":
            noidung = <BadWoodBaseTeemazing />
            break;
        case "Acrylic Plaque":
            noidung = <AcrylicPlaque />
            break;
        case "bamboowireless":
            noidung = <Bamboowireless />
            break;

        default:
            noidung = ""
            break;
    }
    return (
        <div className='p-2'>
            <p className="loai-tool">{activeProduct}</p>
            {noidung}
        </div>
    );
}

export default HuongDan;