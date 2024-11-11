-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2024 at 06:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lead_genenrator`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `admin_name` varchar(222) NOT NULL,
  `image` varchar(11) NOT NULL,
  `email` varchar(222) NOT NULL,
  `password` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `admin_type` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `admin_name`, `image`, `email`, `password`, `timestamp`, `admin_type`) VALUES
(1, 'Pratham', 'b.jpg', 'Sync@gmail.com', '111', '2024-08-31 20:13:48', 'CTO');

-- --------------------------------------------------------

--
-- Table structure for table `advertise`
--

CREATE TABLE `advertise` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `advertise`
--

INSERT INTO `advertise` (`id`, `image`, `heading`, `createdAt`, `updatedAt`) VALUES
(10, '/uploads/advertise/1720720306728-721103412.jfif', NULL, '2024-07-11 23:21:46', '2024-07-11 23:21:46'),
(13, '/uploads/advertise/1721550377366-452942582.png', NULL, '2024-07-21 13:56:17', '2024-07-21 13:56:17');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `vid` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `vid`, `image`, `createdAt`, `updatedAt`, `timestamp`) VALUES
(21, 2, '/uploads/banners/1712663945900.jpg', '2024-04-09 17:29:05', '2024-04-09 17:29:05', '2024-04-17 13:45:50'),
(28, 1, '/uploads/banners/1721550261695.jpg', '2024-07-21 13:54:21', '2024-07-21 13:54:21', '2024-07-21 08:24:21');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(222) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `timestamp`) VALUES
(1, 'Sallons', '2024-04-17 13:46:16'),
(5, 'Medical', '2024-04-17 13:46:16'),
(6, 'InformationTechnology', '2024-04-17 13:46:16'),
(18, 'Photgrapher', '2024-04-17 13:46:16'),
(19, 'test', '2024-06-04 14:43:20');

-- --------------------------------------------------------

--
-- Table structure for table `features_accesses`
--

CREATE TABLE `features_accesses` (
  `id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `category_count` int(11) NOT NULL,
  `advance_booking_indays` int(11) DEFAULT NULL,
  `history_indays` int(11) DEFAULT NULL,
  `banners` int(11) DEFAULT NULL,
  `services` int(11) DEFAULT NULL,
  `support` int(11) DEFAULT NULL,
  `url_usage` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `features_accesses`
--

INSERT INTO `features_accesses` (`id`, `pid`, `category_count`, `advance_booking_indays`, `history_indays`, `banners`, `services`, `support`, `url_usage`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 5, 90, 3, 10, 1, 'GMB', '2024-03-24 07:08:07', '2024-03-24 07:08:07'),
(2, 2, 2, 15, 180, 5, 25, 2, '+ Website', '2024-03-24 07:08:07', '2024-03-24 07:08:07'),
(3, 3, 3, 30, 360, 10, 50, 3, '+ QR Code', '2024-03-24 07:08:07', '2024-03-24 07:08:07');

-- --------------------------------------------------------

--
-- Table structure for table `help_support`
--

