/**
 * Created by User on 1/27/2017.
 */
import React, {Component} from 'react';

// STAGE 1
// This could be a simple functional Component
// let functionalSearchBar = () => {
//     return(
//         <div>
//             <input type="text" placeholder="This is some text"/>
//         </div>
//     )
// };
//
// // STAGE 2
// class SearchBar extends Component{
//
//     render(){
//         return (
//             <div>
//                 {/*<input type="text" onChange={this.onInputChange}/>*/}
//                 {/* or we can do this ---> */}
//                 <input type="text" onChange={(e) => {console.log(e.target.value);}}/>
//                 {/*<button type="button" type="submit" value="Click me" onClick={this.onClickChange}>Click Me!</button>*/}
//             </div>
//         );
//     }
//     onInputChange(e){
//         console.log(e.target.value);
//         inputText = e.target.value;
//     }
//     // onClickChange(){
//     //     alert('You typed ' + inputText);
//     // }
// };
//
// // STAGE 3
// class SearchBar extends Component{
//     constructor(props){
//         super(props);
//         this.state = {term: ''};
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" onChange = {event => this.setState({term: event.target.value})} />
//                 This is the state : {this.state.term}
//             </div>
//         );
//     }
// };


// STAGE 4
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    render(){
        return (
            <div>
                <input
                  className="form-control input-l"
                  type="text"
                  onChange = {(event) => this.onInputChange(event.target.value)}
                />
                <button className="btn btn-primary" onClick= {() => this.onSearchInput(this.state.term)}>Click</button>
            </div>
        );
        // return <input type="text" onChange={this.onInputChange}/>
    }

    onInputChange(term){
       this.setState({term});
        this.props.onSearchInput(term);
    }
};


export default SearchBar;
