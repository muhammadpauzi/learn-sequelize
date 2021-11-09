const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})