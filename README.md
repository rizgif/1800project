# Project Title

## 1. Project Description
Our team is developing a web application to help people to prevent heat-related illnesses, such as heat stroke, with an information system that provides users with extreme heat weather alerts and recommended actions.

## 2. Names of Contributors
List team members and/or short bio's here... 
* Riz Nur Saidy: currest cst term 1 student.
* Yerim Moon: currest cst term 1 student.
* Chelsea Yang: currest cst term 1 student. 
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* OpenWeatherMap API
* images: from pixabay and govement of bc website (the maps for each health authorities)
* fonts: 'Rimouski' from google fonts
* background image: form css gradient website


## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* 
<h1>User login</h1>
<p>
When they login, the app will calculate the geolocation and direct the user to page that will show the health authority region that they are in.
</p>
<p>
On that page, there is a button where users will be able submit feels-like temperature in that specific health authority region 
Users will be directed to a page where they will have have several temperature selections to choose from, which will compares to the actual temperature. After, they will be able to see their reported temperatures.
</p>
<p>
Another key feature of our app is that users are able to see reported temperatures in other health authority regions. 
</p>
<h1>Locations</h1>
<p>From the navigation bar, users will be able to click on Locations. In locations page, all of the local health authority and their regions are listed. Here, we can select any health authority region and see the reports of other individuals. We can also submit our own feelslike temperature report if we happen to be in the same area. </p>
<h1>Other features</h1>
<p>There are other features that include information on heat-related issues such as dehydration and heat stroke. There is also an emergency contact page where people can access emergency numbers. Finally, we have user profile page where users can change his user profile.</p>

## 5. Known Bugs and Limitations
Here are some known bugs:
* There are some console log errors (but not from our code)

Here are some known limitations:
* Weather api is slow
* User cannot delete unwanted temperature reports.

## 6. Features for Future
What we'd like to build in the future:
* Able to adjust the cold temperature
* Delete the temperature report
* Show users on a map
* Not only to BC health authorities
* Link the emergency based on the location of users
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
└── login.html               # login page for the users
├── eachLocation.html        # this is what user will see after they logged in based on the user location. they will click the 
                            button and be directed to the review page. 
└── review.html              # the review page where user will make selection from 5 options as their feel like temperature 
                            compared with the real temperature
├── main.html               # this is the page that includes all 5 locations. so user can choose one and put down their reviews. 
└── weather_app.html        # this is the weather api page, it will be appeared on the review.html and also on the nav bar
├── profile.html               # this is the user profile page where people can edit their personal information. 
└── general_info.html          # this is the general info about how to deal with heat-related diseases. user can come here through 
                            nav bar.  
└── heatstroke.html             # this is the information page about how to deal with heatstroke. 
├── dehydration.html            # this is the information page about how to deal with dehydration. 
└── emergency_contact.html      # this is the information page about how to get emergency contact information when it comes to 
                            extreme hot weather. 
├── 404.html                    # this is the page not found page if anything wrong with the firebase data.
└── firebase.json               # firebase json file contains the information about our firebase heatpro project
└── .firebaserc                 # firebaserc file  this is to specify the Firebase project we want to use when running Firebase 
├── firestore.indexes.json      # firestore.indexes.json file this is to define the indexes for our Cloud Firestore database. 
└── firestore.rules             # firestore.rules file this is to define access rules for our database.
└── README.md                   # readme file this is the document that provides information about our project.


It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /blah.jpg                # Acknowledge source
├── scripts                  # Folder for scripts
    /authentication.js       # Get user current location
                               Initializes firebase UI
                               Write user info to firestore db
    /eachLocation.js         # Display and save location info and
                               populate reports
    /firebaseAPI_heatpro.js  # Configures and initialize firebase db
    /main.js                 # Run contents on main page, write the 
                               health authority region to the database, and display the temperature reports
    /navWeatherApp.js        # Runs weather api in the navigation
                               bar
    /profile.js              # Populate user info into the user 
                               profile page. Runs js for the edit and save button. 
    /review.js               # Gets the user's current location and 
                               translates user temperature input into a numerical format to be stored in the firestore database. 
    /skeleton.js             # Loads skeleton of html pages that 
                               includes navbar and footer. 
    /weatherApp.js           # Runs weather api into the html page. 

├── styles                   # Folder for styles
    /blah.css                # 



```


