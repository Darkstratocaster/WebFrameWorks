import React, { useState } from 'react'

export default function AdminView(props) {

  const [newItemName, setNewItemName] = useState("");
  const [newItemBand, setNewItemBand] = useState("");
  const [newItemType, setNewItemType] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemRating, setNewItemRating] = useState("");
  const [newItemImage, setNewItemImage] = useState("");

  const addNewItem = () => {
    props.addNewItem(newItemName, newItemBand, newItemType, newItemPrice, newItemRating, newItemImage);
  }

  const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  }

  return (
    <div>
      <div>
          <h1>Add new item</h1>
          <div>
            Name <input type="text" onChange={ (event) => setNewItemName(event.target.value) } />
          </div>
          <div>
            Band <input type="text" onChange={ (event) => setNewItemBand(event.target.value) } />
          </div>
          <div>
            Type <input type="text" onChange={ (event) => setNewItemType(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
          </div>
          <div>
            Rating <input type="text" onChange={ (event) => setNewItemRating(event.target.value) } />
          </div>
          <div>
            Image <input type="text" onChange={ (event) => setNewItemImage(event.target.value) } />
          </div>
          <button onClick={ addNewItem }>Add Item</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>List of records</h1>
        { props.records.map((record, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(record.id)}>X</button> {record.name}, {record.band}, {record.type} {record.price}, {record.rating}, {record.image}
          </div>)}
    </div>
  )
}
