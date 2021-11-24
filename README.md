Good afternoon,

Thank you for giving me the opportunity to take the assessment. Please find below the steps I took in approaching the exercise.
1.	I initiated the web application with create-react-app as a boilerplate, a jumping off point for the application
2.	I studied the given wireframe and used CSS and JSX to mirror the wireframe to the best of my abilities. I have also used media queries to make the app fully responsive on all devices. Also added a few transitions on the addon buttons to make the user aware which addon he has selected (I have made a few changes between the UI of mobile/tablet and desktop for a better experience to the user) 
3.	After styling the app, I created the necessary components and imported the data (db.json) to dynamically render the appropriate information. 
4.	I used useState hook the store the variables and keep track of the addons prices and which one of them the user had selected.
5.	With the help of component props I moved the addons prices to the parent component and added the initial price of the quote, giving me a grand total which is dynamically rendered in the interface (A better way to approach this matter was to use useContext but given that I only had 3 components, “prop-drilling” wasn’t really an issue)
6.	Added functionality to monthly / annually button.
7.	Tested the app to see if everything is working and pushed it to github and netlify(for a view of the final product). 


Link to netlify app: https://elated-mcclintock-c211ee.netlify.app/

