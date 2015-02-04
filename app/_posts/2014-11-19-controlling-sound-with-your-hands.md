---
layout    : post
title     : "Controlling Sound with Your Hands"
bodyid    : "stories"
bodyclass : "content"
---
<p>We have been experimenting with full-body interactions in the lab of late. Yesterday we were invited to install some of our work at NYC MediaLab's <a href="http://www.nycmedialab.org/future-interfaces/">Future Interfaces</a> event:</p>

<div class="video">
	<iframe src="https://player.vimeo.com/video/112347647?color=ffffff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

<p>In the installation, the position of people's hands are used to control variables on virtual synthesizers in real-time. The screen also shows a visual display to help particpants work out exactly how they are affecting the sound.</p>

<!--excerpt-ends-->

<p>The gestures of participants are read in real-time by a Kinect2 device just under the screen display. The Kinect2 is a great advance on the Kinect, however this new breed of Microsoft depth sensor is effectively bound to Windows computers.</p>

<p>From Windows, the <a href="https://github.com/microcosm/KinectV2-OSC">KinectV2-OSC</a> app is used to stream the Kinect2 data over to openFrameworks on a Mac. On the Mac, the data is read in using the <a href="https://github.com/microcosm/ofxKinectV2-OSC">ofxKinectV2-OSC</a> addon.</p>

<p>Once inside openFrameworks, the data is routed to control variables on virtual sound synthesizers called Audio Units. These synths are launched and manipulated with the help of Adam Carlucci's <a href="https://github.com/admsyn/ofxAudioUnit">ofxAudioUnit</a> addon. This is a fairly simple addon to use, but offers a great deal of power. Connecting openFrameworks to Audio Units allows you to manipulate a <a href="http://music.tutsplus.com/articles/8-free-professional-quality-audio-unit-plug-ins-for-mac--audio-13292">wide variety</a> of <a href="http://logic-pro-expert.com/logic-pro-blog/2011/10/11/another-38-free-audio-unit-plugins-worth-checking-out.html">sound-generating devices</a>.</p>

<p>If you want to check out the code and see how the addons relate to each other, check out the <a href="https://github.com/microcosm/audioUnitExperiments/">audioUnitExperiments</a> repo. Note that if you want to see the code exactly as shown in the video, you'll need to make sure you are on <a href="https://github.com/microcosm/audioUnitExperiments/commit/7cad0a303191c1e79a6092cf8a799afe7773fa02">this specific commit</a>.</p>