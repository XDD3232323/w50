import React, { useState, useEffect } from "react";
import './index.css';

// ข้อมูลเกมจริงพร้อมรูปภาพ
const gamesData = [
  {
    id: 1,
    title: "Stardew Valley",
    price: 315,
    discount: 20,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049b185b14ab174fd8c807.1920x1080.jpg",
    tags: ["Farming", "Life Sim", "RPG", "Pixel Graphics"],
    rating: 4.9,
    description: "คุณได้รับฟาร์มเก่าแก่จากปู่ของคุณในหุบเขา Stardew ด้วยเครื่องมือมือเก่าและเหรียญไม่กี่เหรียญ คุณกำลังเริ่มต้นชีวิตใหม่ในชนบท คุณจะสามารถเปลี่ยนที่ดินรกร้างให้เป็นบ้านในฝันได้หรือไม่?",
    reviews: 284500,
    releaseDate: "26 ก.พ. 2016"
  },
  {
    id: 2,
    title: "Hollow Knight",
    price: 329,
    discount: 34,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/367520/ss_c2a0c4d7c13cb46cfd14fcfb63459baa352c5548.1920x1080.jpg",
    tags: ["Metroidvania", "Souls-like", "2D", "Dark Fantasy"],
    rating: 4.8,
    description: "ผจญภัยไปในโลกใต้ดินอันกว้างใหญ่ของ Hallownest ในฐานะอัศวินผู้ลึกลับ เต็มไปด้วยแมลงและสิ่งมีชีวิตแปลกประหลาด พบกับเพื่อนและศัตรูในภูมิประเทศที่สวยงามและน่าขนลุก",
    reviews: 174982,
    releaseDate: "24 ก.พ. 2017"
  },
  {
    id: 3,
    title: "Genshin Impact",
    price: 0,
    discount: 0,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg",
    banner: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/ss_2fdca06f66582b18b8e0a979e191f7cbdf0b0dba.1920x1080.jpg",
    tags: ["Open World", "RPG", "Anime", "Fantasy"],
    rating: 4.5,
    description: "ผจญภัยไปในโลกเปิดกว้างของ Teyvat ค้นหาความลับของเจ็ดธาตุและพี่น้องฝาแฝดที่พลัดพราก ตัวละครที่หลากหลายพร้อมให้สำรวจโลกอันกว้างใหญ่ที่เต็มไปด้วยความมหัศจรรย์",
    reviews: 386421,
    releaseDate: "9 มิ.ย. 2023"
  },
  {
    id: 4,
    title: "Among Us",
    price: 95,
    discount: 25,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/945360/ss_ed61a7f6733903c734a9ed1a1a82dc12572af2d5.1920x1080.jpg",
    tags: ["Multiplayer", "Social Deduction", "Party Game", "Casual"],
    rating: 4.6,
    description: "เกมปาร์ตี้มัลติเพลย์เยอร์ออนไลน์ คุณอาจเป็นลูกเรือที่ทำงานร่วมกันบนยานอวกาศก่อนออกเดินทาง หรืออาจเป็นคนทรยศที่ต้องการฆ่าทุกคนก็ได้!",
    reviews: 642970,
    releaseDate: "16 พ.ย. 2018"
  },
  {
    id: 5,
    title: "Minecraft",
    price: 729,
    discount: 0,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg",
    banner: "https://images.contentstack.io/v3/assets/blt95b381df7c12c15d/bltad36c17d6e0d6621/611a977f7104bb3c5a2ae634/minecraft-heroes.jpg",
    tags: ["Sandbox", "Survival", "Building", "Adventure"],
    rating: 4.9,
    description: "สร้างสิ่งปลูกสร้าง สำรวจ และอยู่รอดในโลกที่สร้างจากบล็อกโดยสุ่ม เล่นคนเดียวหรือกับเพื่อน ผจญภัยในโลกแบบสุ่มที่ไม่มีขีดจำกัด",
    reviews: 876534,
    releaseDate: "18 พ.ย. 2011"
  },
  {
    id: 6,
    title: "Cuphead",
    price: 369,
    discount: 30,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg",
    tags: ["Difficult", "Cartoon", "Boss Rush", "Hand-drawn"],
    rating: 4.7,
    description: "เกมแอคชั่นคลาสสิกที่เน้นการต่อสู้กับบอส ได้รับแรงบันดาลใจจากภาพเคลื่อนไหวในยุค 1930 กราฟิกและเสียงดนตรีถูกสร้างอย่างพิถีพิถันตามสไตล์ของยุคนั้น",
    reviews: 125300,
    releaseDate: "29 ก.ย. 2017"
  },
  {
    id: 7,
    title: "Undertale",
    price: 249,
    discount: 20,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/391540/ss_37972ab47f7518e3253fa5c49f99535ed7866431.1920x1080.jpg",
    tags: ["RPG", "Story Rich", "Pixel Graphics", "Comedy"],
    rating: 4.8,
    description: "เกม RPG สุดแปลกที่คุณไม่จำเป็นต้องฆ่าใคร เพื่อนทุกคนหรือศัตรูทุกตัว ขึ้นอยู่กับตัวคุณเอง! ระบบการต่อสู้แบบพิเศษที่ผู้เล่นต้องหลบหลีกการโจมตีจากศัตรู",
    reviews: 232146,
    releaseDate: "15 ก.ย. 2015"
  },
  {
    id: 8,
    title: "Terraria",
    price: 199,
    discount: 40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_86d0a046351bda2c7e5d63dac94b877a56bdad98.1920x1080.jpg",
    tags: ["Sandbox", "Adventure", "2D", "Crafting"],
    rating: 4.7,
    description: "ขุด ต่อสู้ สำรวจ สร้าง! ไม่มีอะไรที่เป็นไปไม่ได้ในเกมผจญภัย 2D อันกว้างขวางนี้ โลกเป็นของคุณที่จะสร้างและป้องกัน!",
    reviews: 768549,
    releaseDate: "16 พ.ค. 2011"
  },
  {
    id: 9,
    title: "Celeste",
    price: 299,
    discount: 25,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/504230/ss_210b67d4dcbf59d54a0ba322be53722ecaaac7a0.1920x1080.jpg",
    tags: ["Platformer", "Difficult", "Pixel Graphics", "Great Soundtrack"],
    rating: 4.9,
    description: "ช่วย Madeline ผ่านการเดินทางค้นหาตัวเองขณะที่เธอปีนขึ้นไปบนภูเขา Celeste เอาชนะความท้าทายกว่า 700 ห้อง ค้นพบความลับ และไขปริศนาของภูเขา",
    reviews: 87432,
    releaseDate: "25 ม.ค. 2018"
  },
  {
    id: 10,
    title: "Hades",
    price: 419,
    discount: 15,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/ss_c0fed447426b69981cf1721756acf75369801b31.1920x1080.jpg",
    tags: ["Roguelike", "Action", "Mythology", "Isometric"],
    rating: 4.8,
    description: "เกมแอคชั่น-โรกไลค์จากผู้สร้าง Bastion, Transistor และ Pyre ในฐานะโอรสของเทพเจ้าแห่งความตาย คุณจะใช้พลังและอาวุธในตำนานเพื่อหนีจากนรกและพิชิตเทพแห่งโอลิมปัส",
    reviews: 178524,
    releaseDate: "17 ก.ย. 2020"
  },
  {
    id: 11,
    title: "Animal Crossing: New Horizons",
    price: 1590,
    discount: 0,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg",
    banner: "https://animal-crossing.com/new-horizons/assets/img/share-fb.jpg",
    tags: ["Life Sim", "Relaxing", "Cute", "Social"],
    rating: 4.6,
    description: "เริ่มต้นชีวิตใหม่บนเกาะทะเลใต้ที่เต็มไปด้วยธรรมชาติ จัดบ้าน ตกแต่งเกาะ และสร้างสังคมกับเพื่อนบ้านสัตว์น่ารัก เก็บหาทรัพยากร สร้างของ และแสดงความเป็นตัวคุณ!",
    reviews: 132456,
    releaseDate: "20 มี.ค. 2020"
  },
  {
    id: 12,
    title: "Ori and the Will of the Wisps",
    price: 399,
    discount: 35,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1057090/ss_f7224ef291ef361a49d5dfd14f2d9512384d6c83.1920x1080.jpg",
    tags: ["Platformer", "Metroidvania", "Beautiful", "Emotional"],
    rating: 4.9,
    description: "เกมผจญภัย Platform-adventure สุดสวยที่จะพาคุณไปยังโลกใหม่อันน่าหลงใหล ตามหาความจริงเกี่ยวกับชะตากรรมของ Ori ค้นพบโลกที่ซ่อนอยู่ด้วยศัตรูที่น่ากลัวและปริศนาที่ท้าทาย",
    reviews: 84231,
    releaseDate: "11 มี.ค. 2020"
  },
  {
    id: 13,
    title: "Elden Ring",
    price: 1790,
    discount: 15,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.1920x1080.jpg",
    tags: ["Souls-like", "Open World", "RPG", "Difficult"],
    rating: 4.8,
    description: "เกม RPG แอคชั่นใหม่ที่พัฒนาโดย FromSoftware, Inc. และ BANDAI NAMCO Entertainment Inc. ผจญภัยในโลกกว้างที่เต็มไปด้วยสถานการณ์และดันเจี้ยนขนาดใหญ่ที่เชื่อมต่อกันอย่างไร้รอยต่อ",
    reviews: 487650,
    releaseDate: "25 ก.พ. 2022"
  },
  {
    id: 14,
    title: "Hogwarts Legacy",
    price: 1490,
    discount: 20,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_7f4792cb5124d50e9a84741d8ebd1532dd10fccd.1920x1080.jpg",
    tags: ["Open World", "Magic", "Fantasy", "RPG"],
    rating: 4.7,
    description: "Hogwarts Legacy เป็น RPG แอคชั่นโลกเปิดที่ตั้งอยู่ในโลกของแฮรี่ พอตเตอร์ในช่วงปี 1800 คุณคือนักเรียนที่ถือกุญแจไขความลับโบราณที่คุกคามจะทำลายโลกเวทมนตร์",
    reviews: 258741,
    releaseDate: "10 ก.พ. 2023"
  },
  {
    id: 15,
    title: "Red Dead Redemption 2",
    price: 1590,
    discount: 40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg",
    tags: ["Open World", "Story Rich", "Western", "Adventure"],
    rating: 4.9,
    description: "เรื่องราวของ Arthur Morgan และแก๊งของ Van der Linde ที่ต้องหนีหลังจากปล้นในเมืองแบล็กวอเตอร์ล้มเหลว อาร์เธอร์ต้องเลือกระหว่างอุดมการณ์ของเขาและความภักดีต่อแก๊งที่เลี้ยงดูเขามา",
    reviews: 435280,
    releaseDate: "5 ธ.ค. 2019"
  },
  {
    id: 16,
    title: "The Witcher 3: Wild Hunt",
    price: 899,
    discount: 70,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.1920x1080.jpg",
    tags: ["RPG", "Open World", "Story Rich", "Fantasy"],
    rating: 4.9,
    description: "คุณคือ Geralt of Rivia นักล่าอสูรมืออาชีพ โลกกำลังถูกทำลาย และคุณมีภารกิจที่สำคัญที่สุด: ตามหา Ciri เด็กสาวในตำนานที่ปรากฏในคำทำนายโบราณ",
    reviews: 654830,
    releaseDate: "18 พ.ค. 2015"
  },
  {
    id: 17,
    title: "Cyberpunk 2077",
    price: 1990,
    discount: 50,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_13c3bb81bdb8256d187ab7f5639d5c259b0b5714.1920x1080.jpg",
    tags: ["Cyberpunk", "Open World", "RPG", "Futuristic"],
    rating: 4.5,
    description: "Cyberpunk 2077 เป็น RPG แอคชั่นผจญภัยที่เกิดขึ้นในไนท์ซิตี้ เมืองแห่งอนาคตที่หมกมุ่นกับพลังและแฟชั่น คุณรับบทเป็น V นักอันธพาลรับจ้างที่กำลังไล่ล่าชิปเสริมพลังที่เป็นกุญแจสู่ความเป็นอมตะ",
    reviews: 512340,
    releaseDate: "10 ธ.ค. 2020"
  },
  {
    id: 18,
    title: "God of War",
    price: 1290,
    discount: 20,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_2a61ee23c2a5d3a60a9cd372ab6536f428875e76.1920x1080.jpg",
    tags: ["Action", "Adventure", "Story Rich", "Mythology"],
    rating: 4.9,
    description: "หลังจากแก้แค้นเทพแห่งโอลิมปัส Kratos อาศัยอยู่ในอาณาจักรของเทพนอร์ส เขาต้องอยู่รอดในดินแดนที่โหดร้าย สอนลูกชายให้ทำเช่นเดียวกัน และต้องเผชิญหน้ากับโอกาสใหม่ในการควบคุมความโกรธที่ทำให้เขาเป็นคนที่ไม่พึงประสงค์มาอย่างยาวนาน",
    reviews: 268940,
    releaseDate: "14 ม.ค. 2022"
  },
  {
    id: 19,
    title: "Valheim",
    price: 349,
    discount: 0,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_c665a313a7fbfe38cf1c852a05a23922ae450db7.1920x1080.jpg",
    tags: ["Survival", "Open World", "Crafting", "Viking"],
    rating: 4.7,
    description: "เกมเอาชีวิตรอดและผจญภัยในธีมไวกิ้ง ต่อสู้ สร้าง และพิชิตดินแดนของคุณในการต่อสู้ที่ท้าทายกับศัตรูที่ท้าทายที่สุด",
    reviews: 325670,
    releaseDate: "2 ก.พ. 2021"
  },
  {
    id: 20,
    title: "Sea of Thieves",
    price: 399,
    discount: 25,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg",
    banner: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/ss_c596de10ef93a93d278754af58be7758bf2a96e4.1920x1080.jpg",
    tags: ["Multiplayer", "Adventure", "Pirates", "Open World"],
    rating: 4.6,
    description: "Sea of Thieves นำเสนอประสบการณ์โจรสลัดแบบเปิดกว้างให้คุณแล่นเรือและต่อสู้ สำรวจและล่าขุมทรัพย์ในโลกแห่งอันตรายและการผจญภัยที่ไม่มีที่สิ้นสุด ออกเดินทางในโลกที่กว้างใหญ่พร้อมเพื่อนของคุณ",
    reviews: 219480,
    releaseDate: "3 มิ.ย. 2020"
  }
];

