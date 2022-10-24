# Bem-vindo ao Cloud Haiku

Cloud Haiku é um repositório de código aberto que coleta haikus sobre a nuvem e a tecnologia da nuvem e publica esses haikus em seu site.

**Devido a popularidade deste repositório durante a celebração do Hacktoberfest, por favor, respeite o tempo que leva para os mantenedores revisarem e fazerem o merge dos pull requests. Revisões serão conduzidas nos pull requests na ordem que eles forem recebidos e podem incluir pedidos de mudanças no pull request.**

**Spammar os mantenedores não irá acelerar o processo.**

## [Haikus](https://do-community.github.io/cloud_haiku/haikus/)

Todos os nossos **[haikus](https://do-community.github.io/cloud_haiku/haikus/)** submetidos pelos usuários estão disponíveis através do diretório [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus).

## Contribuindo

Para contribuir com um haiku para este repositório, leia sobre como submeter um pull request no tutorial do DigitalOcean "[Como Criar um Pull Request no GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" e, então, componha um haiku em Markdown (`.md`).

**Observação**: Devido a popularidade deste repositório, especialmente durante a Hacktoberfest, nós iremos aceitar apenas uma contribuição de haiku por usuário.**

### Nome do Arquivo e Localização

Você deve nomear seu arquivo Markdown `titulo_do_seu_haiku.md` e colocá-lo no diretório [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) deste projeto.

### Formato Jekyll

Como este site é um [Jekyll](https://jekyllrb.com/), você também precisará incluir o seguindo formato no topo do arquivo:

```yaml
---
layout: haiku
title:
author:
---
```

Mantenha o layout como `haiku`. Coloque o título do seu haiku ao lado de `title`. Coloque seu nome ao lado de `author` (pode ser tanto seu primeiro nome como um pseudônimo, o que você preferir).

Por favor, não adicione nenhuma outra linha ao formato demonstrado acima.

**Observação**: Estamos utilizando Travis IC como ferramenta de teste para nos ajudar a testar automaticamente os arquivos Markdown. Uma vez que os mantenedores precisam, de vez em quando, reler a ferramenta de teste, desabilitá-la enquanto contribuidor fará com que os mantenedores tenham trabalho extra. Por favor, mantenha o cabeçalho do seu markdown exatamente como foi descrito acima para assegurar que seu pull request será incorporado.

Abaixo do cabeçalho, você adicionará seu haiku.

### Escrevendo um Haiku

Fomentando o bom uso do código aberto, pedimos que você escreva um haiku original ao invés de submeter um que alguém já escreveu.

Seu haiku deveria ser divertido e desafiador de escrever. Você deve se assegurar que ele se encaixe no formato poético que um haiku deve seguir. Você pode ler um pouco sobre isso na próxima seção.

### Formato do Haiku

Haikus são uma forma tradicional de poesia Japonesa. Eles são feitos de até três linhas e têm um total de 17 sílabas. Os poemas seguem o formato de 5-7-5 para as sílabas ao longo das três linhas.

*Sílabas* são unidades de organização de palavras, ou seja, grupos de fonemas que se pronunciam numa só emissão de voz e que, geralmente, incluem uma vogal. Por exemplo, a palavra **computador** é composta de quatro sílabas: **com** - **pu** - **ta** - **dor**.

Vamos considerar um exemplo de haiku deste repositório:

```
O dia nasce  <br>
O gato espreguiça  <br>
A manhã sorri  <br>
```

Acima, vemos que o haiku é composto de 3 linhas.

A primeira linha tem 5 sílabas, a segunda tem 7 sílabas e a terceira tem 5 sílabas.

```
O di-a nas-ce # 5 sílabas
O ga-to es-pre-gui-ça # 7 sílabas
A ma-nhã sor-ri # 5 sílabas
```

Para verificar que você está usando o número correto de sílabas, você pode utilizar esta ferramenta (somente em Inglês) [http://www.haikusyllablecounter.com](http://www.haikusyllablecounter.com).

Muitas formas de poesia têm regras estéticas específicas que precisam ser seguidas. Este desafio torna o ato de escrever poesia em uma forma de arte prazerosa.

### Quebras de Linha

Para se assegurar de que as quebras de linha estão corretas, por favor, use as quebras de linha HTML, como:

```markdown
---
layout: haiku
title: Dia Bom
author: Ellen
---

O dia nasce<br>
O gato espreguiça<br>
A manhã sorri<br>
```

### Um Exemplo

Por exemplo, o haiku do tubarão Sammy se chama "Octopus Cloud" e seu nome está escrito apenas como "Sammy". Sammy nomeou seu arquivo [`octopus_cloud.md`](https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md).

```markdown
---
layout: haiku
title: Octopus Cloud
author: Sammy
---

Distributed cloud<br>
Like the octopuses' minds<br>
Across the network<br>
```

### Submeter um Pull Request

Ficaremos felizes de aceitar pull requests neste repositório! Qualquer pull request que siga os guias de formatação será incorporado ao projeto.

Mantenha seus haikus relacionados à tecnologia de infraestrutura de nuvem e divirta-se contribuindo com este projeto!

![O tubarão Sammy e outros peixes nadando](https://do-community.github.io/cloud_haiku/assets/swim.png)
