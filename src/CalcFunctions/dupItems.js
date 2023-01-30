export default function dupItems(sheet) {
    let newSheet = [];
    for (let j = 0; j < sheet.length; j++) {
        for (let i = 0; i < sheet[j].Quantity; i++) {
            newSheet.push(sheet[j])
        }
    }
    newSheet = newSheet.map((item, key) => ({ ...item, stt: key + 1 }))
    return newSheet
}