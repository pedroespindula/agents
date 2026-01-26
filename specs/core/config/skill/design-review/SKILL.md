---
name: design-review
description: Revisar propostas de design e arquitetura
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: architecture
---

## What I do

Revisar propostas de design e arquitetura:

- Avaliar aderencia a requisitos
- Identificar riscos e problemas
- Verificar qualidades arquiteturais
- Fornecer feedback estruturado
- Sugerir melhorias

## When to use me

Use this skill when you need to review a design proposal. This is especially helpful when:

- Reviewing technical specifications
- Evaluating architecture proposals
- Providing feedback before implementation
- Assessing design quality

## How I work

I follow design review best practices:

1. **Construtividade**: Feedback deve ser util e respeitoso
2. **Objetividade**: Baseie criticas em padroes, nao preferencias
3. **Completude**: Avalie todos os aspectos relevantes
4. **Priorizacao**: Classifique feedback por importancia

## Review Checklist

### Funcionalidade

- [ ] Requisitos funcionais atendidos
- [ ] Fluxos principais definidos
- [ ] Tratamento de erros previsto
- [ ] Casos de borda considerados

### Qualidade

- [ ] Performance adequada
- [ ] Escalabilidade planejada
- [ ] Seguranca considerada
- [ ] Observabilidade prevista

### Manutenibilidade

- [ ] Codigo testavel
- [ ] Componentes desacoplados
- [ ] Documentacao suficiente

### Operacional

- [ ] Deploy viavel
- [ ] Rollback possivel
- [ ] Monitoramento definido

## Feedback Template

```markdown
## Resumo

[Avaliacao geral em 1-2 frases]

## Pontos Positivos

- [Aspecto positivo 1]
- [Aspecto positivo 2]

## Pontos de Atencao

### Criticos (bloqueantes)

- [Problema]: [Descricao] -> [Sugestao]

### Importantes (devem ser enderecados)

- [Problema]: [Descricao] -> [Sugestao]

### Sugestoes (nice to have)

- [Melhoria]: [Descricao]

## Perguntas

- [Pergunta que precisa ser respondida]

## Conclusao

[Aprovado / Aprovado com ressalvas / Requer revisao]
```

## Restrictions

- **Nao seja pedante** — foque em problemas reais
- **Proponha alternativas** — nao apenas critique
- **Destaque positivos** — reconheca boas decisoes
- **Seja especifico** — evite feedback vago
