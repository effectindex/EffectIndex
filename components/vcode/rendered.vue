<script>
import Category from "@/components/Category";
import CaptionedImage from "@/components/CaptionedImage";
import Reference from "@/components/Reference";

export default {
  functional: true,
  render(createElement, context) {
    return createElement("div", { class: "vcodeDocument" }, renderNodes(context.props.body));

    function renderNode(name, properties, children) {
      switch (name) {
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
        case "p":
          return createElement(
            "p",
            renderNodes(children)
          );
        case "h1":
          return createElement(
            "h1",
            renderNodes(children)
          );
        case "h2":
          return createElement(
            "h2",
            renderNodes(children)
          );
        case "h3":
          return createElement(
            "h3",
            renderNodes(children)
          );
        case "br":
          return createElement(
            "br"
          );
        case "hr":
          return createElement(
            "hr"
          );
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
          return createElement(
            "nuxt-link",
            { props: { ...properties } },
            renderNodes(children)
          );
        case "ext-link":
          return creteElement(
            "a",
            { props: { ...properties } },
            renderNodes(children)
          );
        default:
          break;
      }
    }

    function renderNodes(nodes = []) {
      const elements = [];
      
      if (nodes) {
        nodes.forEach( node => elements.push(typeof node === 'string' ? node : renderNode(node.name, node.properties, node.children)));
      }

      return elements;
    }
  }
};

</script>

<style scoped>
  p {
    margin: 1em 0;
  }
</style>