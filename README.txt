# club-connect
Club and extracurricular hub web app for McGill students 
Running Website: https://my-clubs.netlify.app

# How to Run Local:

### Frontend:
- npm install -> install dependencies
- npm run start -> run the local server (default port 3000)

### Backend
#### Backend Node.JS server for the club connect web application
- npm install -> install dependencies
- npm run start -> run the local backend server (default port 5000)

# Task Distribution

**Holden Folk (Front-end Dev)**

1. Dashboard
   - Created the dashboard to display your followed club feed
   - Calls on the following clubs API
2. Club Page
    - Created a page to display the individual club profile and post feed
    - Calls on the get club API and the follow API to follow a club
        - Also has the create post page and functionality to add a post to the club feed
3. Login/Sign-up
    - Created Login/Sign-up pages and functionality
    - Calls the respective APIs to create a profile and retrieve/store the JWT authentication token in local storage
4. Profile Page
   - Created the profile page to view/modify profile information
   - Also contains a logout button to remove JWT from local storage
   - Also contains the delete profile functionality to remove the user from the database

**David Holcer (Backend Dev)**

Created API routes, models, and controllers to maintain MongoDB database for functionality regarding
1. User registration and login, ensuring necessary specified fields are included.
    - User registration based on JWT token using RSA 256 encryption and 48hr expiry.
2. Keeping track of Clubs followed per user via ClubsFollowed table
3. Club creation, retreiving club by ID.

4. Authentication middleware to require protected API calls to neccessitate user authenticated JWT token.

**Mina Dobrijevic (Backend Dev)**

Created API routes, models, and controllers to maintain MongoDB database for functionality regarding
1. Moderator creation. 
2. Post creation, deletion, editing, and retrieving posts for user dashboard and club directory. 
3. User deletion. 
4. Club search by name and edit club information. 


**Torin Andrews (Front-end Dev)**

1. Club Creation Page
    - Created the functionality to add a club + layout design
    - Added the ability to upload local files as images for Logo and Banner:
        * Used Cloudinary API -> transforming images to correct dimensions -> returning URL to image and storing it in the database
2. Search Page
    - Added search page and search functionality to the website.
3. Contact Us page, About Us page, and Landing page design.
