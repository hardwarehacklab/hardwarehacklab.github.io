---
title       : "Aphera Music"
date 		: "2016-07-29"
photo       : "2016/aphera-music/preview.png"
blurb       : "Making music on the subway."

author       : Greg Dutcher

creators:
 - name     : "George Woskob"
---

Aphera Music Instruments Suite is an iPhone app that houses several different instruments and facilitates jam sessions with multiple people.  It was designed and built by ThoughtWorks consultant George Woskob, who has been working on it since November 2015.  He expects to release it in the App Store soon.

<figure>
	<img src="/images/projects/2016/aphera-music/slider-synth.png">
	<figcaption>The Slider Synth, Aphera Music's most distinctive instrument</figcaption>
</figure>

The app is programmed in Objective-C, a language Woskob had no experience with prior to starting the work.  He was able to learn it as he went along through incremental improvements to his design.

The hardest part, he says, was learning how to generate the audio itself.  “You have to give the audio engine 44,100 data points every second to draw the waveform that will ultimately come out of the speaker. That's a lot of data points and it has to happen in real time so that the sound isn’t interrupted. I had to dust off the bit of C I picked up in college.”

<figure>
	<img src="/images/projects/2016/aphera-music/george.jpg">
	<figcaption>Woskob using the app</figcaption>
</figure>

In its current form, the app features a drum machine and a synthesizer with a built-in looper.  Woskob designed the instruments to be to be intuitive to musicians and non-musicians alike, so that anyone can pick up an iPhone and start playing.

“By building instruments that provide an intuitive and new interface to rhythm and pitch, the app is leveling the playing field to jamming,” he says.  “And the fact that it's an app means it can be very spontaneous. The touch screen has hardly been explored as a medium for interfacing with music in any sort of creative capacity.”

<figure>
	<img src="/images/projects/2016/aphera-music/drum-machine.png">
	<figcaption>The Aphera Music drum machine</figcaption>
</figure>

Aphera Music features a “networked play” mode, wherein users on the same Wi-Fi network can play together.  The apps communicate over wifi and bluetooth using Apple's Multipeer Connectivity framework.  There is no audio sent over the network - one app becomes a controller and sends instrument control commands to another instance of the app.

There are plans for more instruments, too, and Woskob is interested in developing a plugin-style architecture for community-contributed instruments.  The idea would be for Aphera Music to have an API that developers could use to make their own instruments.  While this feature may not make it into the initial release, Woskob plans to standardize his domain language and the app’s API to facilitate community contributions.

<figure>
	<img src="/images/projects/2016/aphera-music/step-synth.png">
	<figcaption>The step synthesizer, an instrument still in development</figcaption>
</figure>

The most remarkable thing about this app is that Woskob started with zero knowledge about iOS and was able to develop such sophisticated functionality.  Many people attending the Hardware Hack Lab start without any up-front technical knowledge.  There are always low-barrier entry points allowing would-be developers to get started quickly.  The work starts out looking rough, but can be refined later. <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/georgewoskob">You can hear more of Woskob's work here.</a>
