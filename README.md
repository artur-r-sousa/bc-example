# Teste Concluído

### Considerações

A listagem de itens e a rota de detalhes foram feitas conforme especificações, utilizando React, Redux, Immer, e modulos dos mesmos.

**O que poderia melhorar?**

Layout:
    - principalmente no produto detalhado, pode ser aprimorado.
    - Um estilo de "zebra" com cada item do grid assumindo uma cor, daria um tom mais dinamico à tela inicial
    - Caso pudesse ser implementado, a opcao do usuario poder cadastrar mais produtos
    - Um carrinho de compras que mostrasse o total de itens escolhidos. Muitos usuários gostam de passar tempo no site adicionando coisas ao carrinho antes de comprar, e isso
        aumenta o tempo que passará no app, aumentando também as chances de uma compra maior.
    
Logica:
    - Refatoramento de algumas funções para que nao existisse a necessidade de uso do hook useEffect.(Ele foi utilizado de inicio, assim como 'mockData', e não houve tempo ábil
        para mudar, e testar com proficiência a solução)
    



# Teste de nível - Dev Junior

**Obrigado por se candidatar para a vaga de Dev Junior na Kuppi.**

Para podermos proseguir com o processo de avaliação, estamos disponibilizando um teste dividido dois exercícios (Exercício prático e Exercício conceitual). Você terá um dia para desenvolvê-lo. Mas se surgir algum imprevisto ou problema é só nos avisar.

### **Orientações iniciais**

O teste proposto será bem simples, porém por sermos uma startup, além das habilidades técnicas é muito importante a comunicação e pesquisa por soluções de problemas. Tenha isso em mente ao resolvê-lo. 

O teste é composto por dois exercicios, é importante **fazer os dois**. 

O uso de requisitos e os diferenciais listados na vaga será considerado um bônus.

O desenvolvimento deverá ser **feito em ReactJs**. O projeto deve ser entregue em outro repositório.

Será disponibilizado o ambiente de *dev* da Kuppi para a utilização durante o teste.

**url:** https://dev-api.kuppi.com.br

| Uri | Método | Verbo | Descrição
|---|---|---|---|
| **/example/products**  | GET | INDEX | *Array* com todos os produtos.
| **/example/products/:product_id**  | GET | SHOW | *Object* com todas as informações do produto com o *id* especificado.

#### **Packages requeridos**

É obrigatório o uso das bibliotecas listadas a seguir e será levados em consideração na análise do teste.

- axios
- styled-components

Esses outros packages a seguir também são obrigatórios, porém já estão implementados a arquitetura de seu uso, fique vontade para incrementar o que achar necessário e pertinente. 

- immer
- react-router-dom
- history
- redux
- react-redux
- redux-persist
- redux-saga

Boa sorte!

### **Exercício 1 - Teste prático**

Para prosseguir faça um Fork desse projeto para utilizá-lo como base no teste.

- Implemente uma aplicação que exiba em uma rota, uma listagem de produtos com seus nomes e preços.

- Crie também em cada item da listagem, um componente que direcione para outra rota, que servirá para exibir os detalhes desse produto com o restante das informações disponíveis.

- A estilização do projeto deve ser feito em *Styled Component* e ela juntamente com o layout desenvolvido serão levados em consideração na análise do teste.

### **Exercício 2 - Teste conceitual**

Responda as perguntas abaixo com suas próprias palavras, mas também fique livre em aplicar algum desses conceitos na primeira parte do teste.

- Se uma rota é repetida diversas vezes em sua aplicação, como seria possível melhorar a arquitetura para facilitar em manutenções posteriores?
- É possível melhorar a performance da solução? Como as melhorias impactam a leitura e manutenção do código?
- De que forma o sistema pode escalar com a arquitetura planejada?
- Considerando as informações de retorno nas rotas da API disponibilizada para o teste, qual seria a sua sugestão para o controller que alimentaria essas rotas? Leve em consideração os conhecimentos de RESTful API.



### Resposta do Teste teórico:

**Se uma rota é repetida diversas vezes em sua aplicação, como seria possível melhorar a arquitetura para facilitar em manutenções posteriores?**
- Criando um sistema de Router, onde podemos guardar todas elas, para dar manutenção de forma específica sem quebrar a aplicação. No caso deste projeto foi utilizado a arquitetura de Router já fornecida no  teste.

**É possível melhorar a performance da solução? Como as melhorias impactam a leitura e manutenção do código?**
- Múltiplos arquivos menores. (Como citado no livro Clean Code, funções devem ter um propósito específico e realizar UMA coisa apenas.)
- Funções sem estado, ou com estados imutáveis. (Feito nesse projeto usando o Redux)
- Criando limites para a quantidade de eventos que podem ser chamados ao mesmo tempo, deixando alguns deles em fila, ou atrasando a execução dos mesmos.

Considerações especificas para esse projeto:
A listagem de itens e a rota de detalhes foram feitas conforme especificações, utilizando React, Redux, Immer, e modulos dos mesmos.
O que poderia melhorar?
Layout:
    - principalmente no produto detalhado, pode ser aprimorado.
    - Um estilo de "zebra" com cada item do grid assumindo uma cor, daria um tom mais dinamico à tela inicial
    - Caso pudesse ser implementado, a opcao do usuario poder cadastrar mais produtos
    - Um carrinho de compras que mostrasse o total de itens escolhidos. Muitos usuários gostam de passar tempo no site adicionando coisas ao carrinho antes de comprar, e isso
        aumenta o tempo que passará no app, aumentando também as chances de uma compra maior.
    
Logica:
    - Refatoramento de algumas funções para que nao existisse a necessidade de uso do hook useEffect.(Ele foi utilizado de inicio, assim como 'mockData', e não houve tempo ábil
        para mudar, e testar com proficiência a solução)


**De que forma o sistema pode escalar com a arquitetura planejada?**
- Redux Sagas, Immer, Routes, são bibliotecas bastante utilizadas para facilitar a criação, manutenção e adição de features em projetos de larga escala.
- Nesse projeto a chamada da API tem um retorno pequeno, e com poucas informações. Considerando uma API que responda com milhares de resultados, ou que receba inúmeras chamadas por minuto, seria necessário utilizar outro método de entrega que não sobrecarregue o REACT; da mesma forma que caso fosse necessário exibir uma quantidade muito grande de informação ao usuário, outras técnicas precisariam ser usadas, como o InfiniteScroll, que poderia ser chamado sempre que o usuário chegasse até uma '%' específica da tela, carregando mais informações.  Este também pode ser usado caso o aplicativo tenha a identidade de manter a pessoa ali por muito tempo, e tal recurso já é hoje utilizado nos stories e reels do instagram, no tik tok, no facebook, onde o usuário sempre recebe uma remessa de informações novas conforme vai navegando. Isso evita o sistema de perder performance e aumenta a imersão do usuário na plataforma.


**Considerando as informações de retorno nas rotas da API disponibilizada para o teste, qual seria a sua sugestão para o controller que alimentaria essas rotas? Leve em consideração os conhecimentos de RESTful API.**
- Limitar o numero de acessos simultâneos.
- Limite de requisições. Algumas APIs utilizam limite de req/5segundos, ou req/minuto. Isso diminui a carga, especialmente para ambientes de teste onde loops infinitos podem ocorrer.

