export const EVENTS = [
  {
    id: 1,
    title: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
    location: 'Maximum UNIQ Box',
    info: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir',
    image: '/images/img2.png',
    genre: 'TİYATRO',
    genreColor: '#b77cb8',
    date: 1694110500,
  },
  {
    id: 2,
    title: 'Yasemin Sakallıoğlu',
    location: 'Maximum UNIQ Hall',
    info: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir',
    image: '/images/img3.png',
    genre: 'STAND UP',
    genreColor: '#f19653',
    date: 1694196900,
  },
  {
    id: 3,
    title: 'Sinema Keyfi: Rifkin’s Festival',
    location: 'Maximum UNIQ Hall',
    info: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir',
    image: '/images/img1.jpeg',
    genre: 'SİNEMA',
    genreColor: '#f07266',
    date: 1694283300,
  },
  {
    id: 4,
    title: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
    location: 'Maximum UNIQ Açıkhava',
    info: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir',
    image: '/images/img2.png',
    genre: 'KONSER',
    genreColor: '#9fae5d',
    date: 1694369700,
  },
  {
    id: 5,
    title: 'Yasemin Sakallıoğlu',
    location: 'Maximum UNIQ Lounge',
    info: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir',
    image: '/images/img3.png',
    genre: 'STAND UP',
    genreColor: '#f19653',
    date: 1682964900,
  },
  {
    id: 6,
    title: 'Sinema Keyfi: Rifkin’s Festival',
    location: 'Bahçe Fuaye',
    info: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir',
    image: '/images/img4.png',
    genre: 'SİNEMA',
    genreColor: '#f07266',
    date: 1683051300,
  },
]

export const LOCATION = {
  title: 'Etkinlik Mekanı',
  places: [
    { id: 10, place: 'Maximum UNIQ Hall', checked: false },
    { id: 11, place: 'Maximum UNIQ Box', checked: false },
    { id: 8, place: 'Maximum UNIQ Lounge', checked: false },
    { id: 9, place: 'Maximum UNIQ Açıkhava', checked: false },
    { id: 7, place: 'Bahçe Fuaye', checked: false },
  ],
}

export const DATES = {
  title: 'Etkinlik Tarihi',
  items: [
    { id: 12, date: 'Güncel Etkinlikler', short: 'future', checked: false },
    { id: 13, date: 'Geçmiş Etkinlikler', short: 'past', checked: false },
  ],
}
