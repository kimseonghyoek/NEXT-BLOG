import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 841px)'
  });

  return <>{isDesktop && children}</>
} 

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(max-width: 840px)'
  });

  return <>{isTablet && children}</>
}