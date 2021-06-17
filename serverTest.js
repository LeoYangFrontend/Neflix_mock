const axios = require('axios');

const getMyList = async () => {
    const { data } = await axios.get('http://localhost:3004/mylist');
    return data;
};

const fetchData = async () => {
    // const res = await Promise.all([
    //     axios.get('http://localhost:3004/mylist'),
    //     axios.get('http://localhost:3004/recommendations'),
    // ]);
    // console.log(res.map((e) => e.data));
    const res = await Promise.all([
        await axios.post('http://localhost:3004/mylist', {
            id: '4',
            title: 'Family Guy',
            img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp',
        }),
        await axios.delete(`http://localhost:3004/recommendations/4`),
    ]);

    console.log(res[0].data, res[1].data);
    // console.log(await getMyList());
};

fetchData();
