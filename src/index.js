require('dotenv').config();
const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
const cors = require('cors');

const PORT = process.env.PORT || 4000
const useRouter = require('./routes');

app.use(cors());
app.options('*', cors())

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));

app.use(express.json());
app.use(fileUpload());

require('./database')

useRouter(app);


app.listen(PORT, () => console.log('Listen on http://localhost:' + PORT));