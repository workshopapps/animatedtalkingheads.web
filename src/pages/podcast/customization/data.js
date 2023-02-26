import avatar01 from './../../../assets/avatars/supported/01.png';
import avatar02 from './../../../assets/avatars/supported/02.png';
import avatar03 from './../../../assets/avatars/supported/03.png';
import avatar04 from './../../../assets/avatars/supported/04.png';
import avatar05 from './../../../assets/avatars/supported/05.png';
import avatar06 from './../../../assets/avatars/supported/06.png';

import bg01 from './../../../assets/avatars/bg-supported/01.png';
import bg02 from './../../../assets/avatars/bg-supported/02.png';
import bg03 from './../../../assets/avatars/bg-supported/03.png';
import bg04 from './../../../assets/avatars/bg-supported/04.png';
import bg05 from './../../../assets/avatars/bg-supported/05.png';
import bg06 from './../../../assets/avatars/bg-supported/06.png';
import bg07 from './../../../assets/avatars/bg-supported/07.png';
import bg08 from './../../../assets/avatars/bg-supported/08.png';
import bg09 from './../../../assets/avatars/bg-supported/09.png';
import bg10 from './../../../assets/avatars/bg-supported/10.png';
import bg11 from './../../../assets/avatars/bg-supported/11.png';
import bg12 from './../../../assets/avatars/bg-supported/12.png';
import bg13 from './../../../assets/avatars/bg-supported/13.png';
import bg14 from './../../../assets/avatars/bg-supported/14.png';
import bg15 from './../../../assets/avatars/bg-supported/15.png';

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
  { id: '02', image: bg02 },
  { id: '03', image: bg03 },
  { id: '04', image: bg04 },
  { id: '05', image: bg05 },
  { id: '06', image: bg06 },
  { id: '07', image: bg07 },
  { id: '08', image: bg08 },
  { id: '09', image: bg09 },
  { id: '10', image: bg10 },
  { id: '11', image: bg11 },
  { id: '12', image: bg12 },
  { id: '13', image: bg13 },
  { id: '14', image: bg14 },
  { id: '15', image: bg15 }
];
