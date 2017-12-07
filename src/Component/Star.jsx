import  propTypes from 'prop-types';
import '../Stylesheets/Star.scss'
import  React from 'react'
const Star  = ({selected=false, onClick=f=>f})=>
    <div className={(selected) ? "star selected" : "star"}
         onClick={onClick}>
    </div>
Star.propTypes = {
    selected:propTypes.bool,
    onClick: propTypes.func
}
export  default Star