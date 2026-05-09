import type React from 'react';

export const C = {
  primary: '#1A73E8',
  accent: '#22C55E',
  bg: '#F7F8FA',
  card: '#FFFFFF',
  success: '#34A853',
  error: '#EA4335',
  warning: '#FBBC04',
  textDark: '#1A1A2E',
  textGrey: '#6B7280',
  divider: '#E5E7EB',
} as const;

export const cardStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
};
