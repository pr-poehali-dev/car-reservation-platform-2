import { Car, User, Reservation, Review } from '@/types';

// Пользователи
export const users: User[] = [
  {
    id: 1,
    name: 'Александр Иванов',
    email: 'alex@example.com',
    phone: '+7 (999) 123-45-67',
    password: 'password123', // В реальном приложении пароли должны быть хешированы
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop',
    role: 'client',
    createdAt: '2023-01-15T10:30:00Z'
  },
  {
    id: 2,
    name: 'Мария Петрова',
    email: 'maria@example.com',
    phone: '+7 (999) 987-65-43',
    password: 'securepass',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop',
    role: 'client',
    createdAt: '2023-02-20T14:15:00Z'
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    email: 'dmitry@example.com',
    phone: '+7 (999) 456-78-90',
    password: 'adminpass',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187&auto=format&fit=crop',
    role: 'admin',
    createdAt: '2022-12-10T09:00:00Z'
  }
];

// Автомобили
export const cars: Car[] = [
  // Porsche - 5 автомобилей
  {
    id: 1,
    name: 'Porsche 911 Carrera',
    category: 'porsche',
    price: 25000,
    priceUnit: 'день',
    year: 2023,
    description: 'Культовый спортивный автомобиль Porsche 911 Carrera с непревзойденной динамикой и управляемостью.',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f371e?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/porsche-911-carrera-4s-88737673097c49c6a01e00dd6d4a3794',
    color: 'Красный',
    transmission: 'Автомат',
    engine: '3.0L Twin-Turbo Flat-6, 385 л.с.',
    consumption: '9.0 л/100 км',
    features: ['Спортивный выхлоп', 'Адаптивная подвеска', 'Кожаный салон'],
    available: true
  },
  {
    id: 2,
    name: 'Porsche Taycan Turbo S',
    category: 'porsche',
    price: 30000,
    priceUnit: 'день',
    year: 2023,
    description: 'Электрический спорткар Porsche с ошеломляющей производительностью и запасом хода.',
    image: 'https://images.unsplash.com/photo-1619525515567-a72ef1258eb2?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/porsche-taycan-turbo-s-2020-10a23f9c5e1c422e9acb30239ed6d71c',
    color: 'Белый',
    transmission: 'Автомат',
    engine: 'Электрический, 761 л.с.',
    consumption: '28.5 кВтч/100 км',
    features: ['Разгон 0-100 км/ч за 2.8 сек.', '800-вольтовая архитектура', 'Панорамная крыша'],
    available: true
  },
  {
    id: 3,
    name: 'Porsche Cayenne Turbo GT',
    category: 'porsche',
    price: 28000,
    priceUnit: 'день',
    year: 2022,
    description: 'Спортивный кроссовер с мощным двигателем и динамикой суперкара.',
    image: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=2087&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/porsche-cayenne-turbo-2019-1e6f0a7c8b574e5ba50e66773a1613d1',
    color: 'Черный',
    transmission: 'Автомат',
    engine: '4.0L Twin-Turbo V8, 640 л.с.',
    consumption: '14.1 л/100 км',
    features: ['Карбон-керамические тормоза', 'Спорт-пакет', '22-дюймовые диски'],
    available: true
  },
  {
    id: 4,
    name: 'Porsche 718 Cayman GT4 RS',
    category: 'porsche',
    price: 26000,
    priceUnit: 'день',
    year: 2022,
    description: 'Самый мощный и экстремальный представитель семейства 718 Cayman.',
    image: 'https://images.unsplash.com/photo-1630990419761-8c1bd1e71709?q=80&w=2073&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/porsche-cayman-gt4-2020-2c0efb48d0044a22ba83fbcd83ad2f1d',
    color: 'Желтый',
    transmission: 'Механика',
    engine: '4.0L Flat-6, 500 л.с.',
    consumption: '12.3 л/100 км',
    features: ['Среднемоторная компоновка', 'Аэродинамический обвес', 'Облегченная конструкция'],
    available: true
  },
  {
    id: 5,
    name: 'Porsche Panamera Turbo S E-Hybrid',
    category: 'porsche',
    price: 27000,
    priceUnit: 'день',
    year: 2023,
    description: 'Гибридный спортивный седан с роскошным интерьером и выдающейся производительностью.',
    image: 'https://images.unsplash.com/photo-1611651336487-9983485d2c95?q=80&w=2082&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/porsche-panamera-turbo-2017-49d3b8b5bc9e48009adc9cb7bd60cc8a',
    color: 'Серый металлик',
    transmission: 'Автомат',
    engine: '4.0L Twin-Turbo V8 + электромотор, 700 л.с.',
    consumption: '2.9 л/100 км (комбинированный)',
    features: ['Гибридная силовая установка', 'Полный привод', 'Четырехзонный климат-контроль'],
    available: true
  },

  // Luxury - 10 автомобилей
  {
    id: 6,
    name: 'Rolls-Royce Phantom',
    category: 'luxury',
    price: 45000,
    priceUnit: 'день',
    year: 2023,
    description: 'Эталон роскоши и комфорта - Rolls-Royce Phantom VIII с индивидуальной отделкой салона.',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2071&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/2018-rolls-royce-phantom-a8d9c7a1c152473dbd1cb6fec39c77cb',
    color: 'Темно-синий',
    transmission: 'Автомат',
    engine: '6.75L V12, 571 л.с.',
    consumption: '14.5 л/100 км',
    features: ['Звездное небо на потолке', 'Индивидуальные задние сиденья с массажем', 'Бар с холодильником'],
    available: true
  },
  {
    id: 7,
    name: 'Bentley Continental GT Speed',
    category: 'luxury',
    price: 35000,
    priceUnit: 'день',
    year: 2023,
    description: 'Роскошное спортивное купе с непревзойденной отделкой и динамическими характеристиками.',
    image: 'https://images.unsplash.com/photo-1621136560890-c34c20ab6b27?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/bentley-continental-gt-2018-9474566bde4e43b683ee1188bbfe0189',
    color: 'Зеленый',
    transmission: 'Автомат',
    engine: '6.0L W12, 659 л.с.',
    consumption: '14.8 л/100 км',
    features: ['Полный привод', 'Карбон-керамические тормоза', 'Система ночного видения'],
    available: true
  },
  {
    id: 8,
    name: 'Mercedes-Maybach S680',
    category: 'luxury',
    price: 38000,
    priceUnit: 'день',
    year: 2023,
    description: 'Представительский седан с максимальным комфортом для пассажиров.',
    image: 'https://images.unsplash.com/photo-1617469767053-ca071b75d8b9?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/mercedes-maybach-s-class-2021-75fc761c36fd43d397b3164e0b69ca61',
    color: 'Черный / Серебристый',
    transmission: 'Автомат',
    engine: '6.0L V12, 612 л.с.',
    consumption: '14.2 л/100 км',
    features: ['Удлиненная колесная база', 'Шумоизоляция премиум-класса', 'Отдельные VIP-кресла'],
    available: true
  },
  {
    id: 9,
    name: 'Aston Martin DBS Superleggera',
    category: 'luxury',
    price: 34000,
    priceUnit: 'день',
    year: 2022,
    description: 'Флагманский гран-турер с атлетичным дизайном и мощным двигателем V12.',
    image: 'https://images.unsplash.com/photo-1592750573776-957bde9d9ca4?q=80&w=2069&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/aston-martin-dbs-superleggera-2019-9b31f0be4d3c425baaeefe6f4414812e',
    color: 'Красный',
    transmission: 'Автомат',
    engine: '5.2L Twin-Turbo V12, 725 л.с.',
    consumption: '14.5 л/100 км',
    features: ['Карбоновый кузов', 'Выхлопная система с активными клапанами', 'Кожаная отделка ручной работы'],
    available: true
  },
  {
    id: 10,
    name: 'Ferrari Roma',
    category: 'luxury',
    price: 32000,
    priceUnit: 'день',
    year: 2022,
    description: 'Элегантное купе с атмосферой La Dolce Vita и выдающимися динамическими характеристиками.',
    image: 'https://images.unsplash.com/photo-1617527218775-77420206c2e9?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/ferrari-roma-d18c77e26363461484676c5e3cc6347a',
    color: 'Голубой',
    transmission: 'Автомат',
    engine: '3.9L Twin-Turbo V8, 620 л.с.',
    consumption: '11.6 л/100 км',
    features: ['Запуск с кнопки на руле', 'Цифровая приборная панель', 'Адаптивная подвеска'],
    available: true
  },
  {
    id: 11,
    name: 'Lamborghini Huracan STO',
    category: 'luxury',
    price: 38000,
    priceUnit: 'день',
    year: 2022,
    description: 'Суперкар, вдохновленный мотоспортом, с экстремальной аэродинамикой и облегченной конструкцией.',
    image: 'https://images.unsplash.com/photo-1614162692792-19b33322c61b?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/lamborghini-huracan-performante-4e2b858f5ef644e5b3338b1976b633e8',
    color: 'Синий с оранжевым',
    transmission: 'Автомат',
    engine: '5.2L V10, 640 л.с.',
    consumption: '14.9 л/100 км',
    features: ['Карбоновый монокок', 'Магниторезологическая подвеска', 'Трековые шины'],
    available: true
  },
  {
    id: 12,
    name: 'McLaren 720S',
    category: 'luxury',
    price: 36000,
    priceUnit: 'день',
    year: 2022,
    description: 'Технологичный суперкар с инновационной аэродинамикой и выдающимися характеристиками.',
    image: 'https://images.unsplash.com/photo-1620891549027-942faa56aabc?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/mclaren-720s-2017-0a8a0d9d0b1d4e428fe5f11dfa01ac51',
    color: 'Оранжевый',
    transmission: 'Автомат',
    engine: '4.0L Twin-Turbo V8, 720 л.с.',
    consumption: '12.2 л/100 км',
    features: ['Активная аэродинамика', 'Монокок из карбона', 'Складывающаяся приборная панель'],
    available: true
  },
  {
    id: 13,
    name: 'Bugatti Chiron',
    category: 'luxury',
    price: 60000,
    priceUnit: 'день',
    year: 2021,
    description: 'Один из самых быстрых и эксклюзивных автомобилей в мире.',
    image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1964&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/bugatti-chiron-2020-e8c1abe552254d4e993d6293a93ce977',
    color: 'Синий / Черный',
    transmission: 'Автомат',
    engine: '8.0L Quad-Turbo W16, 1500 л.с.',
    consumption: '26.1 л/100 км',
    features: ['Специальный ключ для режима Top Speed', 'Карбон-керамические тормоза', 'Телеметрия'],
    available: false
  },
  {
    id: 14,
    name: 'Audi R8 V10 Performance',
    category: 'luxury',
    price: 30000,
    priceUnit: 'день',
    year: 2022,
    description: 'Немецкий суперкар с повседневной практичностью и отточенной управляемостью.',
    image: 'https://images.unsplash.com/photo-1603553329474-99f95f35394f?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/audi-r8-2019-free-a1c7f24e668a424fa5dd82ca1be7c0bd',
    color: 'Серый',
    transmission: 'Автомат',
    engine: '5.2L V10, 620 л.с.',
    consumption: '13.1 л/100 км',
    features: ['Полный привод quattro', 'Лазерные фары', 'Виртуальная приборная панель'],
    available: true
  },
  {
    id: 15,
    name: 'Maserati MC20',
    category: 'luxury',
    price: 31000,
    priceUnit: 'день',
    year: 2023,
    description: 'Новейший суперкар от Maserati с уникальным двигателем собственной разработки.',
    image: 'https://images.unsplash.com/photo-1617814065893-00757125efab?q=80&w=1964&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/maserati-mc20-2021-17ea27cf47754eda9e10545b3af574be',
    color: 'Белый',
    transmission: 'Автомат',
    engine: '3.0L Twin-Turbo V6, 630 л.с.',
    consumption: '11.6 л/100 км',
    features: ['Патентованная технология сгорания', 'Двери типа "бабочка"', 'Карбоновый монокок'],
    available: true
  },

  // Business - 15 автомобилей
  {
    id: 16,
    name: 'Mercedes-Benz S500',
    category: 'business',
    price: 20000,
    priceUnit: 'день',
    year: 2023,
    description: 'Флагманский седан Mercedes-Benz с инновационными технологиями и непревзойденным комфортом.',
    image: 'https://images.unsplash.com/photo-1563720223523-7be2590d050f?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/mercedes-s-class-s580-2021-75fc761c36fd43d397b3164e0b69ca61',
    color: 'Черный',
    transmission: 'Автомат',
    engine: '3.0L Inline-6 + EQ Boost, 435 л.с.',
    consumption: '8.6 л/100 км',
    features: ['3D-приборная панель', 'Пневмоподвеска', 'Система полуавтономного вождения'],
    available: true
  },
  {
    id: 17,
    name: 'BMW 7 Series',
    category: 'business',
    price: 19000,
    priceUnit: 'день',
    year: 2023,
    description: 'Седан представительского класса с технологиями будущего и комфортом премиум-уровня.',
    image: 'https://images.unsplash.com/photo-1600705722075-2ea5ba2eabc3?q=80&w=2075&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/bmw-7-series-2023-49d3b8b5bc9e48009adc9cb7bd60cc8a',
    color: 'Серый металлик',
    transmission: 'Автомат',
    engine: '3.0L TwinPower Turbo, 380 л.с.',
    consumption: '8.2 л/100 км',
    features: ['Светящаяся решетка радиатора', 'Дисплей для задних пассажиров', 'Система автопарковки'],
    available: true
  },
  {
    id: 18,
    name: 'Audi A8 L',
    category: 'business',
    price: 18000,
    priceUnit: 'день',
    year: 2023,
    description: 'Удлинённый флагманский седан с интеллектуальной подвеской и цифровой экосистемой.',
    image: 'https://images.unsplash.com/photo-1570739359647-fd87fada55c1?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/audi-a8-l-2018-a11b1271bd274081a423cdc12f9a57cd',
    color: 'Темно-синий',
    transmission: 'Автомат',
    engine: '3.0L V6 TFSI, 340 л.с.',
    consumption: '8.5 л/100 км',
    features: ['Активная электромеханическая подвеска', 'Матричные OLED-фонари', 'Массаж стоп задних пассажиров'],
    available: true
  },
  {
    id: 19,
    name: 'Lexus LS 500h',
    category: 'business',
    price: 17000,
    priceUnit: 'день',
    year: 2022,
    description: 'Гибридный флагман Lexus с традиционной японской эстетикой и передовыми технологиями.',
    image: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=1972&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/lexus-ls-500-2018-1ad307f554ca430f896628f488d0bffa',
    color: 'Серебристый',
    transmission: 'Автомат',
    engine: '3.5L V6 + электромотор, 354 л.с.',
    consumption: '6.6 л/100 км',
    features: ['Сиденья с функцией шиацу-массажа', 'Аудиосистема Mark Levinson', 'Климат-концерт'],
    available: true
  },
  {
    id: 20,
    name: 'Genesis G90',
    category: 'business',
    price: 15000,
    priceUnit: 'день',
    year: 2023,
    description: 'Флагманский седан корейского премиум-бренда с элегантным дизайном и богатым оснащением.',
    image: 'https://images.unsplash.com/photo-1659445210808-6802f4120fd9?q=80&w=1972&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/genesis-g90-2020-27f2e52be8fc41c9a47d3398909b33e1',
    color: 'Темно-зеленый',
    transmission: 'Автомат',
    engine: '3.5L Twin-Turbo V6, 380 л.с.',
    consumption: '10.5 л/100 км',
    features: ['Пневмоподвеска с превентивным сканированием дороги', 'Система очистки воздуха', 'Акустические стекла'],
    available: true
  },
  {
    id: 21,
    name: 'BMW X7',
    category: 'business',
    price: 18000,
    priceUnit: 'день',
    year: 2023,
    description: 'Роскошный полноразмерный внедорожник с тремя рядами сидений и превосходной динамикой.',
    image: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=2087&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/bmw-x7-2019-1e6f0a7c8b574e5ba50e66773a1613d1',
    color: 'Черный сапфир',
    transmission: 'Автомат',
    engine: '4.4L TwinPower Turbo V8, 530 л.с.',
    consumption: '11.4 л/100 км',
    features: ['Панорамная стеклянная крыша', 'Sky Lounge с LED-подсветкой', '5-зонный климат-контроль'],
    available: true
  },
  {
    id: 22,
    name: 'Mercedes-Benz GLS 580',
    category: 'business',
    price: 19000,
    priceUnit: 'день',
    year: 2023,
    description: 'Флагманский внедорожник Mercedes-Benz с роскошным салоном и инновационными технологиями.',
    image: 'https://images.unsplash.com/photo-1622244358459-6c5b29fc4f10?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/mercedes-benz-gls-580-2020-cf6066bab0f34b608ae3c472a156f10e',
    color: 'Серебристый',
    transmission: 'Автомат',
    engine: '4.0L V8 + EQ Boost, 489 л.с.',
    consumption: '10.8 л/100 км',
    features: ['Пневмоподвеска AIRMATIC', 'Внедорожный пакет', 'Система E-ACTIVE BODY CONTROL'],
    available: true
  },
  {
    id: 23,
    name: 'Audi e-tron GT',
    category: 'business',
    price: 22000,
    priceUnit: 'день',
    year: 2023,
    description: 'Электрический гран-турер с впечатляющим дизайном и производительностью.',
    image: 'https://images.unsplash.com/photo-1617994452722-4190c6dcb321?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/audi-e-tron-gt-2022-85dca206ed7d4b919f08316d271b50ef',
    color: 'Серый',
    transmission: 'Автомат',
    engine: 'Электрический, 530 л.с.',
    consumption: '19.6 кВтч/100 км',
    features: ['800-вольтовая архитектура', 'Адаптивная пневмоподвеска', 'Подруливающая задняя ось'],
    available: true
  },
  {
    id: 24,
    name: 'Tesla Model S Plaid',
    category: 'business',
    price: 23000,
    priceUnit: 'день',
    year: 2023,
    description: 'Самый быстрый серийный электромобиль с инновационным интерьером.',
    image: 'https://images.unsplash.com/photo-1617704548060-ff170e70f106?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/tesla-model-s-2021-a2e60a52c7e14ed8b85b9b4d5353175b',
    color: 'Белый',
    transmission: 'Автомат',
    engine: 'Электрический, трехмоторный, 1020 л.с.',
    consumption: '19.3 кВтч/100 км',
    features: ['Разгон 0-100 км/ч за 2.1 сек.', 'Автопилот', 'Игровой компьютер в салоне'],
    available: true
  },
  {
    id: 25,
    name: 'Range Rover Autobiography',
    category: 'business',
    price: 21000,
    priceUnit: 'день',
    year: 2023,
    description: 'Флагманский внедорожник с непревзойденной роскошью и проходимостью.',
    image: 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/range-rover-autobiography-2022-1ad307f554ca430f896628f488d0bffa',
    color: 'Зеленый',
    transmission: 'Автомат',
    engine: '4.4L Twin-Turbo V8, 523 л.с.',
    consumption: '11.8 л/100 км',
    features: ['Подвеска с предиктивной адаптацией', 'Сенсорные экраны для задних пассажиров', 'Атмосферная подсветка'],
    available: true
  },
  {
    id: 26,
    name: 'Jaguar I-PACE',
    category: 'business',
    price: 16000,
    priceUnit: 'день',
    year: 2022,
    description: 'Электрический кроссовер премиум-класса с впечатляющей динамикой и запасом хода.',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2067&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/jaguar-i-pace-2019-0a8a0d9d0b1d4e428fe5f11dfa01ac51',
    color: 'Красный',
    transmission: 'Автомат',
    engine: 'Электрический, 400 л.с.',
    consumption: '22 кВтч/100 км',
    features: ['Адаптивная пневмоподвеска', 'Панорамная крыша', 'Система активного шумоподавления'],
    available: true
  },
  {
    id: 27,
    name: 'Volvo XC90 Recharge',
    category: 'business',
    price: 15000,
    priceUnit: 'день',
    year: 2023,
    description: 'Флагманский гибридный внедорожник с передовыми системами безопасности.',
    image: 'https://images.unsplash.com/photo-1571730471836-c48d2c78f8a6?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/volvo-xc90-2020-16cc92a4ae3647c8b48dda39c037f1bd',
    color: 'Синий металлик',
    transmission: 'Автомат',
    engine: '2.0L + электромотор, 455 л.с.',
    consumption: '2.5 л/100 км (комбинированный)',
    features: ['Пакет безопасности City Safety', 'Аудиосистема Bowers & Wilkins', 'Воздушная подвеска'],
    available: true
  },
  {
    id: 28,
    name: 'Cadillac Escalade',
    category: 'business',
    price: 17000,
    priceUnit: 'день',
    year: 2023,
    description: 'Полноразмерный американский люксовый внедорожник с впечатляющим оснащением.',
    image: 'https://images.unsplash.com/photo-1621806232899-9e5006ee1be1?q=80&w=1974&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/cadillac-escalade-2021-9d2a96af21cc4c22bf77aa6a6c13a8cb',
    color: 'Черный',
    transmission: 'Автомат',
    engine: '6.2L V8, 420 л.с.',
    consumption: '14.7 л/100 км',
    features: ['Изогнутый OLED-дисплей', 'Система ночного видения', 'Аудиосистема AKG Studio с 36 динамиками'],
    available: true
  },
  {
    id: 29,
    name: 'Lucid Air Dream Edition',
    category: 'business',
    price: 25000,
    priceUnit: 'день',
    year: 2023,
    description: 'Революционный электрический седан с рекордным запасом хода и роскошным салоном.',
    image: 'https://images.unsplash.com/photo-1647343011549-79c285854eda?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/lucid-air-2021-a2e60a52c7e14ed8b85b9b4d5353175b',
    color: 'Серебристо-белый',
    transmission: 'Автомат',
    engine: 'Электрический, 1111 л.с.',
    consumption: '16.9 кВтч/100 км',
    features: ['Запас хода до 837 км', 'Система DreamDrive Pro', '34-дюймовый изогнутый дисплей'],
    available: true
  },
  {
    id: 30,
    name: 'Rivian R1S',
    category: 'business',
    price: 18000,
    priceUnit: 'день',
    year: 2023,
    description: 'Инновационный электрический внедорожник с выдающимися внедорожными возможностями.',
    image: 'https://images.unsplash.com/photo-1662912869683-fd280699078e?q=80&w=2070&auto=format&fit=crop',
    modelUrl: 'https://sketchfab.com/3d-models/rivian-r1s-suv-2022-57a12f447cf942f2a2e2495b71db6620',
    color: 'Синий',
    transmission: 'Автомат',
    engine: 'Электрический, четырехмоторный, 835 л.с.',
    consumption: '23 кВтч/100 км',
    features: ['Адаптивная пневмоподвеска', 'Режим танк-разворота', 'Панорамная стеклянная крыша'],
    available: true
  }
];

