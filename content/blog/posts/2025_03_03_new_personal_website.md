+++
title = "New personal website"
date = "2025-03-03"

[extra]
summary = "The way to my personal website "
+++

I've updated my [personal website](/) and switched domains! In this new blog entry we will talk about the reasons for the upgrade, how it was achieved and why I stopped using a custom mail adress.

### The old stack and design

In my first blog about the stack switch I made the mistake by talking about the new stack at first and the old boring stack at second. So lets switch gears and talk about the old stack.

{% centered_thumbnail(path="images/blog_post/2025_03_03_new_personal_website/screenshot_old_website.png", size=400, op="fit", format="webp", quality="75") %}
A screenshot of the new website
{% end %}

The old stack used a Nuxt 3 with a static site release configuration and also tailwind. The stack was fine but Vue and Nuxt were overkill for a static website. I think I tried starting with Hugo and maybe even Zola but didn't know how to mix HTML and markdown.

I was quite happy with the tech stack because I could achieve everything. The main motivator for switching was a rewrite of the content and not of the technology. While I was working on the blog rewrite I liked the new approach and decided to transfer the website itself to the new stack.

The website had a problem with information overload. I wanted to have single site to show "me" and my skills. I found it hard to estimate skills of personal based of potential candidates just by their email. A single website containing their mayor skills, the career and their hobbies was something I always wanted to read before the interview. This was the motivation for creating such a website about myself. It contained:

- Small text about myself
- List of "features" like my dark humor or my motivation to lead people
- List of ALL skills as a software engineer
  - programming languages
  - databases
  - dev ops tools
  - architecture skills
  - ...
- List of my career from school to now
  - short description of the tasks in the job
  - mixed education and working experiences and hobby projects
- List of hobbies

