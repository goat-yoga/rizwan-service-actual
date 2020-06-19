const db = require('./index.js');

let model = {
  getNavComponents: (something) => {
    conn.then(client => client.collection('search').find({}).toArray((err, docs) => {
      if (err) { console.error(err) }
      res.send(JSON.stringify(docs))
    })
    );
  }
}