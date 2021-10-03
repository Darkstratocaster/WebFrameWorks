import React from 'react'

class AdminView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newRecordName: "",
      newRecordBand: "",
      newRecordType: "",
      newRecordPrice: "",
      newRecordRating: "",
      newRecordImage: ""
    }
  }

  addNewRecord = () => {
    this.props.addNewRecord(this.state.newRecordName, this.state.newRecordBand, this.state.newRecordType, this.state.newRecordPrice, this.state.newRecordRating, this.state.newRecordImage);
  }

  render() {
    return (
      <div>
        <div>
            Add new record
            <div>
              Name <input type="text" onChange={ (event) => this.setState({ newRecordName: event.target.value }) } />
            </div>
            <div>
              Band <input type="text" onChange={ (event) => this.setState({ newRecordBand: event.target.value }) } />
            </div>
            <div>
              Type <input type="text" onChange={ (event) => this.setState({ newRecordType: event.target.value }) } />
            </div>
            <div>
              Price <input type="text" onChange={ (event) => this.setState({ newRecordPrice: event.target.value }) } />
            </div>
            <div>
              Rating <input type="text" onChange={ (event) => this.setState({ newRecordRating: event.target.value }) } />
            </div>
            <div>
              Image <input type="text" onChange={ (event) => this.setState({ newRecordImage: event.target.value }) } />
            </div>
            <button onClick={ this.addNewRecord }>Add Record</button>

          </div>
          <button onClick={ this.props.disableAdminMode }>Disable Admin Mode</button>
      </div>
    )
  }
}

export default AdminView;
