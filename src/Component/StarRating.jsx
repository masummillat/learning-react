import propTypes from 'prop-types'
import  Star from './Star';
import  React from 'react'


const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => onRate(i+1)}/>
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>

StarRating.propTypes = {
    starsSelected: propTypes.number,
    totalStars: propTypes.number,
    onRate: propTypes.func
}

export default StarRating