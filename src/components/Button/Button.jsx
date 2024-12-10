import React from 'react';

export const Button = ({ label, onClick }) => {
  return <button className="btn-view-more" onClick={onClick}>{label}</button>;
};