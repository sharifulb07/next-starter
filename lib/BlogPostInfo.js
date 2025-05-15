const blogPostsInfo = [
    {
      id: 1,
      title: "5 Must-Try Breakfasts at Delish Cafe",
      slug: "must-try-breakfasts-delish-cafe",
      excerpt: "From avocado toast to berry pancakes, discover the top-rated breakfast picks loved by our regulars.",
      category: "Breakfast",
      tags: ["breakfast", "top picks", "customer favorites"],
      date: "2025-04-12",
      author: "Chef Nina",
      image: "https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Behind the Scenes: How We Make Our Signature Truffle Pasta",
      slug: "signature-truffle-pasta-delish-cafe",
      excerpt: "Take a look at how our creamy truffle pasta is crafted — from fresh ingredients to perfect plating.",
      category: "Main Course",
      tags: ["pasta", "chef special", "behind the scenes"],
      date: "2025-03-27",
      author: "Chef Marco",
      image: "https://images.unsplash.com/photo-1627955280978-f54fff2f316a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFpbiUyMGNvdXJzZSUyMG9uJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      title: "Vegan at Delish: Our Best Plant-Based Dishes",
      slug: "vegan-plant-based-delish-menu",
      excerpt: "Eating vegan? Here are the top plant-based meals that even meat lovers enjoy.",
      category: "Vegan",
      tags: ["vegan", "plant-based", "healthy eating"],
      date: "2025-03-10",
      author: "Ella R.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW58ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: "Meet the Barista: Secrets Behind Our Best-Selling Coffees",
      slug: "barista-secrets-best-coffee",
      excerpt: "Our head barista shares the methods and beans behind your favorite cappuccino and caramel macchiato.",
      category: "Beverages",
      tags: ["coffee", "barista", "behind the scenes"],
      date: "2025-02-22",
      author: "Jake L.",
      image: "https://images.unsplash.com/photo-1629325288097-55f028c6a159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmV2YXJhZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      title: "Healthy Lunch Ideas from Our New Seasonal Menu",
      slug: "healthy-lunch-delish-cafe",
      excerpt: "Lighter options, fresh flavors. Explore our spring seasonal bowls and salads for a clean energy boost.",
      category: "Seasonal",
      tags: ["healthy", "seasonal menu", "lunch"],
      date: "2025-04-02",
      author: "Chef Nina",
      image: "https://plus.unsplash.com/premium_photo-1681169157789-33b666ab6edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2Vhc29uYWwlMjBjb29rJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        id: 6,
        title: "How We Source Our Fresh Ingredients Locally",
        slug: "local-ingredients-delish-cafe",
        excerpt: "From nearby farms to your plate — discover how Delish Cafe supports local producers.",
        category: "Sustainability",
        tags: ["local", "organic", "farm-to-table"],
        date: "2025-04-08",
        author: "Ella R.",
        image: "https://plus.unsplash.com/premium_photo-1661409151761-31d12ede6870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VzdGFpbmFiaWxpdHklMjBmb29kfGVufDB8fDB8fHww"
      },
      {
        id: 7,
        title: "Top 5 Smoothie Bowls to Energize Your Day",
        slug: "smoothie-bowls-energy-boost",
        excerpt: "Packed with nutrients and flavor, here are our favorite smoothie bowls to start the day right.",
        category: "Smoothies",
        tags: ["smoothies", "healthy", "breakfast"],
        date: "2025-03-18",
        author: "Chef Nina",
        image: "https://plus.unsplash.com/premium_photo-1699577272804-a73a470fb7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U21vb3RoaWVzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        id: 8,
        title: "Delish Cafe’s Monthly Specials – April Edition",
        slug: "monthly-specials-april-delish",
        excerpt: "Explore April’s limited-time dishes, featuring fresh spring produce and bold flavors.",
        category: "Specials",
        tags: ["monthly special", "seasonal", "limited time"],
        date: "2025-04-01",
        author: "Chef Marco",
        image: "https://plus.unsplash.com/premium_photo-1664391811784-53a136d9ab16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BlY2lhbHMlMjBmb29kfGVufDB8fDB8fHww"
      },
      {
        id: 9,
        title: "Coffee Tasting 101: Learn to Taste Like a Pro",
        slug: "coffee-tasting-guide",
        excerpt: "Understand acidity, body, aroma, and flavor in your daily brew with our barista’s guide.",
        category: "Beverages",
        tags: ["coffee", "guide", "barista tips"],
        date: "2025-03-14",
        author: "Jake L.",
        image: "https://plus.unsplash.com/premium_photo-1684952849219-5a0d76012ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmV2ZXJhZ2VzfGVufDB8fDB8fHww"
      },
      {
        id: 10,
        title: "Delish Kids Menu: What Little Foodies Love",
        slug: "kids-menu-delish-cafe",
        excerpt: "Healthy and fun options that your kids will actually want to eat — check out our top picks.",
        category: "Family",
        tags: ["kids menu", "family friendly", "meals for kids"],
        date: "2025-04-05",
        author: "Ella R.",
        image: "https://images.unsplash.com/photo-1650855543392-44edbd4e03cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmFtaWx5JTIwRm9vZHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        id: 11,
        title: "What Makes a Perfect Brunch? We Asked Our Chefs",
        slug: "perfect-brunch-chef-insights",
        excerpt: "From timing to plating, here's how our chefs craft the perfect mid-morning meal.",
        category: "Brunch",
        tags: ["brunch", "chef advice", "cafe culture"],
        date: "2025-03-30",
        author: "Chef Nina",
        image: "https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJ1bmNofGVufDB8fDB8fHww"
      },
      {
        id: 12,
        title: "Behind the Apron: A Day in the Life of Our Kitchen Team",
        slug: "day-in-life-kitchen-delish",
        excerpt: "Early prep, high-speed lunch rush, and creative evenings — meet the team behind your meals.",
        category: "Behind the Scenes",
        tags: ["staff", "culture", "team"],
        date: "2025-02-28",
        author: "Chef Marco",
        image: "https://plus.unsplash.com/premium_photo-1695297515370-32990b502463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VsdHVyYWwlMjBmb29kfGVufDB8fDB8fHww"
      },
      {
        id: 13,
        title: "How to Make Our Famous Iced Matcha at Home",
        slug: "iced-matcha-recipe-delish",
        excerpt: "Our matcha mix, foaming tips, and the right ice-to-liquid ratio — make it just like we do.",
        category: "DIY Recipes",
        tags: ["matcha", "recipes", "drinks"],
        date: "2025-04-09",
        author: "Jake L.",
        image: "https://plus.unsplash.com/premium_photo-1738091397236-93e4cf6ee423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RElZJTIwUmVjZWlwZXMlMjBmb29kfGVufDB8fDB8fHww"
      },
      {
        id: 14,
        title: "Gluten-Free at Delish Cafe: Our Best Picks",
        slug: "gluten-free-options-delish-cafe",
        excerpt: "We’re gluten-free friendly! Explore popular dishes that skip the wheat without sacrificing taste.",
        category: "Dietary",
        tags: ["gluten-free", "health", "allergies"],
        date: "2025-03-25",
        author: "Ella R.",
        image: "https://plus.unsplash.com/premium_photo-1700760415890-cb0977f4cda7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlldGFyeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: 15,
        title: "What’s Brewing: Our Spring Tea Collection",
        slug: "spring-tea-collection-delish",
        excerpt: "From floral infusions to spicy chai blends — sip your way through spring with our new teas.",
        category: "Beverages",
        tags: ["tea", "seasonal", "spring drinks"],
        date: "2025-04-11",
        author: "Jake L.",
        image: "https://plus.unsplash.com/premium_photo-1687354253403-1a7500195e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmtzfGVufDB8fDB8fHww"
      }
  ];
  