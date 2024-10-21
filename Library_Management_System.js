// Create a Book Class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Create a Section Class

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.isValidBook(book)) {
            this.books.push(book);
        } else {
            console.log("Error: Invalid book object. Cannot add to the section.");
        }
    }

    isValidBook(book) {
        return book 
            && typeof book.title === 'string'
            && typeof book.author === 'string'
            && typeof book.ISBN === 'string'
            && typeof book.isAvailable === 'boolean';
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    listBooks() {
        return this.books.map(book => `${book.title} - ${book.isAvailable ? 'Available' : 'Not Available'}`).join('\n');
    }
}

// Create Section class to manage books and availability

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} has borrowed "${book.title}".`);
        } else {
            console.log(`Sorry, "${book.title}" is not available for borrowing.`);
        }
    }

    returnBook(book) {
        book.isAvailable = true;
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        console.log(`${this.name} has returned "${book.title}".`);
    }
}