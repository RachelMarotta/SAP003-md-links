# Markdown Links  

Neste projeto, foi criada uma biblioteca que retorna os links contidos em um arquivo Markdown(.md).
Pode ser executada, no terminal, através da CLI (Command Line Interface - Interface de Linha de Comando).

## Como Instalar    
Um requisito para utilizar esta biblioteca é ter o NodeJS instalado.     
Execute este comando no terminal:  

`$ npm install RachelMarotta/SAP003-md-links`  

## Como Utilizar em Javascript  

Exemplo de como utilizar a biblioteca em JS:  

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })  
  .catch(console.error);
  ```

## Como Utilizar na CLI   

No terminal, execute a seguinte linha:  

`md-links <path-to-file>`  

`$ mdLinks ./some/example.md`

Exemplo de retorno:

```sh
http://yahoo.com/          
Yahoo   
https://apple.com/     
Apple    
http://google.com/     
Google
```









