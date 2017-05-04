var dbFactory = require('../../app/db');

describe('test db', () => {
  it('should create a db', () => {
	  dbFactory();
  });
});