// 1-Create an object class for the product to store the properties for id, name and price of the product.
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    // Optional methods for additional functionalities
    getInfo() {
      return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
  }


// 2-Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem {
    constructor(product, quantity) {
      if (!product instanceof Product) {
        throw new Error("Product must be an instance of the Product class");
      }
      this.product = product;
      this.quantity = quantity;
    }
  
    // Optional methods for additional functionalities
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }


// 3-To the preceding object class, add the method to calculate the total price of the item.
class ShoppingCartItem {
    constructor(product, quantity) {
      if (!product instanceof Product) {
        throw new Error("Product must be an instance of the Product class");
      }
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
}

// 4-Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add a ShoppingCartItem to the cart
    addItem(cartItem) {
      if (!cartItem instanceof ShoppingCartItem) {
        throw new Error("Argument must be an instance of ShoppingCartItem class");
      }
      this.items.push(cartItem);
    }
  
    // Method to get the total price of all items in the cart
    getTotalPrice() {
      let totalPrice = 0;
      for (const item of this.items) {
        totalPrice += item.getTotalPrice();
      }
      return totalPrice;
    }
  
    // Optional methods for additional functionalities (e.g., remove item, update quantity)
  }


    
// 5-To the shopping cart object, add the following methods.

//     Add the methods to: 
//     Get the total of items inside the cart
class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add a ShoppingCartItem to the cart
    addItem(cartItem) {
      if (!cartItem instanceof ShoppingCartItem) {
        throw new Error("Argument must be an instance of ShoppingCartItem class");
      }
      this.items.push(cartItem);
    }
  
    // Method to get the total price of all items in the cart
    getTotalPrice() {
      let totalPrice = 0;
      for (const item of this.items) {
        totalPrice += item.getTotalPrice();
      }
      return totalPrice;
    }
  
    // Method to get the total number of items in the cart
    getTotalItems() {
      return this.items.length;
    }
  
    // Optional methods for additional functionalities (e.g., remove item, update quantity)
  }
  
// Add items
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getInfo() {
      return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity) {
      if (!product instanceof Product) {
        throw new Error("Product must be an instance of the Product class");
      }
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(cartItem) {
      if (!cartItem instanceof ShoppingCartItem) {
        throw new Error("Argument must be an instance of ShoppingCartItem class");
      }
      this.items.push(cartItem);
    }
  
    getTotalPrice() {
      let totalPrice = 0;
      for (const item of this.items) {
        totalPrice += item.getTotalPrice();
      }
      return totalPrice.toFixed(2); // Ensure two decimal places
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    // Enhanced method to add items with quantity handling
    addItems(product, quantity = 1) { // Optional default quantity of 1
      if (!(product instanceof Product)) {
        throw new Error("Product must be an instance of the Product class");
      }
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if item already exists
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Optional methods for additional functionalities (e.g., remove item, update quantity)
  }
  
//   Remove items
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(cartItem) {
      if (!cartItem instanceof ShoppingCartItem) {
        throw new Error("Argument must be an instance of ShoppingCartItem class");
      }
      this.items.push(cartItem);
    }
  
    getTotalPrice() {
      let totalPrice = 0;
      for (const item of this.items) {
        totalPrice += item.getTotalPrice();
      }
      return totalPrice.toFixed(2); // Ensure two decimal places
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    // Enhanced method to add items with quantity handling
    addItems(product, quantity = 1) {
      if (!(product instanceof Product)) {
        throw new Error("Product must be an instance of the Product class");
      }
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if item already exists
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove items by product ID
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Optional methods for additional functionalities (e.g., update quantity)
  }

//   Display cart items
class ShoppingCart {
    // Existing methods...
  
    // Method to display cart items in a formatted string
    displayCartItems() {
      if (this.items.length === 0) {
        console.log("Your cart is empty.");
        return;
      }
  
      let cartOutput = "";
      for (const item of this.items) {
        cartOutput += `- ${item.product.getInfo()} (Quantity: ${item.quantity})\n`;
      }
      cartOutput += `Total Price: $${this.getTotalPrice()}\n`;
      console.log(cartOutput);
    }
  }

//  6-Go on to test the ability of our objects to:

//   Create products

const product1 = new Product("Apple Watch", 299.99, "Electronics");
const product2 = new Product("Nike Shoes", 79.99, "Clothing");
const product3 = new Product(1, "T-Shirt", 19.99);
const product4 = new Product(2, "Jeans", 49.99);
const product5 = new Product(1, "T-Shirt", 19.99);
const product6 = new Product(2, "Jeans", 49.99);
  
const cartItem3 = new ShoppingCartItem(product1, 2);
const cartItem2 = new ShoppingCartItem(product2, 1);
  
const shoppingCart = new ShoppingCart();
const product7 = new Product(1, "T-Shirt", 19.99);
const product8 = new Product(1, "T-Shirt", 19.99);
const cartItem1 = new ShoppingCartItem(product1, 2);
  
console.log(cartItem1.getTotalPrice()); // Output: 39.98
console.log(product1.getInfo()); // Output: Product ID: 1, Name: T-Shirt, Price: $19.99
shoppingCart.addItem(cartItem3);
shoppingCart.addItem(cartItem2);
  
console.log(shoppingCart.getTotalPrice()); // Output: 89.97 (assuming two decimal places)

console.log(product3.getInfo()); // Output: Product ID: 1, Name: T-Shirt, Price: $19.99
console.log(product2.getInfo()); // Output: Product ID: 2, Name: Jeans, Price: $49.99
shoppingCart.addItem(cartItem4);
shoppingCart.addItem(cartItem5);
shoppingCart.addItem(cartItem6);
shoppingCart.addItem(cartItem7);
shoppingCart.addItem(cartItem8);


// Create a shopping cart
const shoppingCart1 = new ShoppingCart();

// Add products to the cart
shoppingCart.addItems(product1, 2);  // Add 2 T-Shirts
shoppingCart.addItems(product2);      // Add 1 Jeans
shoppingCart.addItems(product3, 2);
shoppingCart.addItems(product4, 2);
shoppingCart.addItems(product6, 2);

console.log(shoppingCart.getTotalItems()); // Output: 3 (2 T-Shirts + 1 Jeans)
console.log(shoppingCart.getTotalPrice()); // Output: 89.97 (assuming two decimal places)

// Display the cart
class ShoppingCart {
    // Existing methods...
  
    // Method to display cart items in a formatted string
    displayCartItems() {
      if (this.items.length === 0) {
        console.log("Your cart is empty.");
        return;
      }
  
      let cartOutput = "";
      for (const item of this.items) {
        cartOutput += `- ${item.product.getInfo()} (Quantity: ${item.quantity})\n`;
      }
      cartOutput += `Total Price: $${this.getTotalPrice()}\n`;
      console.log(cartOutput);
    }
  }
  
  // Usage:
  shoppingCart.displayCartItems();

//  Remove an item from the cart
  class ShoppingCart {
    // Existing methods...
  
    // Method to remove items by product ID
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  }
  
  