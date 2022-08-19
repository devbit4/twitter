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

export function getAll() {
  return tweets;
}

export function getAllByUserName(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    name,
    username,
    createdAt: new Date(),
  };

  tweets = [tweet, ...tweets];

  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);

  if (tweet) {
    tweet.text = text;
  }

  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
