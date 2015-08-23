-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 22, 2015 at 02:51 PM
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
(0, 'Student National 2015', '2015-06-30', '\r\n<img class="img-responsive" src="images/news/student_nationals.jpg">  ', 'For an event featuring 42 universities and 387 competitors, it''s forgivable to believe that a team may struggle to stand out at the British Student Taekwondo Federation (BSTF) national competition. Yet 29 of those plucky fighters represented Warwick University and between them, they battled their way to an impressive 39 medals and a commendable 2nd place during their day at Worcester Arena. Bounding past last year''s 3rd position, the 2015 team brought home 13 golds, 11 silvers, 15 bronzes to cap an impressive competitive season. <br><br>\r\n\r\nThe BSTF competition is the largest national student Taekwondo event on the calendar for many university clubs, and for students both experienced and fresh faced represents a final opportunity to put technical and combative abilities to the test. This sense of finality, expectation and excitement creates a carnival atmosphere for a competition spread across the weekend, with the International Taekwondo Federation (ITF) events and Warwick''s preferred style featured on the Saturday.<br><br>\r\n\r\nThe first fight of the day will always be the weigh-in: a culmination of intensive training, effective diet-control and taking all your clothes off. Hurtling through this obstacle, the Warwick team set their sights early on restocking energy levels, warming up and performing some drills as the officials set up for the day ahead.<br><br>\r\n\r\nStarting with the Patterns event (an opportunity to showcase technical superiority over your opponent in a performance of choreographed fighting moves both individually and within a team) the competition was initially characterised by Warwick domination at the lower levels, with the newer members of the squad obtaining clean sweeps in the C class categories. Despite road bumps over entry patterns for one team and some awkwardly pronounced Korean on the part of 3rd year Alex Shaw, Warwick crept towards an early lead, maximising the medals in the first few events.<br><br>\r\n\r\nCaptain Leigh Collier commended the newer members for their success, stating that, "We encouraged anyone who wanted to compete to be part of the team regardless of their previous experience. Winning all three of gold, silver and bronze across multiple categories was just the icing on the cake!" Leigh reiterated her sense of pride, despite recognising that fewer competitors in the higher belt categories meant that the teams access to medals holding a greater points value was limited. A strong silver for Tom Hart, Liam Morris and Aaron Viudes-Serra awarded for their team patterns demonstrated that the black belts refused to take this set back lying down.<br><br>\r\n\r\nWith the brisk completion of the morning pattern events, the anxiety of preparing for sparring soon became the team''s latest challenge. With a generally random ordering of fights across multiple rings, fighters-in-waiting found opportunity to limber up, often jogging between arenas to support their teammates and keep up with the events hectic schedule.<br><br>\r\n\r\nSpectators were not disappointed and dramatic bouts came in spades, with Warwick''s competitors at the heart of the action. Yellow belt Dave Angell faced a gargantuan task in his final fight of the day, eventually succumbing to the violent fury of his larger opponent despite a valiant effort that earned him a bloody nose and a hard fought bronze. Similarly aggressive blows were exchanged as teammates Kaja Milczewska and Lianna-Beesley Peck were forced into contention over the gold and silver places, with Lianna eventually forging victory thanks to some powerful and well-placed strikes.<br><br>\r\n\r\nWarwick domination in the lower categories frequently yielded internal competition for the top spots. Green tag Oliver Riding bested Ming Xiu with trademark fluidity and flexibility, while 1st year Sean Donner demonstrated that Warwick has plenty of talent for the future, bravely battling injury for the entire final two minute round following a deft kick to the ribs from opponent Ryan Watts, which earned him the only yellow card of the entire competition. Sterling performances saw bronze medals for Jack Berry, Jess O''Brien and Steve Farr, as well as silvers for Stephanie Windows, Pete Davies and Black Belt Pamela Chia.<br><br>\r\n\r\nVeteran fighters Alex Shaw and Alex Bird further proved their reliability once more earning a gold and a bronze respectively, whilst newly promoted green belt Alex Wishart employed some relentless kicks to prove her ability to succeed, even in a higher category, earning yet another gold. A true standout performance from Spaniard Aaron Viudes-Serra, Warwick''s latest superstar and an experienced black belt, garnered two gold medals and one bronze, having demonstrated an almost inhuman amount of leg control. <br><br>\r\n\r\nAs the competition drew to a close, anticipation reached a fever pitch. Whispers of Warwick victory thanks to an early influx of medals infected the camp. Yet with more points awarded to black belt victories, Warwick''s spectacular start was not enough to overcome pressure from Cardiff University, and Warwick was resigned to 2nd place. Incoming captain and first year black belt Kieran Guffick, however, was eager to avoid undermining the day''s successes. "There were many exceptional performances. It''s an amazing position to build from and certainly bodes well for a successful year to come." Warwick came out kicking and didn''t stop until the day was done. <br><br>\r\n\r\nVideos and Photos from event: <a src="https://drive.google.com/drive/folders/0B3e42kemWuX_fnVMV2lvSU90N2VuR18zMzFkbnRSYUw1WmtDaWl4aVBMN1hOVWo0eTJpUkE">Click Here</a>', 'For an event featuring 42 universities and 387 competitors, it''s forgivable to believe that a team may struggle to stand out at the British Student Taekwondo Federation (BSTF) national competition. Yet 29 of those plucky fighters represented Warwick University and between them, they battled their way to an impressive 39 medals and a commendable 2nd place during their day at Worcester Arena. Bounding past last year''s 3rd position, the 2015 team brought home 13 golds, 11 silvers, 15 bronzes to cap an impressive competitive season.<br><br>\r\n\r\n\r\n'),
(1, 'My First Tae Kwon Do Lesson', '2015-06-30', '<img class="img-responsive" src="images/news/lesson.png">\r\n', '<div class="embed-responsive embed-responsive-16by9">\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/KMyrvgwDUzw" frameborder="0" allowfullscreen></iframe>\r\n\r\n</div>\r\n', 'Take a look at what your first Tae Kwon Do lesson might look like. In the video we cover all the main aspects of Tae Kwon Do that we do in lessons. <br><br>\r\n'),
(3, 'Tae Kwon Do Promo', '2015-06-30', '<img src="images/news/promo.png" class="img-responsive">\r\n', '<div class="embed-responsive embed-responsive-16by9">\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/yVCnaEBH59E" frameborder="0" allowfullscreen></iframe>\r\n</div>\r\n', 'University of Warwick Tae Kwon Do promotional video for fresher 2015/2016. <br> For more information:  \r\n<br>\r\nFacebook Group: <a href="https://www.facebook.com/groups/warwicktkd/?fref=ts">https://www.facebook.com/groups/warwicktkd</a>\r\n<br>\r\n\r\nFacebook Page: <a href="https://www.facebook.com/UniversityofWarwickTaekwondo?fref=ts">https://www.facebook.com/UniversityofWarwickTaekwondo</a>\r\n<br><br>\r\n\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE IF NOT EXISTS `quiz` (
  `Id` int(11) NOT NULL,
  `Grade` int(11) NOT NULL,
  `Question` text NOT NULL,
  `Choice1` text NOT NULL,
  `Choice2` text NOT NULL,
  `Choice3` text NOT NULL,
  `Choice4` text NOT NULL,
  `Correct` text NOT NULL COMMENT 'Correct answer from 4 choice',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`Id`, `Grade`, `Question`, `Choice1`, `Choice2`, `Choice3`, `Choice4`, `Correct`) VALUES
