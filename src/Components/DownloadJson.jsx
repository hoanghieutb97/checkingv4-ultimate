
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import sortSheet from '../CalcFunctions/sortSheet';
import readXlsxFile from 'read-excel-file';
import { useStore, actions } from '../store';
import mapSheetGllm from '../CalcFunctions/mapSheetGllm';
import checkActiveProduct from '../CalcFunctions/checkActiveProduct';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import dupItems from '../CalcFunctions/dupItems';
function DownloadJson(props) {

    const [state, dispatch] = useStore();
    let { gllm, sheet, activeProduct } = state;
    const [Filename, setFilename] = useState();

    useEffect(() => {
        const input = document.getElementById('input')
        document.getElementById('input').addEventListener('change', () => {
            readXlsxFile(input.files[0]).then((rows) => {
                let newSheet = rows.map(item => ({
                    orderId: item[0],
                    barcode: item[1],
                    sku: item[2],
                    Quantity: item[3],
                    variant: item[4],
                    product: item[5],
                    country: item[6],
                    partner: item[7],
                    urlDesign: item[8],
                    dateItem: item[9],
                    orderName: item[10],
                    note: item[11],
                    location: item[12],
                    LineItemName: item[13],
                    LocalFile: item[14],
                }))
                newSheet.shift(); newSheet.shift();
                if (gllm.length !== 0) {
                    dispatch(actions.dispatchSheet(mapSheetGllm({ gllm, sheet: newSheet })));
                    let name = input.files[0].name;
                    name = name.split(".");
                    name.pop();
                    name = name.join(".")
                    setFilename(name)
                };

            })
        })

    });

    useEffect(() => {

        dispatch(actions.dispatchProduct({ ...checkActiveProduct(sheet), fileName: Filename }))
    }, [sheet]);



    let saveTextAsFile = (param) => {
        let paramToText = JSON.stringify(param)
        var textToWrite = paramToText // file contents
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        let fileNameToSaveAs = `${activeProduct.product}-${(activeProduct.fileName)}.json`;
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        downloadLink.click();
    }
    sheet = sortSheet(sheet, activeProduct.product)



    let strWrite = {
        items: dupItems(sheet),
        type: activeProduct.product,
        FileName: activeProduct.FileName,
        hAll: activeProduct.hAll,
        wAll: activeProduct.wAll,
        fileName: activeProduct.fileName,
        FileDesign: JSON.parse(localStorage.ActiveFileDesign)

    };

    return (
        <div className="d-flex justify-content-center mt-3 mb-2">

            <Button type="primary" icon={<DownloadOutlined />} ghost={true} size={"Default"} onClick={() => saveTextAsFile(strWrite)}>
                Download JSON
            </Button>
        </div>

    );
}

export default DownloadJson;