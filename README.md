# Markdown Links  

Neste projeto, foi criada uma biblioteca que retorna os links contidos em um arquivo Markdown(.md).
Pode ser executada, no terminal, através da CLI (Command Line Interface - Interface de Linha de Comando).

## Como Instalar
`$ npm install RachelMarotta/SAP003-md-links`  

## Como Utilizar em Javascript  

Exemplo de como utilizar a biblioteca em JS:  

`const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);`

## Como Utilizar na CLI
`$ mdLinks ./some/example.md`

Exemplo de retorno:

`http://yahoo.com/  
Yahoo
https://apple.com/  
Apple
http://google.com/  
Google`









