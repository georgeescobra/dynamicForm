Started at 9:03pm Aug 4
Ended at 12:00 AM Aug 5

# To Run
$ cd './dynamicform/src'
$ npm run start

# What I was able to accomplish
    - I was able to pretty much do everything that the assignment asked for
    - Created in React.js
        - dynamically render based on JSON data
            - the JSON configs are in /src/jsonTests
            - Wasn't sure if it was supposed to be read from a json or just inside the program itself as an JS object
            - I felt like reading it as a JSON was the better route just because it is a lot easier to update a JSON
              and one line of code than it is to update various lines of code for the object.
            - To change the config file, change the import in Formpage.json
            - the submit button returns the JS object storing the form data and console.log() the data as well

# What I would be able to accomplish given more time
    - If given more time I could have implemented the validation part of the assignment
        - This form validation should happen onClick() with the submit button
            - A couple of ways to have implemented it (open to better suggestions, this is just off the top of my head):
                - If there were any conditionals I would keep track of the conditional.name in a list
                  and inside the submit function go through the list and run the conditional.function (i.e. show_if in test3.json)
                  depending on whether or not the form of the conditional can be empty I would throw a warning if data does not meet the condition
                - The other way is in the comments in Formpage.js: If somehow I am able to check the component state and see if hidden if true or false
                  Depdending on whether the state is hidden and the data passed would dictate whether or not I throw a validation error
    - I would just make it much more visually appealing 
        - checkboxes for example:
            - I would render a different component if checkboxes are involved
            - Usually checkboxes are very close to the description [] check if yes, but my implementation was not able to take that into account because of time
            - I would also make the validation a lot easier to notice with something like a highlighted red input box with an asterix to show why it could possibly be wrong
            - Also I probably would have a little pop up on the side showing all the forms that were either skipped that should not have been
                - I feel like for very long forms it may be hard for people to see what could be causing the issue
        - Would also change the width of the input boxes to be a lot more visually appealing, right now it is unnecessarily long
        - Make the submit button visually more appealing
        - Make it much production ready (with a logo, better color scheme that matches company theme, descriptions, etc.)

