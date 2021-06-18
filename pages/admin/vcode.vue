<template>
  <div class="pageContent">
    <div class="component-index">
      <h1> VCode Components </h1>

      <ul>
        <li> <a href="#captioned-image"> Captioned Image </a> </li>
        <li> <a href="#columns"> Columns </a> </li>
        <li> <a href="#panel"> Panel </a> </li>
        <li> <a href="#comparison"> Comparison </a> </li>
        <li> <a href="#toc"> Table of Contents </a> </li>
        <li> <a href="#headered-textbox"> Headered Textbox </a> </li>
        <li> <a href="#audio"> Audio </a> </li>
        <li> <a href="#ordered-list"> Ordered list </a> </li>
        <li> <a href="#unordered-list"> Unordered List </a> </li>
        <li> <a href="#quote"> Quote </a> </li>
        <li> <a href="#ref"> Reference </a> </li>
        <li> <a href="#italics"> Italics </a> </li>
        <li> <a href="#bold"> Bold </a> </li>
        <li> <a href="#underline"> Underline </a> </li>
        <li> <a href="#headers"> Headers </a> </li>
        <li> <a href="#line-break"> Line Break </a> </li>
        <li> <a href="#horizontal-rule"> Horizontal Rule </a> </li>
        <li> <a href="#internal-link"> Internal Link </a> </li>
        <li> <a href="#external-link"> External Link </a> </li>
        <li> <a href="#subarticle"> Subarticle </a> </li>
      </ul>
    </div>

    <example 
      id="captioned-image"
      name="Captioned Image"
      v-bind="captionedImage"
    />

    <example
      id="columns"
      name="Columns"
      v-bind="columns"
    />

    <example
      id="comparison"
      name="Comparison"
      v-bind="comparison"
    />

    <example
      id="panel"
      name="Panel"
      v-bind="panel"
    />

    <example
      id="headered-textbox"
      name="Headered Textbox"
      v-bind="headeredTextbox"
    />

    <example
      id="ordered-list"
      name="Ordered List"
      v-bind="orderedList"
    />

    <example
      id="unordered-list"
      name="Unordered List"
      v-bind="unorderedList"
    />

    <example
      id="quote"
      name="Quote"
      v-bind="quote"
    />

    <example
      id="ref"
      name="Reference"
      v-bind="reference"
    />

    <example
      id="italics"
      name="Italic"
      v-bind="italics"
    />

    <example
      id="bold"
      name="Bold"
      v-bind="bold"
    />

    <example
      id="underline"
      name="Underline"
      v-bind="underline"
    />

    <example
      id="headers"
      name="Headers"
      v-bind="headers"
    />

    <example
      id="line-break"
      name="Line Break"
      v-bind="lineBreak"
    />

    <example
      id="horizontal-rule"
      name="Horizontal Rulebar"
      v-bind="horizontalRule"
    />

    <example
      id="internal-link"
      name="Internal Link"
      v-bind="internalLink"
    />

    <example
      id="external-link"
      name="External Link"
      v-bind="externalLink"
    />

    <example
      id="audio"
      name="Audio"
      v-bind="audio"
    />

    <example
      id="subarticle"
      name="Subarticle"
      v-bind="subarticle"
    />

    <example
      id="toc"
      name="Table of Contents"
      v-bind="toc"
    />

    <example
      id="sup"
      name="Superscript"
      v-bind="sup"
    />
  </div>
</template>

<script>
import Example from '@/components/vcode/example';

