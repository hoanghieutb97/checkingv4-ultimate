import _ from "lodash";
import dupItems from "../CalcFunctions/dupItems"
export default function sortSheet(sheet, product) {




    if (product === "Acrylic Plaque") {
        let arr5 = _.chunk(sheet.filter(item => (item.nameId === "A.Plaque6x8in"
            || item.nameId === "DZT-Plaque6x8"
            || item.nameId === "wood-Plaque6x8in"
            || item.nameId === "2M-Plaque6x8inTMZ")), 5);

        let arr1 = sheet.filter(item => (item.nameId === "A.Plaque4x6in"
            || item.nameId === "DZT-Plaque4x6"
            || item.nameId === "wood-Plaque4x6in"));
        if (arr5.length > arr1.length) {
            for (let i = 0; i < arr5.length; i++) {
                if (arr1[i] !== undefined) arr5[i] = [...arr5[i], arr1[i]]

            }
            console.log(arr5);
            return _.flattenDeep(arr5)
        }
        else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr5[i] !== undefined) arr1[i] = [...arr5[i], arr1[i]]

            }

            return _.flattenDeep(arr1)
        }

    }
    else
        if (product === "PC glass" ||
            product === "PC luminous" ||
            product === "PC led" ||
            product === "print metal" ||
            product === "thot 5mm" ||
            product === "cut metal" ||
            product === "3d wood base" ||
            product === "thot den" ||
            product === "thot amazone" ||
            product === "PC silicon" ||
            product === "FatherDayZirror" ||
            product === "mica DZT Style") {
            sheet = _.orderBy(sheet, ['variant', 'orderId', 'sku'], ['asc', 'asc', 'asc']).map((item, key) => ({ ...item, stt: key + 1 }));
        }
        else {
            console.log(sheet);

            sheet = _.orderBy(sheet, ['orderId', 'variant', 'sku'], ['asc', 'asc', 'asc']);
            console.log(sheet);

            sheet = sheet.map((item, key) => ({ ...item, stt: key + 1 }));
        }
    return sheet
}