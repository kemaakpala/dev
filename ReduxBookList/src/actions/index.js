export function selectBook(book) {
    /*
     * SelectBook is an Action Creator, it needs to return an action,
     * an Object with a type property
     */
    
    return {
        type: 'BOOK_SELECTED',
        payload : book
    }
}