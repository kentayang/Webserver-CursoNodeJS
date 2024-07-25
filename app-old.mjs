import http from "http";

http
  .createServer((req, res) => {
    res.write("Hola Mundo");
    res.end();
  })
  .listen(3000, "localhost");

console.log("Escuchando en el puerto 3000");
