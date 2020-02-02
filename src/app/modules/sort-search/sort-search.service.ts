import { Injectable } from '@angular/core';

@Injectable()
export class SortSearchService {
    private sortByAuthor = false;
    private sortByPages = false;
    private sortByDate = false;
    constructor() {
    }
    setSortBy(sortBy) {
        this.sortByAuthor = sortBy === 'author';
        this.sortByPages = sortBy === 'pages';
        this.sortByDate = sortBy === 'date';
    }
    getSortBy() {
        if (this.sortByPages) {
            return this.sortByPages;
        } else if (this.sortByDate) {
            return this.sortByDate;
        } else {
            return this.sortByAuthor;
        }
    }
}
