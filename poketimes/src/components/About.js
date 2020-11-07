import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed neque, tempore eum perspiciatis nisi laboriosam ipsa dolor voluptatem consectetur veritatis voluptas minima suscipit architecto omnis, error mollitia id pariatur!</p>
        </div>
    )
}

export default Rainbow(About);