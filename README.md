# Markdown Links  

Neste projeto, foi criada uma biblioteca que retorna os links contidos em um arquivo Markdown(.md).
Pode ser executada, no terminal, através da CLI (Command Line Interface - Interface de Linha de Comando).

## Como Instalar    
Um requisito para utilizar esta biblioteca é ter o NodeJS instalado.     
Execute este comando no terminal:  

`$ npm install -g RachelMarotta/SAP003-md-links`  

## Como Utilizar  

### Javascript  

Exemplo de como utilizar a biblioteca em JS:  

```js
const mdLinks = require(".caminho-da-pasta-de-instalação/lib/index.js");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })  
  .catch(console.error);
  ```   
  
### CLI   

No terminal, execute a seguinte linha:  

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









