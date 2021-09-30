import React from 'react'
import styles from './TopBar.module.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className={styles.TopBar}>
                <Logo logoteksti="Levyleka"></Logo>
                <SearchBar {...this.props} ></SearchBar>
            </div>
        )
    }
}


export default TopBar;