// Бронирования
export const reservations: Reservation[] = [
  {
    id: 1,
    userId: 1,
    carId: 3,
    startDate: '2023-05-10T10:00:00Z',
    endDate: '2023-05-15T10:00:00Z',
    status: 'completed',
    totalPrice: 140000,
    createdAt: '2023-05-01T15:30:00Z'
  },
  {
    id: 2,
    userId: 1,
    carId: 7,
    startDate: '2023-06-20T09:00:00Z',
    endDate: '2023-06-22T18:00:00Z',
    status: 'completed',
    totalPrice: 70000,
    createdAt: '2023-06-10T11:45:00Z'
  },
  {
    id: 3,
    userId: 2,
    carId: 11,
    startDate: '2023-07-05T12:00:00Z',
    endDate: '2023-07-07T12:00:00Z',
    status: 'cancelled',
    totalPrice: 76000,
    createdAt: '2023-06-25T09:20:00Z'
  },
  {
    id: 4,
    userId: 1,
    carId: 16,
    startDate: '2023-08-15T14:00:00Z',
    endDate: '2023-08-18T10:00:00Z',
    status: 'active',
    totalPrice: 60000,
    createdAt: '2023-08-01T16:50:00Z'
  },
  {
    id: 5,
    userId: 2,
    carId: 9,
    startDate: '2023-09-25T11:00:00Z',
    endDate: '2023-09-30T11:00:00Z',
    status: 'pending',
    totalPrice: 170000,
    createdAt: '2023-09-15T18:30:00Z'
  }
];

