import React, { useState } from 'react';
import { useStore, actions } from '../store';
import { FileTextTwoTone, LikeFilled } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import _ from "lodash";
function CheckSKU(props) {
    const [SKULocal, setSKULocal] = useState([]);
    const [state, dispatch] = useStore();
    const { sheet } = state;
    const [FileClick, setFileClick] = useState([]);

    const handlegetLocalFile = (event) => {
        let arr = [];
        let input = event.target;
        for (var i = 0; i < input.files.length; i++) {
            let name = input.files[i].name;
            name = name.split(".");
            if (name.length > 1) name.pop();
            name = name.join(".").toLowerCase();
            arr.push(name);
        }
        setSKULocal(arr);
    }
    let lostSheet = sheet.map(item => {
        if (item.amountFile == "1") {
            if (_.intersection(SKULocal, [item.sku.toLowerCase()]).length == 0) return ({ ...item, haveSku: false })
            else return ({ ...item, haveSku: true })
        }
        else {
            if (_.intersection(SKULocal, [(item.sku + " front").toLowerCase()]).length == 0) item = { ...item, haveSkuFront: false }
            else item = { ...item, haveSkuFront: true }
            if (_.intersection(SKULocal, [(item.sku + " back").toLowerCase()]).length == 0) item = { ...item, haveSkuBack: false }
            else item = { ...item, haveSkuBack: true }
            return item
        }
    }).filter(item => {
        if (item.amountFile == "1") return !item.haveSku
        else return !(item.haveSkuBack && item.haveSkuFront)
    })

    let copyImage = (sku, amountFile, type) => {
        if (amountFile !== "1") sku = sku + type;
        copy(sku)
        setSKULocal([...SKULocal, sku.toLowerCase()])
    }
    console.log("sdvsdv");
    return (
        <div>
            <div className="d-flex justify-content-center">
                <input id='file-input' type='file' className=" btn btn-info" onClick={() => setFileClick([])} onChange={handlegetLocalFile} multiple style={{ display: "none" }} />
                <label htmlFor="file-input" className="input_exel btn btn-info">Kiểm tra file</label>
            </div>
            <div className='tble'>
                <div className="table table-striped table_amounts">
                    <div>
                        <div className='tr-sku'>
                            <div className='stt-sku sku-x' >STT</div>
                            <div className='url-sku sku-x' >URL</div>
                            <div className='down-sku1 sku-x' >Mặt 1</div>
                            <div className='down-sku2 sku-x' >Mặt 2</div>
                        </div>
                    </div>
                    <div>
                        {lostSheet.map((item, key) => <div key={key} className='tr-sku'>
                            <div className='stt-sku sku-x' >{key + 1}</div>
                            <div className='url-sku sku-x'>{item.sku}</div>
                            <div className='down-sku1 sku-x'>
                                <a href={item.urlDesign.split(";")[0]} target="_blank" onClick={() => copyImage(item.sku, item.amountFile, " front")} >
                                    {(_.intersection(SKULocal, [(item.amountFile === "1" ? item.sku : (item.sku + " front")).toLowerCase()]).length === 0) ? <FileTextTwoTone style={{ fontSize: '27px' }} /> : <LikeFilled style={{ fontSize: '20px', color: "#000" }} />}
                                </a>
                            </div>
                            {item.amountFile !== "1" ? <div className='down-sku2 sku-x'>
                                <a href={item.urlDesign.split(";")[0]} target="_blank" onClick={() => copyImage(item.sku, item.amountFile, " back")} >
                                    {(_.intersection(SKULocal, [(item.sku + " back").toLowerCase()]).length === 0) ? <FileTextTwoTone style={{ fontSize: '27px' }} /> : <LikeFilled style={{ fontSize: '20px', color: "#000" }} />}
                                </a>
                            </div> : <div className='down-sku2 sku-x'>

                            </div>}
                        </div>)}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CheckSKU;