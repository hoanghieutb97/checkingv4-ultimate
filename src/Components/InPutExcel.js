import React, { useEffect } from 'react';
import readXlsxFile from 'read-excel-file';
import { useStore, actions } from '../store';

function InputExcel(props) {
    const [state, dispatch] = useStore();
    const { gllm, sheet } = state

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
                newSheet.shift();
                newSheet.shift();
                
                dispatch(actions.dispatchSheet(newSheet))

                // `rows` is an array of rows
                // each row being an array of cells.
            })
        })
    }, []);

    return (
        <div>
            <input type="file" id="input" />
        </div>
    );
}

export default InputExcel;