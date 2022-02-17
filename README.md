<h1>Desafio Front-end - EQI Investimentos</h1>

<h3>Primeiros passos</h3>

<ul>
  <li>Baixe o <a href="https://nodejs.org/en/download/">Node</a></li>
  <li>Baixe o <a href="https://git-scm.com/downloads">Git</a></li>
  <li>Baixe o <a href="https://www.docker.com/products/docker-desktop">Docker</a> em seu computador</li>
  <li>Após baixar o Docker, execute no terminal o comando <code>docker pull filipecela/desafioeqi:v1</code></li>
  <li>
    Para acessar os dados, você precisará clonar a API do desafio:
    <ul>
        <li><code>git clone https://github.com/eqi-investimentos/desafio-fake-api</code></li>
    </ul>
    Após terminar essa etapa, execute:
    <ul>
        <li><code>cd desafio-fake-api</code></li>
        <li><code>npm install</code></li>
        <li><code>npx json-server db.json</code></li>
    </ul>
    A API ficará localizada na porta <code>http://localhost:3000</code>.
    
  </li>
  <li>Por fim, execute o comando <code>docker run -p 80:80 -it filipecela/desafioeqi:v1</code> para rodar o projeto.</li>
    
<h3>O que foi utilizado no projeto</h3>
<ul>
    <li>Bootstrap</li>
    <li>Font Awesome</li>
    <li>JQuery</li>
    <li>Chart.js</li>
    <li>Docker</li>
</ul>
