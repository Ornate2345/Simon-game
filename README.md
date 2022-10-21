# Simon-game
Simon game using HTML ,CSS and JS

# Simon Game

In this project i decided to do a normal Simon game. It is a memory game where you have to follow the sequence and copy the sequence correctly to move on to
the next level. I decided to have 2 modes in this game, medium and hard. The medium mode is pretty straight forward. When a coloured button flashes, you click
on the button. When you get futher on in the game you will have several colours to rememeber in order. The game gets harder the longer you play! As for the 
hard mode, i decided to make the buttons change positions every time you move on to the next level, i thought this would make it harder for the user to
rememeber each colour in order. For the design of the game i decided i wanted to have a big circle as the game board and 6 coloured buttons all around inside
the big for the sequence. In this middle of the game board i have put a smaller circle with the control buttons in. This way the user can always see what level
they are, on as well as being able to change the mode, start and restart the game. I decided to use bright and bold colours for the buttons as i thought they
would stand out better from the dark grey game board. I also have created a modal with instuctions to my game. I thought it was best to add these so if someone
was unsure on how to play the game, they can read the instructions and understand it. I would like to think the overall design of the game fits well with the 
common memory game.

### UX

Firstly i tried to correct the HTML for the game, i chose to do this first as i thought it would be easier to name functions etc in my JavaScript. I decided to use
a array of colours for my buttons. Once i had created the style of the game i then decided to create the JavaScript to go with it. I had struggled for a while to
know what was the best code to use. Once i had created my JavaScript i needed help because nothing was working. We realised i was making small mistakes such as missing
';' and naming  ids for variables in my html. Once we had started to get somewhere everything started to come together. I had to change some of my html and css to
make the overall look of the game good. I added buttons in the controls circle as i know the typical actions the user would want to perform such as 'resetting the game',
'starting the game' and 'changing' the mode of the game. I also would think the user would want it to be obvious when a button is pressed so i think it is important i
add flashes to the buttons in the sequences. The users would also want to know what level their on so i would want to have a level section in the controls bit so the
user can see their level at all times. I thought it was a good idea to change something in the hard mode to make the game more interesting and difficult on the
harder mode. My idea was to change the positions of the coloured buttons. This way you have to rememeber what colour flashed and then find what position they are
in on that level. With me adding this extra function in hard mode the user has a choice of an easy or hard game. Or in some cases using meidum mode to practice.

### Features

* In this project the buttons flash and the user is to copy the sequence and click the correct button.
* You can change the mode from 'medium' to 'hard'.
* You can reset the game throughout the game.
* I have a counter so the user knows what level they are on throughout the game.
* The coloured buttons change positions when you move on the next level in hard mode.
* I have used a random function which will allow the game to use a unique sequence each time.
* I have used 'start' and 'reset' buttons to let the user have control of the game.

### Technologies Used

JQuery - I have used jQuery to simplify DOM manipulation
Bootsrap - I have used bootsrap for icons and effects
Font Awesome - I have used font awesome to add some different font onto my website.
CSS - For styling the game
HTML - For the elements of the game


### Testing


* Does the game start when pressed the start button?
* Does the levels section go up each time your on a new level?
* Does the game play the random sequence for you to then press the correct button?
* Does the game move on to the next level when completed last level correctly?
* Does the game show an alert when failed the game?
* Does the game show an alert when the game is won?
* Does the game allow you to restart once you have either won or lost the game?
* Does the sound effects work when a button is pressed?
* Do the buttons flash when pressed or called by the sequence?
* Does the hard mode differ to the medium mode?
* Does the coloured buttons move positions when you move on to the next level in hard mode?
* Does only one button flash at a time?

### Credits

I have used the website 'https://codereview.stackexchange.com/questions/162096/simon-game-in-javascript' for research in creating the game. I needed an understanding
of what to expect my game too look like and how it would work. After looking at this persons game, i decided that mine was going to be similar but with different
functions and a complete new design. 
