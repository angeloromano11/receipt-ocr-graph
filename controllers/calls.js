const models = require('express-cassandra');
/*sendData = () => {
  const client = new cassandra.Client({
    contactPoints: ['127.0.0.1:9042'],
    localDataCenter: 'node1',
  });

  client.connect(function (err) {
    assert.ifError(err);
    console.log('error from the connection with the cluster');
  });
};
*/
sendData = () => {
  const john = new models.instance.Person({
    name: 'Julieta',
    surname: 'hoy',
    age: 33,
    created: { $db_function: 'toTimestamp(now())' },
  });
  john.save(function (err) {
    if (err) console.log(err);
    else console.log('Yuppiie!');
  });
};

showData = () => {
  models.instance.Person.findOne({ name: 'Capo' }, function (err, john) {
    if (err) {
      console.log(`Registro no encontrado ${err}`);
      return;
    }
    //Note that returned variable john here is an instance of your model,
    //so you can also do john.delete(), john.save() type operations on the instance.
    console.log('Found ' + john.name + ' to be ' + john.age + ' years old!');
  });
};

exports.getPost = function (req, res, next) {
  //res.send(changeText());
  res.send('Message from the getPost, working fine');
  console.log('sending from router');
};

exports.sendJson = function (req, res, next) {
  res.json({ user: 'tobi' });
  res.status(500).json({ error: 'message' });
};

exports.sendData = function (req, res, next) {
  res.send(sendData());
  console.log('sending from router');
};

exports.showData = function (req, res, next) {
  res.send(showData());
  console.log('sending from router');
};
