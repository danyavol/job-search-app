module.exports = function resumeTemplate() {
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>HTML To PDF Template</title>
                <style>
                    body {
                        background: gray;
                    }
                    h2 {
                        color: red;
                    }
                </style>
            </head>
            <body>
                <h2>Test string</h2>
                <hr>
                <p>Hello <strong>world</strong></p>
            </body>
        </html>
    `;
};