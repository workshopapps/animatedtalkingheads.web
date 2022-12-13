import avatar01 from './../../../assets/avatars/supported/01.png';
import avatar02 from './../../../assets/avatars/supported/02.png';
import avatar03 from './../../../assets/avatars/supported/03.png';
import avatar04 from './../../../assets/avatars/supported/04.png';
import avatar05 from './../../../assets/avatars/supported/05.png';
import avatar06 from './../../../assets/avatars/supported/06.png';

import bg01 from './../../../assets/avatars/bg-supported/01.png';
import bg02 from './../../../assets/avatars/bg-supported/02.png';

export const formatId = (id, position) => {
  let result = Number(id) + position;

  if (result < 10) result = '0' + result;

  return String(result);
};

export const avatars = [
  { id: '01', image: avatar01 },
  { id: '04', image: avatar02 },
  { id: '07', image: avatar03 },
  { id: '10', image: avatar04 },
  { id: '13', image: avatar05 },
  { id: '16', image: avatar06 }
];

export const scenes = [
  { id: '01', image: bg01 },
  { id: '02', image: bg02 }
];
