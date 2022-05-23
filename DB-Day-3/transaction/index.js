const mysql = require("mysql2/promise");
const config = require("./config");
async function createOrder() {
  const items = ["RI0002", "CB0004"];
  const connection = await mysql.createConnection(config.db);
  await connection.execute("SET TRANSACTION ISOLATION LEVEL READ COMMITED");
  console.log("Finished setting the isolation level to read committed");
  await connection.beginTransaction();
}

try {
    await connection.execute('SELECT id, name FROM product WHERE sku (?,?) FOR UPDATE',items);
    console.log(`Locked rows for skus ${items.join()}`);
    const [itemsToOrder,]= await connection.execute(
        'SELECT name, quantity, price from product WHERE sku IN (?,?) ORDER BY id',
        items
    )
    console.log('Selected quantities for items');
    let orderTotal = 0;
    let orderItems = [];
    for (itemsToOrder of itemsToOrder){
        if (itemsToOrder.quantity<1) {
            throw new Error(`One of the items is out of stock ${itemsToOrder.name}`);
        }
        console.log(`Quantity for ${itemsToOrder.name} is ${itemsToOrder.quantity}`);
        orderTotal += itemsToOrder.price;
        orderItems.push(itemsToOrder.name)
    }
};

(async function testOrderCreate(){
    console.log(await createOrder());
    process.exit(0)
})();
