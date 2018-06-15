<script>
    import Reference from '@/components/Reference.vue';
    import ExtLink from '@/components/ExtLink.vue';
    import Markdown from '@/components/effects/effectDescription__markdown.vue';
    import CaptionedImage from '@/components/CaptionedImage.vue';

    export default {
        functional: true,
        render(createElement, context) {
            function handleType(element) {
                switch (element.type) {
                    case 'md':
                        return createElement(Markdown, { props: { body: element.value || '' } });
                        break;
                    case 'string':
                        return createElement('span', { style: { whiteSpace: 'pre-wrap' }}, element.value);
                        break;
                    case 'ref':
                        return createElement(Reference, { props: element.props });
                        break;
                    case 'i':
                        return createElement('span', {  style: { fontStyle: 'italic' } }, element.value);
                        break;                    
                    case 'b':
                        return createElement('span', {  style: { fontWeight: 'bold' } }, element.value);
                        break;
                    case 'ext-link':
                        return createElement(ExtLink, { props: element.props }, element.value);
                        break;
                    case 'int-link':
                        return createElement('nuxt-link', { props: element.props }, element.value);
                        break;
                    case 'cap-img':
                        return createElement(CaptionedImage, { props: element.props }, element.value);
                    default:
                        break;
                }
            }

            let elements = []

            if ('formattedDocument' in context.props && (typeof(context.props['formattedDocument']) === 'string')) {
                let formattedDocument = JSON.parse(context.props['formattedDocument']);

                if (formattedDocument.length) {
                    formattedDocument.forEach((element) => {
                        elements.push(handleType(element));
                    });
                }

                return createElement('div', {  class: 'effectDescription' }, elements);
            }
        }
    }
</script>

