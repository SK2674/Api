// api/info.js

export default function handler(req, res) {
  // Permitir acesso por FancyMenu e navegadores
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Dados que serão retornados
  const data = {
    nome: "Minha API FancyMenu",
    status: "online",
    versao: "1.0.0",
    horario: new Date().toISOString()
  };

  res.status(200).json(data);
}
