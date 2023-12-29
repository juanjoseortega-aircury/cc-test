---
layout: default
# Contacts page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<div class="multipurpose-container about-container">
 <div class="row about-main">
   <div class="col-md-9 about-header">
   </div>
 </div>
 <div class="row about-divider">
 </div>
 <div class="row">
   <div class="col-md-12">
     <div class="about-msg markdown-style">
       {{ content }}
       {%- if site.data.conf.main.contact_form.enable and site.data.conf.others.about.show_contact_form_button %}
         <a href="javascript:void(0);" class="btn-base " onclick="ContactForm.show();" role="button">{{ site.data.lang[lng].contact_form.button_name }}</a>
       {% endif -%}
           <div class="meta-container">
       {%- assign tmp_obj =  site.data.owner[lng].contacts | where_exp: "item", "item.email != nil" | first -%}
       {%- assign email = tmp_obj['email'] -%}
       {%- if site.data.conf.others.about.show_email and email %}
         {%- assign _email = email | split: '@' %}
         <p class="email">
           <a href="javascript:void(0);" onclick="setAddress('{{ _email[0] }}', '{{ _email[1] }}');">
             {%- if site.data.conf.others.about.email_icon %}<i class="{{ 'fa-fw ' }}{{ site.data.conf.others.about.email_icon }}"></i>{% endif -%}
             &nbsp;{{ site.data.lang[lng].about.email_title }}
           </a>
         </p>
       {% endif -%}
       {%- if site.data.conf.others.about.show_contacts and site.data.owner[lng].contacts.size > 0 %}
         {% include default/nav/contact-links.html -%}
       {% endif -%}
     </div>
     </div>
   </div>
 </div>
</div>