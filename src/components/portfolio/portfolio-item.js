import React from 'react';
import { Link } from 'react-router-dom';

export default function(prop) {
        //data that we'll need:
        // -background image: thumb_image_url
        //-logo
        //-description: description
        //-id: id

    //get the thumb_image_url and logo!!!!!
    //const { id, description, thumb_image_url, logo } = props.item;
    return (
        <div>
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>{props.title}</Link>
        </div>
    );
}