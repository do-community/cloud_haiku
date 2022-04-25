# Bienvenidos al Haiku de la Nube (Cloud Haiku)

El Haiku de la Nube (Cloud Haiku) es un repositorio de código abierto que colecciona haikus sobre la nube y tecnología de la nube y que publica estos haikus en su sitio web.

**Debido a que la popularidad de este repositorio creció durante la celebración de Hacktoberfest, por favor, respeta el tiempo que le toma a los mantenedores revisar y aceptar pull requests. Por favor, espera hasta una semana para recibir una respuesta, la que podría incluir un pedido de cambio.**

## [Haikus](https://do-community.github.io/cloud_haiku/haikus/)

Todos los **[haikus](https://do-community.github.io/cloud_haiku/haikus/)** enviados por usuarios están disponibles dentro del directorio [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus).

## Colaborando

Para colaborar con un haiku en este repositorio, lee sobre como enviar un pull request en el tutorial de DigitalOcean "[Como crear un Pull Request en GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)" y luego crea un haiku en Markdown (`.md`).

**Nota: Debido a la popularidad de este repositorio, especialmente cerca de Hacktoberfest, solo aceptaremos el envío de un (1) haiku por usuario.**

### Nombre de archivo y ubicación

Deberías nombrar tu archivo de Markdown `el_titulo_de_tu_haiku.md` y guardarlo en el directorio [`/_haikus`](https://github.com/do-community/cloud_haiku/tree/master/_haikus) de este proyecto.

### Formato Jekyll

Teniendo en cuenta que éste es un sitio [Jekyll](https://jekyllrb.com/), necesitarás incluír el siguiente fragmento al inicio del archivo:

```yaml
---
layout: haiku
title:
author:
---
```

Mantén la estructura (layout) como `haiku`. Luego de `title:` agrega el título de tu haiku. Seguidamente al `author:` agrega tu nombre (puede ser tu primer nombre o un seudónimo si lo prefieres).

Por favor, no agregues otras lineas al formato de arriba.

**Nota**: Usamos Travis CI como herramienta de prueba para ayudarnos a probar archivos markdown automaticamente. Por favor, asegurate de mantener el encabezado de tu markdown exactamente como se describe arriba para asegurarte que tu pull request sea incorporado.

Bajo el encabezado, escribe tu haiku.

### Escribiendo un Haiku

Fomentando el buen uso del el código abierto, nos gustaría que escribieras un haiku original en lugar de enviar algo escrito por otra persona.

Tu haiku debería ser desafiante y divertido de escribir. Debes asegurarte que cumple con la guía poética de lo que es un haiku, que podrás encontrar en la siguiente sección.

### Formato de un Haiku

Los Haikus son una forma tradicional de poesía Japonesa. Se componen de tres (3) lineas y tienen un total de diecisiete (17) silabas. Estos poemas siguen el formato de silabas 5-7-5 distribuidos en tres (3) lineas.

Las *Silabas* son la unidad de organización de sonidos de habla que típicamente incluyen vocales. Por ejemplo, la palabra **Computadora** está compuesta por cinco (5) silabas: **com** - **pu** - **ta** - **do** - **ra**.

Veamos el siguiente ejemplo de haiku:

```
Anoche cubrí <br>
mis hijos dormidos y <br>
el ruido del mar. <br>
```

Arriba vemos que el haiku se compone de 3 versos.

La primera linea tiene cinco (5) silabas, la segunda tiene siete (7) silabas y la tercera tiene cinco (5) silabas.

```
A-no-che cu-brí  # 5 silabas
mis hi-jos dor-mi-dos y  # 7 silabas
el rui-do del mar.  # 5 silabas
```

Para verificar que estás usando el número correcto de sílabas, puedes usar esta herramienta (solo en Inglés): [http://www.haikusyllablecounter.com](http://www.haikusyllablecounter.com).

Muchas formas de poesía tienen reglas estéticas específicas a seguir. Estos desafíos hacen de la escritura de poesía una forma de arte disfrutable.

### Saltos de línea

Para asegurarse que hay saltos de linea apropiados, por favor, usa saltos de linea de HTML, como lo que sigue:

```markdown
---
layout: haiku
title: El ruido del mar
author: Watanabe Hakusen
---

Anoche cubrí<br>
mis hijos dormidos y<br>
el ruido del mar.<br>
```

### Un ejemplo

Por ejemplo, el haiku del tiburón Sammy se llama "Octopus Cloud", y su nombre está escrito simplemente como "Sammy". Sammy nombró su archivo [`octopus_cloud.md`](https://github.com/do-community/cloud_haiku/blob/master/_haikus/octopus_cloud.md).

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

### Enviar un Pull Request

Estamos encantados de aceptar pull requests válidos en este repositorio. Cualquier pull request que sigue las guías de formato será aceptado en el proyecto.

Mantén tus haikus relacionados a la tecnología de infraestructura de nube y diviértete colaborando en este proyecto!

![El tiburón Sammy y otros peces nadando](https://do-community.github.io/cloud_haiku/assets/swim.png)
