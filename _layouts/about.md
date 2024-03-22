---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT


layout: default
# main page (index.html)
---
{%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}


{%- if page.img %}
 {%- if site.data.conf.others.home.header_img_with_img_tag == true -%}
   {%- capture home_img_tag -%} <img src="{{ page.img }}" /> {%- endcapture -%}
   {%- capture home_img_background_style -%} style="height: unset;" {%- endcapture -%}
 {% else %}
   {%- capture home_img_background_style -%} style="background-image:url('{{ page.img }}');" {%- endcapture -%}
 {%- endif -%}
{%- endif -%}

<h1 class="containertitle">
  <img id="imagename" src="/assets/img/default/name logo.webp" alt="{{ site.data.lang[lng].about.images.logo }}">
</h1>
 <div class="home-intro-text markdown-style padding-container even-background">
  {{ content }}
  <div>
    <div class="projectsFormat">
        <div class="photoTitle">
        <img class="imgTitles" src="/assets/img/default/logo.webp" alt="Logo image">
        <h2 class="title2">{{ site.data.lang[lng].projects.worked }}:</h2>
      </div>
      <div class="companiesProjectsContainer">
        <div>
          <h3>{{ site.data.lang[lng].projects.companies }}:</h3>
          <div>
            <img src="/assets/img/logos/lord logo.webp" alt="{{site.data.lang[lng].projects.logo}} Lord">
          <img src="/assets/img/logos/accionacultura.webp" alt="{{site.data.lang[lng].projects.logo}} Acciona">
        </div>
      </div>
      <div>
        <h3>{{ site.data.lang[lng].projects.museums }}: </h3>
        <div class="triple-img">
          <img src="/assets/img/logos/rise_rosa_rage.webp" alt="{{site.data.lang[lng].projects.logo}} Rise Rosa Rage">
          <img src="/assets/img/logos/ithra.webp" alt="{{site.data.lang[lng].projects.logo}} Ithra">
          <img src="/assets/img/logos/National.webp" alt="{{site.data.lang[lng].projects.logo}} National Trust" id="national-trust" >
        </div>
      </div>
      <div>
        <h3>{{ site.data.lang[lng].projects.festivals }}: </h3>
        <div>
          <img src="/assets/img/logos/Cibra.webp" alt="{{site.data.lang[lng].projects.logo}} Cibra">
          <img src="/assets/img/logos/rosa-lago.webp" alt="{{site.data.lang[lng].projects.logo}} Roses by the Lake">
        </div>
      </div>
      <div>
        <h3>{{ site.data.lang[lng].projects.universities }}:</h3>
        <div class="triple-img">
          <img src="/assets/img/logos/barreira.webp" alt="{{site.data.lang[lng].projects.logo}} Barreira">
          <img src="/assets/img/logos/Cambridge.webp" alt="{{site.data.lang[lng].projects.logo}} Cambridge">
          <img src="/assets/img/logos/UCL-Logo.webp" alt="{{site.data.lang[lng].projects.logo}} UCL">
        </div>
      </div>
      <div>
        <h3>{{ site.data.lang[lng].projects.private_foundations }}: </h3>
        <div>
          <img src="/assets/img/logos/mainel.webp" alt="{{site.data.lang[lng].projects.logo}} Fundacion Mainel">
        </div>
      </div>
      <div>
        <h3>{{ site.data.lang[lng].projects.publications }}: </h3>
        <div>
          <img src="/assets/img/logos/NuartJournal-logo-2021-stacked.webp" alt="{{site.data.lang[lng].projects.logo}} Nuart Journal">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{%- if lng_pages.size > 0 and site.data.conf.others.home.new_posts %}
<div class="multipurpose-container new-posts-container">
 <h2>{{ site.data.lang[lng].home.new_posts_title }}</h2>
 <ul class="new-posts">
 {%- for _post in lng_pages limit: site.data.conf.others.home.new_posts_count_limit -%}
   <li>
     {%- assign page_title = _post.title -%}
     {%- include util/auto-content-post-title-rename.liquid title = page_title -%}
     {%- include multi_lng/get-localized-long-date-format.liquid date = _post.date -%}
     <a href="{{ site.baseurl }}{{ _post.url }}">{{ page_title }}
       <span>{{ _post.date | date: out_date_format }}</span>
     </a>
   </li>
 {% endfor -%}
   <li>
     {%- include multi_lng/get-page-by-layout.liquid layout = 'archives' -%}
     <a href="{{ site.baseurl }}{{ layout_page_obj.url }}">{{ site.data.lang[lng].home.new_posts_show_more_button }}</a>
   </li>
 </ul>
{% endif -%}
