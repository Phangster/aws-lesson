const express = require('express');
const pg = require('pg');
const app = express();

const config = {
  user: 'master',
  password: 'testing123',
  host: 'secondtestdb.cwrecbvhyp5w.us-east-2.rds.amazonaws.com',
  database: 'project4',
  port: 5432
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

app.get('*', (req, res) =>{
	const queryString = "SELECT * FROM countries";
	pool.query(queryString, (err, result) => {
    	if (err) {
    		console.error('List countries error:', err.stack);
   		}
   		
    	res.send(result.rows);
	});
})

app.listen(80, () => console.log('Listen port: 80'));