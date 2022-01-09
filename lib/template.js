module.exports = {
    HTML: function (title, list, body, controls) {
        return `
                    <!doctype html>
                        <html>
                        <head>
                        <title>WEB1 - Welcome</title>
                        <meta charset="utf-8">
                        </head>
                        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${controls}
            ${body}
            </body>
            </html>
        `
    },
    list: function (fileList) {
        var list = '<ul>';
        var i = 0;
        while (i < fileList.length) {
            list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></Li>`;
            i = i + 1;
        }
        list = list + '</ul>';
        return list;
    }
}