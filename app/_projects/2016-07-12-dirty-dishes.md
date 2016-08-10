---
layout      : project
bodyid      : "projects"
bodyclass   : "content"

title       : "Dirty Dishes"
photo       : "2016-07-12-dirty-dishes/preview.jpg"
blurb       : "Someone is watching you"

author       : Greg Dutcher
author_slug  : greg-dutcher
author_photo : greg.jpg

---

There’s something watching people at the sink in the ThoughtWorks NYC office.

For the past few weeks, a team of designers from Parsons School for Design have been working with a technologist at ThoughtWorks.  They’re designing a system for our office to deter people from leaving their dirty dishes in the sink.  It’s not a huge technology problem, but it has helped make our workplace a cleaner, nicer place.

<figure class="project-page__image-container"><img class="project-page__image" src="/images/projects/2016-07-12-dirty-dishes/dirtyDishes.gif"></figure>

Say you’ve just finished your second espresso of the day and you’re looking for a place to put your tiny cup and spoon.  You walk towards the sink, and as soon as you start running the tap, you’re met with the pair of glowering eyes above.  What you didn’t realize is that you’ve just tripped an infrared motion sensor connected to a Raspberry Pi.

Parsons students Melika Leili and Elena Habre found that implementing their solution to this problem wasn’t so hard, and more, it was fun.  The system is simple: the screen stays dark most of the time, but when the motion sensor is tripped, the Raspberry Pi plays a short video.  Thoughtworks consultant Aidan Obley wrote a <a href="https://github.com/adobley/PiMotionPlayer" target="_blank" rel="noopener noreferrer">short python script</a> that uses the Pi’s built-in video player to do this.  

<figure class="project-page__image-container"><img class="project-page__image" src="/images/projects/2016-07-12-dirty-dishes/dirtyDishes2.jpg"></figure>

Though there are still some delinquents here in the office, we’ve seen a dramatic drop in the number of dishes left in the sink.  Which makes me think: what else can happen when you pair technologists and designers?
