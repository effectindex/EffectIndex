const DocumentParser = require('./DocumentParser');
const parser = new DocumentParser;

const template = `dissociatives such as MDMA or 3-MeO-PCP. 

##link|title="the gy"[
    - One
    - Two
    - Three]`;


console.log(parser.parse(template));