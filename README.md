# GetDo - Work Smarter

<img align="center" alt="typescript"
    src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img align="center" alt="nodejs"
    src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="center" alt="react"
    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img align="center" alt="mui"
    src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />
<img align="center" alt="swagger"
    src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black" />
<img align="center" alt="swagger"
    src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" />

<img src="https://i.ibb.co/1MdxJFx/logo.jpg" alt="GetDo Logo">

> Lista de tarefas para organizar seu dia-a-dia e não esquecer nenhum afazer.

### Descrição do Sistema
O GetDo é um sistema de gerenciamento de tarefas inovador que oferece uma abordagem envolvente e divertida para cumprir suas atividades diárias. Permitindo a criação de uma lista personalizada de tarefas, os usuários podem facilmente marcar as tarefas como concluídas, acompanhando seu progresso e mantendo um registro claro das atividades realizadas. Possuí um histórico abrangent, destaca as tarefas pendentes e fornece estatísticas detalhadas sobre a conclusão de tarefas, incluindo insights sobre o desempenho do usuário e padrões de produtividade. Além disso, apresenta um recurso motivador de "streak" que rastreia a consistência do usuário na realização de tarefas, mantendo o usuário engajado e incentivado a atingir suas metas diárias.

### Tecnologias Utilizadas
O GetDo utiliza um conjunto de tecnologias modernas para fornecer uma experiência eficiente e envolvente aos usuários. Aqui está uma breve explicação sobre como cada uma dessas tecnologias é empregada no sistema:

- MUI (Material-UI): é utilizado para criar uma interface de usuário elegante e responsiva. Ele oferece um conjunto de componentes pré-estilizados que facilitam a criação de uma experiência visual consistente e atraente para os usuários.

- React: é a base do desenvolvimento front-end, permitindo a criação de uma aplicação web dinâmica e responsiva. Ele ajuda a organizar o código de maneira eficiente, oferecendo atualizações em tempo real e uma experiência interativa para os usuários.

- TypeScript:foi empregado para melhorar a escalabilidade e manutenibilidade do código. Com a adição de tipos estáticos, proporciona um desenvolvimento mais seguro, com detecção de erros durante a fase de desenvolvimento.

- MongoDB:é utilizado para armazenar os dados do aplicativo, sua estrutura orientada a documentos permite uma modelagem de dados ágil e eficaz, facilitando a manipulação e o armazenamento das informações das tarefas e usuários do sistema.

- Prisma: é integrado para facilitar as consultas e operações com o banco de dados. Ele oferece um conjunto de ferramentas que simplificam a interação com o banco de dados, permitindo um acesso mais intuitivo e eficiente aos dados.

- Express: é utilizado para criar e gerenciar o back-end do aplicativo, ele oferece um conjunto de funcionalidades para roteamento, lidar com requisições HTTP, gerenciamento de middleware e construção de APIs, permitindo uma comunicação eficaz entre o front-end e o banco de dados.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Listagem de Tarefas
- [x] Criação de Tarefas com Conteúdo e Data
- [x] Delecao de Tarefas
- [x] Marcar Tarefas como completo
- [ ] Mostrar a quantidade de tarefas feitas no dia e comparar com o dia anterior
- [ ] Definir estastítisca de realização das tarefas
- [ ] Manter um streak de realização das tarefas e uso do sistema

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `node` e `yarn`

## 🚀 Instalando GetDo

Para instalar o GetDo, siga estas etapas:

```
cd api
npm i
cd ../client
npm i
```

## ☕ Usando GetDo

Para usar GetDo, siga estas etapas:

```
cd api
npm run dev
```

Em outro terminal abra:

```
cd client
npm run dev
```

Lembre-se de criar o arquivo .env dentro das pastas api e client

Para recriar o report do _lizard_ use o comando:

```
lizard api/src api/test client/src -o report.html
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/bernborgess">
        <img src="https://github.com/bernborgess.png"
        width="100px;"
        alt="Foto do Bernardo Borges"/><br>
        <sub>
          <b>Bernardo Borges</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Daniele-Cassia">
        <img src="https://github.com/Daniele-Cassia.png"
        width="100px;"
        alt="Foto da Daniele Cassia"/><br>
        <sub>
          <b>Daniele Cássia</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
