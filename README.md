# Blogify Website  

## Live Link
<a href="https://blogify-o7go.onrender.com">https://blogify-o7go.onrender.com</a>

Blogify is a straightforward web application built using Node.js and Express, aimed at enabling users to effortlessly create and manage their blogs. The application incorporates user authentication, providing a secure environment for individuals to register, log in, and craft personalized blog posts.

## Features

- **User Authentication:** Users can securely register, log in, and access their accounts. Authentication is managed using JSON Web Tokens (JWT) stored as cookies.

- **Blog Creation and Management:** Authenticated users can create, edit, and delete their blog posts. All blog data is stored in a MongoDB database.

- **Static Files:** The application serves static files, such as images or stylesheets, from the 'public' directory.

## Technologies Used

- **Node.js:** The server-side runtime for executing JavaScript code.

- **Express:** A web application framework for Node.js, simplifying the creation of robust web applications.

- **MongoDB:** A NoSQL database used to store and manage blog data.

- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with the MongoDB database.

- **EJS:** A template engine for rendering dynamic HTML content.

## Project Structure

- **Models:** The 'models' directory contains the schema definition for the 'Blog' model, representing the structure of blog posts.

- **Routes:** The 'routes' directory includes route handlers for user and blog-related actions.

- **Middleware:** The 'middleware' directory contains authentication middleware for ensuring secure access to certain routes.

- **Views:** EJS templates for rendering dynamic HTML content are stored in the 'views' directory.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file with the following variables:
   - `MONGO_URL`: The URL for your MongoDB database.
   - `PORT`: The port number for the server.
4. Run the application using `npm start`.

## Usage

- Visit the homepage to view all blog posts.
- Register or log in to create, edit, or delete your own blog posts.

## Dependencies

- `express`: Web application framework for Node.js.
- `mongoose`: MongoDB ODM for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.
- `cookie-parser`: Parses cookies attached to the client's request.

## Notes

- The application assumes a MongoDB database is available and accessible.

## Contributors

- Priti Ranjan Samal

Feel free to contribute or provide feedback to enhance the functionality and features of Blogify!
