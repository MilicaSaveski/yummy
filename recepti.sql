-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2020 at 04:48 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recepti`
--

-- --------------------------------------------------------

--
-- Table structure for table `drzave`
--

CREATE TABLE `drzave` (
  `id_drzava` int(11) NOT NULL,
  `naziv_drzave` varchar(50) NOT NULL,
  `kontinent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `drzave`
--

INSERT INTO `drzave` (`id_drzava`, `naziv_drzave`, `kontinent_id`) VALUES
(1, 'Srbija', 1),
(2, 'Italija', 1),
(3, 'Kina', 2),
(4, 'Japan', 2),
(5, 'Indija', 2),
(6, 'Francuska', 1),
(7, 'Severna Makedonija', 1),
(10, 'Nemacka', 1);

-- --------------------------------------------------------

--
-- Table structure for table `jelo`
--

CREATE TABLE `jelo` (
  `id_jelo` int(11) NOT NULL,
  `naziv` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_kategorija` int(11) NOT NULL,
  `opis` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `vreme_pripeme` int(11) NOT NULL,
  `drzava_id` int(11) NOT NULL,
  `glas` int(11) NOT NULL,
  `brojGlasanja` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jelo`
--

INSERT INTO `jelo` (`id_jelo`, `naziv`, `id_kategorija`, `opis`, `notes`, `vreme_pripeme`, `drzava_id`, `glas`, `brojGlasanja`) VALUES
(1, 'Potaž od bundeve i krompira ', 4, '', 'Potaž poslužiti još topao. Najbolje prija uz neki hleb od integralnog brašna. Možete ga malo tostirati uživajte u kraljici jeseni. ', 50, 1, 0, 0),
(2, 'Chessecake sa jagodama ', 3, '', '', 90, 6, 0, 0),
(3, 'Limeta chessecake ', 3, '', '', 90, 6, 0, 0),
(4, 'Biftek pizzaiola', 2, '', '', 45, 2, 0, 0),
(5, 'Losos sa povrcem ', 2, '', 'Losos sam po sebi ima specifičan ukus i nije mu potrebno previše začina. So i biber su dovoljni. Uz to sok od limuna i par lepih priloga sa nekim sosom koji volite. Ja sam koristila sos Holandez.', 75, 4, 0, 0),
(6, 'Vege pizza ', 1, '', 'Ko voli, može na pizzu dodati papriku, paradajz ili neko drugo neutralno povrće tj da nije skrobno. Ako ne pravite po un-u, na pizzu možete dodati i rendani biljni sir! ', 30, 2, 0, 0),
(7, 'Pizza sa sirom', 1, '', 'Ova količina je dovoljna za dve pizze i sve treba podeliti na dva. Ali opet zavisi od veličine tepsije, pa u tom slučaju procenite sami.', 30, 2, 5, 1),
(8, 'Makedonski piperkar ', 4, '', '', 55, 7, 0, 0),
(9, 'Ledena torta sa borovnicama I bananama ', 3, '', 'Ako volite slađe torte, dodajte dve-tri urme. Sipajte prvo beli fil, a potom ljubičasti. Tortu možete ukrasiti celim borovnicama.', 60, 6, 0, 0),
(10, 'Špagete sa ćuftama od kobasica', 2, '', 'Uz ovaj specijalitet predlažemo da popijete kvalitetno suvo crveno vino sorte merlo.', 45, 2, 0, 0),
(11, 'Rolat od krompira ', 2, '', '', 60, 1, 0, 0),
(12, 'Svinjske krmenadle sa jabukom', 2, '', '', 90, 6, 0, 0),
(13, 'Kolač od heljdinog brašna sa malinama I kupinama', 3, '', '', 60, 2, 0, 0),
(14, 'Šnicle u sosu od pečuraka ', 2, '', 'Doterajte ukus po želji.\r\nSlužite sa pire krompirom, pirinčom ili prženim krompirićima.\r\n', 75, 6, 0, 0),
(15, 'Lazanje sa brokolijem', 2, '', '', 70, 2, 0, 0),
(16, 'Proba', 2, 'Proba 123 proba', 'Proba 123 proba', 26, 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `jelo_nacin`
--

CREATE TABLE `jelo_nacin` (
  `id_jelo_nacin` int(11) NOT NULL,
  `id_jelo` int(11) NOT NULL,
  `id_nacin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jelo_nacin`
--

INSERT INTO `jelo_nacin` (`id_jelo_nacin`, `id_jelo`, `id_nacin`) VALUES
(46, 1, 14),
(45, 1, 65),
(51, 2, 19),
(52, 2, 20),
(53, 2, 21),
(54, 3, 22),
(55, 3, 23),
(56, 3, 24),
(57, 3, 25),
(58, 3, 26),
(59, 3, 27),
(60, 4, 28),
(61, 4, 29),
(62, 4, 30),
(63, 5, 22),
(64, 5, 31),
(65, 5, 32),
(66, 6, 33),
(67, 6, 34),
(68, 6, 35),
(69, 7, 36),
(70, 7, 37),
(71, 7, 38),
(72, 7, 39),
(73, 8, 40),
(74, 8, 41),
(75, 8, 42),
(76, 9, 43),
(77, 9, 44),
(78, 9, 45),
(79, 10, 46),
(80, 10, 47),
(81, 10, 48),
(82, 11, 49),
(83, 11, 50),
(84, 11, 51),
(85, 11, 52),
(98, 11, 66),
(86, 12, 53),
(87, 12, 54),
(88, 12, 55),
(89, 13, 56),
(90, 13, 57),
(91, 13, 58),
(92, 14, 59),
(93, 14, 60),
(94, 14, 61),
(95, 14, 62),
(96, 14, 63),
(97, 14, 64),
(47, 15, 15),
(48, 15, 16),
(49, 15, 17),
(50, 15, 18);

-- --------------------------------------------------------

--
-- Table structure for table `jelo_namernice`
--

CREATE TABLE `jelo_namernice` (
  `id_jelo_namernice` int(11) NOT NULL,
  `id_jelo` int(11) NOT NULL,
  `id_namernice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jelo_namernice`
--

INSERT INTO `jelo_namernice` (`id_jelo_namernice`, `id_jelo`, `id_namernice`) VALUES
(1, 1, 13),
(2, 1, 14),
(3, 1, 15),
(4, 1, 16),
(5, 1, 17),
(6, 1, 18),
(7, 1, 19),
(8, 1, 20),
(9, 1, 21),
(21, 2, 31),
(22, 2, 32),
(23, 2, 33),
(24, 2, 34),
(25, 2, 35),
(26, 2, 36),
(28, 2, 37),
(27, 2, 38),
(30, 2, 39),
(29, 2, 40),
(31, 2, 41),
(39, 3, 25),
(32, 3, 42),
(33, 3, 43),
(34, 3, 44),
(35, 3, 45),
(36, 3, 46),
(37, 3, 47),
(38, 3, 48),
(48, 4, 18),
(49, 4, 19),
(40, 4, 49),
(41, 4, 50),
(42, 4, 51),
(43, 4, 52),
(44, 4, 53),
(45, 4, 54),
(46, 4, 55),
(47, 4, 56),
(57, 5, 18),
(58, 5, 19),
(56, 5, 56),
(50, 5, 57),
(51, 5, 58),
(52, 5, 59),
(53, 5, 60),
(54, 5, 61),
(55, 5, 62),
(59, 6, 63),
(60, 6, 64),
(61, 6, 65),
(62, 6, 66),
(63, 6, 67),
(64, 6, 68),
(74, 7, 68),
(66, 7, 69),
(67, 7, 70),
(68, 7, 71),
(69, 7, 72),
(70, 7, 73),
(71, 7, 74),
(72, 7, 75),
(73, 7, 76),
(75, 7, 78),
(76, 7, 79),
(86, 8, 16),
(85, 8, 18),
(84, 8, 19),
(77, 8, 80),
(78, 8, 81),
(79, 8, 82),
(80, 8, 83),
(81, 8, 84),
(82, 8, 85),
(83, 8, 86),
(92, 9, 87),
(88, 9, 88),
(89, 9, 89),
(90, 9, 90),
(91, 9, 91),
(93, 9, 92),
(103, 10, 18),
(104, 10, 19),
(105, 10, 56),
(94, 10, 93),
(95, 10, 94),
(96, 10, 95),
(97, 10, 96),
(98, 10, 97),
(99, 10, 98),
(100, 10, 99),
(101, 10, 100),
(102, 10, 101),
(106, 11, 102),
(107, 11, 103),
(108, 11, 104),
(109, 11, 105),
(110, 11, 106),
(111, 11, 107),
(112, 11, 108),
(113, 11, 109),
(119, 12, 16),
(120, 12, 18),
(121, 12, 19),
(114, 12, 110),
(115, 12, 111),
(116, 12, 112),
(117, 12, 113),
(118, 12, 114),
(122, 13, 108),
(123, 13, 115),
(124, 13, 116),
(127, 13, 117),
(125, 13, 118),
(126, 13, 119),
(128, 13, 120),
(129, 13, 121),
(138, 14, 16),
(137, 14, 18),
(130, 14, 122),
(131, 14, 123),
(132, 14, 124),
(133, 14, 125),
(134, 14, 126),
(135, 14, 127),
(136, 14, 128),
(18, 15, 16),
(19, 15, 18),
(20, 15, 19),
(10, 15, 22),
(11, 15, 23),
(12, 15, 24),
(13, 15, 25),
(14, 15, 26),
(15, 15, 27),
(16, 15, 28),
(17, 15, 29);

-- --------------------------------------------------------

--
-- Table structure for table `komentari`
--

CREATE TABLE `komentari` (
  `id_komentar` int(11) NOT NULL,
  `roditelj_id` int(11) NOT NULL,
  `tekst` text NOT NULL,
  `korisnik_id` int(11) NOT NULL,
  `id_recept` int(11) NOT NULL,
  `vreme` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `komentari`
--

INSERT INTO `komentari` (`id_komentar`, `roditelj_id`, `tekst`, `korisnik_id`, `id_recept`, `vreme`) VALUES
(3, 0, 'Prelepo jeee				  \n				  ', 2, 2, '2020-03-24 15:09:37'),
(4, 3, 'Jeste stvarno je prelepoo				  \n				  ', 2, 2, '2020-03-24 15:13:29'),
(6, 3, 'djffdshjgfsdsf				  \n				  ', 2, 2, '2020-03-24 15:17:10'),
(12, 0, 'napokonnn				  \n				  ', 2, 2, '2020-03-24 15:52:26');

-- --------------------------------------------------------

--
-- Table structure for table `kontinent`
--

CREATE TABLE `kontinent` (
  `id_kontinent` int(11) NOT NULL,
  `naziv` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kontinent`
--

INSERT INTO `kontinent` (`id_kontinent`, `naziv`) VALUES
(1, 'Evropa'),
(2, 'Azija'),
(3, 'Afrika'),
(4, 'Severna Amerika'),
(5, 'Juzna Amerika'),
(6, 'Australija ');

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `id_korisnik` int(11) NOT NULL,
  `ime` varchar(15) NOT NULL,
  `prezime` varchar(20) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `datum_registracije` date NOT NULL,
  `aktivan` int(11) NOT NULL DEFAULT '0',
  `id_uloga_korisnik` int(11) NOT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id_korisnik`, `ime`, `prezime`, `username`, `password`, `email`, `datum_registracije`, `aktivan`, `id_uloga_korisnik`, `update_at`) VALUES
(1, 'Milica', 'Saveski', 'mica123', 'f4a9ef1cf50a6a01a7084998b22866d7', 'milica.saveski.53.16@ict.edu.rs', '2020-03-21', 1, 2, NULL),
(2, 'Proba', 'Proba', 'proba12', 'f4a9ef1cf50a6a01a7084998b22866d7', 'proba@gmail.com', '2020-03-21', 1, 1, NULL),
(3, 'Proba', 'Probaaa', 'proba1', 'f4a9ef1cf50a6a01a7084998b22866d7', 'milica@gmail.com', '2020-03-24', 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `meni`
--

CREATE TABLE `meni` (
  `id_meni` int(11) NOT NULL,
  `ispis` varchar(50) NOT NULL,
  `href` varchar(50) NOT NULL,
  `roditelj` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meni`
--

INSERT INTO `meni` (`id_meni`, `ispis`, `href`, `roditelj`) VALUES
(1, 'Home', 'index.php?page=pocetna', 0),
(3, 'Recepti', 'index.php?page=categories', 1),
(4, 'About Me', 'index.php?page=about', 1),
(5, 'Kontakt', 'index.php?page=contact', 1),
(6, 'Login', 'index.php?page=login', 0),
(7, 'Log out', 'php/logout.php', 0),
(8, 'Best Of', 'index.php?page=best', 0),
(9, 'Admin', 'admin.php', 0);

-- --------------------------------------------------------

--
-- Table structure for table `nacin_spremanja`
--

CREATE TABLE `nacin_spremanja` (
  `id_nacin` int(11) NOT NULL,
  `nacin1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nacin_spremanja`
--

INSERT INTO `nacin_spremanja` (`id_nacin`, `nacin1`) VALUES
(14, ' Štapnim mikserom ispasirati povrće, izvaditi prethodno lovor, na kraju još malo začiniti po ukusu, dodati pavlaku za kuvanje i kratko sve prokrčkati da se dobije kremasti potaž. Prilikom služenja dodajte naseckani peršunov list ili korijander '),
(15, 'U uzavreloj i posoljenoj vodi, kojoj smo dodali ulje, skuvamo lazanje. Nakon dva minuta kuvanja, procedimo i propremo hladnom vodom. Brokoli razlistimo na cvetove i skuvamo u posebnom sudu.'),
(16, 'U tiganj na šporetu sipamo mleko i kiselu pavlaku. Dodamo rendani muskatni oraščić, sitno iseckani kačkavalj, cvetove skuvanog brokolija i kikiriki. Posolimo i pobiberimo. Dodamo brašno i promešamo.'),
(17, 'U nauljenu tepsiju ređamo deo skuvanih lazanja. Nanesemo preliv i preostale tri lazanje. Poprskamo preostalim prelivom. Pečemo 7 minuta na 220 stepeni.'),
(18, 'Serviramo lazanje preko kojih, prema želji, pospemo origano.'),
(19, 'Korica: Puter rastopiti, dodati šećer u prahu pa zatim postepeno dodavati sok i mlevenu plazmu. Oblikovate koru u kalupu. Prethodno namazati kalup uljem i staviti papir za pečenje po obodu. Staviti u frižider da se stegne.'),
(20, 'Fil: Polako umutiti maskarpone sir sa secerom u prahu, u drugoj posudu umutiti slatku pavlaku. Zatim lagano mutiti i dodavati maskarpone u slatku pavlaku . Kada se sve sjedini dodati želatin (razmutiti želatin 20g sa 10 kašika hladne vode, kada nabubri otopiti ga polako, ne dodavati vruć u smesu!). Mutiti još 2-3 minuta dok se želatin ne sjedini sa filom. Sipati u kalup i staviti u zamrzivač 10 ak minuta dok se ne stegne.'),
(21, 'Preliv: Staviti voće u šerpicu i preliti sa 200 ml vode. Dodati šećer. Kada provri skloniti i dodati želatin (10 g želatina sa 5 supenih kašika hladne vode, ostaviti da nabubri pa dodati u preliv i promešati). Ostaviti preliv da se ohladi pa staviti preko fila.'),
(22, 'Pripremimo sastojke.'),
(23, 'Izmrvimo biskvit pa u to uspemo 100 g istopljenog putera.'),
(24, 'Promešamo pa pritisnemo u okrugli pleh, 23 cm prečnika. Pečemo 10 minuta na 220 stepeni C. Izvadimo i pustimo da se ohladi.'),
(25, 'Dok se kora peče, pripremimo fil. Umutimo šećer i žumanca. Dodamo kiselu pavlaku, kondenzovano mleko, sok i rendanu koricu limete i sve dobro izmešamo. Kada se kora ohladila sipamo fil na nju i stavimo da se peće na 165 stepeni C oko 20 minuta.'),
(26, 'Izvadimo i ostavimo u plehu da se ohladi, pa ga ostavimo u frižider, najmanje 4 sata a najbolje preko noći. Kada je ohladjen, umutimo pavlaku, dodamo rendani kokos i dekorišemo po ivici. Pospemo vrh sa malo rendane limeta korice.'),
(27, 'Oštrim nožem prodjemo oko ivice pleha da izvadimo čizkejk na tanjir.'),
(28, 'U zagrejanom maslinovom ulju pržimo sitno seckani luk. Kada omekša, dodamo paradajz pire i belo vino. Posolimo i pobiberimo. Dodamo sitno seckani beli luk, peršun i origano. Sos stavimo na činiju za serviranje.'),
(29, 'U drugom tiganju sa zagrejanim maslinovim uljem pržimo posoljeno i pobibereno meso.'),
(30, 'Na servirani sos stavimo biftek i možemo ga već poslužiti, a uz ovaj biftek možemo da serviramo i prethodno obarene cvetove brokolija i karfiola.'),
(31, 'Umutimo dobro žumanca. Polako dodajemo puter i sok od limuna. Začinimo. Stavimo činiju na šerpu u kojoj voda kuva, ali tako da ne dodiruje dno činije i mutimo dok se sos ne zgusne. '),
(32, 'Krompiriće stavimo u slanu vodu da se kuvaju. ja ih ne ljuštim jer su ovi iz moje bašte i mlad krompir se lako može jesti neoljušten. Kuvamo dvadesetak minuta. Isečemo papriku i šargarepu na tanke kriške a šampinjone prepolovimo. Sipamo u tiganj u kome smo istopili puter i dinstamo oko 7 minuta. Posolimo i pobiberimo losos i stavimo u tiganj. Ubacimo svež timijan i oceđeni sok od limuna. Pečemo 3 minuta sa svake strane.'),
(33, 'Od navedenih sastojaka zamesiti mekše testo, preliti sa malo ulja, malo premesiti i ostaviti pola sata da nadođe. Kada je testo nadošlo, premesiti ga pa ga staviti u najlon kesu i u frižider na pola sata-45 minuta...'),
(34, 'Testo izvaditi na pobrašnjenu radnu površinu veoma blago premesiti tj prebaciti krajeve na sredinu, okrenuti pa oklagijom razvući testo za nijansu veće od tepsije da bi imali onaj rub malo deblji... preko testa namazati kečap, preko toga poređati šampinjone sečene na listiće (neka bude malo više, da pizza ne bude suva), preko toga posuti origano po želji, malo soli čisto da šampinjoni puste onaj njihov čarobni sok...'),
(35, 'Pizzu peći u prethodno zagrejanoj rerni na 200-300 C. E sad, temperatura zavisi od toga da li ćete od ovih sastojaka napraviti 2 tanje ili jednu domaćinsku picu kakvu ja volim... :) tanje pecite na 300 C.'),
(36, 'Kvasac rastvorite sa vodom i šećerom i ostavite ga sa strane. U prosejano brašno dodajte so, maslinovo ulje i pripremljnu vodu sa kvascem. Zamesite testo, pokrijte krpom i ostavite da se volumen udvostruči. Nadošlo testo premesite podelite u dva dela i rastanjite da prelazi ivece veličine tepsije (pleha). Premažite tepsiju maslinovim uljem i prebacite testo, premažite polovimom prepremljenog kećapa i pospite origanom.'),
(37, 'Poređajte kolutove salame, zatim bogato pospite mocarelom (ili drugim rendanim sirom koji se razvlači). Kada ste nafilovali pizzu savijte krajeve koji prelaze ivicu pleha prema unutra, i njih u tankom sloju premažite kečapom.'),
(38, 'Pripremljenu pizzu ostavite sa strane a za to vreme ukljičite rernu na 250 stepeni da se ugreje. Pecite pizzu u dobro zagrejanoj rerni 15 minuta u donjem delu rerne.'),
(39, 'Pečenu picu izvadite iz rerne i dekorišite listovima bosiljka ili nane... I prijatno vam bilo.'),
(40, 'U šerpu na šporetu sa provrelom vodom stavimo kocku za supu. Dodamo prokelj da se obari. U tiganju na šporetu na rastopljenom puteru pržimo sitno isečen crni luk. Kada luk omekša, dodamo meso isečeno na parčiće kao za gulaš. Posolimo, pobiberimo, dodamo mešavinu začina i promešamo.'),
(41, 'Rešetkastom kašikom izvadimo glavice prokelja iz šerpe i dodamo u tiganj. Sipamo i dve kutlače supe. Zatim dodamo paprike isečene na kocke, paradajz sos, posolimo, pobiberimo i promešamo.'),
(42, 'Sadržinu iz tiganja preručimo u zemljanu posudu za pečenje. Pečemo 2 sata na 230 stepeni. Izvadimo posudu iz rerne i na sredinu, prema želji, stavimo grančicu francuskog peršuna.'),
(43, 'Kora se priprema tako što badem sameljete u mlinu, a potom mu dodate urme prethodno potopljene 2-3 minuta u prečišćenoj vodi i samlevene u blenderu. Dodajte i rastopljeno kokosovo ulje i sve zajedno izblendirajte i izlijte u kalup.'),
(44, 'Za fil iseckajte banane na kolutove i zaledite. Ubacite ih u jači blender i dodajte malo biljnog mleka. Mleko možete sami napraviti od potopljenog badema ili kokosa kojem ste dodali vodu i izblendirali ili kupiti pirinčano mleko, koje je prirodno slatko. Izblendirajte fil koristeći štapni mikser.'),
(45, 'Polovinu fila sipajte na koru. U drugu polovinu dodajte borovnice i blendirajte još minut-dva'),
(46, 'Glavicu crnog luka sitno isečemo i pržimo u tiganju na zagrejanom maslinovom ulju. Sitno isečemo listove spanaća, rukole i peršuna, a paradajz i beli luk isečemo na parčad i dodamo u tiganj. Posolimo, pobiberimo i promešamo.'),
(47, 'U šerpu sa provrelom i posoljenom vodom u koju smo sipali malo maslinovog ulja stavimo špagete da se kuvaju. Meso od kobasica izvadimo iz creva, formiramo kuglice i dodamo ih u šerpu sa špagetama. Papriku isečemo na tanke duguljaste prutiće i dodamo u šerpu.'),
(48, 'Skuvane špagete i ćufte procedimo. Kada se iscede vratimo ih u šerpu. Dodamo sadržinu iz tiganja i promešamo. Zatim sadržinu šerpe preručimo u keramičku posudu za pečenje. Pospemo mocarelom isečenom na kockice, poprskamo maslinovim uljem i stavimo u rernu. Pečemo 30 minuta na 200 stepeni. Kada je jelo gotovo možemo ga ukrasite listovima bosiljka ili endivije.'),
(49, 'U šerpu sa provrelom vodom stavimo boraniju da se obari. Alatkom za pire izgnječimo skuvane krompire i stavimo u veći sud. Dodamo 125 grama margarina i promešamo. Dodamo jaja i promešamo. Zatim dodamo brašno i mešamo dok se smesa ne sjedini.'),
(50, 'Veće parče najlonske folije namažemo uljem. Na foliji raširimo smesu od krompira. Na smesu za rolat poređamo krugove šunkarice. Na jedan kraj smese nanesemo obarenu boraniju.'),
(51, 'Pomoću folije uvijemo rolat. Tepsiju namažemo margarinom i pospemo prezlom. Pomoću folije stavimo rolat u tepsiju. Na rolat stavimo parčiće margarina i nanesemo prezlu. Pečemo 30 minuta u rerni zagrejanoj na 210 stepeni.'),
(52, '4.	U šerpicu, na šporetu, stavimo preostali margarin da se rastopi. Listove žalfije sitno isečemo i dodamo u šerpicu sa margarinom. Posolimo, promešamo i sklonimo šerpicu sa šporeta.'),
(53, 'Krmenadle posolimo i pobiberimo sa obe strane i pržimo u zagrejanom ulju. Vadimo na činiju, a u istoj masnoći pržimo parčad prethodno očišćene i na tanke krugove isečene jabuke. Vadimo na činiju. Krmenadle premažemo senfom i vratimo u tiganj, tako da strana premazana senfom bude gore. Dodamo ulje.'),
(54, 'U sud sa rendanim sirom dodamo žalfiju i promešamo. Mešavinom premažemo krmenadle i nanesemo krugove ispržene jabuke.'),
(55, 'U zagrejanom ulju pržimo parčad prethodno skuvanog krompira. Dodamo cvetove brokolija. Pobiberimo. Dodamo prethodno obarenu šargarepu. Povrće serviramo na činiju, stavimo krmenadle i ukrasimo peršunom.'),
(56, 'Šećer, obe vrste brašna i prašak za pecivo izmešajte. Zatim dodajte jaja i mleko, te umesite ujednačeno testo.'),
(57, 'Testo sipajte u podmazan okrugli kalup i rasporedite voće. Pecite oko 35 minuta na 180 stepeni.'),
(58, 'Pečen kolač prohladite, a ona pospite šećerom u prahu.'),
(59, 'Ugrejte ulje pa naglo ispržite šnicle, po par minuta sa obe strane.'),
(60, 'Izvadite šnicle iz tiganja i ostavite na toplom.'),
(61, 'Šampinjone operite i iseckajte. U tiganj dodajte puter, stavite šampinjone i pržite 5-6 minuta dok tečnost ne ispari.'),
(62, 'Dodajte sitno seckan beli luk i senf, pa pržite jedan minut, da luk pusti aromu.'),
(63, 'Brašno prosejte u tiganj, ravnomerno po pečurkama pa polako dodajte supu, mešajući da nema grudvica.'),
(64, 'Dodajte alevu papriku, pa vratite šnicle i na tihoj vatri ih dinstajte dok sasvim ne omekšaju.'),
(65, 'Očistiti bundevu i iseći na kockice. Krompir takođe oljuštiti i iseći na kockice. Na malo ulja prodinstati sitno iseckan praziluk, oko 5 minuta. Dodati mu iseckani krompir, mešavinu začina, lovorov list i naliti vodom tek da prekrije krompir. Sve zajedno kuvati oko 10 minuta, pa dodati iseckanu bundevu. Povrće naliti vodom tek toliko da prekrije sve, dodati malo đumbira, kumina i karija i sve zajedno, na srednjoj temperaturi, kuvati dok krompir i bundeva ne odmeknu i pretvore se u kašu.'),
(66, 'Izvadimo rolat iz tepsije i isečemo na parčad koja serviramo na tanjir. Dekorišemo kečapom i grančicama francuskog peršuna. Na svako parče rolata nanesemo rastopljen margarin sa žalfijom.');

-- --------------------------------------------------------

--
-- Table structure for table `namernice`
--

CREATE TABLE `namernice` (
  `id_namernice` int(11) NOT NULL,
  `naziv` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `namernice`
--

INSERT INTO `namernice` (`id_namernice`, `naziv`) VALUES
(13, '1 kg bundeve'),
(14, '4 srednja krompira'),
(15, '2 lista lovora'),
(16, 'ulje'),
(17, 'voda'),
(18, 'so'),
(19, 'mleveni crni biber'),
(20, 'mesavina biljnog zacina'),
(21, 'pavlaka za kuvanje'),
(22, '1 glavica brokolija'),
(23, '6 parcadi lazanja'),
(24, '200 grama kackavalja'),
(25, '200 mililitara kisele pavlake'),
(26, '100 mililitara mleka'),
(27, '100 grama pecenog oljustenog kikirikija'),
(28, '1 muskatni orascica'),
(29, '1,5 kasika brasna'),
(31, '200 g putera'),
(32, '450 g plazma'),
(33, '150 g secera u prahu'),
(34, '80 ml sok od sumskog voca'),
(35, '500 g maskarpone sira'),
(36, '500 g slatke pavlake'),
(37, '200 g secera u prahu'),
(38, '20g zelatina'),
(39, '10g zelatina'),
(40, '300 g zaledjenog voca'),
(41, '5-6 kasika secera'),
(42, '100 g putera '),
(43, '200 g biskvita iznrvljenih'),
(44, '1 konzerva kondenzovanog mleka'),
(45, '100 ml slatke pavlake'),
(46, '2 zumanca'),
(47, '3 limete'),
(48, '30 g rendanog kokosa'),
(49, '250 grama gove?eg bifteka'),
(50, '2 cesnja belog luka'),
(51, '1 glavica crnog luka'),
(52, '250 mililitara paradajz pirea'),
(53, '2 kasike belog vina'),
(54, 'pola kasike origana'),
(55, 'maslinovo ulje'),
(56, 'persun'),
(57, '400 g losos fileta'),
(58, '1 sargarepa'),
(59, '150 g sampinjona'),
(60, '1 parika babura'),
(61, '1 limun - sok'),
(62, '30 g putera'),
(63, '1 kasicica instant kvasca'),
(64, '1/2 kasicice secera'),
(65, '1/2 kasicice soli'),
(66, '150-200 g sampinjona'),
(67, '5-6 kasika kecapa'),
(68, 'origano'),
(69, '300 g brasna'),
(70, '1,5 dl vode'),
(71, '15 g kvasca'),
(72, '1 kasicica secera'),
(73, '1 kasicica soli'),
(74, '100 ml soka od paradajza'),
(75, '100 g pilece salame'),
(76, '150 g mocarele'),
(77, '1 kasicica  origana'),
(78, '3-4 kasike maslinovog ulja'),
(79, '3 listica bosiljka'),
(80, '800 grama govedje krtine'),
(81, '2 zelene paprike'),
(82, '2 kasike putera'),
(83, '350 grama prokelja'),
(84, '1 kasika mesavine zacina'),
(85, '1 govedja kocka za supu'),
(86, '2 glavice crnog luka'),
(87, '4 zaledjene banane'),
(88, '300 grama mlevenog badema'),
(89, '4 kasike rastopljenog kokosovog ulja'),
(90, '3 kasike biljnog mleka'),
(91, '6 svezih urmi'),
(92, 'sveze divlje borovnice'),
(93, '250 grama svezih kobasica'),
(94, '300 grama spageta'),
(95, '100 grama spanaca'),
(96, '3 paradajza'),
(97, '1 zelena paprika'),
(98, '200 grama mocarele'),
(99, '1 cen belog luka'),
(100, '10-ak listova rukole'),
(101, 'maslinovo ulje'),
(102, '1 kilogram skuvanog krompira'),
(103, '150 grama brasna'),
(104, '200 grama krugova sunkarice'),
(105, '500 grama zute boranije'),
(106, '1 grancica sveze zalfije'),
(107, '100 grama prezle'),
(108, '2 jaja'),
(109, '200 grama margarina'),
(110, '2 svinjske krmenadle'),
(111, '2 kasike senfa'),
(112, '75 grama sira'),
(113, '1 kasicica  zalfije'),
(114, '1 jabuka'),
(115, '10 kasika secera'),
(116, '10 kasika mekog bra?na'),
(117, '5 kasika heljdinog brasna'),
(118, '10 kasika mleka'),
(119, 'pola kesice praska za pecivo'),
(120, '200 grama odmrznutih malina i kupina (crvenog voca)'),
(121, 'secer u prahu'),
(122, '600 gr svinjskih snicli'),
(123, '250 gr sampinjona'),
(124, '3 cena belog luka'),
(125, '1 kasicica  senfa'),
(126, '2 kasike brasna'),
(127, '300 ml junece supe'),
(128, 'aleva paprika');

-- --------------------------------------------------------

--
-- Table structure for table `odgovori`
--

CREATE TABLE `odgovori` (
  `id_odgovor` int(11) NOT NULL,
  `id_pitanje_odgovor` int(11) NOT NULL,
  `id_korisnik` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `odgovori`
--

INSERT INTO `odgovori` (`id_odgovor`, `id_pitanje_odgovor`, `id_korisnik`) VALUES
(1, 2, 2),
(2, 5, 2),
(3, 8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `pitanja`
--

CREATE TABLE `pitanja` (
  `id_pitanje` int(11) NOT NULL,
  `pitanje` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pitanja`
--

INSERT INTO `pitanja` (`id_pitanje`, `pitanje`) VALUES
(1, 'Koliko vremena dnevno provodite kuvajuci?'),
(2, 'Da li koristite nase recepte?'),
(3, 'Koliko su Vam korisni nasi recepti?');

-- --------------------------------------------------------

--
-- Table structure for table `pitanje_odgovor`
--

CREATE TABLE `pitanje_odgovor` (
  `id_p_o` int(11) NOT NULL,
  `id_pitanje` int(11) NOT NULL,
  `odgovor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pitanje_odgovor`
--

INSERT INTO `pitanje_odgovor` (`id_p_o`, `id_pitanje`, `odgovor`) VALUES
(1, 1, 'Manje od 30 minuta'),
(2, 1, 'Izmedju 30 i 60 minuta'),
(3, 1, 'Vise od 60 minuta'),
(4, 2, 'Ne'),
(5, 2, 'Ponekad'),
(6, 2, 'Da, cesto'),
(7, 3, 'Ne'),
(8, 3, 'Onako'),
(9, 3, 'Da, mnogo');

-- --------------------------------------------------------

--
-- Table structure for table `poruke_korisnika`
--

CREATE TABLE `poruke_korisnika` (
  `id_p_k` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `text_poruke` text NOT NULL,
  `name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `poruke_korisnika`
--

INSERT INTO `poruke_korisnika` (`id_p_k`, `email`, `subject`, `text_poruke`, `name`) VALUES
(4, 'milica@gmail.com', 'Recept', 'Zanima me tajlandska kuhinja da li ce biti nekih jela iz njihove kuhinje?', 'Milica'),
(5, 'mica@gmail.com', 'Kineska kuhinja', 'Za vreme ovog korona virusa kolko je pametno jesti neka tradicionalna jela kineske kuhinje?', 'Milica');

-- --------------------------------------------------------

--
-- Table structure for table `proizvod_kategorija`
--

CREATE TABLE `proizvod_kategorija` (
  `id_proizvod_kategorija` int(11) NOT NULL,
  `naziv_kategorija` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proizvod_kategorija`
--

INSERT INTO `proizvod_kategorija` (`id_proizvod_kategorija`, `naziv_kategorija`) VALUES
(1, 'Pizza'),
(2, 'Glavno jelo'),
(3, 'Dessert'),
(4, 'Topla jela'),
(5, 'Probaaa');

-- --------------------------------------------------------

--
-- Table structure for table `slika`
--

CREATE TABLE `slika` (
  `id_slika` int(11) NOT NULL,
  `src` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `alt` varchar(50) NOT NULL,
  `id_proizvod` int(11) NOT NULL,
  `slajder` int(11) NOT NULL DEFAULT '0',
  `prikaz` int(11) NOT NULL DEFAULT '0',
  `kat` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slika`
--

INSERT INTO `slika` (`id_slika`, `src`, `title`, `alt`, `id_proizvod`, `slajder`, `prikaz`, `kat`) VALUES
(1, 'img/recipe/recipe-5.png', 'Potaz bundeva i krompir', 'Potaz bundeva i krompir', 1, 0, 0, 0),
(2, 'img/recipe/recipe-7.png', 'Chessecake sa jagodama', 'Chessecake sa jagodama', 2, 3, 1, 0),
(3, 'img/recipe/recipe-3.png', 'Losos sa povrcem', 'Losos sa povrcem', 5, 2, 1, 0),
(4, 'img/recipe/recipe-8.png', 'Chessecake od limete', 'Chessecake od limete', 3, 3, 1, 0),
(5, 'img/recipe/recipe-2.png', 'Ledena torta sa borovnicama i bananama', 'Ledena torta sa borovnicama i bananama', 9, 3, 0, 0),
(6, 'img/recipe/recipe-9.png', 'Pizza sa sirom', 'Pizza sa sirom', 7, 1, 1, 0),
(7, 'img/recipe/recipe-4.png', 'Pizza vege', 'Pizza vege', 6, 1, 0, 0),
(8, 'img/recipe/recipe-17.png', 'Snicla u sosu od pecuraka', 'Snicla u sosu od pecuraka', 14, 2, 1, 0),
(9, 'img/recipe/recipe-16.png', 'Kolac od heljdinog brasna sa malinama i kupinama', 'Kolac od heljdinog brasna sa malinama i kupinama', 13, 3, 0, 0),
(10, 'img/recipe/recipe-15.png', 'Svinjske kremenadle sa jabukom', 'Svinjske kremenadle sa jabukom', 12, 2, 0, 0),
(11, 'img/recipe/recipe-14.png', 'Rolat od krompira', 'Rolat od krompira', 11, 0, 0, 0),
(12, 'img/recipe/recipe-13.png', 'Spagete sa cuftama od kobasica', 'Spagete sa cuftama od kobasica ', 10, 0, 0, 0),
(13, 'img/recipe/recipe-12.png', 'Makedonski piperkar', 'Makedonski piperkar', 8, 0, 0, 0),
(14, 'img/recipe/recipe-11.png', 'Biftek pizzaiola', 'Biftek pizzaiola', 4, 2, 0, 0),
(15, 'img/recipe/recipe-10.png', 'Lazanje sa brokolijem', 'Lazanje sa brokolijem', 15, 0, 0, 0),
(16, 'img/1584891126recipe-2.png', 'recipe-2.png', 'recipe-2.png', 16, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `subsrcibe`
--

CREATE TABLE `subsrcibe` (
  `id_s` int(11) NOT NULL,
  `email` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subsrcibe`
--

INSERT INTO `subsrcibe` (`id_s`, `email`) VALUES
(6, 'maa@gmail.com'),
(3, 'mica@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `uloge`
--

CREATE TABLE `uloge` (
  `id_uloga` int(11) NOT NULL,
  `naziv_uloge` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uloge`
--

INSERT INTO `uloge` (`id_uloga`, `naziv_uloge`) VALUES
(1, 'korisnik'),
(2, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `drzave`
--
ALTER TABLE `drzave`
  ADD PRIMARY KEY (`id_drzava`),
  ADD KEY `kontinent_id` (`kontinent_id`);

--
-- Indexes for table `jelo`
--
ALTER TABLE `jelo`
  ADD PRIMARY KEY (`id_jelo`),
  ADD KEY `id_kategorija` (`id_kategorija`,`drzava_id`),
  ADD KEY `drzava_id` (`drzava_id`);

--
-- Indexes for table `jelo_nacin`
--
ALTER TABLE `jelo_nacin`
  ADD PRIMARY KEY (`id_jelo_nacin`),
  ADD KEY `id_jelo` (`id_jelo`,`id_nacin`),
  ADD KEY `id_nacin` (`id_nacin`);

--
-- Indexes for table `jelo_namernice`
--
ALTER TABLE `jelo_namernice`
  ADD PRIMARY KEY (`id_jelo_namernice`),
  ADD KEY `id_jelo` (`id_jelo`,`id_namernice`),
  ADD KEY `id_namernice` (`id_namernice`);

--
-- Indexes for table `komentari`
--
ALTER TABLE `komentari`
  ADD PRIMARY KEY (`id_komentar`),
  ADD KEY `korisnik_id` (`korisnik_id`,`id_recept`),
  ADD KEY `id_recept` (`id_recept`);

--
-- Indexes for table `kontinent`
--
ALTER TABLE `kontinent`
  ADD PRIMARY KEY (`id_kontinent`);

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id_korisnik`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `id_uloga_korisnik` (`id_uloga_korisnik`);

--
-- Indexes for table `meni`
--
ALTER TABLE `meni`
  ADD PRIMARY KEY (`id_meni`);

--
-- Indexes for table `nacin_spremanja`
--
ALTER TABLE `nacin_spremanja`
  ADD PRIMARY KEY (`id_nacin`);

--
-- Indexes for table `namernice`
--
ALTER TABLE `namernice`
  ADD PRIMARY KEY (`id_namernice`);

--
-- Indexes for table `odgovori`
--
ALTER TABLE `odgovori`
  ADD PRIMARY KEY (`id_odgovor`),
  ADD KEY `id_korisnik` (`id_korisnik`);

--
-- Indexes for table `pitanja`
--
ALTER TABLE `pitanja`
  ADD PRIMARY KEY (`id_pitanje`);

--
-- Indexes for table `pitanje_odgovor`
--
ALTER TABLE `pitanje_odgovor`
  ADD PRIMARY KEY (`id_p_o`),
  ADD KEY `id_pitanje` (`id_pitanje`);

--
-- Indexes for table `poruke_korisnika`
--
ALTER TABLE `poruke_korisnika`
  ADD PRIMARY KEY (`id_p_k`);

--
-- Indexes for table `proizvod_kategorija`
--
ALTER TABLE `proizvod_kategorija`
  ADD PRIMARY KEY (`id_proizvod_kategorija`);

--
-- Indexes for table `slika`
--
ALTER TABLE `slika`
  ADD PRIMARY KEY (`id_slika`),
  ADD KEY `id_proizvod` (`id_proizvod`);

--
-- Indexes for table `subsrcibe`
--
ALTER TABLE `subsrcibe`
  ADD PRIMARY KEY (`id_s`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `uloge`
--
ALTER TABLE `uloge`
  ADD PRIMARY KEY (`id_uloga`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drzave`
--
ALTER TABLE `drzave`
  MODIFY `id_drzava` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `jelo`
--
ALTER TABLE `jelo`
  MODIFY `id_jelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `jelo_nacin`
--
ALTER TABLE `jelo_nacin`
  MODIFY `id_jelo_nacin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `jelo_namernice`
--
ALTER TABLE `jelo_namernice`
  MODIFY `id_jelo_namernice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `komentari`
--
ALTER TABLE `komentari`
  MODIFY `id_komentar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `kontinent`
--
ALTER TABLE `kontinent`
  MODIFY `id_kontinent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `id_korisnik` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `meni`
--
ALTER TABLE `meni`
  MODIFY `id_meni` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `nacin_spremanja`
--
ALTER TABLE `nacin_spremanja`
  MODIFY `id_nacin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `namernice`
--
ALTER TABLE `namernice`
  MODIFY `id_namernice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `odgovori`
--
ALTER TABLE `odgovori`
  MODIFY `id_odgovor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pitanja`
--
ALTER TABLE `pitanja`
  MODIFY `id_pitanje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pitanje_odgovor`
--
ALTER TABLE `pitanje_odgovor`
  MODIFY `id_p_o` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `poruke_korisnika`
--
ALTER TABLE `poruke_korisnika`
  MODIFY `id_p_k` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `proizvod_kategorija`
--
ALTER TABLE `proizvod_kategorija`
  MODIFY `id_proizvod_kategorija` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `slika`
--
ALTER TABLE `slika`
  MODIFY `id_slika` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `subsrcibe`
--
ALTER TABLE `subsrcibe`
  MODIFY `id_s` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `uloge`
--
ALTER TABLE `uloge`
  MODIFY `id_uloga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `drzave`
--
ALTER TABLE `drzave`
  ADD CONSTRAINT `drzave_ibfk_1` FOREIGN KEY (`kontinent_id`) REFERENCES `kontinent` (`id_kontinent`);

--
-- Constraints for table `jelo`
--
ALTER TABLE `jelo`
  ADD CONSTRAINT `jelo_ibfk_1` FOREIGN KEY (`drzava_id`) REFERENCES `drzave` (`id_drzava`),
  ADD CONSTRAINT `jelo_ibfk_2` FOREIGN KEY (`id_kategorija`) REFERENCES `proizvod_kategorija` (`id_proizvod_kategorija`);

--
-- Constraints for table `jelo_nacin`
--
ALTER TABLE `jelo_nacin`
  ADD CONSTRAINT `jelo_nacin_ibfk_1` FOREIGN KEY (`id_nacin`) REFERENCES `nacin_spremanja` (`id_nacin`),
  ADD CONSTRAINT `jelo_nacin_ibfk_2` FOREIGN KEY (`id_jelo`) REFERENCES `jelo` (`id_jelo`);

--
-- Constraints for table `jelo_namernice`
--
ALTER TABLE `jelo_namernice`
  ADD CONSTRAINT `jelo_namernice_ibfk_1` FOREIGN KEY (`id_namernice`) REFERENCES `namernice` (`id_namernice`),
  ADD CONSTRAINT `jelo_namernice_ibfk_2` FOREIGN KEY (`id_jelo`) REFERENCES `jelo` (`id_jelo`);

--
-- Constraints for table `komentari`
--
ALTER TABLE `komentari`
  ADD CONSTRAINT `komentari_ibfk_1` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnik` (`id_korisnik`),
  ADD CONSTRAINT `komentari_ibfk_2` FOREIGN KEY (`id_recept`) REFERENCES `jelo` (`id_jelo`);

--
-- Constraints for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD CONSTRAINT `korisnik_ibfk_1` FOREIGN KEY (`id_uloga_korisnik`) REFERENCES `uloge` (`id_uloga`);

--
-- Constraints for table `odgovori`
--
ALTER TABLE `odgovori`
  ADD CONSTRAINT `odgovori_ibfk_1` FOREIGN KEY (`id_korisnik`) REFERENCES `korisnik` (`id_korisnik`);

--
-- Constraints for table `pitanje_odgovor`
--
ALTER TABLE `pitanje_odgovor`
  ADD CONSTRAINT `pitanje_odgovor_ibfk_1` FOREIGN KEY (`id_pitanje`) REFERENCES `pitanja` (`id_pitanje`);

--
-- Constraints for table `slika`
--
ALTER TABLE `slika`
  ADD CONSTRAINT `slika_ibfk_1` FOREIGN KEY (`id_proizvod`) REFERENCES `jelo` (`id_jelo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
