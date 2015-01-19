
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
  `Photo` varchar(80) NOT NULL,
  `Article` text NOT NULL,
  `Summary` text,
  PRIMARY KEY (`Id`)
);

--
-- Dumping data for table `Articles`
--

INSERT INTO `Articles` (`Id`, `Title`, `Date`, `Photo`, `Article`, `Summary`) VALUES
(1, 'TESt10', '2015-01-13', '111', '21321321132123123', 'SUMMARY'),
(2, 'TESt1', '2015-01-13', '111assda', '21321321132123123dsasdasdasda', ''),
(3, 'TESt1', '2015-01-13', '111dsaasddsasadasd', '21321321132123123asadsdasddsaasdasddas', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');

