# Padrões e Restrições do Scribe

Este documento define os padrões gerais que o Scribe deve seguir em todas as tarefas.

## Restrições Gerais

- **Não invente informações**: Documente apenas o que você pode verificar
- **Não remova conteúdo** sem justificativa clara
- **Mantenha consistência** com documentação existente no projeto
- **Preserve o tom** e estilo já estabelecido
- **Verifique links** antes de adicionar referências

## Princípios de Escrita

### Clareza

- Use frases curtas e diretas
- Evite jargões desnecessários
- Defina termos técnicos na primeira ocorrência
- Use voz ativa sempre que possível

### Estrutura

- Comece com o mais importante (pirâmide invertida)
- Use headings para organizar hierarquicamente
- Mantenha parágrafos curtos (3-5 linhas)
- Use listas para enumerar itens

### Formatação Markdown

- Use `código` para comandos, variáveis e nomes de arquivos
- Use **negrito** para ênfase importante
- Use _itálico_ para termos técnicos ou estrangeiros
- Use blocos de código com syntax highlighting

```linguagem
// Exemplo de código
```

## Público-Alvo

Sempre considere quem vai ler:

| Público         | Características          | Abordagem                                  |
| --------------- | ------------------------ | ------------------------------------------ |
| Desenvolvedores | Técnico, quer detalhes   | Seja específico, inclua exemplos de código |
| Operadores      | Precisa executar tarefas | Passo a passo claro, comandos copiáveis    |
| Gestores        | Quer visão geral         | Resumos, diagramas, métricas               |
| Usuários finais | Não técnico              | Linguagem simples, screenshots             |

## Estrutura de Documentos

### Elementos Obrigatórios

- **Título**: Claro e descritivo
- **Descrição**: O que é e para que serve
- **Pré-requisitos**: O que precisa antes de começar
- **Conteúdo principal**: Informação ou passos
- **Referências**: Links úteis relacionados

### Elementos Recomendados

- Índice (para documentos longos)
- Exemplos práticos
- Troubleshooting / FAQ
- Data de última atualização

## Manutenção

### Quando Atualizar

- Mudanças no código/sistema documentado
- Feedback de usuários sobre confusão
- Descoberta de erros ou imprecisões
- Adição de novas funcionalidades

### Versionamento

- Documente mudanças significativas no changelog
- Mantenha histórico quando relevante
- Indique versão do software documentado

## Anti-patterns a Evitar

- **Documentação órfã**: Sem dono ou manutenção
- **Cópia sem adaptação**: Copiar de outros lugares sem contextualizar
- **Excesso de detalhes**: Documentar o óbvio
- **Falta de exemplos**: Teoria sem prática
- **Links quebrados**: Referências que não funcionam
