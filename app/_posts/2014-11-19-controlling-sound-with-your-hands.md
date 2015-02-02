---
layout    : post
title     : "Controlling Sound with Your Hands"
bodyid    : "stories"
bodyclass : "content"
---
<p>We have been experimenting with full-body interactions in the lab recently. When NYC MediaLab curated the <a href="http://www.nycmedialab.org/future-interfaces/">Future Interfaces</a> show, we had the chance to demo one of our hacks.</p>

<div class="video">
	<iframe src="https://player.vimeo.com/video/112347647?color=ffffff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

<p>The installation uses two computers and a Kinect2 depth sensor. This new breed of Microsoft depth sensor is effectively bound to Windows computers, so the <a href="https://github.com/microcosm/ofxKinectV2-OSC">ofxKinectV2-OSC</a> addon was used to stream the human body data over to a Mac.</p>

<p>From there, the sound is generated with the help of Adam Carlucci's <a href="https://github.com/admsyn/ofxAudioUnit">ofxAudioUnit</a>. This plugin allows you to write code which directly interacts with virtual synthesizers.</p>