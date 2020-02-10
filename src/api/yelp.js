import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _drFlSJ4RKJtyW4MXO6xN0icLr1Y3XoMCLC_7pmKNlhVQYNURHkG9iZjzOEC5vEv3RdNsRLA7VfB0jWsd7sXaJGPi6TYkhcefOJkATsyYJZ7Yz5OgV4AUMWmAVM7XnYx '
    }
})