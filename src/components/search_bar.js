import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    } 

    render() {
        return(
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)} onKeyPress={this.onInputEnter} />
                <button onClick={this.onInputButtonClick}>Search</button>
            </div>

        );
    }

    onInputChange(term) {
        this.setState({term});
        
    }

    onInputEnter = (event) => {
        if(event.key === 'Enter') {
            this.props.onSearchTermChange(this.state.term);
        }
    }

    onInputButtonClick = () => {
        this.props.onSearchTermChange(this.state.term);
    }
}
// const SearchBar = () => {
//         return (
//             <input type="text" />
//         );
// }

export default SearchBar;


