-- phpMyAdmin SQL Dump
-- version 4.0.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 11, 2014 at 09:19 PM
-- Server version: 5.5.37-0ubuntu0.13.10.1
-- PHP Version: 5.5.3-1ubuntu2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `warwick_taekwondo`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `Id` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Photo` varchar(100) NOT NULL,
  `Article` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`Id`, `Title`, `Date`, `Photo`, `Article`) VALUES
(1, 'Lorem Ipsum dolor sit amit', '2014-12-11', '<a href="images/logo.png"></a>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem neque, tempor vel est sit amet, volutpat feugiat nisl. Donec et nulla maximus, auctor elit quis, tristique odio. Vivamus eget dolor elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean auctor sagittis orci, eget venenatis odio tincidunt ac. Duis ut dignissim magna, quis ultricies felis. Donec et congue quam, vitae dignissim est. Integer eget maximus nibh. Vivamus eget dictum magna, non rutrum odio. Donec non velit convallis mi cursus euismod ultricies vitae risus. Suspendisse tincidunt et augue eget lobortis.'),
(2, 'Donec bibendum, odio accumsan ultrices pellentesque', '2014-12-08', '<a href="images/logo.png"></a>', 'Donec bibendum, odio accumsan ultrices pellentesque, lorem urna vehicula nibh, quis accumsan sapien magna vel erat. Sed pellentesque laoreet purus, ut fringilla justo molestie convallis. Vestibulum mollis vitae est vitae molestie. Nulla facilisi. Sed malesuada sit amet lectus sed accumsan. Mauris non facilisis ligula, at pellentesque orci. Integer ut consectetur ipsum. Mauris dapibus eros et lorem aliquam gravida. Donec vitae rutrum velit. Ut tellus velit, feugiat ut turpis ac, commodo egestas dui. Phasellus pulvinar ullamcorper nisl non feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed rutrum massa. Nam suscipit nunc at consectetur tristique.'),
(3, 'Phasellus eget commodo est, in suscipit quam.', '2014-12-12', '<a href="images/logo.png"></a>', 'Proin bibendum pretium justo ac tincidunt. Morbi consequat quam tellus, in blandit mi tincidunt ac. Suspendisse porttitor non orci sit amet venenatis. Vestibulum et felis in dui tempor tempor. Vestibulum gravida faucibus enim, nec consequat massa vestibulum rutrum. Integer viverra elit laoreet tempus luctus. Sed eget condimentum neque. Pellentesque vulputate pretium est, in gravida leo ultricies ut. Integer vehicula ornare mi, vel interdum mauris imperdiet id.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
