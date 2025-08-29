import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

// --- Bundled from constants.ts ---
const leaveData = [
  { name: 'MUHİTTİN', date: '2025-03-20', type: 'Serbest Zaman Günlük' },
  { name: 'MUHİTTİN', date: '2025-04-02', type: 'Serbest Zaman Günlük' },
  { name: 'MUHİTTİN', date: '2025-04-03', type: 'Serbest Zaman Günlük' },
  { name: 'MUHİTTİN', date: '2025-04-04', type: 'Serbest Zaman Günlük' },
  { name: 'MUHİTTİN', date: '2025-04-05', type: 'Serbest Zaman Günlük' },
  { name: 'MUHİTTİN', date: '2025-04-06', type: 'Serbest Zaman Günlük' },
  { name: 'MUHİTTİN', date: '2025-07-28', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-07-29', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-07-30', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-07-31', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-08-01', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-08-02', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-08-03', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MUHİTTİN', date: '2025-08-28', type: 'Doğum Günü İzni' },
  { name: 'RUŞEN', date: '2025-04-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-04-24', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-04-25', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-04-26', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-04-27', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-05-02', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-05-03', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-05-04', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-06-10', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-06-11', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-06-12', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-06-13', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-06-14', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-06-15', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-07-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-07-08', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-07-09', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'RUŞEN', date: '2025-08-25', type: 'Doğum Günü İzni' },
  { name: 'NUR', date: '2025-02-03', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-04', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-05', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-06', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-08', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-09', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-17', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-02-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-03-24', type: 'Doğum Günü İzni' },
  { name: 'NUR', date: '2025-06-19', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-06-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-06-21', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-06-22', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-08', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-09', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-10', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-11', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-12', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'NUR', date: '2025-07-13', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-02-03', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-02-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-03-06', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-03-17', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-03-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-04-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-04-21', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-04-22', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-04-23', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-04', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-05', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-06', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-08', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-09', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-10', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'MELİH', date: '2025-08-29', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-01-31', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-02-01', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-02-02', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-03-14', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-03-15', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-03-16', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-03-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-02', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-03', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-04', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-05', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-06', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-07', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-08', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-09', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-06-10', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-14', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-15', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-16', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-17', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-19', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'HALİT', date: '2025-07-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-01-20', type: 'Doğum Günü İzni' },
  { name: 'DURSUN', date: '2025-03-20', type: 'Serbest Zaman Günlük' },
  { name: 'DURSUN', date: '2025-03-26', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-03-27', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-03-28', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-03-29', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-03-30', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-03-31', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-04-01', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-19', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-21', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-22', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-23', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-24', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-25', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-26', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-27', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-28', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'DURSUN', date: '2025-08-29', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-01-13', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-01-14', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-05-05', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-12', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-13', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-14', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-15', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-16', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-17', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-19', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-21', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-06-22', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-21', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-22', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-23', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-24', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-25', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-26', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-27', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-28', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-29', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-30', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'BURAK', date: '2025-07-31', type: 'Serbest Zaman Günlük' },
  { name: 'BURAK', date: '2025-08-01', type: 'Serbest Zaman Günlük' },
  { name: 'BURAK', date: '2025-08-02', type: 'Serbest Zaman Günlük' },
  { name: 'BURAK', date: '2025-08-03', type: 'Serbest Zaman Günlük' },
  { name: 'ALİ', date: '2025-02-26', type: 'Doğum Günü İzni' },
  { name: 'ALİ', date: '2025-04-04', type: 'Serbest Zaman Günlük' },
  { name: 'ALİ', date: '2025-04-05', type: 'Serbest Zaman Günlük' },
  { name: 'ALİ', date: '2025-04-06', type: 'Serbest Zaman Günlük' },
  { name: 'ALİ', date: '2025-06-30', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-14', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-15', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-16', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-17', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-19', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'ALİ', date: '2025-07-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-02-10', type: 'Doğum Günü İzni' },
  { name: 'YUNUS', date: '2025-05-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-05-21', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-05-22', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-05-23', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-05-24', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-05-25', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-07-16', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-07-17', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-07-18', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-07-19', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
  { name: 'YUNUS', date: '2025-07-20', type: '2010 ve Sonrası Mahsubu Yıllık İzin' },
];
const publicHolidays = [
    { date: '2025-01-01', name: 'Yılbaşı' },
    { date: '2025-03-29', name: 'Ramazan Bayramı Arifesi' },
    { date: '2025-03-30', name: 'Ramazan Bayramı 1. Gün' },
    { date: '2025-03-31', name: 'Ramazan Bayramı 2. Gün' },
    { date: '2025-04-01', name: 'Ramazan Bayramı 3. Gün' },
    { date: '2025-04-23', name: 'Ulusal Egemenlik ve Çocuk Bayramı' },
    { date: '2025-05-01', name: 'Emek ve Dayanışma Günü' },
    { date: '2025-05-19', name: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı' },
    { date: '2025-06-05', name: 'Kurban Bayramı Arifesi' },
    { date: '2025-06-06', name: 'Kurban Bayramı 1. Gün' },
    { date: '2025-06-07', name: 'Kurban Bayramı 2. Gün' },
    { date: '2025-06-08', name: 'Kurban Bayramı 3. Gün' },
    { date: '2025-06-09', name: 'Kurban Bayramı 4. Gün' },
    { date: '2025-07-15', name: 'Demokrasi ve Milli Birlik Günü' },
    { date: '2025-08-30', name: 'Zafer Bayramı' },
    { date: '2025-10-29', name: 'Cumhuriyet Bayramı' },
];

// --- Bundled from components/CalendarDay.tsx ---
const nameColors = {
    'MUHİTTİN': 'bg-red-500',
    'RUŞEN': 'bg-blue-500',
    'NUR': 'bg-green-500',
    'MELİH': 'bg-yellow-500',
    'HALİT': 'bg-indigo-500',
    'DURSUN': 'bg-purple-500',
    'BURAK': 'bg-pink-500',
    'ALİ': 'bg-teal-500',
    'YUNUS': 'bg-orange-500',
};
const CalendarDay = ({ date, isCurrentMonth, isToday, leaves, holiday }) => {
    const dayOfMonth = date.getDate();
    const hasLeaves = leaves.length > 0;
    const dayClasses = [
        'relative p-2 h-32 flex flex-col bg-white overflow-hidden',
        isCurrentMonth ? 'text-gray-800' : 'text-gray-400 bg-gray-50',
        isToday ? 'bg-blue-50 border-2 border-blue-400' : '',
        holiday ? 'bg-red-50' : '',
        hasLeaves && !holiday ? 'bg-blue-50' : '',
    ].join(' ');
    const dateNumberClasses = [
        'text-sm font-semibold',
        isToday ? 'w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white' : '',
        holiday ? 'text-red-600' : ''
    ].join(' ');
    return React.createElement(
        'div', { className: dayClasses },
        React.createElement(
            'div', { className: 'flex justify-between items-center' },
            React.createElement('time', { dateTime: date.toISOString(), className: dateNumberClasses }, dayOfMonth),
            holiday && React.createElement('div', { className: 'hidden sm:block text-xs font-bold text-red-700 truncate', title: holiday.name }, holiday.name)
        ),
        React.createElement(
            'div', { className: 'mt-1 flex-grow overflow-y-auto text-xs space-y-1 pr-1' },
            leaves.map((leave, index) =>
                React.createElement(
                    'div', { key: index, className: 'flex items-center group cursor-pointer' },
                    React.createElement('span', { className: `w-2 h-2 rounded-full mr-2 flex-shrink-0 ${nameColors[leave.name] || 'bg-gray-400'}` }),
                    React.createElement('span', { className: 'truncate', title: `${leave.name} - ${leave.type}` }, leave.name)
                )
            )
        )
    );
};

// --- Bundled from components/Calendar.tsx ---
const CalendarHeader = ({ currentDate, onSetToday, onPrevMonth, onNextMonth }) => {
    const monthName = currentDate.toLocaleString('tr-TR', { month: 'long' });
    const year = currentDate.getFullYear();
    return React.createElement(
        'div', { className: 'flex items-center justify-between mb-4' },
        React.createElement('h2', { className: 'text-2xl font-semibold text-gray-700' }, `${monthName} ${year}`),
        React.createElement(
            'div', { className: 'flex items-center space-x-2' },
            React.createElement('button', { onClick: onSetToday, className: 'px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' }, 'Bugün'),
            React.createElement(
                'button', { onClick: onPrevMonth, className: 'p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' },
                React.createElement('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M15 19l-7-7 7-7' })
                )
            ),
            React.createElement(
                'button', { onClick: onNextMonth, className: 'p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' },
                React.createElement('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 5l7 7-7 7' })
                )
            )
        )
    );
};
const Calendar = ({ currentDate, onSetToday, onPrevMonth, onNextMonth }) => {
    const leavesByDate = useMemo(() => {
        const map = new Map();
        leaveData.forEach(leave => {
            const date = leave.date;
            if (!map.has(date)) {
                map.set(date, []);
            }
            map.get(date).push(leave);
        });
        return map;
    }, []);
    const holidaysByDate = useMemo(() => {
        const map = new Map();
        publicHolidays.forEach(holiday => {
            map.set(holiday.date, holiday);
        });
        return map;
    }, []);
    const days = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = [];
        const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
        const endDayOfWeek = (lastDayOfMonth.getDay() + 6) % 7;
        for (let i = startDayOfWeek; i > 0; i--) {
            const date = new Date(year, month, 1 - i);
            daysInMonth.push({ date, isCurrentMonth: false });
        }
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const date = new Date(year, month, i);
            daysInMonth.push({ date, isCurrentMonth: true });
        }
        for (let i = 1; i < 7 - endDayOfWeek; i++) {
            const date = new Date(year, month + 1, i);
            daysInMonth.push({ date, isCurrentMonth: false });
        }
        return daysInMonth;
    }, [currentDate]);
    const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return React.createElement(
        'div', { className: 'bg-white p-6 rounded-lg shadow-lg' },
        React.createElement(CalendarHeader, { currentDate, onSetToday, onPrevMonth, onNextMonth }),
        React.createElement(
            'div', { className: 'grid grid-cols-7 gap-px' },
            weekDays.map(day => React.createElement('div', { key: day, className: 'text-center font-semibold text-sm text-gray-500 py-2' }, day))
        ),
        React.createElement(
            'div', { className: 'grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden' },
            days.map(({ date, isCurrentMonth }, index) => {
                const dateString = date.toISOString().split('T')[0];
                return React.createElement(CalendarDay, {
                    key: index,
                    date: date,
                    isCurrentMonth: isCurrentMonth,
                    isToday: date.getTime() === today.getTime(),
                    leaves: leavesByDate.get(dateString) || [],
                    holiday: holidaysByDate.get(dateString)
                });
            })
        ),
        React.createElement(
            'div', { className: 'mt-6 flex flex-wrap gap-4 items-center' },
            React.createElement(
                'div', { className: 'flex items-center' },
                React.createElement('div', { className: 'w-4 h-4 bg-red-100 border border-red-300 rounded-sm mr-2' }),
                React.createElement('span', { className: 'text-sm text-gray-600' }, 'Resmi Tatil')
            ),
            React.createElement(
                'div', { className: 'flex items-center' },
                React.createElement('div', { className: 'w-4 h-4 bg-blue-100 border border-blue-300 rounded-sm mr-2' }),
                React.createElement('span', { className: 'text-sm text-gray-600' }, 'İzinli Personel')
            )
        )
    );
};

// --- Bundled from App.tsx ---
const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2025-01-01'));
  const handleSetToday = () => {
    setCurrentDate(new Date('2025-01-01'));
  };
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  return React.createElement(
      'div', { className: 'min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-6 lg:p-8' },
      React.createElement(
          'div', { className: 'max-w-7xl mx-auto' },
          React.createElement(
              'header', { className: 'text-center mb-8' },
              React.createElement('h1', { className: 'text-4xl font-bold text-indigo-600' }, 'Personel İzin Takvimi 2025'),
              React.createElement('p', { className: 'text-lg text-gray-500 mt-2' }, 'İzinleri ve resmi tatilleri görüntüleyin.')
          ),
          React.createElement(
              'main', null,
              React.createElement(Calendar, {
                  currentDate: currentDate,
                  onSetToday: handleSetToday,
                  onPrevMonth: handlePrevMonth,
                  onNextMonth: handleNextMonth
              })
          ),
          React.createElement(
              'footer', { className: 'text-center mt-12 text-gray-400' },
              React.createElement('p', null, ' savsek.com.tr için oluşturulmuştur.')
          )
      )
  );
};

// --- Original index.tsx ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(React.StrictMode, null, 
    React.createElement(App, null)
  )
);
