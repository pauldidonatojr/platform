var express = require('express')

const app = express();
app.use(express.static('public'));
app.listen(8000, () => {
    console.log('Server listening on Localhost:8000')
});
