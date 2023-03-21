import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useStore, actions } from '../store';
import _ from "lodash";
import * as XLSX from 'xlsx';
import dupItems from '../CalcFunctions/dupItems';
function TachVariant(props) {
    const [state, dispatch] = useStore();
    let { sheet, activeProduct } = state;
    const [ActiveButton, setActiveButton] = useState([]);
    let listVariant = _.uniq(sheet.map(item => item.variant)).map(item => sheet.filter(itemFilter => itemFilter.variant === item))
    let handChangeButton = (item) => {
        if (_.intersection([item], ActiveButton).length !== 0) {
            let arr = _.remove(ActiveButton, function (n) { return n !== item; });
            setActiveButton(arr)
        }
        else {
            setActiveButton([...ActiveButton, item])
        }
    }

    let handleDownExcel = () => {
        let returnSheet = sheet.filter(item => (_.intersection([item.variant], ActiveButton).length !== 0) ? true : false);
        returnSheet = [, ...returnSheet]
        
        const ws = XLSX.utils.json_to_sheet(returnSheet)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, activeProduct.fileName + '.xlsx')

    }

    let returnSheet = dupItems(sheet.filter(item => (_.intersection([item.variant], ActiveButton).length !== 0) ? true : false))

    return (
        <div className='ctn-tach-vr'>

            {listVariant.map((item, key) => <div className="tach-variant" key={key}>

                <button className={"bt-vr" + ((_.intersection([item[0].variant], ActiveButton).length !== 0) ? " bt-active" : "")} onClick={() => handChangeButton(item[0].variant)}>{item[0].variant}</button>
                <span className="tachvr-pro"> {item[0].product} </span>
            </div>)
            }
            <div className="bt-sl">
                <Button type="primary" icon={<DownloadOutlined />} size={"Default"} onClick={handleDownExcel}>
                    Download
                </Button>
                <span className="sl-tachvr">Tổng: {returnSheet.length}</span>
            </div>

        </div >
    );
}

export default TachVariant; 