---
layout: haiku-main
title: Haikus
permalink: "/haikus/"
---

# {{ page.title }}

{% for haiku in site.haikus %}
  {% if haiku.layout == 'haiku' %}
  * [{{ haiku.title }}](..{{ haiku.url }}) by {{ haiku.author }}
  {% endif %}
{% endfor %}
