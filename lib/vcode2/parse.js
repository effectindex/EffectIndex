"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function parseProperties(text) {
    const PROPERTY_REGEX = /([\w\-]+)\=\"([^\"]*)\"/g;
    const properties = {};
    let match;
    while (match = PROPERTY_REGEX.exec(text)) {
        let [_, key, value] = match;
        properties[key] = value;
    }
    return properties;
}
// Searches the provided document for Tag Symbols, and returns an array of them.
function getDocumentSymbols(document) {
    const SYMBOL_REGEX = /\[(\/)*([\w\-]+)([\s\S]*?)(\/)*\]/g;
    const symbols = [];
    let match;
    while (match = SYMBOL_REGEX.exec(document)) {
        let [matchedText, closed, name, properties, single] = match;
        const symbol = new types_1.TagSymbol(symbols.length, match.index, matchedText.length, name, closed ? types_1.TagAction.close : types_1.TagAction.open, properties.trim(), single ? types_1.TagType.single : types_1.TagType.range);
        symbols.push(symbol);
    }
    return symbols;
}
function getClosingTagSymbol(documentSymbols, symbol) {
    let depth = 1;
    for (let i = symbol.index + 1; i < documentSymbols.length; i++) {
        const candidate = documentSymbols[i];
        if (candidate) {
            if ((candidate.type === types_1.TagType.range) && (candidate.name === symbol.name)) {
                depth = candidate.action === types_1.TagAction.open ? depth + 1 : depth - 1;
                if (depth === 0) {
                    return candidate;
                }
            }
        }
        else {
            break;
        }
    }
    return undefined;
}
function getTree(documentSymbols, document, startSymbol, endSymbol) {
    const ast = [];
    let currPosition = startSymbol ? startSymbol.position + startSymbol.length : 0;
    for (let i = startSymbol ? startSymbol.index + 1 : 0; i < (endSymbol ? endSymbol.index : documentSymbols.length); i++) {
        const currSymbol = documentSymbols[i];
        if (currSymbol.action === types_1.TagAction.open) {
            if (currSymbol.type === types_1.TagType.single) {
              
                if (currSymbol.position > currPosition) {
                    ast.push(document.slice(currPosition, currSymbol.position));
                }
                ast.push(new types_1.Node(currSymbol.name, parseProperties(currSymbol.properties), undefined));
                currPosition = currSymbol.position + currSymbol.length;
            }
            else {
                const endSymbol = getClosingTagSymbol(documentSymbols, currSymbol);
                if (endSymbol !== undefined) {
                    if (currSymbol.position > currPosition) {
                        ast.push(document.slice(currPosition, currSymbol.position));
                    }
                    ast.push(new types_1.Node(currSymbol.name, parseProperties(currSymbol.properties), getTree(documentSymbols, document, currSymbol, endSymbol)));
                    currPosition = endSymbol.position + endSymbol.length;
                    i = endSymbol.index;
                }
            }
        }
    }
    const endPosition = endSymbol ? endSymbol.position : document.length;
    if (currPosition < endPosition) {
        ast.push(document.slice(currPosition, endPosition));
    }
    return ast;
}
function default_1(document) {
    if (!document) return [];
    return getTree(getDocumentSymbols(document), document);
}
exports.default = default_1;
