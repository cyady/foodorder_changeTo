// data.js
import historyImage from '../assets/auto-img.png';
import investmentReportImage from '../assets/auto-img.png';
import achievementImage from '../assets/auto-img.png';
import donorsImage from '../assets/auto-img.png';

export const categories = [
  {
    name: 'history',
    img: historyImage,
    id: crypto.randomUUID()
  },
  {
    name: 'investment-reports',
    img: investmentReportImage,
    id: crypto.randomUUID()
  },
  {
    name: 'achievements',
    img: achievementImage,
    id: crypto.randomUUID()
  },
  {
    name: 'donors',
    img: donorsImage,
    id: crypto.randomUUID()
  },
];

