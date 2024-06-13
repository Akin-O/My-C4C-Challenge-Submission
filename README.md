Hello to anyone reading this. I hope you're having a nice day.

{--------- Instructions ---------}

**It is advised that you have GIT and Node.js + NPM installed
  prior to attempting to run the code.**

1. Clone the repo or download it onto your device.
2. In the root directory (the same location as this README.md
   file), run "npm run dev" at the root of the project. 
   - If you possess git-bash, right click the 'package.json'
     file and select "Open Git Bash Here". Upon doing this,
     run "npm run dev" in this console. 
3. If successful (it will most likely say so in prompt upon
   running command), visit http://localhost:3000/ to view
   the site. 
   - It is unlikely, but possible, that you may receive a 
     number which isn't '3000' for your local link. If 
     the provided link doesn't work, review your console.
4. View final site.

{--------- Overview ---------}

   This website is an attempted remake of Code 4 Community
   Home page (specifically the projects tag found at
   https://www.c4cneu.com/projects). Unlike the original,
   however, this site was created with the intention of 
   allowing for simple interaction and editing. Through
   the four empty text-boxes at the top of the screen, a 
   visitor of the site can submit a new partner to add to 
   the list of current partners.

   All partner submissions within the dashboard of the site
   Have 5 primary components. A title, logo (url), active
   status, a description, and a delete button. In the event
   that a partner submission is outdated or has an error, 
   the visitor can delete it and resubmit it with up to date
   information. 

{--------- Personal Reflection ---------}

   1. Encountered Difficulties 
 
   Prior to this assignment, I had close to no experience 
   with html and similar coding (with my most recent 
   exposure being some time in middle school), and so 
   each step was usually very new and confusing. 

   Take, for example, cloning the template repository and
   then compiling it. Though I did have some experience
   with github and thus didn't struggle to clone the 
   repository, figuring out where exactly use "npm run dev"
   was almost as grueling as the code itself. Given how my
   main command prompt didn't work, it took a lot of 
   investigation to realize a working method (which was 
   running git bash on the package.json file, which would 
   THEN allow me to use the 'npm run dev' command). 

   Upon succeeding with installing the code, I then lamented
   over the fact that I would be editing it on notepad rather
   than a proper compiler. While I assume there may have been
   an alternative, editing from the notepad was straightforward
   and I didn't want to spend too much time trying to find an
   alternative that may or may not have been easier. It was 
   difficult at times - especially because I had no experience 
   with javascript - to figure out what issues were the results 
   of hidden errors, improper syntax, or simple typos since none 
   of these would be underlined like in a compiler. 

   2. Learnings, Insights, etc.
   
   This entire project was a significant large learning experience
   for me. Besides the fact that I learned a lot of html/javascript
   just from scouring the internet, the react library, and files 
   in order to find references, I had to repeatedly change my approach
   to meet the project requirements.

   During my coding process, there were many instances when I was 
   confused about why my code wouldn't work as intended, even when no
   errors were present and it seemed like it should function properly. 
   As a result, every part of the site - the buttons, the textboxes, 
   the layout - required me to restart my code and rethink my approach. 
   In the end, my final piece was final code didn't use as much of the
   template as I expected it to, and I was glad as I felt like it showed
   how much of it was a result of my own exploration and adaptibility. 

   2.5 Specific Problems and workarounds.

   Text vs Values: This was possibly the most straightforward yet issue
   I encountered while working on the site. Often, whenever I tried to 
   display a value - such as the title of a user - it would show up as the
   name of the variable instead of the value inside of it. It took me some
   time before I realized I Was supposed to put the target variable within 
   "{}" to have their value displayed. 
 
   Submit Button: When I first tried implementing submit, I was struggling 
   to figure out how I could generate a list and have it update when
   a new partner was submitted to it. Although generating the starting
   list was simple enough, it took me a long while to determine how to
   make a new partner based on textbox input and generate a new display
   for it in the dashboard. Ultimately, I ended up doing so by completely
   ./ PartnerTile and reusing the class names and format in the Dashboard 
   itself. 

   Delete Button: When I succeeded in making a SINGLE delete button, 
   it just deleted everything. At first, I intended to alter it so that it 
   would take a user-given index (which would require me to assign a number
   to every partner in the partnerList), but decided against it as that 
   would require me to interfere with already working code. Instead, I 
   decided to give each partner a delete button that generated with their 
   information and attach it to their id. That way, whenever this button 
   would be clicked, I could filter out the selected partner from the entire
   list. 

   3. Things I would do differently. 

   I feel as though one of my biggest holdups was focusing too heavily 
   on the template. Although it was stated that my final product didn't 
   need to look exactly like it, I didn't want to stray too far from it 
   given my lack of experience in javaScript. Looking back, this greatly
   affected many of my searches and google inqueries as I was restricting
   myself to information that I believed would apply to the template 
   specifically instead of the actual project. In the future, if I am 
   ever to engage in a similar project, I'll be sure to focus more on the
   goal and less on the methods as long as I'm not being restricted. 

{--------- Final Word ---------}

   Overall, I am grateful for this experience. If not for this being part
   of the application process, it would probably have taken me longer to 
   expose myself to javascript AND take on such a time-consuming project.
