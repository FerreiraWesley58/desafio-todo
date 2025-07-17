# 🧠 Desafio Técnico – Correção e Evolução de Projeto ReactJS

Bem-vindo ao repositório do desafio técnico de manutenção e evolução de uma aplicação ReactJS!
O objetivo deste projeto foi simular um cenário realista de manutenção de código legado, corrigindo erros de diferentes níveis de gravidade e propondo melhorias para entregar uma aplicação robusta, moderna e agradável de usar.

---

## 🚀 Sobre o Projeto

Este projeto consiste em uma lista de tarefas (ToDo) desenvolvida em React + TypeScript, com foco em boas práticas, responsividade e experiência do usuário.
O código original foi propositalmente entregue com bugs e armadilhas comuns do dia a dia de desenvolvimento, exigindo atenção, raciocínio lógico e domínio da stack.

---

## ✅ O que foi feito

### Correção de Erros
- **Erros de build/start:**
  - Corrigido o script de inicialização no package.json para garantir que o projeto rode corretamente em modo de desenvolvimento.
- **Erros de execução:**
  - Ajustados os hooks (useState, useEffect) para evitar loops infinitos e garantir atualização correta do estado.
  - Corrigida a lógica de criação, conclusão e remoção de tarefas.
- **Erros visuais e de responsividade:**
  - Corrigidas margens negativas e alinhamento no CSS, melhorando o layout e a experiência em diferentes tamanhos de tela.
- **Pegadinhas sutis:**
  - Corrigido o uso de eventos (onClick para onChange no checkbox), uso de id único para inputs, e adição da prop key em listas para eliminar warnings do React.

### Refatoração e Boas Práticas
- Melhoria na tipagem dos handlers e organização das funções.
- Separação clara de responsabilidades entre componentes.
- Código limpo, legível e fácil de manter.

### Melhorias e Incrementos de UX/UI
- **Persistência das tarefas:**
  - As tarefas agora são salvas no LocalStorage, permanecendo mesmo após recarregar a página.
- **Foco automático no input:**
  - Após adicionar uma tarefa, o campo de texto recebe foco automaticamente, facilitando a adição rápida de várias tarefas.
- **Feedback visual (toast):**
  - Ao criar ou remover uma tarefa, um aviso aparece no canto superior direito, melhorando a experiência do usuário.
- **Transição visual nas tarefas:**
  - As tarefas aparecem com uma animação suave, tornando a interface mais agradável e moderna.

---

## 🧪 Como rodar o projeto

1. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

2. Rode o projeto em modo desenvolvimento:
   ```bash
   yarn dev
   # ou
   npm run dev
   ```

3. Acesse o endereço informado no terminal (geralmente http://localhost:5173).

---

## 📝 Observações Finais

- Todo o processo de correção foi feito com atenção aos detalhes, buscando entregar um código limpo, funcional e pronto para manutenção futura.
- As melhorias implementadas agregam valor real à experiência do usuário e demonstram proatividade.
- O projeto está pronto para ser entregue, seja por repositório público ou compactado em .zip.

---

## 💡 Dicas para o avaliador

- Teste a criação, conclusão e remoção de tarefas.
- Recarregue a página para ver a persistência das tarefas.
- Experimente em diferentes tamanhos de tela.
- Confira a ausência de warnings/erros no console.

---

Feito com dedicação e atenção aos detalhes!
Qualquer dúvida ou sugestão, estou à disposição.
