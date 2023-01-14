import _ from "lodash";

export default function sortSheet(sheet, product) {
    let items = [];

    sheet.forEach(item => {
        for (let i = 0; i < item.Quantity; i++) {
            newSheet.push({ ...item, Quantity: 1 })
        }
    });
    if (product === "PC glass" ||
        product === "PC luminous" ||
        product === "PC led" ||
        product === "print metal" ||
        product === "thot 5mm" ||
        product === "cut metal" ||
        product === "3d wood base" ||
        product === "thot den" ||
        product === "thot amazone" ||
        product === "mica DZT Style") {
        items = _.orderBy(items, ['variant', 'nameId', 'sku'], ['asc', 'asc', 'asc']).map((item, key) => ({ ...item, stt: key + 1 }));
    }
    else {
        items = _.orderBy(items, ['nameId', 'variant', 'sku'], ['asc', 'asc', 'asc']);
        items = items.map((item, key) => ({ ...item, stt: key + 1 }));
    }
}