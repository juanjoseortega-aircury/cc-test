---
layout: default
# Portfolio page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<div class="multipurpose-container links-heading-container">
  <h1>{{ site.data.lang[lng].portfolios.title }}</h1>
  <hr>
  <div class="row">
    <div class="col-md-12">
      <div class="about-msg markdown-style">
        {{ content }}
      </div>
    </div>
  </div>
</div>
