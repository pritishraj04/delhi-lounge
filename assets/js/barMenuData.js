const barMenuData = [
  {
    category: "Classic Cocktails",
    subCategories: [
      {
        subCategory: "Classic Cocktails",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Rum and Coke",
            origin: "Cuba",
            tagline: "A timeless classic for any occasion.",
            desc: "Smooth rum mixed with refreshing cola for a simple yet satisfying cocktail.",
            fullDesc:
              "A universally loved combination of smooth rum and cola, served over ice, making it a perfect companion for relaxed evenings or lively celebrations.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Screwdriver",
            origin: "USA",
            tagline: "The perfect blend of citrus and spirits.",
            desc: "Vodka and orange juice combine for a refreshing, zesty cocktail.",
            fullDesc:
              "A simple yet vibrant cocktail featuring smooth vodka and freshly squeezed orange juice, delivering a refreshing citrus kick with every sip.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Cosmopolitan",
            origin: "USA",
            tagline: "Elegance in a glass.",
            desc: "A zesty mix of vodka, lime, cranberry juice, and triple sec.",
            fullDesc:
              "A stylish cocktail combining the tartness of cranberry and lime juices with smooth vodka and triple sec, served in a chilled martini glass for a touch of sophistication.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Old Fashioned",
            origin: "USA",
            tagline: "The grandfather of cocktails.",
            desc: "Bourbon, bitters, sugar, and orange peel create a timeless drink.",
            fullDesc:
              "A classic cocktail that highlights the bold flavors of bourbon, perfectly balanced with bitters, a touch of sugar, and the zest of orange peel, making it a true icon.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Mojito",
            origin: "Cuba",
            tagline: "Refreshment in every sip.",
            desc: "A cool mix of white rum, mint, lime, sugar, and club soda.",
            fullDesc:
              "This Cuban classic blends white rum with fresh mint leaves, lime juice, sugar, and sparkling soda for a refreshing cocktail perfect for warm days.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Martini",
            origin: "USA",
            tagline: "Sophistication in a glass.",
            desc: "A refined blend of gin, vermouth, and bitters, garnished with an olive or lemon twist.",
            fullDesc:
              "The ultimate cocktail of elegance, made with gin and dry vermouth, enhanced by a dash of bitters, and served with a choice of olive or lemon twist for a polished finish.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Bloody Mary",
            origin: "USA",
            tagline: "Bold, savory, and full of flavor.",
            desc: "A unique mix of vodka, tomato juice, and lemon, garnished with a celery stalk.",
            fullDesc:
              "This savory cocktail features vodka and tangy tomato juice, accented with lemon and spices, and garnished with a crisp celery stalk for a bold and refreshing experience.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Tom Collins",
            origin: "England",
            tagline: "A fizzy classic to brighten your day.",
            desc: "Gin, lemon juice, sugar, and sparkling water create a delightful cocktail.",
            fullDesc:
              "A refreshing cocktail featuring gin, fresh lemon juice, sugar, and sparkling water, served over ice for a light and bubbly experience.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Manhattan",
            origin: "USA",
            tagline: "A cocktail of timeless elegance.",
            desc: "Whiskey, vermouth, and bitters, garnished with a maraschino cherry.",
            fullDesc:
              "A rich and sophisticated cocktail made with whiskey, sweet vermouth, and bitters, topped with a maraschino cherry for a perfect blend of flavors.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Mai Tai",
            origin: "USA",
            tagline: "A tropical escape in every sip.",
            desc: "A vibrant mix of white and dark rums, orange curaçao, syrup, and lime juice.",
            fullDesc:
              "This tropical cocktail combines the bold flavors of white and dark rums, balanced with orange curaçao, syrup, and fresh lime juice for a vibrant and refreshing experience.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Long Island Iced Tea",
            origin: "USA",
            tagline: "A powerhouse of flavors.",
            desc: "A bold mix of vodka, tequila, rum, gin, triple sec, and cola.",
            fullDesc:
              "A robust cocktail featuring a unique blend of vodka, tequila, light rum, gin, triple sec, and a splash of cola, delivering a dynamic and refreshing taste.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      // {

      //   subCategory: "House Cocktails",
      //   type: "Non-Alcoholic",
      //   backgroundImage: "../assets/img/menu-images/page.jpg",
      //   items: [
      //     {
      //       title: "Very Berry Fizz",
      //       origin: "Fusion",
      //       tagline: "Berries with a sparkling twist.",
      //       desc: "A vibrant mix of mixed berries, star anise, citrus, and ginger ale.",
      //       fullDesc: "A refreshing concoction of mixed berries, star anise, and zesty citrus, topped with fizzy ginger ale, creating a drink that's bursting with flavor and charm.",
      //       metrics: "$12",
      //       image: "./assets/img/modal-images/bar-menu/very-berry-fizz.jpg",
      //       chefSpecial: false
      //     },
      //     {
      //       title: "Gondhraj Lemonade",
      //       origin: "India",
      //       tagline: "A zesty Indian refreshment.",
      //       desc: "Lemon saccharum paired with an aperitif and tonic water.",
      //       fullDesc: "A unique take on lemonade featuring the aromatic Gondhraj lime, blended with lemon saccharum, an aperitif, and effervescent tonic water for a refreshing twist.",
      //       metrics: "$12",
      //       image: "./assets/img/modal-images/bar-menu/gondhraj-lemonade.jpg",
      //       chefSpecial: false
      //     },
      //     {
      //       title: "Kiwi Fizz",
      //       origin: "Fusion",
      //       tagline: "A burst of tropical freshness.",
      //       desc: "A delightful mix of kiwi, mint, citrus, and fizz.",
      //       fullDesc: "A tropical delight combining the tangy sweetness of kiwi, the freshness of mint, a splash of citrus, and bubbly fizz, perfect for any occasion.",
      //       metrics: "$12",
      //       image: "./assets/img/modal-images/bar-menu/kiwi-fizz.jpg",
      //       chefSpecial: false
      //     },
      //     {
      //       title: "Orange Thyme Smash",
      //       origin: "Fusion",
      //       tagline: "Citrus meets herbal elegance.",
      //       desc: "A blend of orange, thyme, citrus, and pineapple cordial.",
      //       fullDesc: "A refreshing medley of juicy orange, aromatic thyme, and bright citrus, enhanced by the sweet notes of pineapple cordial for a drink that's both invigorating and satisfying.",
      //       metrics: "$12",
      //       image: "./assets/img/modal-images/bar-menu/orange-thyme-smash.jpg",
      //       chefSpecial: false
      //     },
      //     {
      //       title: "Cucumba",
      //       origin: "Fusion",
      //       tagline: "Cool and refreshing, naturally.",
      //       desc: "A light mix of cucumber, basil, elderflower, and citrus.",
      //       fullDesc: "A rejuvenating blend of fresh cucumber, fragrant basil, delicate elderflower, and a dash of citrus, delivering a cool and refreshing experience with every sip.",
      //       metrics: "$12",
      //       image: "./assets/img/modal-images/bar-menu/cucumba.jpg",
      //       chefSpecial: false
      //     },
      //   ],

      // },
    ],
  },
  {
    category: "House Cocktails",
    subCategories: [
      {
        subCategory: "House Cocktails",
        type: "Non-Alcoholic",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Very Berry Fizz",
            origin: "Fusion",
            tagline: "Berries with a sparkling twist.",
            desc: "A vibrant mix of mixed berries, star anise, citrus, and ginger ale.",
            fullDesc:
              "A refreshing concoction of mixed berries, star anise, and zesty citrus, topped with fizzy ginger ale, creating a drink that's bursting with flavor and charm.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Gondhraj Lemonade",
            origin: "India",
            tagline: "A zesty Indian refreshment.",
            desc: "Lemon saccharum paired with an aperitif and tonic water.",
            fullDesc:
              "A unique take on lemonade featuring the aromatic Gondhraj lime, blended with lemon saccharum, an aperitif, and effervescent tonic water for a refreshing twist.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Kiwi Fizz",
            origin: "Fusion",
            tagline: "A burst of tropical freshness.",
            desc: "A delightful mix of kiwi, mint, citrus, and fizz.",
            fullDesc:
              "A tropical delight combining the tangy sweetness of kiwi, the freshness of mint, a splash of citrus, and bubbly fizz, perfect for any occasion.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Orange Thyme Smash",
            origin: "Fusion",
            tagline: "Citrus meets herbal elegance.",
            desc: "A blend of orange, thyme, citrus, and pineapple cordial.",
            fullDesc:
              "A refreshing medley of juicy orange, aromatic thyme, and bright citrus, enhanced by the sweet notes of pineapple cordial for a drink that's both invigorating and satisfying.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Cucumba",
            origin: "Fusion",
            tagline: "Cool and refreshing, naturally.",
            desc: "A light mix of cucumber, basil, elderflower, and citrus.",
            fullDesc:
              "A rejuvenating blend of fresh cucumber, fragrant basil, delicate elderflower, and a dash of citrus, delivering a cool and refreshing experience with every sip.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "House Cocktails",
        type: "Alcoholic",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Banarasi Boulevardier",
            origin: "India",
            tagline: "A bold twist on a classic cocktail.",
            desc: "Whisky, Campari, sweet vermouth, saffron, and betel leaf.",
            fullDesc:
              "A sophisticated mix of whisky, Campari, and sweet vermouth infused with the richness of saffron and the earthy aroma of betel leaf, offering a unique Indian-inspired take on the Boulevardier.",
            metrics: "$15",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Royal Vodka Sour",
            origin: "Fusion",
            tagline: "A royal blend of floral and citrus notes.",
            desc: "Vodka, lemon saccharum, Campari, rose, and citrus.",
            fullDesc:
              "A regal cocktail featuring vodka and lemon saccharum, with hints of Campari and rose petals, rounded off by zesty citrus for a luxurious and refreshing experience.",
            metrics: "$15",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Tropical City",
            origin: "Fusion",
            tagline: "An exotic escape in a glass.",
            desc: "Rum, pineapple cordial, coconut, curry leaf, Campari, and citrus.",
            fullDesc:
              "A vibrant concoction of rum, tropical pineapple cordial, creamy coconut, and aromatic curry leaf, balanced with Campari and citrus for a truly tropical vibe.",
            metrics: "$15",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Guava Dark & Stormy",
            origin: "Fusion",
            tagline: "A storm of flavors with a guava twist.",
            desc: "Rum, pink guava, thyme, and citrus.",
            fullDesc:
              "A bold and refreshing drink combining the richness of rum with the tropical sweetness of pink guava, complemented by aromatic thyme and a splash of citrus.",
            metrics: "$15",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Raw Mango Picante",
            origin: "India",
            tagline: "A spicy, tangy treat for the adventurous.",
            desc: "Tequila, raw mango, citrus, celery, chili, and hemp seed salt.",
            fullDesc:
              "A zesty blend of tequila, tangy raw mango, and a kick of chili, balanced with citrus and celery, finished with hemp seed salt for a bold and flavorful experience.",
            metrics: "$15",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
    ],
  },
  // {
  //   category: "Wine",
  //   type: "",
  //   backgroundImage: "../assets/img/menu-images/page.jpg",
  //   items: [
  //     {
  //       title: "Casalforte, Prosecco Extra Dry",
  //       origin: "Italy",
  //       tagline: "A sparkling delight from Italy.",
  //       desc: "Crisp, refreshing prosecco with notes of pear and apple.",
  //       fullDesc: "This Italian prosecco offers a delightful balance of crisp acidity and gentle sweetness, with bright notes of pear and green apple, perfect for celebrations.",
  //       metrics: "$8 (Glass) | $33 (Bottle)"
  //     },
  //     {
  //       title: "Andre Clourt, Champagne Brut Grande Reserve (NV)",
  //       origin: "France",
  //       tagline: "Elegance in every bubble.",
  //       desc: "Classic French champagne with refined effervescence and complex flavors.",
  //       fullDesc: "A luxurious champagne featuring delicate bubbles, notes of brioche and citrus, and a finish that lingers with sophistication.",
  //       metrics: "$25 (Glass) | $101 (Bottle)"
  //     },
  //     {
  //       title: "Perelada, Cava Brut Rosé",
  //       origin: "Spain",
  //       tagline: "Vibrant pink bubbles with a Spanish flair.",
  //       desc: "A sparkling rosé with berry notes and a crisp finish.",
  //       fullDesc: "This cava offers a lively effervescence with flavors of red berries and a refreshing acidity, perfect for any occasion.",
  //       metrics: "$8 (Glass) | $32 (Bottle)"
  //     },
  //     {
  //       title: "Highway 12 Vineyards, Pinot Noir Rosé North Coast (2023)",
  //       origin: "USA",
  //       tagline: "California's coastal charm in a glass.",
  //       desc: "A light and elegant rosé with strawberry and floral notes.",
  //       fullDesc: "This Pinot Noir Rosé captures the essence of California's North Coast, delivering subtle strawberry and rose petal aromas with a refreshing finish.",
  //       metrics: "$9 (Glass) | $36 (Bottle)"
  //     },
  //     {
  //       title: "Salmon Ru, Riesling Finger Lakes (2023)",
  //       origin: "USA",
  //       tagline: "A crisp and lively Riesling from New York.",
  //       desc: "Fresh and fruity with hints of peach and citrus.",
  //       fullDesc: "Hailing from the Finger Lakes, this Riesling boasts vibrant acidity and layers of stone fruit and citrus, making it a versatile choice.",
  //       metrics: "$8 (Glass) | $30 (Bottle)"
  //     },
  //     {
  //       title: "Terracotta, Pinot Grigio della Venezie (2022)",
  //       origin: "Italy",
  //       tagline: "Refreshing Italian white wine.",
  //       desc: "Light and crisp with hints of green apple and citrus.",
  //       fullDesc: "This Pinot Grigio from Veneto is a classic expression of Italian elegance, featuring bright flavors of apple, citrus, and a clean finish.",
  //       metrics: "$8 (Glass) | $31 (Bottle)"
  //     },
  //     {
  //       title: "Taft Street, Sauvignon Blanc Russian River Valley",
  //       origin: "USA",
  //       tagline: "A zesty white from California.",
  //       desc: "Crisp and vibrant with tropical fruit and citrus notes.",
  //       fullDesc: "A beautifully crafted Sauvignon Blanc from Russian River Valley, offering aromas of passionfruit, lime, and a hint of minerality.",
  //       metrics: "$10 (Glass) | $39 (Bottle)"
  //     },
  //     {
  //       title: "Blue Rock Vineyard, Baby Blue Blanc (2023)",
  //       origin: "USA",
  //       tagline: "A bold white blend for every occasion.",
  //       desc: "Rich and creamy with tropical fruit and vanilla notes.",
  //       fullDesc: "This white blend combines lush tropical fruit flavors with a creamy texture, balanced by a touch of oak for a delightful complexity.",
  //       metrics: "$13 (Glass) | $53 (Bottle)"
  //     },
  //     {
  //       title: "Francois Labet, Bourgogne Chardonnay Vieilles Vignes (2022)",
  //       origin: "France",
  //       tagline: "A classic French Chardonnay.",
  //       desc: "Elegant and balanced with notes of citrus and toasted almonds.",
  //       fullDesc: "A refined Chardonnay from Burgundy, featuring flavors of citrus, ripe pear, and a hint of toasted almond with a silky finish.",
  //       metrics: "$13 (Glass) | $53 (Bottle)"
  //     },

  //   ],

  // },
  // {
  //   category: "Wine-2",
  //   type: "",
  //   backgroundImage: "../assets/img/menu-images/page.jpg",
  //   items: [
  //     {
  //       title: "Highway 12 Vineyards, Chardonnay California (2023)",
  //       origin: "USA",
  //       tagline: "A vibrant Chardonnay from California.",
  //       desc: "Bright and refreshing with notes of green apple and vanilla.",
  //       fullDesc: "This California Chardonnay offers a delightful blend of fresh fruit and subtle oak, perfect for pairing with a variety of dishes.",
  //       metrics: "$9 (Glass) | $37 (Bottle)"
  //     },
  //     {
  //       title: "Francois Labet, Bourgogne Vieilles Vignes (2022)",
  //       origin: "France",
  //       tagline: "A silky Pinot Noir from Burgundy.",
  //       desc: "Light-bodied with notes of red berries and earthy undertones.",
  //       fullDesc: "This Pinot Noir from Burgundy presents delicate flavors of cherry, raspberry, and a touch of earthiness, ideal for light meals.",
  //       metrics: "$9 (Glass) | $37 (Bottle)"
  //     },
  //     {
  //       title: "Matthieu de Brully, Pinot Noir La Fraisiere (2021)",
  //       origin: "France",
  //       tagline: "An expressive Pinot Noir with character.",
  //       desc: "Rich and smooth with cherry, spice, and subtle oak.",
  //       fullDesc: "This French Pinot Noir offers a harmonious balance of dark cherry, baking spices, and gentle oak for a classic yet bold flavor profile.",
  //       metrics: "$8 (Glass) | $33 (Bottle)"
  //     },
  //     {
  //       title: "Cru Wine Company, Pinot Noir Santa Lucia Highlands",
  //       origin: "USA",
  //       tagline: "A refined Pinot Noir from California's Highlands.",
  //       desc: "Elegant and smooth with red berry and floral notes.",
  //       fullDesc: "This Pinot Noir from Santa Lucia Highlands offers a delicate balance of red berry flavors, subtle floral aromas, and a hint of spice, delivering a polished finish.",
  //       metrics: "$11 (Glass) | $44 (Bottle)"
  //     },
  //     {
  //       title: "Bouchaine, Pinot Noir Carneros (2019)",
  //       origin: "USA",
  //       tagline: "A luxurious Pinot Noir from Napa Valley.",
  //       desc: "Rich and complex with layers of cherry, plum, and earthy tones.",
  //       fullDesc: "Bouchaine's Carneros Pinot Noir showcases ripe cherry and plum flavors, complemented by earthy undertones and a silky texture, making it an exquisite choice for any occasion.",
  //       metrics: "$15 (Glass) | $60 (Bottle)"
  //     },
  //     {
  //       title: "Vite Colte, La Luna e Falo Barbera d'Asti Superiore (2019)",
  //       origin: "Italy",
  //       tagline: "An Italian classic with a modern twist.",
  //       desc: "Vibrant and bold with notes of dark fruit and spice.",
  //       fullDesc: "This Barbera d'Asti Superiore captivates with its intense flavors of blackberry, plum, and a touch of spice, supported by a balanced acidity and smooth finish.",
  //       metrics: "$12 (Glass) | $47 (Bottle)"
  //     },
  //     {
  //       title: "Chateau de Callac, Graves Rouge (2019)",
  //       origin: "France",
  //       tagline: "A Bordeaux gem with depth and elegance.",
  //       desc: "Full-bodied with flavors of dark berries and subtle oak.",
  //       fullDesc: "From the Graves region, this Rouge combines rich dark berry flavors with hints of tobacco and oak, creating a balanced wine with a smooth and lasting finish.",
  //       metrics: "$8 (Glass) | $33 (Bottle)"
  //     },
  //     {
  //       title: "Bliss Family Vineyards, Merlot Estate Bottled Mendocino (2021)",
  //       origin: "USA",
  //       tagline: "A smooth and approachable Merlot.",
  //       desc: "Bright and fruity with hints of cherry and vanilla.",
  //       fullDesc: "This estate-bottled Merlot from Mendocino offers a delightful medley of cherry and red berry flavors, complemented by soft tannins and a touch of vanilla.",
  //       metrics: "$7 (Glass) | $29 (Bottle)"
  //     },
  //   ],

  // },
  // {
  //   category: "Wine-3",
  //   type: "",
  //   backgroundImage: "../assets/img/menu-images/page.jpg",
  //   items: [
  //     {
  //       title: "Senorio De Sarria, Navarra Crianza (2019)",
  //       origin: "Spain",
  //       tagline: "A Spanish classic with a modern flair.",
  //       desc: "Balanced and vibrant with red fruit and oak nuances.",
  //       fullDesc: "This Crianza from Navarra offers a delightful harmony of bright red fruit flavors, smooth tannins, and a subtle touch of oak, embodying the essence of Spanish winemaking.",
  //       metrics: "$10 (Glass) | $39 (Bottle)"
  //     },
  //     {
  //       title: "Highway 12 Vineyards, Cabernet Sauvignon Sonoma County (2020)",
  //       origin: "USA",
  //       tagline: "A bold Cabernet from the heart of Sonoma.",
  //       desc: "Rich and robust with notes of black currant and spice.",
  //       fullDesc: "This Cabernet Sauvignon showcases bold black currant and dark cherry flavors, layered with hints of spice and smooth tannins for a well-rounded finish.",
  //       metrics: "$9 (Glass) | $35 (Bottle)"
  //     },
  //     {
  //       title: "Bruocoa Family Vineyards, Cabernet",
  //       origin: "USA",
  //       tagline: "An indulgent Cabernet for all occasions.",
  //       desc: "Deep and velvety with flavors of dark fruit and cocoa.",
  //       fullDesc: "The Bruocoa Family Cabernet delivers a rich profile of blackberry, plum, and subtle cocoa, paired with elegant tannins and a lingering finish.",
  //       metrics: "$11 (Glass) | $46 (Bottle)"
  //     },
  //     {
  //       title: "Slate, Red Wine California",
  //       origin: "USA",
  //       tagline: "A versatile red with a Californian charm.",
  //       desc: "Smooth and approachable with ripe berry notes.",
  //       fullDesc: "Slate Red Wine embodies the essence of California with its ripe berry flavors, smooth texture, and a touch of spice, making it a perfect choice for any gathering.",
  //       metrics: "$10 (Glass) | $41 (Bottle)"
  //     },
  //   ],

  // },
  {
    category: "Wines",
    subCategories: [
      {
        subCategory: "Wines",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Casalforte, Prosecco Extra Dry",
            origin: "Italy",
            tagline: "A sparkling delight from Italy.",
            desc: "Crisp, refreshing prosecco with notes of pear and apple.",
            fullDesc:
              "This Italian prosecco offers a delightful balance of crisp acidity and gentle sweetness, with bright notes of pear and green apple, perfect for celebrations.",
            metrics: "$8 (Glass) | $33 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Andre Clourt, Champagne Brut Grande Reserve (NV)",
            origin: "France",
            tagline: "Elegance in every bubble.",
            desc: "Classic French champagne with refined effervescence and complex flavors.",
            fullDesc:
              "A luxurious champagne featuring delicate bubbles, notes of brioche and citrus, and a finish that lingers with sophistication.",
            metrics: "$25 (Glass) | $101 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Perelada, Cava Brut Rosé",
            origin: "Spain",
            tagline: "Vibrant pink bubbles with a Spanish flair.",
            desc: "A sparkling rosé with berry notes and a crisp finish.",
            fullDesc:
              "This cava offers a lively effervescence with flavors of red berries and a refreshing acidity, perfect for any occasion.",
            metrics: "$8 (Glass) | $32 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Highway 12 Vineyards, Pinot Noir Rosé North Coast (2023)",
            origin: "USA",
            tagline: "California's coastal charm in a glass.",
            desc: "A light and elegant rosé with strawberry and floral notes.",
            fullDesc:
              "This Pinot Noir Rosé captures the essence of California's North Coast, delivering subtle strawberry and rose petal aromas with a refreshing finish.",
            metrics: "$9 (Glass) | $36 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Salmon Ru, Riesling Finger Lakes (2023)",
            origin: "USA",
            tagline: "A crisp and lively Riesling from New York.",
            desc: "Fresh and fruity with hints of peach and citrus.",
            fullDesc:
              "Hailing from the Finger Lakes, this Riesling boasts vibrant acidity and layers of stone fruit and citrus, making it a versatile choice.",
            metrics: "$8 (Glass) | $30 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Terracotta, Pinot Grigio della Venezie (2022)",
            origin: "Italy",
            tagline: "Refreshing Italian white wine.",
            desc: "Light and crisp with hints of green apple and citrus.",
            fullDesc:
              "This Pinot Grigio from Veneto is a classic expression of Italian elegance, featuring bright flavors of apple, citrus, and a clean finish.",
            metrics: "$8 (Glass) | $31 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Taft Street, Sauvignon Blanc Russian River Valley",
            origin: "USA",
            tagline: "A zesty white from California.",
            desc: "Crisp and vibrant with tropical fruit and citrus notes.",
            fullDesc:
              "A beautifully crafted Sauvignon Blanc from Russian River Valley, offering aromas of passionfruit, lime, and a hint of minerality.",
            metrics: "$10 (Glass) | $39 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Blue Rock Vineyard, Baby Blue Blanc (2023)",
            origin: "USA",
            tagline: "A bold white blend for every occasion.",
            desc: "Rich and creamy with tropical fruit and vanilla notes.",
            fullDesc:
              "This white blend combines lush tropical fruit flavors with a creamy texture, balanced by a touch of oak for a delightful complexity.",
            metrics: "$13 (Glass) | $53 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title:
              "Francois Labet, Bourgogne Chardonnay Vieilles Vignes (2022)",
            origin: "France",
            tagline: "A classic French Chardonnay.",
            desc: "Elegant and balanced with notes of citrus and toasted almonds.",
            fullDesc:
              "A refined Chardonnay from Burgundy, featuring flavors of citrus, ripe pear, and a hint of toasted almond with a silky finish.",
            metrics: "$13 (Glass) | $53 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Wines",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Highway 12 Vineyards, Chardonnay California (2023)",
            origin: "USA",
            tagline: "A vibrant Chardonnay from California.",
            desc: "Bright and refreshing with notes of green apple and vanilla.",
            fullDesc:
              "This California Chardonnay offers a delightful blend of fresh fruit and subtle oak, perfect for pairing with a variety of dishes.",
            metrics: "$9 (Glass) | $37 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Francois Labet, Bourgogne Vieilles Vignes (2022)",
            origin: "France",
            tagline: "A silky Pinot Noir from Burgundy.",
            desc: "Light-bodied with notes of red berries and earthy undertones.",
            fullDesc:
              "This Pinot Noir from Burgundy presents delicate flavors of cherry, raspberry, and a touch of earthiness, ideal for light meals.",
            metrics: "$9 (Glass) | $37 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Matthieu de Brully, Pinot Noir La Fraisiere (2021)",
            origin: "France",
            tagline: "An expressive Pinot Noir with character.",
            desc: "Rich and smooth with cherry, spice, and subtle oak.",
            fullDesc:
              "This French Pinot Noir offers a harmonious balance of dark cherry, baking spices, and gentle oak for a classic yet bold flavor profile.",
            metrics: "$8 (Glass) | $33 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Cru Wine Company, Pinot Noir Santa Lucia Highlands",
            origin: "USA",
            tagline: "A refined Pinot Noir from California's Highlands.",
            desc: "Elegant and smooth with red berry and floral notes.",
            fullDesc:
              "This Pinot Noir from Santa Lucia Highlands offers a delicate balance of red berry flavors, subtle floral aromas, and a hint of spice, delivering a polished finish.",
            metrics: "$11 (Glass) | $44 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Bouchaine, Pinot Noir Carneros (2019)",
            origin: "USA",
            tagline: "A luxurious Pinot Noir from Napa Valley.",
            desc: "Rich and complex with layers of cherry, plum, and earthy tones.",
            fullDesc:
              "Bouchaine's Carneros Pinot Noir showcases ripe cherry and plum flavors, complemented by earthy undertones and a silky texture, making it an exquisite choice for any occasion.",
            metrics: "$15 (Glass) | $60 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Vite Colte, La Luna e Falo Barbera d'Asti Superiore (2019)",
            origin: "Italy",
            tagline: "An Italian classic with a modern twist.",
            desc: "Vibrant and bold with notes of dark fruit and spice.",
            fullDesc:
              "This Barbera d'Asti Superiore captivates with its intense flavors of blackberry, plum, and a touch of spice, supported by a balanced acidity and smooth finish.",
            metrics: "$12 (Glass) | $47 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Chateau de Callac, Graves Rouge (2019)",
            origin: "France",
            tagline: "A Bordeaux gem with depth and elegance.",
            desc: "Full-bodied with flavors of dark berries and subtle oak.",
            fullDesc:
              "From the Graves region, this Rouge combines rich dark berry flavors with hints of tobacco and oak, creating a balanced wine with a smooth and lasting finish.",
            metrics: "$8 (Glass) | $33 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title:
              "Bliss Family Vineyards, Merlot Estate Bottled Mendocino (2021)",
            origin: "USA",
            tagline: "A smooth and approachable Merlot.",
            desc: "Bright and fruity with hints of cherry and vanilla.",
            fullDesc:
              "This estate-bottled Merlot from Mendocino offers a delightful medley of cherry and red berry flavors, complemented by soft tannins and a touch of vanilla.",
            metrics: "$7 (Glass) | $29 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Wines",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Senorio De Sarria, Navarra Crianza (2019)",
            origin: "Spain",
            tagline: "A Spanish classic with a modern flair.",
            desc: "Balanced and vibrant with red fruit and oak nuances.",
            fullDesc:
              "This Crianza from Navarra offers a delightful harmony of bright red fruit flavors, smooth tannins, and a subtle touch of oak, embodying the essence of Spanish winemaking.",
            metrics: "$10 (Glass) | $39 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title:
              "Highway 12 Vineyards, Cabernet Sauvignon Sonoma County (2020)",
            origin: "USA",
            tagline: "A bold Cabernet from the heart of Sonoma.",
            desc: "Rich and robust with notes of black currant and spice.",
            fullDesc:
              "This Cabernet Sauvignon showcases bold black currant and dark cherry flavors, layered with hints of spice and smooth tannins for a well-rounded finish.",
            metrics: "$9 (Glass) | $35 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Bruocoa Family Vineyards, Cabernet",
            origin: "USA",
            tagline: "An indulgent Cabernet for all occasions.",
            desc: "Deep and velvety with flavors of dark fruit and cocoa.",
            fullDesc:
              "The Bruocoa Family Cabernet delivers a rich profile of blackberry, plum, and subtle cocoa, paired with elegant tannins and a lingering finish.",
            metrics: "$11 (Glass) | $46 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Slate, Red Wine California",
            origin: "USA",
            tagline: "A versatile red with a Californian charm.",
            desc: "Smooth and approachable with ripe berry notes.",
            fullDesc:
              "Slate Red Wine embodies the essence of California with its ripe berry flavors, smooth texture, and a touch of spice, making it a perfect choice for any gathering.",
            metrics: "$10 (Glass) | $41 (Bottle)",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
    ],
    // type: "",
    // backgroundImage: "../assets/img/menu-images/page.jpg",
    // items: [
    //   {
    //     title: "1800 Blanco",
    //     origin: "Tequila",
    //     tagline: "Pure and smooth silver tequila",
    //     desc: "Unaged tequila with a crisp and clean flavor, perfect for cocktails.",
    //     fullDesc:
    //       "1800 Blanco offers a fresh, unaged tequila experience with a smooth, crisp flavor, ideal for margaritas and other classic cocktails.",
    //     metrics: "30 ml - $9.99 | 60 ml - $17.99",
    //     image: "./assets/img/modal-images/bar-menu/1800-blanco.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "1800 Reposado",
    //     origin: "Tequila",
    //     tagline: "Aged tequila with rich flavors",
    //     desc: "Smooth and balanced with notes of oak and vanilla from aging.",
    //     fullDesc:
    //       "1800 Reposado is aged in oak barrels, giving it a richer, smoother profile with hints of oak and vanilla.",
    //     metrics: "30 ml - $10.49 | 60 ml - $18.49",
    //     image: "./assets/img/modal-images/bar-menu/1800-reposado.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "1800 Anejo",
    //     origin: "Tequila",
    //     tagline: "Well-aged tequila with deep flavors",
    //     desc: "Aged for a longer period, with complex flavors and a rich, smooth finish.",
    //     fullDesc:
    //       "1800 Anejo is an elegant tequila with a well-rounded flavor profile from aging, offering hints of oak and a smooth finish.",
    //     metrics: "30 ml - $11.99 | 60 ml - $20.99",
    //     image: "./assets/img/modal-images/bar-menu/1800-anejo.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Patron Silver",
    //     origin: "Tequila",
    //     tagline: "Smooth and refined silver tequila",
    //     desc: "A clean, crisp tequila with a smooth taste, perfect for sipping or cocktails.",
    //     fullDesc:
    //       "Patron Silver is a premium silver tequila with a light, crisp taste, known for its smoothness and versatility in cocktails.",
    //     metrics: "30 ml - $10.99 | 60 ml - $19.49",
    //     image: "./assets/img/modal-images/bar-menu/patron-silver.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Patron Reposado",
    //     origin: "Tequila",
    //     tagline: "Smooth, aged tequila with rich flavors",
    //     desc: "Lightly aged with subtle oak flavors, smooth and balanced.",
    //     fullDesc:
    //       "Patron Reposado is aged in oak barrels for added complexity, providing a smooth, rich flavor perfect for sipping.",
    //     metrics: "30 ml - $11.49 | 60 ml - $20.49",
    //     image: "./assets/img/modal-images/bar-menu/patron-reposado.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Jose Cuervo Silver",
    //     origin: "Tequila",
    //     tagline: "Classic silver tequila",
    //     desc: "A crisp and clean tequila, great for mixing in cocktails.",
    //     fullDesc:
    //       "Jose Cuervo Silver is a versatile tequila with a fresh, crisp taste, ideal for classic tequila cocktails.",
    //     metrics: "30 ml - $7.99 | 60 ml - $14.49",
    //     image: "./assets/img/modal-images/bar-menu/jose-cuervo-silver.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Jose Cuervo Gold",
    //     origin: "Tequila",
    //     tagline: "Smooth gold tequila",
    //     desc: "Known for its smoothness and slight sweetness, perfect for sipping or cocktails.",
    //     fullDesc:
    //       "Jose Cuervo Gold is a mellow, smooth tequila with a slight sweetness, ideal for sipping or enjoying in cocktails.",
    //     metrics: "30 ml - $8.49 | 60 ml - $15.49",
    //     image: "./assets/img/modal-images/bar-menu/jose-cuervo-gold.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Creyente Joven Mezcal",
    //     origin: "Mezcal",
    //     tagline: "Young mezcal with smoky flavors",
    //     desc: "An artisanal mezcal with distinct smoky notes, crafted in Oaxaca.",
    //     fullDesc:
    //       "Creyente Joven Mezcal is a smooth mezcal from Oaxaca, featuring earthy, smoky notes that make it stand out in cocktails or sipping.",
    //     metrics: "30 ml - $12.99 | 60 ml - $22.99",
    //     image: "./assets/img/modal-images/bar-menu/creyente-joven.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "400 Conejos Mezcal",
    //     origin: "Mezcal",
    //     tagline: "Traditional Oaxacan mezcal with rich flavor",
    //     desc: "A well-balanced mezcal with smoky, earthy notes and smooth finish.",
    //     fullDesc:
    //       "400 Conejos is a traditional mezcal from Oaxaca, with a unique blend of smoky and earthy flavors, ideal for mezcal lovers.",
    //     metrics: "30 ml - $13.49 | 60 ml - $23.99",
    //     image: "./assets/img/modal-images/bar-menu/400-conejos.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Cazulo Feni / Tinto",
    //     origin: "Feni",
    //     tagline: "Traditional Goan feni with a distinctive taste",
    //     desc: "Unique spirit from Goa with a fruity, tropical profile.",
    //     fullDesc:
    //       "Cazulo Feni is a Goan specialty distilled from cashew fruit, offering a distinctive tropical flavor and rich heritage.",
    //     metrics: "30 ml - $6.99 | 60 ml - $12.49",
    //     image: "./assets/img/modal-images/bar-menu/cazulo-feni.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Pistola Joven",
    //     origin: "Tequila",
    //     tagline: "Young and vibrant tequila",
    //     desc: "Unaged tequila with a fresh, fruity profile, great for mixing.",
    //     fullDesc:
    //       "Pistola Joven is a young tequila with a vibrant, fruity flavor, making it perfect for cocktails and mixed drinks.",
    //     metrics: "30 ml - $8.99 | 60 ml - $15.99",
    //     image: "./assets/img/modal-images/bar-menu/pistola-joven.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Pistola Reposado",
    //     origin: "Tequila",
    //     tagline: "Aged tequila with depth and smoothness",
    //     desc: "Lightly aged tequila with oak notes and a balanced flavor.",
    //     fullDesc:
    //       "Pistola Reposado is aged to bring out smooth, mellow flavors with subtle oak undertones, ideal for sipping or cocktails.",
    //     metrics: "30 ml - $9.49 | 60 ml - $16.49",
    //     image: "./assets/img/modal-images/bar-menu/pistola-reposado.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Pistola Anejo",
    //     origin: "Tequila",
    //     tagline: "Well-aged tequila with rich flavors",
    //     desc: "Complex and smooth, with hints of oak and caramel.",
    //     fullDesc:
    //       "Pistola Anejo is aged to perfection, offering a deep, rich flavor profile with hints of caramel and oak, perfect for sipping.",
    //     metrics: "30 ml - $10.99 | 60 ml - $18.99",
    //     image: "./assets/img/modal-images/bar-menu/pistola-anejo.jpg",
    //     chefSpecial: false,
    //   },
    //   {
    //     title: "Pistola Extra Anejo",
    //     origin: "Tequila",
    //     tagline: "Extra-aged tequila with complex flavors",
    //     desc: "A luxurious tequila with deep, layered flavors and a smooth finish.",
    //     fullDesc:
    //       "Pistola Extra Anejo offers an exquisite, multi-layered profile with hints of oak, caramel, and spices, perfect for special occasions.",
    //     metrics: "30 ml - $12.49 | 60 ml - $21.99",
    //     image: "./assets/img/modal-images/bar-menu/pistola-extra-anejo.jpg",
    //     chefSpecial: false,
    //   },
    // ],
  },
  {
    category: "Liquors",
    subCategories: [
      {
        subCategory: "Bourbon & Cognac",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Jim Beam (bourbon)",
            origin: "USA",
            tagline: "A classic taste of Kentucky's finest.",
            desc: "Smooth and versatile, perfect for sipping or mixing.",
            fullDesc:
              "Jim Beam bourbon delivers a timeless flavor profile with notes of vanilla, caramel, and oak, embodying the spirit of traditional Kentucky craftsmanship.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Makers Mark (bourbon)",
            origin: "USA",
            tagline: "Handcrafted for a smooth and sweet experience.",
            desc: "Rich and flavorful with notes of caramel and vanilla.",
            fullDesc:
              "Makers Mark bourbon is a handcrafted classic, offering a rich balance of sweet caramel, vanilla, and a subtle oak finish for a smooth sipping experience.",
            metrics: "$11",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Four Roses (bourbon)",
            origin: "USA",
            tagline: "A delicate balance of flavor and smoothness.",
            desc: "Crisp, smooth, and slightly fruity.",
            fullDesc:
              "Four Roses bourbon delivers a unique blend of delicate fruit flavors, spices, and a smooth finish, crafted with precision and care.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Woodford Reserve (bourbon)",
            origin: "USA",
            tagline: "A refined bourbon with a complex character.",
            desc: "Rich and bold with notes of dark chocolate and spices.",
            fullDesc:
              "Woodford Reserve bourbon is a premium choice, offering layers of complex flavors including dark chocolate, spices, and a hint of tobacco for a luxurious finish.",
            metrics: "$13",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Knob Creek (bourbon)",
            origin: "USA",
            tagline: "A full-bodied bourbon with bold flavors.",
            desc: "Robust and intense with hints of maple and nutmeg.",
            fullDesc:
              "Knob Creek bourbon is crafted to perfection, offering a bold flavor profile with maple syrup sweetness, nutmeg spice, and a lingering smoky finish.",
            metrics: "$13",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "TX Bourbon (bourbon)",
            origin: "USA",
            tagline: "A Texas-made bourbon with a unique twist.",
            desc: "Rich, smooth, and distinctly Texan.",
            fullDesc:
              "TX Bourbon delivers a bold and distinctive flavor with hints of vanilla, caramel, and a uniquely smooth finish that pays homage to its Texan roots.",
            metrics: "$17",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Remy Martin VSOP (cognac)",
            origin: "France",
            tagline: "The epitome of smooth French elegance.",
            desc: "Harmonious and rich with fruity and floral notes.",
            fullDesc:
              "Remy Martin VSOP cognac is a perfectly balanced spirit, showcasing harmonious notes of ripe fruit, subtle floral tones, and a silky smooth finish.",
            metrics: "$20",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Gin & Liqueur",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Tanqueray (gin)",
            origin: "England",
            tagline: "A London Dry Gin crafted to perfection.",
            desc: "Smooth and crisp with notes of juniper and citrus.",
            fullDesc:
              "Tanqueray gin delivers a perfectly balanced blend of juniper, coriander, and citrus, making it an ideal choice for classic cocktails.",
            metrics: "$11",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Tanqueray 10 (gin)",
            origin: "England",
            tagline: "A premium gin with unparalleled smoothness.",
            desc: "Rich and refreshing with citrus-forward botanicals.",
            fullDesc:
              "Tanqueray 10 gin is a premium spirit crafted with the finest fresh citrus and botanicals, offering a velvety smooth finish for the discerning palate.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Bombay Sapphire (gin)",
            origin: "England",
            tagline: "A vibrant gin infused with exotic botanicals.",
            desc: "Bright and aromatic with a delicate spice finish.",
            fullDesc:
              "Bombay Sapphire gin features a unique blend of 10 exotic botanicals, creating a refreshing and versatile spirit perfect for any occasion.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Hendricks (gin)",
            origin: "Scotland",
            tagline: "A quirky gin with a hint of cucumber and rose.",
            desc: "Unique and refreshing with floral undertones.",
            fullDesc:
              "Hendricks gin stands out with its infusion of cucumber and rose petals, offering a delightfully refreshing and smooth flavor profile.",
            metrics: "$13",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Campari (liqueur)",
            origin: "Italy",
            tagline: "A classic Italian aperitif with bold flavors.",
            desc: "Bitter and aromatic with notes of orange and herbs.",
            fullDesc:
              "Campari is a timeless Italian liqueur, blending bold citrus and herbal flavors, perfect for cocktails like Negronis or as a pre-dinner aperitif.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Grand Marnier (liqueur)",
            origin: "France",
            tagline: "An iconic blend of cognac and orange essence.",
            desc: "Rich and smooth with a sweet orange finish.",
            fullDesc:
              "Grand Marnier combines the elegance of cognac with the vibrant flavors of orange essence, delivering a luxurious and versatile liqueur.",
            metrics: "$13",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Disaronno Amaretto (liqueur)",
            origin: "Italy",
            tagline: "A sweet and almond-flavored Italian classic.",
            desc: "Smooth and nutty with a hint of marzipan.",
            fullDesc:
              "Disaronno Amaretto is a beloved Italian liqueur known for its rich almond flavor, smooth texture, and versatility in cocktails or on its own.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Cointreau (liqueur)",
            origin: "France",
            tagline: "A refined orange liqueur for sophisticated cocktails.",
            desc: "Crisp and zesty with a balanced sweetness.",
            fullDesc:
              "Cointreau is a premium French liqueur, offering a perfect balance of sweet and bitter orange flavors, ideal for enhancing any cocktail.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Kahlua (liqueur)",
            origin: "Mexico",
            tagline: "A rich coffee liqueur with a hint of sweetness.",
            desc: "Velvety and bold with coffee and vanilla notes.",
            fullDesc:
              "Kahlua is a renowned coffee liqueur, delivering deep coffee flavors with hints of vanilla, perfect for cocktails or as a standalone treat.",
            metrics: "$11",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Aperol (liqueur)",
            origin: "Italy",
            tagline: "A vibrant aperitif with a zesty twist.",
            desc: "Lightly bitter with citrus and herbal undertones.",
            fullDesc:
              "Aperol is a bright and refreshing Italian liqueur, featuring a unique blend of citrus, herbs, and a touch of sweetness, perfect for spritzes or sipping.",
            metrics: "$10",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Rum & Scotch",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Bacardi Silver (rum)",
            origin: "Puerto Rico",
            tagline: "A versatile rum with a smooth finish.",
            desc: "Light and crisp with subtle tropical notes.",
            fullDesc:
              "Bacardi Silver is a classic light rum, offering a clean and smooth profile perfect for mixing in your favorite cocktails.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Malibu Coconut (rum)",
            origin: "Barbados",
            tagline: "A sweet rum with tropical coconut flavor.",
            desc: "Smooth and creamy with a vibrant coconut essence.",
            fullDesc:
              "Malibu Coconut brings the tropical vibes with its sweet coconut flavor, making it a favorite for beach-inspired cocktails.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Macallan 12 (scotch)",
            origin: "Scotland",
            tagline: "A premium single malt with rich character.",
            desc: "Smooth and well-balanced with hints of dried fruit.",
            fullDesc:
              "Macallan 12 is a luxurious single malt scotch, aged in sherry-seasoned oak casks, offering a rich and full-bodied flavor experience.",
            metrics: "$27",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Macallan 18 (scotch)",
            origin: "Scotland",
            tagline: "An exceptional single malt aged to perfection.",
            desc: "Rich and complex with notes of dried fruits and spice.",
            fullDesc:
              "Macallan 18 delivers a superior single malt experience, aged in fine oak casks, offering a harmonious blend of flavor and depth.",
            metrics: "$42",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Glenlivet 12 (scotch)",
            origin: "Scotland",
            tagline: "A smooth single malt with a fruity profile.",
            desc: "Elegant and floral with a hint of sweetness.",
            fullDesc:
              "Glenlivet 12 is a classic Speyside single malt, known for its smooth texture and delicate flavors of pear and honey.",
            metrics: "$21",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
          {
            title: "Glenfiddich 12 (scotch)",
            origin: "Scotland",
            tagline: "A pioneering single malt with timeless appeal.",
            desc: "Fresh and fruity with hints of oak and orchard fruits.",
            fullDesc:
              "Glenfiddich 12 is a renowned single malt scotch, celebrated for its signature pear notes and smooth, balanced finish.",
            metrics: "$21",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Tequila",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Don Julio 1942",
            origin: "Mexico",
            tagline: "A rare and exceptional aged tequila",
            desc: "Rich, smooth, and aged to perfection for a refined taste.",
            fullDesc:
              "Don Julio 1942 is a luxury tequila, meticulously crafted and aged for a rich, smooth, and unforgettable experience.",
            metrics: "$71",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Clase Azul Plata",
            origin: "Mexico",
            tagline: "Silky smooth with a refined taste",
            desc: "A crystal-clear tequila with delicate agave flavors.",
            fullDesc:
              "Clase Azul Plata is a premium silver tequila known for its smooth texture and the refined taste of pure blue agave.",
            metrics: "$60",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Clase Azul Reposado",
            origin: "Mexico",
            tagline: "Elegant and rich with a soft finish",
            desc: "Aged to perfection, offering smooth oak and caramel notes.",
            fullDesc:
              "Clase Azul Reposado is an aged tequila that offers a rich and smooth flavor with subtle hints of oak and caramel.",
            metrics: "$35",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "El Jimador Silver",
            origin: "Mexico",
            tagline: "Crisp and clean with a smooth finish",
            desc: "A clean and refreshing silver tequila perfect for mixing.",
            fullDesc:
              "El Jimador Silver is a high-quality, crisp tequila made from 100% blue agave, offering a smooth and clean finish.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Patron Silver",
            origin: "Mexico",
            tagline: "Smooth and versatile for any occasion",
            desc: "A smooth and premium tequila made from the finest blue agave.",
            fullDesc:
              "Patron Silver is a premium, crystal-clear tequila crafted from the finest blue agave, perfect for sipping or cocktails.",
            metrics: "$20",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "1800 Silver",
            origin: "Mexico",
            tagline: "Bold and refreshing with a clean taste",
            desc: "A smooth, clean tequila with bold agave flavors.",
            fullDesc:
              "1800 Silver is a bold and crisp tequila with vibrant agave flavors, perfect for sipping or mixing into cocktails.",
            metrics: "$11",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Don Julio Silver",
            origin: "Mexico",
            tagline: "Light, crisp, and perfectly balanced",
            desc: "A premium silver tequila with a clean, refreshing taste.",
            fullDesc:
              "Don Julio Silver is a fresh and clean silver tequila, with smooth, balanced flavors and a crisp finish.",
            metrics: "$18",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Casamigos Blanco",
            origin: "Mexico",
            tagline: "Clean and crisp with subtle hints of citrus",
            desc: "A smooth blanco tequila with a fresh, citrusy flavor.",
            fullDesc:
              "Casamigos Blanco is a clean, crisp tequila with fresh citrus notes and a smooth finish, perfect for sipping or cocktails.",
            metrics: "$18",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Casamigos Reposado",
            origin: "Mexico",
            tagline: "Rich and smooth with a hint of oak",
            desc: "Aged for a rich and smooth flavor with subtle oak notes.",
            fullDesc:
              "Casamigos Reposado is a premium tequila aged to perfection, offering a rich, smooth taste with a hint of oak.",
            metrics: "$21",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
        ],
      },
      {
        subCategory: "Vodka",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Grey Goose",
            origin: "France",
            tagline: "Premium vodka with a smooth finish",
            desc: "A refined vodka with a delicate balance of smooth and crisp flavors.",
            fullDesc:
              "Grey Goose is a luxury vodka made from the finest ingredients, offering a smooth and crisp flavor that's perfect for sipping or mixing.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Tito's",
            origin: "USA",
            tagline: "Handcrafted and smooth",
            desc: "A smooth, corn-based vodka known for its clean finish and versatility.",
            fullDesc:
              "Tito's Handmade Vodka is an American classic, made from corn for a smoother, cleaner taste, and ideal for cocktails.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Ciroc",
            origin: "France",
            tagline: "Distinctive, fruity vodka with a silky finish",
            desc: "A luxurious vodka made from French grapes, offering a unique fruity taste.",
            fullDesc:
              "Ciroc is a premium vodka made from fine French grapes, known for its smooth, fruity flavor and silky finish, perfect for sipping or mixing.",
            metrics: "$13",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Beluga Noble",
            origin: "Russia",
            tagline: "Luxury vodka with a rich, smooth flavor",
            desc: "An ultra-premium vodka crafted from Russian grains and pure water.",
            fullDesc:
              "Beluga Noble is a luxury Russian vodka made from malted barley and pure water, offering a rich, smooth flavor that's perfect for sipping.",
            metrics: "$12",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
        ],
      },
    ],
  },
  {
    category: "Beers",
    subCategories: [
      {
        subCategory: "Beers",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Miller Lite",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Miller Lite is a light American lager known for its crisp, refreshing taste.",
            metrics: "$5",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Coors Lite",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Coors Lite is a crisp, light lager with a clean, refreshing taste.",
            metrics: "$5",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Blue Moon",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Blue Moon is a Belgian-style wheat beer brewed with orange peel and coriander for a unique flavor.",
            metrics: "$6",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Two Hearted Ale",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Two Hearted Ale is an American IPA known for its bold, hoppy flavor with pine and citrus notes.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Fat Tire",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Fat Tire is an amber ale with a balance of malt sweetness and hop bitterness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Yuengling",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Yuengling is an American lager, smooth and rich with a malty sweetness.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Angry Orchard",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Angry Orchard is a crisp and refreshing hard cider with a sweet apple flavor.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Sam Adams Boston Lager",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Sam Adams Boston Lager is a well-balanced American lager with a rich malty flavor.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Sam Adams Winter Lager",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Sam Adams Winter Lager is a spiced lager brewed with cinnamon, ginger, and orange peel.",
            metrics: "$7",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Half Life",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Half Life is a hoppy IPA with citrus and pine notes, balanced with malt sweetness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Red Gate",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Red Gate is a red ale with a rich malty backbone and a balanced hop profile.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Dadgum",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Dadgum is a smooth amber ale with a caramel malt profile and a slightly hoppy finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Shiner Light",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Shiner Light is a light lager with a mild malt flavor and a crisp finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
        ],
      },
      {
        subCategory: "Beers",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Shiner Bock",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Shiner Bock is a dark amber lager with a rich malt flavor and subtle hop bitterness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Dry Hopped",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Dry Hopped is an IPA with bold hop flavors and a crisp, refreshing finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "50 ft Jackrabbit",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "50 ft Jackrabbit is a strong IPA with a bold hoppy flavor and a smooth malt body.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Fire Ant Funeral",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Fire Ant Funeral is a bold IPA with a hoppy bite and a crisp finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "No Coast IPA",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "No Coast IPA is a balanced IPA with citrus and pine notes, smooth bitterness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "German Pilsner",
            origin: "Germany",
            tagline: "",
            desc: "",
            fullDesc:
              "German Pilsner is a crisp and refreshing lager with a delicate hop bitterness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Hefeweizen",
            origin: "Germany",
            tagline: "",
            desc: "",
            fullDesc:
              "Hefeweizen is a cloudy wheat beer with a fruity aroma and smooth malt finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Dos Equis",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "Dos Equis is a well-known Mexican lager, light and crisp with subtle malt flavors.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Modelo Negro",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "Modelo Negro is a dark lager with rich malt flavors and a smooth finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Modelo Especial",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "Modelo Especial is a crisp, golden pilsner-style lager with a refreshing taste.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Peroni",
            origin: "Italy",
            tagline: "",
            desc: "",
            fullDesc:
              "Peroni is a light, crisp lager with a slight hoppy bitterness and malty finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Stella Artois",
            origin: "Belgium",
            tagline: "",
            desc: "",
            fullDesc:
              "Stella Artois is a classic Belgian lager with a balanced flavor and crisp finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Heineken",
            origin: "Netherlands",
            tagline: "",
            desc: "",
            fullDesc:
              "Heineken is a pale lager with a light, crisp taste and a mild bitterness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Trinity Cider",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Trinity Cider is a refreshing hard cider with crisp apple flavors and a dry finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
        ],
      },
      {
        subCategory: "Beers",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Garage Beer",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Garage Beer is a full-bodied craft beer with malty sweetness and hop bitterness.",
            metrics: "$9",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Texas Blood Orange IPA",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Texas Blood Orange IPA is a citrusy IPA with bold hop flavors and a tangy blood orange twist.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Necessary Evil",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Necessary Evil is a smooth, rich stout with chocolate and coffee notes.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "New Belgium 154",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "New Belgium 154 is a malty amber beer with a well-balanced flavor and smooth finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Revolver Brewing",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Revolver Brewing offers a variety of craft beers, known for bold, full-bodied flavors.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Yuengling Flight",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Yuengling Flight is a light lager with a crisp, refreshing taste and low calories.",
            metrics: "$6",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "El Chingo",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "El Chingo is a crisp and refreshing Mexican lager with subtle malt sweetness.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Pacifico",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "Pacifico is a light, crisp lager brewed with a smooth, slightly sweet finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Corona",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "Corona is a pale lager known for its light, refreshing taste and smooth finish.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Corona Premier",
            origin: "Mexico",
            tagline: "",
            desc: "",
            fullDesc:
              "Corona Premier is a light lager with a crisp, clean flavor and fewer calories.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
          {
            title: "Seriously Fun Beer",
            origin: "USA",
            tagline: "",
            desc: "",
            fullDesc:
              "Seriously Fun Beer is a light, crisp, and easy-drinking beer with a fun personality.",
            metrics: "$8",
            image: "./assets/img/modal-images/food-menu/imag.jpg",
            chefSpecial: false,
            vegan: true,
          },
        ],
      },
    ],
  },
  // {
  //   category: "Shooters",
  //   type: "",
  //   backgroundImage: "../assets/img/menu-images/page.jpg",
  //   items: [
  //     {
  //       title: "JagerBomb",
  //       origin: "Germany",
  //       tagline: "A high-energy shooter combining beer and Jägermeister.",
  //       desc: "An exhilarating mix of Jägermeister and energy drink.",
  //       fullDesc:
  //         "JagerBomb is an exciting shooter that combines a shot of Jägermeister with an energy drink, typically dropped into a glass of beer. This high-energy drink is popular in bars and is known for its bold flavor and energizing effects.",
  //       metrics: "30 ml - $5.99 | 60 ml - $10.99",
  //       image: "./assets/img/modal-images/bar-menu/jagerbomb.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Irish Car Bomb",
  //       origin: "Ireland",
  //       tagline: "A creamy, chocolatey delight in a shot glass.",
  //       desc: "A mix of Irish whiskey and cream liqueur, dropped into stout.",
  //       fullDesc:
  //         "The Irish Car Bomb is a fun and popular shooter that consists of a shot of Irish whiskey and Irish cream liqueur dropped into a pint of stout beer. When mixed together, it creates a deliciously creamy and chocolaty drink, perfect for celebrations.",
  //       metrics: "30 ml - $5.99 | 60 ml - $10.99",
  //       image: "./assets/img/modal-images/bar-menu/irish-car-bomb.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Pickle Back",
  //       origin: "USA",
  //       tagline: "A tangy and refreshing chaser for whiskey.",
  //       desc: "A shot of whiskey followed by pickle brine.",
  //       fullDesc:
  //         "The Pickle Back is a unique shooter that consists of a shot of whiskey followed by a shot of pickle brine. This tangy and refreshing combination enhances the whiskey's flavor while offering a savory twist.",
  //       metrics: "30 ml - $5.49 | 60 ml - $9.99",
  //       image: "./assets/img/modal-images/bar-menu/pickle-back.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Tropical Punk",
  //       origin: "USA",
  //       tagline: "A fruity and fun shooter for summer vibes.",
  //       desc: "A blend of fruity liqueurs for a sweet finish.",
  //       fullDesc:
  //         "Tropical Punk is a colorful and fruity shooter made from a blend of various fruity liqueurs, providing a sweet and refreshing flavor. It's perfect for summer parties and adds a fun touch to any gathering.",
  //       metrics: "30 ml - $5.99 | 60 ml - $10.99",
  //       image: "./assets/img/modal-images/bar-menu/tropical-punk.jpg",
  //       chefSpecial: false,
  //     },
  //   ],
  // },
  // {
  //   category: "Beers",
  //   type: "",
  //   backgroundImage: "../assets/img/menu-images/page.jpg",
  //   items: [
  //     {
  //       title: "Kingfisher Ultra",
  //       origin: "India",
  //       tagline: "A crisp and refreshing lager perfect for hot days.",
  //       desc: "Light and smooth with a hint of bitterness.",
  //       fullDesc:
  //         "Kingfisher Ultra is a light and refreshing lager beer that boasts a smooth taste with just a hint of bitterness. Perfect for hot days or casual gatherings, it pairs well with spicy foods and makes for an ideal companion at any celebration.",
  //       metrics: "330 ml - $4.99",
  //       image: "./assets/img/modal-images/bar-menu/kingfisher-ultra.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Budweiser",
  //       origin: "USA",
  //       tagline: "The King of Beers, an iconic American lager.",
  //       desc: "Smooth, crisp, and full of flavor.",
  //       fullDesc:
  //         "Budweiser is a classic American lager known for its smooth taste and crisp finish. Brewed with a blend of premium hops and barley, it's the perfect beer for any occasion, from casual barbecues to major events.",
  //       metrics: "330 ml - $4.99",
  //       image: "./assets/img/modal-images/bar-menu/budweiser.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Corona Extra",
  //       origin: "Mexico",
  //       tagline: "A refreshing pale lager, best served with a lime.",
  //       desc: "Crisp, light, and perfect for the beach.",
  //       fullDesc:
  //         "Corona Extra is a pale lager from Mexico, renowned for its crisp and refreshing taste. Often enjoyed with a wedge of lime, this beer is synonymous with relaxation and beach vibes, making it a popular choice for sunny days.",
  //       metrics: "330 ml - $5.49",
  //       image: "./assets/img/modal-images/bar-menu/corona-extra.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Hoegaarden",
  //       origin: "Belgium",
  //       tagline: "A classic Belgian white beer with a hint of spice.",
  //       desc: "Smooth, fruity, and mildly spicy with coriander.",
  //       fullDesc:
  //         "Hoegaarden is a traditional Belgian white beer, brewed with wheat and spiced with coriander and orange peel. It has a smooth and fruity taste with a refreshing finish, making it perfect for warm weather and outdoor gatherings.",
  //       metrics: "330 ml - $5.99",
  //       image: "./assets/img/modal-images/bar-menu/hoegaarden.jpg",
  //       chefSpecial: false,
  //     },
  //     {
  //       title: "Heineken",
  //       origin: "Netherlands",
  //       tagline: "The world-renowned lager with a distinctive taste.",
  //       desc: "Crisp and refreshing with a balanced flavor.",
  //       fullDesc:
  //         "Heineken is a globally recognized lager with a crisp and refreshing taste. Brewed with high-quality ingredients, it delivers a balanced flavor that makes it a favorite among beer lovers worldwide. Enjoy it chilled for the best experience.",
  //       metrics: "330 ml - $5.49",
  //       image: "./assets/img/modal-images/bar-menu/heineken.jpg",
  //       chefSpecial: false,
  //     },
  //   ],
  // },
  // {
  //   category: "Wines",
  //   subCategories: [
  //     {
  //       subCategory: "Red Wine",
  //       type: "",
  //       backgroundImage: "../assets/img/menu-images/page.jpg",
  //       items: [
  //         {
  //           title: "La Vielle Ferme Famille Perrin Rouge",
  //           origin: "France",
  //           tagline: "A versatile red blend, perfect for any meal.",
  //           desc: "Fruity and smooth with a hint of spice.",
  //           fullDesc:
  //             "La Vielle Ferme Famille Perrin Rouge is a delightful red blend from the Rhône Valley, offering a smooth and fruity palate with hints of spice and soft tannins. It's an excellent choice for pairing with a variety of dishes, making it a versatile option for any occasion.",
  //           metrics: "750 ml - $14.99",
  //           image: "./assets/img/modal-images/bar-menu/la-vielle-ferme-red.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Pasqua Merlot",
  //           origin: "Italy",
  //           tagline: "A classic Merlot with ripe fruit flavors.",
  //           desc: "Smooth and velvety with soft tannins.",
  //           fullDesc:
  //             "Pasqua Merlot is a rich and smooth red wine, characterized by its ripe fruit flavors and velvety texture. With soft tannins and a lingering finish, it's perfect for sipping on its own or pairing with red meats and pasta dishes.",
  //           metrics: "750 ml - $15.99",
  //           image: "./assets/img/modal-images/bar-menu/pasqua-merlot.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Pasqua Chianti DOCG",
  //           origin: "Italy",
  //           tagline: "A traditional Chianti with vibrant cherry notes.",
  //           desc: "Fresh and lively with a medium body.",
  //           fullDesc:
  //             "Pasqua Chianti DOCG is a classic Italian red wine that showcases vibrant cherry flavors and a lively acidity. With a medium body and subtle herbal notes, it pairs wonderfully with Italian cuisine, making it a staple for any pasta lover.",
  //           metrics: "750 ml - $16.49",
  //           image: "./assets/img/modal-images/bar-menu/pasqua-chianti.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Jacky Marteau AOC Touraine",
  //           origin: "France",
  //           tagline: "A refreshing red with elegant fruit flavors.",
  //           desc: "Crisp and balanced with a smooth finish.",
  //           fullDesc:
  //             "Jacky Marteau AOC Touraine is a charming red wine known for its refreshing character and elegant fruit flavors. With a crisp finish and well-balanced structure, it makes an excellent companion for grilled meats and cheese platters.",
  //           metrics: "750 ml - $17.99",
  //           image:
  //             "./assets/img/modal-images/bar-menu/jacky-marteau-touraine.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Clarendelle AOC Bordeaux Rouge",
  //           origin: "France",
  //           tagline: "A sophisticated Bordeaux blend with rich depth.",
  //           desc: "Full-bodied with notes of dark fruit and oak.",
  //           fullDesc:
  //             "Clarendelle AOC Bordeaux Rouge is a refined blend that showcases the best of Bordeaux's rich terroir. With full-bodied depth, notes of dark fruit, and a touch of oak, it offers a complex flavor profile that pairs beautifully with hearty dishes.",
  //           metrics: "750 ml - $19.99",
  //           image:
  //             "./assets/img/modal-images/bar-menu/clarendelle-bordeaux.jpg",
  //           chefSpecial: false,
  //         },
  //       ],
  //     },
  //     {
  //       subCategory: "White Wine",
  //       type: "",
  //       backgroundImage: "../assets/img/menu-images/page.jpg",
  //       items: [
  //         {
  //           title: "La Vielle Ferme Famille Perrin Blanc",
  //           origin: "France",
  //           tagline: "A crisp white blend with a refreshing finish.",
  //           desc: "Fruity and floral with a zesty acidity.",
  //           fullDesc:
  //             "La Vielle Ferme Famille Perrin Blanc is a delightful white blend that offers a crisp and refreshing palate. With fruity and floral notes balanced by zesty acidity, it pairs wonderfully with seafood dishes, salads, and light appetizers.",
  //           metrics: "750 ml - $14.99",
  //           image:
  //             "./assets/img/modal-images/bar-menu/la-vielle-ferme-white.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Pasqua Pinot Grigio",
  //           origin: "Italy",
  //           tagline: "A refreshing white wine with vibrant citrus notes.",
  //           desc: "Crisp and light, perfect for warm days.",
  //           fullDesc:
  //             "Pasqua Pinot Grigio is a refreshing Italian white wine, known for its vibrant citrus notes and crisp finish. Ideal for sipping on its own or pairing with light pasta dishes and seafood, it’s a great choice for warm weather gatherings.",
  //           metrics: "750 ml - $15.49",
  //           image: "./assets/img/modal-images/bar-menu/pasqua-pinot-grigio.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Jacky Marteau AOC Touraine Sauvignon Blanc",
  //           origin: "France",
  //           tagline: "A zesty Sauvignon Blanc with lively acidity.",
  //           desc: "Crisp and aromatic with green apple notes.",
  //           fullDesc:
  //             "Jacky Marteau AOC Touraine Sauvignon Blanc is an aromatic white wine, bursting with crisp acidity and notes of green apple and citrus. Its refreshing character makes it a perfect match for shellfish and fresh salads.",
  //           metrics: "750 ml - $16.49",
  //           image:
  //             "./assets/img/modal-images/bar-menu/jacky-marteau-sauvignon.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Bex Nahe Riesling",
  //           origin: "Germany",
  //           tagline: "An elegant Riesling with delicate sweetness.",
  //           desc: "Fruity and floral with a touch of minerality.",
  //           fullDesc:
  //             "Bex Nahe Riesling is a beautifully balanced white wine that exhibits delicate sweetness paired with fruity and floral notes. With a touch of minerality, it’s an excellent choice for spicy dishes and Asian cuisine.",
  //           metrics: "750 ml - $18.99",
  //           image: "./assets/img/modal-images/bar-menu/bex-riesling.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Hugel Gentil Alsace Blend",
  //           origin: "France",
  //           tagline: "A harmonious blend showcasing the best of Alsace.",
  //           desc: "Fruity and spicy with a smooth finish.",
  //           fullDesc:
  //             "Hugel Gentil Alsace Blend is a delightful white wine that brings together various grape varieties to create a harmonious and complex profile. With fruity and spicy notes complemented by a smooth finish, it pairs well with a range of dishes from grilled fish to poultry.",
  //           metrics: "750 ml - $21.99",
  //           image: "./assets/img/modal-images/bar-menu/hugel-alsace.jpg",
  //           chefSpecial: false,
  //         },
  //       ],
  //     },
  //     {
  //       subCategory: "Rosé Wine",
  //       type: "",
  //       backgroundImage: "../assets/img/menu-images/page.jpg",
  //       items: [
  //         {
  //           title: "La Vielle Ferme Famille Perrin Rosé",
  //           origin: "France",
  //           tagline: "A delightful rosé, fresh and fruity.",
  //           desc: "Crisp with flavors of strawberries and cherries.",
  //           fullDesc:
  //             "La Vielle Ferme Famille Perrin Rosé is a charming and refreshing wine that delights the palate with its crispness and flavors of strawberries and cherries. Ideal for sipping on a sunny afternoon, it pairs beautifully with light salads and seafood dishes.",
  //           metrics: "750 ml - $14.99",
  //           image:
  //             "./assets/img/modal-images/bar-menu/la-vielle-ferme-rose.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Domaine Montrose Rosé",
  //           origin: "France",
  //           tagline: "An elegant rosé with floral notes.",
  //           desc: "Delicate and refreshing with a smooth finish.",
  //           fullDesc:
  //             "Domaine Montrose Rosé is a beautifully crafted wine that showcases elegant floral notes and a refreshing character. Its delicate flavors and smooth finish make it a perfect match for grilled vegetables, seafood, or simply enjoyed on its own.",
  //           metrics: "750 ml - $16.99",
  //           image:
  //             "./assets/img/modal-images/bar-menu/domaine-montrose-rose.jpg",
  //           chefSpecial: false,
  //         },
  //       ],
  //     },
  //     {
  //       subCategory: "Indian Wine Selection",
  //       type: "",
  //       backgroundImage: "../assets/img/menu-images/page.jpg",
  //       items: [
  //         {
  //           title: "Grover Zampa",
  //           origin: "India",
  //           tagline: "A rich Indian wine with bold flavors.",
  //           desc: "Complex and full-bodied with dark fruit notes.",
  //           fullDesc:
  //             "Grover Zampa is a renowned Indian wine that delivers a rich and complex palate, showcasing bold flavors of dark fruits with hints of spice. This full-bodied wine is perfect for pairing with grilled meats and hearty dishes.",
  //           metrics: "750 ml - $19.99",
  //           image: "./assets/img/modal-images/bar-menu/grover-zampa.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Fratelli",
  //           origin: "India",
  //           tagline: "An elegant blend from the Indian terroir.",
  //           desc: "Smooth and balanced with a fruity finish.",
  //           fullDesc:
  //             "Fratelli wine embodies the essence of Indian terroir, offering a smooth and balanced taste with a delightful fruity finish. Perfect for any occasion, it pairs well with a variety of cuisines, from Indian to international.",
  //           metrics: "750 ml - $17.49",
  //           image: "./assets/img/modal-images/bar-menu/fratelli.jpg",
  //           chefSpecial: false,
  //         },
  //         {
  //           title: "Sula",
  //           origin: "India",
  //           tagline: "A pioneering Indian wine with international acclaim.",
  //           desc: "Fresh and fruity with a vibrant acidity.",
  //           fullDesc:
  //             "Sula is a trailblazer in Indian winemaking, known for its fresh and fruity profile complemented by vibrant acidity. It’s an excellent choice for pairing with spicy Indian dishes, seafood, or enjoyed on its own.",
  //           metrics: "750 ml - $15.99",
  //           image: "./assets/img/modal-images/bar-menu/sula.jpg",
  //           chefSpecial: false,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default barMenuData;
