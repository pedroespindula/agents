# Como Revisar Código

Este documento descreve o processo para revisão de código de forma sistemática e eficaz.

## Objetivo

Analisar código quanto a qualidade, corretude, segurança e manutenibilidade, fornecendo feedback construtivo que ajude a melhorar a qualidade da base de código.

## Fluxo de Revisão

### 1. Contexto Inicial

Antes de começar a revisão, entenda:

- **Propósito**: O que o código deve fazer?
- **Escopo**: Quais arquivos/componentes foram modificados?
- **Tipo**: É uma feature, bugfix, refatoração?
- **Complexidade**: Qual o tamanho e impacto da mudança?

### 2. Primeira Passada (Visão Geral)

Faça uma leitura rápida para entender:

- Estrutura geral das mudanças
- Padrões utilizados
- Arquivos principais vs. auxiliares
- Possíveis áreas de risco

### 3. Análise Detalhada

Revise cada arquivo sistematicamente:

#### 3.1 Funcionalidade

- [ ] O código faz o que deveria fazer?
- [ ] A lógica está correta?
- [ ] Edge cases estão tratados?
- [ ] Há casos de uso não cobertos?

#### 3.2 Corretude

- [ ] Há bugs óbvios?
- [ ] Condições estão corretas (>, >=, &&, ||)?
- [ ] Loops terminam corretamente?
- [ ] Null/undefined são tratados?
- [ ] Tipos estão corretos (TypeScript)?

#### 3.3 Segurança

- [ ] Inputs são validados?
- [ ] Há proteção contra injection (SQL, XSS, etc.)?
- [ ] Dados sensíveis estão protegidos?
- [ ] Autenticação/autorização estão corretas?
- [ ] Secrets não estão hardcoded?

#### 3.4 Performance

- [ ] Há loops desnecessários ou aninhados?
- [ ] Queries de banco são eficientes?
- [ ] Há caching quando apropriado?
- [ ] Recursos são liberados (conexões, arquivos)?
- [ ] Há operações bloqueantes desnecessárias?

#### 3.5 Manutenibilidade

- [ ] Código é legível e auto-explicativo?
- [ ] Nomes são descritivos?
- [ ] Funções têm responsabilidade única?
- [ ] Há duplicação de código?
- [ ] Complexidade ciclomática é aceitável?
- [ ] Comentários explicam o "porquê", não o "o quê"?

#### 3.6 Testes

- [ ] Há testes para o código novo/modificado?
- [ ] Testes cobrem casos principais?
- [ ] Testes cobrem edge cases?
- [ ] Testes são legíveis e mantíveis?
- [ ] Mocks/stubs são apropriados?

#### 3.7 Documentação

- [ ] Funções públicas estão documentadas?
- [ ] README foi atualizado (se necessário)?
- [ ] Mudanças de API estão documentadas?
- [ ] Decisões complexas estão explicadas?

### 4. Análise de Padrões

Verifique consistência com o projeto:

- [ ] Segue convenções de nomenclatura?
- [ ] Usa padrões estabelecidos no projeto?
- [ ] Estrutura de arquivos está correta?
- [ ] Imports/exports seguem padrão?
- [ ] Formatação está consistente?

### 5. Ferramentas Automatizadas

Execute ferramentas quando disponíveis:

```bash
# Linters
npm run lint
# ou
eslint .

# Testes
npm test

# Cobertura
npm run test:coverage

# Type checking
tsc --noEmit

# Security scanning
npm audit
```

Analise os resultados e inclua na revisão.

### 6. Compilação do Feedback

Organize feedback por:

1. **Críticos** (🔴): Bugs, vulnerabilidades, quebras
2. **Importantes** (🟡): Code smells, problemas de design
3. **Sugestões** (🔵): Melhorias, otimizações
4. **Nitpicks** (💡): Estilo, preferências menores

### 7. Redação do Feedback

Para cada problema identificado:

1. **Localize**: Arquivo, linha, função
2. **Descreva**: O que está errado
3. **Explique**: Por que é um problema
4. **Sugira**: Como corrigir (com exemplo se possível)
5. **Classifique**: Nível de severidade

#### Exemplo de Feedback Bem Estruturado

```markdown
🔴 **Vulnerabilidade de SQL Injection** (`src/users/repository.js:45`)

**Problema:**
A query SQL está concatenando input do usuário diretamente:
`const query = `SELECT \* FROM users WHERE email = '${email}'`;`

**Por quê é crítico:**
Permite que atacantes executem SQL arbitrário, podendo ler, modificar ou deletar dados.

**Sugestão:**
Use prepared statements:
`const query = 'SELECT * FROM users WHERE email = ?';`
`const result = await db.query(query, [email]);`

**Referência:** [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
```

## Checklist Final

Antes de enviar a revisão:

- [ ] Revisei todos os arquivos modificados
- [ ] Identifiquei problemas críticos (se houver)
- [ ] Forneci feedback construtivo e específico
- [ ] Expliquei o raciocínio das sugestões importantes
- [ ] Incluí exemplos de código quando relevante
- [ ] Classifiquei feedback por severidade
- [ ] Reconheci aspectos positivos do código
- [ ] Executei ferramentas automatizadas (se disponíveis)
- [ ] Verifiquei que o tom é respeitoso e profissional

## Estrutura de Resposta

Use o template de review-comment.md para estruturar o feedback final.

## Quando Escalar

Escale para outros especialistas quando:

- **@architect**: Problemas arquiteturais significativos
- **@sre**: Questões de infraestrutura, observabilidade
- **@tester**: Estratégia de testes inadequada
- **@engineer**: Implementação alternativa necessária
