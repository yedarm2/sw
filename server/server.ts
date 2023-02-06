import axios from 'axios';
import * as express from 'express';

const app = express();

app.get('/posts', async (req, res) => {
	console.log('호출됨');
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	res.json(response.data);
	res.end();
});

app.listen(3001, () => {
	console.log('서버 완료');
});
