---
layout: page
title: Projects
permalink: /projects/
nav: false
nav_order: 2
scholar:
  sort_by: year
  order: descending
  group_by: year
  group_order: descending
---

<!-- pages/projects.md -->

{% include bib_search.liquid %}

<div class="publications">
  {% bibliography --file projects %}
</div>
