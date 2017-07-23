# ArtSEEN NYC #

[ArtSEEN NYC](https://artseennyc.netlify.com) is an online art community that helps users to connect with other art patrons in the New York City art scene by facilitating discussions about current exhibitions.

It is a responsive, full-stack app (MERN). The server application is in a [separate repository](https://github.com/jasonlaning/artseen-nyc-api) and is hosted separately.

## Features ##

Users can:

- Try a demo account (unique instances with pre-populated settings; commenting is disabled for demo accounts)
- Sign up for a unique user account, login/logout.
- Edit profile settings for profile image, location, and "about".
- Search current art exhibitions in New York (provided by the NY Art Beat API), and initiate a new discussion by posting a comment.
- View a feed of "All Discussions" that are sorted according to those most recently commented on.
- Click on discussion links to view an individual discussion and add comments.
- View user profiles in comment sections and follow or unfollow other users.
- View a "Community Activity" feed that shows the most recent comments by 'followed' users (including the user's own comments). Profiles are also clickable in this section in order to follow or unfollow, and the listings are sorted by most recent at the top.
- Community Activity and All Discussions feeds display 10 entries at a time, and the user can click "load more entries" at the end of each feed in order to load another 10.
- The layout is fully responsive, and the UI is optimized for mobile, tablet and desktop.

## Screenshots ##

![](https://raw.githubusercontent.com/jasonlaning/artseen-nyc-client/master/public/screenshots-artseennyc.jpg)

## Technology ##

### Front End ###
- React
- Redux
- Enzyme and Axios Mock Adapter (for tests)
- Axios (for ajax requests)
- Continuous integration and deployment with Travis CI
- HTML5
- CSS3

Also uses Moment for date manipulation, React Dropzone for uploading images, and React Stickynode for sticking the nav bar to the top of the browser on scroll.

### Back End ###

The back end is in a [separate repository](https://github.com/jasonlaning/artseen-nyc-api)

- Node.js + Express.js
- MongoDB
- Mocha + Chai (for tests)
- Passport for securing endpoints for authorized users
- bcrypt.js for encrypting passwords
- Continuous integration and deployment with Travis CI


