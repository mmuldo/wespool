# WesPool

Tired of making desperate and often unfruitful WesAdmits posts when trying to
coordinate a ride to/from Bradley Airport, Meriden train station, or anywhere
else?
Look no further than WesPool, a one-stop-shop for easily finding others who are
headed to the same destination as you on the same day.

## Scripts

Currently, the site doesn't have a domain, so it must be run on you localhost.
To get it running:
1. clone this repo (make sure you're on the `master` branch!!!)
2. install nodejs and npm
3. run `npm install` to locally install dependencies (doesn't actually install
   anything on your computer)
3. run `npm start` to run the site on [http://localhost:3000](http://localhost:3000), viewable in a browser.
4. run `npm run backend` to run the mock backend/database for this project (just
serves up the json file `db.json` on [http://localhost:5000](http://localhost:5000/rides))

## Organization

### Login
To "login" to the site, simply enter an email address into the field and click "login".

### My Rides
This page displays rides you are currently a part of.
You can click on a specific ride to view more details about it.

### Find Ride
This is where you can find rides that have been organized by others.
If you see one that works for you, and it still has room, you can enter your
name and click "join".
After joining a ride, your information will be saved on that ride, even after
you logout.

### Schedule Ride
Here, you can organize your own ride by filling out the details and clicking "schedule".
Rides that you schedule here will be saved to the backend even after you logout.


### Logout
Takes you back to the login screen.

## TODO

 * login with google
 * add filters to "Find Ride" so ppl can search by date, location, etc.
 * improve overall look
 * add functionality for leaving/deleting rides
 * add calender, google maps address, and other fancy form inputs to "Schedule Ride"
 
