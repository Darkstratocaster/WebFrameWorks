import React from 'react'
import styles from './TopBar.module.css'

export default function Logo(props) {
    return (
        <div className={styles.Logo}>
            {props.logoteksti}
        </div>
    )
}
