<template>
  <div class="pageContent">
    <h1> Viscidcode Cheat Sheet </h1>
    <div class="cheatsheet">
      <div class="cheatsheet_section">
        <h2> Headered Textbox </h2>
        ##headered-textbox
        <p> A textbox with a rounded left label, header and subheader. </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> label </td> <td> The text of the rounded left label. </td>
            </tr>
            <tr>
              <td> labelBackground </td> <td> The background colour of the label. </td>
            </tr>
            <tr>
              <td> header </td> <td> The text of the main header. </td>
            </tr>
            <tr>
              <td> headerBackground </td> <td> The background colour of the main header. </td>
            </tr>
            <tr>
              <td> subHeader </td> <td> The text of the subheader. </td>
            </tr>                                           
          </tbody>
        </table>
        <label> Example </label>
        <div style="white-space: pre-wrap">
          ##headered-textbox|label="Level 1"|header="Peripheral"|subHeader="Light Intensity"|labelBackground="#AAAAAA"|headerBackground="#F0F0F0"{At the lowest level, visual drifting can be described as a wiggling of straight lines within the external environment. This occurs exclusively within a person’s peripheral vision and cannot be directly looked at.}
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Quotation </h2>
        ##quotation
        <p> Put a pleasant box around a quote. </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> author </td> <td> Author of the Quotation </td>
            </tr>
            <tr>
              <td> profile </td> <td> Profile name of the author (if it exists) </td>
            </tr>
          </tbody>
        </table>
        <label> Example </label>
        <div style="white-space: pre-wrap">
          ##quotation|author="Viscid"|profile="viscid"{
          Here is a quote about something important. 
          It is super insightful. }
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Markdown </h2>
        ##md
        <p> Allows you to use markdown in an effect. </p>
        <label> Example </label>
        <div style="white-space: pre-wrap;">
          ##md{ - List item one
          - list item two
          - list item three}
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Captioned Image </h2>
        ##cap-img
        <p> Renders an image with caption. </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> src </td> <td> URL for a static image (non-gfycat) </td>
            </tr>
            <tr>
              <td> gfycat </td> <td> gfycat name ('MyGloriousElephant') for the imge </td>
            </tr>
            <tr>
              <td> align </td> <td> Alignment of the captioned image. ('left', 'center', 'right') </td>
            </tr>
            <tr>
              <td> width </td> <td> Width of the image (in pixels) </td>
            </tr>
            <tr>
              <td> height </td> <td> Height of the image (in pixels)</td>
            </tr>
            <tr>
              <td> top </td> <td> Remove top margin if image is floated at the top of the document. ('true') </td>
            </tr>
            <tr>
              <td> border </td> <td> Adds a border and padding around the image ('true') </td>
            </tr>
            <tr>
              <td> artist </td> <td> Artist name </td>
            </tr>
            <tr>
              <td> url </td> <td> URL for the artist </td>
            </tr>
            <tr>
              <td> title </td> <td> Artwork title </td>
            </tr>
            <tr>
              <td> caption </td> <td> Caption for the image </td>
            </tr>
            <tr>
              <td> imageRoutes </td> 
              <td>
                Comma-separated list of colon-separated properties that match particular routes. <br>
                imageRoutes="PATH:IMAGE:TITLE:ARTIST:CAPTION,PATH:IMAGE:TITLE:ARTIST:CAPTION,PATH:IMAGE:TITLE:ARTIST:CAPTION" <br> 
                e.g. ##cap-img|imageRoutes="dissociative:/gallery/dissociative.jpg:The Great Dissociative:Some Artist,deliriant:/gallery/deliriant.jpg:The Minor Deliriant:Some Other Artist"
              </td>
            </tr>
          </tbody>
        </table>      


        <label style="display: block; margin-top: 1em;"> Example </label>
        <div style="white-space: pre-wrap;">
          ##cap-img|src="http://images.google.com/flower.jpg"|align="center"|width="300"|artist="George"|title="Flower"|caption="An example of a flower."
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Reference </h2>
        ##ref
        <p> Creates a refernce to a citation in the citations list. </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> to </td> <td> The citation number to reference. </td>
            </tr>
            <tr>
              <td> no </td> <td> The reference number (how many references to the same citation have been made prior to this reference? Add 1.) </td>
            </tr>
            <tr>
              <td> text </td> <td> The text of the number (if omitted, defaults to the citation number) </td>
            </tr>
          </tbody>
        </table>      


        <label style="display: block; margin-top: 1em;"> Example </label>
        <div style="white-space: pre-wrap;">
          ##ref|to="5"|no="2"
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Subarticle Header</h2>
        ##subarticle
        <p> Defines a point in the document to scroll to after clicking on a subarticle link </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> id </td> <td> The 'id' of the subarticle header. (Not the title) </td>
            </tr>
            <tr>
              <td> size </td> <td> The 'id' of the subarticle. (Not the title) </td>
            </tr>
          </tbody>
        </table>      
        <label style="display: block; margin-top: 1em;"> Example </label>
        <div style="white-space: pre-wrap;">
          ##subarticle|id="some-id"|size="h3"{This is some header}
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Referenced Bullet </h2>
        ##refbull
        <p> Renders a bullet list element with captions on the end. </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> refs </td> <td> List of comma separated references. Each reference can specify which reference number it is by adding the reference number with a period. e.g., 2.3 would add a reference to citation #2 that is the 3rd reference in the article. </td>
            </tr>
          </tbody>
        </table>      


        <label style="display: block; margin-top: 1em;"> Example </label>
        <div style="white-space: pre-wrap;">
          ##refbull|refs="2,4.2,5"{This is a bullet list item with a bunch of references at the end of it.}
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Audio Player </h2>
        ##audio
        <p> Renders an audioplayer with waveform. </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> src </td> <td> URL of the audio file ("/audio/whatever.mp3") </td>
            </tr>
            <tr>
              <td> title </td> <td> Audio title </td>
            </tr>
            <tr>
              <td> artist </td> <td> Audio artist </td>
            </tr>
            <tr>
              <td> audioRoutes </td> 
              <td>
                Comma-separated list of colon-separated properties that match particular routes. <br>
                audioRoutes="PATH:AUDIO:TITLE:ARTIST,PATH:AUDIO:TITLE:ARTIST,PATH:AUDIO:TITLE:ARTIST" <br> 
                e.g. ##audio|audioRoutes="dissociative:/audio/dissociative.mp3:The Great Dissociative:Some Artist,deliriant:/audio/deliriant.mp3:The Minor Deliriant:Some Other Artist"
              </td>
            </tr>
          </tbody>
        </table>      


        <label style="display: block; margin-top: 1em;"> Example </label>
        <div style="white-space: pre-wrap;">
          ##audio|src="/audio/whatever.mp3"|title="The sound of me not giving a fuck."|artist="Viscid"
        </div>
      </div>

      <div class="cheatsheet_section">
        <h2> Internal Link </h2>
        ##int-link
        <p> Creates a link to another page on the Index </p>
        <table>
          <thead>
            <tr> <td> Property </td> <td> Description </td> </tr>
          </thead>
          <tbody>
            <tr>
              <td> to </td> <td> Location on the effect index you want to link to. </td>
            </tr>
          </tbody>
        </table>      


        <label style="display: block; margin-top: 1em;"> Example </label>
        <div style="white-space: pre-wrap;">
          ##int-link|to="/replications/"{our replication gallery}
        </div>
      </div>
    </div>

    <div class="cheatsheet_section">
      <h2> External Link </h2>
      ##ext-link
      <p> Creates a link to page outside of the Index </p>
      <table>
        <thead>
          <tr> <td> Property </td> <td> Description </td> </tr>
        </thead>
        <tbody>
          <tr>
            <td> href </td> <td> URL of the website to link to. </td>
          </tr>
        </tbody>
      </table>      


      <label style="display: block; margin-top: 1em;"> Example </label>
      <div style="white-space: pre-wrap;">
        ##ext-link|href="http://www.puppies.com"{I wish I had a puppy.}
      </div>
    </div>

    <div class="cheatsheet_section">
      <h2> Bold </h2>
      ##b
      <p> It's fucking bold. </p>
      <label style="display: block; margin-top: 1em;"> Example </label>
      <div style="white-space: pre-wrap;">
        ##b{I REALLY WISH I HAD A PUPPY.}
      </div>
    </div>

  

    <div class="cheatsheet_section">
      <h2> Italics </h2>
      ##i
      <p> I'm <span style="font-style: italic;"> sooooooo </span> done with writing this cheatsheet. </p>
      <label style="display: block; margin-top: 1em;"> Example </label>
      <div style="white-space: pre-wrap;">
        ##i{soooooo done}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "I AM THE ONE WHO KNOCKS"
    };
  }
};
</script>

<style scoped>

.cheatsheet_section {
  border: 1px solid #999;
  background-color: #f9f9f9;
  padding: 1em;
  margin: 1em 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.25em;
}

thead {
  font-weight: bold;
}

thead > tr > td:first-child {
  width: 150px;
}

</style>