const menuData = {
  "Salads & Soups": {
    type: "",
    items: [
      {
        id: 1,
        title: "Mango & Avocado Kachumber Salad",
        origin: "Vegetarian",
        category: "Salads & Soups",
        tagline: "A fresh and vibrant tropical salad",
        desc: "Mango, avocado, red onion, jalapeno, fresh coriander, baby arugula.",
        fullDesc:
          "A light and refreshing salad with ripe mangoes and creamy avocado, enhanced by jalapeno for a mild kick.",
        metrics: "200 Kcal | 180g | $12",
        image: "./assets/img/modal-images/mango-avocado-salad.jpg",
      },
      {
        id: 2,
        title: "Pomegranate & Quinoa Chaat Salad",
        origin: "Vegetarian",
        category: "Salads & Soups",
        tagline: "A nutritious blend of quinoa and pomegranate",
        desc: "Steamed quinoa, pomegranate seeds, cucumber, tomato, onion, mint, coriander, crisp lettuce.",
        fullDesc:
          "A refreshing salad with the crunch of pomegranate and the health benefits of quinoa, blended with mint and fresh veggies.",
        metrics: "250 Kcal | 190g | $14",
        image: "./assets/img/modal-images/quinoa-chaat.jpg",
      },
      {
        id: 3,
        title: "Asparagus & Coconut Shorba",
        origin: "Vegetarian",
        category: "Salads & Soups",
        tagline: "Delicately spiced asparagus in a coconut broth",
        desc: "Tender asparagus and coconut broth, delicately spiced.",
        fullDesc:
          "A mild and soothing broth with tender asparagus in a coconut base, perfect for a light and nutritious starter.",
        metrics: "150 Kcal | 200g | $10",
        image: "./assets/img/modal-images/asparagus-shorba.jpg",
      },
      {
        id: 4,
        title: "Smokey Tomato Shorba",
        origin: "Vegetarian",
        category: "Salads & Soups",
        tagline: "Smokey and flavorful tomato soup with fresh herbs",
        desc: "Char-grilled tomato broth, delicately spiced, enhanced with the freshness of coriander.",
        fullDesc:
          "A rich tomato soup made by charring tomatoes for a unique smoky flavor, finished with fresh coriander for a zesty touch.",
        metrics: "180 Kcal | 220g | $9",
        image: "./assets/img/modal-images/smokey-tomato-shorba.jpg",
      },
      {
        id: 5,
        title: "Chicken Fenugreek Shorba",
        origin: "Non-Vegetarian",
        category: "Salads & Soups",
        tagline: "Rich chicken broth with a touch of fenugreek",
        desc: "Exquisitely spiced chicken broth, enhanced with fenugreek leaves.",
        fullDesc:
          "A hearty and spiced chicken soup elevated with the earthy flavor of fenugreek, perfect for warming up your taste buds.",
        metrics: "220 Kcal | 250g | $12",
        image: "./assets/img/modal-images/chicken-fenugreek-shorba.jpg",
      },
    ],
  },
  Chaat: {
    type: "",
    items: [
      {
        id: 6,
        title: "Pani Puri (Jaljeera | Gud Imli | Pineapple)",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "Crispy puris with a burst of tangy flavors",
        desc: "Street-style puffs stuffed with chickpeas, potatoes, and Bengal gram topped with flavored waters.",
        fullDesc:
          "Crispy puris filled with tangy and spicy waters, chickpeas, and potatoes for an explosion of flavors in every bite.",
        metrics: "180 Kcal | 150g | $8",
        image: "./assets/img/modal-images/pani-puri.jpg",
      },
      {
        id: 7,
        title: "Purani Dilli ke Aloo Kachalu",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "A classic street food with a modern twist",
        desc: "Tender potatoes, crisp fried and tossed with spices and chutneys.",
        fullDesc:
          "Crispy fried potato chunks tossed with tangy chutneys and fragrant spices, a favorite from Old Delhi’s streets.",
        metrics: "200 Kcal | 180g | $9",
        image: "./assets/img/modal-images/aloo-kachalu.jpg",
      },
      {
        id: 8,
        title: "Papdi Chaat",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "A crispy and creamy street-style delight",
        desc: "Crispy discs of refined flour topped with potato mixture, chutneys, yoghurt and vermicelli.",
        fullDesc:
          "Crispy papdi served with potatoes, cool yogurt, chutneys, and a sprinkling of crispy sev for a mix of textures and flavors.",
        metrics: "220 Kcal | 170g | $8",
        image: "./assets/img/modal-images/papdi-chaat.jpg",
      },
      {
        id: 9,
        title: "Karol Bagh Aloo Tikki",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "Stuffed potato pattice with a flavorful topping",
        desc: "Stuffed potato pattice, topped with white peas, whipped yoghurt, and chutneys.",
        fullDesc:
          "Crispy and spicy potato patties served with a generous topping of white peas, tangy yogurt, and chutneys.",
        metrics: "200 Kcal | 180g | $9",
        image: "./assets/img/modal-images/aloo-tikki.jpg",
      },
      {
        id: 10,
        title: "Bhalla Papdi Chaat",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "Black lentil dumplings in a sweetened curd mix",
        desc: "Black lentil dumplings soaked in sweetened curd with chutneys, served with crisp discs.",
        fullDesc:
          "Soft black lentil dumplings soaked in sweetened curd, topped with tangy chutneys and served with crispy papdis.",
        metrics: "220 Kcal | 190g | $10",
        image: "./assets/img/modal-images/bhalla-papdi-chaat.jpg",
      },
      {
        id: 11,
        title: "Samosa Platter",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "A variety of samosas served with chutneys",
        desc: "Crisp fried triangular pastry, stuffed with Cottage Cheese, Potato, Peas, Corn mixtures.",
        fullDesc:
          "An assortment of samosas with fillings of cottage cheese, potato, peas, and corn, served with a selection of chutneys.",
        metrics: "300 Kcal | 250g | $12",
        image: "./assets/img/modal-images/samosa-platter.jpg",
      },
      {
        id: 12,
        title: "Palak Patta Chaat",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "Crispy fried spinach leaves with chutneys",
        desc: "Crispy fried spinach leaves tossed with spices, yogurt, and chutneys.",
        fullDesc:
          "Crispy spinach leaves served with a mix of spices, yogurt, and tangy chutneys for a delightful contrast of textures.",
        metrics: "180 Kcal | 170g | $9",
        image: "./assets/img/modal-images/palak-patta-chaat.jpg",
      },
      {
        id: 13,
        title: "Basket Chaat",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "Potato basket with a variety of toppings",
        desc: "Potato basket topped with potato pattice, yoghurt, chutneys, and sprouts.",
        fullDesc:
          "A unique potato basket filled with a medley of potato pattice, cool yogurt, tangy chutneys, and crunchy sprouts.",
        metrics: "250 Kcal | 200g | $10",
        image: "./assets/img/modal-images/basket-chaat.jpg",
      },
      {
        id: 14,
        title: "Samosa Chaat",
        origin: "Vegetarian",
        category: "Chaat",
        tagline: "Potato samosa with chickpeas and chutneys",
        desc: "Potato samosa topped with chickpeas and chutneys.",
        fullDesc:
          "Crispy potato samosas served with a hearty topping of chickpeas and a selection of flavorful chutneys.",
        metrics: "200 Kcal | 180g | $9",
        image: "./assets/img/modal-images/samosa-chaat.jpg",
      },
    ],
  },
  Appetisers: {
    type: "Vegetarian",
    items: [
      {
        id: 15,
        title: "Khumbh ki Galouti",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Mushroom patties marinated with aromatic spices",
        desc: "Melt-in-mouth mushroom patties marinated with a host of aromatic spices, garlic chutney.",
        fullDesc:
          "Tender mushroom patties infused with aromatic spices, served with a flavorful garlic chutney.",
        metrics: "180 Kcal | 150g | $11",
        image: "./assets/img/modal-images/khumbh-galouti.jpg",
      },
      {
        id: 16,
        title: "Beetroot Shammi Labgeer",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Beetroot patties with aromatic spices",
        desc: "Melt-in-mouth beetroot patties flavored with aromatic spices, lemon & black pepper chutney.",
        fullDesc:
          "Delicious beetroot patties with a blend of aromatic spices, served with a zesty lemon and black pepper chutney.",
        metrics: "200 Kcal | 160g | $12",
        image: "./assets/img/modal-images/beetroot-shammi.jpg",
      },
      {
        id: 17,
        title: "Green Pea Mint Kebab",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Green pea patties with fresh mint",
        desc: "Ground green pea patties enhanced with fresh mint, cranberry & ginger launji.",
        fullDesc:
          "Flavorful green pea patties with fresh mint, served with a tangy cranberry and ginger launji.",
        metrics: "190 Kcal | 180g | $12",
        image: "./assets/img/modal-images/green-pea-mint-kebab.jpg",
      },
      {
        id: 18,
        title: "Bullet Kebab",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Spinach croquettes with cheese",
        desc: "Spinach croquettes stuffed with cheese, garlic chutney.",
        fullDesc:
          "Crispy spinach croquettes filled with cheese, paired with a spicy garlic chutney.",
        metrics: "210 Kcal | 200g | $11",
        image: "./assets/img/modal-images/bullet-kebab.jpg",
      },
      {
        id: 19,
        title: "Chinatown Chili Cottage Cheese",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Spicy cottage cheese stir-fry",
        desc: "Stir-fried cottage cheese cubes tossed with chilies, bell peppers and onions in a spicy sauce.",
        fullDesc:
          "Chunks of cottage cheese stir-fried with chilies, bell peppers, and onions in a bold spicy sauce.",
        metrics: "220 Kcal | 180g | $13",
        image: "./assets/img/modal-images/chinatown-chili-cottage-cheese.jpg",
      },
      {
        id: 20,
        title: "Truffle Malai Broccoli",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Broccoli in a creamy truffle mixture",
        desc: "Tender broccoli in a mixture of cream and spices, char-grilled, cranberry & ginger launji.",
        fullDesc:
          "Creamy and flavorful truffle-infused broccoli, char-grilled to perfection and served with a cranberry and ginger launji.",
        metrics: "200 Kcal | 180g | $14",
        image: "./assets/img/modal-images/truffle-malai-broccoli.jpg",
      },
      {
        id: 21,
        title: "Tandoori Cottage Cheese",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Marinated and char-grilled cottage cheese",
        desc: "Cottage cheese, capsicum and onions marinated in yoghurt and char-grilled, lemon & black pepper chutney.",
        fullDesc:
          "Marinated cottage cheese skewers with capsicum and onions, char-grilled and served with a lemon and black pepper chutney.",
        metrics: "210 Kcal | 200g | $13",
        image: "./assets/img/modal-images/tandoori-cottage-cheese.jpg",
      },
      {
        id: 22,
        title: "Tandoori Russet Potatoes",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Char-grilled stuffed potatoes",
        desc: "Scooped potatoes stuffed with a mixture of spiced potatoes and dry fruits, char-grilled, garlic chutney.",
        fullDesc:
          "Char-grilled russet potatoes stuffed with a spiced potato and dry fruit mixture, served with garlic chutney.",
        metrics: "230 Kcal | 210g | $12",
        image: "./assets/img/modal-images/tandoori-russet-potatoes.jpg",
      },
      {
        id: 23,
        title: "Jackfruit Tikka",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Char-grilled jackfruit with spices",
        desc: "Jackfruit marinated with brown onion, yoghurt and spices, char-grilled, lemon & black pepper chutney.",
        fullDesc:
          "Jackfruit marinated with a blend of spices and yogurt, char-grilled and served with a tangy lemon and black pepper chutney.",
        metrics: "200 Kcal | 180g | $13",
        image: "./assets/img/modal-images/jackfruit-tikka.jpg",
      },
      {
        id: 24,
        title: "Garden Grill Seekh Kebab",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Minced vegetables skewered and grilled",
        desc: "Minced vegetables marinated and skewered, char-grilled, pineapple & green chili chutney.",
        fullDesc:
          "Skewered minced vegetables char-grilled to perfection, served with a tangy pineapple and green chili chutney.",
        metrics: "210 Kcal | 200g | $12",
        image: "./assets/img/modal-images/garden-grill-seekh-kebab.jpg",
      },
      {
        id: 25,
        title: "Tandoori Salad",
        origin: "Vegetarian",
        category: "Appetisers",
        tagline: "Char-grilled vegetables and stone fruits",
        desc: "Vegetables & stone fruits marinated with tandoori spices, char-grilled, garlic chutney.",
        fullDesc:
          "A vibrant salad of vegetables and stone fruits marinated in tandoori spices, char-grilled and served with garlic chutney.",
        metrics: "180 Kcal | 180g | $11",
        image: "./assets/img/modal-images/tandoori-salad.jpg",
      },
    ],
  },
  Seafood: {
    type: "",
    items: [
      {
        id: 26,
        title: "Tandoori Prawns",
        origin: "Non-Vegetarian",
        category: "Seafood",
        tagline: "Char-grilled prawns with a spicy marinade",
        desc: "Freshwater jumbo prawns marinated with spices, char-grilled, pineapple & green chili chutney.",
        fullDesc:
          "Jumbo prawns marinated in a blend of spices and char-grilled, served with a tangy pineapple and green chili chutney.",
        metrics: "250 Kcal | 200g | $16",
        image: "./assets/img/modal-images/tandoori-prawns.jpg",
      },
      {
        id: 27,
        title: "Fish Tikka",
        origin: "Non-Vegetarian",
        category: "Seafood",
        tagline: "Marinated fish steaks with carom seeds",
        desc: "Fish steaks, marinated with carom seeds, yogurt and spices, char-grilled, cranberry & ginger launji.",
        fullDesc:
          "Char-grilled fish steaks marinated with aromatic carom seeds and spices, served with a cranberry and ginger launji.",
        metrics: "220 Kcal | 180g | $15",
        image: "./assets/img/modal-images/fish-tikka.jpg",
      },
      {
        id: 28,
        title: "Saloni Salmon Tikka",
        origin: "Non-Vegetarian",
        category: "Seafood",
        tagline: "Aromatic spiced salmon steaks",
        desc: "Alaskan salmon steaks marinated with aromatic spices, char-grilled, lemon & black pepper chutney.",
        fullDesc:
          "Tender salmon steaks marinated with aromatic spices and char-grilled, served with a zesty lemon and black pepper chutney.",
        metrics: "240 Kcal | 200g | $18",
        image: "./assets/img/modal-images/salmon-tikka.jpg",
      },
      {
        id: 29,
        title: "Tandoori Pomfret",
        origin: "Non-Vegetarian",
        category: "Seafood",
        tagline: "Whole pomfret with a spicy marinade",
        desc: "Whole silver pomfret, marinated with spices, char-grilled, garlic chutney.",
        fullDesc:
          "Whole pomfret fish marinated in a blend of spices and char-grilled, served with garlic chutney.",
        metrics: "260 Kcal | 220g | $17",
        image: "./assets/img/modal-images/tandoori-pomfret.jpg",
      },
    ],
  },
  Meats: {
    type: "",
    items: [
      {
        id: 30,
        title: "Tandoori Quail",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Tender quail marinated in spicy yogurt",
        desc: "Aromatic and tender quail marinated in spicy yoghurt marinade, char-grilled, cranberry & ginger launji.",
        fullDesc:
          "Succulent quail marinated in a spicy yogurt mixture, char-grilled to perfection and served with a cranberry and ginger launji.",
        metrics: "270 Kcal | 220g | $20",
        image: "./assets/img/modal-images/tandoori-quail.jpg",
      },
      {
        id: 31,
        title: "Chicken Tikka",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Char-grilled chicken with spices",
        desc: "Morsels of chicken marinated in a spicy yoghurt marinade, char-grilled, pineapple & green chili chutney.",
        fullDesc:
          "Juicy chicken pieces marinated in a spicy yogurt mixture and char-grilled, served with a tangy pineapple and green chili chutney.",
        metrics: "260 Kcal | 200g | $15",
        image: "./assets/img/modal-images/chicken-tikka.jpg",
      },
      {
        id: 32,
        title: "Chicken Malai Tikka",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Creamy and tender chicken kebabs",
        desc: "Creamy and tender chicken kebabs marinated in a mixture of cream and spices, char-grilled, garlic chutney.",
        fullDesc:
          "Rich and creamy chicken kebabs marinated in a blend of cream and spices, char-grilled and served with garlic chutney.",
        metrics: "270 Kcal | 220g | $18",
        image: "./assets/img/modal-images/chicken-malai-tikka.jpg",
      },
      {
        id: 33,
        title: "Reshmi Seekh Kebab",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Minced chicken kebabs char-grilled",
        desc: "Minced chicken kebabs marinated and skewered, char-grilled, lemon & black pepper chutney.",
        fullDesc:
          "Flavorful minced chicken kebabs marinated and char-grilled, served with a lemon and black pepper chutney.",
        metrics: "250 Kcal | 200g | $16",
        image: "./assets/img/modal-images/reshmi-seekh-kebab.jpg",
      },
      {
        id: 34,
        title: "Tandoori Chicken (Half | Full)",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Whole spring chicken marinated in spices",
        desc: "Whole spring chicken marinated in spicy yoghurt marinade, char-grilled, cranberry & ginger launji.",
        fullDesc:
          "Whole spring chicken marinated in a spicy yogurt mixture and char-grilled, served with a cranberry and ginger launji. Available in half or full servings.",
        metrics: "550 Kcal | 400g | $30 (Half) | $55 (Full)",
        image: "./assets/img/modal-images/tandoori-chicken.jpg",
      },
      {
        id: 35,
        title: "Chinatown Chili Chicken",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Spicy chicken stir-fry",
        desc: "Stir-fried chicken cubes tossed with chilies, bell peppers and onions in a spicy sauce.",
        fullDesc:
          "Chicken cubes stir-fried with chilies, bell peppers, and onions in a bold and spicy sauce.",
        metrics: "280 Kcal | 200g | $17",
        image: "./assets/img/modal-images/chinatown-chili-chicken.jpg",
      },
      {
        id: 36,
        title: "Mutton Galouti Kebab",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Melt-in-mouth goat meat patties",
        desc: "Melt-in-mouth goat meat patties marinated with a host of aromatic spices, garlic chutney.",
        fullDesc:
          "Tender and flavorful goat meat patties infused with aromatic spices, served with a delicious garlic chutney.",
        metrics: "290 Kcal | 200g | $20",
        image: "./assets/img/modal-images/mutton-galouti-kebab.jpg",
      },
      {
        id: 37,
        title: "Mutton Seekh Gilafi",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Minced goat meat skewers",
        desc: "Minced goat meat skewered and enveloped in peppers, char-grilled, cranberry & ginger launji.",
        fullDesc:
          "Minced goat meat skewers char-grilled with peppers, served with a cranberry and ginger launji.",
        metrics: "270 Kcal | 200g | $18",
        image: "./assets/img/modal-images/mutton-seekh-gilafi.jpg",
      },
      {
        id: 38,
        title: "Tandoori Lamb Chops",
        origin: "Non-Vegetarian",
        category: "Meats",
        tagline: "Marinated lamb chops",
        desc: "Flavorful and marinated lamb chops char-grilled to perfection, pineapple & green chili chutney.",
        fullDesc:
          "Succulent lamb chops marinated in spices and char-grilled, served with a pineapple and green chili chutney.",
        metrics: "350 Kcal | 250g | $25",
        image: "./assets/img/modal-images/tandoori-lamb-chops.jpg",
      },
    ],
  },
  Combos: {
    type: "",
    items: [
      {
        id: 39,
        title: "Purani Dilli Chole Bhature",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Spicy chickpeas with deep-fried bread",
        desc: "A semi-dry specialty preparation of spicy chickpeas served with leavened deep-fried bread.",
        fullDesc:
          "A traditional Delhi-style dish featuring spicy chickpeas served with leavened deep-fried bread known as bhature.",
        metrics: "600 Kcal | 300g | $16",
        image: "./assets/img/modal-images/chole-bhature.jpg",
      },
      {
        id: 40,
        title: "Amritsari Patties Kulcha Chana",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Flaky flatbread with chickpea curry",
        desc: "Crisp flaky flatbread stuffed with an array of vegetables, served with chickpea curry and tamarind chutney.",
        fullDesc:
          "Flaky Amritsari patties stuffed with a variety of vegetables, served with a chickpea curry and tangy tamarind chutney.",
        metrics: "650 Kcal | 350g | $18",
        image: "./assets/img/modal-images/amritsari-patties-kulcha-chana.jpg",
      },
      {
        id: 41,
        title: "Sarson Ka Saag, Makke ki Roti",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Mustard greens with cornmeal flatbread",
        desc: "Punjabi specialty of mustard greens served with cornmeal flatbread, ghee, and jaggery.",
        fullDesc:
          "A traditional Punjabi dish featuring mustard greens cooked with spices, served with cornmeal flatbread, ghee, and jaggery.",
        metrics: "700 Kcal | 400g | $20",
        image: "./assets/img/modal-images/sarson-ka-saag-makke-ki-roti.jpg",
      },
    ],
  },
  Mains: {
    type: "Vegetarian",
    items: [
      {
        id: 42,
        title: "Almond Gucchi Korma",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Morel mushrooms in an aromatic gravy",
        desc: "Stuffed morel mushrooms in an aromatic gravy, topped with almond slivers.",
        fullDesc:
          "Tender morel mushrooms cooked in a rich and aromatic gravy, garnished with almond slivers for added texture and flavor.",
        metrics: "320 Kcal | 220g | $22",
        image: "./assets/img/modal-images/almond-gucchi-korma.jpg",
      },
      {
        id: 43,
        title: "Basil Paneer Rarah",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Paneer in basil-infused gravy",
        desc: "Cottage cheese cubes simmered in onion-tomato masala gravy, flavored with basil.",
        fullDesc:
          "Soft cottage cheese cubes simmered in a rich onion-tomato masala gravy, flavored with fresh basil for a fragrant touch.",
        metrics: "290 Kcal | 200g | $20",
        image: "./assets/img/modal-images/basil-paneer-rarah.jpg",
      },
      {
        id: 44,
        title: "Paneer Tikka Masala",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Grilled paneer in creamy tomato gravy",
        desc: "Grilled cottage cheese tikka in creamy tomato-based gravy, infused with aromatic spices.",
        fullDesc:
          "Grilled cottage cheese tikka pieces served in a creamy tomato-based gravy, enriched with aromatic spices for a luxurious taste.",
        metrics: "330 Kcal | 220g | $22",
        image: "./assets/img/modal-images/paneer-tikka-masala.jpg",
      },
      {
        id: 45,
        title: "Paneer Khurchan",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Stir-fried paneer with spices",
        desc: "Paneer cubes stir-fried with bell peppers, onions, and a mix of spices.",
        fullDesc:
          "Paneer cubes stir-fried with bell peppers, onions, and a blend of spices, offering a flavorful and spicy dish.",
        metrics: "300 Kcal | 200g | $20",
        image: "./assets/img/modal-images/paneer-khurchan.jpg",
      },
      {
        id: 46,
        title: "Aloo Gobi",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Potatoes and cauliflower in spiced gravy",
        desc: "Potatoes and cauliflower cooked in a blend of spices, featuring a rich and flavorful gravy.",
        fullDesc:
          "A classic dish of potatoes and cauliflower simmered in a rich blend of spices, creating a flavorful and comforting gravy.",
        metrics: "310 Kcal | 220g | $20",
        image: "./assets/img/modal-images/aloo-gobi.jpg",
      },
      {
        id: 47,
        title: "Dal Makhni",
        origin: "Vegetarian",
        category: "Combos",
        tagline: "Creamy black lentil curry",
        desc: "Slow-cooked black lentils in a creamy tomato-based sauce.",
        fullDesc:
          "Rich and creamy black lentil curry slow-cooked to perfection in a tomato-based sauce, offering a comforting and hearty meal.",
        metrics: "340 Kcal | 250g | $22",
        image: "./assets/img/modal-images/dal-makhni.jpg",
      },
    ],
  },
  Sides: {
    type: "Vegetarian",
    items: [
      {
        id: 48,
        title: "Masala Papad",
        origin: "Vegetarian",
        category: "Sides",
        tagline: "Crispy spiced papad",
        desc: "Crispy papad topped with a blend of spices and fresh vegetables.",
        fullDesc:
          "Crunchy papad served with a mixture of spices and fresh vegetables, providing a crispy and flavorful side dish.",
        metrics: "120 Kcal | 100g | $8",
        image: "./assets/img/modal-images/masala-papad.jpg",
      },
      {
        id: 49,
        title: "Pachadi",
        origin: "Vegetarian",
        category: "Sides",
        tagline: "South Indian-style chutney",
        desc: "South Indian-style chutney made with yogurt, vegetables, and spices.",
        fullDesc:
          "A traditional South Indian chutney made with yogurt, fresh vegetables, and a blend of spices, offering a tangy and refreshing taste.",
        metrics: "80 Kcal | 100g | $6",
        image: "./assets/img/modal-images/pachadi.jpg",
      },
      {
        id: 50,
        title: "Raita",
        origin: "Vegetarian",
        category: "Sides",
        tagline: "Cooling yogurt side dish",
        desc: "Cooling yogurt mixed with fresh vegetables and spices.",
        fullDesc:
          "Refreshing yogurt mixed with fresh vegetables and a hint of spices, serving as a cooling and complementary side dish.",
        metrics: "90 Kcal | 100g | $6",
        image: "./assets/img/modal-images/raita.jpg",
      },
    ],
  },
  "Rice & Breads": {
    type: "",
    items: [
      {
        id: 51,
        title: "Jeera Rice",
        origin: "Vegetarian",
        category: "Rice & Breads",
        tagline: "Cumin-flavored rice",
        desc: "Fluffy basmati rice seasoned with cumin seeds.",
        fullDesc:
          "Fluffy basmati rice infused with the aromatic flavor of cumin seeds, providing a perfect accompaniment to main dishes.",
        metrics: "220 Kcal | 200g | $10",
        image: "./assets/img/modal-images/jeera-rice.jpg",
      },
      {
        id: 52,
        title: "Naan",
        origin: "Vegetarian",
        category: "Rice & Breads",
        tagline: "Soft and fluffy Indian bread",
        desc: "Traditional soft and fluffy naan bread.",
        fullDesc:
          "Classic Indian naan bread, soft and fluffy, ideal for scooping up curries and other main dishes.",
        metrics: "250 Kcal | 100g | $8",
        image: "./assets/img/modal-images/naan.jpg",
      },
      {
        id: 53,
        title: "Garlic Naan",
        origin: "Vegetarian",
        category: "Rice & Breads",
        tagline: "Garlic-infused naan bread",
        desc: "Naan bread topped with garlic and herbs.",
        fullDesc:
          "Soft naan bread infused with garlic and herbs, adding a savory touch to your meal.",
        metrics: "270 Kcal | 100g | $9",
        image: "./assets/img/modal-images/garlic-naan.jpg",
      },
      {
        id: 54,
        title: "Butter Naan",
        origin: "Vegetarian",
        category: "Rice & Breads",
        tagline: "Buttery and soft naan bread",
        desc: "Naan bread brushed with butter for a rich flavor.",
        fullDesc:
          "Soft naan bread brushed with butter, delivering a rich and delicious flavor that complements any curry or main dish.",
        metrics: "270 Kcal | 100g | $9",
        image: "./assets/img/modal-images/butter-naan.jpg",
      },
      {
        id: 55,
        title: "Paratha",
        origin: "Vegetarian",
        category: "Rice & Breads",
        tagline: "Layered Indian flatbread",
        desc: "Flaky and layered Indian flatbread.",
        fullDesc:
          "A flaky and layered Indian flatbread, perfect for pairing with curries and other main dishes.",
        metrics: "290 Kcal | 150g | $10",
        image: "./assets/img/modal-images/paratha.jpg",
      },
    ],
  },
  Desserts: {
    type: "",
    items: [
      {
        id: 56,
        title: "Gulab Jamun",
        origin: "Vegetarian",
        category: "Desserts",
        tagline: "Sweet syrup-soaked dough balls",
        desc: "Fried dough balls soaked in rose-flavored syrup.",
        fullDesc:
          "Delicious fried dough balls soaked in a fragrant rose-flavored syrup, offering a sweet and satisfying end to your meal.",
        metrics: "250 Kcal | 150g | $8",
        image: "./assets/img/modal-images/gulab-jamun.jpg",
      },
      {
        id: 57,
        title: "Ras Malai",
        origin: "Vegetarian",
        category: "Desserts",
        tagline: "Creamy and fragrant milk dessert",
        desc: "Soft cheese dumplings in a rich and creamy milk sauce.",
        fullDesc:
          "Soft and delicate cheese dumplings soaked in a rich, creamy milk sauce flavored with cardamom and saffron.",
        metrics: "300 Kcal | 200g | $10",
        image: "./assets/img/modal-images/ras-malai.jpg",
      },
      {
        id: 58,
        title: "Jalebi",
        origin: "Vegetarian",
        category: "Desserts",
        tagline: "Crispy and sweet spiral fritters",
        desc: "Deep-fried spiral-shaped fritters dipped in sugar syrup.",
        fullDesc:
          "Crispy spiral fritters deep-fried and dipped in a sweet sugar syrup, providing a crunchy and sugary treat.",
        metrics: "350 Kcal | 150g | $9",
        image: "./assets/img/modal-images/jalebi.jpg",
      },
    ],
  },
  Beverages: {
    type: "",
    items: [
      {
        id: 59,
        title: "Masala Chai",
        origin: "Vegetarian",
        category: "Beverages",
        tagline: "Spiced tea",
        desc: "Aromatic tea brewed with a blend of spices.",
        fullDesc:
          "A traditional Indian tea brewed with a mix of aromatic spices, offering a warm and invigorating drink.",
        metrics: "100 Kcal | 200ml | $5",
        image: "./assets/img/modal-images/masala-chai.jpg",
      },
      {
        id: 60,
        title: "Lassi",
        origin: "Vegetarian",
        category: "Beverages",
        tagline: "Cooling yogurt drink",
        desc: "Chilled yogurt drink flavored with spices or fruits.",
        fullDesc:
          "A refreshing yogurt-based drink, chilled and flavored with a choice of spices or fruits, ideal for cooling off.",
        metrics: "120 Kcal | 250ml | $6",
        image: "./assets/img/modal-images/lassi.jpg",
      },
      {
        id: 61,
        title: "Sweet Lime Soda",
        origin: "Vegetarian",
        category: "Beverages",
        tagline: "Sweet and tangy soda",
        desc: "Refreshing soda flavored with sweet lime.",
        fullDesc:
          "A revitalizing soda drink flavored with sweet lime, offering a sweet and tangy refreshment.",
        metrics: "130 Kcal | 250ml | $6",
        image: "./assets/img/modal-images/sweet-lime-soda.jpg",
      },
    ],
  },
};

const showCategoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.75.75 0 0 1 3 14.25z"/></svg>`;
const hideCategoryIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6.854 5.146a.5.5 0 1 0-.708.708L7.293 7L6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293z"/></svg>`;
function createCategoryIndex(
  category,
  index,
  menuIndexDiv,
  hiddenListDiv,
  toggleButton
) {
  const categoryIndexButton = document.createElement("button");
  categoryIndexButton.classList.add("menu-btn");
  categoryIndexButton.textContent = category;

  categoryIndexButton.onclick = function () {
    turnPageTo(index); // Navigates to the correct page based on index

    // Hide the list after clicking
    hiddenListDiv.style.display = "none";
    toggleButton.classList.add("show-list-btn");
    toggleButton.classList.remove("hide-list-btn");
    toggleButton.innerHTML = showCategoryIcon; // Reset button text
  };

  menuIndexDiv.appendChild(categoryIndexButton); // Append button to the index
}

function createCategoryIndexToggle(menuIndexContainer) {
  // Create the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-btn", "show-list-btn");
  toggleButton.innerHTML = showCategoryIcon;

  // Create the div for the hidden list of category index buttons
  const hiddenListDiv = document.createElement("div");
  hiddenListDiv.classList.add("menu-index-hidden"); // This will be hidden by default
  hiddenListDiv.style.display = "none"; // Hide the list initially

  // Add a toggle functionality to the button
  toggleButton.onclick = function () {
    if (hiddenListDiv.style.display === "none") {
      hiddenListDiv.style.display = "flex";
      toggleButton.classList.remove("show-list-btn");
      toggleButton.classList.add("hide-list-btn");
      toggleButton.innerHTML = hideCategoryIcon; // Change button text
    } else {
      hiddenListDiv.style.display = "none";
      toggleButton.classList.add("show-list-btn");
      toggleButton.classList.remove("hide-list-btn");
      toggleButton.innerHTML = showCategoryIcon; // Reset button text
    }
  };

  // Append the category index buttons to the hidden list
  Object.keys(menuData).forEach((category, index) => {
    createCategoryIndex(
      category,
      index + 2,
      hiddenListDiv,
      hiddenListDiv,
      toggleButton
    ); // +2 for front cover adjustment
  });

  menuIndexContainer.appendChild(toggleButton);
  menuIndexContainer.appendChild(hiddenListDiv);
}

