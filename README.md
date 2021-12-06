Following our previous discussion, this branch shows the updated version of the app with the necessary change implemented. Some of the changes include:

1) Solved the logic regarding the total price(It correctly displays the total price with the addons included).
1) Accessing the data from the mock-Api through the fetch() method.
2) Dynamically rendering the data to the app.
3) Solved the styling issues.
4) Moved the <total/> component from bottom to the top of page (on mobile devices) and added a header component (on big devices) which renders onScroll.
5) Added an addon counter which tells the user how many addons he has currently selected.
6) Added a button on bottom left of the application which sends the user to the top of page without having to scroll.
7) Added a "Change Address" feature which allows the user to change the current address.
8) Added a command "npm run dev" which concurrently starts the application and the mock-Api on different ports so that the application can get the data from the Api.
9) Implemented unit testing (At the moment there are a few basic tests but will add more complexity to the tests after learning more about Jest).
