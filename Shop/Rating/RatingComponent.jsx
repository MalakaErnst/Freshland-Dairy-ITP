import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RatingDataService from '../../API/RatingDataService.js';

function RatingComponent(Product) {

    const RatingSubmit = (Value) => {

        var customerName = 'saman';
        var showDate = new Date();
        //var dateonly = showDate.getFullYear() +'-'+ showDate.getMonth() +'-'+ showDate.getDate()

        let rating = { customerName: customerName, productName: Product.Product, datePost: showDate, rating: Value }
        RatingDataService.addRating(rating)
        
    } 

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component='h6'>Rate Product</Typography>
                <Rating
                    name="half-rating"
                    precision={0.5}
                    onChange={(event, newValue) => {
                        RatingSubmit(newValue);
                    }}
                />
            </Box>
        </div>
    )
}

export default RatingComponent
