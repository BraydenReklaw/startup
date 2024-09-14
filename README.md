# startup
Startup application for BYU cs260 2024

## Startup Specification

### Elevator Pitch

While the base 10 system is the foundation of all math taught to kids, learning the base 2 system can be difficult as people start to learn programming. This simple game system will allow the common user to learn the basics of the binary number system in a easy, fun way, being shown a random number and being prompted to give the binary representation. Given a minute to do so, every correct answer will increase their score and add 10 seconds to their time, allowing competition with other players, top scores being displayed on a leaderboard, and users pinged with completed times as they come in. A random fun fact is displayed upon completion of game.

### Design

![BinaryBlast](BinaryBlast.jpg)

### Technologies

The following technologies will be used in these ways:

- HTML - Correct HTML structure, allowing for 3 pages (login, game, leaderboard); hyperlinks between each
- CSS - Styling that allows for different sizes. Light matrix aesthetic with simple yet nice colors and contrast
- React - contains Javascript meshed with the CSS and HTML. Allows for login, gameplay, leaderboard updates, and 
- Service - Backend service provided for retrieving and posting leaderboard data and a random fun fact provided by an API.
- DB/ Login - Stores Users and game times in database. Register and login users, credentials being stored and game unable to be played without authentication.
- Websocket - actively updates leaderboard, gives player a note of other active players achieved score upon their completion
