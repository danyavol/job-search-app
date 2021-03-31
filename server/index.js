const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================

const template = require('./src/resumeTemplate');

app.post('/create-pdf', (req, res) => {
    let config = {
        format: 'A4',
        orientation: 'portrait',
        zoomFactor: 0.5
    }
    let start = Date.now();
    console.log(req);

    pdf.create(template(req.body), config).toStream((err, stream) => {
        let end = Date.now() - start;
        console.log('created pdf in ' + end/1000 + 's');

        stream.pipe(res);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));