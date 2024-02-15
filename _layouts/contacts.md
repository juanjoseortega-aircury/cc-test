---
layout: default
# Contacts page
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
<div>
 <div class="row about-main">
   <div class="col-md-9 about-header">
   </div>
 </div>
 <div class="row about-divider">
 </div>
 <div class="row">
   <div class="col-md-12">
     <div class="about-msg markdown-style">
      <div class="containertitle">
        <h1 id="titleAux">{{ site.data.lang[lng].contacts.title }}</h1>
      </div>
     <div id="contact-container">
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
        <div id="contact-form">
          <form action="https://api.web3forms.com/submit" onsubmit="sendForm('{{ site.data.lang[lng].contact_form.alert }}')" method="POST">
            <input type="hidden" name="subject" id="form-subject">
            <input type="hidden" name="access_key" value="{{ site.data.conf.main.contact_form.key }}">
            <input type="hidden" name="redirect" id="form-redirect">
            <input type="checkbox" name="botcheck" style="display: none;">
            <input type="text" name="Name" id="name" placeholder="{{ site.data.lang[lng].contact_form.name }}" required><br>
            <input type="email" name="Email" placeholder="{{ site.data.lang[lng].contact_form.email }}" required><br>
            <select required id="select-form">
              <option selected disabled hidden value="">{{ site.data.lang[lng].contact_form.reason.text }}</option>
              <option value="Discuss a project">{{ site.data.lang[lng].contact_form.reason.discuss }}</option>
              <option value="Contribute to the Manifesto">{{ site.data.lang[lng].contact_form.reason.contribute }}</option>
              <option value="General Enquiry">{{ site.data.lang[lng].contact_form.reason.enquiry }}</option>
            </select><br>
            <textarea name="message" placeholder="{{ site.data.lang[lng].contact_form.message }}" required></textarea><br>
            <div class="h-captcha" data-callback="hcaptchaCallback" data-captcha="true"></div>
            <button type="submit" disabled>{{ site.data.lang[lng].contact_form.button_name }}</button>
          </form>
          <script src="https://web3forms.com/client/script.js" async defer></script>
        </div>
       {%- if site.data.conf.others.about.show_contacts and site.data.owner[lng].contacts.size > 0 %}
         {% include default/nav/contact-links.html -%}
       {% endif -%}
      </div>
     </div>
     </div>
   </div>
 </div>
</div>