As you can see many many lists and some mixed information. You can see the "Skill bubbles" in the screenshot. I liked them at first but over the yeas I could not justify them or the massive amount of screenspace. Talking about failing [Data-Ink-Ration by Tute](https://infovis-wiki.net/wiki/Data-Ink_Ratio)...

And the main flaw was the missing dark mode. Modern monitors are way to bright and I think I couldn't use the internet without an optional darkmode anymore.

### New website - new stack - "new" design

At first: My main inspiration for the design was [Brittany Chiang](https://brittanychiang.com/). The designs are similiar but while their design is looking good my looks mostly functional.

{% centered_thumbnail(path="images/blog_post/2025_03_03_new_personal_website/screenshot_new_website.png", size=400, op="fit", format="webp", quality="75") %}
A screenshot of the new website
{% end %}

I reduced the information and condensed the career list. The main projects were extracted into an extra list and a separate page was created to list ALL projects. A link was embedded to the blog. I've also updated the socials. Twitter/X is a nazi meetup and I wanted nothing to do it anymore. Today I mostly use mastodon.

The website is using the same [stack my blog did](@/blog/posts/2025_01_11_switch-to-zola.md). It uses Zola as a template renderer written in Rust with Tailwind (now in version 4). I was thinking about keeping the new blog on the old url `blog.meldanor.me` but decided to integrate it into this project and this website and host it under `kiliangaertner.de/blog/`. The main reason is the reduced maintance effort because I only need to keep one repository and one project up to date instead of two. If I write a new post the chances are high I also update the project and keep the software up to date.

Because of this the old URL is now a redirect to the new one and the blog repository is archived and points to the new respository - that you can find in this footer!

My reverse proxy Traefik – handling the reverse proxy and the HTTPS certificates – was also updated to 3.x from 2.x. It was seamless and without issues. The configuration via labels just for this website is a bit more complex but handles everything and it works:

```
# Default host and redirect www. to non www. domain
- "traefik.http.routers.personalwebsite.rule=Host(`www.kiliangaertner.de`) || Host(`kiliangaertner.de`)"
- "traefik.http.routers.personalwebsite.middlewares=removewww@docker"
- "traefik.http.routers.personalwebsite.tls.certresolver=porkbun"
- "traefik.http.routers.personalwebsite.entrypoints=websecure"
- "traefik.http.middlewares.removewww.redirectregex.regex=^https?://www\\.(.+)"
- "traefik.http.middlewares.removewww.redirectregex.replacement=https://$$1"
- "traefik.http.middlewares.removewww.redirectregex.permanent=true"

# Redirect the old blog URL to the new URL
- "traefik.http.routers.blogOldHost.rule=Host(`blog.meldanor.me`)"
- "traefik.http.routers.blogOldHost.middlewares=redirectBlogOldHosts@docker"
- "traefik.http.routers.blogOldHost.tls.certresolver=porkbun"
- "traefik.http.routers.blogOldHost.entrypoints=websecure"
- "traefik.http.middlewares.redirectBlogOldHosts.redirectregex.regex=^https?://blog\\.meldanor\\.me(.+)"
- "traefik.http.middlewares.redirectBlogOldHosts.redirectregex.replacement=https://kiliangaertner.de/blog/"
- "traefik.http.middlewares.redirectBlogOldHosts.redirectregex.permanent=true"

# Redirect old URLs to the new URL
- "traefik.http.middlewares.redirectOldHosts.redirectregex.regex=.*"
- "traefik.http.middlewares.redirectOldHosts.redirectregex.replacement=https://kiliangaertner.de"
- "traefik.http.middlewares.redirectOldHosts.redirectregex.permanent=true"

# Split this up because this domain will expire and is hosted by gandi
# Remove this part when the domain is expired in 2026
- "traefik.http.routers.personalwebsiteOldHostGandi.rule=Host(`kilian-gaertner.dev`) || Host(`www.kilian-gaertner.dev`)"
- "traefik.http.routers.personalwebsiteOldHostGandi.middlewares=redirectOldHosts@docker"
- "traefik.http.routers.personalwebsiteOldHostGandi.tls.certresolver=gandi"
- "traefik.http.routers.personalwebsiteOldHostGandi.entrypoints=websecure"

- "traefik.http.routers.personalwebsiteOldHostPorkbun.rule=Host(`www.meldanor.me`) || Host(`meldanor.me`)"
- "traefik.http.routers.personalwebsiteOldHostPorkbun.middlewares=redirectOldHosts@docker"
- "traefik.http.routers.personalwebsiteOldHostPorkbun.tls.certresolver=porkbun"
- "traefik.http.routers.personalwebsiteOldHostPorkbun.entrypoints=websecure"
```

### Gandi vs Porkbun

Maybe you've spotted the two different certresolver, one for `porkbun`, the other for `gandi`.

I've used [Gandi](https://www.gandi.net/en-GB) in the past 10? years or so to handle the domain DNS stuff. It was cheap at the time, it worked without problems and I could configure it for my needs. Each domain had 3? mail boxes for free and I've used them for automated email reports like from my router. Over the years the UI changed and its core aspect of domain handling vanished. I could rent a hosting and much more. The free email accounts were removed and the monthly costs for them were too high to keep them.

I was not unhappy with them because it worked but I was no longer really happy with them. Advertisments in the dashboard, dark pattern when renewing a domain like automatically placing the addition stuff to the shopping cart. So I was periodically searching for an alternative and I found them in [Porkbun](https://porkbun.com/). Gandi wanted about 50$ for a domain renewal and I found this way to high just for a small domain like mine. Porkbun wanted 16$. I think this is a fine price for a small hobby domain. I even could aquire the "kiliangaertner.de" domain. The old "kilian-gaertner.dev" domain was my choice because the original was not available. So I moved the domains and the DNS entries to Porkbun which took a few days.

And now the USA is a big facist shit show and I'm looking for a european based domain issuer. Porkbun is based in the US and I fear that the Trump dictatorship will result in a massive regression in tech. Damn you.

### Summary

I'm quite happy with the new website. The functioning dark mode, it works on mobile and has up to date information about myself. I have simple place to write blogs and hopefully can maintain it more easily. I want to explore the possiblities of multi language for the website. At the moment I fear people are missing the point of me being a good old German dude.
