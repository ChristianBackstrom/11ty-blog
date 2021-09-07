---

title: blog

---

### all posts


<ul>
{% for posts in collections.post %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>