<script>
import Category from "@/components/Category";
import CaptionedImage from "@/components/CaptionedImage";
import Reference from "@/components/Reference";
import HeaderedTextbox from "@/components/vcode/components/HeaderedTextbox";
import Markdown from "@/components/vcode/components/Markdown";

export default {
  functional: true,
  render(createElement, context) {
    const body = typeof context.props.body === 'string' ? JSON.parse(context.props.body) : context.props.body;
    const type = context.props.type || 'div';
    
    const renderNodes = (nodes) => 
       Array.isArray(nodes) ? nodes.map( node => typeof node === 'string' ? node : renderNode(node)) : undefined;
    
    function renderNode(node) {
      const { name, properties, children } = node;
      switch (name) {
        case "headered-textbox":
          return createElement(HeaderedTextbox, { props: { ...properties } }, renderNodes(children));
        case "i":
          return createElement(
            "span",
            { style: { fontStyle: "italic" } },
            renderNodes(children)
          );
        case "b":
          return createElement(
            "span",
            { style: { fontWeight: "bold" } },
            renderNodes(children)
          );
        case "u":
          return createElement(
            "span",
            { style: { textDecoration: "underline" }},
            renderNodes(children)
          );
        case "p":
          return createElement(
            "p",
            renderNodes(children)
          );
        case "h1":
          return createElement(
            "h2",
            renderNodes(children)
          );
        case "h2":
          return createElement(
            "h3",
            renderNodes(children)
          );
        case "h3":
          return createElement(
            "h4",
            renderNodes(children)
          );
        case "br":
          return createElement("br");
        case "hr":
          return createElement("hr");
        case "category":
          return createElement(
            Category,
            { props: { ...properties } },
            renderNodes(children)
          );
        case "captioned-image":
          return createElement(
            CaptionedImage,
            { props: { ...properties } },
            renderNodes(children)
          );
        case "ref":
          return createElement(
            Reference,
            { props: { ...properties } },
          );
        case "int-link":
          if (properties && 'to' in properties) {
            return createElement(
              "nuxt-link",
              { props: { ...properties } },
              renderNodes(children)
            );
          } else return createElement(
            "span",
            { attrs: { style: 'color: red;' } },
            renderNodes(children)
          );
        case "ext-link":
          if (properties && 'to' in properties) {
            const { to } = properties;
            return createElement("a", { attrs: { href: to } },  renderNodes(children));
          } else {
            return createElement('span', { attrs: { style: 'color: red;' } }, renderNodes(children));
          }
        case "ul":
          return createElement(
            "ul",
            renderNodes(children)
          );
        case "li":
          return createElement(
            "li",
            renderNodes(children)
          );
        case "ol":
          return createElement(
            "ol",
            renderNodes(children)
          );
        case "markdown":
          return createElement(
            Markdown,
            { props: { ...properties } },
          );
        default:
          break;
      }
    }

    return createElement(type, { class: "vcodeDocument" }, renderNodes(body));
  }
};

</script>

<style scoped>
  p {
    margin: 1em 0;
  }
</style>