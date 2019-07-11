import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div>
            <Link to={`/portfolio/${props.slug}`}>{props.title}</Link>
        </div>
    );
}