---
layout: default
# Offering page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<div class="multipurpose-container links-heading-container">
    <h1 id="titleAux">{{ site.data.lang[lng].offerings.title }}</h1>
<hr>
{{ content }}
