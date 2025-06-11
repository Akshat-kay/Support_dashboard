CREATE TABLE support_cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255),
  issue TEXT,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