CREATE TABLE `help_support` (
  `id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `vid` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `inquiry_date` datetime DEFAULT current_timestamp(),
  `resolve_date` datetime DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `help_support`
--

INSERT INTO `help_support` (`id`, `message`, `vid`, `status`, `inquiry_date`, `resolve_date`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(2, 'Internal server error', 1, 0, '2024-04-06 13:00:10', NULL, '2024-04-06 07:30:10', '2024-04-06 13:00:10', '2024-04-06 13:00:10'),
(3, 'Internal server error', 1, 0, '2024-04-06 14:20:20', NULL, '2024-04-06 08:50:20', '2024-04-06 14:20:20', '2024-04-06 14:20:20'),
(4, 'Hello', 1, 0, '2024-04-06 14:27:45', NULL, '2024-04-06 08:57:45', '2024-04-06 14:27:45', '2024-04-06 14:27:45'),
(5, '', 1, 0, '2024-04-06 14:36:14', NULL, '2024-04-06 09:06:14', '2024-04-06 14:36:14', '2024-04-06 14:36:14'),
(6, '', 1, 0, '2024-04-06 15:19:21', NULL, '2024-04-06 09:49:21', '2024-04-06 15:19:21', '2024-04-06 15:19:21'),
(7, '', 1, 0, '2024-04-06 15:19:24', NULL, '2024-04-06 09:49:24', '2024-04-06 15:19:24', '2024-04-06 15:19:24'),
(8, 'hello', 1, 0, '2024-04-08 11:09:27', NULL, '2024-04-08 05:39:27', '2024-04-08 11:09:27', '2024-04-08 11:09:27'),
(9, 'Hello', 1, 0, '2024-04-08 11:31:21', NULL, '2024-04-08 06:01:21', '2024-04-08 11:31:21', '2024-04-08 11:31:21'),
(10, 'Hello', 1, 0, '2024-04-08 12:14:25', NULL, '2024-04-08 06:44:25', '2024-04-08 12:14:25', '2024-04-08 12:14:25'),
(11, NULL, 1, 0, '2024-04-08 12:15:08', NULL, '2024-04-08 06:45:08', '2024-04-08 12:15:08', '2024-04-08 12:15:08'),
(12, NULL, 1, 0, '2024-04-08 12:16:04', NULL, '2024-04-08 06:46:04', '2024-04-08 12:16:04', '2024-04-08 12:16:04'),
(13, '', 1, 0, '2024-04-16 18:04:55', NULL, '2024-04-16 12:34:55', '2024-04-16 18:04:55', '2024-04-16 18:04:55');

-- --------------------------------------------------------

--
-- Table structure for table `holiday`
--

CREATE TABLE `holiday` (
  `id` int(11) NOT NULL,
  `fullday_holiday` varchar(255) DEFAULT NULL,
  `vid` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '00:30:00',
  `time` time DEFAULT NULL,
  `timestamp` time NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `holiday`
--

INSERT INTO `holiday` (`id`, `fullday_holiday`, `vid`, `date`, `status`, `time`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(2, NULL, 36, '2024-04-12', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(3, NULL, 36, '2024-04-12', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(5, NULL, 36, '2024-04-12', 'unavailable', '14:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(6, NULL, 36, '2024-04-12', 'unavailable', '16:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(7, NULL, 36, '2024-04-12', 'unavailable', '21:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(8, NULL, 36, '2024-04-12', 'unavailable', '17:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(9, NULL, 36, '2024-04-12', 'unavailable', '19:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(10, NULL, 36, '2024-04-12', 'unavailable', '20:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(11, '1', 36, '2024-04-12', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(12, NULL, 36, '2024-04-12', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(14, NULL, 36, '2024-04-12', 'unavailable', '13:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(15, '1', 36, '2024-04-12', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(16, '1', 36, '2024-04-12', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(17, '1', 36, '2024-04-12', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(18, NULL, 36, '2024-04-11', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(19, NULL, 36, '2024-04-11', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(20, NULL, 36, '2024-04-11', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(21, NULL, 36, '2024-04-11', 'unavailable', '11:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(23, NULL, 36, '2024-04-14', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(24, '1', 36, '2024-04-15', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(25, NULL, 36, '2024-04-11', 'unavailable', '14:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(26, NULL, 1, '2024-04-13', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(27, NULL, 1, '2024-04-13', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(28, NULL, 1, '2024-04-13', 'unavailable', '14:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(29, NULL, 1, '2024-04-13', 'unavailable', '16:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(30, '1', 1, '2024-04-14', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(37, NULL, 1, '2024-04-16', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(38, NULL, 1, '2024-04-16', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(39, NULL, 1, '2024-04-18', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(40, NULL, 1, '2024-04-18', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(41, NULL, 1, '2024-04-17', 'unavailable', '11:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(42, NULL, 1, '2024-04-17', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(43, NULL, 1, '2024-04-17', 'unavailable', '12:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(44, NULL, 1, '2024-04-17', 'unavailable', '15:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(45, NULL, 1, '2024-04-30', 'unavailable', '10:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(46, NULL, 1, '2024-04-30', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(47, NULL, 1, '2024-04-30', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(48, NULL, 1, '2024-04-28', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(49, NULL, 1, '2024-04-28', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(50, NULL, 1, '2024-04-28', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(51, NULL, 1, '2024-04-28', 'unavailable', '11:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(52, NULL, 1, '2024-04-27', 'unavailable', '11:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(53, NULL, 1, '2024-04-27', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(54, NULL, 1, '2024-04-27', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(55, NULL, 1, '2024-04-27', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(56, NULL, 1, '2024-04-26', 'unavailable', '11:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(58, NULL, 1, '2024-04-26', 'unavailable', '14:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(59, NULL, 1, '2024-04-26', 'unavailable', '16:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(62, NULL, 1, '2024-04-24', 'unavailable', '12:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(63, NULL, 1, '2024-04-24', 'unavailable', '14:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(71, NULL, 1, '2024-04-21', 'unavailable', '12:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(72, NULL, 1, '2024-04-21', 'unavailable', '12:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(73, NULL, 1, '2024-04-21', 'unavailable', '13:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(74, NULL, 1, '2024-04-20', 'unavailable', '12:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(75, NULL, 1, '2024-04-20', 'unavailable', '13:00:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(76, NULL, 1, '2024-04-19', 'unavailable', '14:30:00', '00:00:00', '2024-04-18 10:50:51', '2024-04-18 10:51:28'),
(77, NULL, 1, '2024-04-18', 'unavailable', '10:00:00', '00:00:00', '2024-04-18 10:52:04', '2024-04-18 10:52:04'),
(78, '1', 1, '2024-04-18', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:55:10', '2024-04-18 11:55:10'),
(79, '1', 1, '2024-04-18', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:55:11', '2024-04-18 11:55:11'),
(80, NULL, 1, '2024-04-18', 'unavailable', '09:30:00', '00:00:00', '2024-04-18 11:55:11', '2024-04-18 11:55:11'),
(81, '1', 1, '2024-04-19', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:55:13', '2024-04-18 11:55:13'),
(82, '1', 1, '2024-04-19', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:55:21', '2024-04-18 11:55:21'),
(83, '1', 1, '2024-04-20', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:55:25', '2024-04-18 11:55:25'),
(84, NULL, 1, '2024-04-20', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 11:55:26', '2024-04-18 11:55:26'),
(85, NULL, 1, '2024-04-20', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 11:55:27', '2024-04-18 11:55:27'),
(86, NULL, 1, '2024-04-20', 'unavailable', '09:00:00', '00:00:00', '2024-04-18 11:55:27', '2024-04-18 11:55:27'),
(87, NULL, 1, '2024-04-20', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 11:55:28', '2024-04-18 11:55:28'),
(88, NULL, 1, '2024-04-18', 'unavailable', '11:30:00', '00:00:00', '2024-04-18 11:55:37', '2024-04-18 11:55:37'),
(89, '1', 1, '2024-04-21', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:55:51', '2024-04-18 11:55:51'),
(90, '1', 1, '2024-04-21', '00:30:00', '00:00:00', '00:00:00', '2024-04-18 11:56:01', '2024-04-18 11:56:01'),
(117, NULL, 1, '2024-04-25', 'unavailable', '10:30:00', '00:00:00', '2024-04-22 14:45:00', '2024-04-22 14:45:00'),
(118, NULL, 1, '2024-04-25', 'unavailable', '09:30:00', '00:00:00', '2024-04-22 14:45:02', '2024-04-22 14:45:02'),
(120, NULL, 1, '2024-04-25', 'unavailable', '13:30:00', '00:00:00', '2024-04-22 14:45:10', '2024-04-22 14:45:10'),
(121, NULL, 1, '2024-04-25', 'unavailable', '12:30:00', '00:00:00', '2024-04-22 14:45:11', '2024-04-22 14:45:11'),
(122, NULL, 1, '2024-04-25', 'unavailable', '15:00:00', '00:00:00', '2024-04-22 14:45:11', '2024-04-22 14:45:11'),
(123, NULL, 1, '2024-04-25', 'unavailable', '14:00:00', '00:00:00', '2024-04-22 14:45:14', '2024-04-22 14:45:14'),
(124, NULL, 1, '2024-04-25', 'unavailable', '18:30:00', '00:00:00', '2024-04-22 14:45:17', '2024-04-22 14:45:17'),
(125, NULL, 1, '2024-04-25', 'unavailable', '20:00:00', '00:00:00', '2024-04-22 14:45:19', '2024-04-22 14:45:19'),
(126, NULL, 1, '2024-04-25', 'unavailable', '17:30:00', '00:00:00', '2024-04-22 14:45:20', '2024-04-22 14:45:20'),
(127, NULL, 1, '2024-04-25', 'unavailable', '19:00:00', '00:00:00', '2024-04-22 14:45:21', '2024-04-22 14:45:21'),
(128, NULL, 1, '2024-04-25', 'unavailable', '21:30:00', '00:00:00', '2024-04-22 14:45:22', '2024-04-22 14:45:22'),
(135, '1', 1, '2024-06-07', '00:30:00', '00:00:00', '18:44:34', '2024-06-05 18:44:34', '2024-06-05 18:44:34'),
(136, NULL, 1, '2024-06-06', 'unavailable', '09:00:00', '18:44:57', '2024-06-05 18:44:57', '2024-06-05 18:44:57'),
(139, NULL, 1, '2024-06-05', 'unavailable', '09:00:00', '20:09:52', '2024-06-05 20:09:52', '2024-06-05 20:09:52'),
(140, NULL, 1, '2024-06-05', 'unavailable', '09:30:00', '20:09:52', '2024-06-05 20:09:52', '2024-06-05 20:09:52'),
(141, '1', 1, '2024-06-06', '00:30:00', '00:00:00', '20:09:56', '2024-06-05 20:09:56', '2024-06-05 20:09:56'),
(142, NULL, 1, '2024-06-14', 'unavailable', '14:30:00', '00:01:30', '2024-06-12 00:01:30', '2024-06-12 00:01:30'),
(143, '1', 1, '2024-06-14', '00:30:00', '00:00:00', '01:35:29', '2024-06-13 01:35:29', '2024-06-13 01:35:29'),
(150, NULL, 1, '2024-06-15', 'unavailable', '09:30:00', '21:13:05', '2024-06-15 21:13:05', '2024-06-15 21:13:05'),
(158, NULL, 1, '2024-07-08', 'unavailable', '10:00:00', '17:47:08', '2024-07-08 17:47:08', '2024-07-08 17:47:08'),
(159, NULL, 1, '2024-07-08', 'unavailable', '11:30:00', '17:47:09', '2024-07-08 17:47:09', '2024-07-08 17:47:09'),
(160, '1', 1, '2024-07-09', '00:30:00', '00:00:00', '17:47:14', '2024-07-08 17:47:14', '2024-07-08 17:47:14'),
(163, NULL, 1, '2024-07-10', 'unavailable', '11:30:00', '11:51:19', '2024-07-10 11:51:19', '2024-07-10 11:51:19'),
(164, NULL, 1, '2024-07-10', 'unavailable', '11:00:00', '11:51:21', '2024-07-10 11:51:21', '2024-07-10 11:51:21'),
(168, NULL, 1, '2024-07-11', 'unavailable', '14:30:00', '22:08:22', '2024-07-11 22:08:22', '2024-07-11 22:08:22'),
(169, NULL, 1, '2024-07-11', 'unavailable', '15:00:00', '22:08:23', '2024-07-11 22:08:23', '2024-07-11 22:08:23'),
(170, NULL, 1, '2024-07-11', 'unavailable', '13:00:00', '22:08:23', '2024-07-11 22:08:23', '2024-07-11 22:08:23'),
(171, '1', 1, '2024-07-12', '00:30:00', '00:00:00', '22:49:35', '2024-07-11 22:49:35', '2024-07-11 22:49:35'),
(173, NULL, 1, '2024-07-14', 'unavailable', '10:00:00', '23:07:20', '2024-07-14 23:07:20', '2024-07-14 23:07:20'),
(174, NULL, 1, '2024-07-14', 'unavailable', '13:00:00', '23:07:22', '2024-07-14 23:07:22', '2024-07-14 23:07:22'),
(175, NULL, 1, '2024-07-14', 'unavailable', '14:30:00', '23:07:24', '2024-07-14 23:07:24', '2024-07-14 23:07:24'),
(176, '1', 1, '2024-07-15', '00:30:00', '00:00:00', '23:07:28', '2024-07-14 23:07:28', '2024-07-14 23:07:28'),
(177, NULL, 1, '2024-07-20', 'unavailable', '11:30:00', '16:40:47', '2024-07-20 16:40:47', '2024-07-20 16:40:47'),
(178, NULL, 1, '2024-07-21', 'unavailable', '16:30:00', '14:02:52', '2024-07-21 14:02:52', '2024-07-21 14:02:52'),
(179, NULL, 1, '2024-07-21', 'unavailable', '14:30:00', '14:02:53', '2024-07-21 14:02:53', '2024-07-21 14:02:53'),
(183, NULL, 1, '2024-08-25', 'unavailable', '12:30:00', '23:43:00', '2024-08-25 23:43:00', '2024-08-25 23:43:00'),
(184, '1', 1, '2024-08-26', '00:30:00', '00:00:00', '23:43:09', '2024-08-25 23:43:09', '2024-08-25 23:43:09'),
(185, NULL, 1, '2024-09-02', 'unavailable', '15:00:00', '01:30:42', '2024-09-01 01:30:42', '2024-09-01 01:30:42'),
(186, NULL, 1, '2024-09-02', 'unavailable', '14:30:00', '01:30:44', '2024-09-01 01:30:44', '2024-09-01 01:30:44'),
(187, NULL, 1, '2024-09-02', 'unavailable', '15:30:00', '01:30:45', '2024-09-01 01:30:45', '2024-09-01 01:30:45');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_data`
--

CREATE TABLE `invoice_data` (
  `id` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `invoiceUrl` text NOT NULL,
  `order_form_no` text NOT NULL,
  `serial_no_of_invoice` text NOT NULL,
  `order_form_date` date DEFAULT NULL,
  `date_of_invoice` date DEFAULT NULL,
  `VendorName` varchar(222) NOT NULL,
  `CompanyName` varchar(222) NOT NULL,
  `Address` varchar(222) NOT NULL,
  `pincode` int(222) NOT NULL,
  `State` varchar(222) NOT NULL,
  `StateCode` int(11) NOT NULL,
  `po_no` varchar(50) DEFAULT NULL,
  `po_date` date DEFAULT NULL,
  `gstin_uin` varchar(20) DEFAULT NULL,
  `tan` varchar(20) DEFAULT NULL,
  `service_description` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `city` varchar(11) NOT NULL,
  `taxable_amount` decimal(10,2) DEFAULT NULL,
  `cgst_sgst_amount` decimal(10,2) DEFAULT NULL,
  `igst_amount` decimal(10,2) DEFAULT NULL,
  `services_tenure` varchar(100) DEFAULT NULL,
  `payment_mode` varchar(50) DEFAULT NULL,
  `addon` varchar(255) DEFAULT NULL,
  `amount_in_words` varchar(255) DEFAULT NULL,
  `final_amount` decimal(10,2) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `gstImage` text DEFAULT NULL,
  `adress_type` int(11) NOT NULL,
  `addressProof` text DEFAULT NULL,
  `pan_number` int(11) NOT NULL,
  `pan_proof` text DEFAULT NULL,
  `create_date` date DEFAULT current_timestamp(),
  `create_time` time NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice_data`
--

INSERT INTO `invoice_data` (`id`, `vid`, `invoiceUrl`, `order_form_no`, `serial_no_of_invoice`, `order_form_date`, `date_of_invoice`, `VendorName`, `CompanyName`, `Address`, `pincode`, `State`, `StateCode`, `po_no`, `po_date`, `gstin_uin`, `tan`, `service_description`, `qty`, `amount`, `city`, `taxable_amount`, `cgst_sgst_amount`, `igst_amount`, `services_tenure`, `payment_mode`, `addon`, `amount_in_words`, `final_amount`, `timestamp`, `gstImage`, `adress_type`, `addressProof`, `pan_number`, `pan_proof`, `create_date`, `create_time`, `createdAt`) VALUES
(12, 1, '', '', '', NULL, NULL, 'Aman Gupta ', 'Boat Enterprises', 'Near IT Park', 412805, 'Goa', 0, NULL, NULL, 'sdf', NULL, NULL, NULL, NULL, 'Noida', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 12:44:44', 'uploads\\documents\\1714094684573.webp', 0, NULL, 0, 'uploads\\documents\\1714260954305.webp', '2024-04-20', '18:39:53', '2024-04-20 18:41:28'),
(13, 0, '', '', '', NULL, NULL, '', '', '', 0, 'sa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 13:04:51', 'uploads\\documents\\1714378407074.png', 0, 'uploads\\documents\\1714130738603.png', 0, 'uploads\\documents\\1714328995181.png', '2024-04-20', '18:39:53', '2024-04-20 18:41:28'),
(14, 0, '', '', '', NULL, NULL, '', '', '', 0, 'sa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 13:04:55', 'uploads\\documents\\1714465642675.png', 0, 'uploads\\documents\\1713754944236.png', 0, 'uploads\\documents\\1714544585547.png', '2024-04-20', '18:39:53', '2024-04-20 18:41:28'),
(15, 0, '', 'v-2404004', '', NULL, NULL, '', '', '', 0, 'sa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 13:05:40', 'uploads\\documents\\1714472153297.png', 0, 'uploads\\documents\\1714503976036.png', 0, 'uploads\\documents\\1714357357967.png', '2024-04-20', '18:39:53', '2024-04-20 18:41:28'),
(16, 0, '', 'v-2404001', '', NULL, NULL, '', '', '', 0, 'sa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 13:13:23', 'uploads\\documents\\1713803882711.png', 0, 'uploads\\documents\\1714142912655.png', 0, 'uploads\\documents\\1713901558749.png', '2024-04-20', '13:13:23', '2024-04-20 13:13:23'),
(17, 0, '', 'V-2404001', '', NULL, NULL, '', '', '', 0, 'sa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 13:13:52', 'uploads\\documents\\1714431539987.png', 0, 'uploads\\documents\\1714409802729.png', 0, 'uploads\\documents\\1714521281365.png', '2024-04-20', '13:13:52', '2024-04-20 13:13:52'),
(18, 0, '', 'V-2404001', '', NULL, NULL, '', '', '', 0, 'sa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-20 13:13:58', 'uploads\\documents\\1713975181428.png', 0, 'uploads\\documents\\1714068388027.png', 0, 'uploads\\documents\\1714396764903.png', '2024-04-20', '13:13:58', '2024-04-20 13:13:58');

-- --------------------------------------------------------

--
-- Table structure for table `lead`
--

CREATE TABLE `lead` (
  `lead_id` int(11) NOT NULL,
  `lead_status` int(11) NOT NULL DEFAULT 0,
  `vid` int(11) NOT NULL DEFAULT 0,
  `lead_name` varchar(200) DEFAULT NULL,
  `lead_address` varchar(222) NOT NULL DEFAULT '0',
  `email` varchar(222) NOT NULL,
  `contact_no` text NOT NULL,
  `selectedServices` text NOT NULL,
  `final_amount` decimal(10,2) NOT NULL,
  `selected_Date` date NOT NULL,
  `appointment_time` time NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `create_date` date NOT NULL DEFAULT current_timestamp(),
  `create_time` time NOT NULL DEFAULT current_timestamp(),
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lead`
--

INSERT INTO `lead` (`lead_id`, `lead_status`, `vid`, `lead_name`, `lead_address`, `email`, `contact_no`, `selectedServices`, `final_amount`, `selected_Date`, `appointment_time`, `createdAt`, `updatedAt`, `create_date`, `create_time`, `timestamp`) VALUES
(1, 2, 1, 'Trail name', 'Wai', 'ppatne189@gmail.com', '7768860976', 'hair-spa,hair toning', 950.00, '2024-06-19', '00:00:00', '2024-06-18 20:12:16', '2024-06-18 20:12:16', '2024-06-18', '00:00:00', '2024-06-18 14:42:16'),
(5, 1, 1, 'Username 123', 'Katraj,Pune', 'asd', '7768860976', 'Hair Spa,Pedicure', 85.00, '2024-07-21', '02:12:48', '2024-07-11 22:13:33', '2024-07-11 22:13:33', '2024-07-11', '00:00:00', '2024-07-11 16:43:33'),
(6, 1, 1, 'Username 123', 'Katraj,Pune', 'asd', '7768860976', 'Hair Spa,Pedicure', 855.00, '2024-07-21', '02:12:48', '2024-07-11 22:13:33', '2024-07-11 22:13:33', '2024-07-11', '00:00:00', '2024-07-11 16:43:33'),
(7, 2, 1, 'Username 123', 'Katraj,Pune', 'asd', '7768860976', 'Hair Spa,Pedicure', 855.00, '2024-07-21', '02:12:48', '2024-07-11 22:13:33', '2024-07-11 22:13:33', '2024-07-11', '00:00:00', '2024-07-11 16:43:33'),
(8, 3, 1, 'Username 123', 'Katraj,Pune', 'asd', '7768860976', 'Hair Spa,Pedicure', 855.00, '2024-07-21', '02:12:48', '2024-07-11 22:13:33', '2024-07-11 22:13:33', '2024-07-11', '00:00:00', '2024-07-11 16:43:33'),
(9, 0, 1, 'Username 123', 'Satara\r\n', 'asd', '7768860976', 'Hair Spa,Pedicure', 1500.00, '2024-07-22', '02:12:48', '2024-07-11 22:13:33', '2024-07-11 22:13:33', '2024-07-11', '00:00:00', '2024-07-11 16:43:33'),
(10, 2, 1, 'Sohil sir', '0as', 'as', '741085260', 'Hair falling out', 750.00, '2024-09-02', '10:26:50', '2024-09-01 01:27:33', '2024-09-01 01:27:33', '2024-09-01', '00:00:00', '2024-08-31 19:57:33'),
(11, 4, 1, 'new leads', '0asd', 'asd', 'asd', 'asd', 750.00, '2024-09-02', '20:00:00', '2024-09-01 01:35:55', '2024-09-01 01:35:55', '2024-09-01', '00:00:00', '2024-08-31 20:05:55');

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `sharelink` text NOT NULL,
  `rateuslink` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`sharelink`, `rateuslink`, `id`) VALUES
('https://chat.openai.com/c/ce429050-b666-4257-af10-c4acbbac59f3', 'https://chat.openai.com/c/ce429050-b666-4257-af10-c4acbbac59f3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `forPackageOwner` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `notification_all` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `category_name`, `forPackageOwner`, `message`, `notification_all`, `createdAt`, `updatedAt`, `timestamp`) VALUES
(2, 'none', 'none', 'This Notification is for all', 'none', '2024-04-16 14:03:41', '2024-04-05 14:03:41', '2024-04-17 13:41:40'),
(3, 'Sallon', 'none', 'This is for salon and all packages', 'none', '2024-04-23 14:03:41', '2024-04-05 14:03:41', '2024-04-17 13:41:40'),
(5, 'Hospital', 'none', 'allvendors', 'allvendors', '2024-04-06 16:27:55', '2024-04-15 16:27:55', '2024-04-17 13:41:40'),
(6, 'none', 'Diamond', 'This is for diamond package and all categories\r\n', 'none', '2024-04-22 07:33:54', '2024-04-22 07:33:54', '2024-04-22 05:34:55'),
(7, 'none', 'Gold', 'This is for Gold package and all categories\r\n', 'none', '2024-04-22 07:33:54', '2024-04-22 07:33:54', '2024-04-22 05:34:55');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `pid` int(11) NOT NULL,
  `package_name` varchar(255) DEFAULT NULL,
  `package_price_1yr` int(11) DEFAULT NULL,
  `package_price_3yr` int(11) NOT NULL,
  `package_duration_3yr` int(11) NOT NULL,
  `package_duration_1yr` int(11) DEFAULT NULL,
  `perday_1yr` int(11) NOT NULL,
  `perday_3yr` int(11) NOT NULL,
  `mrp_3yr` int(11) DEFAULT 0,
  `mrp_1yr` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`pid`, `package_name`, `package_price_1yr`, `package_price_3yr`, `package_duration_3yr`, `package_duration_1yr`, `perday_1yr`, `perday_3yr`, `mrp_3yr`, `mrp_1yr`, `createdAt`, `updatedAt`) VALUES
(1, 'Platinium', 4000, 9999, 1080, 365, 9, 5, 0, 0, '2024-03-23 10:45:16', '2024-03-23 10:45:16'),
(2, 'Diamond', 2899, 7000, 1080, 365, 7, 9, 0, 0, '2024-03-23 10:45:16', '2024-03-23 10:45:16'),
(3, 'Gold', 2000, 4899, 1080, 365, 5, 11, 0, 0, '2024-03-23 10:45:16', '2024-03-23 10:45:16');

-- --------------------------------------------------------

--
-- Table structure for table `packages_details`
--

CREATE TABLE `packages_details` (
  `id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `features` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages_details`
--

INSERT INTO `packages_details` (`id`, `pid`, `features`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Reply to Customer', '2024-03-30 11:39:28', '2024-03-23 11:39:28'),
(5, 1, '3 Months Customer History', '2024-03-26 08:13:18', '2024-03-26 08:13:18'),
(6, 1, 'Add upto 10 services', '2024-03-26 08:15:58', '2024-03-26 08:15:58'),
(7, 1, 'Email support', '2024-03-26 08:16:46', '2024-03-26 08:16:46'),
(8, 1, '5 days Advance Booking', '2024-03-26 08:23:12', '2024-03-26 08:23:12'),
(9, 1, 'can generate a url for GMB', '2024-03-26 08:23:36', '2024-03-26 08:23:36'),
(10, 2, '6 month customer history', '2024-03-26 10:35:40', '2024-03-26 10:35:40'),
(11, 2, 'can add upto 5 offers', '2024-03-26 10:36:16', '2024-03-26 10:36:16'),
(12, 2, 'Add upto 25 services', '2024-03-26 10:36:45', '2024-03-26 10:36:45'),
(13, 2, 'can generate a URL for GMB and website', '2024-03-26 10:38:20', '2024-03-26 10:38:20'),
(14, 1, '15 days advance booking', '2024-03-26 10:38:59', '2024-03-26 10:38:59'),
(15, 1, 'Email support ', '2024-03-26 08:16:46', '2024-03-26 08:16:46'),
(16, 2, 'Email and Whatsapp support ', '2024-03-26 10:44:34', '2024-03-26 10:44:34'),
(17, 2, 'Reply to Customer', '2024-03-26 10:45:54', '2024-03-26 10:45:54'),
(18, 2, '15 days Advance Booking', '2024-03-26 10:46:29', '2024-03-26 10:46:29'),
(19, 3, '1 year Customer History', '2024-03-26 11:46:17', '2024-03-26 11:46:17'),
(20, 3, 'Can add upto 10 offers', '2024-03-26 11:47:04', '2024-03-26 11:47:04'),
(21, 3, 'Add upto 50 services.', '2024-03-26 11:47:59', '2024-03-26 11:47:59'),
(22, 3, 'Call,whatsApp and E-mail Support', '2024-03-26 11:48:29', '2024-03-26 11:48:29'),
(23, 3, '30 Days advance booking.', '2024-03-26 11:49:29', '2024-03-26 11:49:29'),
(24, 3, 'can generate a URL for GMB and website', '2024-03-26 11:51:21', '2024-03-26 11:51:21'),
(25, 3, 'Qr Code', '2024-03-26 11:51:37', '2024-03-26 11:51:37');

-- --------------------------------------------------------

--
-- Table structure for table `refund_policy`
--

CREATE TABLE `refund_policy` (
  `id` int(11) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refund_policy`
--

INSERT INTO `refund_policy` (`id`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'Certainly! Here\'s a dummy text for a refund policy:\r\n\r\n---\r\n\r\n**Refund Policy**\r\n\r\nThank you for shopping at [Your Company Name]. If you are not entirely satisfied with your purchase, we\'re here to help.\r\n\r\n**Returns**\r\n\r\nYou have [number of days] calenda', '2024-04-06 08:45:05', '2024-04-06 08:45:05'),
(1, 'Certainly! Here\'s a dummy text for a refund policy:\r\n\r\n---\r\n\r\n**Refund Policy**\r\n\r\nThank you for shopping at [Your Company Name]. If you are not entirely satisfied with your purchase, we\'re here to help.\r\n\r\n**Returns**\r\n\r\nYou have [number of days] calenda', '2024-04-06 08:45:05', '2024-04-06 08:45:05'),
(1, 'Certainly! Here\'s a dummy text for a refund policy:\r\n\r\n---\r\n\r\n**Refund Policy**\r\n\r\nThank you for shopping at [Your Company Name]. If you are not entirely satisfied with your purchase, we\'re here to help.\r\n\r\n**Returns**\r\n\r\nYou have [number of days] calenda', '2024-04-06 08:45:05', '2024-04-06 08:45:05'),
(1, 'Certainly! Here\'s a dummy text for a refund policy:\r\n\r\n---\r\n\r\n**Refund Policy**\r\n\r\nThank you for shopping at [Your Company Name]. If you are not entirely satisfied with your purchase, we\'re here to help.\r\n\r\n**Returns**\r\n\r\nYou have [number of days] calenda', '2024-04-06 08:45:05', '2024-04-06 08:45:05');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240305091226-create-vendor-info.js'),
('20240305092358-create-vendor-info.js'),
('20240305094054-create-category.js'),
('20240305101411-create-category.js'),
('20240305105858-city.js'),
('20240305111308-create-city.js'),
('20240305113002-create-service.js'),
('20240305113444-create-services.js'),
('20240305122111-create-category.js'),
('20240306043231-create-lead.js'),
('20240306051433-create-service-charges.js'),
('20240306052310-create-time.js'),
('20240306054954-create-vendor-services.js'),
('20240306061001-create-category.js'),
('20240306084445-create-lead.js'),
('20240306085244-create-service.js'),
('20240306093757-create-service-charges.js'),
('20240306095138-create-service-charges.js'),
('20240306104057-create-time.js'),
('20240306105259-create-vendor-info.js'),
('20240306111639-create-vendor-services.js'),
('20240306112851-create-vendor-time.js'),
('20240307065500-create-vendor-time-availability.js'),
('20240313052829-create-vendor-choose-time.js'),
('20240313091615-create-holidays.js'),
('20240313122701-create-banners.js'),
('20240320043029-create-holiday.js'),
('20240321142658-create-holiday.js'),
('20240323050018-create-packages.js'),
('20240323050624-create-packages-details.js'),
('20240324055631-create-features-access.js'),
('20240405084527-create-advertise.js'),
('20240405093604-create-notification.js'),
('20240406054028-create-terms-condition.js'),
('20240406063028-create-refund-policy.js'),
('20240406070924-create-help-support.js'),
('20240408055134-create-suggestion.js'),
('20240408061907-create-suggestion-topic.js'),
('20240418125355-create.js'),
('20240418125435-create-links.js'),
('20240419051803-create-billing-details.js'),
('20240419090923-create-billing-details.js');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(222) NOT NULL,
  `category_id` int(11) NOT NULL,
  `create_date` date NOT NULL DEFAULT current_timestamp(),
  `create_time` time NOT NULL DEFAULT current_timestamp(),
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `category_id`, `create_date`, `create_time`, `timestamp`) VALUES
(15, 'Hair Coloring', 1, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(16, 'Hair Relaxing', 1, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(18, 'Manicure ', 1, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(19, 'Hair Braiding and Weaving', 1, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(20, 'Facial Services', 1, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(23, 'Problem A', 5, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(24, 'Massage Therapy', 1, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(26, 'Problem B', 5, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(27, 'Problem C', 5, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(28, 'Problem D', 5, '2024-02-28', '00:00:00', '2024-04-17 13:44:12'),
(29, 'Website Development', 6, '2024-03-12', '00:00:00', '2024-04-17 13:44:12'),
(30, 'Software Developent', 6, '2024-03-12', '00:00:00', '2024-04-17 13:44:12'),
(32, 'Google Pramotion', 6, '2024-03-12', '00:00:00', '2024-04-17 13:44:12'),
(33, 'Application Development', 6, '2024-03-12', '00:00:00', '2024-04-17 13:44:12'),
(34, 'Google Page Creation', 6, '2024-03-12', '00:00:00', '2024-04-17 13:44:12'),
(35, 'Erp Deveopment', 6, '2024-03-12', '00:00:00', '2024-04-17 13:44:12'),
(36, 'Spa Packages', 1, '2024-03-20', '06:52:53', '2024-04-17 13:44:12'),
(37, 'Scalp Treatments', 1, '2024-03-20', '06:53:02', '2024-04-17 13:44:12');

-- --------------------------------------------------------

--
-- Table structure for table `service_charges`
--

CREATE TABLE `service_charges` (
  `id` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `charges2` decimal(10,2) NOT NULL,
  `time_taken` varchar(222) NOT NULL,
  `create_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_charges`
--

INSERT INTO `service_charges` (`id`, `vid`, `category_id`, `service_id`, `charges2`, `time_taken`, `create_date`) VALUES
(339, 1, 6, 29, 0.00, '', '2024-06-05'),
(343, 1, 6, 35, 0.00, '', '2024-06-05'),
(344, 1, 6, 33, 0.00, '', '2024-06-05'),
(345, 1, 6, 30, 0.00, '', '2024-06-05'),
(350, 1, 1, 20, 200.00, '45 Min', '2024-06-13'),
(355, 1, 1, 15, 0.00, '', '2024-07-08'),
(357, 1, 1, 24, 0.00, '', '2024-07-11'),
(358, 1, 1, 36, 850.00, '45 Min', '2024-07-21'),
(359, 1, 1, 37, 780.00, '30 Min', '2024-07-21'),
(360, 1, 1, 16, 0.00, '', '2024-08-25'),
(361, 1, 1, 18, 0.00, '', '2024-08-25');

-- --------------------------------------------------------

--
-- Table structure for table `suggestion`
--

CREATE TABLE `suggestion` (
  `id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `vid` int(11) DEFAULT NULL,
  `topic_id` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `suggestion`
--

INSERT INTO `suggestion` (`id`, `message`, `vid`, `topic_id`, `createdAt`, `updatedAt`) VALUES
(2, 'Please select the ekhASKJDh', 1, 1, '2024-04-08 14:06:35', '2024-04-08 14:06:35'),
(3, 'Please select the ekhASKJDh', 1, 1, '2024-04-08 14:09:49', '2024-04-08 14:09:49'),
(4, 'asa', 1, 3, '2024-04-11 15:14:10', '2024-04-11 15:14:10'),
(5, 'kskfdsk', 1, 1, '2024-06-05 16:32:01', '2024-06-05 16:32:01'),
(6, 'kskfdsk', 1, 1, '2024-06-05 16:32:02', '2024-06-05 16:32:02'),
(7, 'kskfdsk', 1, 1, '2024-06-05 16:32:04', '2024-06-05 16:32:04'),
(8, 'kskfdsk', 1, 1, '2024-06-05 16:32:07', '2024-06-05 16:32:07'),
(9, 'kskfdsk', 1, 1, '2024-06-05 16:32:07', '2024-06-05 16:32:07'),
(10, 'kskfdsk', 1, 1, '2024-06-05 16:32:07', '2024-06-05 16:32:07'),
(11, 'kskfdsk', 1, 1, '2024-06-05 16:32:07', '2024-06-05 16:32:07'),
(12, 'kskfdsk', 1, 1, '2024-06-05 16:32:07', '2024-06-05 16:32:07'),
(13, 'kskfdsk', 1, 1, '2024-06-05 16:32:07', '2024-06-05 16:32:07'),
(14, 'tujha app chngla ahe mala ajun paise syache ahet', 1, 2, '2024-06-05 18:59:39', '2024-06-05 18:59:39'),
(15, 'tujha app chngla ahe mala ajun paise syache ahet', 1, 2, '2024-06-05 18:59:41', '2024-06-05 18:59:41');

-- --------------------------------------------------------

--
-- Table structure for table `suggestion_topics`
--

CREATE TABLE `suggestion_topics` (
  `id` int(11) NOT NULL,
  `topic` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `suggestion_topics`
--

INSERT INTO `suggestion_topics` (`id`, `topic`) VALUES
(1, 'Dashboard'),
(2, 'Subscription'),
(3, 'lead'),
(4, 'Profile'),
(5, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `terms_conditions`
--

CREATE TABLE `terms_conditions` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `terms_conditions`
--

INSERT INTO `terms_conditions` (`id`, `title`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'Hello this is titile', 'dont make model i just wa dont make model i just want to print message and title dont make model i just want to print message and titledon t make model i just wa dont make model i just want to print message and title dont make model i just want to print message and title', '2024-04-06 08:06:18', '2024-04-06 08:06:18'),
(2, 'Hello this is titile', 'dont make model i just wa dont make model i just want to print message and title dont make model i just want to print message and titledon t make model i just wa dont make model i just want to print message and title dont make model i just want to print message and title', '2024-04-06 08:06:18', '2024-04-06 08:06:18'),
(3, 'Hello this is titile', 'dont make model i just wa dont make model i just want to print message and title dont make model i just want to print message and titledon t make model i just wa dont make model i just want to print message and title dont make model i just want to print message and title', '2024-04-06 08:06:18', '2024-04-06 08:06:18'),
(4, 'Hello this is titile', 'dont make model i just wa dont make model i just want to print message and title dont make model i just want to print message and titledon t make model i just wa dont make model i just want to print message and title dont make model i just want to print message and title', '2024-04-06 08:06:18', '2024-04-06 08:06:18');

-- --------------------------------------------------------

--
-- Table structure for table `time`
--

CREATE TABLE `time` (
  `id` int(11) NOT NULL,
  `time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `time`
--

INSERT INTO `time` (`id`, `time`) VALUES
(1, '09:00:00'),
(2, '09:30:00'),
(3, '10:00:00'),
(4, '10:30:00'),
(5, '11:00:00'),
(6, '11:30:00'),
(7, '12:00:00'),
(8, '12:30:00'),
(9, '13:00:00'),
(10, '13:30:00'),
(11, '14:00:00'),
(12, '14:30:00'),
(13, '15:00:00'),
(14, '15:30:00'),
(15, '16:00:00'),
(16, '16:30:00'),
(17, '17:00:00'),
(18, '17:30:00'),
(19, '18:00:00'),
(20, '18:30:00'),
(21, '19:00:00'),
(22, '19:30:00'),
(27, '20:00:00'),
(28, '20:30:00'),
(30, '21:00:00'),
(31, '22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_choose_time`
--

CREATE TABLE `vendor_choose_time` (
  `id` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `time` time NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_choose_time`
--

INSERT INTO `vendor_choose_time` (`id`, `vid`, `time`, `timestamp`) VALUES
(12, 1, '19:30:00', '2024-04-18 05:24:01'),
(13, 1, '19:00:00', '2024-04-18 05:24:02'),
(14, 1, '21:00:00', '2024-04-18 05:24:02'),
(15, 1, '20:30:00', '2024-04-18 05:24:04'),
(16, 1, '20:00:00', '2024-04-18 05:24:04'),
(18, 1, '21:30:00', '2024-04-18 05:24:05'),
(23, 1, '09:00:00', '2024-06-12 20:05:08'),
(26, 1, '15:00:00', '2024-08-31 20:00:56');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_info`
--

CREATE TABLE `vendor_info` (
  `vid` int(11) NOT NULL,
  `url` varchar(222) NOT NULL,
  `homeService` int(11) DEFAULT NULL,
  `vendor_name` varchar(222) NOT NULL,
  `vbiz` varchar(222) NOT NULL,
  `email` text NOT NULL,
  `location` varchar(222) NOT NULL,
  `city` varchar(222) NOT NULL,
  `state` text NOT NULL,
  `address` varchar(222) NOT NULL,
  `pincode` int(222) NOT NULL,
  `category_id` int(222) NOT NULL,
  `whatsapp_number` text NOT NULL,
  `sec_cat_id` int(11) DEFAULT 0,
  `ter_cat_id` int(11) NOT NULL DEFAULT 0,
  `show_time_rate` int(11) NOT NULL DEFAULT 0,
  `vendor_logo` varchar(222) NOT NULL,
  `Package_start_date` date DEFAULT current_timestamp(),
  `Vendor_cover_image` varchar(222) NOT NULL,
  `phone` text NOT NULL,
  `package_duration` int(11) NOT NULL,
  `password` int(11) NOT NULL,
  `Package_end_date` date NOT NULL,
  `package_id` int(11) NOT NULL,
  `qr_code` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_info`
--

INSERT INTO `vendor_info` (`vid`, `url`, `homeService`, `vendor_name`, `vbiz`, `email`, `location`, `city`, `state`, `address`, `pincode`, `category_id`, `whatsapp_number`, `sec_cat_id`, `ter_cat_id`, `show_time_rate`, `vendor_logo`, `Package_start_date`, `Vendor_cover_image`, `phone`, `package_duration`, `password`, `Package_end_date`, `package_id`, `qr_code`, `timestamp`) VALUES
(1, 'http://192.168.111.178:3307/?vbiz=Gargi\'s Beauty Salon&vid=1', 1, 'Heelo', 'SYNC_Solutions', 'sync@gmail.com', 'Navale bridge', 'Pune', 'Maharashtra', '9th floor', 412805, 1, '7768860976', 19, 6, 1, '/uploads/logo/17251331315627image_logo.jpg', '2024-06-13', '/uploads/coverImage/17251336371461 + image.jpg', '7768860976', 1, 7896, '2025-09-05', 1, '', '2024-04-17 13:31:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `advertise`
--
ALTER TABLE `advertise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `features_accesses`
--
ALTER TABLE `features_accesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `help_support`
--
ALTER TABLE `help_support`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `holiday`
--
ALTER TABLE `holiday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_data`
--
ALTER TABLE `invoice_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lead`
--
ALTER TABLE `lead`
  ADD PRIMARY KEY (`lead_id`),
  ADD KEY `choosed_services` (`selectedServices`(768));

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `packages_details`
--
ALTER TABLE `packages_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `service_charges`
--
ALTER TABLE `service_charges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `venodor_id` (`vid`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `suggestion`
--
ALTER TABLE `suggestion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suggestion_topics`
--
ALTER TABLE `suggestion_topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terms_conditions`
--
ALTER TABLE `terms_conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendor_choose_time`
--
ALTER TABLE `vendor_choose_time`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor_id` (`vid`);

--
-- Indexes for table `vendor_info`
--
ALTER TABLE `vendor_info`
  ADD PRIMARY KEY (`vid`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `advertise`
--
ALTER TABLE `advertise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `features_accesses`
--
ALTER TABLE `features_accesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `help_support`
--
ALTER TABLE `help_support`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `holiday`
--
ALTER TABLE `holiday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT for table `invoice_data`
--
ALTER TABLE `invoice_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `lead`
--
ALTER TABLE `lead`
  MODIFY `lead_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `packages_details`
--
ALTER TABLE `packages_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `service_charges`
--
ALTER TABLE `service_charges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=362;

--
-- AUTO_INCREMENT for table `suggestion`
--
ALTER TABLE `suggestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `suggestion_topics`
--
ALTER TABLE `suggestion_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `terms_conditions`
--
ALTER TABLE `terms_conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `time`
--
ALTER TABLE `time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `vendor_choose_time`
--
ALTER TABLE `vendor_choose_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `vendor_info`
--
ALTER TABLE `vendor_info`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `service_charges`
--
ALTER TABLE `service_charges`
  ADD CONSTRAINT `service_charges_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vendor_info` (`vid`),
  ADD CONSTRAINT `service_charges_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `vendor_choose_time`
--
ALTER TABLE `vendor_choose_time`
  ADD CONSTRAINT `vendor_choose_time_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vendor_info` (`vid`);

--
-- Constraints for table `vendor_info`
--
ALTER TABLE `vendor_info`
  ADD CONSTRAINT `vendor_info_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
