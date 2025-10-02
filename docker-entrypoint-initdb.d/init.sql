-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS shoppy_db;

-- 创建用户并授权
CREATE USER IF NOT EXISTS 'nestuser'@'%' IDENTIFIED BY 'nestpass';
GRANT ALL PRIVILEGES ON shoppy_db.* TO 'nestuser'@'%';

-- 也要确保 root 用户可以从任何地方访问（用于调试）
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;

-- 刷新权限
FLUSH PRIVILEGES;