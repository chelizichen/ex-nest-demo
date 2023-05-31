# Nest学习

## ORM 配置
````javascript
{
  "type": "mysql", // 替换为你要使用的数据库类型
  "host": "localhost", // 数据库主机
  "port": 3306, // 数据库端口
  "username": "your_username", // 数据库用户名
  "password": "your_password", // 数据库密码
  "database": "your_database_name", // 数据库名称
  "entities": ["dist/**/*.entity{.ts,.js}"], // TypeORM 实体的文件路径
  "synchronize": true // 每次应用程序启动时自动同步数据库结构（仅用于开发环境）
}
````
