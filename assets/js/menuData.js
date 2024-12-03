const menuData = [
  {
    category: "Signature Cuisine",
    subCategories: [
      {
        subCategory: "Signature Cuisine",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Karol Bagh Aloo Tikki",
            origin: "Vegetarian",
            tagline: "Crispy and flavorful potato pattice",
            desc: "Stuffed potato pattice, topped with white peas, whipped yoghurt, and chutneys.",
            fullDesc:
              "A delightful street food favorite, with stuffed potato pattice topped with tangy chutneys and whipped yoghurt.",
            metrics: "111 Kcal | 120-150g | $6.99",
            image:
              "./assets/img/modal-images/food-menu/karol-bagh-aloo-tikki.jpg",
            chefSpecial: true,
          },
          {
            title: "Palak Patta Chaat",
            origin: "Vegetarian",
            tagline: "Crispy and flavorful spinach",
            desc: "Crispy fried spinach leaves tossed with spices, yogurt, and chutneys.",
            fullDesc:
              "A flavorful chaat with crispy fried spinach leaves, enhanced with tangy yogurt and spices.",
            metrics: "201 Kcal | 150-160g | $7.49",
            image: "./assets/img/modal-images/food-menu/palak-patta-chaat.jpg",
            chefSpecial: true,
          },
          {
            title: "Khumbh ki Galouti",
            origin: "Vegetarian",
            tagline: "Melt-in-mouth mushroom patties",
            desc: "Melt-in-mouth mushroom patties marinated with aromatic spices, garlic chutney.",
            fullDesc:
              "Deliciously spiced mushroom patties that melt in your mouth, served with a flavorful garlic chutney.",
            metrics: "300 Kcal | 250g | $8.99",
            image: "./assets/img/modal-images/food-menu/khumbh-ki-galouti.jpg",
            chefSpecial: true,
          },
          {
            title: "Truffle Malai Broccoli",
            origin: "Vegetarian",
            tagline: "Creamy and rich grilled broccoli",
            desc: "Tender broccoli in a mixture of cream and spices, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Char-grilled broccoli infused with rich cream and spices, served with cranberry and ginger relish.",
            metrics: "532 Kcal | 250-300g | $10.99",
            image:
              "./assets/img/modal-images/food-menu/truffle-malai-broccoli.jpg",
            chefSpecial: true,
          },
          {
            title: "Tandoori Russet Potatoes",
            origin: "Vegetarian",
            tagline: "Char-grilled and flavorful potatoes",
            desc: "Scooped potatoes stuffed with a mixture of spiced potatoes and dry fruits, char-grilled, garlic chutney.",
            fullDesc:
              "A delightful tandoori preparation of russet potatoes stuffed with spices and dry fruits, served with garlic chutney.",
            metrics: "389 Kcal | 250-280g | $9.49",
            image:
              "./assets/img/modal-images/food-menu/tandoori-russet-potatoes.jpg",
            chefSpecial: true,
          },
          {
            title: "Saloni Salmon Tikka",
            origin: "Seafood",
            tagline: "Grilled Alaskan Salmon",
            desc: "Alaskan Salmon steaks marinated with aromatic spices, char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Juicy Alaskan Salmon steaks, marinated with spices and char-grilled to perfection, served with lemon and black pepper chutney.",
            metrics: "730 Kcal | 250-280g | $18.99",
            image:
              "./assets/img/modal-images/food-menu/saloni-salmon-tikka.jpg",
            chefSpecial: true,
          },
          {
            title: "Tandoori Quail",
            origin: "Meats",
            tagline: "Spiced and char-grilled quail",
            desc: "Aromatic and tender Quail marinated in spicy yoghurt marinade, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Tender quail marinated in a spicy yogurt mix and char-grilled, complemented with cranberry and ginger launji.",
            metrics: "704 Kcal | 220-260g | $15.99",
            image: "./assets/img/modal-images/food-menu/tandoori-quail.jpg",
            chefSpecial: true,
          },
          {
            title: "Mutton Galouti Kebab",
            origin: "Meats",
            tagline: "Melt-in-mouth mutton kebabs",
            desc: "Melt-in-mouth goat meat patties marinated with a host of aromatic spices, garlic chutney.",
            fullDesc:
              "Deliciously soft goat meat patties spiced with a unique blend of flavors, served with garlic chutney.",
            metrics: "700 Kcal | 250-280g | $12.99",
            image:
              "./assets/img/modal-images/food-menu/mutton-galauti-kebab.jpg",
            chefSpecial: true,
          },
          {
            title: "Purani Dilli Chole Bhature",
            origin: "Vegetarian",
            tagline: "Classic chickpea and fried bread",
            desc: "A semi-dry specialty preparation of spicy chickpea served with leavened deep-fried bread.",
            fullDesc:
              "A classic dish from Old Delhi, featuring spiced chickpeas and fluffy deep-fried bread.",
            metrics: "750 Kcal | 250-300g | $8.99",
            image:
              "./assets/img/modal-images/food-menu/purani-dilli-chole-bhature.jpg",
            chefSpecial: true,
          },
          {
            title: "Almond Gucchi Korma",
            origin: "Vegetarian",
            tagline: "Aromatic and nutty stuffed mushrooms",
            desc: "Stuffed morel mushrooms in an aromatic gravy, topped with almond slivers.",
            fullDesc:
              "Tender morel mushrooms stuffed and served in a nutty almond-based aromatic korma gravy.",
            metrics: "700 Kcal | 300-350g | $14.99",
            image:
              "./assets/img/modal-images/food-menu/almond-gucchi-korma.jpg",
            chefSpecial: true,
          },
        ],
      },
      {
        subCategory: "Signature Cuisine",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Basil Paneer Rarah",
            origin: "Vegetarian",
            tagline: "Rich cottage cheese curry with basil flavor",
            desc: "Cottage cheese cubes simmered in onion-tomato masala gravy, flavored with basil.",
            fullDesc:
              "A flavorful curry of tender paneer cubes cooked in a rich onion-tomato masala, infused with fresh basil.",
            metrics: "955 Kcal | 300-350g | $13.99",
            image: "./assets/img/modal-images/food-menu/basil-paneer-rarah.jpg",
            chefSpecial: true,
          },
          {
            title: "Andhra Scallops",
            origin: "Seafood",
            tagline: "Spicy and tangy scallops",
            desc: "Exquisite Scallops served on a tangy and spicy masala.",
            fullDesc:
              "Succulent scallops served with a flavorful Andhra-style spicy masala, bursting with tangy flavors.",
            metrics: "1020 Kcal | 380-400g | $16.99",
            image: "./assets/img/modal-images/food-menu/andhra-scallops.jpg",
            chefSpecial: true,
          },
          {
            title: "Chilian Sea Bass Coconut Curry",
            origin: "Seafood",
            tagline: "Delicately simmered sea bass in coconut broth",
            desc: "Chilian Sea Bass delicately simmered in a coconut broth, tempered with mustard seeds.",
            fullDesc:
              "A delicate preparation of sea bass in a creamy coconut curry, enhanced with mustard seed tempering.",
            metrics: "1360 Kcal | 380-400g | $18.99",
            image:
              "./assets/img/modal-images/food-menu/chilian-sea-bass-coconut-curry.jpg",
            chefSpecial: true,
          },
          {
            title: "Lagan ki Bataer",
            origin: "Meats",
            tagline: "Slow-cooked quail in rich cashew gravy",
            desc: "Tender Quail slow-cooked in a rich gravy of cashew nuts and aromatic spices.",
            fullDesc:
              "Tender and aromatic quail slow-cooked in a luxurious cashew nut gravy, infused with aromatic spices.",
            metrics: "1340 Kcal | 380-400g | $17.99",
            image: "./assets/img/modal-images/food-menu/lagan-ki-bataer.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Butter Chicken",
            origin: "Meats",
            tagline: "Classic butter chicken, rich and creamy",
            desc: "Tender chicken pieces cooked in creamy tomato-based gravy, infused with aromatic spices.",
            fullDesc:
              "The all-time favorite butter chicken, featuring tender chicken pieces cooked in a rich tomato-based gravy.",
            metrics: "1240 Kcal | 380-400g | $14.99",
            image: "./assets/img/modal-images/food-menu/butter-chicken.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Tawa Chicken",
            origin: "Meats",
            tagline: "Spicy tawa-cooked chicken",
            desc: "Shredded chicken tikka pieces tossed with fresh ginger, chili, onions, and tomatoes.",
            fullDesc:
              "Flavor-packed tawa chicken, tossed with aromatic spices, ginger, and chili, giving it a fiery finish.",
            metrics: "1150 Kcal | 380-400g | $12.99",
            image: "./assets/img/modal-images/food-menu/tawa-chicken.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Bakre ke Nakhre",
            origin: "Meats",
            tagline: "Spicy and tangy mutton with minced goat meat",
            desc: "Tender mutton cooked in spicy and tangy tomato-based gravy with minced goat meat.",
            fullDesc:
              "A tangy and spicy preparation of mutton, served with minced goat meat, full of robust flavors.",
            metrics: "1420 Kcal | 380-400g | $16.99",
            image: "./assets/img/modal-images/food-menu/bakre-ke-nakhre.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Imperial Raan",
            origin: "Meats",
            tagline: "Grand slow-cooked lamb leg with a luxurious touch",
            desc: "48-hours slow-cooked leg of spring lamb, char-grilled, flambéed with dark rum, pine nuts, & 18 carat gold.",
            fullDesc:
              "A grand dish featuring slow-cooked spring lamb leg, finished with a flambé of dark rum and pine nuts, served with an elegant touch of gold.",
            metrics: "4950 Kcal | 1.5kg | $45.99",
            image: "./assets/img/modal-images/food-menu/imperial-raan.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Dal Makhani",
            origin: "Vegetarian",
            tagline: "Slow-cooked, rich, and creamy lentils",
            desc: "24 hour slow cooked black lentils, finished with fresh cream and butter.",
            fullDesc:
              "A rich and creamy preparation of black lentils, slow-cooked for 24 hours to bring out deep flavors.",
            metrics: "810 Kcal | 250-300g | $8.99",
            image: "./assets/img/modal-images/food-menu/dal-makhani.jpg",
            chefSpecial: true,
          },
        ],
      },
      {
        subCategory: "Signature Cuisine",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Morels Pulao",
            origin: "Vegetarian",
            tagline: "Fragrant pulao with stuffed morel mushrooms",
            desc: "Stuffed morel mushrooms layered with fragrant Basmati rice, served with raita.",
            fullDesc:
              "A luxurious pulao layered with aromatic Basmati rice and stuffed morel mushrooms, served with a side of raita.",
            metrics: "410 Kcal | 150-180g | $12.99",
            image: "./assets/img/modal-images/food-menu/morels-pulao.jpg",
            chefSpecial: true,
          },
          {
            title: "Dum Chicken Parda Biryani",
            origin: "Meats",
            tagline: "Flavorful chicken biryani in the Awadhi style",
            desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of chicken, served with raita.",
            fullDesc:
              "A classic Awadhi-style biryani, featuring long grain Basmati rice and tender chicken, served with refreshing raita.",
            metrics: "730 Kcal | 220-250g | $14.99",
            image:
              "./assets/img/modal-images/food-menu/dum-chicken-parda-biryani.jpg",
            chefSpecial: true,
          },
          {
            title: "Dum Mutton Parda Biryani",
            origin: "Meats",
            tagline: "Spiced mutton biryani in the Awadhi style",
            desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of goat meat, served with raita.",
            fullDesc:
              "A rich and aromatic mutton biryani cooked in the Awadhi style, served with a side of raita.",
            metrics: "850 Kcal | 220-250g | $15.99",
            image:
              "./assets/img/modal-images/food-menu/dum-mutton-parda-biryani.jpg",
            chefSpecial: true,
          },
          {
            title: "Scotch Whiskey Naan",
            origin: "Bread",
            tagline: "Flambéed with a hint of scotch whiskey",
            desc: "",
            fullDesc:
              "A unique twist on naan, flambéed with a splash of scotch whiskey, adding a smoky, rich flavor.",
            metrics: "350 Kcal | 80-100g | $5.99",
            image:
              "./assets/img/modal-images/food-menu/scotch-whiskey-naan.jpg",
            chefSpecial: true,
          },
          {
            title: "Khameeri Roti (Plain | Butter | Pistachio)",
            origin: "Bread",
            tagline: "Fluffy, leavened bread with options",
            desc: "",
            fullDesc:
              "A fluffy, leavened flatbread with the option of being plain, buttered, or topped with crushed pistachios for extra richness.",
            metrics:
              "450 Kcal (Plain), 525 Kcal (Butter), 580 Kcal (Pistachio) | 150g | $4.99",
            image:
              "./assets/img/modal-images/food-menu/khamiri-roti-pistachio.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Chicken & Cheese Kulcha",
            origin: "Bread",
            tagline: "Stuffed kulcha with chicken and cheese",
            desc: "",
            fullDesc:
              "A rich kulcha stuffed with a flavorful combination of tender chicken and melted cheese, perfect as an accompaniment or standalone dish.",
            metrics: "540 Kcal (Cheese), 525 Kcal (Chicken) | 150g | $6.99",
            image:
              "./assets/img/modal-images/food-menu/chicken-cheese-kulcha.jpg",
            chefSpecial: true,
          },
          {
            title: "Baileys Rasmalai",
            origin: "Desserts",
            tagline: "Classic rasmalai infused with Baileys",
            desc: "",
            fullDesc:
              "A unique fusion of traditional Indian rasmalai with the creamy liqueur Baileys, creating a perfect blend of flavors.",
            metrics: "450 Kcal | 120-150g | $8.99",
            image: "./assets/img/modal-images/food-menu/baileys-rasmalai.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Kulfi Falooda",
            origin: "Desserts",
            tagline: "A rich and creamy Indian dessert",
            desc: "",
            fullDesc:
              "A refreshing Indian dessert of creamy kulfi served with falooda (sweet vermicelli noodles), topped with a rich syrup.",
            metrics: "560 Kcal | 150g | $7.99",
            image: "./assets/img/modal-images/food-menu/kulfi-falooda.jpg",
            chefSpecial: true,
          },
          {
            title: "Gulkand Rabri Mousse ē Berries & Honeycomb",
            origin: "Desserts",
            tagline: "Fusion of Indian rabri and berries",
            desc: "",
            fullDesc:
              "A delightful fusion of Indian rabri infused with gulkand (rose petal jam), served with fresh berries and honeycomb for added texture and flavor.",
            metrics: "550 Kcal | 150g | $9.99",
            image:
              "./assets/img/modal-images/food-menu/gulkand-rabri-mouse.jpg",
            chefSpecial: true,
          },
          {
            title: "Custard Gulab Jamun ē Citrus Confit & Saffron Shortbread",
            origin: "Desserts",
            tagline: "A creative twist on gulab jamun",
            desc: "",
            fullDesc:
              "Traditional gulab jamun served with custard, complemented by a citrus confit and a saffron-infused shortbread for a delightful fusion dessert.",
            metrics: "480 Kcal | 120g | $8.99",
            image:
              "./assets/img/modal-images/food-menu/custard-gulab-jamun.jpg",
            chefSpecial: true,
          },
        ],
      },
    ],
  },
  {
    category: "Salads & Soups",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Mango & Avocado Kachumber Salad",
        origin: "Vegetarian",
        tagline: "A fresh and vibrant tropical salad",
        desc: "Mango, avocado, red onion, jalapeno, fresh coriander, baby arugula.",
        fullDesc:
          "A refreshing blend of ripe mango and creamy avocado, complemented by the crunch of red onion, jalapeno's heat, and fresh coriander, served on a bed of baby arugula.",
        metrics: "226 Kcal | 200-250g | $12",
        image: "./assets/img/modal-images/food-menu/mango-avocado-salad.jpg",
        chefSpecial: false,
      },
      {
        title: "Pomegranate & Quinoa Chaat Salad",
        origin: "Vegetarian",
        desc: "Steamed quinoa, pomegranate seeds, cucumber, tomato, onion, mint, coriander, crisp lettuce.",
        fullDesc:
          "This nutritious salad combines the crunch of pomegranate seeds and the lightness of quinoa with fresh vegetables and a hint of mint and coriander.",
        metrics: "136 Kcal | 200-250g | $14",
        image:
          "./assets/img/modal-images/food-menu/pomegranate-quinoa-salad.jpg",
        chefSpecial: false,
      },
      {
        title: "Asparagus & Coconut Shorba",
        origin: "Vegetarian",
        desc: "Tender asparagus and coconut broth, delicately spiced.",
        fullDesc:
          "A soothing shorba featuring tender asparagus simmered in a mildly spiced coconut broth, perfect for warming the soul.",
        metrics: "115 Kcal | 120-150g | $10",
        image:
          "./assets/img/modal-images/food-menu/asparagus-coconut-shorba.jpg",
        chefSpecial: false,
      },
      {
        title: "Smokey Tomato Shorba",
        origin: "Vegetarian",
        desc: "Char-grilled tomato broth, delicately spiced, enhanced with the freshness of coriander.",
        fullDesc:
          "A rich and flavorful shorba made from char-grilled tomatoes, delicately spiced, and finished with fresh coriander for a smoky aroma.",
        metrics: "133 Kcal | 120-150g | $9",
        image: "./assets/img/modal-images/food-menu/smokey-tomato-shorba.jpg",
        chefSpecial: false,
      },
      {
        title: "Chicken Fenugreek Shorba",
        origin: "Non-Vegetarian",
        desc: "Exquisitely spiced chicken broth, enhanced with fenugreek leaves.",
        fullDesc:
          "A hearty chicken broth infused with aromatic spices and the unique flavor of fenugreek leaves, offering a comforting start to your meal.",
        metrics: "154 Kcal | 120-150g | $12",
        image:
          "./assets/img/modal-images/food-menu/chicken-fenugreek-shorba.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Chaat",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Pani Puri (Jaljeera | Gud Imli | Pineapple)",
        origin: "Vegetarian",
        desc: "Street-style puffs stuffed with chickpeas, potatoes, and Bengal gram topped with flavored waters.",
        fullDesc:
          "A classic Indian street snack featuring crispy puris filled with a tangy mix of flavored waters, chickpeas, and potatoes, providing an explosion of taste.",
        metrics: "250 Kcal | 200-220g | $8",
        image: "./assets/img/modal-images/food-menu/pani-puri.jpg",
        chefSpecial: false,
      },
      // {
      //   title: "Purani Dilli ke Aloo Kachalu",
      //   origin: "Vegetarian",
      //   desc: "Tender potatoes, crisp fried and tossed with spices and chutneys.",
      //   fullDesc:
      //     "Crisp fried potatoes tossed in spicy chutneys and aromatic spices, offering a delightful taste of Old Delhi street food.",
      //   metrics: "185 Kcal | 180-200g | $9",
      //   image: "./assets/img/modal-images/food-menu/aloo-kachalu.jpg",
      //   chefSpecial: false,
      // },
      {
        title: "Bhalla Papdi Chaat",
        origin: "Vegetarian",
        desc: "Crispy discs of refined flour topped with potato mixture, chutneys, yoghurt and vermicelli.",
        fullDesc:
          "Crispy papdi topped with a savory potato mixture, cool yogurt, tangy chutneys, and a sprinkle of vermicelli for added crunch.",
        metrics: "242 Kcal | 150-180g | $8",
        image: "./assets/img/modal-images/food-menu/papdi-chaat.jpg",
        chefSpecial: false,
      },
      {
        title: "Karol Bagh Aloo Tikki",
        origin: "Vegetarian",
        desc: "Stuffed potato pattice, topped with white peas, whipped yoghurt, and chutneys.",
        fullDesc:
          "Crispy stuffed potato patties topped with white peas, a dollop of whipped yogurt, and a drizzle of tangy chutneys.",
        metrics: "111 Kcal | 120-150g | $7",
        image: "./assets/img/modal-images/food-menu/karol-bagh-aloo-tikki.jpg",
        chefSpecial: true,
      },
      {
        title: "Bhalla Papdi Chaat",
        origin: "Vegetarian",
        desc: "Black lentil dumplings soaked in sweetened curd with chutneys, served with crisp discs.",
        fullDesc:
          "Soft black lentil dumplings soaked in sweetened yogurt, topped with tangy chutneys and served with crispy discs for texture.",
        metrics: "246 Kcal | 150-180g | $9",
        image: "./assets/img/modal-images/food-menu/bhalla-papdi-chaat.jpg",
        chefSpecial: false,
      },
      {
        title: "Samosa Platter",
        origin: "Vegetarian",
        desc: "Crisp fried triangular pastry, stuffed with Cottage Cheese | Potato | Peas | Corn mixtures.",
        fullDesc:
          "A delightful platter of crispy samosas filled with a savory mix of cottage cheese, potatoes, peas, and corn, served with chutney.",
        metrics: "320 Kcal | 160g | $10",
        image: "./assets/img/modal-images/food-menu/samosa-platter.jpg",
        chefSpecial: false,
      },
      {
        title: "Palak Patta Chaat",
        origin: "Vegetarian",
        desc: "Crispy fried spinach leaves tossed with spices, yogurt, and chutneys.",
        fullDesc:
          "Crispy fried spinach leaves drizzled with yogurt and spicy chutneys, creating a delightful contrast of flavors.",
        metrics: "201 Kcal | 150-160g | $9",
        image: "./assets/img/modal-images/food-menu/palak-patta-chaat.jpg",
        chefSpecial: true,
      },
      {
        title: "Basket Chaat",
        origin: "Vegetarian",
        desc: "Potato basket topped with potato pattice, yoghurt, chutneys, and sprouts.",
        fullDesc:
          "A unique potato basket filled with a mix of potato patties, yogurt, tangy chutneys, and topped with fresh sprouts for a burst of flavor.",
        metrics: "399 Kcal | 150-180g | $10",
        image: "./assets/img/modal-images/food-menu/basket-chaat.jpg",
        chefSpecial: false,
      },
      {
        title: "Samosa Chaat",
        origin: "Vegetarian",
        desc: "Potato samosa topped with chickpeas and chutneys.",
        fullDesc:
          "A crispy potato samosa topped with savory chickpeas and a drizzle of tangy chutneys, offering a delightful combination of flavors.",
        metrics: "280 Kcal | 150-180g | $9",
        image: "./assets/img/modal-images/food-menu/samosa-chaat.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Appetizers",
    subCategories: [
      {
        subCategory: "Appetizers",
        type: "Vegetarian",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Khumbh ki Galouti",
            origin: "Vegetarian",
            desc: "Melt-in-mouth mushroom patties marinated with a host of aromatic spices, garlic chutney.",
            fullDesc:
              "These melt-in-mouth mushroom patties are marinated with a blend of aromatic spices and served with a flavorful garlic chutney.",
            metrics: "300 Kcal | 250g | $12",
            image: "./assets/img/modal-images/food-menu/khumbh-ki-galouti.jpg",
            chefSpecial: true,
          },
          {
            title: "Beetroot Shammi Labgeer",
            origin: "Vegetarian",
            desc: "Melt-in-mouth beetroot patties flavored with aromatic spices, lemon & black pepper chutney.",
            fullDesc:
              "Delicately spiced beetroot patties served with a refreshing lemon and black pepper chutney that enhances the earthy flavors.",
            metrics: "400 Kcal | 250g | $10",
            image: "./assets/img/modal-images/food-menu/beetroot-shammi.jpg",
            chefSpecial: false,
          },
          {
            title: "Green Pea Mint Kebab",
            origin: "Vegetarian",
            desc: "Ground green pea patties enhanced with fresh mint, cranberry & ginger launji.",
            fullDesc:
              "Light and flavorful ground green pea patties infused with fresh mint, served with a tangy cranberry and ginger launji.",
            metrics: "437 Kcal | 250g | $9",
            image:
              "./assets/img/modal-images/food-menu/green-pea-mint-kebab.jpg",
            chefSpecial: false,
          },
          {
            title: "Bullet Kebab",
            origin: "Vegetarian",
            desc: "Spinach croquettes stuffed with cheese, garlic chutney.",
            fullDesc:
              "Crispy spinach croquettes filled with a cheesy center, served with garlic chutney for a delightful combination.",
            metrics: "319 Kcal | 250g | $10",
            image: "./assets/img/modal-images/food-menu/bullet-kebab.jpg",
            chefSpecial: false,
          },
          {
            title: "Chinatown Chili Cottage Cheese",
            origin: "Vegetarian",
            desc: "Stir-fried cottage cheese cubes tossed with chilies, bell peppers, and onions in a spicy sauce.",
            fullDesc:
              "Sautéed cottage cheese cubes combined with bell peppers and chilies in a spicy sauce, offering a delightful flavor.",
            metrics: "905 Kcal | 250-300g | $12",
            image:
              "./assets/img/modal-images/food-menu/chinatown-chili-cottage-cheese.jpg",
            chefSpecial: false,
          },
          {
            title: "Truffle Malai Broccoli",
            origin: "Vegetarian",
            desc: "Tender broccoli in a mixture of cream and spices, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Tender broccoli cooked in a creamy mixture, char-grilled to perfection, served with a cranberry and ginger sauce for a gourmet touch.",
            metrics: "532 Kcal | 250-300g | $14",
            image:
              "./assets/img/modal-images/food-menu/truffle-malai-broccoli.jpg",
            chefSpecial: true,
          },
          {
            title: "Tandoori Cottage Cheese",
            origin: "Vegetarian",
            desc: "Cottage cheese, capsicum, and onions marinated in yoghurt and char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Marinated cottage cheese, capsicum, and onions char-grilled to perfection, served with a zesty lemon and black pepper chutney.",
            metrics: "864 Kcal | 250-280g | $14",
            image:
              "./assets/img/modal-images/food-menu/tandoori-cottage-cheese.jpg",
            chefSpecial: false,
          },
          {
            title: "Tandoori Russet Potatoes",
            origin: "Vegetarian",
            desc: "Scooped potatoes stuffed with a mixture of spiced potatoes and dry fruits, char-grilled, garlic chutney.",
            fullDesc:
              "Scooped russet potatoes stuffed with a flavorful mixture of spiced potatoes and dry fruits, char-grilled for a smoky finish.",
            metrics: "389 Kcal | 250-280g | $10",
            image:
              "./assets/img/modal-images/food-menu/tandoori-russet-potatoes.jpg",
            chefSpecial: true,
          },
          {
            title: "Jackfruit Tikka",
            origin: "Vegetarian",
            desc: "Jackfruit marinated with brown onion, yoghurt, and spices, char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Marinated jackfruit cooked on a grill, offering a unique taste with a hint of lemon and black pepper chutney.",
            metrics: "289 Kcal | 250-280g | $10",
            image: "./assets/img/modal-images/food-menu/jackfruit-tikka.jpg",
            chefSpecial: false,
          },
          {
            title: "Garden Grill Seekh Kebab",
            origin: "Vegetarian",
            desc: "Minced vegetables marinated and skewered, char-grilled, pineapple & green chili chutney.",
            fullDesc:
              "Grilled minced vegetable kebabs, skewered and served with a sweet and spicy pineapple and green chili chutney.",
            metrics: "425 Kcal | 250-280g | $12",
            image:
              "./assets/img/modal-images/food-menu/garden-grill-seekh-kebab.jpg",
            chefSpecial: false,
          },
          {
            title: "Tandoori Salad",
            origin: "Vegetarian",
            desc: "Vegetables & stone fruits marinated with tandoori spices, char-grilled, garlic chutney.",
            fullDesc:
              "A vibrant salad with char-grilled vegetables and stone fruits marinated in tandoori spices, paired with a zesty garlic chutney.",
            metrics: "275 Kcal | 250-280g | $10",
            image: "./assets/img/modal-images/food-menu/tandoori-salad.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Appetizers",
        type: "Seafood",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Tandoori Prawns",
            origin: "Non-Vegetarian",
            desc: "Freshwater jumbo prawns marinated with spices, char-grilled, pineapple & green chili chutney.",
            fullDesc:
              "Jumbo freshwater prawns marinated in a blend of aromatic spices and char-grilled, served with a refreshing pineapple and green chili chutney.",
            metrics: "485 Kcal | 280-300g | $18",
            image: "./assets/img/modal-images/food-menu/tandoori-prawns.jpg",
            chefSpecial: false,
          },
          {
            title: "Fish Tikka",
            origin: "Non-Vegetarian",
            desc: "Fish steaks, marinated with carom seeds, yoghurt and spices, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Delicious fish steaks marinated with aromatic carom seeds and yogurt, char-grilled to perfection and served with a tangy cranberry and ginger chutney.",
            metrics: "545 Kcal | 250-280g | $16",
            image: "./assets/img/modal-images/food-menu/fish-tikka.jpg",
            chefSpecial: false,
          },
          {
            title: "Saloni Salmon Tikka",
            origin: "Non-Vegetarian",
            desc: "Alaskan salmon steaks marinated with aromatic spices, char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Rich Alaskan salmon steaks marinated in a blend of spices, char-grilled and served with a zesty lemon and black pepper chutney for a delightful experience.",
            metrics: "730 Kcal | 250-280g | $20",
            image:
              "./assets/img/modal-images/food-menu/saloni-salmon-tikka.jpg",
            chefSpecial: true,
          },
          {
            title: "Tandoori Pomfret",
            origin: "Non-Vegetarian",
            desc: "Whole silver pomfret, marinated with spices, char-grilled, garlic chutney.",
            fullDesc:
              "Whole silver pomfret marinated in spices and char-grilled to perfection, served with a flavorful garlic chutney.",
            metrics: "459 Kcal | 220g per piece | $22",
            image: "./assets/img/modal-images/food-menu/tandoori-pomfret.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Appetizers",
        type: "Poultry",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Tandoori Quail",
            origin: "Non-Vegetarian",
            desc: "Aromatic and tender quail marinated in spicy yoghurt marinade, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Tender quail marinated in a spicy yogurt marinade, char-grilled to perfection and served with a tangy cranberry and ginger chutney.",
            metrics: "704 Kcal | 220-260g | $18",
            image: "./assets/img/modal-images/food-menu/tandoori-quail.jpg",
            chefSpecial: true,
          },
          {
            title: "Chicken Tikka",
            origin: "Non-Vegetarian",
            desc: "Morsels of chicken marinated in a spicy yoghurt marinade, char-grilled, pineapple & green chili chutney.",
            fullDesc:
              "Succulent morsels of chicken marinated in a spicy yogurt marinade and char-grilled, served with a refreshing pineapple and green chili chutney.",
            metrics: "704 Kcal | 260-280g | $16",
            image: "./assets/img/modal-images/food-menu/chicken-tikka.jpg",
            chefSpecial: false,
          },
          {
            title: "Chicken Malai Tikka",
            origin: "Non-Vegetarian",
            desc: "Creamy and tender chicken kebabs marinated in a mixture of cream and spices, char-grilled, garlic chutney.",
            fullDesc:
              "Creamy chicken kebabs marinated in rich cream and spices, char-grilled and served with a flavorful garlic chutney.",
            metrics: "829 Kcal | 260-280g | $16",
            image:
              "./assets/img/modal-images/food-menu/chicken-malai-tikka.jpg",
            chefSpecial: false,
          },
          {
            title: "Reshmi Seekh Kebab",
            origin: "Non-Vegetarian",
            desc: "Minced chicken kebabs marinated and skewered, char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Juicy minced chicken kebabs marinated with spices, skewered, char-grilled, and served with a zesty lemon and black pepper chutney.",
            metrics: "1025 Kcal | 260-280g | $18",
            image: "./assets/img/modal-images/food-menu/reshmi-seekh-kebab.jpg",
            chefSpecial: false,
          },
          {
            title: "Tandoori Chicken (Half | Full)",
            origin: "Non-Vegetarian",
            desc: "Whole spring chicken marinated in spicy yoghurt marinade, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "A whole spring chicken marinated in a spicy yogurt marinade, char-grilled to perfection, and served with tangy cranberry and ginger chutney.",
            metrics:
              "869 Kcal (Half) | 1838 Kcal (Full) | $32 (Half) | $60 (Full)",
            image:
              "./assets/img/modal-images/food-menu/tandoori-chicken-(full).jpg",
            chefSpecial: false,
          },
          {
            title: "Chinatown Chili Chicken",
            origin: "Non-Vegetarian",
            desc: "Stir-fried chicken cubes tossed with chilies, bell peppers, and onions in a spicy sauce.",
            fullDesc:
              "Tender chicken cubes stir-fried with fresh chilies, bell peppers, and onions in a flavorful spicy sauce.",
            metrics: "901 Kcal | 250-300g | $16",
            image:
              "./assets/img/modal-images/food-menu/chinatown-chili-chicken.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Appetizers",
        type: "Meats",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Mutton Galouti Kebab",
            origin: "Non-Vegetarian",
            desc: "Melt-in-mouth goat meat patties marinated with a host of aromatic spices, garlic chutney.",
            fullDesc:
              "Succulent goat meat patties that melt in your mouth, infused with aromatic spices and served with garlic chutney.",
            metrics: "700 Kcal | 250-280g | $18",
            image:
              "./assets/img/modal-images/food-menu/mutton-galouti-kebab.jpg",
            chefSpecial: true,
          },
          {
            title: "Mutton Seekh Gilafi",
            origin: "Non-Vegetarian",
            desc: "Minced goat meat skewered and enveloped in peppers, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Minced goat meat skewered with colorful peppers, char-grilled, and served with a zesty cranberry and ginger chutney.",
            metrics: "800 Kcal | 250-280g | $20",
            image:
              "./assets/img/modal-images/food-menu/mutton-seekh-gilafi.jpg",
            chefSpecial: false,
          },
          {
            title: "Tandoori Lamb Chops",
            origin: "Non-Vegetarian",
            desc: "Flavorful and marinated lamb chops char-grilled to perfection, pineapple & green chili chutney.",
            fullDesc:
              "Juicy lamb chops marinated in aromatic spices, char-grilled to perfection, and served with a refreshing pineapple and green chili chutney.",
            metrics: "900 Kcal | 300-350g | $24",
            image:
              "./assets/img/modal-images/food-menu/tandoori-lamb-chops.jpg",
            chefSpecial: false,
          },
        ],
      },
    ],
  },
  {
    category: "Combos",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Purani Dilli Chole Bhature",
        origin: "Vegetarian",
        desc: "A semi-dry specialty preparation of spicy chickpea served with leavened deep-fried bread.",
        fullDesc:
          "A classic combination of spicy chickpeas served with fluffy bhature, a popular dish from Old Delhi.",
        metrics: "750 Kcal | 250-300g | $14",
        image:
          "./assets/img/modal-images/food-menu/purani-dilli-chole-bhature.jpg",
        chefSpecial: true,
      },
      {
        title: "Amritsari Patties Kulcha Chana",
        origin: "Vegetarian",
        desc: "Crisp flaky flatbread stuffed with an array of vegetables, served with chickpea curry and tamarind chutney.",
        fullDesc:
          "Flaky Amritsari kulcha stuffed with vegetables, accompanied by a rich chickpea curry and tangy tamarind chutney for dipping.",
        metrics: "550 Kcal | 250-300g | $15",
        image:
          "./assets/img/modal-images/food-menu/amritsari-patties-kulcha-chana.jpg",
        chefSpecial: false,
      },
      {
        title: "Sarson Ka Saag, Makke ki Roti",
        origin: "Vegetarian",
        desc: "Punjabi specialty of mustard greens served with cornmeal flatbread, ghee, and jaggery.",
        fullDesc:
          "A traditional dish of mustard greens paired with freshly made makke ki roti, served with a dollop of ghee and a touch of jaggery for sweetness.",
        metrics: "500 Kcal | 250-300g | $12",
        image:
          "./assets/img/modal-images/food-menu/sarson-ka-saag-makke-ki-roti.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Entrées",
    subCategories: [
      {
        subCategory: "Entrées",
        type: "Vegiterian",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Almond Gucchi Korma",
            origin: "Vegetarian",
            desc: "Stuffed morel mushrooms in an aromatic gravy, topped with almond slivers.",
            fullDesc:
              "Morel mushrooms stuffed with a rich and aromatic gravy, topped with slivers of almonds for an added crunch.",
            metrics: "700 Kcal | 300-350g | $20",
            image:
              "./assets/img/modal-images/food-menu/almond-gucchi-korma.jpg",
            chefSpecial: true,
          },
          {
            title: "Basil Paneer Rarah",
            origin: "Vegetarian",
            desc: "Cottage cheese cubes simmered in onion-tomato masala gravy, flavored with basil.",
            fullDesc:
              "Tender cottage cheese cubes cooked in a savory onion-tomato masala, infused with aromatic basil for a delightful flavor.",
            metrics: "955 Kcal | 300-350g | $18",
            image: "./assets/img/modal-images/food-menu/basil-paneer-rarah.jpg",
            chefSpecial: true,
          },
          {
            title: "Paneer Tikka Masala",
            origin: "Vegetarian",
            desc: "Grilled cottage cheese tikka in creamy tomato-based gravy, infused with aromatic spices.",
            fullDesc:
              "Grilled paneer tikka pieces served in a rich and creamy tomato-based gravy, laced with aromatic spices for a delightful experience.",
            metrics: "1050 Kcal | 300-350g | $20",
            image:
              "./assets/img/modal-images/food-menu/paneer-tikka-masala.jpg",
            chefSpecial: false,
          },
          {
            title: "Paneer Khurchan",
            origin: "Vegetarian",
            desc: "Spiced cottage cheese cooked with onions, tomatoes, bell peppers, and aromatic spices.",
            fullDesc:
              "A hearty dish of cottage cheese sautéed with onions, tomatoes, and bell peppers, seasoned with aromatic spices for a flavorful finish.",
            metrics: "930 Kcal | 300-350g | $16",
            image: "./assets/img/modal-images/food-menu/paneer-khurchan.jpg",
            chefSpecial: false,
          },
          {
            title: "Palak Paneer",
            origin: "Vegetarian",
            desc: "Cottage cheese cooked in luscious green gravy seasoned with spices.",
            fullDesc:
              "Soft paneer cubes cooked in a creamy spinach gravy, perfectly seasoned with spices for a rich flavor.",
            metrics: "1000 Kcal | 300-350g | $15",
            image: "./assets/img/modal-images/food-menu/palak-paneer.jpg",
            chefSpecial: false,
          },
          {
            title: "Shahi Paneer",
            origin: "Vegetarian",
            desc: "Cottage cheese simmered in rich and creamy nuts and yoghurt gravy with aromatic spices.",
            fullDesc:
              "Luxurious shahi paneer cooked in a rich nuts and yogurt gravy, delicately spiced for an exquisite flavor.",
            metrics: "1250 Kcal | 300-350g | $22",
            image: "./assets/img/modal-images/food-menu/shahi-paneer.jpg",
            chefSpecial: false,
          },
          {
            title: "Malai Kofta",
            origin: "Vegetarian",
            desc: "Deep-fried potato and cottage cheese dumplings served in a creamy nuts and yoghurt gravy.",
            fullDesc:
              "Deliciously creamy malai kofta made with deep-fried potato and cottage cheese dumplings in a rich and nutty gravy.",
            metrics: "1100 Kcal | 300-350g | $20",
            image: "./assets/img/modal-images/food-menu/malai-kofta.jpg",
            chefSpecial: false,
          },
          {
            title: "Kaju Methi Malai Matar",
            origin: "Vegetarian",
            desc: "Fenugreek leaves and green peas simmered in creamy nuts gravy with cashew nuts and aromatic spices.",
            fullDesc:
              "A delightful dish of fenugreek leaves and green peas cooked in a rich, creamy cashew gravy, seasoned with aromatic spices.",
            metrics: "960 Kcal | 300-350g | $18",
            image:
              "./assets/img/modal-images/food-menu/kaju-methi-malai-matar.jpg",
            chefSpecial: false,
          },
          {
            title: "Dum Aloo Kashmiri",
            origin: "Vegetarian",
            desc: "Stuffed potatoes cooked in spicy and aromatic red gravy.",
            fullDesc:
              "Baby potatoes stuffed with spices and cooked in a rich, aromatic red gravy, offering a taste of Kashmiri cuisine.",
            metrics: "920 Kcal | 300-350g | $15",
            image: "./assets/img/modal-images/food-menu/dum-aloo-kashmiri.jpg",
            chefSpecial: false,
          },
          {
            title: "Charcoal Roasted Baingan Bharta",
            origin: "Vegetarian",
            desc: "Roasted and mashed eggplant cooked with tomatoes, onions, and spices.",
            fullDesc:
              "Charcoal-roasted eggplant mashed and cooked with a flavorful blend of tomatoes, onions, and spices for a smoky taste.",
            metrics: "310 Kcal | 300g | $12",
            image:
              "./assets/img/modal-images/food-menu/charcoal-roasted-baingan-bharta.jpg",
            chefSpecial: false,
          },
          {
            title: "Cauliflower Guncha-wa-Keema",
            origin: "Vegetarian",
            desc: "A delicate preparation of tender cauliflower florets and bell peppers, tossed in tomatoes and fenugreek.",
            fullDesc:
              "A delicate preparation of tender caulilower florets and bell peppers, tossed in tomatoes and fenugreek",
            metrics: "465 Kcal | 300g | $12",
            image:
              "./assets/img/modal-images/food-menu/dry-spices-aloo-gobhi.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Entrées",
        type: "Seafood",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Andhra Scallops",
            origin: "Non-Vegetarian",
            desc: "Exquisite scallops served on a tangy and spicy masala.",
            fullDesc:
              "Tender and juicy scallops perfectly cooked and served on a bed of tangy and spicy masala, creating a delightful burst of flavor.",
            metrics: "1020 Kcal | 380-400g | $24",
            image: "./assets/img/modal-images/food-menu/andhra-scallops.jpg",
            chefSpecial: true,
          },
          {
            title: "Kadhai Prawns",
            origin: "Non-Vegetarian",
            desc: "Freshwater prawns tossed with tomatoes, capsicum and dry spices, tempered with ginger, green chilies.",
            fullDesc:
              "Succulent freshwater prawns stir-fried with vibrant tomatoes and capsicum, seasoned with aromatic dry spices and tempered with ginger and green chilies.",
            metrics: "840 Kcal | 380-400g | $20",
            image: "./assets/img/modal-images/food-menu/kadhai-prawns.jpg",
            chefSpecial: false,
          },
          {
            title: "Chilian Sea Bass Coconut Curry",
            origin: "Non-Vegetarian",
            desc: "Chilian Sea Bass delicately simmered in a coconut broth, tempered with mustard seeds.",
            fullDesc:
              "Delicate Chilian Sea Bass cooked to perfection in a creamy coconut broth, enhanced with the richness of mustard seeds, offering a comforting and flavorful dish.",
            metrics: "1360 Kcal | 380-400g | $22",
            image:
              "./assets/img/modal-images/food-menu/chilian-sea-bass-coconut-curry.jpg",
            chefSpecial: true,
          },
        ],
      },
      {
        subCategory: "Entrées",
        type: "Poultry",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Lagan ki Bataer",
            origin: "Non-Vegetarian",
            desc: "Tender quail slow-cooked in a rich gravy of cashew nuts and aromatic spices.",
            fullDesc:
              "Succulent quail slow-cooked to perfection in a rich and creamy gravy made with cashew nuts and aromatic spices, delivering a luxurious flavor.",
            metrics: "1340 Kcal | 380-400g | $22",
            image: "./assets/img/modal-images/food-menu/lagan-ki-bataer.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Butter Chicken",
            origin: "Non-Vegetarian",
            desc: "Tender chicken pieces cooked in creamy tomato-based gravy, infused with aromatic spices.",
            fullDesc:
              "Juicy chicken pieces simmered in a velvety creamy tomato-based gravy, enriched with a blend of aromatic spices for a rich, indulgent dish.",
            metrics: "1240 Kcal | 380-400g | $18",
            image:
              "./assets/img/modal-images/food-menu/delhi-lounge-butter-chicken.jpg",
            chefSpecial: true,
          },
          {
            title: "Chicken Tikka Masala",
            origin: "Non-Vegetarian",
            desc: "Grilled chicken tikka pieces simmered in a rich tomato and onion gravy.",
            fullDesc:
              "Marinated grilled chicken tikka cooked in a rich and flavorful tomato and onion gravy, a classic Indian dish that packs a punch.",
            metrics: "1320 Kcal | 380-400g | $20",
            image:
              "./assets/img/modal-images/food-menu/chicken-tikka-masala.jpg",
            chefSpecial: false,
          },
          {
            title: "Chicken Khurchan",
            origin: "Non-Vegetarian",
            desc: "Char-grilled chicken pieces cooked with onions, tomatoes, bell peppers, and aromatic spices.",
            fullDesc:
              "Char-grilled chicken pieces sautéed with onions, tomatoes, and bell peppers, seasoned with aromatic spices for a tantalizing flavor.",
            metrics: "1190 Kcal | 380-400g | $16",
            image: "./assets/img/modal-images/food-menu/chicken-khurchan.jpg",
            chefSpecial: false,
          },
          {
            title: "Kali Mirch Chicken",
            origin: "Non-Vegetarian",
            desc: "Grilled chicken malai pieces simmered in creamy nuts gravy, enhanced with black pepper.",
            fullDesc:
              "Tender grilled chicken in a creamy nut gravy, perfectly seasoned with black pepper for an exquisite taste experience.",
            metrics: "1210 Kcal | 380-400g | $20",
            image: "./assets/img/modal-images/food-menu/kali-mirch-chicken.jpg",
            chefSpecial: false,
          },
          {
            title: "Korma Chicken",
            origin: "Non-Vegetarian",
            desc: "Choicest cuts of chicken simmered in aromatic brown onion gravy.",
            fullDesc:
              "Delicious chicken cuts slow-cooked in a rich brown onion gravy, infused with a blend of aromatic spices for a comforting dish.",
            metrics: "1620 Kcal | 380-400g | $22",
            image: "./assets/img/modal-images/food-menu/korma-chicken.jpg",
            chefSpecial: false,
          },
          {
            title: "Saag Chicken",
            origin: "Non-Vegetarian",
            desc: "Tender chicken pieces cooked in luscious green gravy delicately seasoned with spices.",
            fullDesc:
              "Tender chicken pieces simmered in a creamy green gravy made with spinach and spices, offering a rich and nutritious flavor.",
            metrics: "1150 Kcal | 380-400g | $18",
            image: "./assets/img/modal-images/food-menu/saag-chicken.jpg",
            chefSpecial: false,
          },
          {
            title: "The Delhi Lounge Tawa Chicken",
            origin: "Non-Vegetarian",
            desc: "Shredded chicken tikka pieces tossed with fresh ginger, chili, onions, and tomatoes.",
            fullDesc:
              "Shredded chicken tikka sautéed with fresh ginger, chilies, onions, and tomatoes, delivering a burst of flavor in every bite.",
            metrics: "1150 Kcal | 380-400g | $18",
            image:
              "./assets/img/modal-images/food-menu/delhi-lounge-tawa-chicken.jpg",
            chefSpecial: true,
          },
        ],
      },
      {
        subCategory: "Entrées",
        type: "Meats",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Tawa Masala Seekh Kebab",
            origin: "Non-Vegetarian",
            desc: "Luscious goat seekh kebab tossed in spicy masala gravy.",
            fullDesc:
              "Succulent goat seekh kebabs tossed in a spicy masala gravy, offering a perfect blend of flavors and textures.",
            metrics: "1220 Kcal | 380-400g | $20",
            image:
              "./assets/img/modal-images/food-menu/tawa-masala-seekh-kebab.jpg",
            chefSpecial: false,
          },
          {
            title: "Mutton Korma",
            origin: "Non-Vegetarian",
            desc: "Choicest cuts of goat simmered in aromatic brown onion gravy.",
            fullDesc:
              "Tender cuts of goat meat slowly cooked in a rich brown onion gravy, infused with aromatic spices for a flavorful experience.",
            metrics: "2020 Kcal | 380-400g | $24",
            image: "./assets/img/modal-images/food-menu/mutton-korma.jpg",
            chefSpecial: false,
          },
          {
            title: "Mutton Rogan Josh",
            origin: "Non-Vegetarian",
            desc: "Slow-cooked lamb curry with a flavorful blend of aromatic Kashmiri spices and yogurt.",
            fullDesc:
              "A classic lamb curry made with tender pieces of mutton, slow-cooked with aromatic Kashmiri spices and yogurt for a rich flavor.",
            metrics: "1440 Kcal | 380-400g | $22",
            image: "./assets/img/modal-images/food-menu/mutton-rogan-josh.jpg",
            chefSpecial: false,
          },
          {
            title: "Goat Shank Nehari",
            origin: "Non-Vegetarian",
            desc: "Slow-cooked and spiced goat shank stew, from the royal kitchens of Awadh.",
            fullDesc:
              "A traditional Awadhi stew made with tender goat shank, slow-cooked with aromatic spices, offering a melt-in-your-mouth experience.",
            metrics: "1305 Kcal | 380-400g | $24",
            image: "./assets/img/modal-images/food-menu/goat-shank-nehari.jpg",
            chefSpecial: false,
          },
          {
            title: "The Delhi Lounge Bakre ke Nakhre",
            origin: "Non-Vegetarian",
            desc: "Tender mutton cooked in spicy and tangy tomato-based gravy with minced goat meat.",
            fullDesc:
              "Succulent pieces of mutton cooked in a spicy and tangy tomato gravy, complemented with minced goat meat for added richness.",
            metrics: "1420 Kcal | 380-400g | $22",
            image: "./assets/img/modal-images/food-menu/bakre-ke-nakhre.jpg",
            chefSpecial: true,
          },
          {
            title: "The Delhi Lounge Imperial Raan",
            origin: "Non-Vegetarian",
            desc: "48-hours slow-cooked leg of spring lamb, char-grilled, flambéed with dark rum, pine nuts, & 18-carat gold.",
            fullDesc:
              "An exquisite dish featuring a leg of spring lamb that is slow-cooked for 48 hours, char-grilled, and flambéed with dark rum and garnished with pine nuts and edible gold for a luxurious touch.",
            metrics: "4950 Kcal | 1500g | $150",
            image: "./assets/img/modal-images/food-menu/imperial-raan.jpg",
            chefSpecial: true,
          },
        ],
      },
    ],
  },
  {
    category: "Lentils & Rice",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Dal Tadka",
        origin: "Vegetarian",
        desc: "Moong & masoor lentils cooked with turmeric, tempered with ghee, cumin, and asafetida.",
        fullDesc:
          "A comforting dish of moong and masoor lentils cooked with turmeric and tempered with aromatic ghee, cumin, and asafetida, creating a flavorful dal.",
        metrics: "560 Kcal | 220-250g | $10",
        image: "./assets/img/modal-images/food-menu/dal-tadka.jpg",
        chefSpecial: false,
      },
      {
        title: "The Delhi Lounge Dal Makhani",
        origin: "Vegetarian",
        desc: "24-hour slow cooked black lentils, finished with fresh cream and butter.",
        fullDesc:
          "Rich and creamy black lentils slow-cooked for 24 hours, finished with a generous amount of fresh cream and butter for an indulgent taste.",
        metrics: "810 Kcal | 250-300g | $14",
        image:
          "./assets/img/modal-images/food-menu/delhi-lounge-dal-makhani.jpg",
        chefSpecial: true,
      },
      {
        title: "Steamed Basmati Rice",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Fluffy and aromatic steamed basmati rice, a perfect accompaniment to curries and dals.",
        metrics: "130 Kcal | 80-100g | $5",
        image: "./assets/img/modal-images/food-menu/steamed-basmati-rice.jpg",
        chefSpecial: false,
      },
      {
        title: "Cumin Coriander Rice",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Fragrant basmati rice cooked with cumin and coriander, adding a delightful flavor to your meal.",
        metrics: "150 Kcal | 80-100g | $6",
        image: "./assets/img/modal-images/food-menu/cumin-coriander-rice.jpg",
        chefSpecial: false,
      },
      {
        title: "Morels Pulao",
        origin: "Vegetarian",
        desc: "Stuffed morel mushrooms layered with fragrant Basmati rice, served with raita.",
        fullDesc:
          "A fragrant pulao made with basmati rice and stuffed morel mushrooms, served with cooling raita for a perfect balance.",
        metrics: "410 Kcal | 150-180g | $16",
        image: "./assets/img/modal-images/food-menu/morels-pulao.jpg",
        chefSpecial: true,
      },
      {
        title: "Dum Jackfruit Parda Biryani",
        origin: "Vegetarian",
        desc: "Spiced jackfruit layered with fragrant Basmati rice, served with raita.",
        fullDesc:
          "A unique biryani made with spiced jackfruit layered between fragrant basmati rice, served with refreshing raita.",
        metrics: "450 Kcal | 220-250g | $18",
        image:
          "./assets/img/modal-images/food-menu/dum-jackfruit-parda-biryani.jpg",
        chefSpecial: false,
      },
      {
        title: "Dum Chicken Parda Biryani",
        origin: "Non-Vegetarian",
        desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of chicken, served with raita.",
        fullDesc:
          "An aromatic dum biryani with long-grain basmati rice layered with tender chicken pieces, served with raita for added flavor.",
        metrics: "730 Kcal | 220-250g | $22",
        image:
          "./assets/img/modal-images/food-menu/dum-chicken-parda-biryani.jpg",
        chefSpecial: true,
      },
      {
        title: "Dum Mutton Parda Biryani",
        origin: "Non-Vegetarian",
        desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of goat meat, served with raita.",
        fullDesc:
          "A flavorful dum biryani made with long-grain basmati rice layered with succulent goat meat, served with a side of raita.",
        metrics: "850 Kcal | 220-250g | $24",
        image:
          "./assets/img/modal-images/food-menu/dum-mutton-parda-biryani.jpg",
        chefSpecial: true,
      },
    ],
  },
  {
    category: "Breads",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Tandoori Roti (Plain | Butter)",
        origin: "Vegetarian",
        desc: "Traditional Indian unleavened bread baked in a tandoor.",
        fullDesc:
          "Soft and warm tandoori roti, served plain or brushed with butter for an extra touch of richness.",
        metrics: "180 Kcal (Plain) | 255 Kcal (Butter) | 60g | $3",
        image: "./assets/img/modal-images/food-menu/butter-tandoori-roti.jpg",
        chefSpecial: false,
      },
      {
        title: "Missi Roti (Plain | Butter)",
        origin: "Vegetarian",
        desc: "Flavored Indian bread made from a mixture of whole wheat flour and gram flour.",
        fullDesc:
          "Nutritious missi roti made from a blend of whole wheat and gram flour, served plain or with butter for a delightful taste.",
        metrics: "150 Kcal (Plain) | 225 Kcal (Butter) | 45-50g | $3",
        image: "./assets/img/modal-images/food-menu/missi-roti.jpg",
        chefSpecial: false,
      },
      {
        title: "Laccha Paratha (Plain | Butter | Pudina | Mirchi)",
        origin: "Vegetarian",
        desc: "Layered flatbread cooked on a tawa, crispy and flaky.",
        fullDesc:
          "Flaky and crispy laccha paratha, layered and cooked on a tawa, available in plain, butter, pudina, or mirchi flavors.",
        metrics: "360 Kcal (Plain) | 435 Kcal (Butter) | 100-120g | $4",
        image: "./assets/img/modal-images/food-menu/butter-laccha-paratha.jpg",
        chefSpecial: false,
      },
      {
        title: "Naan (Plain | Butter | Garlic | Cheese)",
        origin: "Vegetarian",
        desc: "Leavened Indian bread baked in a tandoor.",
        fullDesc:
          "Soft and fluffy naan, made with leavened dough and cooked in a tandoor, available plain, buttered, with garlic, or stuffed with cheese.",
        metrics: "300 Kcal (Plain) | 375 Kcal (Butter) | 80-100g | $4",
        image: "./assets/img/modal-images/food-menu/butter-naan.jpg",
        chefSpecial: false,
      },
      {
        title: "Scotch Whiskey Naan",
        origin: "Vegetarian",
        desc: "Special naan flavored with scotch whiskey.",
        fullDesc:
          "Unique naan infused with the flavors of scotch whiskey, offering a distinct taste to complement your meal.",
        metrics: "350 Kcal | 80-100g | $5",
        image: "./assets/img/modal-images/food-menu/scotch-whiskey-naan.jpg",
        chefSpecial: true,
      },
      {
        title: "Chur Chur Naan",
        origin: "Vegetarian",
        desc: "Crispy naan stuffed with spiced potatoes and served with butter.",
        fullDesc:
          "Crispy chur chur naan stuffed with a savory potato filling, served with a dollop of butter for added richness.",
        metrics: "420 Kcal | 110-120g | $5",
        image: "./assets/img/modal-images/food-menu/chur-chur-naan.jpg",
        chefSpecial: false,
      },
      {
        title: "Khameeri Roti (Plain | Butter | Pistachio)",
        origin: "Vegetarian",
        desc: "Fermented flatbread made from whole wheat flour.",
        fullDesc:
          "Soft and fluffy khameeri roti made with fermented whole wheat flour, served plain, with butter, or enhanced with pistachios.",
        metrics: "450 Kcal (Plain) | 525 Kcal (Butter) | 150g | $4",
        image:
          "./assets/img/modal-images/food-menu/khameeri-roti-pistachio.jpg",
        chefSpecial: true,
      },
      {
        title: "Kulcha (Aloo Pyaaz | Onion | Patties)",
        origin: "Vegetarian",
        desc: "Stuffed Indian bread with various fillings.",
        fullDesc:
          "Soft kulchas stuffed with a choice of potato, onion, or patties, baked in a tandoor for a perfect texture.",
        metrics:
          "450 Kcal (Aloo Pyaaz) | 440 Kcal (Onion) | 460 Kcal (Patties) | 150g | $5",
        image: "./assets/img/modal-images/food-menu/kulcha-aloo-pyaz.jpg",
        chefSpecial: false,
      },
      {
        title: "The Delhi Lounge Chicken & Cheese Kulcha",
        origin: "Non-Vegetarian",
        desc: "Stuffed kulcha with chicken and cheese.",
        fullDesc:
          "Rich and fluffy kulcha stuffed with chicken and cheese, baked in a tandoor for a delectable taste.",
        metrics: "540 Kcal (Cheese) | 525 Kcal (Chicken) | 150g | $6",
        image: "./assets/img/modal-images/food-menu/chicken-cheese-kulcha.jpg",
        chefSpecial: true,
      },
      {
        title: "Assorted Bread Basket",
        origin: "Vegetarian",
        desc: "A selection of various Indian breads.",
        fullDesc:
          "A delightful assortment of tandoori roti, laccha parantha, and garlic naan, perfect for sharing.",
        metrics:
          "180 Kcal (Tandoori Roti) | 300 Kcal (Laccha Parantha) | 240 Kcal (Garlic Naan) | Varies | $12",
        image: "./assets/img/modal-images/food-menu/assorted-bread-basket.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Sides",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Burrhani Raita",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A refreshing yogurt-based side dish made with spiced yogurt and herbs, perfect for cooling down spicy dishes.",
        metrics: "144 Kcal | 100-120g | $5",
        image: "./assets/img/modal-images/food-menu/burrhani-raita.jpg",
        chefSpecial: false,
      },
      {
        title: "Anardana Boondi Raita",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A flavorful raita made with yogurt, boondi, and pomegranate seeds, offering a delightful crunch.",
        metrics: "156 Kcal | 100-120g | $5",
        image: "./assets/img/modal-images/food-menu/anardana-boondi-raita.jpg",
        chefSpecial: false,
      },
      {
        title: "Cherry Pineapple Raita",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A sweet and tangy yogurt raita made with cherries and pineapples, providing a unique flavor combination.",
        metrics: "170 Kcal | 100-120g | $5",
        image: "./assets/img/modal-images/food-menu/cherry-pineapple-raita.jpg",
        chefSpecial: false,
      },
      {
        title: "Mixed Vegetable Raita",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A classic raita featuring a mix of fresh vegetables in yogurt, making it a perfect accompaniment for spicy dishes.",
        metrics: "150 Kcal | 100-120g | $5",
        image: "./assets/img/modal-images/food-menu/mixed-vegetable-raita.jpg",
        chefSpecial: false,
      },
      {
        title: "Green Salad",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A fresh and crunchy green salad made with seasonal vegetables, providing a light and healthy side dish.",
        metrics: "60 Kcal | 100-120g | $4",
        image: "./assets/img/modal-images/food-menu/green-salad.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Desserts",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Saffron Rabri",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A traditional Indian dessert made from thickened milk and flavored with saffron, served chilled for a delightful finish to your meal.",
        metrics: "375 Kcal | 150g | $6",
        image: "./assets/img/modal-images/food-menu/saffron-rabri.jpg",
        chefSpecial: false,
      },
      {
        title: "Jaggery Rasgulla",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Soft and spongy dumplings made from chhena, sweetened with jaggery and soaked in syrup.",
        metrics: "250 Kcal | 100g | $5",
        image: "./assets/img/modal-images/food-menu/jaggery-rasgulla.jpg",
        chefSpecial: false,
      },
      {
        title: "Baileys Rasmalai",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Delicate paneer discs soaked in rich and creamy Baileys-infused milk, topped with nuts.",
        metrics: "450 Kcal | 120-150g | $8",
        image: "./assets/img/modal-images/food-menu/baileys-rasmalai.jpg",
        chefSpecial: true,
      },
      {
        title: "Gulab Jamun",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Deep-fried milk dumplings soaked in a sweet syrup, a classic Indian dessert that melts in your mouth.",
        metrics: "525 Kcal | 120-150g | $6",
        image: "./assets/img/modal-images/food-menu/gulab-jamun.jpg",
        chefSpecial: false,
      },
      {
        title: "Gajar Halwa",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A rich dessert made from grated carrots, milk, and nuts, cooked until creamy and sweetened to perfection.",
        metrics: "375 Kcal | 150g | $7",
        image: "./assets/img/modal-images/food-menu/gajar-halwa.jpg",
        chefSpecial: false,
      },
      {
        title: "Moong Dal Halwa",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A delicious dessert made from split yellow lentils, cooked with ghee and sweetened with sugar, garnished with nuts.",
        metrics: "545 Kcal | 150g | $7",
        image: "./assets/img/modal-images/food-menu/moong-dal-halwa.jpg",
        chefSpecial: false,
      },
      {
        title: "The Delhi Lounge Kulfi Falooda",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Traditional Indian ice cream made with milk, flavored with cardamom, and served with falooda noodles.",
        metrics: "560 Kcal | 150g | $8",
        image: "./assets/img/modal-images/food-menu/kulfi-falooda.jpg",
        chefSpecial: true,
      },
      {
        title: "Gulkand Rabri Mousse ē Berries & Honeycomb",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "A light and airy mousse made with gulkand (rose petal jam), layered with fresh berries and crunchy honeycomb.",
        metrics: "550 Kcal | 150g | $9",
        image: "./assets/img/modal-images/food-menu/gulkand-rabri-mousse.jpg",
        chefSpecial: true,
      },
      {
        title: "Custard Gulab Jamun ē Citrus Confit & Saffron Shortbread",
        origin: "Vegetarian",
        desc: "",
        fullDesc:
          "Delicious gulab jamun served with creamy custard, citrus confit, and saffron-infused shortbread.",
        metrics: "480 Kcal | 120g | $9",
        image: "./assets/img/modal-images/food-menu/custard-gulab-jamun.jpg",
        chefSpecial: true,
      },
    ],
  },
];

export default menuData;
