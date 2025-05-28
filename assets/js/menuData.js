let menuData = [
  // {
  //   category: "Signature Cuisine",
  //   subCategories: [
  //     {
  //       subCategory: "Signature Cuisine",
  //       type: "",
  //       backgroundImage: "../assets/img/menu-images/pageg.jpg",
  //       items: [
  //         {
  //           title: "Karol Bagh Aloo Tikki",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Stuffed potato patties, topped with whipped yogurt, and chutneys.",
  //           fullDesc:
  //             "Crispy stuffed potato patties topped with white peas, a dollop of whipped yogurt, and a drizzle of tangy chutneys.",
  //           metrics: "120Gms | 102Kcal | $14",
  //           image:
  //             "./assets/img/modal-images/food-menu/karol-bagh-aloo-tikki.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Palak Patta Chaat",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Crispy fried spinach leaves tossed with spices, yogurt, and chutneys.",
  //           fullDesc:
  //             "Crispy fried spinach leaves drizzled with yogurt and spicy chutneys, creating a delightful contrast of flavors.",
  //           metrics: "160Gms | 198Kcal | $14",
  //           image: "./assets/img/modal-images/food-menu/palak-patta-chaat.jpg",
  //           chefSpecial: false,
  //           vegan: true,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Truffle Malai Broccoli",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Tender broccoli in a mixture of cream and spices, char-grilled, cranberry & ginger launji.",
  //           fullDesc:
  //             "Tender broccoli cooked in a creamy mixture, char-grilled to perfection, served with a cranberry and ginger sauce for a gourmet touch.",
  //           metrics: "250Gms | 283Kcal | $18",
  //           image:
  //             "./assets/img/modal-images/food-menu/malai-brocolli-tikka.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Tandoori Lobster",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Lobster tail, marinated with spices, char-grilled, pineapple & green chili chutney.",
  //           fullDesc:
  //             "Jumbo freshwater prawns marinated in a blend of aromatic spices and char-grilled, served with a refreshing pineapple and green chili chutney.",
  //           metrics: "250Gms | 415Kcal | $34",
  //           image: "./assets/img/modal-images/food-menu/tandoori-prawns.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Chandi Tikka",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Creamy chicken kebabs marinated in cream and spices, char-grilled, adorned with silver leaf, garlic chutney.",
  //           fullDesc:
  //             "Creamy chicken kebabs marinated in rich cream and spices, char-grilled and served with a flavorful garlic chutney.",
  //           metrics: "260Gms | 729Kcal | $22",
  //           image:
  //             "./assets/img/modal-images/food-menu/chicken-malai-tikka.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Tandoori Lamb Chops",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Flavorful and marinated lamb chops char-grilled to perfection, pineapple & green chili chutney.",
  //           fullDesc:
  //             "Juicy lamb chops marinated in aromatic spices, char-grilled to perfection, and served with a refreshing pineapple and green chili chutney.",
  //           metrics: "260Gms | 804Kcal | $35",
  //           image:
  //             "./assets/img/modal-images/food-menu/tandoori-lamb-chops.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Purani Dilli Chole Bhature",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "A semi-dry specialty preparation of spicy chickpea served with leavened deep-fried bread.",
  //           fullDesc:
  //             "A classic combination of spicy chickpeas served with fluffy bhature, a popular dish from Old Delhi.",
  //           metrics: "675 Kcal | 320g | $18",
  //           image:
  //             "./assets/img/modal-images/food-menu/purani-dilli-chole-bhature.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Basil Paneer Rarah",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Cottage cheese cubes simmered in onion-tomato masala gravy, flavored with basil.",
  //           fullDesc:
  //             "Tender cottage cheese cubes cooked in a savory onion-tomato masala, infused with aromatic basil for a delightful flavor.",
  //           metrics: "460Gms | 955Kcal | $26",
  //           image: "./assets/img/modal-images/food-menu/basil-paneer-rarah.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Fenugreek Cashew Curry",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Fenugreek leaves and green peas simmered in creamy nuts gravy with cashew nuts and lotus seeds.",
  //           fullDesc:
  //             "A delightful dish of fenugreek leaves and green peas cooked in a rich, creamy cashew gravy, seasoned with aromatic spices.",
  //           metrics: "460Gms | 960Kcal | $26",
  //           image:
  //             "./assets/img/modal-images/food-menu/kaju-methi-malai-matar.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "The Delhi Lounge Dal Makhani",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "24 hour slow cooked black lentils, finished with fresh cream and butter.",
  //           fullDesc:
  //             "Rich and creamy black lentils slow-cooked for 24 hours, finished with a generous amount of fresh cream and butter for an indulgent taste.",
  //           metrics: "340Gms | 710Kcal | $22",
  //           image:
  //             "./assets/img/modal-images/food-menu/delhi-lounge-dal-makhani.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //       ],
  //     },
  //     {
  //       subCategory: "Signature Cuisine",
  //       type: "",
  //       backgroundImage: "../assets/img/menu-images/pageg.jpg",
  //       items: [
  //         {
  //           title: "Chilean Sea Bass Coconut Curry",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Chilean Sea Bass delicately simmered in a coconut broth, tempered with mustard seeds.",
  //           fullDesc:
  //             "Delicate Chilian Sea Bass cooked to perfection in a creamy coconut broth, enhanced with the richness of mustard seeds, offering a comforting and flavorful dish.",
  //           metrics: "440Gms | 1360Kcal | $28",
  //           image:
  //             "./assets/img/modal-images/food-menu/chilian-sea-bass-coconut-curry.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "The Delhi Lounge Butter Chicken",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Tender chicken pieces cooked in smoky creamy tomato-based gravy, infused with aromatic spices.",
  //           fullDesc:
  //             "Juicy chicken pieces simmered in a velvety creamy tomato-based gravy, enriched with a blend of aromatic spices for a rich, indulgent dish.",
  //           metrics: "460Gms | 1240Kcal | $28",
  //           image:
  //             "./assets/img/modal-images/food-menu/delhi-lounge-butter-chicken.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Kali Mirch Chicken",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Grilled chicken malai pieces simmered in creamy nuts gravy, enhanced with black pepper.",
  //           fullDesc:
  //             "Tender grilled chicken in a creamy nut gravy, perfectly seasoned with black pepper for an exquisite taste experience.",
  //           metrics: "460Gms | 1210Kcal | $28",
  //           image: "./assets/img/modal-images/food-menu/kali-mirch-chicken.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "The Delhi Lounge Goat Rarah",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Tender mutton cooked in spicy and tangy tomato-based gravy with minced goat meat.",
  //           fullDesc:
  //             "Succulent pieces of mutton cooked in a spicy and tangy tomato gravy, complemented with minced goat meat for added richness.",
  //           metrics: "480Gms | 1420Kcal | $34",
  //           image: "./assets/img/modal-images/food-menu/bakre-ke-nakhre.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "The Delhi Lounge Imperial Raan",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "48-hours slow-cooked leg of spring lamb, char-grilled, adorned with 22 carat gold, & pine nuts.",
  //           fullDesc:
  //             "An exquisite dish featuring a leg of spring lamb that is slow-cooked for 48 hours, char-grilled, and flamb\xe9ed with dark rum and garnished with pine nuts and edible gold for a luxurious touch.",
  //           metrics: "1600Gms | 3760Kcal | $125",
  //           image: "./assets/img/modal-images/food-menu/imperial-raan.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Parda Goat Dum Biryani",
  //           origin: "Non-Vegetarian",
  //           tagline: "",
  //           desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of goat, served with raita.",
  //           fullDesc:
  //             "A flavorful dum biryani made with long-grain basmati rice layered with succulent goat meat, served with a side of raita.",
  //           metrics: "460Gms | 1078Kcal | $28",
  //           image:
  //             "./assets/img/modal-images/food-menu/dum-mutton-parda-biryani.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Baileys Rasmalai",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Rasmalai enhanced with Baileys Irish Cream.",
  //           fullDesc:
  //             "Delicate paneer discs soaked in rich and creamy Baileys-infused milk, topped with nuts.",
  //           metrics: "100Gms | 368Kcal | $14",
  //           image: "./assets/img/modal-images/food-menu/baileys-rasmalai.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //         {
  //           title: "Rasgulla Tiramisu",
  //           origin: "Vegetarian",
  //           tagline: "",
  //           desc: "Filter coffee soaked reduced milk spheres layered with cream cheese topped with dark cocoa.",
  //           fullDesc:
  //             "Soft and spongy dumplings made from chhena, sweetened with jaggery and soaked in syrup.",
  //           metrics: "120Gms | 425Kcal | $16",
  //           image: "./assets/img/modal-images/food-menu/jaggery-rasgulla.jpg",
  //           chefSpecial: false,
  //           vegan: false,
  //           peanutAllergy: false
  //       },
  //       ],
  //     },
  //   ],
  // },
  {
    category: "Salads & Soups",
    type: "",
    backgroundImage: "../assets/img/menu-images/pageg.jpg",
    items: [
      {
        title: "Desi-Caeser Salad (Malai Broccoli | Malai Chicken)",
        origin: "Vegetarian",
        tagline: "A fresh and vibrant tropical salad",
        desc: "A twist to the iconic salad featuring crisp romaine, caeser dressing, parmesan, & your choice of toppings.",
        fullDesc:
          "A refreshing blend of ripe mango and creamy avocado, complemented by the crunch of red onion, jalapeno's heat, and fresh coriander, served on a bed of baby arugula.",
        metrics: "180Gms | 178Kcal | $12 | $14",
        image: "./assets/img/modal-images/food-menu/imag.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Tandoori Pineapple & Kale Salad",
        origin: "Vegetarian",
        tagline: "",
        desc: "Charred pineapple marinated in tandoori spices, tossed with kale, feta cheese, & mint yogurt dressing.",
        fullDesc:
          "This nutritious salad combines the crunch of pomegranate seeds and the lightness of quinoa with fresh vegetables and a hint of mint and coriander.",
        metrics: "180Gms | 116Kcal | $12",
        image: "./assets/img/modal-images/food-menu/imag.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Smokey Tomato Soup",
        origin: "Vegetarian",
        tagline: "",
        desc: "Char-grilled tomato broth, delicately spiced, enhanced with the freshness of coriander.",
        fullDesc:
          "A rich and flavorful shorba made from char-grilled tomatoes, delicately spiced, and finished with fresh coriander for a smoky aroma.",
        metrics: "150Gms | 133Kcal | $6",
        image: "./assets/img/modal-images/food-menu/smokey-tomato-shorba.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Fenugreek Chicken Soup",
        origin: "Non-Vegetarian",
        tagline: "",
        desc: "Exquisitely spiced chicken broth, enhanced with fenugreek leaves.",
        fullDesc:
          "A hearty chicken broth infused with aromatic spices and the unique flavor of fenugreek leaves, offering a comforting start to your meal.",
        metrics: "150Gms | 154Kcal | $8",
        image:
          "./assets/img/modal-images/food-menu/chicken-fenugreek-shorba.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
    ],
  },
  {
    category: "Chaat",
    type: "",
    backgroundImage: "../assets/img/menu-images/pageg.jpg",
    items: [
      {
        title: "Pani Puri (Jaljeera | Gud Imli | Pineapple)",
        origin: "Vegetarian",
        tagline: "",
        desc: "Street style puffs stuffed with chickpeas and potatoes, topped with flavored waters.",
        fullDesc:
          "A classic Indian street snack featuring crispy puris filled with a tangy mix of flavored waters, chickpeas, and potatoes, providing an explosion of taste.",
        metrics: "180Gms | 197Kcal | $12",
        image: "./assets/img/modal-images/food-menu/pani-puri.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Karol Bagh Aloo Tikki",
        origin: "Vegetarian",
        tagline: "",
        desc: "Stuffed potato patties, topped with whipped yogurt and chutneys.",
        fullDesc:
          "Crispy stuffed potato patties topped with white peas, a dollop of whipped yogurt, and a drizzle of tangy chutneys.",
        metrics: "120Gms | 102Kcal | $12",
        image: "./assets/img/modal-images/food-menu/karol-bagh-aloo-tikki.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Bhalla Papdi Chaat",
        origin: "Vegetarian",
        tagline: "",
        desc: "Yellow lentil dumplings soaked in sweetened yogurt with chutneys, served with crisp discs.",
        fullDesc:
          "Soft black lentil dumplings soaked in sweetened yogurt, topped with tangy chutneys and served with crispy discs for texture.",
        metrics: "150Gms | 204Kcal | $12",
        image: "./assets/img/modal-images/food-menu/bhalla-papdi-chaat.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Samosa Platter",
        origin: "Vegetarian",
        tagline: "",
        desc: "Crisp fried triangular pastry, stuffed with Paneer | Potato | Peas | Corn mixtures.",
        fullDesc:
          "A delightful platter of crispy samosas filled with a savory mix of cottage cheese, potatoes, peas, and corn, served with chutney.",
        metrics: "160Gms | 320Kcal | $10",
        image: "./assets/img/modal-images/food-menu/samosa-platter.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Palak Patta Chaat",
        origin: "Vegetarian",
        tagline: "",
        desc: "Crispy fried spinach leaves tossed with spices, yogurt, and chutneys.",
        fullDesc:
          "Crispy fried spinach leaves drizzled with yogurt and spicy chutneys, creating a delightful contrast of flavors.",
        metrics: "160Gms | 198Kcal | $12",
        image: "./assets/img/modal-images/food-menu/palak-patta-chaat.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
    ],
  },
  {
    category: "Appetizers",
    subCategories: [
      {
        subCategory: "Appetizers",
        type: "Vegetarian",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "Tandoori Cottage Cheese",
            origin: "Vegetarian",
            tagline: "",
            desc: "Stuffed paneer, capsicum and onions marinated in yogurt and char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Marinated cottage cheese, capsicum, and onions char-grilled to perfection, served with a zesty lemon and black pepper chutney.",
            metrics: "250Gms | 643Kcal | $22",
            image:
              "./assets/img/modal-images/food-menu/tandoori-cottage-cheese.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Truffle Malai Broccoli",
            origin: "Vegetarian",
            tagline: "",
            desc: "Tender broccoli in a mixture of cream and spices, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Tender broccoli cooked in a creamy mixture, char-grilled to perfection, served with a cranberry and ginger sauce for a gourmet touch.",
            metrics: "250Gms | 283Kcal | $18",
            image:
              "./assets/img/modal-images/food-menu/malai-brocolli-tikka.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Tandoori Russet Potatoes",
            origin: "Vegetarian",
            tagline: "",
            desc: "Scooped potatoes stuffed with a mixture of spiced potatoes and dry fruits, char-grilled, garlic chutney.",
            fullDesc:
              "Scooped russet potatoes stuffed with a flavorful mixture of spiced potatoes and dry fruits, char-grilled for a smoky finish.",
            metrics: "250Gms | 319Kcal | $18",
            image:
              "./assets/img/modal-images/food-menu/tandoori-russet-potatoes.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Peas & Mint Kebab",
            origin: "Vegetarian",
            tagline: "",
            desc: "Ground green pea patties enhanced with fresh mint and stuffed with cheese, cranberry & ginger launji.",
            fullDesc:
              "Light and flavorful ground green pea patties infused with fresh mint, served with a tangy cranberry and ginger launji.",
            metrics: "250Gms | 337Kcal | $18",
            image: "./assets/img/modal-images/food-menu/matar-ke-kebab.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Beetroot Shammi Labgeer",
            origin: "Vegetarian",
            tagline: "",
            desc: "Melt-in-mouth beetroot patties stuffed with hung yogurt, lemon & black pepper chutney.",
            fullDesc:
              "Delicately spiced beetroot patties served with a refreshing lemon and black pepper chutney that enhances the earthy flavors.",
            metrics: "250Gms | 311Kcal | $18",
            image:
              "./assets/img/modal-images/food-menu/betroot-shammi-labgeer.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Garden Grill Seekh",
            origin: "Vegetarian",
            tagline: "",
            desc: "Minced vegetables marinated and skewered, char-grilled, pineapple & green chili chutney.",
            fullDesc:
              "Grilled minced vegetable kebabs, skewered and served with a sweet and spicy pineapple and green chili chutney.",
            metrics: "250Gms | 325Kcal | $18",
            image:
              "./assets/img/modal-images/food-menu/garden-grill-seekh-kebab.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
      {
        subCategory: "Appetizers",
        type: "Seafood",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "Tandoori Lobster",
            origin: "Seafood",
            tagline: "",
            desc: "Lobster tail, marinated with spices, char-grilled, pineapple & green chili chutney.",
            fullDesc:
              "Jumbo freshwater prawns marinated in a blend of aromatic spices and char-grilled, served with a refreshing pineapple and green chili chutney.",
            metrics: "250Gms | 415Kcal | $38",
            image: "./assets/img/modal-images/food-menu/tandoori-prawns.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Ajwaini Tilapia Tikka",
            origin: "Seafood",
            tagline: "",
            desc: "Tilapia steaks marinated with carom seeds, yogurt, and spices, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Delicious fish steaks marinated with aromatic carom seeds and yogurt, char-grilled to perfection and served with a tangy cranberry and ginger chutney.",
            metrics: "250Gms | 487Kcal | $24",
            image: "./assets/img/modal-images/food-menu/fish-tikka.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Tandoori Pomfret",
            origin: "Seafood",
            tagline: "",
            desc: "Whole silver Pomfret, marinated with spices, char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Whole silver pomfret marinated in spices and char-grilled to perfection, served with a flavorful garlic chutney.",
            metrics: "220Gms | 359Kcal | $30",
            image: "./assets/img/modal-images/food-menu/tandoori-pomfret.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
      {
        subCategory: "Appetizers",
        type: "Poultry",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "Chicken Tikka",
            origin: "Poultry",
            tagline: "",
            desc: "Morsels of chicken marinated in a spicy yogurt marinade, char-grilled, pineapple & green chili chutney.",
            fullDesc:
              "Succulent morsels of chicken marinated in a spicy yogurt marinade and char-grilled, served with a refreshing pineapple and green chili chutney.",
            metrics: "260Gms | 684Kcal | $24",
            image: "./assets/img/modal-images/food-menu/chicken-tikka.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Chandi Tikka",
            origin: "Poultry",
            tagline: "",
            desc: "Creamy chicken kebabs marinated in cream and spices, char-grilled, adorned with silver leaf, garlic chutney.",
            fullDesc:
              "Creamy chicken kebabs marinated in rich cream and spices, char-grilled and served with a flavorful garlic chutney.",
            metrics: "260Gms | 729Kcal | $24",
            image:
              "./assets/img/modal-images/food-menu/chicken-malai-tikka.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Reshmi Seekh",
            origin: "Poultry",
            tagline: "",
            desc: "Minced chicken kebabs marinated and skewered, char-grilled, lemon & black pepper chutney.",
            fullDesc:
              "Juicy minced chicken kebabs marinated with spices, skewered, char-grilled, and served with a zesty lemon and black pepper chutney.",
            metrics: "260Gms | 976Kcal | $24",
            image: "./assets/img/modal-images/food-menu/reshmi-seekh-kebab.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Tandoori Chicken (Half)",
            origin: "Poultry",
            tagline: "",
            desc: "Whole chicken marinated in spicy yogurt marinade, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Experience the rich flavors of our Tandoori Chicken—succulent chicken marinated in a blend of spices, char-grilled to perfection, and served with a zesty lemon and black pepper chutney. A true delight for the senses!",
            metrics: "350Gms | 732Kcal | $20",
            image:
              "./assets/img/modal-images/food-menu/tandoori-chicken-(half).jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Tandoori Chicken (Full)",
            origin: "Poultry",
            tagline: "",
            desc: "Whole chicken marinated in spicy yogurt marinade, char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Experience the rich flavors of our Tandoori Chicken—succulent chicken marinated in a blend of spices, char-grilled to perfection, and served with a zesty lemon and black pepper chutney. A true delight for the senses!",
            metrics: "750Gms | 1529Kcal | $30",
            image:
              "./assets/img/modal-images/food-menu/tandoori-chicken-(full).jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
      {
        subCategory: "Appetizers",
        type: "Meats",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "Goat Seekh",
            origin: "Meats",
            tagline: "",
            desc: "Minced goat meat marinated in spices, skewered and char-grilled, cranberry & ginger launji.",
            fullDesc:
              "Minced goat meat skewered with colorful peppers, char-grilled, and served with a zesty cranberry and ginger chutney.",
            metrics: "260Gms | 718Kcal | $28",
            image:
              "./assets/img/modal-images/food-menu/mutton-seekh-gilafi.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Tandoori Lamb Chops",
            origin: "Meats",
            tagline: "",
            desc: "Flavorful and marinated lamb chops char-grilled to perfection, pineapple & green chili chutney.",
            fullDesc:
              "Juicy lamb chops marinated in aromatic spices, char-grilled to perfection, and served with a refreshing pineapple and green chili chutney.",
            metrics: "260Gms | 804Kcal | $38",
            image:
              "./assets/img/modal-images/food-menu/tandoori-lamb-chops.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
    ],
  },

  {
    category: "Entr\xe9es",
    subCategories: [
      {
        subCategory: "Entr\xe9es",
        type: "Vegetarian",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Basil Paneer Rarah",
            origin: "Vegetarian",
            tagline: "",
            desc: "Cottage cheese cubes simmered in onion-tomato masala gravy, flavored with basil.",
            fullDesc:
              "Tender cottage cheese cubes cooked in a savory onion-tomato masala, infused with aromatic basil for a delightful flavor.",
            metrics: "460Gms | 955Kcal | $26",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Paneer Tikka Masala",
            origin: "Vegetarian",
            tagline: "",
            desc: "Grilled cottage cheese tikka in creamy tomato-based gravy, infused with aromatic spices.",
            fullDesc:
              "Grilled paneer tikka pieces served in a rich and creamy tomato-based gravy, laced with aromatic spices for a delightful experience.",
            metrics: "440Gms | 1050Kcal | $22",
            image:
              "./assets/img/modal-images/food-menu/paneer-tikka-masala.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Paneer Khurchan",
            origin: "Vegetarian",
            tagline: "",
            desc: "Spiced cottage cheese cooked with onions, tomatoes, bell peppers, and aromatic spices.",
            fullDesc:
              "A hearty dish of cottage cheese saut\xe9ed with onions, tomatoes, and bell peppers, seasoned with aromatic spices for a flavorful finish.",
            metrics: "460Gms | 930Kcal | $24",
            image: "./assets/img/modal-images/food-menu/paneer-khurchan.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Saag Paneer",
            origin: "Vegetarian",
            tagline: "",
            desc: "Cottage cheese cooked in luscious green gravy seasoned with spices.",
            fullDesc:
              "Soft paneer cubes cooked in a creamy spinach gravy, perfectly seasoned with spices for a rich flavor.",
            metrics: "460Gms | 1000Kcal | $22",
            image: "./assets/img/modal-images/food-menu/palak-paneer.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Kanak Kofta",
            origin: "Vegetarian",
            tagline: "",
            desc: "Exquisite croquettes of paneer and dry fruits simmered in a creamy nuts and yogurt gravy.",
            fullDesc:
              "Deliciously creamy malai kofta made with deep-fried potato and cottage cheese dumplings in a rich and nutty gravy.",
            metrics: "440Gms | 1100Kcal | $24",
            image: "./assets/img/modal-images/food-menu/malai-kofta.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Fenugreek Cashew Curry",
            origin: "Vegetarian",
            tagline: "",
            desc: "Fenugreek leaves and green peas simmered in creamy nuts gravy with cashew nuts and lotus seeds.",
            fullDesc:
              "A delightful dish of fenugreek leaves and green peas cooked in a rich, creamy cashew gravy, seasoned with aromatic spices.",
            metrics: "460Gms | 960Kcal | $26",
            image:
              "./assets/img/modal-images/food-menu/kaju-methi-malai-matar.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Dum Aloo Kashmiri",
            origin: "Vegetarian",
            tagline: "",
            desc: "Stuffed potatoes cooked in spicy and aromatic red gravy.",
            fullDesc:
              "Baby potatoes stuffed with spices and cooked in a rich, aromatic red gravy, offering a taste of Kashmiri cuisine.",
            metrics: "440Gms | 920Kcal | $22",
            image: "./assets/img/modal-images/food-menu/dum-aloo-kashmiri.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Charcoal Roasted Baingan Bharta",
            origin: "Vegetarian",
            tagline: "",
            desc: "Roasted and mashed eggplant cooked with tomatoes, onions, and spices.",
            fullDesc:
              "Charcoal-roasted eggplant mashed and cooked with a flavorful blend of tomatoes, onions, and spices for a smoky taste.",
            metrics: "460Gms | 310Kcal | $18",
            image:
              "./assets/img/modal-images/food-menu/charcoal-roasted-baingan-bharta.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Cauliflower Guncha-wa-Keema",
            origin: "Vegetarian",
            tagline: "",
            desc: "A delicate preparation of tender cauliflower florets and bell peppers, tossed in tomatoes and fenugreek.",
            fullDesc:
              "A delicate preparation of tender cauliflower florets and bell peppers, tossed in tomatoes and fenugreek.",
            metrics: "460Gms | 465Kcal | $18",
            image: "./assets/img/modal-images/food-menu/aloo-gobhi.jpg",
            chefSpecial: false,
            vegan: true,
            peanutAllergy: false,
          },
          {
            title: "Dal Tadka",
            origin: "Vegetarian",
            tagline: "",
            desc: "Toor & moong lentils cooked with turmeric, tempered with ghee, cumin, and asafoetida.",
            fullDesc:
              "A comforting dish of moong and toor lentils cooked with turmeric and tempered with aromatic ghee, cumin, and asafoetida, creating a flavorful dal.",
            metrics: "320Gms | 485Kcal | $18",
            image: "./assets/img/modal-images/food-menu/dal-tadka.jpg",
            chefSpecial: false,
            vegan: true,
            peanutAllergy: false,
          },
          {
            title: "The Delhi Lounge Dal Makhani",
            origin: "Vegetarian",
            tagline: "",
            desc: "24 hour slow cooked black lentils, finished with fresh cream and butter.",
            fullDesc:
              "Rich and creamy black lentils slow-cooked for 24 hours, finished with a generous amount of fresh cream and butter for an indulgent taste.",
            metrics: "340Gms | 710Kcal | $22",
            image:
              "./assets/img/modal-images/food-menu/delhi-lounge-dal-makhani.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
      {
        subCategory: "Entr\xe9es",
        type: "Seafood",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "Kadhai Prawns",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Freshwater prawns tossed with tomatoes, capsicum and dry spices, tempered with ginger, green chilies.",
            fullDesc:
              "Succulent freshwater prawns stir-fried with vibrant tomatoes and capsicum, seasoned with aromatic dry spices and tempered with ginger and green chilies.",
            metrics: "440Gms | 840Kcal | $26",
            image: "./assets/img/modal-images/food-menu/kadhai-prawns.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Chilean Sea Bass Coconut Curry",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Chilean Sea Bass delicately simmered in a coconut broth, tempered with mustard seeds.",
            fullDesc:
              "Delicate Chilian Sea Bass cooked to perfection in a creamy coconut broth, enhanced with the richness of mustard seeds, offering a comforting and flavorful dish.",
            metrics: "440Gms | 1360Kcal | $28",
            image:
              "./assets/img/modal-images/food-menu/chilian-sea-bass-coconut-curry.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
      {
        subCategory: "Entr\xe9es",
        type: "Poultry",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "The Delhi Lounge Butter Chicken",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Tender chicken pieces cooked in smoky creamy tomato-based gravy, infused with aromatic spices.",
            fullDesc:
              "Juicy chicken pieces simmered in a velvety creamy tomato-based gravy, enriched with a blend of aromatic spices for a rich, indulgent dish.",
            metrics: "460Gms | 1240Kcal | $28",
            image:
              "./assets/img/modal-images/food-menu/delhi-lounge-butter-chicken.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Chicken Tikka Masala",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Grilled chicken tikka pieces simmered in a rich tomato and onion gravy.",
            fullDesc:
              "Marinated grilled chicken tikka cooked in a rich and flavorful tomato and onion gravy, a classic Indian dish that packs a punch.",
            metrics: "460Gms | 1320Kcal | $26",
            image:
              "./assets/img/modal-images/food-menu/chicken-tikka-masala.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Tawa Chicken",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Shredded chicken tikka pieces tossed with fresh ginger, chili, onions, and tomatoes.",
            fullDesc:
              "Shredded chicken tikka saut\xe9ed with fresh ginger, chilies, onions, and tomatoes, delivering a burst of flavor in every bite.",
            metrics: "440Gms | 863Kcal | $26",
            image:
              "./assets/img/modal-images/food-menu/delhi-lounge-tawa-chicken.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Chicken Khurchan",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Char-grilled chicken pieces cooked with onions, tomatoes, bell peppers, and aromatic spices.",
            fullDesc:
              "Char-grilled chicken pieces saut\xe9ed with onions, tomatoes, and bell peppers, seasoned with aromatic spices for a tantalizing flavor.",
            metrics: "460Gms | 1190Kcal | $26",
            image: "./assets/img/modal-images/food-menu/chicken-khurchan.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Kali Mirch Chicken",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Grilled chicken malai pieces simmered in creamy nuts gravy, enhanced with black pepper.",
            fullDesc:
              "Tender grilled chicken in a creamy nut gravy, perfectly seasoned with black pepper for an exquisite taste experience.",
            metrics: "460Gms | 1210Kcal | $28",
            image: "./assets/img/modal-images/food-menu/kali-mirch-chicken.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Saag Chicken",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Tender chicken pieces cooked in luscious green gravy delicately seasoned with spices.",
            fullDesc:
              "Tender chicken pieces simmered in a creamy green gravy made with spinach and spices, offering a rich and nutritious flavor.",
            metrics: "460Gms | 1150Kcal | $26",
            image: "./assets/img/modal-images/food-menu/saag-chicken.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
      {
        subCategory: "Entr\xe9es",
        type: "Meats",
        backgroundImage: "../assets/img/menu-images/pageg.jpg",
        items: [
          {
            title: "Tawa Masala Seekh",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Luscious goat seekh kebab tossed in spicy masala gravy.",
            fullDesc:
              "Succulent goat seekh kebabs tossed in a spicy masala gravy, offering a perfect blend of flavors and textures.",
            metrics: "440Gms | 1220Kcal | $28",
            image:
              "./assets/img/modal-images/food-menu/tawa-masala-seekh-kebab.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "Goat Rogan Josh",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Slow-cooked lamb curry with a flavorful blend of aromatic Kashmiri spices and yogurt.",
            fullDesc:
              "A classic lamb curry made with tender pieces of mutton, slow-cooked with aromatic Kashmiri spices and yogurt for a rich flavor.",
            metrics: "460Gms | 1440Kcal | $30",
            image: "./assets/img/modal-images/food-menu/mutton-rogan-josh.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "The Delhi Lounge Goat Rarah",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "Tender mutton cooked in spicy and tangy tomato-based gravy with minced goat meat.",
            fullDesc:
              "Succulent pieces of mutton cooked in a spicy and tangy tomato gravy, complemented with minced goat meat for added richness.",
            metrics: "480Gms | 1420Kcal | $34",
            image: "./assets/img/modal-images/food-menu/bakre-ke-nakhre.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
          {
            title: "The Delhi Lounge Imperial Raan",
            origin: "Non-Vegetarian",
            tagline: "",
            desc: "48-hours slow-cooked leg of spring lamb, char-grilled, adorned with 22 carat gold, & pine nuts.",
            fullDesc:
              "An exquisite dish featuring a leg of spring lamb that is slow-cooked for 48 hours, char-grilled, and flamb\xe9ed with dark rum and garnished with pine nuts and edible gold for a luxurious touch.",
            metrics: "1600Gms | 3760Kcal | $100",
            image: "./assets/img/modal-images/food-menu/imperial-raan.jpg",
            chefSpecial: false,
            vegan: false,
            peanutAllergy: false,
          },
        ],
        peanutAllergy: false,
      },
    ],
  },
  // {
  //   category: "Combos",
  //   type: "",
  //   backgroundImage: "../assets/img/menu-images/pageg.jpg",
  //   items: [
  //     {
  //       title: "Purani Dilli Chole Bhature",
  //       origin: "Vegetarian",
  //       tagline: "",
  //       desc: "A semi-dry specialty preparation of spicy chickpea served with leavened deep-fried bread.",
  //       fullDesc:
  //         "A classic combination of spicy chickpeas served with fluffy bhature, a popular dish from Old Delhi.",
  //       metrics: "675 Kcal | 320g | $18",
  //       image:
  //         "./assets/img/modal-images/food-menu/purani-dilli-chole-bhature.jpg",
  //       chefSpecial: false,
  //       vegan: false,
  //       peanutAllergy: false,
  //     },
  //     {
  //       title: "Sarson Ka Saag, Makke ki Roti",
  //       origin: "Vegetarian",
  //       tagline: "",
  //       desc: "Punjabi specialty of mustard greens served with cornmeal flatbread, ghee, and jaggery.",
  //       fullDesc:
  //         "A traditional dish of mustard greens paired with freshly made makke ki roti, served with a dollop of ghee and a touch of jaggery for sweetness.",
  //       metrics: "415 Kcal | 320g | $18",
  //       image:
  //         "./assets/img/modal-images/food-menu/sarson-ka-saag-makke-ki-roti.jpg",
  //       chefSpecial: false,
  //       vegan: false,
  //       peanutAllergy: false,
  //     },
  //   ],
  // },

  {
    category: "Rice",
    type: "",
    backgroundImage: "../assets/img/menu-images/pageg.jpg",
    items: [
      {
        title: "Steamed Basmati Rice",
        origin: "Vegetarian",
        tagline: "",
        desc: "",
        fullDesc:
          "Fluffy and aromatic steamed basmati rice, a perfect accompaniment to curries and dals.",
        metrics: "250Gms | 210Kcal | $4",
        image: "./assets/img/modal-images/food-menu/steamed-basmati-rice.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Cumin Coriander Rice",
        origin: "Vegetarian",
        tagline: "",
        desc: "",
        fullDesc:
          "Fragrant basmati rice cooked with cumin and coriander, adding a delightful flavor to your meal.",
        metrics: "250Gms | 225Kcal | $6",
        image: "./assets/img/modal-images/food-menu/cumin-coriander-rice.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Jackfruit Dum Biryani",
        origin: "Vegetarian",
        tagline: "",
        desc: "Spiced jackfruit layered with fragrant Basmati rice, served with raita.",
        fullDesc:
          "A unique biryani made with spiced jackfruit layered between fragrant basmati rice, served with refreshing raita.",
        metrics: "460Gms | 810Kcal | $22",
        image:
          "./assets/img/modal-images/food-menu/dum-jackfruit-parda-biryani.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Chicken Dum Biryani",
        origin: "Non-Vegetarian",
        tagline: "",
        desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of chicken, served with raita.",
        fullDesc:
          "An aromatic dum biryani with long-grain basmati rice layered with tender chicken pieces, served with raita for added flavor.",
        metrics: "460Gms | 983Kcal | $24",
        image:
          "./assets/img/modal-images/food-menu/dum-chicken-parda-biryani.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Parda Goat Dum Biryani",
        origin: "Non-Vegetarian",
        tagline: "",
        desc: "Awadhi preparation of long grain Basmati rice, layered with choicest cuts of goat, served with raita.",
        fullDesc:
          "A flavorful dum biryani made with long-grain basmati rice layered with succulent goat meat, served with a side of raita.",
        metrics: "460Gms | 1078Kcal | $28",
        image:
          "./assets/img/modal-images/food-menu/dum-mutton-parda-biryani.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
    ],
  },
  {
    category: "Breads",
    type: "",
    backgroundImage: "../assets/img/menu-images/pageg.jpg",
    items: [
      {
        title: "Tandoori Roti (Plain|Butter)",
        origin: "Vegetarian",
        tagline: "",
        // desc: "Traditional Indian unleavened bread baked in a tandoor.",
        // fullDesc:
        //   "Soft and warm tandoori roti, served plain or brushed with butter for an extra touch of richness.",
        metrics: "180 Kcal (Plain) | 224 Kcal (Butter) | 60g | $3",
        image: "./assets/img/modal-images/food-menu/butter-tandoori-roti.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Missi Roti (Plain|Butter)",
        origin: "Vegetarian",
        tagline: "",
        // desc: "Flavored Indian bread made from a mixture of whole wheat flour and gram flour.",
        // fullDesc:
        //   "Nutritious missi roti made from a blend of whole wheat and gram flour, served plain or with butter for a delightful taste.",
        metrics: "150 Kcal (Plain) | 194 Kcal (Butter) | 60g | $4",
        image: "./assets/img/modal-images/food-menu/missi-roti.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Laccha Paratha (Plain | Butter | Pudina | Mirchi)",
        origin: "Vegetarian",
        tagline: "",
        // desc: "Layered flatbread cooked on a tawa, crispy and flaky.",
        // fullDesc:
        //   "Flaky and crispy laccha paratha, layered and cooked on a tawa, available in plain, butter, pudina, or mirchi flavors.",
        metrics: "360Kcal | 90g | $6",
        image: "./assets/img/modal-images/food-menu/butter-laccha-paratha.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Naan (Plain | Chur Chur | Garlic | Cheese)",
        origin: "Vegetarian",
        tagline: "",
        // desc: "Leavened Indian bread baked in a tandoor.",
        // fullDesc:
        //   "Soft and fluffy naan, made with leavened dough and cooked in a tandoor, available plain, buttered, with garlic, or stuffed with cheese.",
        metrics:
          "275-315 Kcal | 70-90g | Plain $3, Chur Chur $5, Garlic $5, Cheese $6",
        image: "./assets/img/modal-images/food-menu/butter-naan.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Kulcha (Aloo Pyaaz | Onion | Chicken & Cheese)",
        origin: "Vegetarian",
        tagline: "",
        // desc: "Stuffed Indian bread with various fillings.",
        // fullDesc:
        //   "Soft kulchas stuffed with a choice of potato, onion, or patties, baked in a tandoor for a perfect texture.",
        metrics:
          "410 Kcal (Aloo Pyaaz) | 390 Kcal (Onion) | 490 Kcal (Chicken) | 150g | $8-$9",
        image: "./assets/img/modal-images/food-menu/chicken-cheese-kulcha.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Bread Basket",
        origin: "Vegetarian",
        tagline: "",
        // desc: "Missi Roti, Pudina Parantha, Chur Chur Naan.",
        // fullDesc:
        //   "A delightful assortment of tandoori roti, laccha parantha, and garlic naan, perfect for sharing.",
        metrics: "873 Kcal | ~230g | $12",
        image: "./assets/img/modal-images/food-menu/assorted-bread-basket.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
    ],
  },
  {
    category: "Sides",
    type: "",
    backgroundImage: "../assets/img/menu-images/pageg.jpg",
    items: [
      {
        title: "Plain Dahi",
        origin: "Vegetarian",
        tagline: "",
        // desc: "A refreshing yogurt with herbs, best match with everything.",
        // fullDesc:
        //   "A simple and refreshing yogurt with herbs, providing a cool and creamy accompaniment to any meal.",
        metrics: "180Gms | 110Kcal | $4",
        image: "./assets/img/modal-images/food-menu/burrhani-raita.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
      {
        title: "Anardana Boondi Raita",
        origin: "Vegetarian",
        tagline: "",
        // desc: "A flavorful raita made with yogurt, boondi, and pomegranate seeds, offering a delightful crunch.",
        // fullDesc:
        //   "A tangy and creamy yogurt raita with crispy boondi and sweet pomegranate seeds, creating a perfect balance of flavors.",
        metrics: "180Gms | 165Kcal | $6",
        image: "./assets/img/modal-images/food-menu/anardana-boondi-raita.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Mixed Vegetable Raita",
        origin: "Vegetarian",
        tagline: "",
        // desc: "A classic raita featuring a mix of fresh vegetables in yogurt, making it a perfect accompaniment for spicy dishes.",
        // fullDesc:
        //   "Creamy yogurt mixed with fresh vegetables like cucumber, tomato, and carrot, offering a cooling effect to balance spicy meals.",
        metrics: "180Gms | 140Kcal | $6",
        image: "./assets/img/modal-images/food-menu/mixed-vegetable-raita.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Green Salad",
        origin: "Vegetarian",
        tagline: "",
        // desc: "A fresh and crunchy green salad made with seasonal vegetables, providing a light and healthy side dish.",
        // fullDesc:
        //   "A healthy and refreshing salad made with crisp seasonal vegetables, offering a perfect balance to heavier dishes.",
        metrics: "150Gms | 60Kcal | $6",
        image: "./assets/img/modal-images/food-menu/green-salad.jpg",
        chefSpecial: false,
        vegan: true,
        peanutAllergy: false,
      },
    ],
  },
  {
    category: "Desserts",
    type: "",
    backgroundImage: "../assets/img/menu-images/pageg.jpg",
    items: [
      {
        title: "Gulab Jamun",
        origin: "Vegetarian",
        tagline: "",
        desc: "Deep fried reduced milk spheres, soaked in a cardamom and saffron infused syrup.",
        fullDesc:
          "Deep-fried milk dumplings soaked in a sweet syrup, a classic Indian dessert that melts in your mouth.",
        metrics: "60Gms | 225Kcal | $8",
        image: "./assets/img/modal-images/food-menu/gulab-jamun.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Gajar Halwa",
        origin: "Vegetarian",
        tagline: "",
        desc: "Tender carrots cooked in ghee with reduced milk and cardamom syrup, garnished with nuts.",
        fullDesc:
          "A rich dessert made from grated carrots, milk, and nuts, cooked until creamy and sweetened to perfection.",
        metrics: "120Gms | 325Kcal | $8",
        image: "./assets/img/modal-images/food-menu/gajar-halwa.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Moong Dal Halwa",
        origin: "Vegetarian",
        tagline: "",
        desc: "Moong dal lentils cooked in ghee and saffron syrup, garnished with nuts.",
        fullDesc:
          "A delicious dessert made from split yellow lentils, cooked with ghee and sweetened with sugar, garnished with nuts.",
        metrics: "120Gms | 386Kcal | $8",
        image: "./assets/img/modal-images/food-menu/moong-dal-halwa.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Saffron Rabri",
        origin: "Vegetarian",
        tagline: "",
        desc: "Reduced milk dessert, adorned with rose petals, served chilled.",
        fullDesc:
          "A traditional Indian dessert made from thickened milk and flavored with saffron, served chilled for a delightful finish to your meal.",
        metrics: "100Gms | 285Kcal | $10",
        image: "./assets/img/modal-images/food-menu/saffron-rabri.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Baileys Rasmalai (Contains alcohol)",
        origin: "Vegetarian",
        tagline: "",
        desc: "Rasmalai enhanced with Baileys Irish Cream and contains alcohol.",
        fullDesc:
          "Delicate paneer discs soaked in rich and creamy Baileys-infused milk, topped with nuts.",
        metrics: "100Gms | 368Kcal | $10",
        image: "./assets/img/modal-images/food-menu/baileys-rasmalai.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Kulfi Falooda",
        origin: "Vegetarian",
        tagline: "",
        desc: "A frozen dessert of reduced milk, served with thin noodles soaked in a saffron syrup.",
        fullDesc:
          "Traditional Indian ice cream made with milk, flavored with cardamom, and served with falooda noodles.",
        metrics: "100Gms | 385Kcal | $8",
        image: "./assets/img/modal-images/food-menu/kulfi-falooda.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      {
        title: "Rasgulla Tiramisu",
        origin: "Vegetarian",
        tagline: "",
        desc: "Filter coffee soaked reduced milk spheres layered with cream cheese topped with dark cocoa.",
        fullDesc:
          "Soft and spongy dumplings made from chhena, sweetened with jaggery and soaked in syrup.",
        metrics: "120Gms | 425Kcal | $10",
        image: "./assets/img/modal-images/food-menu/imag.jpg",
        chefSpecial: false,
        vegan: false,
        peanutAllergy: false,
      },
      // {
      //   title: "Meetha Paan",
      //   origin: "Vegetarian",
      //   tagline: "",
      //   desc: "A fragrant betel leaf delicacy, filled with candied fennel, and aromatic spices. Refreshing and indulgent.",
      //   fullDesc:
      //     "A fragrant betel leaf delicacy, filled with candied fennel, and aromatic spices. Refreshing and indulgent.",
      //   metrics: "$3.99",
      //   image: "./assets/img/modal-images/food-menu/imag.jpg",
      //   chefSpecial: false,
      //   vegan: false,
      //   peanutAllergy: false,
      // },
    ],
  },
  {
    category: "Weekend Brunch",
    type: "",
    backgroundImage: "../assets/img/menu-images/brunchmenu8.jpg",
    items: [],
  },
];
export default menuData;
