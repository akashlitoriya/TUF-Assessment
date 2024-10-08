const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bannerRoutes = require('./routes/banner');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.use('/api/v1', bannerRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
