
import React from 'react';
import _ from 'lodash';
import { useStore, actions } from '../store';
import sortSheet from '../CalcFunctions/sortSheet';

function DownloadJson(props) {
    const [state, dispatch] = useStore();
    let  { activeProduct, sheet } = state


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
        items: sheet,
        type: activeProduct.product,
        FileName: activeProduct.FileName,
        hAll: activeProduct.hAll,
        wAll: activeProduct.wAll,
        FileDesign: ""

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