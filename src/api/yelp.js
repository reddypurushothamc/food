import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        'Bearer hhI1yN8apvF_97By08l1jlDA2rF8sKix23wY0tBERaHhm-WJjjyZ7a1NoJXxdqMKK9CyUFjRg8ppT274bmwzEWiH84jMN0FtL4Cmu9dgXh9Cv2QzXen9I4e5QXj8X3Yx'
    }
});