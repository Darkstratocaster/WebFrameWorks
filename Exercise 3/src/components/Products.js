import React from 'react'
import styles from './Products.module.css'
import StarRating from './StarRating'

export default function Products(props) {
    return (
        <div className={styles.product}>
            <div>
            <div><img src={`/${props.image}`} /></div>
            <div className={ styles.name }>{props.name}</div>
            <div>{props.band}</div>
            <div>{props.price}€</div>
            <StarRating rating={props.rating}></StarRating>
        </div>
        </div>
    )
}
