import AvatarImage from '../commons/AvatarImage';
import React from 'react';

export default function Testimonial({ item }) {
    return (
        <>
            <AvatarImage img={item.img}
                            alt={item.alt}
                            style="testimonial-img" />
            <div class="testimonial-text">
                <p>{item.description}</p>
                <p><a href="#">
                    <span class="testimonial-text-name">{item.name}</span>
                    <span class="testimonial-text-company">/ {item.company}</span></a></p>
            </div>
        </>
    );
}

