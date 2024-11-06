import { Product } from "./types/product";

export const PRODUCTS: Product[] = [
  {
    id: 2,
    title: "IPhone",
    slug: "i-phone",
    heroImage: require("../assets/images/i-phone-1.jpg"),
    imagesUrl: [
      require("../assets/images/i-phone-2.jpg"),
      require("../assets/images/i-phone-3.jpg"),
    ],
    price: 20,
    category: {
      imageUrl: require("../assets/images/i-phone-1.jpg"),
      name: "Phones",
      slug: "phones",
    },
    maxQuantity: 10,
  },
  {
    id: 6,
    title: "Samsung",
    slug: "samsung",
    heroImage: require("../assets/images/samsung-1.jpg"),
    imagesUrl: [
      require("../assets/images/samsung-1.jpg"),
      require("../assets/images/samsung-2.jpg"),
    ],
    price: 30,
    category: {
      imageUrl: require("../assets/images/i-phone-1.jpg"),
      name: "Phones",
      slug: "phones",
    },
    maxQuantity: 12,
  },
  {
    id: 1,
    title: "Macbook",
    slug: "macbook",
    heroImage: require("../assets/images/mac-book-1.jpg"),
    imagesUrl: [
      require("../assets/images/mac-book-1.jpg"),
      require("../assets/images/mac-book-2.jpg"),
      require("../assets/images/mac-book-3.jpg"),
    ],
    price: 40,
    category: {
      imageUrl: require("../assets/images/mac-book-1.jpg"),
      name: "Laptops",
      slug: "laptops",
    },
    maxQuantity: 5,
  },
  {
    id: 5,
    title: "Dell",
    slug: "dell",
    heroImage: require("../assets/images/dell-1.jpg"),
    imagesUrl: [
      require("../assets/images/dell-1.jpg"),
      require("../assets/images/dell-2.jpg"),
    ],
    price: 50,
    category: {
      imageUrl: require("../assets/images/mac-book-1.jpg"),
      name: "Laptops",
      slug: "laptops",
    },
    maxQuantity: 7,
  },

  {
    id: 3,
    title: "Headset",
    slug: "headset",
    heroImage: require("../assets/images/head-set-1.jpg"),
    imagesUrl: [
      require("../assets/images/head-set-1.jpg"),
      require("../assets/images/head-set-2.jpg"),
    ],
    price: 60,
    category: {
      imageUrl: require("../assets/images/head-set-1.jpg"),
      name: "Musics",
      slug: "musics",
    },
    maxQuantity: 15,
  },
  {
    id: 7,
    title: "Nintendo",
    slug: "nintendo",
    heroImage: require("../assets/images/nintendo-switch-1.jpg"),
    imagesUrl: [
      require("../assets/images/nintendo-switch-1.jpg"),
      require("../assets/images/nintendo-switch-2.jpg"),
    ],
    price: 70,
    category: {
      imageUrl: require("../assets/images/ps-5-1.jpg"),
      name: "Gaming",
      slug: "gaming",
    },
    maxQuantity: 8,
  },
];
