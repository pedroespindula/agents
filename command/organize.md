---
name: organize
agent: plan
description: organize current directory
---

Execute a organização sistemática deste diretório seguindo estes padrões rigorosos:

1. **Convenção de Nomenclatura:** Transforme todos os nomes de pastas em todos os níveis para `kebab-case` minúsculo (remova espaços, acentos e caracteres especiais).

2. **Arquitetura de Raiz:** Pastas no nível principal devem manter ou adotar o padrão numérico `NN-nome-descritivo` (ex: `01-pessoal`, `04-trabalho`).

3. **Padrões de Data e Projetos:**
   - **Anuais:** `yyyy-nome-projeto` (ex: `2025-financas`).
   - **Eventos Diários:** `yyyymmdd-nome-evento`.
   - **Eventos Mensais:** `yyyymm-nome`.
   - **Versões/Períodos:** `yyyy.n` (ex: `2024.2`).

4. **Documentação Única:**
   - Verifique se já existe um arquivo `README.md` no diretório raiz.
   - Se **NÃO** existir, crie um `README.md`.
   - Se **JÁ** existir, crie um `ORGANIZATION.md`.
   - O conteúdo deve incluir: `# Guia de Organização`, `## 🏗️ Estrutura Principal` (descrição das pastas de nível 1) e `## 📏 Diretrizes de Nomenclatura` (detalhando as regras de kebab-case e datas).

5. **Limpeza:** Antes de renomear, identifique e remova pastas vazias ou obsoletas (ex: 'arquivo', 'temp', 'teste').

6. **Política de Raiz Limpa:**
   - A raiz deve conter **apenas pastas** e arquivos de documentação (`README.md`, `ORGANIZATION.md`, `.gitignore`, etc.).
   - Identifique todos os arquivos soltos na raiz (documentos, imagens, PDFs, etc.).
   - Sugira a pasta apropriada para cada arquivo baseando-se no contexto e nas categorias existentes.
   - Mova os arquivos para suas respectivas pastas categorizadas.

7. **Análise e Sugestões de Melhoria:**
   - Analise a estrutura atual e identifique problemas: duplicações, inconsistências, hierarquias inadequadas, falta de categorização lógica.
   - Sugira melhorias estruturais: reagrupamentos, criação de categorias intermediárias, consolidação de pastas similares.
   - Identifique oportunidades de otimização: redução de profundidade excessiva, separação de conteúdos misturados.
   - Apresente as sugestões ao usuário antes de executar qualquer mudança destrutiva.

8. **Fluxo de Trabalho:**
   - Analise a árvore completa para mapear as mudanças.
   - Identifique e reorganize arquivos soltos na raiz para suas pastas apropriadas.
   - Execute a limpeza de diretórios desnecessários.
   - Renomeie todas as pastas seguindo os padrões estabelecidos.
   - Gere o arquivo de documentação apropriado (`README.md` ou `ORGANIZATION.md`) refletindo a estrutura final.
