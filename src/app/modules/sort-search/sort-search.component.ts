import { Component, OnInit } from '@angular/core';
import { SortSearchService } from './sort-search.service';
import { Book, BooksService } from '../book-shelf/books.service';

@Component({
  selector: 'app-sort-search',
  templateUrl: './sort-search.component.html',
  styleUrls: ['./sort-search.component.css']
})
export class SortSearchComponent implements OnInit {
  sortedBooks: Book[]; /** variable to store sorted and filtered list of books */
  bookShelf: Book[]; /** variable to store original source list */
  sortBy; /** variable to store sort by variable */
  noOfPages = 0; /** filter option */
  userMsg = false; /** to display message to the user */
  userNotification: string;

  constructor(private sortByService: SortSearchService, private booksService: BooksService) { }

  ngOnInit() {
    this.bookShelf = this.booksService.getBookShelf();
    this.sortedBooks = this.bookShelf;
  }

  onSort(options) {
    if (options.target.value) {
      this.sortByService.setSortBy(options.target.value);
    }
    this.sortBy = options.target.value;
    /** to perform sorting on the filtered items */
    this.sortedBooks = (this.sortedBooks.length || this.noOfPages) ? this.sortedBooks : this.bookShelf;
    this.checkSortBy();
  }

  /**
   * checks sort by parameter and calls respective sorting method
   * called on click sort radio button
   * and after filter is applied if sortBy field is not empty. Therefore, user can see sorted filtered list
   */
  checkSortBy() {
    if (this.sortBy === 'date') {
      this.sortByDate();
    } else if (this.sortBy === 'pages') {
      this.sortByPages();
    } else {
      this.sortByAuthor();
    }
  }

  /**
   * method to sort books list by release date of the book
   */
  sortByDate() {
    this.sortedBooks = this.sortedBooks.sort((a, b) => {
      const sortA = new Date('01/' + a.releaseDate).toLocaleDateString();
      const sortB = new Date('01/' + b.releaseDate).toLocaleDateString();
      let comparison = 0;
      if (sortA > sortB) {
        comparison = 1;
      } else if (sortA < sortB) {
        comparison = -1;
      }
      return comparison;
    });
  }

  /**
   * method to sort books list by number of pages
   */
  sortByPages() {
    this.sortedBooks = this.sortedBooks.sort((a, b) => {
      return a.pages - b.pages;
    });
  }

  /**
   * method to sort books list by author name
   */
  sortByAuthor() {
    this.sortedBooks = this.sortedBooks.sort((a, b) => {
      const sortA = a.author.toUpperCase();
      const sortB = b.author.toUpperCase();
      let comparison = 0;
      if (sortA > sortB) {
        comparison = 1;
      } else if (sortA < sortB) {
        comparison = -1;
      }
      return comparison;
    });
  }

  /**
   * @param pages user entered pages
   */
  showOnly(pages) {
    if (pages === '0' || !pages || pages === '') {
      return this.sortedBooks;
      // tslint:disable-next-line: radix
    } else if (isNaN(parseInt(pages))) {
      this.userMsg = true;
      this.userNotification = 'Search value must be a number. Please insert a valid search value';
    } else {
      this.searchBooksList(pages);
    }
  }

  /**
   * method to filter the user enter pages against the source booksList
   * filter option will be performed on sorted list of books, therefore, both sort and filter will be applied to the binding source
   * @param pages user entered pages
   */
  searchBooksList(pages: string) {
    // tslint:disable-next-line: radix
    this.noOfPages = parseInt(pages);
    this.userMsg = false;
    this.sortedBooks = this.bookShelf.filter((books) => {
      return books.pages <= this.noOfPages;
    });

    /** after filter sorting again to show sorted and filtered list to the user */
    this.checkSortBy();
    this.checkUserMessage();
  }

  /**
   * method to check user message
   */
  checkUserMessage() {
    /** displays message if filtered list is empty */
    this.displayUserMessage(this.sortedBooks.length <= 0, 'Please modify your search options to see the list of available books');
  }

  /**
   * method to display user message if the books list is empty
   * @param isDisplay boolean value to display user message
   * @param message user message
   */
  displayUserMessage(isDisplay: boolean, message: string) {
    if (isDisplay) {
      this.userMsg = true;
      this.userNotification = message;
    } else {
      this.userMsg = false;
    }
  }

}
