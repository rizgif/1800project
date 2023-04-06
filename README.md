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
└── login.html
├── eachLocation.html               # landing HTML file, this is what users see when you come to url
└── review.html
├── main.html               # landing HTML file, this is what users see when you come to url
└── weather_app.html
├── profile.html               # landing HTML file, this is what users see when you come to url
└── general_info.html
└── heatstroke.html
├── dehydration.html               # landing HTML file, this is what users see when you come to url
└── emergency_contact.html
├── 404.html               # landing HTML file, this is what users see when you come to url
└── firebase.json
└── .firebaserc
├── firestore.indexes.json               # landing HTML file, this is what users see when you come to url
└── firestore.rules
└── README.md


It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /advisor.svg             # https://freesvg.org/sv
    /dehydration_img1.jpeg   # https://pixabay.com
    /dehydration_img2.jpeg   # https://pixabay.com
    /dehydration_img3.jpeg   # https://pixabay.com
    /emergency-call.svg      # https://freesvg.org/sv
    /emergency.svg           # https://freesvg.org/sv
    fraserhealth.jpg         # https://www2.gov.bc.ca/gov/content/data/geographic-data-services/land-use/
                               administrative-boundaries/health-boundaries
    heatprologo.png          # https://www.flaticon.com
    heatstroke_img1.png      # https://pixabay.com
    heatstroke_img2.jpeg     # https://pixabay.com
    heatstroke_img3.webp     # https://pixabay.com
    info.png                 # https://pixabay.com
    interiorhealth.jpg       # https://www2.gov.bc.ca/gov/content/data/geographic-data-services/land-use/
                               administrative-boundaries/health-boundaries
    islandhealth.jpg         # https://www2.gov.bc.ca/gov/content/data/geographic-data-services/land-use/
                               administrative-boundaries/health-boundaries
    logo2.jpg                # https://looka.com
    menu.png                 # https://www.flaticon.com   
    mu.png                   # https://www.flaticon.com
    northernhealth.jpg       # https://www2.gov.bc.ca/gov/content/data/geographic-data-services/land-use/
                               administrative-boundaries/health-boundaries
    personal.svg             # https://freesvg.org/sv
    phone-call.svg           # https://freesvg.org/sv
    public.svg               # https://freesvg.org/sv
    vancouver_island.png     # https://www2.gov.bc.ca/gov/content/data/geographic-data-services/land-use/
                               administrative-boundaries/health-boundaries
    vancouver.jpg            # https://www2.gov.bc.ca/gov/content/data/geographic-data-services/land-use/
                               administrative-boundaries/health-boundaries
├── scripts                  # Folder for scripts
    /blah.js                 # 
├── styles                   # Folder for styles
    /eachLocation.css        # style for the each location page.
    /emergency.css           # style for the emergency page.
    /footer.css              # style for the footer.html.
    /general_info.css        # style for the dehydration.html and heatstroke.html.
    /index.css               # style for the index page.
    /login.css               # style for the login page.
    /main.css                # style for the main page.
    /nav2.css                # style for the nav.html.
    /profile.css             # style for the user profile page.
    /review_style.css        # style for the temperature report page.
    /style.css               # style for the heatpro app.
    /weather_style.css       # style for the weather api.

```


