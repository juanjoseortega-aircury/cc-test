---
layout: default
# Offering page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<link href="{{ site.baseurl }}/assets/css/separated_css/offering.css" rel="stylesheet">
<div>
  <div class="containertitle">
    <h1 id="titleAux">{{ site.data.lang[lng].offerings.title }}</h1>
  </div>
  {{ content }}
</div>