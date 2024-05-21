---
layout: util/compress_js
---
/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

{% include_relative _js/default/nav/close-top-nav-on-outside-click.js %}
{% include_relative _js/default/tooltip-init.js %}
{% include_relative _js/default/show-tooltip.js %}
{% include_relative popups.js %}
{% include_relative _js/default/contact_form.js %}

{% if site.data.conf.main.side_nav_toggle_button_no_top_nav_buttons -%}
  {% include_relative _js/default/nav/side-nav-toggle.js %}
{%- endif %}

{% if site.data.conf.main.scroll_back_to_top_button -%}
  {% include_relative _js/default/scroll-to-top.js %}
{%- endif %}

{% for owner in site.data.owner -%}
  {% assign email_exist = owner[1].contacts | where_exp: "item", "item.email != nil" | first -%}
{%- endfor %}

{% if site.data.lang.size > 1 and site.data.conf.main.language_switch_lang_list.size > 1 and site.data.conf.main.language_translation_offer_box -%}
  {% assign language_translation_offer_box = true %}
  {% include_relative _js/default/check-storage-availability.js %}
  {% include_relative _js/default/lang-offer-msg-box.js %}
{%- endif %}

{% if site.data.conf.main.cookie_consent.enable == true
  or language_translation_offer_box == true
  or site.data.conf.main.contact_form.enable == true
%}
  {% include_relative _js/default/sliding-msg-box.js %}
{%- endif %}

{% if site.data.conf.main.cookie_consent.enable == true %}
  {% include_relative _js/default/cookie-consent.js %}
{%- endif %}

/**********************************************************
* for layout specific content
***********************************************************/

{% assign pages = site.html_pages | where_exp: "item", "item.layout == 'projects'" %}
{% if pages.size > 0 %} {% assign projects_page_exist = true %} {% endif %}


{% if home_page_exist %}
  {% include_relative _js/home/heading-fade-in.js %}
{% endif %}

{%- if links_page_exist and site.data.conf.others.links.use_rows_as_link -%}
  {% include_relative _js/links/open-url-in-new-page.js %}
{%- endif %}