export default {
  components: {
    Example
  },
  data() {
    return {
      captionedImage: {
          name: 'captioned-image',
          description: 'A captioned image, with optional border, that is responsive and activates a modal when clicked.',
          props: [
            {
              name: 'src',
              description: 'If not using a gfycat, the URL of the image. (http://www.website.com/images/image.jpg for remote images, /static/images/image.jpg for local images.'
            },
            {
              name: 'align',
              description: 'The justification of the image. (e.g., \'right\' \'left\' or \'center\')'
            },
            {
              name: 'width',
              description: 'The width of the image, in pixels. (e.g., \'300\')'
            },
            {
              name: 'height',
              description: 'The height of the image, in pixels. (e.g. \'200\')'
            },
            {
              name: 'artist',
              description: 'The name of the artist the image is attributed to. (Optional)'
            },
            {
              name: 'url',
              description: 'The artist\'s website, if an artist is specified. (Optional)'
            },
            {
              name: 'title',
              description: 'The title of the artwork. (Optional)'
            },
            {
              name: 'caption',
              description: 'The caption for the image. (Optional)'
            },
            {
              name: 'gfycat',
              description: 'The gfycat identifier (three concatenated random words) if the image is a gfycat. (e.g., GreedyElatedElephant)'
            },
            {
              name: 'top',
              description: 'Used to remove the top margin if the image is at the very top of the document. (e.g., true)'
            },
            {
              name: 'border',
              description: 'Adds a border around the image if true.'
            }
          ],
          code: `[captioned-image 
    src="https://smartcdn.prod.postmedia.digital/canoe/wp-content/uploads/2019/07/gettyimages-910314172-e1564420108411.jpg"
    width="300"
    artist="Bob the Dog"
    url="http://www.bob.com"
    title="My Rival"
    align="left"
    top="true"
    caption="Bob the Dog's most despised enemy"
    border="true" /]`
      },
      columns: {
        name: 'columns',
        description: 'Identifies a set of columns, used for laying out content in parallel horizontally. Used in conjuction with the \'column\' component as its child to denote particular columns.',
        code: `[columns]
  [column]
    [ul] 
      [li] List Item One [/li]
      [li] List Item Three [/li]
      [li] List Item Four [/li]
    [/ul]
  [/column]
  
  [column]
    [p] There is nothing like a few columns in your document to make you feel good about yourself. [/p]
  [/column]

  [column]
    [ul] 
      [li] List Item One [/li]
      [li] List Item Three [/li]
      [li] List Item Four [/li]
    [/ul]
  [/column]
[/columns]`
      },
      panel: {
        name: 'Panel',
        description: 'A panel with title and icon. Can be used in columns.',
        code: `[panel title="The Seasons" icon="eye.svg"] 
   [ul]
     [li] Season 1 [/li]
     [li] Season 2 [/li]
     [li] Season 3 [/li]
     [li] Season 4 [/li]
   [/ul]
 [/panel]`,
props: [
  {
    name: 'title',
    description: 'Title of the panel.'
  },
  {
    name: 'icon',
    description: 'Filename of the icon. (e.g. eye.svg) Icon files are stored in the project directory under /static/icons/. '
  },
  {
    name: 'width',
    description: 'Width of the panel (optional)'
  }
]
      },
      headeredTextbox: {
        name: 'Headered Textbox',
        description: 'A text box with label and optional image.',
        code: `[headered-textbox
        label="Level 69"
        header="A Superior Example"
        subHeader="Of a headered textbox"
        imageSrc="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/10/13142931/Close-up-of-a-Rottweiler-laying-down-outdoors.jpeg"
        imageWidth="300"
        imageAlign="left"
        ] When black dogs do psychedelic drugs, what was the research behind this one? "I used MDMA as a way to change something around in my life. It was something that I didn't know what I was doing, but it made everything feel a lot better." One of the experiments found that white dogs could be significantly more excited by a small amount of psychedelics than black dogs.  [/headered-textbox]`,
        props: [
          {
            name: 'label',
            description: 'The text that appears as the label in the top left of the textbox. If none is specified, there will be no label.'
           },
          {
            name: 'labelBackground',
            description: 'The background colour (default is grey) of the label, in hex. (e.g., #E8D291 Optional)'
           },
          {
            name: 'headerBackground',
            description: 'The background colour of the header, in hex.  (Optional)'
           },
          {
            name: 'header',
            description: 'The header/title of the textbox. (Optional)'
           },
          {
            name: 'subHeader',
            description: 'A subtitle for the textbox.'
           },
          {
            name: 'imageSrc',
            description: 'URL for an image to be displayed alongside the content of the textbox.'
           },
          {
            name: 'imageAlign',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageWidth',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageHeight',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageArtist',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageUrl',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageTitle',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageCaption',
            description: 'See CaptionedImage component for more details on these props.'
           },
          {
            name: 'imageGfycat',
            description: 'See CaptionedImage component for more details on these props.'
           },
        ]
      },
      orderedList: {
        name: 'ol',
        description: 'A numbered list.',
        code: `[ol]
   [li] Item One [/li]
   [li] Item Two [/li]
   [li] Item Three [/li]
 [/ol]`
      },
      unorderedList: {
        name: 'ul',
        description: 'A bullet-point list.',
        code: `[ul listStyle="dash"]
   [li] Item One [/li]
   [li] Item Two [/li]
   [li] Item Three [/li]
 [/ul]`,
        props: [
          {
            name: 'listStyle',
            description: 'The style of the bullet. (circle, square, dash, none)'
          }
        ]
      },
      quote: {
        name: 'Quote',
        description: 'A texbox with a grey background and a signature with image from a SEI user.',
        code: `[quote author="Josie Kins" profile="Josie"] 
   [p]The reason I created the Subjective Effect Index was to present the subfactors of a complex situation in a more comprehensible and easily digested form, allowing people to assess, through feelings, that certain conditions and situations do or do not represent an "effect" on themselves.[/p]
   [p]I use the S.E.I. to assess a person's current mental and emotional state.[/p]
   [p]The Vividness and Stereotype Follow Through components of the S.E.I. are not in themselves a psychological diagnosis.[/p]
   [p]Yet I have concluded that subjective factors may well play a prominent role.[/p]
[/quote]`,
      props: [
        {
          name: 'author',
          description: 'The name of the author (e.g., Josie Kins)'
        },
        {
          name: 'profile',
          description: 'The profile name you wish to link to (e.g., Josie)'
        }
      ]
      },
      reference: {
        name: 'Reference',
        description: 'A superscript reference to a citation.',
        code: '[p] It has been proven that when students leave school and have a bar of soap in their pocket, they have a much better chance of success. [ref to="3" no="2" /] [/p]',
        props: [
          {
            name: 'to',
            description: 'The citation index number (found in the editor) the reference is refering to.'
          },
          {
            name: 'no',
            description: 'The instance number for the particular reference. i.e., if this was the 3rd reference to a citation, it would be \'3\'. (Optional) '
          }
        ]
      },
      comparison: {
        name: 'Comparison',
        description: 'A borderless text box with a label that compares two items, optionally with images.',
        code: `[comparison]

  [item name="Frogs"]
    [image height="300" src="https://images.newscientist.com/wp-content/uploads/2020/09/22145012/big-frog-eyes.jpg?width=778" /]
  [/item]

  [item name="Explosions"]
    [image height="300" src="https://www.fire-magazine.com/media/36246/gettyimages-1265008200.jpg" /]
  [/item]

  [description] The difference between Frogs and Explosions are really just two letters. They are such similar letters that they really should be spelled the same way (there have been spelling variations in different languages that spell them the same way). However, since everyone talks about how frogs bounce, most people want to know if they actually explode when thrown. So let’s look at exploding frogs. [/description]

[/comparison]
        `,
        props: [
          {
            name: 'item',
            description: 'Child Component - Takes prop \'name\' and has an image component (see captioned image component for props)',
          },
          {
            name: 'description',
            description: 'Child Compoment - Paragraph content describing the comparison.'
          }
        ]
      },
      italics: {
        name: 'i',
        description: 'Italic styling',
        code: '[i] Something emphasized [/i]',
      },
      bold: {
        name: 'b',
        description: 'Bold styling',
        code: '[b] Something emphasized [/b]',
      },
      underline: {
        name: 'u',
        description: 'Underline styling',
        code: '[u] Something emphasized [/u]',
      },
      headers: {
        name: 'h1',
        description: 'Headers. Also: h2, h3, h4.',
        code: `[panel] [h1] Header One [/h1]
        [h2] Header Two [/h2]
        [h3] Header Three [/h3]
        [h4] Header Four [/h4] [/panel]`,
      },
      lineBreak: {
        name: 'br',
        description: 'A manual line break.',
        code: '[p] A dog\'s eye cannot be seen while it is staring at you, but once it [br /] turns its head it becomes frighteningly apparent how much [br /] they are studying your movements. [/p]',
      },
      horizontalRule: {
        name: 'hr',
        description: 'A horizontal rulebar.',
        code: `[p] The people above are from Boston. [hr /] The people below are from a homestay here in Mebuluk and were just a delight to meet. [/p] `,
      },
      horizontalRuleTransparent: {
        name: 'hrt',
        description: 'A partially transparent horizontal rulebar.',
        code: `[p] The people above are from Boston. [hrt /] The people below are from a homestay here in Mebuluk and were just a delight to meet. [/p] `,
      },
      internalLink: {
        name: 'int-link',
        description: 'A link to a resource INTERNAL to the Subjective Effect Index website.',
        code: 'It is best not to speak directly to [int-link to="/effects/autonomous-entities"]autonomous entities[/int-link], rather, send a letter.',
        props: [
          { 
            name: 'to',
            description: `Absolute path or relative website path. If the leading '/' is omitted, the link will be relative from the current directory.`
          }
        ]
      },
      externalLink: {
        name: 'ext-link',
        description: 'A link to a resource EXTERNAL to the Subjective Effect Index website.',
        code: 'This website is far superior to that degenerate [ext-link to="https://www.psychonautwiki.org"] PsychonautWiki.[/ext-link]',
        props: [{
          name: 'To',
          description: 'URL of the external website.'
        }]
      },
      audio: {
        name: 'audio',
        description: 'An audio replication player.',
        code: '[audio src="/audio/distorted%20forests.mp3" artist="Edgar" title="Distorted Forest" /]',
        props: [
          {
            name: 'src',
            description: 'Absolute or relative location of the audio file to play.'
          },
          {
            name: 'artist',
            description: 'Artist who created the audio.'
          },
          {
            name: 'Title',
            description: 'Title of the work.'
          }
        ]
      },
      subarticle: {
        name: 'subarticle',
        description: 'An anchor to a subarticle that is linked to from the index and/or Table of Contents.',
        code: '[subarticle id="audio-distortions"] Audio Distortions [/subarticle]',
        props: [
          {
            name: 'id',
            description: 'Id of the subarticle, as defined in the editor.'
          }
        ]
      },
      toc: {
        name: 'toc',
        description: 'The Table of Contents for the page.',
        code: '[toc /] (This is only functional on an effect or article)',
        props: [
          {
            name: 'float',
            description: `Whether to float the table of contents in the document. (e.g., 'right' or 'left')`
          },
          {
            name: 'top',
            description: `Removes the top margin of the TOC. Useful when the TOC is placed at the top of the document. `
          }
        ]
      },
      sup: {
        name: 'sup',
        description: 'Superscript Text.',
        code: 'I\'m way down here. [sup] I\'m way up here! [/sup]',
      }
    };
  }
};
</script>

<style scoped>
  .component-index {
    background-color: #F8F8F8;
    padding: 0.5em;
    border: 1px solid #CCC;
    display: inline-block;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .component-index ul {
    padding-left: 0;
    list-style: none;
    text-align: center;
    columns: 5;
  }

  .component-index h1 {
    font-size: 25px;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  pre {
    white-space: pre-wrap;
  }

  h3 {
    margin: 0em 0;
  }
</style>