// Отзывы
export const reviews: Review[] = [
  {
    id: 1,
    userId: 1,
    carId: 3,
    rating: 5,
    comment: 'Непередаваемые ощущения от вождения Porsche Cayenne Turbo GT! Мощь, комфорт и престиж в одном автомобиле.',
    createdAt: '2023-05-16T14:25:00Z'
  },
  {
    id: 2,
    userId: 1,
    carId: 7,
    rating: 5,
    comment: 'Bentley Continental GT Speed - лучший автомобиль, который я когда-либо водил. Роскошь и спортивный характер идеально сбалансированы.',
    createdAt: '2023-06-23T19:15:00Z'
  },
  {
    id: 3,
    userId: 2,
    carId: 11,
    rating: 4,
    comment: 'Lamborghini Huracan STO - невероятный автомобиль, но слишком привлекает внимание. Если вы не готовы к постоянным фотографиям, выбирайте что-то менее заметное.',
    createdAt: '2023-07-08T10:40:00Z'
  },
  {
    id: 4,
    userId: 2,
    carId: 16,
    rating: 5,
    comment: 'Mercedes-Benz S500 - эталон комфорта и технологий. Идеальный автомобиль для деловых поездок и дальних путешествий.',
    createdAt: '2023-08-19T12:10:00Z'
  }
];

// Текущий пользователь (для имитации авторизации)
export const currentUser = users[0];
