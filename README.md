# Banco de Sangue App

Este é um aplicativo desenvolvido para processar dados de candidatos a doadores de sangue fornecidos por uma agência de banco de sangue. O aplicativo extrai informações relevantes dos dados e apresenta os resultados de forma organizada em tabelas e gráficos.

## Funcionalidades

O aplicativo possui duas principais funcionalidades:

1. **Dashboard:** O dashboard exibe os resultados em forma de tabelas e gráficos para facilitar a compreensão dos dados. As seguintes informações são apresentadas:

   - Quantidade de candidatos por estado do Brasil.
   - IMC médio em cada faixa de idade de dez em dez anos.
   - Percentual de obesos entre homens e mulheres.
   - Média de idade para cada tipo sanguíneo.
   - Quantidade de possíveis doadores para cada tipo sanguíneo receptor.

2. **Área de Processamento de Dados/Arquivos:** Esta área permite ao usuário fornecer um arquivo JSON contendo os dados dos candidatos ou inserir diretamente o conteúdo formatado do arquivo. O aplicativo processa esses dados e exibe os resultados no dashboard.

## Pré-requisitos

Antes de executar o aplicativo, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

Siga as etapas abaixo para executar o aplicativo:

1. Clone o repositório do aplicativo para o seu ambiente local.

```shell
git clone https://github.com/bryanwac/teste_front_wk.git
```

2. Execute o aplicativo com a IDE de sua preferência.

3. Instale as dependências do projeto usando o npm.

```shell
npm install
```

## Executando o Aplicativo

Após a conclusão da instalação, você pode executar o aplicativo da seguinte maneira:

1. Inicie o servidor de desenvolvimento.

```shell
ng serve
```

2. O aplicativo será executado localmente e estará acessível em seu navegador no seguinte endereço:

```
http://localhost:4200
```

## Uso do Aplicativo

Ao acessar o aplicativo no navegador, você será apresentado ao dashboard, que exibirá os resultados iniciais como tabelas e gráficos vazios. Para preencher os dados e visualizar os resultados, siga as etapas abaixo:

1. Na área de processamento de dados/arquivos, você tem duas opções:

   - **Enviar arquivo JSON:** Clique no botão "Escolher arquivo" e selecione um arquivo JSON contendo os dados dos candidatos.
   - **Inserir conteúdo formatado:** Insira diretamente o conteúdo formatado do arquivo JSON na caixa de texto.

2. Após enviar o arquivo ou inserir o conteúdo, clique no botão "Processar Dados" para processar as informações.

3. Os resultados serão exibidos no dashboard em forma de tabelas e gráficos, fornecendo as informações solicitadas.

4. Você pode repetir o processo para fornecer novos dados e obter resultados atualizados.

## ATENÇÃO
Usuários repetidos não serão criados, há uma verificação que impede inserção de usuários com dados repetidos.

## Contribuição

Contribuições para aprimorar o aplicativo são bem-vindas. Se você encontrar problemas ou tiver sugestões de melhorias, sinta-se à

 vontade para abrir uma issue no repositório ou enviar um pull request.

Esperamos que o aplicativo seja útil para processar e visualizar os dados dos candidatos a doadores de sangue.
