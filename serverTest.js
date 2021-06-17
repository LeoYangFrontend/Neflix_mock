const axios = require('axios');

const fetchData = async () => {
    const { data } = await axios.get('http://localhost:3004/mylist');
    console.log(data);
    // await axios.post('http://localhost:3004/mylist', {
    //     id: 100,
    //     title: 'test',
    //     img: 'test',
    // });
    await axios.delete('http://localhost:3004/mylist/100');
};

fetchData();
