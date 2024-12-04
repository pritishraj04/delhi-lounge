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
            fullDesc: "A universally loved combination of smooth rum and cola, served over ice, making it a perfect companion for relaxed evenings or lively celebrations.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/rum-and-coke.jpg",
            chefSpecial: false
          },
          {
            title: "Screwdriver",
            origin: "USA",
            tagline: "The perfect blend of citrus and spirits.",
            desc: "Vodka and orange juice combine for a refreshing, zesty cocktail.",
            fullDesc: "A simple yet vibrant cocktail featuring smooth vodka and freshly squeezed orange juice, delivering a refreshing citrus kick with every sip.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/screwdriver.jpg",
            chefSpecial: false
          },
          {
            title: "Cosmopolitan",
            origin: "USA",
            tagline: "Elegance in a glass.",
            desc: "A zesty mix of vodka, lime, cranberry juice, and triple sec.",
            fullDesc: "A stylish cocktail combining the tartness of cranberry and lime juices with smooth vodka and triple sec, served in a chilled martini glass for a touch of sophistication.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/cosmopolitan.jpg",
            chefSpecial: false
          },
          {
            title: "Old Fashioned",
            origin: "USA",
            tagline: "The grandfather of cocktails.",
            desc: "Bourbon, bitters, sugar, and orange peel create a timeless drink.",
            fullDesc: "A classic cocktail that highlights the bold flavors of bourbon, perfectly balanced with bitters, a touch of sugar, and the zest of orange peel, making it a true icon.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/old-fashioned.jpg",
            chefSpecial: false
          },
          {
            title: "Mojito",
            origin: "Cuba",
            tagline: "Refreshment in every sip.",
            desc: "A cool mix of white rum, mint, lime, sugar, and club soda.",
            fullDesc: "This Cuban classic blends white rum with fresh mint leaves, lime juice, sugar, and sparkling soda for a refreshing cocktail perfect for warm days.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/mojito.jpg",
            chefSpecial: false
          },
          {
            title: "Martini",
            origin: "USA",
            tagline: "Sophistication in a glass.",
            desc: "A refined blend of gin, vermouth, and bitters, garnished with an olive or lemon twist.",
            fullDesc: "The ultimate cocktail of elegance, made with gin and dry vermouth, enhanced by a dash of bitters, and served with a choice of olive or lemon twist for a polished finish.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/martini.jpg",
            chefSpecial: false
          },
          {
            title: "Bloody Mary",
            origin: "USA",
            tagline: "Bold, savory, and full of flavor.",
            desc: "A unique mix of vodka, tomato juice, and lemon, garnished with a celery stalk.",
            fullDesc: "This savory cocktail features vodka and tangy tomato juice, accented with lemon and spices, and garnished with a crisp celery stalk for a bold and refreshing experience.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/bloody-mary.jpg",
            chefSpecial: false
          },
          {
            title: "Tom Collins",
            origin: "England",
            tagline: "A fizzy classic to brighten your day.",
            desc: "Gin, lemon juice, sugar, and sparkling water create a delightful cocktail.",
            fullDesc: "A refreshing cocktail featuring gin, fresh lemon juice, sugar, and sparkling water, served over ice for a light and bubbly experience.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/tom-collins.jpg",
            chefSpecial: false
          },
          {
            title: "Manhattan",
            origin: "USA",
            tagline: "A cocktail of timeless elegance.",
            desc: "Whiskey, vermouth, and bitters, garnished with a maraschino cherry.",
            fullDesc: "A rich and sophisticated cocktail made with whiskey, sweet vermouth, and bitters, topped with a maraschino cherry for a perfect blend of flavors.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/manhattan.jpg",
            chefSpecial: false
          },
          {
            title: "Mai Tai",
            origin: "USA",
            tagline: "A tropical escape in every sip.",
            desc: "A vibrant mix of white and dark rums, orange curaçao, syrup, and lime juice.",
            fullDesc: "This tropical cocktail combines the bold flavors of white and dark rums, balanced with orange curaçao, syrup, and fresh lime juice for a vibrant and refreshing experience.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/mai-tai.jpg",
            chefSpecial: false
          },
          {
            title: "Long Island Iced Tea",
            origin: "USA",
            tagline: "A powerhouse of flavors.",
            desc: "A bold mix of vodka, tequila, rum, gin, triple sec, and cola.",
            fullDesc: "A robust cocktail featuring a unique blend of vodka, tequila, light rum, gin, triple sec, and a splash of cola, delivering a dynamic and refreshing taste.",
            metrics: "$10",
            image: "./assets/img/modal-images/bar-menu/long-island-iced-tea.jpg",
            chefSpecial: false
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
    category: "House Cocktail",
    type: "Non-Alcoholic",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Very Berry Fizz",
        origin: "Fusion",
        tagline: "Berries with a sparkling twist.",
        desc: "A vibrant mix of mixed berries, star anise, citrus, and ginger ale.",
        fullDesc: "A refreshing concoction of mixed berries, star anise, and zesty citrus, topped with fizzy ginger ale, creating a drink that's bursting with flavor and charm.",
        metrics: "$12",
        image: "./assets/img/modal-images/bar-menu/very-berry-fizz.jpg",
        chefSpecial: false
      },
      {
        title: "Gondhraj Lemonade",
        origin: "India",
        tagline: "A zesty Indian refreshment.",
        desc: "Lemon saccharum paired with an aperitif and tonic water.",
        fullDesc: "A unique take on lemonade featuring the aromatic Gondhraj lime, blended with lemon saccharum, an aperitif, and effervescent tonic water for a refreshing twist.",
        metrics: "$12",
        image: "./assets/img/modal-images/bar-menu/gondhraj-lemonade.jpg",
        chefSpecial: false
      },
      {
        title: "Kiwi Fizz",
        origin: "Fusion",
        tagline: "A burst of tropical freshness.",
        desc: "A delightful mix of kiwi, mint, citrus, and fizz.",
        fullDesc: "A tropical delight combining the tangy sweetness of kiwi, the freshness of mint, a splash of citrus, and bubbly fizz, perfect for any occasion.",
        metrics: "$12",
        image: "./assets/img/modal-images/bar-menu/kiwi-fizz.jpg",
        chefSpecial: false
      },
      {
        title: "Orange Thyme Smash",
        origin: "Fusion",
        tagline: "Citrus meets herbal elegance.",
        desc: "A blend of orange, thyme, citrus, and pineapple cordial.",
        fullDesc: "A refreshing medley of juicy orange, aromatic thyme, and bright citrus, enhanced by the sweet notes of pineapple cordial for a drink that's both invigorating and satisfying.",
        metrics: "$12",
        image: "./assets/img/modal-images/bar-menu/orange-thyme-smash.jpg",
        chefSpecial: false
      },
      {
        title: "Cucumba",
        origin: "Fusion",
        tagline: "Cool and refreshing, naturally.",
        desc: "A light mix of cucumber, basil, elderflower, and citrus.",
        fullDesc: "A rejuvenating blend of fresh cucumber, fragrant basil, delicate elderflower, and a dash of citrus, delivering a cool and refreshing experience with every sip.",
        metrics: "$12",
        image: "./assets/img/modal-images/bar-menu/cucumba.jpg",
        chefSpecial: false
      }
    ],
    
  },
  {
    category: "House Cocktail",
    type: "Alcoholic",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Banarasi Boulevardier",
        origin: "India",
        tagline: "A bold twist on a classic cocktail.",
        desc: "Whisky, Campari, sweet vermouth, saffron, and betel leaf.",
        fullDesc: "A sophisticated mix of whisky, Campari, and sweet vermouth infused with the richness of saffron and the earthy aroma of betel leaf, offering a unique Indian-inspired take on the Boulevardier.",
        metrics: "$15",
        image: "./assets/img/modal-images/bar-menu/banarasi-boulevardier.jpg",
        chefSpecial: false
      },
      {
        title: "Royal Vodka Sour",
        origin: "Fusion",
        tagline: "A royal blend of floral and citrus notes.",
        desc: "Vodka, lemon saccharum, Campari, rose, and citrus.",
        fullDesc: "A regal cocktail featuring vodka and lemon saccharum, with hints of Campari and rose petals, rounded off by zesty citrus for a luxurious and refreshing experience.",
        metrics: "$15",
        image: "./assets/img/modal-images/bar-menu/royal-vodka-sour.jpg",
        chefSpecial: false
      },
      {
        title: "Tropical City",
        origin: "Fusion",
        tagline: "An exotic escape in a glass.",
        desc: "Rum, pineapple cordial, coconut, curry leaf, Campari, and citrus.",
        fullDesc: "A vibrant concoction of rum, tropical pineapple cordial, creamy coconut, and aromatic curry leaf, balanced with Campari and citrus for a truly tropical vibe.",
        metrics: "$15",
        image: "./assets/img/modal-images/bar-menu/tropical-city.jpg",
        chefSpecial: false
      },
      {
        title: "Guava Dark & Stormy",
        origin: "Fusion",
        tagline: "A storm of flavors with a guava twist.",
        desc: "Rum, pink guava, thyme, and citrus.",
        fullDesc: "A bold and refreshing drink combining the richness of rum with the tropical sweetness of pink guava, complemented by aromatic thyme and a splash of citrus.",
        metrics: "$15",
        image: "./assets/img/modal-images/bar-menu/guava-dark-and-stormy.jpg",
        chefSpecial: false
      },
      {
        title: "Raw Mango Picante",
        origin: "India",
        tagline: "A spicy, tangy treat for the adventurous.",
        desc: "Tequila, raw mango, citrus, celery, chili, and hemp seed salt.",
        fullDesc: "A zesty blend of tequila, tangy raw mango, and a kick of chili, balanced with citrus and celery, finished with hemp seed salt for a bold and flavorful experience.",
        metrics: "$15",
        image: "./assets/img/modal-images/bar-menu/raw-mango-picante.jpg",
        chefSpecial: false
      },
    ],
    
  },
  {
    category: "Wine",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Casalforte, Prosecco Extra Dry",
        origin: "Italy",
        tagline: "A sparkling delight from Italy.",
        desc: "Crisp, refreshing prosecco with notes of pear and apple.",
        fullDesc: "This Italian prosecco offers a delightful balance of crisp acidity and gentle sweetness, with bright notes of pear and green apple, perfect for celebrations.",
        metrics: "$8 (Glass) | $33 (Bottle)"
      },
      {
        title: "Andre Clourt, Champagne Brut Grande Reserve (NV)",
        origin: "France",
        tagline: "Elegance in every bubble.",
        desc: "Classic French champagne with refined effervescence and complex flavors.",
        fullDesc: "A luxurious champagne featuring delicate bubbles, notes of brioche and citrus, and a finish that lingers with sophistication.",
        metrics: "$25 (Glass) | $101 (Bottle)"
      },
      {
        title: "Perelada, Cava Brut Rosé",
        origin: "Spain",
        tagline: "Vibrant pink bubbles with a Spanish flair.",
        desc: "A sparkling rosé with berry notes and a crisp finish.",
        fullDesc: "This cava offers a lively effervescence with flavors of red berries and a refreshing acidity, perfect for any occasion.",
        metrics: "$8 (Glass) | $32 (Bottle)"
      },
      {
        title: "Highway 12 Vineyards, Pinot Noir Rosé North Coast (2023)",
        origin: "USA",
        tagline: "California's coastal charm in a glass.",
        desc: "A light and elegant rosé with strawberry and floral notes.",
        fullDesc: "This Pinot Noir Rosé captures the essence of California's North Coast, delivering subtle strawberry and rose petal aromas with a refreshing finish.",
        metrics: "$9 (Glass) | $36 (Bottle)"
      },
      {
        title: "Salmon Ru, Riesling Finger Lakes (2023)",
        origin: "USA",
        tagline: "A crisp and lively Riesling from New York.",
        desc: "Fresh and fruity with hints of peach and citrus.",
        fullDesc: "Hailing from the Finger Lakes, this Riesling boasts vibrant acidity and layers of stone fruit and citrus, making it a versatile choice.",
        metrics: "$8 (Glass) | $30 (Bottle)"
      },
      {
        title: "Terracotta, Pinot Grigio della Venezie (2022)",
        origin: "Italy",
        tagline: "Refreshing Italian white wine.",
        desc: "Light and crisp with hints of green apple and citrus.",
        fullDesc: "This Pinot Grigio from Veneto is a classic expression of Italian elegance, featuring bright flavors of apple, citrus, and a clean finish.",
        metrics: "$8 (Glass) | $31 (Bottle)"
      },
      {
        title: "Taft Street, Sauvignon Blanc Russian River Valley",
        origin: "USA",
        tagline: "A zesty white from California.",
        desc: "Crisp and vibrant with tropical fruit and citrus notes.",
        fullDesc: "A beautifully crafted Sauvignon Blanc from Russian River Valley, offering aromas of passionfruit, lime, and a hint of minerality.",
        metrics: "$10 (Glass) | $39 (Bottle)"
      },
      {
        title: "Blue Rock Vineyard, Baby Blue Blanc (2023)",
        origin: "USA",
        tagline: "A bold white blend for every occasion.",
        desc: "Rich and creamy with tropical fruit and vanilla notes.",
        fullDesc: "This white blend combines lush tropical fruit flavors with a creamy texture, balanced by a touch of oak for a delightful complexity.",
        metrics: "$13 (Glass) | $53 (Bottle)"
      },
      {
        title: "Francois Labet, Bourgogne Chardonnay Vieilles Vignes (2022)",
        origin: "France",
        tagline: "A classic French Chardonnay.",
        desc: "Elegant and balanced with notes of citrus and toasted almonds.",
        fullDesc: "A refined Chardonnay from Burgundy, featuring flavors of citrus, ripe pear, and a hint of toasted almond with a silky finish.",
        metrics: "$13 (Glass) | $53 (Bottle)"
      },
      
    ],
    
  },
  {
    category: "Wine-2",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Highway 12 Vineyards, Chardonnay California (2023)",
        origin: "USA",
        tagline: "A vibrant Chardonnay from California.",
        desc: "Bright and refreshing with notes of green apple and vanilla.",
        fullDesc: "This California Chardonnay offers a delightful blend of fresh fruit and subtle oak, perfect for pairing with a variety of dishes.",
        metrics: "$9 (Glass) | $37 (Bottle)"
      },
      {
        title: "Francois Labet, Bourgogne Vieilles Vignes (2022)",
        origin: "France",
        tagline: "A silky Pinot Noir from Burgundy.",
        desc: "Light-bodied with notes of red berries and earthy undertones.",
        fullDesc: "This Pinot Noir from Burgundy presents delicate flavors of cherry, raspberry, and a touch of earthiness, ideal for light meals.",
        metrics: "$9 (Glass) | $37 (Bottle)"
      },
      {
        title: "Matthieu de Brully, Pinot Noir La Fraisiere (2021)",
        origin: "France",
        tagline: "An expressive Pinot Noir with character.",
        desc: "Rich and smooth with cherry, spice, and subtle oak.",
        fullDesc: "This French Pinot Noir offers a harmonious balance of dark cherry, baking spices, and gentle oak for a classic yet bold flavor profile.",
        metrics: "$8 (Glass) | $33 (Bottle)"
      },
      {
        title: "Cru Wine Company, Pinot Noir Santa Lucia Highlands",
        origin: "USA",
        tagline: "A refined Pinot Noir from California's Highlands.",
        desc: "Elegant and smooth with red berry and floral notes.",
        fullDesc: "This Pinot Noir from Santa Lucia Highlands offers a delicate balance of red berry flavors, subtle floral aromas, and a hint of spice, delivering a polished finish.",
        metrics: "$11 (Glass) | $44 (Bottle)"
      },
      {
        title: "Bouchaine, Pinot Noir Carneros (2019)",
        origin: "USA",
        tagline: "A luxurious Pinot Noir from Napa Valley.",
        desc: "Rich and complex with layers of cherry, plum, and earthy tones.",
        fullDesc: "Bouchaine's Carneros Pinot Noir showcases ripe cherry and plum flavors, complemented by earthy undertones and a silky texture, making it an exquisite choice for any occasion.",
        metrics: "$15 (Glass) | $60 (Bottle)"
      },
      {
        title: "Vite Colte, La Luna e Falo Barbera d'Asti Superiore (2019)",
        origin: "Italy",
        tagline: "An Italian classic with a modern twist.",
        desc: "Vibrant and bold with notes of dark fruit and spice.",
        fullDesc: "This Barbera d'Asti Superiore captivates with its intense flavors of blackberry, plum, and a touch of spice, supported by a balanced acidity and smooth finish.",
        metrics: "$12 (Glass) | $47 (Bottle)"
      },
      {
        title: "Chateau de Callac, Graves Rouge (2019)",
        origin: "France",
        tagline: "A Bordeaux gem with depth and elegance.",
        desc: "Full-bodied with flavors of dark berries and subtle oak.",
        fullDesc: "From the Graves region, this Rouge combines rich dark berry flavors with hints of tobacco and oak, creating a balanced wine with a smooth and lasting finish.",
        metrics: "$8 (Glass) | $33 (Bottle)"
      },
      {
        title: "Bliss Family Vineyards, Merlot Estate Bottled Mendocino (2021)",
        origin: "USA",
        tagline: "A smooth and approachable Merlot.",
        desc: "Bright and fruity with hints of cherry and vanilla.",
        fullDesc: "This estate-bottled Merlot from Mendocino offers a delightful medley of cherry and red berry flavors, complemented by soft tannins and a touch of vanilla.",
        metrics: "$7 (Glass) | $29 (Bottle)"
      },
    ],
          
  },
  {
    category: "Wine-3",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Senorio De Sarria, Navarra Crianza (2019)",
        origin: "Spain",
        tagline: "A Spanish classic with a modern flair.",
        desc: "Balanced and vibrant with red fruit and oak nuances.",
        fullDesc: "This Crianza from Navarra offers a delightful harmony of bright red fruit flavors, smooth tannins, and a subtle touch of oak, embodying the essence of Spanish winemaking.",
        metrics: "$10 (Glass) | $39 (Bottle)"
      },
      {
        title: "Highway 12 Vineyards, Cabernet Sauvignon Sonoma County (2020)",
        origin: "USA",
        tagline: "A bold Cabernet from the heart of Sonoma.",
        desc: "Rich and robust with notes of black currant and spice.",
        fullDesc: "This Cabernet Sauvignon showcases bold black currant and dark cherry flavors, layered with hints of spice and smooth tannins for a well-rounded finish.",
        metrics: "$9 (Glass) | $35 (Bottle)"
      },
      {
        title: "Bruocoa Family Vineyards, Cabernet",
        origin: "USA",
        tagline: "An indulgent Cabernet for all occasions.",
        desc: "Deep and velvety with flavors of dark fruit and cocoa.",
        fullDesc: "The Bruocoa Family Cabernet delivers a rich profile of blackberry, plum, and subtle cocoa, paired with elegant tannins and a lingering finish.",
        metrics: "$11 (Glass) | $46 (Bottle)"
      },
      {
        title: "Slate, Red Wine California",
        origin: "USA",
        tagline: "A versatile red with a Californian charm.",
        desc: "Smooth and approachable with ripe berry notes.",
        fullDesc: "Slate Red Wine embodies the essence of California with its ripe berry flavors, smooth texture, and a touch of spice, making it a perfect choice for any gathering.",
        metrics: "$10 (Glass) | $41 (Bottle)"
      },
    ],
    
  },
  {
    category: "Wine(N)",
    subCategories: [
      {
        subCategory: "Wine(N1)",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Casalforte, Prosecco Extra Dry",
            origin: "Italy",
            tagline: "A sparkling delight from Italy.",
            desc: "Crisp, refreshing prosecco with notes of pear and apple.",
            fullDesc: "This Italian prosecco offers a delightful balance of crisp acidity and gentle sweetness, with bright notes of pear and green apple, perfect for celebrations.",
            metrics: "$8 (Glass) | $33 (Bottle)"
          },
          {
            title: "Andre Clourt, Champagne Brut Grande Reserve (NV)",
            origin: "France",
            tagline: "Elegance in every bubble.",
            desc: "Classic French champagne with refined effervescence and complex flavors.",
            fullDesc: "A luxurious champagne featuring delicate bubbles, notes of brioche and citrus, and a finish that lingers with sophistication.",
            metrics: "$25 (Glass) | $101 (Bottle)"
          },
          {
            title: "Perelada, Cava Brut Rosé",
            origin: "Spain",
            tagline: "Vibrant pink bubbles with a Spanish flair.",
            desc: "A sparkling rosé with berry notes and a crisp finish.",
            fullDesc: "This cava offers a lively effervescence with flavors of red berries and a refreshing acidity, perfect for any occasion.",
            metrics: "$8 (Glass) | $32 (Bottle)"
          },
          {
            title: "Highway 12 Vineyards, Pinot Noir Rosé North Coast (2023)",
            origin: "USA",
            tagline: "California's coastal charm in a glass.",
            desc: "A light and elegant rosé with strawberry and floral notes.",
            fullDesc: "This Pinot Noir Rosé captures the essence of California's North Coast, delivering subtle strawberry and rose petal aromas with a refreshing finish.",
            metrics: "$9 (Glass) | $36 (Bottle)"
          },
          {
            title: "Salmon Ru, Riesling Finger Lakes (2023)",
            origin: "USA",
            tagline: "A crisp and lively Riesling from New York.",
            desc: "Fresh and fruity with hints of peach and citrus.",
            fullDesc: "Hailing from the Finger Lakes, this Riesling boasts vibrant acidity and layers of stone fruit and citrus, making it a versatile choice.",
            metrics: "$8 (Glass) | $30 (Bottle)"
          },
          {
            title: "Terracotta, Pinot Grigio della Venezie (2022)",
            origin: "Italy",
            tagline: "Refreshing Italian white wine.",
            desc: "Light and crisp with hints of green apple and citrus.",
            fullDesc: "This Pinot Grigio from Veneto is a classic expression of Italian elegance, featuring bright flavors of apple, citrus, and a clean finish.",
            metrics: "$8 (Glass) | $31 (Bottle)"
          },
          {
            title: "Taft Street, Sauvignon Blanc Russian River Valley",
            origin: "USA",
            tagline: "A zesty white from California.",
            desc: "Crisp and vibrant with tropical fruit and citrus notes.",
            fullDesc: "A beautifully crafted Sauvignon Blanc from Russian River Valley, offering aromas of passionfruit, lime, and a hint of minerality.",
            metrics: "$10 (Glass) | $39 (Bottle)"
          },
          {
            title: "Blue Rock Vineyard, Baby Blue Blanc (2023)",
            origin: "USA",
            tagline: "A bold white blend for every occasion.",
            desc: "Rich and creamy with tropical fruit and vanilla notes.",
            fullDesc: "This white blend combines lush tropical fruit flavors with a creamy texture, balanced by a touch of oak for a delightful complexity.",
            metrics: "$13 (Glass) | $53 (Bottle)"
          },
          {
            title: "Francois Labet, Bourgogne Chardonnay Vieilles Vignes (2022)",
            origin: "France",
            tagline: "A classic French Chardonnay.",
            desc: "Elegant and balanced with notes of citrus and toasted almonds.",
            fullDesc: "A refined Chardonnay from Burgundy, featuring flavors of citrus, ripe pear, and a hint of toasted almond with a silky finish.",
            metrics: "$13 (Glass) | $53 (Bottle)"
          },
          
        ],
      },
      {
        subCategory: "Wine(N2)",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Highway 12 Vineyards, Chardonnay California (2023)",
            origin: "USA",
            tagline: "A vibrant Chardonnay from California.",
            desc: "Bright and refreshing with notes of green apple and vanilla.",
            fullDesc: "This California Chardonnay offers a delightful blend of fresh fruit and subtle oak, perfect for pairing with a variety of dishes.",
            metrics: "$9 (Glass) | $37 (Bottle)"
          },
          {
            title: "Francois Labet, Bourgogne Vieilles Vignes (2022)",
            origin: "France",
            tagline: "A silky Pinot Noir from Burgundy.",
            desc: "Light-bodied with notes of red berries and earthy undertones.",
            fullDesc: "This Pinot Noir from Burgundy presents delicate flavors of cherry, raspberry, and a touch of earthiness, ideal for light meals.",
            metrics: "$9 (Glass) | $37 (Bottle)"
          },
          {
            title: "Matthieu de Brully, Pinot Noir La Fraisiere (2021)",
            origin: "France",
            tagline: "An expressive Pinot Noir with character.",
            desc: "Rich and smooth with cherry, spice, and subtle oak.",
            fullDesc: "This French Pinot Noir offers a harmonious balance of dark cherry, baking spices, and gentle oak for a classic yet bold flavor profile.",
            metrics: "$8 (Glass) | $33 (Bottle)"
          },
          {
            title: "Cru Wine Company, Pinot Noir Santa Lucia Highlands",
            origin: "USA",
            tagline: "A refined Pinot Noir from California's Highlands.",
            desc: "Elegant and smooth with red berry and floral notes.",
            fullDesc: "This Pinot Noir from Santa Lucia Highlands offers a delicate balance of red berry flavors, subtle floral aromas, and a hint of spice, delivering a polished finish.",
            metrics: "$11 (Glass) | $44 (Bottle)"
          },
          {
            title: "Bouchaine, Pinot Noir Carneros (2019)",
            origin: "USA",
            tagline: "A luxurious Pinot Noir from Napa Valley.",
            desc: "Rich and complex with layers of cherry, plum, and earthy tones.",
            fullDesc: "Bouchaine's Carneros Pinot Noir showcases ripe cherry and plum flavors, complemented by earthy undertones and a silky texture, making it an exquisite choice for any occasion.",
            metrics: "$15 (Glass) | $60 (Bottle)"
          },
          {
            title: "Vite Colte, La Luna e Falo Barbera d'Asti Superiore (2019)",
            origin: "Italy",
            tagline: "An Italian classic with a modern twist.",
            desc: "Vibrant and bold with notes of dark fruit and spice.",
            fullDesc: "This Barbera d'Asti Superiore captivates with its intense flavors of blackberry, plum, and a touch of spice, supported by a balanced acidity and smooth finish.",
            metrics: "$12 (Glass) | $47 (Bottle)"
          },
          {
            title: "Chateau de Callac, Graves Rouge (2019)",
            origin: "France",
            tagline: "A Bordeaux gem with depth and elegance.",
            desc: "Full-bodied with flavors of dark berries and subtle oak.",
            fullDesc: "From the Graves region, this Rouge combines rich dark berry flavors with hints of tobacco and oak, creating a balanced wine with a smooth and lasting finish.",
            metrics: "$8 (Glass) | $33 (Bottle)"
          },
          {
            title: "Bliss Family Vineyards, Merlot Estate Bottled Mendocino (2021)",
            origin: "USA",
            tagline: "A smooth and approachable Merlot.",
            desc: "Bright and fruity with hints of cherry and vanilla.",
            fullDesc: "This estate-bottled Merlot from Mendocino offers a delightful medley of cherry and red berry flavors, complemented by soft tannins and a touch of vanilla.",
            metrics: "$7 (Glass) | $29 (Bottle)"
          },
        ],
      },
      {
        subCategory: "Wine(N3)",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Senorio De Sarria, Navarra Crianza (2019)",
            origin: "Spain",
            tagline: "A Spanish classic with a modern flair.",
            desc: "Balanced and vibrant with red fruit and oak nuances.",
            fullDesc: "This Crianza from Navarra offers a delightful harmony of bright red fruit flavors, smooth tannins, and a subtle touch of oak, embodying the essence of Spanish winemaking.",
            metrics: "$10 (Glass) | $39 (Bottle)"
          },
          {
            title: "Highway 12 Vineyards, Cabernet Sauvignon Sonoma County (2020)",
            origin: "USA",
            tagline: "A bold Cabernet from the heart of Sonoma.",
            desc: "Rich and robust with notes of black currant and spice.",
            fullDesc: "This Cabernet Sauvignon showcases bold black currant and dark cherry flavors, layered with hints of spice and smooth tannins for a well-rounded finish.",
            metrics: "$9 (Glass) | $35 (Bottle)"
          },
          {
            title: "Bruocoa Family Vineyards, Cabernet",
            origin: "USA",
            tagline: "An indulgent Cabernet for all occasions.",
            desc: "Deep and velvety with flavors of dark fruit and cocoa.",
            fullDesc: "The Bruocoa Family Cabernet delivers a rich profile of blackberry, plum, and subtle cocoa, paired with elegant tannins and a lingering finish.",
            metrics: "$11 (Glass) | $46 (Bottle)"
          },
          {
            title: "Slate, Red Wine California",
            origin: "USA",
            tagline: "A versatile red with a Californian charm.",
            desc: "Smooth and approachable with ripe berry notes.",
            fullDesc: "Slate Red Wine embodies the essence of California with its ripe berry flavors, smooth texture, and a touch of spice, making it a perfect choice for any gathering.",
            metrics: "$10 (Glass) | $41 (Bottle)"
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
    category: "Liquor",
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
            fullDesc: "Jim Beam bourbon delivers a timeless flavor profile with notes of vanilla, caramel, and oak, embodying the spirit of traditional Kentucky craftsmanship.",
            metrics: "$7"
          },
          {
            title: "Makers Mark (bourbon)",
            origin: "USA",
            tagline: "Handcrafted for a smooth and sweet experience.",
            desc: "Rich and flavorful with notes of caramel and vanilla.",
            fullDesc: "Makers Mark bourbon is a handcrafted classic, offering a rich balance of sweet caramel, vanilla, and a subtle oak finish for a smooth sipping experience.",
            metrics: "$11"
          },
          {
            title: "Four Roses (bourbon)",
            origin: "USA",
            tagline: "A delicate balance of flavor and smoothness.",
            desc: "Crisp, smooth, and slightly fruity.",
            fullDesc: "Four Roses bourbon delivers a unique blend of delicate fruit flavors, spices, and a smooth finish, crafted with precision and care.",
            metrics: "$8"
          },
          {
            title: "Woodford Reserve (bourbon)",
            origin: "USA",
            tagline: "A refined bourbon with a complex character.",
            desc: "Rich and bold with notes of dark chocolate and spices.",
            fullDesc: "Woodford Reserve bourbon is a premium choice, offering layers of complex flavors including dark chocolate, spices, and a hint of tobacco for a luxurious finish.",
            metrics: "$13"
          },
          {
            title: "Knob Creek (bourbon)",
            origin: "USA",
            tagline: "A full-bodied bourbon with bold flavors.",
            desc: "Robust and intense with hints of maple and nutmeg.",
            fullDesc: "Knob Creek bourbon is crafted to perfection, offering a bold flavor profile with maple syrup sweetness, nutmeg spice, and a lingering smoky finish.",
            metrics: "$13"
          },
          {
            title: "TX Bourbon (bourbon)",
            origin: "USA",
            tagline: "A Texas-made bourbon with a unique twist.",
            desc: "Rich, smooth, and distinctly Texan.",
            fullDesc: "TX Bourbon delivers a bold and distinctive flavor with hints of vanilla, caramel, and a uniquely smooth finish that pays homage to its Texan roots.",
            metrics: "$17"
          },
          {
            title: "Remy Martin VSOP (cognac)",
            origin: "France",
            tagline: "The epitome of smooth French elegance.",
            desc: "Harmonious and rich with fruity and floral notes.",
            fullDesc: "Remy Martin VSOP cognac is a perfectly balanced spirit, showcasing harmonious notes of ripe fruit, subtle floral tones, and a silky smooth finish.",
            metrics: "$20"
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
            fullDesc: "Tanqueray gin delivers a perfectly balanced blend of juniper, coriander, and citrus, making it an ideal choice for classic cocktails.",
            metrics: "$11"
          },
          {
            title: "Tanqueray 10 (gin)",
            origin: "England",
            tagline: "A premium gin with unparalleled smoothness.",
            desc: "Rich and refreshing with citrus-forward botanicals.",
            fullDesc: "Tanqueray 10 gin is a premium spirit crafted with the finest fresh citrus and botanicals, offering a velvety smooth finish for the discerning palate.",
            metrics: "$12"
          },
          {
            title: "Bombay Sapphire (gin)",
            origin: "England",
            tagline: "A vibrant gin infused with exotic botanicals.",
            desc: "Bright and aromatic with a delicate spice finish.",
            fullDesc: "Bombay Sapphire gin features a unique blend of 10 exotic botanicals, creating a refreshing and versatile spirit perfect for any occasion.",
            metrics: "$10"
          },
          {
            title: "Hendricks (gin)",
            origin: "Scotland",
            tagline: "A quirky gin with a hint of cucumber and rose.",
            desc: "Unique and refreshing with floral undertones.",
            fullDesc: "Hendricks gin stands out with its infusion of cucumber and rose petals, offering a delightfully refreshing and smooth flavor profile.",
            metrics: "$13"
          },
          {
            title: "Campari (liqueur)",
            origin: "Italy",
            tagline: "A classic Italian aperitif with bold flavors.",
            desc: "Bitter and aromatic with notes of orange and herbs.",
            fullDesc: "Campari is a timeless Italian liqueur, blending bold citrus and herbal flavors, perfect for cocktails like Negronis or as a pre-dinner aperitif.",
            metrics: "$12"
          },
          {
            title: "Grand Marnier (liqueur)",
            origin: "France",
            tagline: "An iconic blend of cognac and orange essence.",
            desc: "Rich and smooth with a sweet orange finish.",
            fullDesc: "Grand Marnier combines the elegance of cognac with the vibrant flavors of orange essence, delivering a luxurious and versatile liqueur.",
            metrics: "$13"
          },
          {
            title: "Disaronno Amaretto (liqueur)",
            origin: "Italy",
            tagline: "A sweet and almond-flavored Italian classic.",
            desc: "Smooth and nutty with a hint of marzipan.",
            fullDesc: "Disaronno Amaretto is a beloved Italian liqueur known for its rich almond flavor, smooth texture, and versatility in cocktails or on its own.",
            metrics: "$12"
          },
          {
            title: "Cointreau (liqueur)",
            origin: "France",
            tagline: "A refined orange liqueur for sophisticated cocktails.",
            desc: "Crisp and zesty with a balanced sweetness.",
            fullDesc: "Cointreau is a premium French liqueur, offering a perfect balance of sweet and bitter orange flavors, ideal for enhancing any cocktail.",
            metrics: "$12"
          },
          {
            title: "Kahlua (liqueur)",
            origin: "Mexico",
            tagline: "A rich coffee liqueur with a hint of sweetness.",
            desc: "Velvety and bold with coffee and vanilla notes.",
            fullDesc: "Kahlua is a renowned coffee liqueur, delivering deep coffee flavors with hints of vanilla, perfect for cocktails or as a standalone treat.",
            metrics: "$11"
          },
          {
            title: "Aperol (liqueur)",
            origin: "Italy",
            tagline: "A vibrant aperitif with a zesty twist.",
            desc: "Lightly bitter with citrus and herbal undertones.",
            fullDesc: "Aperol is a bright and refreshing Italian liqueur, featuring a unique blend of citrus, herbs, and a touch of sweetness, perfect for spritzes or sipping.",
            metrics: "$10"
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
            fullDesc: "Bacardi Silver is a classic light rum, offering a clean and smooth profile perfect for mixing in your favorite cocktails.",
            metrics: "$7"
          },
          {
            title: "Malibu Coconut (rum)",
            origin: "Barbados",
            tagline: "A sweet rum with tropical coconut flavor.",
            desc: "Smooth and creamy with a vibrant coconut essence.",
            fullDesc: "Malibu Coconut brings the tropical vibes with its sweet coconut flavor, making it a favorite for beach-inspired cocktails.",
            metrics: "$7"
          },
          {
            title: "Macallan 12 (scotch)",
            origin: "Scotland",
            tagline: "A premium single malt with rich character.",
            desc: "Smooth and well-balanced with hints of dried fruit.",
            fullDesc: "Macallan 12 is a luxurious single malt scotch, aged in sherry-seasoned oak casks, offering a rich and full-bodied flavor experience.",
            metrics: "$27"
          },
          {
            title: "Macallan 18 (scotch)",
            origin: "Scotland",
            tagline: "An exceptional single malt aged to perfection.",
            desc: "Rich and complex with notes of dried fruits and spice.",
            fullDesc: "Macallan 18 delivers a superior single malt experience, aged in fine oak casks, offering a harmonious blend of flavor and depth.",
            metrics: "$42"
          },
          {
            title: "Glenlivet 12 (scotch)",
            origin: "Scotland",
            tagline: "A smooth single malt with a fruity profile.",
            desc: "Elegant and floral with a hint of sweetness.",
            fullDesc: "Glenlivet 12 is a classic Speyside single malt, known for its smooth texture and delicate flavors of pear and honey.",
            metrics: "$21"
          },
          {
            title: "Glenfiddich 12 (scotch)",
            origin: "Scotland",
            tagline: "A pioneering single malt with timeless appeal.",
            desc: "Fresh and fruity with hints of oak and orchard fruits.",
            fullDesc: "Glenfiddich 12 is a renowned single malt scotch, celebrated for its signature pear notes and smooth, balanced finish.",
            metrics: "$21"
          },
        ],
        
      },
      {
        subCategory: "Tequila",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Johnnie Walker Black Label 12 Y.O",
            origin: "Art Of Blend",
            tagline: "Smooth blend with rich, complex flavors",
            desc: "Balanced blend with smoky, malty flavors and a hint of sweetness.",
            fullDesc:
              "Johnnie Walker Black Label combines smoothness and complexity, offering rich smoky and malty flavors with a touch of sweetness.",
            metrics: "30 ml - $9.99 | 60 ml - $17.99",
            image: "./assets/img/modal-images/bar-menu/jw-black-label.jpg",
            chefSpecial: false,
          },
          {
            title: "Chivas Regal 12 Y.O",
            origin: "Art Of Blend",
            tagline: "Classic blend with smooth, fruity flavors",
            desc: "Smooth with notes of honey, ripe apples, and vanilla.",
            fullDesc:
              "Chivas Regal 12 is a well-rounded blend, known for its smooth, fruity profile with honey and vanilla undertones.",
            metrics: "30 ml - $8.99 | 60 ml - $15.99",
            image: "./assets/img/modal-images/bar-menu/chivas-12.jpg",
            chefSpecial: false,
          },
          {
            title: "Dewar's 12 Y.O",
            origin: "Art Of Blend",
            tagline: "Rich and balanced blend aged to perfection",
            desc: "Smooth, with honeyed and floral notes, finished with a hint of smoke.",
            fullDesc:
              "Dewar's 12-year-old offers a smooth and balanced experience with honey and floral notes, and a light smoky finish.",
            metrics: "30 ml - $8.49 | 60 ml - $14.99",
            image: "./assets/img/modal-images/bar-menu/dewars-12.jpg",
            chefSpecial: false,
          },
          {
            title: "Chivas Regal 18 Y.O",
            origin: "Art Of Blend",
            tagline: "Richly aged with deep flavors",
            desc: "Complex and rich with layers of dark chocolate and dried fruits.",
            fullDesc:
              "Chivas Regal 18-year-old is an opulent blend with rich, complex flavors of dark chocolate and dried fruits, perfect for special occasions.",
            metrics: "30 ml - $14.99 | 60 ml - $27.99",
            image: "./assets/img/modal-images/bar-menu/chivas-18.jpg",
            chefSpecial: false,
          },
          {
            title: "Dewar's 18 Y.O",
            origin: "Art Of Blend",
            tagline: "Sophisticated and refined with a smooth finish",
            desc: "Aged for a rich, refined flavor with subtle honey and smoky notes.",
            fullDesc:
              "Dewar's 18 offers a richly smooth profile with hints of honey and a smoky finish, perfect for those who appreciate a refined blend.",
            metrics: "30 ml - $16.49 | 60 ml - $28.99",
            image: "./assets/img/modal-images/bar-menu/dewars-18.jpg",
            chefSpecial: false,
          },
          {
            title: "Monkey Shoulder",
            origin: "Art Of Blend",
            tagline: "Smooth, creamy blend with a malty edge",
            desc: "Mellow and malty with notes of vanilla, honey, and spices.",
            fullDesc:
              "Monkey Shoulder is a smooth, triple-malt blend with a mellow profile, featuring vanilla and honey with a hint of spice.",
            metrics: "30 ml - $9.49 | 60 ml - $16.99",
            image: "./assets/img/modal-images/bar-menu/monkey-shoulder.jpg",
            chefSpecial: false,
          },
          {
            title: "Johnnie Walker Red Label",
            origin: "Art Of Blend",
            tagline: "Vibrant and bold with a hint of spice",
            desc: "Smoky and peppery with hints of malt and fruit.",
            fullDesc:
              "Johnnie Walker Red Label offers a bold, peppery flavor with smoky undertones and a touch of fruit, ideal for mixing.",
            metrics: "30 ml - $7.99 | 60 ml - $13.99",
            image: "./assets/img/modal-images/bar-menu/jw-red-label.jpg",
            chefSpecial: false,
          },
          {
            title: "Ballantine’s Finest",
            origin: "Art Of Blend",
            tagline: "Balanced and smooth with a light smoky edge",
            desc: "Soft with notes of honey and a hint of spice.",
            fullDesc:
              "Ballantine’s Finest is a smooth, well-rounded blend with subtle honey flavors and a hint of spice and smoke.",
            metrics: "30 ml - $7.49 | 60 ml - $13.49",
            image: "./assets/img/modal-images/bar-menu/ballantines-finest.jpg",
            chefSpecial: false,
          },
          {
            title: "Dewar's White Label",
            origin: "Art Of Blend",
            tagline: "Smooth and light with a touch of sweetness",
            desc: "Mellow with notes of vanilla, pear, and a hint of smoke.",
            fullDesc:
              "Dewar's White Label is a smooth and light blend, offering notes of vanilla and pear with a gentle hint of smoke.",
            metrics: "30 ml - $7.49 | 60 ml - $13.49",
            image: "./assets/img/modal-images/bar-menu/dewars-white.jpg",
            chefSpecial: false,
          },
          {
            title: "Johnnie Walker Gold Label Reserve",
            origin: "Art Of Blend",
            tagline: "Luxurious blend with a creamy, honeyed finish",
            desc: "Rich with hints of vanilla, honey, and a touch of smoke.",
            fullDesc:
              "Johnnie Walker Gold Label Reserve offers a luxurious taste with creamy honey notes and a smooth, smoky finish.",
            metrics: "30 ml - $12.99 | 60 ml - $23.99",
            image: "./assets/img/modal-images/bar-menu/jw-gold-label.jpg",
            chefSpecial: false,
          },
          {
            title: "Dewar's 15 Y.O",
            origin: "Art Of Blend",
            tagline: "Complex and rich with floral undertones",
            desc: "Smooth with notes of honey, vanilla, and delicate floral notes.",
            fullDesc:
              "Dewar's 15 is a rich, smooth blend with complex layers of honey, vanilla, and floral undertones, ideal for savoring slowly.",
            metrics: "30 ml - $14.49 | 60 ml - $25.99",
            image: "./assets/img/modal-images/bar-menu/dewars-15.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Indian Whisky",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Woodford Reserve",
            origin: "USA",
            tagline: "A sophisticated bourbon with a rich flavor profile.",
            desc: "Notes of dried fruit, vanilla, and toasted oak.",
            fullDesc:
              "Woodford Reserve is a premium bourbon whiskey that offers a complex and rich flavor profile, characterized by its notes of dried fruit, vanilla, and toasted oak. It's crafted using a unique grain recipe and a traditional pot still distillation process.",
            metrics: "30 ml - $8.99 | 60 ml - $15.99",
            image: "./assets/img/modal-images/bar-menu/woodford-reserve.jpg",
            chefSpecial: false,
          },
          {
            title: "Jim Beam White Label",
            origin: "USA",
            tagline: "The world's #1 bourbon, smooth and versatile.",
            desc: "Aged for four years, it has a light sweetness.",
            fullDesc:
              "Jim Beam White Label is a classic bourbon whiskey that has been aged for four years to develop its light sweetness and smooth character. With notes of vanilla and oak, it's perfect for sipping or mixing in cocktails.",
            metrics: "30 ml - $6.99 | 60 ml - $12.99",
            image:
              "./assets/img/modal-images/bar-menu/jim-beam-white-label.jpg",
            chefSpecial: false,
          },
          {
            title: "Jack Daniel's Old No. 7",
            origin: "USA",
            tagline: "The iconic Tennessee whiskey with a smooth finish.",
            desc: "Caramel notes with a hint of smoke and vanilla.",
            fullDesc:
              "Jack Daniel's Old No. 7 is a smooth Tennessee whiskey known for its rich caramel notes and a hint of smoke. Its distinctive flavor profile is achieved through the Lincoln County Process, which involves charcoal filtering, giving it a unique character.",
            metrics: "30 ml - $7.99 | 60 ml - $14.99",
            image:
              "./assets/img/modal-images/bar-menu/jack-daniels-old-no-7.jpg",
            chefSpecial: false,
          },
          {
            title: "Paul John Nirvana Indian Single Malt",
            origin: "India",
            tagline: "A tropical single malt with a unique flavor twist.",
            desc: "Hints of caramel, honey, and fruit.",
            fullDesc:
              "Paul John Nirvana is a tropical single malt whisky from India, offering a unique flavor profile with hints of caramel, honey, and dried fruits. Crafted using traditional methods, it reflects the rich heritage of Indian distillation.",
            metrics: "30 ml - $9.49 | 60 ml - $16.49",
            image: "./assets/img/modal-images/bar-menu/paul-john-nirvana.jpg",
            chefSpecial: false,
          },
          {
            title: "Suntory Toki Japanese Whisky",
            origin: "Japan",
            tagline: "A harmonious blend of Japanese whiskies.",
            desc: "Crisp and refreshing with a touch of fruitiness.",
            fullDesc:
              "Suntory Toki is a blended whisky that captures the essence of Japanese craftsmanship. With a crisp and refreshing taste, it features a blend of malt and grain whiskies, offering subtle notes of green apple, honey, and citrus.",
            metrics: "30 ml - $10.99 | 60 ml - $19.99",
            image: "./assets/img/modal-images/bar-menu/suntory-toki.jpg",
            chefSpecial: false,
          },
          {
            title: "Dewars 8 Japanese Smooth",
            origin: "Scotland/Japan",
            tagline: "A smooth blend with a hint of Japanese influence.",
            desc: "Rich, smooth, and floral with a light finish.",
            fullDesc:
              "Dewars 8 Japanese Smooth is a unique blend of Scotch whisky aged for eight years, influenced by Japanese craftsmanship. It delivers a rich and smooth palate with floral notes and a light finish, making it ideal for sipping neat or in cocktails.",
            metrics: "30 ml - $11.49 | 60 ml - $20.49",
            image:
              "./assets/img/modal-images/bar-menu/dewars-8-japanese-smooth.jpg",
            chefSpecial: false,
          },
          {
            title: "Suntory Hibiki Harmony",
            origin: "Japan",
            tagline: "A symphony of flavors in every drop.",
            desc: "Complex and harmonious, with floral notes.",
            fullDesc:
              "Suntory Hibiki Harmony is a blended whisky that harmonizes various malt and grain whiskies from the Yamazaki, Hakushu, and Chichibu distilleries. It boasts a complex flavor profile with notes of floral, honey, and a hint of oak, making it a true masterpiece of Japanese whisky.",
            metrics: "30 ml - $15.99 | 60 ml - $29.99",
            image:
              "./assets/img/modal-images/bar-menu/suntory-hibiki-harmony.jpg",
            chefSpecial: false,
          },
        ],
      },
    ],
  },
  {
    category: "Cognac,Brandy & Pisco",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Hennessy V.S",
        origin: "Cognac",
        tagline: "Smooth and robust cognac with fruity notes",
        desc: "Classic cognac with hints of vanilla, almond, and toasted oak.",
        fullDesc:
          "Hennessy V.S is a classic cognac with a smooth and robust profile, featuring subtle notes of vanilla, almond, and oak.",
        metrics: "30 ml - $12.99 | 60 ml - $22.99",
        image: "./assets/img/modal-images/bar-menu/hennessy-vs.jpg",
        chefSpecial: false,
      },
      {
        title: "Remy Martin V.S.O.P",
        origin: "Cognac",
        tagline: "Aged cognac with smooth, refined flavors",
        desc: "Complex and balanced with notes of ripe fruit and a hint of spice.",
        fullDesc:
          "Remy Martin V.S.O.P offers a balanced flavor profile with hints of ripe fruit, vanilla, and a touch of spice, perfect for sipping.",
        metrics: "30 ml - $13.99 | 60 ml - $23.99",
        image: "./assets/img/modal-images/bar-menu/remy-martin-vsop.jpg",
        chefSpecial: false,
      },
      {
        title: "ST. Remy",
        origin: "Brandy",
        tagline: "Rich, smooth French brandy",
        desc: "Smooth with a touch of fruit and vanilla, a versatile brandy for sipping or cocktails.",
        fullDesc:
          "ST. Remy offers a rich and smooth taste, with subtle fruit and vanilla notes, making it ideal for sipping or mixing.",
        metrics: "30 ml - $7.99 | 60 ml - $14.99",
        image: "./assets/img/modal-images/bar-menu/st-remy.jpg",
        chefSpecial: false,
      },
      {
        title: "La Botija Quebranta",
        origin: "Pisco",
        tagline: "Traditional Peruvian pisco with a fresh, fruity profile",
        desc: "Fruity and floral with a clean, smooth finish, ideal for cocktails.",
        fullDesc:
          "La Botija Quebranta is a traditional Peruvian pisco, known for its fruity and floral notes, making it a favorite in classic pisco cocktails.",
        metrics: "30 ml - $9.99 | 60 ml - $17.99",
        image: "./assets/img/modal-images/bar-menu/la-botija-quebranta.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Liqueurs",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Baileys Irish Cream",
        origin: "Ireland",
        tagline: "The original Irish cream liqueur, rich and creamy.",
        desc: "A blend of Irish whiskey and fresh cream.",
        fullDesc:
          "Baileys Irish Cream is the original Irish cream liqueur, crafted from a blend of smooth Irish whiskey, fresh cream, and chocolate. Its rich and creamy texture makes it perfect for sipping, over ice, or in coffee.",
        metrics: "30 ml - $6.99 | 60 ml - $12.99",
        image: "./assets/img/modal-images/bar-menu/baileys-irish-cream.jpg",
        chefSpecial: false,
      },
      {
        title: "Kahlua Coffee Liqueur",
        origin: "Mexico",
        tagline: "A rich coffee liqueur with a hint of vanilla.",
        desc: "Perfect for cocktails and desserts.",
        fullDesc:
          "Kahlua Coffee Liqueur is a Mexican coffee-flavored liqueur made from Arabica coffee beans and sugarcane rum. Its rich and sweet flavor makes it an excellent addition to cocktails, desserts, or enjoyed straight.",
        metrics: "30 ml - $5.99 | 60 ml - $10.99",
        image: "./assets/img/modal-images/bar-menu/kahlua-coffee-liqueur.jpg",
        chefSpecial: false,
      },
      {
        title: "Luxardo Sambuca Dei Cesari",
        origin: "Italy",
        tagline: "Anise-flavored liqueur, smooth and aromatic.",
        desc: "Traditionally served with coffee beans.",
        fullDesc:
          "Luxardo Sambuca Dei Cesari is a classic Italian liqueur with a strong anise flavor. Traditionally served with coffee beans, it can be enjoyed neat, on the rocks, or in cocktails, offering a unique and aromatic experience.",
        metrics: "30 ml - $7.49 | 60 ml - $13.49",
        image: "./assets/img/modal-images/bar-menu/luxardo-sambuca.jpg",
        chefSpecial: false,
      },
      {
        title: "Jack Daniel Fire",
        origin: "USA",
        tagline: "A fiery twist on classic Jack Daniel's.",
        desc: "Cinnamon and whiskey combined for a unique flavor.",
        fullDesc:
          "Jack Daniel Fire combines the classic flavor of Jack Daniel's Tennessee whiskey with a bold cinnamon flavor, creating a liqueur that’s perfect for sipping or mixing in cocktails. Its spicy finish adds a unique twist to any drink.",
        metrics: "30 ml - $6.99 | 60 ml - $12.99",
        image: "./assets/img/modal-images/bar-menu/jack-daniel-fire.jpg",
        chefSpecial: false,
      },
      {
        title: "Jack Daniel Honey",
        origin: "USA",
        tagline: "A smooth blend of Jack Daniel's and honey.",
        desc: "Sweet, smooth, and perfect for cocktails.",
        fullDesc:
          "Jack Daniel Honey is a liqueur that combines the rich flavor of Jack Daniel's Tennessee whiskey with sweet honey. Its smooth and sweet profile makes it an excellent choice for sipping, cocktails, or adding a touch of sweetness to your favorite beverages.",
        metrics: "30 ml - $6.99 | 60 ml - $12.99",
        image: "./assets/img/modal-images/bar-menu/jack-daniel-honey.jpg",
        chefSpecial: false,
      },
      {
        title: "Jack Daniel's Green Apple",
        origin: "USA",
        tagline: "A crisp apple twist on classic Jack Daniel's.",
        desc: "Refreshing and fruity with a hint of whiskey.",
        fullDesc:
          "Jack Daniel's Green Apple is a refreshing liqueur that blends the crisp flavor of green apples with the classic taste of Jack Daniel's whiskey. Perfect for cocktails, this liqueur adds a fruity twist to any drink.",
        metrics: "30 ml - $6.99 | 60 ml - $12.99",
        image:
          "./assets/img/modal-images/bar-menu/jack-daniels-green-apple.jpg",
        chefSpecial: false,
      },
      {
        title: "Jagermeister",
        origin: "Germany",
        tagline: "A herbal liqueur with a secret blend of 56 herbs.",
        desc: "Enjoyed ice-cold or in cocktails.",
        fullDesc:
          "Jagermeister is a herbal liqueur from Germany, made from a secret blend of 56 herbs, fruits, and spices. Its unique flavor profile and herbal complexity make it perfect for sipping ice-cold, in cocktails, or as a digestif.",
        metrics: "30 ml - $5.99 | 60 ml - $10.99",
        image: "./assets/img/modal-images/bar-menu/jagermeister.jpg",
        chefSpecial: false,
      },
      {
        title: "Absinthe",
        origin: "Switzerland",
        tagline: "A legendary herbal liqueur with a distinct anise flavor.",
        desc: "Known for its unique preparation and serving style.",
        fullDesc:
          "Absinthe is a highly alcoholic herbal liqueur that features a strong anise flavor and a unique preparation style. Traditionally served with sugar and water, it has a storied history as a favorite among artists and writers.",
        metrics: "30 ml - $8.99 | 60 ml - $15.99",
        image: "./assets/img/modal-images/bar-menu/absinthe.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Aperitif",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Campari",
        origin: "Italy",
        tagline: "A classic bitter liqueur, perfect for cocktails.",
        desc: "Rich red color with herbal and citrus notes.",
        fullDesc:
          "Campari is a bitter liqueur known for its vibrant red color and complex flavor profile, featuring herbal and citrus notes. It is a key ingredient in many classic cocktails, such as the Negroni and the Americano, and is often enjoyed on the rocks with a slice of orange.",
        metrics: "30 ml - $6.49 | 60 ml - $11.99",
        image: "./assets/img/modal-images/bar-menu/campari.jpg",
        chefSpecial: false,
      },
      {
        title: "Aperol",
        origin: "Italy",
        tagline: "The light, refreshing aperitif with a sweet orange flavor.",
        desc: "Perfect for spritz cocktails and summer sipping.",
        fullDesc:
          "Aperol is a vibrant orange aperitif known for its sweet and slightly bitter flavor, making it a perfect choice for summer cocktails. Best enjoyed in an Aperol Spritz, it combines well with prosecco and soda for a refreshing drink.",
        metrics: "30 ml - $5.99 | 60 ml - $10.99",
        image: "./assets/img/modal-images/bar-menu/aperol.jpg",
        chefSpecial: false,
      },
      {
        title: "Martini Extra Dry",
        origin: "Italy",
        tagline: "The quintessential dry vermouth for classic cocktails.",
        desc: "Crisp and aromatic, ideal for martinis.",
        fullDesc:
          "Martini Extra Dry is a premium dry vermouth that is crisp, aromatic, and essential for crafting the perfect martini. With its delicate balance of botanicals and flavors, it's perfect for enhancing your favorite cocktails.",
        metrics: "30 ml - $6.49 | 60 ml - $11.49",
        image: "./assets/img/modal-images/bar-menu/martini-extra-dry.jpg",
        chefSpecial: false,
      },
      {
        title: "Martini Bianco",
        origin: "Italy",
        tagline: "A smooth, sweet vermouth with a hint of vanilla.",
        desc: "Great for sipping or in cocktails.",
        fullDesc:
          "Martini Bianco is a sweet vermouth characterized by its smooth taste and notes of vanilla, herbs, and spices. It can be enjoyed straight, on the rocks, or as a key ingredient in cocktails, providing a sweet and aromatic flavor.",
        metrics: "30 ml - $6.49 | 60 ml - $11.49",
        image: "./assets/img/modal-images/bar-menu/martini-bianco.jpg",
        chefSpecial: false,
      },
      {
        title: "Martini Rosso",
        origin: "Italy",
        tagline: "A rich, sweet vermouth with deep herbal flavors.",
        desc: "Perfect for classic cocktails and sipping.",
        fullDesc:
          "Martini Rosso is a sweet vermouth with a rich, dark color and complex flavor profile, featuring deep herbal notes and a hint of sweetness. It's perfect for classic cocktails like the Negroni or enjoyed straight over ice.",
        metrics: "30 ml - $6.49 | 60 ml - $11.49",
        image: "./assets/img/modal-images/bar-menu/martini-rosso.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Shooters",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "JagerBomb",
        origin: "Germany",
        tagline: "A high-energy shooter combining beer and Jägermeister.",
        desc: "An exhilarating mix of Jägermeister and energy drink.",
        fullDesc:
          "JagerBomb is an exciting shooter that combines a shot of Jägermeister with an energy drink, typically dropped into a glass of beer. This high-energy drink is popular in bars and is known for its bold flavor and energizing effects.",
        metrics: "30 ml - $5.99 | 60 ml - $10.99",
        image: "./assets/img/modal-images/bar-menu/jagerbomb.jpg",
        chefSpecial: false,
      },
      {
        title: "Irish Car Bomb",
        origin: "Ireland",
        tagline: "A creamy, chocolatey delight in a shot glass.",
        desc: "A mix of Irish whiskey and cream liqueur, dropped into stout.",
        fullDesc:
          "The Irish Car Bomb is a fun and popular shooter that consists of a shot of Irish whiskey and Irish cream liqueur dropped into a pint of stout beer. When mixed together, it creates a deliciously creamy and chocolaty drink, perfect for celebrations.",
        metrics: "30 ml - $5.99 | 60 ml - $10.99",
        image: "./assets/img/modal-images/bar-menu/irish-car-bomb.jpg",
        chefSpecial: false,
      },
      {
        title: "Pickle Back",
        origin: "USA",
        tagline: "A tangy and refreshing chaser for whiskey.",
        desc: "A shot of whiskey followed by pickle brine.",
        fullDesc:
          "The Pickle Back is a unique shooter that consists of a shot of whiskey followed by a shot of pickle brine. This tangy and refreshing combination enhances the whiskey's flavor while offering a savory twist.",
        metrics: "30 ml - $5.49 | 60 ml - $9.99",
        image: "./assets/img/modal-images/bar-menu/pickle-back.jpg",
        chefSpecial: false,
      },
      {
        title: "Tropical Punk",
        origin: "USA",
        tagline: "A fruity and fun shooter for summer vibes.",
        desc: "A blend of fruity liqueurs for a sweet finish.",
        fullDesc:
          "Tropical Punk is a colorful and fruity shooter made from a blend of various fruity liqueurs, providing a sweet and refreshing flavor. It's perfect for summer parties and adds a fun touch to any gathering.",
        metrics: "30 ml - $5.99 | 60 ml - $10.99",
        image: "./assets/img/modal-images/bar-menu/tropical-punk.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Beers",
    type: "",
    backgroundImage: "../assets/img/menu-images/page.jpg",
    items: [
      {
        title: "Kingfisher Ultra",
        origin: "India",
        tagline: "A crisp and refreshing lager perfect for hot days.",
        desc: "Light and smooth with a hint of bitterness.",
        fullDesc:
          "Kingfisher Ultra is a light and refreshing lager beer that boasts a smooth taste with just a hint of bitterness. Perfect for hot days or casual gatherings, it pairs well with spicy foods and makes for an ideal companion at any celebration.",
        metrics: "330 ml - $4.99",
        image: "./assets/img/modal-images/bar-menu/kingfisher-ultra.jpg",
        chefSpecial: false,
      },
      {
        title: "Budweiser",
        origin: "USA",
        tagline: "The King of Beers, an iconic American lager.",
        desc: "Smooth, crisp, and full of flavor.",
        fullDesc:
          "Budweiser is a classic American lager known for its smooth taste and crisp finish. Brewed with a blend of premium hops and barley, it's the perfect beer for any occasion, from casual barbecues to major events.",
        metrics: "330 ml - $4.99",
        image: "./assets/img/modal-images/bar-menu/budweiser.jpg",
        chefSpecial: false,
      },
      {
        title: "Corona Extra",
        origin: "Mexico",
        tagline: "A refreshing pale lager, best served with a lime.",
        desc: "Crisp, light, and perfect for the beach.",
        fullDesc:
          "Corona Extra is a pale lager from Mexico, renowned for its crisp and refreshing taste. Often enjoyed with a wedge of lime, this beer is synonymous with relaxation and beach vibes, making it a popular choice for sunny days.",
        metrics: "330 ml - $5.49",
        image: "./assets/img/modal-images/bar-menu/corona-extra.jpg",
        chefSpecial: false,
      },
      {
        title: "Hoegaarden",
        origin: "Belgium",
        tagline: "A classic Belgian white beer with a hint of spice.",
        desc: "Smooth, fruity, and mildly spicy with coriander.",
        fullDesc:
          "Hoegaarden is a traditional Belgian white beer, brewed with wheat and spiced with coriander and orange peel. It has a smooth and fruity taste with a refreshing finish, making it perfect for warm weather and outdoor gatherings.",
        metrics: "330 ml - $5.99",
        image: "./assets/img/modal-images/bar-menu/hoegaarden.jpg",
        chefSpecial: false,
      },
      {
        title: "Heineken",
        origin: "Netherlands",
        tagline: "The world-renowned lager with a distinctive taste.",
        desc: "Crisp and refreshing with a balanced flavor.",
        fullDesc:
          "Heineken is a globally recognized lager with a crisp and refreshing taste. Brewed with high-quality ingredients, it delivers a balanced flavor that makes it a favorite among beer lovers worldwide. Enjoy it chilled for the best experience.",
        metrics: "330 ml - $5.49",
        image: "./assets/img/modal-images/bar-menu/heineken.jpg",
        chefSpecial: false,
      },
    ],
  },
  {
    category: "Wines",
    subCategories: [
      {
        subCategory: "Red Wine",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "La Vielle Ferme Famille Perrin Rouge",
            origin: "France",
            tagline: "A versatile red blend, perfect for any meal.",
            desc: "Fruity and smooth with a hint of spice.",
            fullDesc:
              "La Vielle Ferme Famille Perrin Rouge is a delightful red blend from the Rhône Valley, offering a smooth and fruity palate with hints of spice and soft tannins. It's an excellent choice for pairing with a variety of dishes, making it a versatile option for any occasion.",
            metrics: "750 ml - $14.99",
            image: "./assets/img/modal-images/bar-menu/la-vielle-ferme-red.jpg",
            chefSpecial: false,
          },
          {
            title: "Pasqua Merlot",
            origin: "Italy",
            tagline: "A classic Merlot with ripe fruit flavors.",
            desc: "Smooth and velvety with soft tannins.",
            fullDesc:
              "Pasqua Merlot is a rich and smooth red wine, characterized by its ripe fruit flavors and velvety texture. With soft tannins and a lingering finish, it's perfect for sipping on its own or pairing with red meats and pasta dishes.",
            metrics: "750 ml - $15.99",
            image: "./assets/img/modal-images/bar-menu/pasqua-merlot.jpg",
            chefSpecial: false,
          },
          {
            title: "Pasqua Chianti DOCG",
            origin: "Italy",
            tagline: "A traditional Chianti with vibrant cherry notes.",
            desc: "Fresh and lively with a medium body.",
            fullDesc:
              "Pasqua Chianti DOCG is a classic Italian red wine that showcases vibrant cherry flavors and a lively acidity. With a medium body and subtle herbal notes, it pairs wonderfully with Italian cuisine, making it a staple for any pasta lover.",
            metrics: "750 ml - $16.49",
            image: "./assets/img/modal-images/bar-menu/pasqua-chianti.jpg",
            chefSpecial: false,
          },
          {
            title: "Jacky Marteau AOC Touraine",
            origin: "France",
            tagline: "A refreshing red with elegant fruit flavors.",
            desc: "Crisp and balanced with a smooth finish.",
            fullDesc:
              "Jacky Marteau AOC Touraine is a charming red wine known for its refreshing character and elegant fruit flavors. With a crisp finish and well-balanced structure, it makes an excellent companion for grilled meats and cheese platters.",
            metrics: "750 ml - $17.99",
            image:
              "./assets/img/modal-images/bar-menu/jacky-marteau-touraine.jpg",
            chefSpecial: false,
          },
          {
            title: "Clarendelle AOC Bordeaux Rouge",
            origin: "France",
            tagline: "A sophisticated Bordeaux blend with rich depth.",
            desc: "Full-bodied with notes of dark fruit and oak.",
            fullDesc:
              "Clarendelle AOC Bordeaux Rouge is a refined blend that showcases the best of Bordeaux's rich terroir. With full-bodied depth, notes of dark fruit, and a touch of oak, it offers a complex flavor profile that pairs beautifully with hearty dishes.",
            metrics: "750 ml - $19.99",
            image:
              "./assets/img/modal-images/bar-menu/clarendelle-bordeaux.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "White Wine",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "La Vielle Ferme Famille Perrin Blanc",
            origin: "France",
            tagline: "A crisp white blend with a refreshing finish.",
            desc: "Fruity and floral with a zesty acidity.",
            fullDesc:
              "La Vielle Ferme Famille Perrin Blanc is a delightful white blend that offers a crisp and refreshing palate. With fruity and floral notes balanced by zesty acidity, it pairs wonderfully with seafood dishes, salads, and light appetizers.",
            metrics: "750 ml - $14.99",
            image:
              "./assets/img/modal-images/bar-menu/la-vielle-ferme-white.jpg",
            chefSpecial: false,
          },
          {
            title: "Pasqua Pinot Grigio",
            origin: "Italy",
            tagline: "A refreshing white wine with vibrant citrus notes.",
            desc: "Crisp and light, perfect for warm days.",
            fullDesc:
              "Pasqua Pinot Grigio is a refreshing Italian white wine, known for its vibrant citrus notes and crisp finish. Ideal for sipping on its own or pairing with light pasta dishes and seafood, it’s a great choice for warm weather gatherings.",
            metrics: "750 ml - $15.49",
            image: "./assets/img/modal-images/bar-menu/pasqua-pinot-grigio.jpg",
            chefSpecial: false,
          },
          {
            title: "Jacky Marteau AOC Touraine Sauvignon Blanc",
            origin: "France",
            tagline: "A zesty Sauvignon Blanc with lively acidity.",
            desc: "Crisp and aromatic with green apple notes.",
            fullDesc:
              "Jacky Marteau AOC Touraine Sauvignon Blanc is an aromatic white wine, bursting with crisp acidity and notes of green apple and citrus. Its refreshing character makes it a perfect match for shellfish and fresh salads.",
            metrics: "750 ml - $16.49",
            image:
              "./assets/img/modal-images/bar-menu/jacky-marteau-sauvignon.jpg",
            chefSpecial: false,
          },
          {
            title: "Bex Nahe Riesling",
            origin: "Germany",
            tagline: "An elegant Riesling with delicate sweetness.",
            desc: "Fruity and floral with a touch of minerality.",
            fullDesc:
              "Bex Nahe Riesling is a beautifully balanced white wine that exhibits delicate sweetness paired with fruity and floral notes. With a touch of minerality, it’s an excellent choice for spicy dishes and Asian cuisine.",
            metrics: "750 ml - $18.99",
            image: "./assets/img/modal-images/bar-menu/bex-riesling.jpg",
            chefSpecial: false,
          },
          {
            title: "Hugel Gentil Alsace Blend",
            origin: "France",
            tagline: "A harmonious blend showcasing the best of Alsace.",
            desc: "Fruity and spicy with a smooth finish.",
            fullDesc:
              "Hugel Gentil Alsace Blend is a delightful white wine that brings together various grape varieties to create a harmonious and complex profile. With fruity and spicy notes complemented by a smooth finish, it pairs well with a range of dishes from grilled fish to poultry.",
            metrics: "750 ml - $21.99",
            image: "./assets/img/modal-images/bar-menu/hugel-alsace.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Rosé Wine",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "La Vielle Ferme Famille Perrin Rosé",
            origin: "France",
            tagline: "A delightful rosé, fresh and fruity.",
            desc: "Crisp with flavors of strawberries and cherries.",
            fullDesc:
              "La Vielle Ferme Famille Perrin Rosé is a charming and refreshing wine that delights the palate with its crispness and flavors of strawberries and cherries. Ideal for sipping on a sunny afternoon, it pairs beautifully with light salads and seafood dishes.",
            metrics: "750 ml - $14.99",
            image:
              "./assets/img/modal-images/bar-menu/la-vielle-ferme-rose.jpg",
            chefSpecial: false,
          },
          {
            title: "Domaine Montrose Rosé",
            origin: "France",
            tagline: "An elegant rosé with floral notes.",
            desc: "Delicate and refreshing with a smooth finish.",
            fullDesc:
              "Domaine Montrose Rosé is a beautifully crafted wine that showcases elegant floral notes and a refreshing character. Its delicate flavors and smooth finish make it a perfect match for grilled vegetables, seafood, or simply enjoyed on its own.",
            metrics: "750 ml - $16.99",
            image:
              "./assets/img/modal-images/bar-menu/domaine-montrose-rose.jpg",
            chefSpecial: false,
          },
        ],
      },
      {
        subCategory: "Indian Wine Selection",
        type: "",
        backgroundImage: "../assets/img/menu-images/page.jpg",
        items: [
          {
            title: "Grover Zampa",
            origin: "India",
            tagline: "A rich Indian wine with bold flavors.",
            desc: "Complex and full-bodied with dark fruit notes.",
            fullDesc:
              "Grover Zampa is a renowned Indian wine that delivers a rich and complex palate, showcasing bold flavors of dark fruits with hints of spice. This full-bodied wine is perfect for pairing with grilled meats and hearty dishes.",
            metrics: "750 ml - $19.99",
            image: "./assets/img/modal-images/bar-menu/grover-zampa.jpg",
            chefSpecial: false,
          },
          {
            title: "Fratelli",
            origin: "India",
            tagline: "An elegant blend from the Indian terroir.",
            desc: "Smooth and balanced with a fruity finish.",
            fullDesc:
              "Fratelli wine embodies the essence of Indian terroir, offering a smooth and balanced taste with a delightful fruity finish. Perfect for any occasion, it pairs well with a variety of cuisines, from Indian to international.",
            metrics: "750 ml - $17.49",
            image: "./assets/img/modal-images/bar-menu/fratelli.jpg",
            chefSpecial: false,
          },
          {
            title: "Sula",
            origin: "India",
            tagline: "A pioneering Indian wine with international acclaim.",
            desc: "Fresh and fruity with a vibrant acidity.",
            fullDesc:
              "Sula is a trailblazer in Indian winemaking, known for its fresh and fruity profile complemented by vibrant acidity. It’s an excellent choice for pairing with spicy Indian dishes, seafood, or enjoyed on its own.",
            metrics: "750 ml - $15.99",
            image: "./assets/img/modal-images/bar-menu/sula.jpg",
            chefSpecial: false,
          },
        ],
      },
    ],
  },
];

export default barMenuData;
