# Desafio para processo seletivo SHARENERGY 2021/22

Esse repositório se destina aos interessados em participar do processo seletivo da SHARENERGY 2021/22. As vagas são voltadas para desenvolvedores de aplicativos Web.

## Sobre a SHARENERGY

Acreditamos que as energias renováveis terão um lugar dominante em nossa economia pelo resto de nossas vidas. Trabalhamos no sentido de ampliar o impacto positivo que as energias renováveis podem ter no meio ambiente e nas nossas vidas. O sucesso da SHARENERGY é resultado de nossa equipe apaixonada, juntamente com nosso compromisso de oferecer a melhor solução.

Sabemos que negócios enfrentam desafios únicos e por isso oferecemos soluções turnkey, customizadas, economicamente viáveis e seguras.

A Startup figura entre as top 10 EnergyTechs do ranking 100 Open Startups desde 2018. Prova de que a inovação está enraizada em nossa cultura. Somos uma startup em estágio de crescimento e você trabalhará diretamente com os fundadores, ajudando a definir a visão, o produto e a experiência do usuário.

## Sobre a vaga

Já pensou em potencializar o setor que mais cresce na galáxia e trabalhar com uma solução que utiliza tecnologia web de ponta, altamente distribuída com foco em performance e disponibilidade? 👀

Os desenvolvedores da Sharenergy são responsáveis por criar e manter aplicações para clientes internos e externos, prover soluções escaláveis, resilientes e altamente disponíveis que sustentem picos de acesso além de atuar como referência técnica e tutores de outros desenvolvedores.

Procuramos por pessoas dinâmicas e que queiram estar aprendendo sempre. Nossa equipe é jovem, motivada e estamos sempre em busca de soluções criativas para alcançar os resultados que nossos clientes esperam. Se você tem esse perfil, é autoconfiante e tem facilidade para lidar com desafios diários, essa vaga é para você!

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
Para rodar este projeto foi criado um backend para alimentar a aplicação que usa os dados dos arquivos dadosUsina.json dadosUsuario.json com referencia. O codigo do Backend pode ser encontrado neste repositorio https://github.com/johnealves/usina-fotovoltaica.

Para rodar este projeto corretamente é necessario:
 - Clonar o repositorio do backend com o comando "git clone git@github.com:johnealves/usina-fotovoltaica.git"
 - Iniciar o MongoDB no sitema local.
 - Na raiz do repositorio clonado digite o comando "npm start" esse comando ira inicia a aplicação na porta 3001, isso tambem ira criar um database no mongo com o nome "sharenergy-johnealves", caso ja exista os dados do banco serão resetados
 - Com o backend rodando va para pasta raiz do repositorio desafio-sharenergy-2021-22 mude para a branch "johnealves" e rode o projeto com o comando npm start.
 (obs.: No frontend va ate pasta Services, lá tera um arquivo chamado api.jsx, neste arquivo a uma variavel chamada localhost, certifique-se de que esta variavel tem o endereço localhost do sistema local para que o backend funcione corretamente).
