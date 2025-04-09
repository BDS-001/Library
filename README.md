# My Library - Book Tracking App

A simple web application to track and manage your book collection. This project allows users to add books to their virtual library, toggle read status, and remove books when needed.

## Features

- **Add New Books**: Enter book details including title, author, page count, and read status
- **Track Reading Progress**: Toggle the read status of any book with a single click
- **Remove Books**: Easily remove books from your library
- **Persistent Storage**: Your library is saved between sessions (coming soon)
- **Form Validation**: Input validation ensures all required information is provided

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Object-Oriented Programming principles

## Project Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling for the application
- `library.js` - JavaScript functionality including Book class and library management

## How It Works

The application uses a `Book` class to create book objects with properties for title, author, page count, and read status. Each book includes a method to toggle its read status.

Books are stored in an array called `myLibrary`, and the display is dynamically generated based on the contents of this array.

## Usage

1. Click "Add New Book" to open the form
2. Fill in all required fields:
   - Book Title
   - Author
   - Page Count
   - Read Status (Yes/No)
3. Click "Submit" to add the book to your library
4. Use the "Toggle" button to change read status
5. Use the "REMOVE" button to delete a book from your library

## Future Enhancements

- Local storage implementation to persist data
- Sorting and filtering options
- Book cover image upload
- Search functionality
- Reading statistics and progress tracking
- User accounts and cloud synchronization

## Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/my-library.git
```

2. Open `index.html` in your browser

No build process or dependencies required!

## License

[MIT License](LICENSE.md)
