const models = require('express-cassandra');

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
models.setDirectory(__dirname + '/models').bind(
  {
    clientOptions: {
      contactPoints: ['172.18.0.3/16'],
      protocolOptions: { port: 9042 },
      keyspace: 'mykeyspace',
      queryOptions: { consistency: models.consistencies.one },
    },
    ormOptions: {
      defaultReplicationStrategy: {
        class: 'SimpleStrategy',
        replication_factor: 1,
      },
      migration: 'safe',
    },
  },
  function (err) {
    if (err) throw err;

    // You'll now have a `person` table in cassandra created against the model
    // schema you've defined earlier and you can now access the model instance
    // in `models.instance.Person` object containing supported orm operations.
  }
);

// contactPoints: ['172.18.0.3/16'],
// protocolOptions: { port: 9042 },
