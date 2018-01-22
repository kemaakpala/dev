import React , {Component} from 'react';
import {connect} from "react-redux";

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"></li>
            );
        });
    }
    
    render() {
        return ( 
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

/*
 * Container: this is a smart component.
 * it has a direct connection to the state managed by redux.
*/

// when ever our state changes the mapStateToProps container will automatically rerender.

function mapStateToProps (state) {
    /*
     * Whatever is returned will show up as props.
     * Inside of BookList
    */
    return {
        books: state.books
    }
}

// when ever the application state changes the object in the state will be passed as this.props.state
export default connect(mapStateToProps)(BookList);
