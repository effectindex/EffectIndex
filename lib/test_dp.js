const DocumentParser = require('./DocumentParser');
const parser = new DocumentParser;

const template = `dissociatives such as MDMA or 3-MeO-PCP. 

##bob|name="george"[funfun]

##link[asdfasdfasdfasdf]

dasfsdf

##link{asdf sdf[something]}

##link|title="the gy"{
    - One
    - Two
    - Three}
    
    asdfsdf
    
    
    
    asdf`;


console.log(parser.parse(template));