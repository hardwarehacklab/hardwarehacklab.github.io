---
layout      : project
bodyid      : "projects"
bodyclass   : "content"

title       : "Draw VR"
date 		: "2016-08-05"
photo       : "2016/draw-vr/preview.png"
blurb       : "Humanized collaborative VR."

author       : Greg Dutcher
author_slug  : greg-dutcher
author_photo : greg.jpg

creators:
 - name     : "Kent Rahman"
 - name     : "Andrew McWilliams"
 - name     : "Pierre Bernard"
 - name     : "Andre Smith"
---

An experimental team of ThoughtWorks designers and technologists has been working for the past three months with virtual reality to make remote collaborations more human.  Using <a target="_blank" rel="noopener noreferrer" href="https://unity3d.com/">Unity</a>, the <a target="_blank" rel="noopener noreferrer" href="http://www.htcvive.com/us/">HTC Vive</a>, and the <a target="_blank" rel="noopener noreferrer" href="https://www3.oculus.com/en-us/rift/">Oculus Rift</a>, they’ve developed a remote-collaboration application that allows users to high-five, express ideas as objects in 3D space, and even play Pictionary from opposite sides of the country.

<div class="embedded-video--youtube">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/l2zb8I0J93Q" frameborder="0" allowfullscreen></iframe>
</div>
<p class="image-caption">Drawing with others in virtual space.</p>

The idea for the application, tentatively named <i>Draw</i>, came out of a ThoughtWorks workshop focused on exploring VR business opportunities for clients.  The team had strong convictions that VR had a unique value proposition in the area of remote collaboration, a concern common to a large number of industries.

Technology, though it has made remote communication easier, has in general tended to dehumanize the way we communicate and collaborate.  Most remote communication is done over email or video chat - media and interfaces that force one to type words out on a keyboard and interact with others through a flat screen.

The team knew they wanted to develop something that afforded a more human mode of expression than was possible with existing videoconferencing tools like Google Hangouts.  Because VR alters one’s sense of place and presence, they felt there was an opportunity to use it to improve on the current state of remote collaboration.

<figure class="project-page__image-container"><img class="project-page__image" src="/images/projects/2016/draw-vr/team.jpg"></figure>
<p class="image-caption">Members of the team Neil (left), Kent (middle), and Haeyoung (right) testing out an early prototype.</p>

This trajectory began as a passion project for Kent Rahman, a user experience designer with ThoughtWorks.  While on a project at an education technology company in 2014, he noticed how technology affected communication between students and teachers.  For instance, students uncomfortable speaking up in class could communicate with their teacher using iPad software ThoughtWorks had built.

This same capability - the ability to communicate in non-verbal ways - is what he recognized VR could provide in ways no existing technology could.  “Designers have a moral obligation to make tools people use for their jobs enjoyable and delightful, because they influence workers’ happiness,” he says.  “It’s important to treat users like human beings.”

<div class="embedded-video--youtube">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/SiR9Tehn6Qg" frameborder="0" allowfullscreen></iframe>
</div>
<p class="image-caption">Creating and scaling objects in VR.</p>

Things really came together when Rahman started experimenting with <a target="_blank" rel="noopener noreferrer" href="https://www.leapmotion.com/">LeapMotion</a>.  Two of LeapMotion's early demos gave him this idea: one for drawing in 3D by pinching one’s fingers together, and another for scaling virtual objects with one’s hands.  He realized that this ability to create and manipulate objects could be used to convey ideas in virtual space.

This ability to manipulate objects is at the center of <i>Draw</i>, the result of the experimental project by the team at ThoughtWorks.  <i>Draw</i>, coded in C#, is a lightweight application designed to satisfy the critical needs of a networked VR application: two people can inhabit the same virtual space and see each others’ avatars, communicate via voice, and draw shapes with their own hands.

The team - composed of developers Allie Quintano and Nick Maxwell, designers Haeyoung Kim and Christopher Edwards, strategist Neil Redding, and technologist Rachel Laycock - plans to release the application to the community the coming weeks.

<div class="embedded-video--youtube">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/dAlAMhXhDiE" frameborder="0" allowfullscreen></iframe>
</div>
<p class="image-caption">More networked drawing in VR.</p>

Having designed a basic drawing system, the team now plans to extend the functionality of the application.  They're working on offering the user a way to represent dynamic systems - complex systems with parts that change over time, like international supply chains - in virtual space.

Finding abstract, simplified ways of representing dynamic systems is a problem that cuts across scores of industries.  Often, tasks like this are done using whiteboards and post-it notes, but the team believes that VR can be used to do this more intuitively.  One feature they'd like to bring to <i>Draw</i> is the ability to create objects, scale them, and move them around the virtual space in a loop.

<div class="embedded-video--youtube">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/7xylV1QfE08" frameborder="0" allowfullscreen></iframe>
</div>
<p class="image-caption">A prototype for setting waypoints and having an object move around on a path.</p>

There are other possibilities, too, like data visualization.  For instance, a book might have an illustration of the tallest skyscrapers in the world, at relative scale.  But it would be even easier to create a virtual space that features these buildings right next to each other, at their actual size.

This is new technology to most everyone on the team, so there’s been a lot of learning and unstructured experimentation along the way.  It didn’t take long, however, for the team to notice the potential VR had for fostering a sense of empathy and connection.

“It’s amazing,” Rahman says.  “The first thing people want to do in VR is high five each other.  It brings out a natural curiosity in people.  They immediately start exploring the environment and expressing themselves within it.  There’s something really powerful and intangible in the knowledge you share a virtual space with another person.”

<figure class="project-page__image-container"><img class="project-page__image" src="/images/projects/2016/draw-vr/thumbsup.png"></figure>
<p class="image-caption">A "thumbs up" signal from all participants starts the meeting.</p>

One concept the team quickly seized upon was what they described as “ambient utility,” the virtual environment’s ability to provide utility through its design.  For instance, one of their prototypes is a virtual meeting that takes place among mountains and forests.  When all the participants give a thumbs up sign, a bell sounds and the sun rises.  As the time allotted for the meeting draws to a close, the sun begins to set, providing a naturalistic, intuitive cue to participants that they should finish their discussion.

They have also been learning about what it’s like to develop software for VR.  Since VR development hasn’t been around for very long, the industry lacks a consensus on topics such as testing and continuous integration pipelines.  The team hopes to establish a set of best practices for VR development.

<figure class="project-page__image-container"><img class="project-page__image" src="/images/projects/2016/draw-vr/hand-out.jpg"></figure>
<p class="image-caption">A user testing session for an early version of <i>Draw</i>.</p>

Given the difficulties of recognizing trajectories of new technologies, one of the best approaches is to enable teams to experiment and rapidly iterate on ideas.  This may only be an experimental application, but the team hopes that their ideas will influence the design of remote collaboration tools.  Even if they don't, though, the team agrees it's important to experiment and contribute to the dialogue about VR. As Rahman says, "There’s something really satisfying about working to prove that there is a way in which this technology can be used.”

All of the hardware this experimental team has been using is available to the public at the ThoughtWorks NYC office.  If you'd like to try out the hardware and learn more about what it's like to develop for VR, <a target="_blank" rel="noopener noreferrer" href="https://hardwarehacklab.io/join/">stop by the Hardware Hack Lab any Wednesday.</a>
