import React from 'react';

const Country = (props) => {
const {name, population, region, flag} = props.country

const flagStyle = {
    height:"100px"
}
const countryStyle = {
    border : "1px solid lightgrey",
    margin : "10px",
    padding : "5px"
}
    return (
        <div style={countryStyle}>
            <h3>{name}</h3>
            <img src={flag} style={flagStyle} />
            <h4><small>{population}</small></h4>
            <h4><small>{region}</small></h4>
            <button onClick={()=>props.handleAddCountry(props.country)} >country added</button>
            
        </div>
    );
};

export default Country;