import React from 'react';

export const portalPageSettings = {
    menuIcon: 'dashboard',
    menuLabel: 'Dashboard',
    uniqueId: 'dashboard',
    roles: ['admin', 'manager'],
    order: 1
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Custom Dashboard</h1>
      <p>This is a custom portal page!</p>
    </div>
  );
};

export default Dashboard;
