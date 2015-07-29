
-- --------------------------------------------------------


-- 
-- Table structure for table `quiz`
-- 

CREATE TABLE `quiz` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Grade` int(11) NOT NULL,
  `Question` varchar(150) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `Choice1` varchar(150) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `Choice2` varchar(150) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `Choice3` varchar(150) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `Choice4` varchar(150) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `Correct` varchar(7) NOT NULL COMMENT 'Correct answer from 4 choice',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=latin1 AUTO_INCREMENT=105 ;

-- 
-- Dumping data for table `quiz`
-- 

INSERT INTO quiz VALUES (1, 1, 'What is Sitting Stance in Korean?', 'Gunnun Sogi', 'Ap Jirugi', 'Four Directional Punch', 'Annun Sogi', 'Choice4');
INSERT INTO quiz VALUES (2, 1, 'What is Attention Stance in Korean?', 'Junbi Jirugi', 'Palmok Magi', 'Charyot Sogi', 'Annun Sogi', 'Choice3');
INSERT INTO quiz VALUES (3, 1, 'What is Side Kick in Korean?', 'Dollyo Chagi', 'Ap Chagi', 'Yop Chagi', 'Ap Jirugi', 'Choice3');
INSERT INTO quiz VALUES (4, 1, 'What does Goman mean in English?', 'Stop', 'Start', 'Finish', 'Kick', 'Choice1');
INSERT INTO quiz VALUES (5, 1, 'Which of the following is not a tenet of Tae Kwon Do?', 'Loyalty', 'Self Control', 'Courtesy', 'Integrity', 'Choice1');
INSERT INTO quiz VALUES (6, 1, 'What is Walking Stance in Korean?', 'Swiyo', 'Baro Jirugi', 'Baro Sogi', 'Gunnun Sogi', 'Choice4');
INSERT INTO quiz VALUES (7, 1, 'What is Low Section in Korean', 'Napunde', 'Najunde', 'Kaunde', 'Chagi', 'Choice2');
INSERT INTO quiz VALUES (8, 1, 'What is Outer Forearm Block?', 'An Palmok Makgi', 'Bakat Palmok Makgi', 'Sonkal Makgi', 'Ap Makgi', 'Choice2');
INSERT INTO quiz VALUES (9, 1, 'What is Ap Chagi in English?', 'Side Kick ', 'Turning Kick', 'Upwards Kick', 'Front Kick', 'Choice4');
INSERT INTO quiz VALUES (10, 1, 'What is Parallel Ready Stance?', 'Narani Junbi Sogi', 'Annun Sogi', 'Gunnun Sogi', 'Saju Sogi', 'Choice1');
INSERT INTO quiz VALUES (11, 1, 'What is Reverse Punch in Korean?', 'Sonkal Najunde Makgi', 'Bandae Jirugi', 'Baro Jirugi', 'Ap Jirugi', 'Choice2');
INSERT INTO quiz VALUES (12, 1, 'What is Saju Jirugi in English?', 'Four Direction', 'Four Directional Block', 'First Pattern', 'Four Directional Punch', 'Choice4');
INSERT INTO quiz VALUES (13, 1, 'What does Swiyo mean in English?', 'Relax', 'Attention', 'Ready', 'Back To Mark', 'Choice1');
INSERT INTO quiz VALUES (14, 1, 'What is Nopunde in English?', 'Low', 'Punch', 'High', 'Section', 'Choice3');
INSERT INTO quiz VALUES (15, 1, 'What is Dobok in English?', 'Training Hall', 'Training Suit', 'Belt', 'One', 'Choice2');
INSERT INTO quiz VALUES (16, 1, 'What is Knifehand Low Block in Korean?', 'An Palmok Magki', 'Najunde Magki', 'Hana Magki', 'Sonkal Najunde Makgi', 'Choice4');
INSERT INTO quiz VALUES (17, 1, 'What does Charyot mean in English?', 'Start', 'Bow', 'Attention', 'Finish', 'Choice3');
INSERT INTO quiz VALUES (18, 1, 'What is Dollyo Chagi in Korean', 'Turning Kick', 'Front Punch', 'Side Kick', 'Reverse Punch', 'Choice1');
INSERT INTO quiz VALUES (19, 1, 'What is Courtesy in Korean', 'Yom Chi', 'Ye Ui', 'Si Jak', 'Goman', 'Choice2');
INSERT INTO quiz VALUES (20, 1, 'What is the number One in Korean?', 'Dool', 'Set', 'Hana', 'Net', 'Choice3');
INSERT INTO quiz VALUES (21, 1, 'What is Front Forefist Punch in Korean?', 'Baro Jirugi', 'Bandae Jirugi', 'Saju Jirugi', 'Ap Joomuk Jirugi', 'Choice4');
INSERT INTO quiz VALUES (22, 1, 'What is Tasot in English?', 'Five', 'One', 'Two', 'Start', 'Choice1');
INSERT INTO quiz VALUES (23, 1, 'What is An Palmok Makgi?', 'Forearm Block', 'Outer Block', 'Outer Forearm Block', 'Inner Forearm Block', 'Choice4');
INSERT INTO quiz VALUES (24, 1, 'What is Self Control in Korean?', 'Ye Ui', 'Yom Chi', 'In Nae', 'Guk Ki', 'Choice4');
INSERT INTO quiz VALUES (25, 1, 'What is middle section in Korean?', 'Najunde', 'Kaunde', 'Nopunde', 'Hana', 'Choice2');
INSERT INTO quiz VALUES (26, 2, 'What is L-Stance in Korean?', 'Gunnun Sogi', 'Annun Sogi', 'Soojik Sogi', 'Niunja Sogi', 'Choice4');
INSERT INTO quiz VALUES (27, 2, 'What is the name for the ball of the foot in Korean?', 'Ap Joomuk', 'Ap Kumchi', 'Ap Foochi', 'Ap Balkal', 'Choice2');
INSERT INTO quiz VALUES (28, 2, 'What is Balkal in English?', 'Knifehand', 'Footsword', 'Forearm', 'Elbow', 'Choice2');
INSERT INTO quiz VALUES (29, 2, 'What is Fist in Korean?', 'Joomuk', 'Kumchi', 'Jirugi', 'Balkal', 'Choice1');
INSERT INTO quiz VALUES (30, 2, 'What is Joomuk in English?', 'Foot', 'Fist', 'Hand', 'Ball of Foot', 'Choice2');
INSERT INTO quiz VALUES (31, 2, 'What does Tul mean in English?', 'Belt', 'Instructor', 'Technique', 'Pattern', 'Choice4');
INSERT INTO quiz VALUES (32, 2, 'What is Guarding Block in Korean?', 'Kaunde Palmok Makgi', 'Bandae Makgi', 'Daebi Makgi', 'Jeogori Makgi', 'Choice3');
INSERT INTO quiz VALUES (33, 2, 'What is the name for the Dobok Jacket in Korean?', 'Jeogori', 'Hyachi', 'Baj-I', 'Simsa', 'Choice1');
INSERT INTO quiz VALUES (34, 2, 'What is the name for the Suit Trousers in Korean?', 'Jeogori', 'Hyachi', 'Baj-I', 'Simsa', 'Choice3');
INSERT INTO quiz VALUES (35, 2, 'What is in your own time in Korean?', 'Kooryongymacho', 'Yop Cha Jirugi', 'Kooryongopshi', 'Si Jak', 'Choice3');
INSERT INTO quiz VALUES (36, 2, 'What is Balkal in English', 'Front Kick', 'Side Kick', 'Ball of foot', 'Footsword', 'Choice4');
INSERT INTO quiz VALUES (37, 2, 'What is Six in Korean?', 'Ilgop', 'Yadul', 'Yaset', 'Yul', 'Choice3');
INSERT INTO quiz VALUES (38, 2, 'What is knifehand in Korean?', 'Sonkal', 'Hana', 'Balkal', 'Palmok', 'Choice1');
INSERT INTO quiz VALUES (39, 2, 'What is Sonkal in English?', 'Net', 'Set', 'Knifehand', 'Palmok', 'Choice3');
INSERT INTO quiz VALUES (40, 2, 'What is Baro in English?', 'Ready', 'Back To Mark', 'Dismiss', 'Start', 'Choice2');
INSERT INTO quiz VALUES (41, 2, 'What is Side Piercing Kick in Korean?', 'Ap Cha Busigi', 'Tul', 'Dollyo Chagi', 'Yop Cha Jirugi', 'Choice4');
INSERT INTO quiz VALUES (42, 2, 'What is Suit Trouser in Korean?', 'Bai-J', 'Jeogori', 'Tul', 'Hana', 'Choice1');
INSERT INTO quiz VALUES (43, 2, 'How many moves are there in Chon-Ji?', '18', '20', '21', '19', 'Choice4');
INSERT INTO quiz VALUES (44, 2, 'What is Guarding Block in Korean?', 'Sonkal Makgi', 'Daebi Magki', 'Balkal Magki', 'Bakat Magki', 'Choice2');
INSERT INTO quiz VALUES (45, 2, 'What is Ten in Korean', 'Hana', 'Dool', 'Yul', 'Ahop', 'Choice3');
INSERT INTO quiz VALUES (46, 2, 'What is Ap Kumchi in English?', 'Suit', 'Footsword', 'Ball of foot', 'Joomuk', 'Choice3');
INSERT INTO quiz VALUES (47, 2, 'What is Hae San in English?', 'Block', 'Punch', 'Kick', 'Dismiss', 'Choice4');
INSERT INTO quiz VALUES (48, 2, 'What is Forearm in Korean?', 'Palmok', 'Sonkal', 'Tul', 'Balkal', 'Choice1');
INSERT INTO quiz VALUES (49, 2, 'What is Seven in Korean?', 'Ahop', 'Yul', 'Ilgop', 'Yaset', 'Choice3');
INSERT INTO quiz VALUES (50, 2, 'What is Gaesok in English?', 'Continue', 'Forearm Block', 'Suit Trouser', 'Bow', 'Choice1');
INSERT INTO quiz VALUES (51, 3, 'What is Side in Korean?', 'Ap', 'Yop', 'Dwit', 'Bal', 'Choice2');
INSERT INTO quiz VALUES (52, 3, 'What is Inward in Korean?', 'Anuro', 'Bakuro', 'An', 'Bakat', 'Choice1');
INSERT INTO quiz VALUES (53, 3, 'What is Outward in Korean?', 'Anuro', 'Bakuro', 'An', 'Bakat', 'Choice2');
INSERT INTO quiz VALUES (54, 3, 'What is the meaning of Yongsok Dongjak in English?', 'In your own time', 'In my time', 'Continuous Motion', 'Indomitable Spirit', 'Choice3');
INSERT INTO quiz VALUES (55, 3, 'What is Twin Forearm Block in Korean?', 'Doo Palmok Makgi', 'Sang Joomuk Makgi', 'Doo Joomuk Makgi', 'Sang Palmok Makgi', 'Choice4');
INSERT INTO quiz VALUES (56, 3, 'What is Sonkal Daebi Makgi in English?', 'Knifehand Inwards Block', 'Knifehand Guarding Block', 'Palm Inwards Block', 'Footsword Guarding Stance', 'Choice2');
INSERT INTO quiz VALUES (57, 3, 'What does Niunja Sogi - Kaunde Anuro Bakat Palmok Makgi mean in English?', 'Sitting Stance - Low Outward Inner Forearm Block', 'L-Stance - Middle Inwards Outer Forearm Block', 'L-Stance - Middle Forearm Guarding Block', 'Walking Stance - High 360 Kick', 'Choice2');
INSERT INTO quiz VALUES (58, 3, 'Who was Dan Gun?', 'The Legendary Founder of Taekwondo', 'The Legendary Founder of the GTUK', 'The Legendary Founder of Korea', 'The Not-So-Legendary and Little Known <br>Founder of Korea', 'Choice3');
INSERT INTO quiz VALUES (59, 3, 'When was the first Kingdom of Korea founded?', '981BC', 'Yesterday', '3222BC', '2333BC', 'Choice4');
INSERT INTO quiz VALUES (60, 3, 'How many movements in Dan Gun?', '21', '19', '24', '20', 'Choice1');
INSERT INTO quiz VALUES (61, 3, 'How many L-Stances are in Dan Gun?', '4', '5', '6', '7', 'Choice3');
INSERT INTO quiz VALUES (62, 3, 'What is Rising Block in Korean?', 'Daebi Makgi', 'Chookyo Makgi', 'Ollyo Makgi', 'Nopunde Palmok Makgi', 'Choice2');
INSERT INTO quiz VALUES (63, 3, 'What is the shape of pattern Dan Gun?', 'T Shape', 'S Shape', 'L Shape', 'I Shape', 'Choice4');
INSERT INTO quiz VALUES (64, 3, 'Which foot moves back to the starting position at the end of Dan Gun?', 'Left', 'Right', 'Someone elses foot', 'Trick Question! \r\nIt makes no difference!', 'Choice1');
INSERT INTO quiz VALUES (65, 3, 'Which of these Korean terms is not a real Taekwondo technique?', 'Sonkal Daebi Makgi', 'Ap Cha Busigi', 'An Bakat Palmok Makgi', 'Sang Palmok Makgi', 'Choice3');
INSERT INTO quiz VALUES (76, 4, 'What is Back Piercing Kick in Korean?', 'Dollyo Chagi', 'Ap Cha Busigi', 'Dwitcha Jirugi', 'Ap Chagi', 'Choice3');
INSERT INTO quiz VALUES (77, 4, 'What is Inward Block in Korean?', 'Bakuro Magki', 'Anuro Magki', 'An Magki', 'Palmok Magki', 'Choice2');
INSERT INTO quiz VALUES (78, 4, 'What is Chookyo Magki in English?', 'Rising Block', 'Waist Block', 'Inward Block', 'Forearm Block', 'Choice1');
INSERT INTO quiz VALUES (79, 4, 'What is Heckyo Magki in English?', 'Rising Block', 'Wedging Block', 'Inward Block', 'Twin Forearm Block', 'Choice2');
INSERT INTO quiz VALUES (80, 4, 'What is Sonkal Taerigi in English?', 'Fingertip Thrust', 'Outer Forearm Block', 'Double punch', 'Knifehand Strike', 'Choice4');
INSERT INTO quiz VALUES (81, 4, 'What is Sun Sonkut Tulgi in English?', 'Wrist Release Move', 'L Stance', 'Straight Fingertip Thrust', 'Inner Forearm Block', 'Choice3');
INSERT INTO quiz VALUES (82, 4, 'What is Bakuro Makgi?', 'Forearm Block', 'Outer Forearm Block', 'Inner Forearm Block', 'Outer Block', 'Choice4');
INSERT INTO quiz VALUES (83, 4, 'What is Wrist Release Move in Korean?', 'Sonkal Taerigi', 'Sun Sonkut Tulgi', 'Najunde', 'Jappyosul Tae', 'Choice4');
INSERT INTO quiz VALUES (84, 4, 'How many movements in Do-San?', '20', '21', '19', '24', 'Choice4');
INSERT INTO quiz VALUES (85, 4, 'What is Straight Fingertip Thrust in Korean?', 'Sonkal Taerigi', 'Sun Sonkut Tulgi', 'Jappyosul Tae', 'Yop Cha Jirugi', 'Choice2');
INSERT INTO quiz VALUES (86, 4, 'What is Knifehand Strike in Korean?', 'Nopunde', 'Palmok', 'Sonkal Taerigi', 'Sun Sonkut Taerigi', 'Choice3');
INSERT INTO quiz VALUES (87, 4, 'What is Doo Jirugi', 'Double Punch', 'Single Punch', 'Punch', 'Doo Punch', 'Choice1');
INSERT INTO quiz VALUES (88, 3, 'What is Strike in Korean?', 'Taerigi', 'Sogi', 'Jirugi', 'Sonkal', 'Choice1');
INSERT INTO quiz VALUES (89, 3, 'What is Twin Forearm Block in Korean?', 'Doo Magki', 'Doo Palmok Magki', 'Sang Palmok Magki', 'Doo Sang Bakat Magki', 'Choice3');
INSERT INTO quiz VALUES (90, 3, 'What is Yongsok Dongjak in English?', 'Low Section', 'Fist', 'Continuous Motion', 'Forearm Block', 'Choice3');
INSERT INTO quiz VALUES (91, 3, 'What is Sang Palmok Magki in English?', 'Twin Outwards Forearm Block', 'Double Outwards Block', 'Innerwards Outer Block', 'Twin Forearm Block', 'Choice4');
INSERT INTO quiz VALUES (92, 3, 'What is Inwards Block in Korean?', 'Baro Jirugi', 'Bandae Jirugi', 'Bakat Palmok Magki', 'Anuro Magki', 'Choice4');
INSERT INTO quiz VALUES (93, 3, 'What is Stance in Korean?', 'Jirugi', 'Sogi', 'Chagi', 'Taerigi', 'Choice2');
INSERT INTO quiz VALUES (94, 4, 'What is Rising Block in Korean?', 'Chookyo Magki', 'Doo Magki', 'Sang Magki', 'Palmok Magki', 'Choice1');
INSERT INTO quiz VALUES (95, 4, 'What is Wedging Block in Korean?', 'Sonkal Magki', 'Bakat Palmok Magki', 'Heckyo Magki', 'Joomuk Magki', 'Choice3');
INSERT INTO quiz VALUES (96, 4, 'What is Outer Forearm Side Block in Korean?', 'Yop Cha Magki', 'Yop Bakat Palmok Magki', 'Yop Bakat Anuro Magki', 'Dollyo Bakat Bakuro Magki', 'Choice2');
INSERT INTO quiz VALUES (97, 4, 'What is Jappyosul Tae in English?', 'Knifehand Strike', 'Forefist Punch', 'Wrist Release Move', 'Ball of Foot', 'Choice3');
INSERT INTO quiz VALUES (98, 4, 'What is Inner Forearm Block', 'An Palmok Magki', 'Bakat Palmok Magki', 'Bakat Magki', 'Doo Magki', 'Choice1');
INSERT INTO quiz VALUES (104, 0, 'What does Niunja Sogi- Kaunde Anuro Bakat Palmok Makgi mean in English?', 'Sitting Stance - Low Outward Inner Forearm Block', 'L-Stance - Middle Inwards Outer Forearm Block', 'L-Stance - Middle Forearm Guarding Block', 'Walking Stance - High 360 Kick', 'Choice2');

