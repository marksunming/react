import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed neque, tempore eum perspiciatis nisi laboriosam ipsa dolor voluptatem consectetur veritatis voluptas minima suscipit architecto omnis, error mollitia id pariatur!</p>
            </div>
        )
    }
}

export default Home;