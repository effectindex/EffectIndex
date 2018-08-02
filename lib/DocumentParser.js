module.exports = class DocumentParser {
    _getTagType(tag) {
        var type = null;
    
        let typeRegex = /##([a-zA-Z\-]+)/;
        let matchedType = tag.match(typeRegex);
        
        if (matchedType) type = matchedType[1];
    
        return type;
    }

    _getTagProperties(tag) {
        var properties = null;
    
        function parseProperty(property) {
            let propertyName = property.slice(0, property.indexOf('='));
            let propertyValue = property.slice(property.indexOf('"') + 1, property.length - 1);
          
            return {
                name: propertyName,
                value: propertyValue
            };
        }
    
        let propertyRegex = /(\|[a-zA-Z]*=\"[\w\s\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+")+/gi;
        let matchedProperties = tag.match(propertyRegex);
        
        if (matchedProperties) {
            properties = {};
            let splitProperties = matchedProperties[0].split('|');
            splitProperties.shift();
            splitProperties.forEach((property) => {
                let parsedProperty = parseProperty(property);
                properties[parsedProperty.name] = parsedProperty.value;
            });
        }
    
        return properties;
    }

    _getTagValue(tag) {
        let value = null;
        let valueRegex = /\[((.|\n)*)\]/;
        
        let matchedValue = tag.match(valueRegex);

        if (matchedValue) value = matchedValue[1];
    
        return value;
    
    }

    _parseTag(tag) {
        let type = this._getTagType(tag);
        let props = this._getTagProperties(tag);
        let value = this._getTagValue(tag);
    
        return {
            ...type ? { type } : {},
            ...props ? { props } : {},
            ...value ? { value } : {},
        };
    }

    parse(document) {
        if (!document) return [];
    
        let tagRegex = /##([a-zA-Z\-]*)(\|[a-zA-Z]*=\"[\w\s\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+")*(\[(.|\n)[^\]]*\])?/g;
    
        let stack = [];
        let tagMatches = document.match(tagRegex);
    
        if (tagMatches) {
            tagMatches.forEach((match) => {
                let matchIndex = document.indexOf(match);
        
                if (0 < matchIndex) stack.push({
                    type: 'string',
                    value: document.slice(0, matchIndex)
                });
        
                let parsedTag = this._parseTag(match);
        
                if (Object.keys(parsedTag).length !== 0 && parsedTag.constructor === Object) stack.push(parsedTag);
        
                document = document.slice(matchIndex + match.length, document.length);
            });
        }
    
        if (document.length) stack.push({
            type: 'string',
            value: document
        });

        return stack;
    };
};

/*
Tags: 
##bold[sometext]
##ref|no="1"
##ext-link|href="http://www.test.com"[test.com]

##([a-zA-Z\-]*)(\|[a-zA-Z]*=\"[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+")*(\[.*\])*


Stack:
{
    type: 'string',
    value: 'asdf'
},
{
    type: 'reference',
    to: '1'
},
{
    type: 'bold',
    value: 'asdf
},
{
    type: 'ext-link',
    href='http://www.test.com',
    value: 'test.com'
}

*/