This document goes over each file and its uses, 

to minify css: http://cssminifier.com/
js: http://javascript-minifier.com/

when putting website into production, dont put db, js(unminified) and less on server.#

/*********************** BAREBONES PAGE *************************************/

<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>TEMPLATE</title>
  </head>
  <body>
    <div id="wrapper">
    <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
  </body>
</html>

/*********************** BAREBONES PAGE *************************************/


-- css
----main.css: Main style sheet (edit less version)

---- fonts: Leave this folder as is has fonts 

---- vendor: All items not created by me
------ animate.css: Most of animations on the website
------- boostrap.min.css: bootstrap css
------- font-awesome.min.css: icons css
------- jquery.tosrus.all.css: for gallery

-- db 
---- login_details.txt: login details for website and database
---- warwickTKD.sql: SQL schema + data for tables (quiz + articles)

-- images
---- 404.png: 404 error
---- logo.png: logo
---- map.jpg: map 
---- respond.proxy.gif: for bootstrap

---- carousel: carousel images
---- gallery: images for gallery page
---- news: pictures for news articles
---- pattern: patterns diagrams
---- social: social buttons in footer
---- team: exec photos split by year

--js (unminified) : all unminified js files
---- accordion.js: +,- button change
---- active.js: changes active page (blue) on navbar
---- contact.js: validates contact us page
---- news.js: AJAX news page fetches 5 stories for page
---- quiz.js: theory quiz
---- scroll.js: scroll for up button
---- team.js: hides exec per year
---- theory.js: hides korean theory on theory pages
---- video_play.js: pauses carousel when youtube video are playing

---- vendor
------ bootstrap.min.js: bootstrap js
------ hammer.min.js: mobile swipe for gallery
------ jquerybcSwipe.min.js: mobile swipe
------ jquery.min.js: needed for all jquery
------ jquery.tosrus.min.all: gallery page

-- js (minified for production) (look above for minifier) same as other js don't need to put on server

-- less, similiar for css compile from less to css (move css file to css folder) then minify for production, again no need to put on server. (http://lesscss.org/)
---- library.less: animations used in main.less

-- php
---- vendor: for all pagination
---- footer.php: footer in all files (black bit at bottom)
---- head.php: html between head tags on files
---- header.php: navbar header on all files

-- 404.php: 404 error page
-- articles.php: used to retrieve 5 articles from db, and pagination
-- beginners.php, has FAQ and tabs for beginners
-- blue-belt.php: theory page
-- blue-tag.php
-- calendar.php: google embed calendar
-- contact.php: contact form
-- database.php: access database such query, connect etc
-- gallery.php: gallery page
-- getArticles.php: gets latests articles( used in AJAX news.js)
-- getQuestions.php: gets next question (random) from db, send in json (used in AJAX new.js)
-- green-belt.php
-- green-tag.php
-- index.php: home page has news slider, 3 block story and 3 latest news articles
-- news.php: has 5 news articles and pagination
-- quiz.php: quiz container
-- red-belt.php
-- red-tag.php
-- team.php: contains each year exec team
-- training.php: training information
-- white-belt.php
-- yellow-belt.php
-- yellow-tag.php





