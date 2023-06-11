-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Jun 2023 pada 14.54
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kost_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kost`
--

CREATE TABLE `kost` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kost`
--

INSERT INTO `kost` (`id`, `uuid`, `name`, `price`, `userId`, `createdAt`, `updatedAt`) VALUES
(2, '8f3b5ade-9057-4ed6-85fb-e7b90187c803', 'kost pink', 200, 3, '2023-04-19 00:30:09', '2023-04-19 00:30:09'),
(3, '2ab3a2d9-ab4b-488e-9596-7e10eea97b20', 'kost biru', 500000, 3, '2023-04-19 00:30:16', '2023-06-07 12:49:32'),
(4, '88d5871d-3e4e-4382-bb9b-d2c28bd553cf', 'kost admin', 400, 1, '2023-04-19 00:32:42', '2023-04-19 00:32:42'),
(8, '31074069-6cd0-42eb-8411-349eb2d014d9', 'kost ungu up', 3000, 1, '2023-06-07 14:54:15', '2023-06-07 14:54:20'),
(9, '922dbccb-8805-44d6-8d02-921bc32637f8', 'kos lala mantap', 20000, 9, '2023-06-07 14:54:55', '2023-06-07 14:55:07'),
(10, '5dc171ef-091f-41df-8d07-9779baee6295', 'kost ajo', 12000, 3, '2023-06-07 14:55:54', '2023-06-07 14:55:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('02BnhtWQWAX9q7KXnxYA9bEeqVeDZsd3', '2023-06-08 13:06:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:06:43', '2023-06-07 13:06:43'),
('0bhhZxlZGxfJ1rzRyqTbit1gCCI3qc_1', '2023-06-08 13:50:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"c4ea3b5a-3472-4d08-b086-5a1277798171\"}', '2023-06-07 13:44:58', '2023-06-07 13:50:43'),
('0Hsb57AiJRQ6epmKzruYdIgnGwnMfxjR', '2023-06-08 14:46:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:46:31', '2023-06-07 14:46:31'),
('1YNWfdTTMOQTyAZYw8d0bepIQnSN-Rl4', '2023-06-08 14:54:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:54:28', '2023-06-07 14:54:28'),
('29EE3tCBa4hr7nCZX8CRK6kwmgqPk4kW', '2023-06-08 13:07:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:07:22', '2023-06-07 13:07:22'),
('4XQ6swu7R2OmmZmLLX9y4bHjFTISGyS2', '2023-06-08 14:56:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:56:00', '2023-06-07 14:56:00'),
('6IrhAoArca7WFR-JcalSUD7q6ELcYokR', '2023-06-08 07:57:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 07:57:25', '2023-06-07 07:57:25'),
('7k3rPrF2gS8GeS_AyYwFNZ4Xld41fiAc', '2023-06-07 16:30:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:30:30', '2023-06-06 16:30:30'),
('8x2yR6D4fOsv92FHXHHjuudO4dvUMNCH', '2023-06-08 13:03:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:03:23', '2023-06-07 13:03:23'),
('95tHIgY2IRepe3nSWfjlYbgsjXhkPimR', '2023-06-07 16:31:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:31:16', '2023-06-06 16:31:16'),
('9yq0fxlYe1oTc3NR0Q8QyO_Bz1VxzeVN', '2023-06-08 12:48:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 12:48:55', '2023-06-07 12:48:55'),
('a6BjeCD8S7KEd1FR7gXxdNmYe6ULfpPq', '2023-06-08 14:54:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:54:36', '2023-06-07 14:54:36'),
('a8RWTjRuxHzja-jzFXDv3kdb0TQAQKAo', '2023-06-08 14:53:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:53:26', '2023-06-07 14:53:26'),
('aNuySCVx4QgvkgZZSTXF6f6OGoaKMPdE', '2023-06-08 08:15:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:15:28', '2023-06-07 08:15:28'),
('b1-lIcUEwS8TXxKBoSJIoG0ZcgZ14JFL', '2023-06-08 14:56:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:56:02', '2023-06-07 14:56:02'),
('bLD0LfGF1-T5R4bUNiUVj7abjVzTXa8D', '2023-06-08 14:48:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:48:41', '2023-06-07 14:48:41'),
('bOcEOmYvsH3NOv-MEMLXC8mEo9ZOxp7I', '2023-06-08 08:26:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:26:48', '2023-06-07 08:26:48'),
('cKktgCgoI3jtd9yYc7jRnNA_uQVeIF6z', '2023-06-08 08:20:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:20:14', '2023-06-07 08:20:14'),
('cMxhViNoREQEHLbX25i_N75dFg9xk6Fp', '2023-06-08 08:41:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:41:40', '2023-06-07 08:41:40'),
('cq01e7Q0-vHpEMxZTouMBLHM9nkSyydc', '2023-06-08 08:31:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:31:16', '2023-06-07 08:31:16'),
('d9urk74YhsqG65cu-3RGJg8iplXe3CMe', '2023-06-08 14:47:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:47:22', '2023-06-07 14:47:22'),
('Dt1tTt4nPv785dVil7VyoQt6Mrg8TJQv', '2023-06-08 08:20:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:20:21', '2023-06-07 08:20:21'),
('ETfxJ6qDM2UQo_HHMAJ1aTy9GXsLQ_6h', '2023-06-08 13:05:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:05:01', '2023-06-07 13:05:01'),
('f8KqWNUgJWONZCCNPmYz0ZtooPhdYh5m', '2023-06-08 14:55:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:55:34', '2023-06-07 14:55:34'),
('fL8R-RC6VI3hHWKef2o8C3rpRKK_kpdN', '2023-06-08 14:51:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:51:26', '2023-06-07 14:51:26'),
('gAksOgpXLJSgfnH0fBea3kFTwo5I-JMH', '2023-06-08 08:22:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:22:39', '2023-06-07 08:22:39'),
('GGqd3tHhhXEmPTWc68F3s-hmPqa7Y19b', '2023-06-08 14:54:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:54:55', '2023-06-07 14:54:55'),
('Gxplx130esA_cbBuHwLQlYxJlpqvrYeM', '2023-06-08 14:55:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:55:07', '2023-06-07 14:55:07'),
('hHp1IYBPg8SoP7T62BgMWAVGSjWETZ06', '2023-06-08 14:40:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:40:41', '2023-06-07 14:40:41'),
('hX2vl5gGOBWb7qMRSv_JU3YPD_yUX06A', '2023-06-08 06:53:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 06:53:17', '2023-06-07 06:53:17'),
('I8CNaZdAdgiyoAaXW3k9e07LIxGfCsxX', '2023-06-08 13:38:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:38:25', '2023-06-07 13:38:25'),
('iZ0QixHez9hbbcMWn1R2Kbl4WShBUdYP', '2023-06-08 13:05:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:05:17', '2023-06-07 13:05:17'),
('j4GMxczR5lsBJjY3bdq_zE8N4olhii9Y', '2023-06-08 14:41:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:41:35', '2023-06-07 14:41:35'),
('jFVQhoc0OYa756WKFn6yz3Yvd6_-Y24J', '2023-06-07 16:30:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:30:47', '2023-06-06 16:30:47'),
('jxn-HIqWTlXg-uCxbQHdZ_SiA4926lPy', '2023-06-08 14:47:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:47:28', '2023-06-07 14:47:28'),
('jZL8iYQ99sdJk8sctmUDjg9nEdMQo43Z', '2023-06-08 08:20:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:20:33', '2023-06-07 08:20:33'),
('l2Xugp4P5J8z5OhGr0hM9970xP958yxT', '2023-06-08 14:53:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:53:39', '2023-06-07 14:53:39'),
('LGdalwEWXI1TUADnpYBth6md8uKPCqi0', '2023-06-08 08:53:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"c4ea3b5a-3472-4d08-b086-5a1277798171\"}', '2023-06-07 06:53:17', '2023-06-07 08:53:33'),
('ljKflwe8gqdsq4Dcf4-qOAZ5a1MEApHG', '2023-06-08 12:49:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 12:49:03', '2023-06-07 12:49:03'),
('Mu56Ce0QGN54-uKEGnxQk1AQ6DE9jI6n', '2023-06-08 14:55:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:55:54', '2023-06-07 14:55:54'),
('mvvmQ7vl1oaUe99q4Yj1-62kx_cqXR1l', '2023-06-08 14:55:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:55:15', '2023-06-07 14:55:15'),
('n1iGMsMZQeaGAR0o6xGmoPoOHIMPToQJ', '2023-06-08 14:54:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:54:15', '2023-06-07 14:54:15'),
('nP03_rnAml8ywpxxovCjKmPi1VcToKzm', '2023-06-08 13:33:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:33:17', '2023-06-07 13:33:17'),
('nUXQ7KRKa9D0RvrrrBvr11repJEdLWiT', '2023-06-08 13:53:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:53:37', '2023-06-07 13:53:37'),
('O1Hx43YF1cMOA42eVbawXGBYUaIun6XD', '2023-06-08 06:53:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 06:53:29', '2023-06-07 06:53:29'),
('OAQsaIbA9okx-9XJ0Z0T26EPhkNvdXUB', '2023-06-07 16:57:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:57:08', '2023-06-06 16:57:08'),
('OdkIhkscb8QbIjJHq-t3LldZYQxEVuXB', '2023-06-08 14:54:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:54:20', '2023-06-07 14:54:20'),
('PFomXIlBhm3b4WZuXj87RDI0WOtwwGMZ', '2023-06-07 16:35:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:35:16', '2023-06-06 16:35:16'),
('pIibT8pIQy1uXZjMCVC42T_mVxxBvO00', '2023-06-08 14:18:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:18:11', '2023-06-07 14:18:11'),
('poc2l0yiJUC5NeURoA5-Fp52jo-p32Xz', '2023-06-08 08:22:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:22:45', '2023-06-07 08:22:45'),
('POcfsqE-yXKum49StzV7lyqvQD40oYS0', '2023-06-08 12:49:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 12:49:19', '2023-06-07 12:49:19'),
('ps7Ctf2UasToGKIgbv65fCs3ZsQQRrSl', '2023-06-08 14:51:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:51:20', '2023-06-07 14:51:20'),
('Q3js7qIw358MlrQXC_8w3alJ1yxsoIQo', '2023-06-08 12:49:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 12:49:32', '2023-06-07 12:49:32'),
('QJvNCTGq_-yX5oWBWgKxavatnuLIoufo', '2023-06-08 14:05:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:05:04', '2023-06-07 14:05:04'),
('quque85NETTfgBUpkQctF1lLKYRIRGKR', '2023-06-08 14:55:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:55:14', '2023-06-07 14:55:14'),
('QxAX98HVMtGEHXiXty8_3m9vDBXKlrnc', '2023-06-08 14:17:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:17:59', '2023-06-07 14:17:59'),
('R-_4QAj5WVeyEl6RlgQZuJmaoNQ6nMkG', '2023-06-08 14:49:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:49:11', '2023-06-07 14:49:11'),
('S50MhyaD2NAoiFAiJnieyU2_gMqHZIc9', '2023-06-08 14:53:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:53:23', '2023-06-07 14:53:23'),
('SDDg4-QYcEp5GrP4Pic-OhAI_JqMKtZg', '2023-06-08 08:45:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:45:47', '2023-06-07 08:45:47'),
('SFjz_8PraxW3exU5jHG7pyxwt7IttGmk', '2023-06-08 14:35:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:35:08', '2023-06-07 14:35:08'),
('SnRr9KVfi3jMDuYzqtpny0IK0GaO-v0R', '2023-06-08 13:33:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:33:28', '2023-06-07 13:33:28'),
('SvDzm-fyupHMi7bvNAYXcKhlHTZqJMSX', '2023-06-08 14:53:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:53:45', '2023-06-07 14:53:45'),
('sZRWDAaNm7Fi2uuHv5glGT8bmtQH2Mor', '2023-06-07 16:31:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:31:27', '2023-06-06 16:31:27'),
('td05FCwAQGvLpXVjl1K8IfjlciwfaavS', '2023-06-08 08:38:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:38:08', '2023-06-07 08:38:08'),
('TLVmdfIw76Ue0Q-7h0UZEMHfhck_HcHB', '2023-06-08 08:53:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:53:27', '2023-06-07 08:53:27'),
('tsERouVdDd9JZaRt_DMvkK9mH3TTtZxp', '2023-06-08 14:48:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:48:33', '2023-06-07 14:48:33'),
('tsLhAm070tebgDpGal4G6EXFqkf686qZ', '2023-06-08 14:47:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:47:16', '2023-06-07 14:47:16'),
('TXh4rkDv4D0hflZsBqo5idNZQBG7q6MU', '2023-06-08 13:56:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:56:31', '2023-06-07 13:56:31'),
('UIpqAZzfsqYMNdBKY-BwWE1lNBAnCYqO', '2023-06-08 14:41:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:41:45', '2023-06-07 14:41:45'),
('uOPAJ7UsluqrUXlKrEbUre9ekXt6nE41', '2023-06-08 08:53:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:53:33', '2023-06-07 08:53:33'),
('uXNLC7cQ_6yKoaYmgfbk4oKGOHolgw4d', '2023-06-08 13:01:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:01:42', '2023-06-07 13:01:42'),
('v72MZwSQxIdnUE88Mi83foaIvwMdJ8Om', '2023-06-08 14:34:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:34:26', '2023-06-07 14:34:26'),
('vGDknSUixt5ngg_pErgsI63PpkgLVdfO', '2023-06-08 14:46:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:46:41', '2023-06-07 14:46:41'),
('vXftjZ60noFqCmPhhlEDqACJTJBB26cc', '2023-06-08 08:37:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:37:57', '2023-06-07 08:37:57'),
('wDH1LQFSwS6pbiWvyUlEMjNZLQ1Mx7kn', '2023-06-08 14:34:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:34:08', '2023-06-07 14:34:08'),
('WjEj6DRTPkyUbGuslrhdfAyDqRk_QShI', '2023-06-08 13:03:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:03:36', '2023-06-07 13:03:36'),
('wooKdAc76akntDXOT_yZoHsebSCJOrHV', '2023-06-08 13:02:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:02:56', '2023-06-07 13:02:56'),
('woPGFV8yaAQRHq6Fyhwj1S0lBeGpzGF5', '2023-06-08 07:58:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 07:58:54', '2023-06-07 07:58:54'),
('w_WmEl27oO1M1MD8djCkAVNVJudCKC3i', '2023-06-08 13:02:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:02:42', '2023-06-07 13:02:42'),
('X1iG7qmWzaDMprTPyfV2VZobTuTeRf6I', '2023-06-07 16:35:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:35:04', '2023-06-06 16:35:04'),
('X5Uy3VF6iaGJeo_Yj7eO1wrFM6zSgkSn', '2023-06-08 13:02:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:02:50', '2023-06-07 13:02:50'),
('xch9QRKIkvoNBQk3GMBdd8LzHDRHiGPB', '2023-06-08 08:49:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 08:49:37', '2023-06-07 08:49:37'),
('XKB8fw7NM_uhUFBlnJdl1QBoFxEMvqLL', '2023-06-08 14:59:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"c4ea3b5a-3472-4d08-b086-5a1277798171\"}', '2023-06-07 14:56:02', '2023-06-07 14:59:50'),
('xr_bRRer7qp6BnzIjl8LnK4w71rrtQGV', '2023-06-08 14:53:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:53:22', '2023-06-07 14:53:22'),
('yLVXIKtnrx66Ne7N6kv7CCYK4t_Kvi0O', '2023-06-08 13:05:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 13:05:58', '2023-06-07 13:05:58'),
('yrM7g-huKqKuJtskZd34S6sqUxXI9cKp', '2023-06-07 16:31:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:31:32', '2023-06-06 16:31:32'),
('Z3sgM31vr_8g30texJYTKe5r9NeLx6_X', '2023-06-08 14:39:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:39:16', '2023-06-07 14:39:16'),
('_bAKMJB_lwvqYe947bc1Yx4tL7yqrmQE', '2023-06-07 16:30:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-06 16:30:20', '2023-06-06 16:30:20'),
('_NROXAWltKI8vh4cs7wXUR_P5D47TrLx', '2023-06-08 14:56:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:56:13', '2023-06-07 14:56:13'),
('__k00l5qqMwAhu_HOFFi-Gma_ATRQ3NY', '2023-06-08 14:54:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-06-07 14:54:26', '2023-06-07 14:54:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'c4ea3b5a-3472-4d08-b086-5a1277798171', 'Levi', 'levi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$sQvFWkc7oO6URKw0A1lVDQ$tDiKuTKlfpZXrihsbgsMHdXsAMMS+ng08f5p6aJQu5Q', 'admin', '2023-04-17 06:34:09', '2023-04-17 06:34:09'),
(3, 'd7b5d6c2-64ba-4314-9fe5-bc3a9eb28873', 'Ajo', 'ajo@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$P8J+aNuji8Cmvz02C0m8Ng$ZxS2PPaYF6eFiI/FwbkPTUtcquQ8EFGwvAbdFAveZw0', 'user', '2023-04-17 06:53:14', '2023-04-17 06:53:14'),
(9, '96cad46f-ba00-4208-91b3-cb5ae85c0bfc', 'lala up', 'lala@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$+NCyveovMpfACauGD7d1ig$bPZUhfo0vEc0qLYU5GbyHEDhiql5YlHE7YUk3mhpiRE', 'user', '2023-06-07 14:53:39', '2023-06-07 14:53:45');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kost`
--
ALTER TABLE `kost`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kost`
--
ALTER TABLE `kost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `kost`
--
ALTER TABLE `kost`
  ADD CONSTRAINT `kost_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
