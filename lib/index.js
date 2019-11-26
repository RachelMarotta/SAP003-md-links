const fs = require('fs');

const mdLinks = (path) => {
    const links =  /\[(.*)\]\((.*)\)/gm
    const replaceBrackets = /\[/
    const replaceParentheses = /\)/
    return new Promise ((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
            const matches = data.match(links);
            const result = matches.map((el) => {
                const splited = el.split('](');
                const text = splited[0].replace(replaceBrackets, '');
                const href = splited[1].replace(replaceParentheses, '');

                return { href, text }
            });
            resolve(result);
            };
        });
    });
};
    
    module.exports = mdLinks;


