describe('client', ()=> {
  it('promisify', (done)=> {
    var mysql = require('../');
    //@todo: Add mock
    var client = mysql.connect();

    client.queryAsync('SELECT * FROM test LIMIT 0,1').then(console.log).tap(done);
  });

  it.only('handle errors', (done)=> {
    var mysql = require('../');
    var client = mysql.connect({
      host: 'localhost',
      user: 'root',
      password: 'fc24*',
      database: 'test',
      table: 'test'
    });

    client.queryAsync('INSERT INTO `test` SET ?', {_id: 1}).then(console.log).catch(console.log);
  });

});
