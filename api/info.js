export default function handler(req, res) {
  // Habilita CORS corretamente
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Responde a pré-verificação CORS
    return;
  }

  // Dados da resposta
  const data = {
    nome: "Minha API FancyMenu",
    status: "online",
    versao: "1.0.0",
    ipserver: "arts-crest.gl.joinmc.link"
    horario: new Date().toISOString()
  };

  res.status(200).json(data);
}
