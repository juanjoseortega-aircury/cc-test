---
layout: default
# Manifesto page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}

<div class="containertitle">
    <h1 id="titleAux">{{ site.data.lang[lng].manifesto.title }}</h1>
</div>
{{ content }}
