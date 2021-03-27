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
                    <div class="contact word-break"><div class="contact-type">Email</div>myemailaddress@gmail.com</div>
                    <div class="contact word-break"><div class="contact-type">GitHub</div>github.com/user/danvol</div>
                    <div class="contact word-break"><div class="contact-type">Телефон</div>+375 29 2939540</div>
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

            <h1>Иванов Дмитрий</h1>
            <h3 class="spec">DevOps Engineer</h3>

            <section>
                <h3 class="section-title">О себе</h3>
                <div class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem explicabo ratione, omnis cum nisi repellat voluptates error hic fugit dolorum iste animi, quas non molestias itaque necessitatibus aut esse earum, minus maxime assumenda repellendus tempore? Voluptatum aspernatur animi ab esse?</div>
            </section>

        </main>

    </div>
</body>
</html>
    `;
};