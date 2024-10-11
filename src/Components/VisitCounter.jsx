

import React from 'react';

const UserBadge = () => {
  const badgeUrl = 'https:hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.bitxcoin.works&count_bg=%233B82F6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Total+Users&edge_flat=false';

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <img src={badgeUrl} alt="Total Users Badge" className="w-64 h-auto" />
      </div>
    </div>
  );
};

export default UserBadge;

