const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const config = require("./config");
async function createOrder() {
  const connection = await mysql.createConnection(config.db);
  await connection.execute("Set transaction isolation level read commited");
  await connection.beginTransaction();
  try {
    await connection.execute(
      `update orderdetails set quantityordered= 35 where productcode = 'S18_1749'`
    );
    await connection.commit();
    return `success`;
  } catch (err) {
    connection.rollback();
    return `error`;
  }
}

(async function testOrderCreate() {
  console.log(await createOrder());
  process.exit(0);
})();