(1, 1, 'What is Sitting Stance in Korean?', 'Gunnun Sogi', 'Ap Jirugi', 'Four Directional Punch', 'Annun Sogi', 'Choice4'),
(2, 1, 'What is Attention Stance in Korean?', 'Junbi Jirugi', 'Palmok Magi', 'Charyot Sogi', 'Annun Sogi', 'Choice3'),
(3, 1, 'What is Side Kick in Korean?', 'Dollyo Chagi', 'Ap Chagi', 'Yop Chagi', 'Ap Jirugi', 'Choice3'),
(4, 1, 'What does Goman mean in English?', 'Stop', 'Start', 'Finish', 'Kick', 'Choice1'),
(5, 1, 'Which of the following is not a tenet of Tae Kwon Do?', 'Loyalty', 'Self Control', 'Courtesy', 'Integrity', 'Choice1'),
(6, 1, 'What is Walking Stance in Korean?', 'Swiyo', 'Baro Jirugi', 'Baro Sogi', 'Gunnun Sogi', 'Choice4'),
(7, 1, 'What is Low Section in Korean', 'Napunde', 'Najunde', 'Kaunde', 'Chagi', 'Choice2'),
(8, 1, 'What is Outer Forearm Block?', 'An Palmok Makgi', 'Bakat Palmok Makgi', 'Sonkal Makgi', 'Ap Makgi', 'Choice2'),
(9, 1, 'What is Ap Chagi in English?', 'Side Kick ', 'Turning Kick', 'Upwards Kick', 'Front Kick', 'Choice4'),
(10, 1, 'What is Parallel Ready Stance?', 'Narani Junbi Sogi', 'Annun Sogi', 'Gunnun Sogi', 'Saju Sogi', 'Choice1'),
(11, 1, 'What is Reverse Punch in Korean?', 'Sonkal Najunde Makgi', 'Bandae Jirugi', 'Baro Jirugi', 'Ap Jirugi', 'Choice2'),
(12, 1, 'What is Saju Jirugi in English?', 'Four Direction', 'Four Directional Block', 'First Pattern', 'Four Directional Punch', 'Choice4'),
(13, 1, 'What does Swiyo mean in English?', 'Relax', 'Attention', 'Ready', 'Back To Mark', 'Choice1'),
(14, 1, 'What is Nopunde in English?', 'Low', 'Punch', 'High', 'Section', 'Choice3'),
(15, 1, 'What is Dobok in English?', 'Training Hall', 'Training Suit', 'Belt', 'One', 'Choice2'),
(16, 1, 'What is Knifehand Low Block in Korean?', 'An Palmok Magki', 'Najunde Magki', 'Hana Magki', 'Sonkal Najunde Makgi', 'Choice4'),
(17, 1, 'What does Charyot mean in English?', 'Start', 'Bow', 'Attention', 'Finish', 'Choice3'),
(18, 1, 'What is Dollyo Chagi in Korean', 'Turning Kick', 'Front Punch', 'Side Kick', 'Reverse Punch', 'Choice1'),
(19, 1, 'What is Courtesy in Korean', 'Yom Chi', 'Ye Ui', 'Si Jak', 'Goman', 'Choice2'),
(20, 1, 'What is the number One in Korean?', 'Dool', 'Set', 'Hana', 'Net', 'Choice3'),
(21, 1, 'What is Front Forefist Punch in Korean?', 'Baro Jirugi', 'Bandae Jirugi', 'Saju Jirugi', 'Ap Joomuk Jirugi', 'Choice4'),
(22, 1, 'What is Tasot in English?', 'Five', 'One', 'Two', 'Start', 'Choice1'),
(23, 1, 'What is An Palmok Makgi?', 'Forearm Block', 'Outer Block', 'Outer Forearm Block', 'Inner Forearm Block', 'Choice4'),
(24, 1, 'What is Self Control in Korean?', 'Ye Ui', 'Yom Chi', 'In Nae', 'Guk Ki', 'Choice4'),
(25, 1, 'What is middle section in Korean?', 'Najunde', 'Kaunde', 'Nopunde', 'Hana', 'Choice2'),
(26, 2, 'What is L-Stance in Korean?', 'Gunnun Sogi', 'Annun Sogi', 'Soojik Sogi', 'Niunja Sogi', 'Choice4'),
(27, 2, 'What is the name for the ball of the foot in Korean?', 'Ap Joomuk', 'Ap Kumchi', 'Ap Foochi', 'Ap Balkal', 'Choice2'),
(28, 2, 'What is Balkal in English?', 'Knifehand', 'Footsword', 'Forearm', 'Elbow', 'Choice2'),
(29, 2, 'What is Fist in Korean?', 'Joomuk', 'Kumchi', 'Jirugi', 'Balkal', 'Choice1'),
(30, 2, 'What is Joomuk in English?', 'Foot', 'Fist', 'Hand', 'Ball of Foot', 'Choice2'),
(31, 2, 'What does Tul mean in English?', 'Belt', 'Instructor', 'Technique', 'Pattern', 'Choice4'),
(32, 2, 'What is Guarding Block in Korean?', 'Kaunde Palmok Makgi', 'Bandae Makgi', 'Daebi Makgi', 'Jeogori Makgi', 'Choice3'),
(33, 2, 'What is the name for the Dobok Jacket in Korean?', 'Jeogori', 'Hyachi', 'Baj-I', 'Simsa', 'Choice1'),
(34, 2, 'What is the name for the Suit Trousers in Korean?', 'Jeogori', 'Hyachi', 'Baj-I', 'Simsa', 'Choice3'),
(35, 2, 'What is in your own time in Korean?', 'Kooryongymacho', 'Yop Cha Jirugi', 'Kooryongopshi', 'Si Jak', 'Choice3'),
(36, 2, 'What is Balkal in English', 'Front Kick', 'Side Kick', 'Ball of foot', 'Footsword', 'Choice4'),
(37, 2, 'What is Six in Korean?', 'Ilgop', 'Yadul', 'Yaset', 'Yul', 'Choice3'),
(38, 2, 'What is knifehand in Korean?', 'Sonkal', 'Hana', 'Balkal', 'Palmok', 'Choice1'),
(39, 2, 'What is Sonkal in English?', 'Net', 'Set', 'Knifehand', 'Palmok', 'Choice3'),
(40, 2, 'What is Baro in English?', 'Ready', 'Back To Mark', 'Dismiss', 'Start', 'Choice2'),
(41, 2, 'What is Side Piercing Kick in Korean?', 'Ap Cha Busigi', 'Tul', 'Dollyo Chagi', 'Yop Cha Jirugi', 'Choice4'),
(42, 2, 'What is Suit Trouser in Korean?', 'Bai-J', 'Jeogori', 'Tul', 'Hana', 'Choice1'),
(43, 2, 'How many moves are there in Chon-Ji?', '18', '20', '21', '19', 'Choice4'),
(44, 2, 'What is Guarding Block in Korean?', 'Sonkal Makgi', 'Daebi Magki', 'Balkal Magki', 'Bakat Magki', 'Choice2'),
(45, 2, 'What is Ten in Korean', 'Hana', 'Dool', 'Yul', 'Ahop', 'Choice3'),
(46, 2, 'What is Ap Kumchi in English?', 'Suit', 'Footsword', 'Ball of foot', 'Joomuk', 'Choice3'),
(47, 2, 'What is Hae San in English?', 'Block', 'Punch', 'Kick', 'Dismiss', 'Choice4'),
(48, 2, 'What is Forearm in Korean?', 'Palmok', 'Sonkal', 'Tul', 'Balkal', 'Choice1'),
(49, 2, 'What is Seven in Korean?', 'Ahop', 'Yul', 'Ilgop', 'Yaset', 'Choice3'),
(50, 2, 'What is Gaesok in English?', 'Continue', 'Forearm Block', 'Suit Trouser', 'Bow', 'Choice1'),
(51, 3, 'What is Side in Korean?', 'Ap', 'Yop', 'Dwit', 'Bal', 'Choice2'),
(52, 3, 'What is Inward in Korean?', 'Anuro', 'Bakuro', 'An', 'Bakat', 'Choice1'),
(53, 3, 'What is Outward in Korean?', 'Anuro', 'Bakuro', 'An', 'Bakat', 'Choice2'),
(54, 3, 'What is the meaning of Yongsok Dongjak in English?', 'In your own time', 'In my time', 'Continuous Motion', 'Indomitable Spirit', 'Choice3'),
(55, 3, 'What is Twin Forearm Block in Korean?', 'Doo Palmok Makgi', 'Sang Joomuk Makgi', 'Doo Joomuk Makgi', 'Sang Palmok Makgi', 'Choice4'),
(56, 3, 'What is Sonkal Daebi Makgi in English?', 'Knifehand Inwards Block', 'Knifehand Guarding Block', 'Palm Inwards Block', 'Footsword Guarding Stance', 'Choice2'),
(57, 3, 'What does Niunja Sogi - Kaunde Anuro Bakat Palmok Makgi mean in English?', 'Sitting Stance - Low Outward Inner Forearm Block', 'L-Stance - Middle Inwards Outer Forearm Block', 'L-Stance - Middle Forearm Guarding Block', 'Walking Stance - High 360 Kick', 'Choice2'),
(58, 3, 'Who was Dan Gun?', 'The Legendary Founder of Taekwondo', 'The Legendary Founder of the GTUK', 'The Legendary Founder of Korea', 'The Not-So-Legendary and Little Known <br>Founder of Korea', 'Choice3'),
(59, 3, 'When was the first Kingdom of Korea founded?', '981BC', 'Yesterday', '3222BC', '2333BC', 'Choice4'),
(60, 3, 'How many movements in Dan Gun?', '21', '19', '24', '20', 'Choice1'),
(61, 3, 'How many L-Stances are in Dan Gun?', '4', '5', '6', '7', 'Choice3'),
(62, 3, 'What is Rising Block in Korean?', 'Daebi Makgi', 'Chookyo Makgi', 'Ollyo Makgi', 'Nopunde Palmok Makgi', 'Choice2'),
(63, 3, 'What is the shape of pattern Dan Gun?', 'T Shape', 'S Shape', 'L Shape', 'I Shape', 'Choice4'),
(64, 3, 'Which foot moves back to the starting position at the end of Dan Gun?', 'Left', 'Right', 'Someone elses foot', 'Trick Question! \r\nIt makes no difference!', 'Choice1'),
(65, 3, 'Which of these Korean terms is not a real Taekwondo technique?', 'Sonkal Daebi Makgi', 'Ap Cha Busigi', 'An Bakat Palmok Makgi', 'Sang Palmok Makgi', 'Choice3'),
(76, 4, 'What is Back Piercing Kick in Korean?', 'Dollyo Chagi', 'Ap Cha Busigi', 'Dwitcha Jirugi', 'Ap Chagi', 'Choice3'),
(77, 4, 'What is Inward Block in Korean?', 'Bakuro Magki', 'Anuro Magki', 'An Magki', 'Palmok Magki', 'Choice2'),
(78, 4, 'What is Chookyo Magki in English?', 'Rising Block', 'Waist Block', 'Inward Block', 'Forearm Block', 'Choice1'),
(79, 4, 'What is Heckyo Magki in English?', 'Rising Block', 'Wedging Block', 'Inward Block', 'Twin Forearm Block', 'Choice2'),
(80, 4, 'What is Sonkal Taerigi in English?', 'Fingertip Thrust', 'Outer Forearm Block', 'Double punch', 'Knifehand Strike', 'Choice4'),
(81, 4, 'What is Sun Sonkut Tulgi in English?', 'Wrist Release Move', 'L Stance', 'Straight Fingertip Thrust', 'Inner Forearm Block', 'Choice3'),
(82, 4, 'What is Bakuro Makgi?', 'Forearm Block', 'Outer Forearm Block', 'Inner Forearm Block', 'Outer Block', 'Choice4'),
(83, 4, 'What is Wrist Release Move in Korean?', 'Sonkal Taerigi', 'Sun Sonkut Tulgi', 'Najunde', 'Jappyosul Tae', 'Choice4'),
(84, 4, 'How many movements in Do-San?', '20', '21', '19', '24', 'Choice4'),
(85, 4, 'What is Straight Fingertip Thrust in Korean?', 'Sonkal Taerigi', 'Sun Sonkut Tulgi', 'Jappyosul Tae', 'Yop Cha Jirugi', 'Choice2'),
(86, 4, 'What is Knifehand Strike in Korean?', 'Nopunde', 'Palmok', 'Sonkal Taerigi', 'Sun Sonkut Taerigi', 'Choice3'),
(87, 4, 'What is Doo Jirugi', 'Double Punch', 'Single Punch', 'Punch', 'Doo Punch', 'Choice1'),
(88, 3, 'What is Strike in Korean?', 'Taerigi', 'Sogi', 'Jirugi', 'Sonkal', 'Choice1'),
(89, 3, 'What is Twin Forearm Block in Korean?', 'Doo Magki', 'Doo Palmok Magki', 'Sang Palmok Magki', 'Doo Sang Bakat Magki', 'Choice3'),
(90, 3, 'What is Yongsok Dongjak in English?', 'Low Section', 'Fist', 'Continuous Motion', 'Forearm Block', 'Choice3'),
(91, 3, 'What is Sang Palmok Magki in English?', 'Twin Outwards Forearm Block', 'Double Outwards Block', 'Innerwards Outer Block', 'Twin Forearm Block', 'Choice4'),
(92, 3, 'What is Inwards Block in Korean?', 'Baro Jirugi', 'Bandae Jirugi', 'Bakat Palmok Magki', 'Anuro Magki', 'Choice4'),
(93, 3, 'What is Stance in Korean?', 'Jirugi', 'Sogi', 'Chagi', 'Taerigi', 'Choice2'),
(94, 4, 'What is Rising Block in Korean?', 'Chookyo Magki', 'Doo Magki', 'Sang Magki', 'Palmok Magki', 'Choice1'),
(95, 4, 'What is Wedging Block in Korean?', 'Sonkal Magki', 'Bakat Palmok Magki', 'Heckyo Magki', 'Joomuk Magki', 'Choice3'),
(96, 4, 'What is Outer Forearm Side Block in Korean?', 'Yop Cha Magki', 'Yop Bakat Palmok Magki', 'Yop Bakat Anuro Magki', 'Dollyo Bakat Bakuro Magki', 'Choice2'),
(97, 4, 'What is Jappyosul Tae in English?', 'Knifehand Strike', 'Forefist Punch', 'Wrist Release Move', 'Ball of Foot', 'Choice3'),
(98, 4, 'What is Inner Forearm Block', 'An Palmok Magki', 'Bakat Palmok Magki', 'Bakat Magki', 'Doo Magki', 'Choice1'),
(104, 0, 'What does Niunja Sogi- Kaunde Anuro Bakat Palmok Makgi mean in English?', 'Sitting Stance - Low Outward Inner Forearm Block', 'L-Stance - Middle Inwards Outer Forearm Block', 'L-Stance - Middle Forearm Guarding Block', 'Walking Stance - High 360 Kick', 'Choice2');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
