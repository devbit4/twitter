import express from 'express';
import 'express-async-errors';

let tweets = [
  {
    id: '1',
    text: '테스트코드1',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: '2',
    text: '테스트코드2',
    createdAt: Date.now().toString(),
    name: 'Joy',
    username: 'joy',
  },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

//GET /tweets/id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id${id} not found` });
  }
});

// router.get('/', (req, res, next) => {});

//PUT /tweets/id

//DELETE /tweets/id
export default router;
