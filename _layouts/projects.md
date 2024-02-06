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
  <h1 class="title2">{{ site.data.lang[lng].projects.worked }}:</h1>
<div class="projectsFormat">
  <div class="companiesProjectsContainer">
    <div>
      <h1>{{ site.data.lang[lng].projects.companies }}:</h1>
      <div>
        <img src="/assets/img/logos/lord logo.webp" alt="{{site.data.lang[lng].projects.logo}} Lord">
        <img src="/assets/img/logos/accionacultura.webp" alt="{{site.data.lang[lng].projects.logo}} Acciona">
      </div>
    </div>
    <div>
      <h1>{{ site.data.lang[lng].projects.museums }}: </h1>
      <div class="triple-img">
        <img src="/assets/img/logos/rise_rosa_rage.webp" alt="{{site.data.lang[lng].projects.logo}} Rise Rosa Rage">
        <img src="/assets/img/logos/ithra.webp" alt="{{site.data.lang[lng].projects.logo}} Ithra">
        <img src="/assets/img/logos/National.webp" alt="{{site.data.lang[lng].projects.logo}} National Trust" id="national-trust" >
      </div>
    </div>
    <div>
      <h1>{{ site.data.lang[lng].projects.festivals }}: </h1>
      <div>
        <img src="/assets/img/logos/Cibra.webp" alt="{{site.data.lang[lng].projects.logo}} Cibra">
        <img src="/assets/img/logos/rosa-lago.webp" alt="{{site.data.lang[lng].projects.logo}} Roses by the Lake">
      </div>
    </div>
    <div>
      <h1>{{ site.data.lang[lng].projects.universities }}:</h1>
      <div class="triple-img">
        <img src="/assets/img/logos/barreira.webp" alt="{{site.data.lang[lng].projects.logo}} Barreira">
        <img src="/assets/img/logos/Cambridge.webp" alt="{{site.data.lang[lng].projects.logo}} Cambridge">
        <img src="/assets/img/logos/UCL-Logo.webp" alt="{{site.data.lang[lng].projects.logo}} UCL">
      </div>
    </div>
    <div>
      <h1>{{ site.data.lang[lng].projects.private_foundations }}: </h1>
      <div>
        <img src="/assets/img/logos/mainel.webp" alt="{{site.data.lang[lng].projects.logo}} Fundacion Mainel">
      </div>
    </div>
    <div>
      <h1>{{ site.data.lang[lng].projects.publications }}: </h1>
      <div>
        <img src="/assets/img/logos/NuartJournal-logo-2021-stacked.webp" alt="{{site.data.lang[lng].projects.logo}} Nuart Journal">
      </div>
    </div>
  </div>
</div>
<h1 class="title2">{{ site.data.lang[lng].projects.selected }}:</h1><br>
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
          <div id="title">
            <h1>{{ list.project_name }}</h1>
            <h4>{{ list.project_excerpt }}</h4>
            <h4>📍{{ list.project_ubication }}</h4>
          </div>
          <div class="meta-container date-container">
            <p class="date"><i class="fa fa-calendar fa-fw" aria-hidden="true"></i>&nbsp;{{ list.date }}</p>
            <p class="category">#{{ category.title }}</p>
          </div>
          <a href="javascript:void(0);" class="read-more-less link">{{ site.data.lang[lng].projects.read_more_text }}</a>
          <div class="project-content">
            {{ list.post | markdownify }}
          </div>
        </div>
      </div>
    </div>
  {%- endfor %}
{%- endfor %}
<div class="showPopUp">
    <div class="overlay"></div>
    <div class="img-show">
      <span>X</span>
      <div id="principalPopUp"></div>
      <div id="descPopUp"></div>
    </div>
</div>
