import React from 'react'
import SideContainerObject from './SideContainerObject'

export default function SideContainer() {
    return (
        <div className="SideContainer" style={{ width: '28%' ,height: '80%', paddingBottom: '10px'}}>
            <SideContainerObject otsikko="Luetuimmat"></SideContainerObject>
            <SideContainerObject otsikko="Sää"></SideContainerObject>
        </div>
    )
}
