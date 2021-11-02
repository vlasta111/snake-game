var fs = require('fs');

function Read() {
    const data = fs.readFileSync("./data.json", "utf8");

    try {
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

function Write(data) {
    fs.writeFile("data.json", JSON.stringify(data), () => {});
}

module.exports.Read = Read;
module.exports.Write = Write;