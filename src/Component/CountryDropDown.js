import React, {Component} from 'react'
import DataComponent from './DataComponent'

const CountryName = ({data, selected=""}) =>{
    return <select className="people-list" defaultValue={selected}>
        {data.map(({name},i)=>
            <option key={i} value={name}>{name}</option>
        )}
    </select>
}

const CountryDropDown = DataComponent(
    CountryName,
    "https://restcountries.eu/rest/v1/all"
    )

export default CountryDropDown