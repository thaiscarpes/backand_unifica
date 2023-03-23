const cors = require('cors') //Políticas de segurança para as solicitações de recursos de diferentes domínios.

const corsOptions = {
  origin: 'http://localhost:3000', // Substitua pela URL do seu aplicativo cliente
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = cors(corsOptions);