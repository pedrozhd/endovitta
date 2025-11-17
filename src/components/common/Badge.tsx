import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'low' | 'medium' | 'high' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'default' }) => {
  const variantClass = {
    low: 'badge badge-low',
    medium: 'badge badge-medium',
    high: 'badge badge-high',
    default: 'badge bg-blue-100 text-blue-800',
  }[variant];

  return <span className={variantClass}>{label}</span>;
};