function createMenuPage(category, type, items) {
  const pageDiv = document.createElement("div");
  pageDiv.classList.add("page");

  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("menu-page");

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("navbtn", "prev");
  prevBtn.onclick = function () {
    turnPagePrevious();
  }; // Implement this function
  menuPageDiv.appendChild(prevBtn);

  const menuWrapperDiv = document.createElement("div");
  menuWrapperDiv.classList.add("menu-wrapper");

  const menuIndexDiv = document.createElement("div");
  menuIndexDiv.classList.add("menu-index");

  // Object.keys(menuData).forEach((cat, index) => {
  //   createCategoryIndex(cat, index + 2, menuIndexDiv); // +2 to account for the front cover
  // });
  createCategoryIndexToggle(menuIndexDiv);
  menuWrapperDiv.appendChild(menuIndexDiv);

  const menuHeadingsDiv = document.createElement("div");
  menuHeadingsDiv.classList.add("menu-headings");

  const categoryName = document.createElement("h1");
  categoryName.classList.add("category-name");
  categoryName.textContent = category;
  menuHeadingsDiv.appendChild(categoryName);

  const typeName = document.createElement("h2");
  typeName.classList.add("type-name");
  typeName.textContent = type;
  menuHeadingsDiv.appendChild(typeName);

  menuWrapperDiv.appendChild(menuHeadingsDiv);

  const menuItemsUl = document.createElement("ul");
  menuItemsUl.classList.add("menu-items");

  items.forEach((item) => {
    const itemLi = document.createElement("li");
    itemLi.classList.add("menu-item");

    const itemBtn = document.createElement("button");
    itemBtn.classList.add("menu-item-btn");
    itemBtn.dataset.modalId = item.id;
    itemBtn.onclick = function (event) {
      openModal(event);
    }; // Implement this function

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    const itemName = document.createElement("h3");
    itemName.classList.add("name");
    itemName.textContent = item.title;
    detailsDiv.appendChild(itemName);

    const itemMetrics = document.createElement("p");
    itemMetrics.classList.add("metrics");
    itemMetrics.textContent = item.metrics;
    detailsDiv.appendChild(itemMetrics);

    itemBtn.appendChild(detailsDiv);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("desc");
    itemDesc.textContent = item.desc;
    itemBtn.appendChild(itemDesc);

    itemLi.appendChild(itemBtn);
    menuItemsUl.appendChild(itemLi);
  });

  menuWrapperDiv.appendChild(menuItemsUl);
  menuPageDiv.appendChild(menuWrapperDiv);

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("navbtn", "next");
  nextBtn.onclick = function () {
    turnPageNext();
  }; // Implement this function
  menuPageDiv.appendChild(nextBtn);

  pageDiv.appendChild(menuPageDiv);

  return pageDiv;
}

