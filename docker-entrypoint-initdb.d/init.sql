-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS shoppy_db;

-- 创建用户并授权，使用 mysql_native_password 身份验证方法
CREATE USER IF NOT EXISTS 'nestuser'@'%' IDENTIFIED WITH mysql_native_password BY 'nestpass';
GRANT ALL PRIVILEGES ON shoppy_db.* TO 'nestuser'@'%';

-- 也要确保 root 用户可以使用兼容的身份验证方法
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;

-- 刷新权限
FLUSH PRIVILEGES;