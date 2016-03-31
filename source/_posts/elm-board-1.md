---
title: Elm-board #1
bg: "/images/dsp-blog.png"
tags:
- dajsiepoznac
- elm
- ui
- opensource
---
{% blockquote %}
"It's time to start someday. The idea of dev blog and creating open-source project lingered on my mind for too long."
{% endblockquote %}

That was my reaction on competition called "Daj się poznać" (it's in polish, and it translates to something like "Get noticed"). The idea is simple - create a developer blog and for 10 weeks develop open-source project hosted on github and update blog 2 times a week about project progress.

# Project idea

Elm board is concept that hit me during my work with huge ui components in single page applications. The problem that I faced many times was - creating own calendar component, which is hard. That's why at my company we used [fullcalendar](http://fullcalendar.io/). What pains me is lack of similar widgets, there are couple of libraries for drag&drop or datepicker component, but there aren't many tools that would work like google calendar.

From the moment I stumbled upon fullcalendar I wanted to try myself in creating something similar. But what I want to create is something more than just another calendar widget - a rich board component for event management. Calendar would be just one of possibilities of using elm-board (with events restricted by day, time and duration), while other could include kanban board (where events would be created around phases and assigned users). All shall depend on user defined rules and data organization.

### Features:
* Full drag&drop support
* Custom column defining - these may be days of a week, some resources (like rooms), or workflow phases
* Custom html generation of each part of the board
* Defining own rules:
  * when events could be moved or copied
  * which events could overlap and when
  * events cascading (to create event for containing only other events) 
  * binding data to events (time, day, tags, user, category)

Some miminal set of stylesheets will be included as well (with options to customize them as well).

### Elm

Library will be written in elm language. It's quite young (yet mature) functional-reactive static typed programming language that transpiles to javascript that makes use of [virtual-dom](https://github.com/Matt-Esch/virtual-dom). This means that in order to use elm-board library application will need to include elm runtime & virtual dom which is 176 KB minified. There are couple of reasons for decision of choosing elm:
* using elm-board will hopefully encourage writing web pages in elm, or at least make it more noticed by the front-end community 
* elm has marvelous static types with great compiler that watches for code consistency and checks every possible overlook in code
* it's not as popular as it deserves to be 
* I want to test myself how elm will behave in creating that kind of ui-library
* elm ships with time-travelling debugger and hot-swapping of code in runtime

When I was talking about elm in last Cracow's meet.js the main type of questions after the speach were "how do it scale with big applications", and unfortunately I couldn't answer these questions. That's because I've only tested elm in small proof of concepts and there aren't any chance I will have the oppurnity to make use of it in my workplace. That's also why I decided to try and write ui-library to test how elm will fit. 

If you haven't heard earlier about it, I would recommend to visit [elm lang site](http://elm-lang.org/) and find out, why this language is so tempting. There are also couple of neat blog posts about elm:
* [using elm in production](http://futurice.com/blog/elm-in-the-real-world).
* [what problems does elm solve](https://tkowal.wordpress.com/2016/01/18/what-problems-does-elm-solve/)