function createLastPage() {
  // Create the outermost div with class 'last-page'
  const lastPageDiv = document.createElement("div");
  lastPageDiv.classList.add("last-page");

  // Create the div with class 'menu-page'
  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("menu-page");

  // Create the 'prev' button
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("navbtn", "prev");
  prevBtn.onclick = turnPagePrevious;
  menuPageDiv.appendChild(prevBtn);

  // Create the div with class 'psudo-menu-wrapper'
  const psudoMenuWrapperDiv = document.createElement("div");
  psudoMenuWrapperDiv.classList.add("psudo-menu-wrapper");
  menuPageDiv.appendChild(psudoMenuWrapperDiv);

  // Create the 'next' button
  const nextBtn = document.createElement("button");
  nextBtn.classList.add("navbtn", "next");
  nextBtn.onclick = turnPageNext;
  menuPageDiv.appendChild(nextBtn);

  // Append the menuPageDiv to the lastPageDiv
  lastPageDiv.appendChild(menuPageDiv);

  return lastPageDiv;
}

function initializeMenu() {
  Object.keys(menuData).forEach((category) => {
    const { type, items } = menuData[category];
    const menuPage = createMenuPage(category, type, items);
    $("#magazine").turn("addPage", menuPage);
  });
  const lastPage = createLastPage();
  $("#magazine").turn("addPage", lastPage);
}

window.onload = initializeMenu;

//modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("content");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCategory = document.getElementById("modal-category");
const modalOrigin = document.getElementById("modal-origin");
const modalTagline = document.getElementById("modal-tagline");
const modalImage = document.getElementById("modal-image");

const openModal = (e) => {
  const button = e.currentTarget.closest("button[data-modal-id]");

  if (button) {
    const modalId = parseInt(button.getAttribute("data-modal-id"), 10);
    // const data = modalData[modalId];
    let data;

    for (const category in menuData) {
      const items = menuData[category].items;

      data = items.find((item) => item.id === modalId);
      if (data) break; // Break loop if item is found
    }

    if (data) {
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.fullDesc;
      modalCategory.textContent = data.category;
      modalOrigin.textContent = data.origin;
      modalTagline.textContent = data.tagline;
      modalImage.src = data.image;

      if (!modal.classList.contains("open")) {
        modal.classList.add("open");
        modalContent.classList.add("open");
      }
    }
  }
};

const closeModal = () => {
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    modalContent.classList.remove("open");
  }
};
