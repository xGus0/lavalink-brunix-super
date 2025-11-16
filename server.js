import express from "express";
import request from "request";

const app = express();

// URL base que seu proxy vai redirecionar (pode trocar se quiser)
const TARGET = process.env.TARGET || "https://www.youtube.com";

// Página inicial só pra teste
app.get("/", (req, res) => {
    res.send("Proxy do Render funcionando ✔");
});

// Proxy geral
app.use((req, res) => {
    const url = TARGET + req.url;
    req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Proxy rodando na porta ${PORT}`));
