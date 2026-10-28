import fs from "fs";
import path from "path";
import { Readable } from "stream";

// Supposing yeh file downloads folder mein save hogi
const REPORT_DIR = path.join(process.cwd(), "exports");
const REPORT_FILE = path.join(REPORT_DIR, "amazon_order_report.csv");

// Mock Function: Amazon DB se records stream karne ke liye (Cursor based)
function getOrderDataFromDatabase() {
  const mockOrders = [
    {
      orderId: "OD123",
      date: "2026-01-15",
      item: "iPhone 17 Pro",
      price: 120000,
    },
    {
      orderId: "OD124",
      date: "2026-03-22",
      item: "MacBook Air M4",
      price: 95000,
    },
    {
      orderId: "OD125",
      date: "2026-08-10",
      item: "Sony WH-1000XM5",
      price: 25000,
    },
    // Real-world mein yahan lakhon rows ho sakti hain...
  ];

  return Readable.from(mockOrders);
}

async function exportUserOrderReport() {
  // 1. Ensure karo ki exports folder exist karta hai
  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR);
  }

  // 2. CRITICAL STEP: Create a Write Stream to disk
  // Yeh file ko open rakhta hai taaki hum chunk-by-chunk data likh sakein bina RAM full kiye
  const writeStream = fs.createWriteStream(REPORT_FILE, "utf-8");

  // CSV ki Header Row likho
  writeStream.write("Order ID,Date,Item Name,Price (INR)\n");

  // 3. Database se data stream fetch karo
  const dbStream = getOrderDataFromDatabase();

  dbStream.on("data", (order) => {
    // 4. Transform data into CSV format row-by-row
    const csvRow = `${order.orderId},${order.date},"${order.item}",${order.price}\n`;

    // Direct disk par write karo, memory mein hold nahi karna padta
    writeStream.write(csvRow);
  });

  dbStream.on("end", () => {
    // 5. Jab saara data khatam ho jaye, stream ko close kar do
    writeStream.end();
    console.log(`Report successfully generated at: ${REPORT_FILE}`);

    // Real Amazon infra mein: Iske baad file ko AWS S3 bucket par upload kiya jata hai
    // aur user ko secure downlodable link bhej di jaati hai.
  });

  dbStream.on("error", (err) => {
    console.error("Export generating failure:", err);
    writeStream.end();
  });
}

exportUserOrderReport();
