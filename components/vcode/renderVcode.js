import CaptionedImage from "./components/CaptionedImage";
import Reference from "./components/Reference";
import HeaderedTextbox from "./components/HeaderedTextbox";
import SubarticleAnchor from "./components/SubarticleAnchor";
import SeparatedTextbox from "./components/SeparatedTextbox";
import Quote from "./components/Quote";
import Markdown from "./components/Markdown";
import List from "./components/List";
import Columns from "./components/Columns";
import Column from "./components/Column";
import Panel from "./components/Panel";
import Comparison from "./components/Comparison/";

import Category from "@/components/Category";
import ExtLink from "@/components/ExtLink";
import TableOfContents from "@/components/TableOfContents";
import HorizontalRule from "@/components/vcode/HorizontalRule";

import AudioPlayer from "@/components/replications/audio/AudioPlayer";
import ShowDetails from "@/components/ShowDetails";

function renderVcode(createElement, data, body) {

  return createNodes(body, data);


  function createNodes(nodes, data) {
    return Array.isArray(nodes) ? nodes.map(node => typeof node === 'string' ? node : createNode(node, data)) : undefined;
  }

  function createNode(node, data) {
    const {name, properties, children} = node;
    switch (name) {
      case "comparison":
        return createElement(Comparison, {props: {...properties}}, children);
      case "headered-textbox":
        return createElement(HeaderedTextbox, {props: {...properties}}, createNodes(children, data));
      case "i":
        return createElement(
          "span",
          {style: {fontStyle: "italic"}},
          createNodes(children, data)
        );
      case "b":
        return createElement(
          "span",
          {style: {fontWeight: "bold"}},
          createNodes(children, data)
        );
      case "u":
        return createElement(
          "span",
          {style: {textDecoration: "underline"}},
          createNodes(children, data)
        );
      case "p":
        return createElement(
          "p",
          createNodes(children, data)
        );
      case "h1":
        return createElement(
          "h2",
          {attrs: {id: properties ? properties.id : undefined}},
          createNodes(children, data)
        );
      case "h2":
        return createElement(
          "h3",
          {attrs: {id: properties ? properties.id : undefined}},
          createNodes(children, data)
        );
      case "h3":
        return createElement(
          "h4",
          {attrs: {id: properties ? properties.id : undefined}},
          createNodes(children, data)
        );
      case "br":
        return createElement("br");
      case "hr":
        return createElement(
          HorizontalRule,
          {props: {...properties}}
        );
      case "category":
        return createElement(
          Category,
          {props: {...properties}},
          createNodes(children, data)
        );
      case "captioned-image":
        return createElement(
          CaptionedImage,
          {props: {...properties}},
          createNodes(children, data)
        );
      case "ref":
        return createElement(
          Reference,
          {props: {...properties}},
        );
      case "int-link":
        if (properties && 'to' in properties) {
          return createElement(
            "nuxt-link",
            {props: {...properties}},
            createNodes(children, data)
          );
        } else return createElement(
          "span",
          {attrs: {style: 'color: red;'}},
          createNodes(children, data)
        );
      case "ext-link":
        if (properties && 'to' in properties) {
          const {to} = properties;
          return createElement(ExtLink, {attrs: {href: to}}, createNodes(children, data));
        } else {
          return createElement('span', {attrs: {style: 'color: red;'}}, createNodes(children, data));
        }
      case "details":
        return createElement(ShowDetails, {props: {ordered: false, ...properties}}, createNodes(children, data));
      case "ul":
        return createElement(
          List,
          {props: {ordered: false, ...properties}},
          createNodes(children, data)
        );
      case "li":
        return createElement(
          "li",
          createNodes(children, data)
        );
      case "ol":
        return createElement(
          List,
          {props: {ordered: true, ...properties}},
          createNodes(children, data)
        );
      case "markdown":
        return createElement(
          Markdown,
          {props: {...properties}},
        );
      case "audio":
        return createElement(
          AudioPlayer,
          {props: {...properties}},
        );
      case "separated-textbox":
        return createElement(
          SeparatedTextbox,
          {props: {...properties}},
          createNodes(children, data)
        );
      case "quote":
        return createElement(
          Quote,
          {props: {...properties}},
          createNodes(children, data)
        );
      case "subarticle":
        return createElement(
          SubarticleAnchor,
          {props: {...properties}},
          createNodes(children, data)
        );
      case "columns":
        return createElement(
          Columns, {props: {...properties}},
          createNodes(children, data)
        );
      case "column":
        return createElement(
          Column, {props: {...properties}},
          createNodes(children, data)
        );
      case "panel":
        return createElement(
          Panel, {props: {...properties}},
          createNodes(children, data)
        );
      case "sup":
        return createElement(
          'sup',
          createNodes(children, data)
        );
      case "toc":
        return createElement(
          TableOfContents,
          {props: {data, ...properties}}
        );
      default:
        break;
    }
  }


}


export default renderVcode;
