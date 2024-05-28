---
layout: about
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_about

# image for page specific usage
img: ":home-heading.jpg"
# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
# don't forget that this is root index.html. If you disable this, there will be no index.html page to open
#published: false
---
<div>
    <div class="photoTitle">
        <img class="imgTitles" src="/assets/img/default/logo.webp" alt="Logo image">
        <h2 class="title2"> Company </h2>
    </div>
    <p>CuraCultura is an international company dedicated to caring for both people and culture via projects that enrich their communities, while seeking to make the cultural sector a kinder place for all who engage in it, whether publicly or behind the scenes. We consult and collaborate on curatorial and educational projects, in a broad range of areas and for various types of clients.</p>
</div>
<div>
    <div class="photoTitle">
        <img class="imgTitles" src="/assets/img/default/logo.webp" alt="Logo image">
        <h2 class="title2"> Philosophy  </h2>
    </div>
    <p>
        Curating is Caring. This is the basis from which we work on all our projects, and with each other. We’re
        currently putting together a Manifesto about what this means in practice, and as caring also means listening
        and sharing, we’d like to invite you to contribute your ideas for A Collaborative Manifesto for Curating
        with Care as explained on our page <a class="link" href="en/tabs/manifesto">Manifesto</a>. You can see all
        the points collated to date on this non-editable <a href="{{ site.data.conf.main.links.manifesto_doc }}"
        target="_blank" class="link">Google doc</a>, where yours will be added after review to ensure we keep a safe
        space.
    </p>
</div>
{{ website_info_text_first }}
{{ website_info_text_second }}
