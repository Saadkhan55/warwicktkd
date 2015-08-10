-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 10, 2015 at 07:11 PM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `warwickTkd`
--

-- --------------------------------------------------------

--
-- Table structure for table `Articles`
--

CREATE TABLE IF NOT EXISTS `Articles` (
  `Id` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `Date` date NOT NULL,
  `Photo` text NOT NULL,
  `Article` text NOT NULL,
  `Summary` text NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Articles`
--

INSERT INTO `Articles` (`Id`, `Title`, `Date`, `Photo`, `Article`, `Summary`) VALUES
(0, 'Student National 2014', '2015-06-30', '\r\n<img class="img-responsive inline-block lazy" data-original="images/news/student_nationals.jpg">  ', 'For an event featuring 42 universities and 387 competitors, it''s forgivable to believe that a team may struggle to stand out at the British Student Taekwondo Federation (BSTF) national competition. Yet 29 of those plucky fighters represented Warwick University and between them, they battled their way to an impressive 39 medals and a commendable 2nd place during their day at Worcester Arena. Bounding past last year''s 3rd position, the 2015 team brought home 13 golds, 11 silvers, 15 bronzes to cap an impressive competitive season. <br><br>\r\n\r\nThe BSTF competition is the largest national student Taekwondo event on the calendar for many university clubs, and for students both experienced and fresh faced represents a final opportunity to put technical and combative abilities to the test. This sense of finality, expectation and excitement creates a carnival atmosphere for a competition spread across the weekend, with the International Taekwondo Federation (ITF) events and Warwick''s preferred style featured on the Saturday.<br><br>\r\n\r\nThe first fight of the day will always be the weigh-in: a culmination of intensive training, effective diet-control and taking all your clothes off. Hurtling through this obstacle, the Warwick team set their sights early on restocking energy levels, warming up and performing some drills as the officials set up for the day ahead.<br><br>\r\n\r\nStarting with the Patterns event (an opportunity to showcase technical superiority over your opponent in a performance of choreographed fighting moves both individually and within a team) the competition was initially characterised by Warwick domination at the lower levels, with the newer members of the squad obtaining clean sweeps in the C class categories. Despite road bumps over entry patterns for one team and some awkwardly pronounced Korean on the part of 3rd year Alex Shaw, Warwick crept towards an early lead, maximising the medals in the first few events.<br><br>\r\n\r\nCaptain Leigh Collier commended the newer members for their success, stating that, "We encouraged anyone who wanted to compete to be part of the team regardless of their previous experience. Winning all three of gold, silver and bronze across multiple categories was just the icing on the cake!" Leigh reiterated her sense of pride, despite recognising that fewer competitors in the higher belt categories meant that the teams access to medals holding a greater points value was limited. A strong silver for Tom Hart, Liam Morris and Aaron Viudes-Serra awarded for their team patterns demonstrated that the black belts refused to take this set back lying down.<br><br>\r\n\r\nWith the brisk completion of the morning pattern events, the anxiety of preparing for sparring soon became the team''s latest challenge. With a generally random ordering of fights across multiple rings, fighters-in-waiting found opportunity to limber up, often jogging between arenas to support their teammates and keep up with the events hectic schedule.<br><br>\r\n\r\nSpectators were not disappointed and dramatic bouts came in spades, with Warwick''s competitors at the heart of the action. Yellow belt Dave Angell faced a gargantuan task in his final fight of the day, eventually succumbing to the violent fury of his larger opponent despite a valiant effort that earned him a bloody nose and a hard fought bronze. Similarly aggressive blows were exchanged as teammates Kaja Milczewska and Lianna-Beesley Peck were forced into contention over the gold and silver places, with Lianna eventually forging victory thanks to some powerful and well-placed strikes.<br><br>\r\n\r\nWarwick domination in the lower categories frequently yielded internal competition for the top spots. Green tag Oliver Riding bested Ming Xiu with trademark fluidity and flexibility, while 1st year Sean Donner demonstrated that Warwick has plenty of talent for the future, bravely battling injury for the entire final two minute round following a deft kick to the ribs from opponent Ryan Watts, which earned him the only yellow card of the entire competition. Sterling performances saw bronze medals for Jack Berry, Jess O''Brien and Steve Farr, as well as silvers for Stephanie Windows, Pete Davies and Black Belt Pamela Chia.<br><br>\r\n\r\nVeteran fighters Alex Shaw and Alex Bird further proved their reliability once more earning a gold and a bronze respectively, whilst newly promoted green belt Alex Wishart employed some relentless kicks to prove her ability to succeed, even in a higher category, earning yet another gold. A true standout performance from Spaniard Aaron Viudes-Serra, Warwick''s latest superstar and an experienced black belt, garnered two gold medals and one bronze, having demonstrated an almost inhuman amount of leg control. <br><br>\r\n\r\nAs the competition drew to a close, anticipation reached a fever pitch. Whispers of Warwick victory thanks to an early influx of medals infected the camp. Yet with more points awarded to black belt victories, Warwick''s spectacular start was not enough to overcome pressure from Cardiff University, and Warwick was resigned to 2nd place. Incoming captain and first year black belt Kieran Guffick, however, was eager to avoid undermining the day''s successes. "There were many exceptional performances. It''s an amazing position to build from and certainly bodes well for a successful year to come." Warwick came out kicking and didn''t stop until the day was done. <br><br>\r\n\r\nVideos and Photos from event: <a src="https://drive.google.com/drive/folders/0B3e42kemWuX_fnVMV2lvSU90N2VuR18zMzFkbnRSYUw1WmtDaWl4aVBMN1hOVWo0eTJpUkE">Click Here</a>', 'For an event featuring 42 universities and 387 competitors, it''s forgivable to believe that a team may struggle to stand out at the British Student Taekwondo Federation (BSTF) national competition. Yet 29 of those plucky fighters represented Warwick University and between them, they battled their way to an impressive 39 medals and a commendable 2nd place during their day at Worcester Arena. Bounding past last year''s 3rd position, the 2015 team brought home 13 golds, 11 silvers, 15 bronzes to cap an impressive competitive season.<br><br>\r\n\r\n\r\n'),
(1, 'My First Tae Kwon Do Lesson', '2015-06-30', '<img class="lazy" data-original="images/news/lesson.png">\r\n', '<div class="embed-responsive embed-responsive-16by9">\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/KMyrvgwDUzw" frameborder="0" allowfullscreen></iframe>\r\n\r\n</div>\r\n', 'Take a look at what your first Tae Kwon Do lesson might look like. In the video we cover all the main aspects of Tae Kwon Do that we do in lessons. <br><br>\r\n'),
(3, 'Tae Kwon Do Promo', '2015-06-30', '<img data-original="images/news/promo.png" class="lazy">\r\n', '<div class="embed-responsive embed-responsive-16by9">\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/7C8fK7HTbg8" frameborder="0" allowfullscreen></iframe>\r\n\r\n</div>\r\n', 'University of Warwick Tae Kwon Do promotional video for fresher 2015/2016. Take a look at how much fun you can have by joining our sports club. Dreamt of being a super hero your whole life, well do the next best thing do a martial art. More specifically join Warwick Tae Kwon Do. <br><br>\r\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
