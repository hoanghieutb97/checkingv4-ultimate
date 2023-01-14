
import React from 'react';
import _ from 'lodash';
import { useStore, actions } from '../store';

function DownloadJson(props) {
    const [state, dispatch] = useStore();
    const { activeProduct, sheet } = state


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

    // let items = JSON.parse(JSON.stringify(props.items));
    // if (props.typeTable === "silicon") {

    //     items = items.map(item => {
    //         item = item.map(z9Sort1 => {
    //             let a = _.chunk(z9Sort1, 8); return a
    //         });
    //         return item
    //     })

    // };


    //   let thongso = { wAll: props.TableValue.wAll, hAll: props.TableValue.hAll, FileDesign: props.FileDesign }

    let strWrite = {
        items: sheet,
        type: activeProduct.product,
        FileName: activeProduct.FileName,
        // thongso: thongso
    };

    return (
        <div className="d-flex justify-content-center mt-1">
            <button type="button" className="btn btn-primary  dlp"
                onClick={() => saveTextAsFile(strWrite)}
                style={{ color: "white" }}
            >
                Download JSON
            </button>
        </div>

    );
}

export default DownloadJson;