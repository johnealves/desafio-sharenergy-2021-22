# O desafio

Criar uma aplicação Web que atenda às demandas listadas abaixo. O aplicativo deve apresentar uma interface amigável, bonita e limpa, na qual o usuário possa navegar através de botões.

# Dependência

  Esta dependências são utilizadas para roda aplicação, alem das dependências padrão do React.

  - Material-ui/core": "^5.0.0-beta.5",
  - Material-ui/icons": "^4.11.2",
  - Axios": "^0.24.0",
  - react-router-dom": "^5.3.0",
  - Recharts": "^2.1.5",

# A aplicação

Este projeto foi realizado utilizando a versão LTS 16.13.0 do Node e o MongoDB 5.0.3.
Para rodar este projeto foi criado um backend para alimentar a aplicação que usa os dados dos arquivos dadosUsina.json dadosUsuario.json coma referencia. 

Para rodar este projeto corretamente é necessario:
 - Na branch "johnealvesfigueiredo" na raiz do projeto para para a pasta de backend com o comando "cd backend" e inicie a plicação com o comando "npm start", a aplicação ira rodar na porta 3001 e ira preecher o banco de dados com os dados dos arquivos dadosUsina.json dadosUsuario.json (obs.: o banco utilizado foi o MongoDB certifique de que o mongo esteja ativo de forma local ou aplicação dará erro.)
 - Com o backend rodando use os comando "cd .." e "depois "cd frontend"
 - Na raiz da pasta fronte end use o comando "npm start" para rodar aplicação
 (obs.: No frontend va ate pasta Services, lá tera um arquivo chamado api.jsx, neste arquivo a uma variavel chamada localhost, certifique-se de que esta variavel tem o endereço localhost do sistema local para que o backend funcione corretamente).

 Link para video de explicação: https://youtu.be/XiGtN9haZbk
