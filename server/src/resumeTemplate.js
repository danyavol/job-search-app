module.exports = function resumeTemplate(data) {
    let userContacts = '';
    for (let contact of data.contacts) {
        userContacts += 
        `<div class="contact word-break">
        <div class="contact-type">${contact.title}</div>${contact.value}
        </div>`;
    }

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>HTML TO PDF</title>
        <style>
            html, body, .container {
                height: 100%;
                margin: 0;
                padding: 0;
                font-size: 14px;
                zoom: 0.9;
                font-family: 'sans-serif';
            }
            .spec {
                margin-top: 0;
                margin-bottom: 30px;
                color: #c06014;
            }
            h1 {
                margin: 0;
            }
            .container {
                background: #f3f4ed;
            }
            .aside {
                box-sizing: border-box;
                float: left;
                background: #536162;
                color: white;
                width: 30%;
                padding: 20px;
                height: 100%;
            }

            section {
                margin-bottom: 40px;
            }

            .section-title {
                margin: 0 0 20px 0;
            }

            .word-break {
                word-break: break-all;
            }

            .text-justify {
                text-align: justify;
            }

            .contact {
                margin-bottom: 7px;
            }

            .contact-type {
                margin-left: 10px;
                color: #fdbe2d;
            }
            .main {
                box-sizing: border-box;
                float: right;
                padding: 20px;
                color: #424642;
                width: 70%;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <aside class="aside">

                <section>
                    <h3 class="section-title">Контакты</h3>
                    <div>
                    ${userContacts}
                    </div>
                </section>

                <section>
                    <h3 class="section-title">Навыки</h3>
                    <div>
                        <div>HTML5</div>
                        <div>CSS</div>
                    </div>
                </section>
                
            </aside>

            <main class="main">

                <h1>${data.lastName + ' ' + data.firstName}</h1>
                <h3 class="spec">${data.profession}</h3>

                <section>
                    <h3 class="section-title">О себе</h3>
                    <div class="text-justify">${data.aboutMe}</div>
                </section>

            </main>

        </div>
    </body>
    </html>
    `;
};