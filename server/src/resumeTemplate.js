module.exports = function resumeTemplate() {
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
                font-family: 'sans-serif';
            }
            .spec {
                margin-top: 0;
                color: #c06014;
            }
            h1 {
                margin-bottom: 10px;
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
            }
            .section-title {
                margin: 0 0 20px 0;
            }
            .content {
                margin-bottom: 30px;
                word-break: break-all;
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
                <h3 class="section-title">Контакты</h3>
                <div class="content">
                    <div class="contact">myemailaddress@gmail.com<span class="contact-type">(Email)</span></div>
                    <div class="contact">github.com/user/danvol<span class="contact-type">(GitHub)</span></div>
                    <div class="contact">+375 29 2939540<span class="contact-type">(Телефон)</span></div>
                </div>
                <h3 class="section-title">Навыки</h3>
                <div class="content">
                    <div>HTML5</div>
                    <div>CSS</div>
                </div>
            </aside>
    
            <main class="main">
                <h1>Иванов Дмитрий</h1>
                <h3 class="spec">DevOps Engineer</h3>
            </main>
        </div>
    </body>
    </html>
    `;
};