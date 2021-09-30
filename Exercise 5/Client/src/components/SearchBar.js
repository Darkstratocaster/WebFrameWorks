import React, { Component } from 'react'



export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div>
                <div style={{display: 'flex'}}>
                    Hae <input type="text" onChange={ this.props.updateSearch } value={this.props.searchString}/>
                </div>
            </div>
        )
    }
}