// Carousel banners for featured games
const carouselBanners = [
  {
    id: 13,
    title: "Elden Ring",
    subtitle: "ผจญภัยในดินแดนที่เต็มไปด้วยอันตรายและความลึกลับ",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.1920x1080.jpg",
    discount: 15
  },
  {
    id: 15,
    title: "Red Dead Redemption 2",
    subtitle: "มหากาพย์แห่งยุคคาวบอยตะวันตก",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg",
    discount: 40
  },
  {
    id: 16,
    title: "The Witcher 3: Wild Hunt",
    subtitle: "ลดราคาพิเศษ 70% - มหากาพย์ในตำนาน",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.1920x1080.jpg",
    discount: 70
  },
  {
    id: 2,
    title: "Hollow Knight",
    subtitle: "ผจญภัยในอาณาจักรแมลงอันลึกลับ",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/ss_c2a0c4d7c13cb46cfd14fcfb63459baa352c5548.1920x1080.jpg",
    discount: 34
  }
];

function App() {
  const [games, setGames] = useState(gamesData);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [filterTag, setFilterTag] = useState("");
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
  // เปลี่ยนแบนเนอร์อัตโนมัติทุก 5 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % carouselBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // รวมแท็กทั้งหมดจากเกม
  const allTags = [...new Set(games.flatMap(game => game.tags))];
  
  // กรองเกมตามการค้นหาและแท็ก
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = filterTag ? game.tags.includes(filterTag) : true;
    return matchesSearch && matchesTag;
  });

  // ค้นหาเกมแบบ Autocomplete
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      const suggestions = games.filter(game => 
        game.title.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setFilteredSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // เลือกเกมจากรายการแนะนำ
  const selectSuggestion = (game) => {
    setSearchTerm(game.title);
    setShowSuggestions(false);
    // สามารถเพิ่มการเลือกเกมโดยตรงได้
    showGameDetails(game);
  };

  // เพิ่มเกมลงตะกร้า
  const addToCart = (game) => {
    const isInCart = cart.some(item => item.id === game.id);
    if (!isInCart) {
      setCart([...cart, { ...game, quantity: 1 }]);
      
      // แสดงแอนิเมชันเพิ่มลงตะกร้า
      const notification = document.createElement('div');
      notification.className = 'add-to-cart-animation';
      notification.innerText = `${game.title} เพิ่มในตะกร้าแล้ว!`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 2000);
    }
  };

  // ลบเกมออกจากตะกร้า
  const removeFromCart = (gameId) => {
    setCart(cart.filter(item => item.id !== gameId));
  };

  // คำนวณราคารวมในตะกร้า
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const discountedPrice = item.price * (1 - item.discount / 100);
      return total + (discountedPrice * item.quantity);
    }, 0);
  };

  // แสดงรายละเอียดเกม
  const showGameDetails = (game) => {
    setSelectedGame(game);
  };

  // ปิดหน้ารายละเอียดเกม
  const closeGameDetails = () => {
    setSelectedGame(null);
  };

  // เกมที่ลดราคามากที่สุด
  const biggestDiscountGames = [...games]
    .filter(game => game.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 5);

  // เกมที่มีคะแนนสูงสุด
  const topRatedGames = [...games]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="game-store">
      <header className="store-header">
        <div className="logo-container">
          <h1 className="store-logo">KawaiiGames</h1>
          <div className="sparkle"></div>
        </div>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="ค้นหาเกม..." 
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => {
                if (searchTerm.length > 1) setShowSuggestions(true);
              }}
              onBlur={() => {
                // Delay hiding suggestions to allow clicking on them
                setTimeout(() => setShowSuggestions(false), 200);
              }}
              className="search-input" 
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="search-suggestions">
                {filteredSuggestions.map(game => (
                  <div 
                    key={game.id} 
                    className="suggestion-item"
                    onClick={() => selectSuggestion(game)}
                  >
                    <img src={game.image} alt={game.title} />
                    <span>{game.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="search-button">ค้นหา</button>
        </div>
        
        <div className="nav-buttons">
          <button className="nav-button">หน้าแรก</button>
          <button className="nav-button">ลดราคา</button>
          <button className="nav-button">ใหม่ล่าสุด</button>
          <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <span className="material-icons">shopping_cart</span>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </header>

      <div className="store-content">
        <aside className="sidebar">
          <div className="category-section">
            <h3>หมวดหมู่</h3>
            <ul>
              <li className={filterTag === "" ? "active" : ""} onClick={() => setFilterTag("")}>ทั้งหมด</li>
              {allTags.map(tag => (
                <li 
                  key={tag} 
                  className={filterTag === tag ? "active" : ""}
                  onClick={() => setFilterTag(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="special-offers">
            <h3>ข้อเสนอพิเศษ</h3>
            <div className="offer-card">
              <p>ลดราคาสูงสุด 70% สำหรับเกมแนว RPG</p>
              <div className="offer-timer">เหลือเวลา: 3 วัน</div>
            </div>
          </div>

          <div className="top-discount">
            <h3>ลดราคามากที่สุด</h3>
            <div className="side-games-list">
              {biggestDiscountGames.map(game => (
                <div 
                  key={game.id} 
                  className="side-game-item"
                  onClick={() => showGameDetails(game)}
                >
                  <img src={game.image} alt={game.title} />
                  <div className="side-game-info">
                    <h4>{game.title}</h4>
                    <div className="side-game-discount">-{game.discount}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="top-rated">
            <h3>เกมยอดนิยม</h3>
            <div className="side-games-list">
              {topRatedGames.map(game => (
                <div 
                  key={game.id} 
                  className="side-game-item"
                  onClick={() => showGameDetails(game)}
                >
                  <img src={game.image} alt={game.title} />
                  <div className="side-game-info">
                    <h4>{game.title}</h4>
                    <div className="side-game-rating">★ {game.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="carousel-container">
            <div 
              className="carousel-slide" 
              style={{
                backgroundImage: `url('${carouselBanners[currentBanner].image}')`
              }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <div className="carousel-badge">เกมแนะนำ</div>
                <h2>{carouselBanners[currentBanner].title}</h2>
                <p>{carouselBanners[currentBanner].subtitle}</p>
                {carouselBanners[currentBanner].discount > 0 && (
                  <div className="carousel-discount">-{carouselBanners[currentBanner].discount}%</div>
                )}
                <button 
                  className="carousel-button"
                  onClick={() => {
                    const featuredGame = games.find(g => g.id === carouselBanners[currentBanner].id);
                    if (featuredGame) showGameDetails(featuredGame);
                  }}
                >
                  ดูรายละเอียด
                </button>
              </div>
            </div>
            <div className="carousel-indicators">
              {carouselBanners.map((_, index) => (
                <button 
                  key={index} 
                  className={`carousel-indicator ${index === currentBanner ? 'active' : ''}`}
                  onClick={() => setCurrentBanner(index)}
                ></button>
              ))}
            </div>
            <button 
              className="carousel-control prev"
              onClick={() => setCurrentBanner((prev) => (prev - 1 + carouselBanners.length) % carouselBanners.length)}
            >
              ‹
            </button>
            <button 
              className="carousel-control next"
              onClick={() => setCurrentBanner((prev) => (prev + 1) % carouselBanners.length)}
            >
              ›
            </button>
          </div>

          <div className="spotlight-section">
            <h2>ข้อเสนอแนะนำ</h2>
            <div className="spotlight-games">
              {games.filter(game => game.discount >= 30).slice(0, 3).map(game => (
                <div 
                  key={game.id} 
                  className="spotlight-game"
                  onClick={() => showGameDetails(game)}
                >
                  <img src={game.image} alt={game.title} />
                  <div className="spotlight-info">
                    <h3>{game.title}</h3>
                    <div className="spotlight-discount">
                      <span className="discount-badge">-{game.discount}%</span>
                      <div className="spotlight-prices">
                        <span className="original-price">{game.price} บาท</span>
                        <span className="discounted-price">
                          {Math.round(game.price * (1 - game.discount / 100))} บาท
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h2>เกมทั้งหมด</h2>
            <div className="filter-options">
              <button className="filter-button active">ยอดนิยม</button>
              <button className="filter-button">ใหม่ล่าสุด</button>
              <button className="filter-button">ลดราคา</button>
              <button className="filter-button">ฟรี</button>
            </div>
          </div>

          <div className="games-grid">
            {filteredGames.map(game => (
              <div className="game-card" key={game.id}>
                <div className="game-image">
                  <img src={game.image} alt={game.title} />
                  {game.discount > 0 && <div className="discount-badge">-{game.discount}%</div>}
                </div>
                <div className="game-info">
                  <h3>{game.title}</h3>
                  <div className="tags">
                    {game.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="rating">
                    {"★".repeat(Math.floor(game.rating))}
                    {"☆".repeat(5 - Math.floor(game.rating))}
                    <span>{game.rating}</span>
                  </div>
                  <div className="price-section">
                    {game.price === 0 ? (
                      <span className="free-price">ฟรี</span>
                    ) : game.discount > 0 ? (
                      <>
                        <span className="original-price">{game.price} บาท</span>
                        <span className="discounted-price">
                          {Math.round(game.price * (1 - game.discount / 100))} บาท
                        </span>
                      </>
                    ) : (
                      <span className="price">{game.price} บาท</span>
                    )}
                  </div>
                  <div className="game-buttons">
                    <button className="details-button" onClick={() => showGameDetails(game)}>
                      รายละเอียด
                    </button>
                    <button className="add-to-cart-button" onClick={() => addToCart(game)}>
                      + {game.price === 0 ? 'รับเกม' : 'เพิ่มลงตะกร้า'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ตะกร้าสินค้า */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2>ตะกร้าสินค้า</h2>
              <button className="close-button" onClick={() => setShowCart(false)}>×</button>
            </div>
            
            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <p>ไม่มีสินค้าในตะกร้า</p>
                <button className="continue-shopping" onClick={() => setShowCart(false)}>
                  เลือกซื้อเกมต่อ
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.title} className="cart-item-image" />
                      <div className="cart-item-info">
                        <h3>{item.title}</h3>
                        <div className="cart-item-price">
                          {item.price === 0 ? (
                            <span className="free-label">ฟรี</span>
                          ) : item.discount > 0 ? (
                            <span>{Math.round(item.price * (1 - item.discount / 100))} บาท</span>
                          ) : (
                            <span>{item.price} บาท</span>
                          )}
                        </div>
                      </div>
                      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                        ลบ
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>ยอดรวม:</span>
                    <span className="total-amount">{calculateTotal().toFixed(2)} บาท</span>
                  </div>
                  <button className="checkout-button">ชำระเงิน</button>
                  <div className="payment-methods">
                    <div className="payment-icons">
                      <span className="payment-icon">💳</span>
                      <span className="payment-icon">🏦</span>
                      <span className="payment-icon">📱</span>
                    </div>
                    <div className="payment-text">รองรับหลายวิธีการชำระเงิน</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* หน้ารายละเอียดเกม */}
      {selectedGame && (
        <div className="game-details-modal">
          <div className="game-details-content">
            <button className="close-details" onClick={closeGameDetails}>×</button>
            <div 
              className="game-details-banner" 
              style={{backgroundImage: `url('${selectedGame.banner || selectedGame.image}')`}}
            >
              <div className="banner-overlay"></div>
            </div>
            <div className="game-details-header">
              <img src={selectedGame.image} alt={selectedGame.title} className="details-image" />
              <div className="details-header-info">
                <h2>{selectedGame.title}</h2>
                <div className="details-meta">
                  <div className="details-release">วันวางจำหน่าย: {selectedGame.releaseDate || 'ไม่ระบุ'}</div>
                  <div className="details-reviews">{selectedGame.reviews?.toLocaleString() || '0'} รีวิว</div>
                </div>
                <div className="details-tags">
                  {selectedGame.tags.map(tag => (
                    <span key={tag} className="details-tag">{tag}</span>
                  ))}
                </div>
                <div className="details-rating">
                  {"★".repeat(Math.floor(selectedGame.rating))}
                  {"☆".repeat(5 - Math.floor(selectedGame.rating))}
                  <span>{selectedGame.rating}</span>
                </div>
                <div className="details-price">
                  {selectedGame.price === 0 ? (
                    <span className="free-label">ฟรี</span>
                  ) : selectedGame.discount > 0 ? (
                    <>
                      <div className="details-discount-badge">-{selectedGame.discount}%</div>
                      <span className="details-original-price">{selectedGame.price} บาท</span>
                      <span className="details-discounted-price">
                        {Math.round(selectedGame.price * (1 - selectedGame.discount / 100))} บาท
                      </span>
                    </>
                  ) : (
                    <span>{selectedGame.price} บาท</span>
                  )}
                </div>
                <button 
                  className="details-add-to-cart" 
                  onClick={() => {
                    addToCart(selectedGame);
                    closeGameDetails();
                  }}
                >
                  {selectedGame.price === 0 ? 'รับเกม' : 'เพิ่มลงตะกร้า'}
                </button>
              </div>
            </div>
            <div className="game-description">
              <h3>เกี่ยวกับเกมนี้</h3>
              <p>{selectedGame.description}</p>
              
              <div className="game-features">
                <h3>คุณสมบัติเด่น</h3>
                <ul>
                  {selectedGame.id === 1 && (
                    <>
                      <li>เกมเกษตรกรรมแนวสบายๆ ที่ผู้เล่นสามารถปลูกพืช เลี้ยงสัตว์ หาแร่ และสร้างความสัมพันธ์กับตัวละครในหมู่บ้าน</li>
                      <li>มีฤดูกาลและเทศกาลต่างๆ ให้เข้าร่วม</li>
                      <li>ระบบคราฟต์ที่ลึกซึ้งและกว้างขวาง</li>
                      <li>อัพเดทเนื้อหาใหม่อย่างต่อเนื่อง</li>
                    </>
                  )}
                  {selectedGame.id === 2 && (
                    <>
                      <li>โลกที่กว้างใหญ่และเชื่อมต่อกันอย่างซับซ้อน</li>
                      <li>บอสมากกว่า 30 ตัวที่มีรูปแบบการต่อสู้ที่ไม่ซ้ำกัน</li>
                      <li>ความท้าทายที่หลากหลายและความลับที่ซ่อนอยู่</li>
                      <li>ดนตรีประกอบที่ไพเราะและบรรยากาศที่โดดเด่น</li>
                    </>
                  )}
                  {selectedGame.id >= 3 && (
                    <>
                      <li>กราฟิกสวยงามตามสไตล์เฉพาะของเกม</li>
                      <li>เนื้อเรื่องที่น่าติดตาม</li>
                      <li>ระบบการเล่นที่ลื่นไหลและสนุกสนาน</li>
                      <li>อัพเดทเนื้อหาใหม่อย่างสม่ำเสมอ</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div className="system-requirements">
                <h3>ความต้องการของระบบ</h3>
                <div className="requirements-columns">
                  <div className="minimum-requirements">
                    <h4>ขั้นต่ำ</h4>
                    <p>OS: Windows 7 หรือใหม่กว่า</p>
                    <p>CPU: Intel Core i3-2100 / AMD FX-6300</p>
                    <p>RAM: 4GB</p>
                    <p>GPU: Intel HD 4000 / AMD Radeon R5 / NVIDIA GeForce GT 610</p>
                    <p>พื้นที่: {Math.floor(Math.random() * 5) + 2}GB</p>
                  </div>
                  <div className="recommended-requirements">
                    <h4>แนะนำ</h4>
                    <p>OS: Windows 10</p>
                    <p>CPU: Intel Core i5-4590 / AMD Ryzen 3 1300X</p>
                    <p>RAM: 8GB</p>
                    <p>GPU: NVIDIA GTX 960 / AMD Radeon R9 380</p>
                    <p>พื้นที่: {Math.floor(Math.random() * 10) + 5}GB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="store-footer">
        <div className="footer-top">
          <div className="footer-logo">
            <h2 className="footer-logo-text">KawaiiGames</h2>
            <p>แหล่งรวมเกมคุณภาพดีที่คัดสรรมาเพื่อคุณ</p>
          </div>
          <div className="footer-newsletter">
            <h3>รับข่าวสารและโปรโมชั่น</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="อีเมลของคุณ" />
              <button>สมัคร</button>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>เกี่ยวกับเรา</h3>
            <ul>
              <li>เกี่ยวกับ KawaiiGames</li>
              <li>ข่าวสาร</li>
              <li>ร่วมงานกับเรา</li>
              <li>นโยบายความเป็นส่วนตัว</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ช่วยเหลือ</h3>
            <ul>
              <li>คำถามที่พบบ่อย</li>
              <li>วิธีการสั่งซื้อ</li>
              <li>การชำระเงิน</li>
              <li>การคืนเงิน</li>
              <li>ติดต่อฝ่ายสนับสนุน</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>บริการ</h3>
            <ul>
              <li>บัญชีของฉัน</li>
              <li>สถานะคำสั่งซื้อ</li>
              <li>การอัปเดตและแพตช์</li>
              <li>โปรแกรมความภักดี</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ติดต่อเรา</h3>
            <ul>
              <li>support@kawaiigames.com</li>
              <li>โทร: 02-123-4567</li>
              <li className="social-icons">
                <span className="social-icon">📱</span>
                <span className="social-icon">📘</span>
                <span className="social-icon">📸</span>
                <span className="social-icon">🐦</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="payment-methods-footer">
            <span className="payment-icon-footer">💳</span>
            <span className="payment-icon-footer">🏦</span>
            <span className="payment-icon-footer">📱</span>
            <span className="payment-icon-footer">💸</span>
          </div>
          <div className="copyright">
            © 2023 KawaiiGames. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
