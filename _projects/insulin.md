---
title       : "Insulin"
date 		: "2016-07-13"
photo       : "2016/insulin/preview.png"
blurb       : "Blood-sugar sensors in art."

author       : Greg Dutcher

creators:
 - name     : "Andrew McWilliams"
---

Insulin is an artwork that doubles as a real-time blood sugar monitor for diabetics.  It is the result of experimentations with image layers and masks conducted by Thoughtworks consultant <a href="https://jahya.net/">Andrew McWilliams</a>. The final installation artwork uses the creative coding toolkit openFrameworks, running on the Jetson TK1 hardware platform, and interacts with a body-mounted blood-glucose sensor worn by the artist.

The work was exhibited as part of McWilliams’ 2016 solo exhibition at HarvestWorks, in SoHo, New York.

<figure class="video ratio-51">
	<iframe src="https://player.vimeo.com/video/145707591" allowfullscreen></iframe>
	<figcaption><i>Insulin</i> demo video</figcaption>
</figure>
  	
The idea of this artwork came gradually to McWilliams over several months of experimentation, during which he created new real-time computer-generated sketches every day.

“The sketching process was regular but unstructured”, McWilliams said, ”with no particular goal or artwork in mind. My sketching became increasingly texture-oriented and I started to become fascinated with blood. At the same time I was experimenting with the Jetson hardware and with a body-mounted blood-glucose system, the Dexcom G4. The end result just kind of suggested itself.”

The display of Insulin evokes the flow of blood.  When blood sugar is within the normal range, the flow of patterns on the display is swift and features a pulsation that mimics a heartbeat. At high blood sugar levels, the flow of blood becomes “constricted,” and the flow of patterns is interrupted by swaths of red texture. When blood sugar is low, the screen flashes red, indicating danger - episodes of low blood sugar are accompanied by shaking, impaired vision, and loss of consciousness.

<figure>
	<img src="/images/projects/2016/insulin/triptych.png">
</figure>

Insulin is updated in real time using actual data from McWilliams’ body.  McWilliams, who was diagnosed with Type 1 Diabetes several years ago, wears a sensor on his abdomen which sends blood sugar data every five minutes to an Android app on McWilliams’ phone over Bluetooth.  This app then sends the data to a web server, from where the <a href="https://www.nvidia.com/object/jetson-tk1-embedded-dev-kit.html">Nvidia Jetson TK1 embedded supercomputer</a> pulls the data and updates the display in real-time.

<figure>
	<img src="/images/projects/2016/insulin/diagram.jpg">
</figure>

McWilliams used scans of broken glass and ripped tissue paper to create the textures used in the artwork.  The patterns that glide across the screen of Insulin are the result of extensive research and experimentation into image layers and layer masks in openFrameworks McWilliams conducted in 2015, during which time he created the addons  <a href="https://github.com/microcosm/ofxLayerMask">ofxLayerMask</a> and <a href="https://github.com/microcosm/ofxTexturePlane">ofxTexturePlane</a>.
  
These experiments began purely out of interest in the possibilities of layering images and textures on top of one another, and the idea for Insulin did not come until several months after McWilliams had started experimenting. The results of these daily sketches are <a href="https://sketchpad.jahya.net/">archived on the Daily Sketches site</a>. A couple of examples are shown below. 

<figure class="two-images">
	<img src="/images/projects/2016/insulin/animation1.gif" />
	<img src="/images/projects/2016/insulin/animation2.gif" />
	<figcaption>Some of McWilliams’ experiments</figcaption>
</figure>

McWilliams believes strongly that unstructured experimentation is a crucial part of a creative process.  “By removing a sense of constant goal-orientation, we open ourselves up to discovery and serendipity” McWilliams said.

Indeed, Insulin is a strong example of how this works.  By removing the pressure to create a particular artwork or succeed by any standards, McWilliams allowed an unexpected source of inspiration - his personal health - to influence his work.  Such unexpected inspirations, he says, occur most often when engaging in unstructured play.

So if you’re curious, <a href="http://openframeworks.cc/">download OpenFrameworks</a>. and start messing around.  It doesn’t take much time to make something cool, even if you just know the basics.  OpenFrameworks is designed to allow users to start simple and increase complexity over time.  The community is very active, and <a href="http://ofxaddons.com/categories">there’s tons of open-source plugins</a>. for popular hardware like the Microsoft Kinect and LeapMotion.
