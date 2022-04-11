export default {
	'vtag': [
		{
			pattern: /\[\/*[\w\-]+[\s\S]*?\/*\]/,
      inside: {
        'name': {
          pattern: /(\[\/*)[\w\-]+/,
          lookbehind: true
        },
        'property': {
          pattern: /[\w\-]+(?=\=\"[^\"]*\")/,
          greedy: true
        },
        'value': {
          pattern: /([\w\-]+\=\")[^\"]*(?=\")/,
          lookbehind: true,
          greedy: true
        }
      }
      
    }
  ]
};