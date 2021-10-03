import React, { useState } from 'react'

export default function AdminView(props) {

  const [newRecordName, setNewRecordName] = useState("");
  const [newRecordBand, setNewRecordBand] = useState("");
  const [newRecordType, setNewRecordType] = useState("");
  const [newRecordPrice, setNewRecordPrice] = useState("");
  const [newRecordRating, setNewRecordRating] = useState("");
  const [newRecordImage, setNewRecordImage] = useState("");

  const addNewRecord = () => {
    props.addNewRecord(newRecordName, newRecordBand, newRecordType, newRecordPrice, newRecordRating, newRecordImage);
  }

  const onDeleteRecordClick = (recordId) => {
    console.log("clicked delete for item id " + recordId);
    props.deleteRecord(recordId);
  }

  return (
    <div>
      <div>
          <h1>Add new record</h1>
          <div>
            Name <input type="text" onChange={ (event) => setNewRecordName(event.target.value) } />
          </div>
          <div>
            Band <input type="text" onChange={ (event) => setNewRecordBand(event.target.value) } />
          </div>
          <div>
            Type <input type="text" onChange={ (event) => setNewRecordType(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => setNewRecordPrice(event.target.value) } />
          </div>
          <div>
            Rating <input type="text" onChange={ (event) => setNewRecordRating(event.target.value) } />
          </div>
          <div>
            Image <input type="text" onChange={ (event) => setNewRecordImage(event.target.value) } />
          </div>
          <button onClick={ addNewRecord }>Add Record</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>List of records</h1>
        { props.records.map((record, index) =>
          <div key={index}>
            <button onClick={() => onDeleteRecordClick(record.id)}>X</button> {record.name}, {record.band}, {record.type} {record.price}, {record.rating}, {record.image}
          </div>)}
    </div>
  )
}
