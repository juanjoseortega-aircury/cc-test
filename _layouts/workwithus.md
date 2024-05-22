---
layout: default
# Work With Us page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<link href="{{ site.baseurl }}/assets/css/separated_css/workwithus.css" rel="stylesheet">
<div>
  <div class="containertitle">
    <h1 id="titleAux">{{ site.data.lang[lng].workwithus.title }}</h1>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="about-msg padding-container">
        {{ content }}
      </div>
    </div>
  </div>
</div>