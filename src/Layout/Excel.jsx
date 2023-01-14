import React, { useEffect, useState } from 'react';
import readXlsxFile from 'read-excel-file';
import { useStore, actions } from '../store';
import mapSheetGllm from '../CalcFunctions/mapSheetGllm';
import checkActiveProduct from '../CalcFunctions/checkActiveProduct';
import DownloadJson from '../Components/DownloadJson';
import sortSheet from '../CalcFunctions/sortSheet';
function Excel(props) {
    const [state, dispatch] = useStore();
    const { gllm, sheet, activeProduct } = state;
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
                    setFilename(input.files[0].name)
                };

            })
        })
        // console.log(input.files[0].name);
    });

    useEffect(() => {
        // console.log(sheet);

        dispatch(actions.dispatchProduct({ ...checkActiveProduct(sheet), fileName: Filename }))
    }, [sheet]);
    if (sheet.length !== 0) sortSheet(sheet, activeProduct.product)

    return (
        <div>
            <input type="file" id="input" />
            {/* <DownloadJson /> */}
        </div>
    );
}

export default Excel;