import React from 'react';

export interface BookingFormData {
  fullName: string;
  phone: string;
  days: number;
  guests: number;
}

export interface Feature {
  id: number;
  icon: React.ReactNode;
  titleAr: string;
  titleEn: string;
}