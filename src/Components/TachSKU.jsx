import React, { useState, useEffect } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useStore, actions } from '../store';
import _ from "lodash";
import * as XLSX from 'xlsx';

function TachSKU(props) {
    const [state, dispatch] = useStore();
    let { sheet, activeProduct } = state;
    const [ActiveButton, setActiveButton] = useState(false);
    const [ActiveSheet, setActiveSheet] = useState([]);
    let localFile = activeProduct.localFile
    let handChangeButton = (param) => {
        if (!param) {
            let arr = sheet.filter(item => {
                if (item.amountFile === "1") return (_.intersection([item.sku.toLowerCase()], localFile).length !== 0)
                else return (_.intersection([item.sku.toLowerCase() + " front"], localFile).length !== 0)
            })
            setActiveSheet(arr);
        } else {
            let arr = sheet.filter(item => {
                if (item.amountFile === "1") return (_.intersection([item.sku.toLowerCase()], localFile).length === 0)
                else return (_.intersection([item.sku.toLowerCase() + " front"], localFile).length === 0)
            })
            setActiveSheet(arr);
        }

        setActiveButton(!ActiveButton);
    }

    let handleDownExcel = () => {

        let returnSheet = [, ...ActiveSheet]
        console.log(returnSheet);
        const ws = XLSX.utils.json_to_sheet(returnSheet)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, activeProduct.fileName + '.xlsx')

    }
    useEffect(() => {
        let arr = sheet.filter(item => {
            if (item.amountFile === "1") return (_.intersection([item.sku.toLowerCase()], localFile).length !== 0)
            else return (_.intersection([item.sku.toLowerCase() + " front"], localFile).length !== 0)
        })
        setActiveSheet(arr)
    }, [sheet, activeProduct.localFile]);

    
    return (
        <div className='ctn-tach-vr'>

            <div className="tach-variant">
                <span className="vr-am">{!ActiveButton ? ActiveSheet.length : sheet.length - ActiveSheet.length}</span>
                <button className={"bt-vr" + (ActiveButton ? " bt-active" : "")}
                    onClick={() => handChangeButton(!ActiveButton)}>
                    Đã có file Design
                </button>

            </div>
            <div className="tach-variant ">
                <span className="vr-am">{ActiveButton ? ActiveSheet.length : sheet.length - ActiveSheet.length}</span>
                <button className={"bt-vr" + (!ActiveButton ? " bt-active" : "")}
                    onClick={() => handChangeButton(!ActiveButton)}>
                    Chưa có file Design
                </button>

            </div>

            <div className="bt-sl">
                <Button type="primary" icon={<DownloadOutlined />} size={"Default"} onClick={handleDownExcel}>
                    Download
                </Button>
                {/* <span className="sl-tachvr">Tổng: {sheet.filter(item => (_.intersection([item.variant], ActiveButton).length !== 0) ? true : false).length}</span> */}

            </div>
        </div >
    );
}

export default TachSKU; 