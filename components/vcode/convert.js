import DocumentParser from '@/lib/DocumentParser';


function handleProps(props) {
  if (typeof props === 'object') {
    let str = '';
    for (const prop in props) {
      str += ` ${prop}="${props[prop]}"`;
    }
    return str;
  } else return '';
}

function createVcodeTag(type, props, value) {
  if (value) {
    return `[${type}${handleProps(props)}]${value}[/${type}]`;
  } else {
    return `[${type}${handleProps(props)} /]`;
  }
}

function toVcode(parsed) {
  if (!Array.isArray(parsed)) return parsed;
  let str = '';
  parsed.forEach(child => {
    if (typeof child === 'string') {
      str += child;
    } else if (typeof child === 'object') {
      const { type, value, props } = child;
      switch (type) {
        case 'string':
          str += value;
          break;
        case 'int-link':
          str += createVcodeTag('int-link', props, value);
          break;
        case 'cap-img':
          str += createVcodeTag('captioned-image', props, value);
          break;
        case 'i':
          str += createVcodeTag('i', props, value);
          break;
        case 'b':
          str += createVcodeTag('b', props, value);
          break;
        case 'ref':
          str += createVcodeTag('ref', props);
          break;
        case 'headered-textbox':
          str += createVcodeTag('headered-textbox', props, value);
          break;
        case 'separated-textbox':
          str += createVcodeTag('separated-textbox', props, value);
          break;
        case 'quotation':
          str += createVcodeTag('quote', props, value);
          break;
        case 'subarticle':
          str += createVcodeTag('subarticle', props, value);
          break;
        case 'md':
          str += createVcodeTag('markdown', { text: value });
          break;
        case 'audio':
          str += createVcodeTag('audio-player', props);
          break;
        case 'bullet':
          str += createVcodeTag('bullet', props, value);
          break;
        case 'refbull':
          str += createVcodeTag('refbull', props, value);
          break;
        case 'ext-link':
          str += createVcodeTag('ext-link', props, value);
          break;
        case 'horizontal-line':
          str += createVcodeTag('hr');
          break;
        default:
          break;
      }
    }
  });
  return str;
}

export default function convert(viscidcode) {
  const parser = new DocumentParser();
  return toVcode(parser.parse(viscidcode));
}