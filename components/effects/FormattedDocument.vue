<script>
import Reference from "@/components/Reference.vue";
import ExtLink from "@/components/ExtLink.vue";
import Markdown from "@/components/effects/FormattedDocument__markdown.vue";
import CaptionedImage from "@/components/CaptionedImage.vue";
import BulletWithReferences from "@/components/effects/BulletWithReferences.vue";
import AudioPlayer from "@/components/replications/audio/AudioPlayer";

export default {
  functional: true,
  render(createElement, context) {
    function handleType(element) {
      switch (element.type) {
        case "md":
          return createElement(Markdown, {
            props: { body: element.value || "" }
          });
        case "audio":
          return createElement(AudioPlayer, {
            props: element.props
          });
        case "string":
          return createElement(
            "span",
            { style: { whiteSpace: "pre-wrap" } },
            element.value
          );
        case "bullet":
          return createElement("span", { class: "bullet" }, element.value);
        case "refbull":
          return createElement(BulletWithReferences, { props: element.props }, element.value);
        case "ref":
          return createElement(Reference, { props: element.props });
        case "i":
          return createElement(
            "span",
            { style: { fontStyle: "italic" } },
            element.value
          );
        case "b":
          return createElement(
            "span",
            { style: { fontWeight: "bold" } },
            element.value
          );
        case "ext-link":
          return createElement(
            ExtLink,
            { props: element.props },
            element.value
          );
        case "int-link":
          if (('props' in element) && ('to' in element.props)) {
            return createElement(
              "nuxt-link",
              { props: element.props },
              element.value
            );
          } else break;
        case "cap-img":
          return createElement(
            CaptionedImage,
            { props: element.props },
            element.value
          );
        default:
          break;
      }
    }

    let elements = [];

    if (
      "document" in context.props &&
      typeof context.props["document"] === "string"
    ) {
      let doc = JSON.parse(context.props["document"]);

      if (doc.length) {
        doc.forEach(element => {
          elements.push(handleType(element));
        });
      }

      return createElement("div", { class: "formattedDocument" }, elements);
    }
  }
};
</script>

