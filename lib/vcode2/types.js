"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.TagSymbol = exports.TagType = exports.TagAction = void 0;
var TagAction;
(function (TagAction) {
    TagAction["open"] = "OPEN";
    TagAction["close"] = "CLOSE";
})(TagAction = exports.TagAction || (exports.TagAction = {}));
var TagType;
(function (TagType) {
    TagType["single"] = "SINGLE";
    TagType["range"] = "RANGE";
})(TagType = exports.TagType || (exports.TagType = {}));
class TagSymbol {
    constructor(index, position, length, name, action, properties, type) {
        this.index = index;
        this.position = position;
        this.length = length;
        this.name = name;
        this.action = action;
        this.properties = properties;
        this.type = type;
    }
}
exports.TagSymbol = TagSymbol;
class Node {
    constructor(name, properties, children) {
        this.name = name;
        this.properties = properties;
        this.children = children;
    }
}
exports.Node = Node;
