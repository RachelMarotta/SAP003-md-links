const fs = require("fs");

const mdLinks = (path) => {
  const links = /(\[[^\s].*?\])(\(http.*?\))/gm;
  const replaceBracket = /\)|\[/;
  
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(`Could not open file: ${err}`);
      } else {
        const matches = data.match(links);
        const result = matches.map((el) => {
          const splited = el.split("](");
          const text = splited[0].replace(replaceBracket, "");
          const href = splited[1].replace(replaceBracket, "");

          return { href, text };
        });
        resolve(result);
      };
    });
  });
};

module.exports = mdLinks;