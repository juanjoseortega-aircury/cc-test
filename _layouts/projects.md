---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# projects page
---

{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}

{%- assign project_data = page.page_data | default: site.data.content.projects[lng].page_data -%}

{%- assign project_container_style = nil -%}
{%- if project_data.main.img -%}
{%- capture project_container_style -%} style="background-image:url('{{ project_data.main.img }}');" {%- endcapture -%}
{%- elsif project_data.main.back_color %}
{%- capture project_container_style -%} style="background-color:{{ project_data.main.back_color }};" {%- endcapture -%}
{%- endif %}

<div class="containertitle">
  <h1 id="titleAux">{{ site.data.lang[lng].projects.title }}</h1>
</div>
  <hr>
  <h1 id="title2">{{ site.data.lang[lng].projects.worked }}:</h1>
<div class="projectsFormat">
  <div class="companiesProjectsContainer">
    <div>
      <h3>{{ site.data.lang[lng].projects.companies }}:</h3>
      <div>
        <img src="/assets/img/logos/lord logo.png">
        <img src="/assets/img/logos/accionacultura.png">
      </div>
    </div>
    <div>
      <h3>{{ site.data.lang[lng].projects.museums }}: </h3>
      <div>
        <img src="/assets/img/logos/rise_rosa_rage.png">
        <img src="/assets/img/logos/ithra.png">
        <img src="/assets/img/logos/National.png">
      </div>
    </div>
    <div>
      <h3>{{ site.data.lang[lng].projects.festivals }}: </h3>
      <div>
        <img src="/assets/img/logos/Cibra.png">
        <img src="/assets/img/logos/rosa-lago.jpg">
      </div>
    </div>
    <div>
      <h3>{{ site.data.lang[lng].projects.private_foundations }}: </h3>
      <div>
        <img class="projectsImageWide" src="/assets/img/logos/mainel.png">
      </div>
    </div>
    <div>
      <h3>{{ site.data.lang[lng].projects.publications }}: </h3>
      <div>
        <img src="/assets/img/logos/NuartJournal-logo-2021-stacked.png">
      </div>
    </div>
    <div>
      <h3>{{ site.data.lang[lng].projects.universities }}:</h3>
      <div>
        <img src="/assets/img/logos/barreira.png">
        <img src="/assets/img/logos/Cambridge.png">
        <img src="/assets/img/logos/UCL-Logo.jpg">
      </div>
    </div>
  </div>
</div>
<h1 id="title2">{{ site.data.lang[lng].projects.selected }}:</h1><br>
{% for category in project_data.category -%}
  {%- capture first_category_id -%} id="{{ category.type }}" {%-endcapture-%}
  {% for list in project_data.list -%}
    {%- if list.type != category.type %}{% continue %}{% endif -%}
    <div class="multipurpose-container project-container" {{ first_category_id }}>
      {%-assign first_category_id=nil -%}
      {%- include multi_lng/get-localized-long-date-format.liquid date = list.date -%}
      <div class="row">
        {% if list.img %}
          {%- assign prj_img_path = list.img -%}
          {%- assign prj_img_title = list.img_title -%}
        {% elsif site.data.conf.others.projects.project_img_fill %}
          {%- assign prj_img_path = "/assets/img/default/1x1px.png" -%}
          {%- assign prj_img_title = "" -%}
        {% endif %}
        {% if list.img or site.data.conf.others.projects.project_img_fill -%}
        <div class="col-md-3 project-img">
          <img src="{{ prj_img_path }}" alt="{{ prj_img_title }}">
        </div>
        {%- endif %}
        <div class="col-md-9 project-header">
          <h1>{{ list.project_name }}</h1><h4>{{ list.project_excerpt }}</h4><h4>📍{{ list.project_ubication }}</h4>
          <div class="meta-container date-container">
            <p class="date"><i class="fa fa-calendar fa-fw" aria-hidden="true"></i>&nbsp;{{ list.date }}</p>
            <p class="category">#{{ category.title }}</p>
          </div>
          <a href="javascript:void(0);" class="read-more-less">
            <div class="read-more"><i class="fa fa-angle-double-down fa-fw" aria-hidden="true"></i>{{ site.data.lang[lng].projects.read_more_text }}</div>
            <div class="read-less"><i class="fa fa-angle-double-up fa-fw" aria-hidden="true"></i>{{ site.data.lang[lng].projects.read_less_text }}</div>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="markdown-style">
          {{ list.post | markdownify }}
          <a href="javascript:void(0);" class="read-more-less">
            <i class="fa fa-angle-double-up fa-fw" aria-hidden="true"></i>{{ site.data.lang[lng].projects.read_less_text }}
          </a>
        </div>
      </div>
    </div>
  {%- endfor %}
{%- endfor %}
