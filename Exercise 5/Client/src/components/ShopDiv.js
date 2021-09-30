import React from 'react'
import './ShopDiv.css'
import Products from './Products'

export default function ShopDiv(props) {
    return (
        <div className="ShopDiv">
            {
                props.records.map(record => <Products key={record.id} {...record} />)
            }
        </div>
    )
}
