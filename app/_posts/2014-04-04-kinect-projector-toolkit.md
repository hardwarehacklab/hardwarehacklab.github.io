---
layout    : post
title     : "The Kinect-Projector Toolkit: A Demo"
bodyid    : "stories"
bodyclass : "content"
---
<p>Some of the best hacks are when you mash together two pieces of commercial hardware that weren't designed with each other in mind. That's exactly what Gene Kogan did when he made the <a href="http://www.genekogan.com/works/kinect-projector-toolkit.html">Kinect-Projector Toolkit</a> for openFrameworks and Processing.</p>

<div class="video">
	<iframe src="https://player.vimeo.com/video/90933463?color=ffffff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

<p>This toolkit allows you to mix the human-body tracking features of a commercial depth sensor with the imagery from a commercial projector.</p>

<p>In the video above, participants are interacting with virtual objects falling from the ceiling. These objects collide with each other using 'virtual' physics, but also they can collide with you as a participant in physical space.</p>

<!--excerpt-ends-->

<p>Of course it seems that way, but in reality it's all virtual. The toolkit allows you to take the skeletal data from the Kinect and accurately map it to any point in a virtual space. You then project the virtual space back over the physical space to complete the illusion.</p>

<p>At the heart of this hack is a calibration process, similar to <a href="http://jahya.net/blog/?2013-08-rgbdtoolkit-calibration-tutorial">the one found</a> in RGBDToolkit. This process allows your computer to work with the intrinsics and relative positioning of both the Kinct lens and the projector lens.</p>

<p>So long as the computer has this information, it can accurately map skeletal joints to virtual objects such that the interactions mirror what's going on in the real world.</p>

<p>If that sounds complicated, don't worry about it. That's what the <a href="https://github.com/genekogan/ofxKinectProjectorToolkit">openFrameworks</a> and <a href="https://github.com/genekogan/KinectProjectorToolkit">Processing</a> addons are for.</p>