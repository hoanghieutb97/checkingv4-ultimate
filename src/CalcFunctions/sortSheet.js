import _ from "lodash";

export default function sortSheet(sheet, product) {
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
        product === "mica DZT Style") {
        sheet = _.orderBy(sheet, ['variant', 'nameId', 'sku'], ['asc', 'asc', 'asc']).map((item, key) => ({ ...item, stt: key + 1 }));
    }
    else {
        sheet = _.orderBy(sheet, ['nameId', 'variant', 'sku'], ['asc', 'asc', 'asc']);
        sheet = sheet.map((item, key) => ({ ...item, stt: key + 1 }));
    }
    return sheet
}