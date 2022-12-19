/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   
  
   env: {
    'MYSQL_HOST': process.env.MYSQL_HOST,
    'MYSQL_PORT':  '3306',
    'MYSQL_DATABASE':process.env.MYSQL_DATABASE,
    'MYSQL_USER':process.env.MYSQL_USER,
    'MYSQL_PASSWORD': process.env.MYSQL_PASSWORD,
    "DATABASE_URL": process.env.DATABASE_URL,
  }
}

 
module.exports = nextConfig
