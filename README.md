# rest-server-passport
使用password 授权访问

利用passport中间件生成 x-accesss-token ,访问时在request 头部添加 x-access-token : (token) 访问授权资源。但退出是缺不删除token，导致只要有token即可获取资源
次问题待研究

http://localhost:3000/arttemplate 
使用arttemplate 读取数据库dishes数据渲染页面

## API：
http://localhost:3000/users/register  POST "username" :String,"password":String

http://localhost:3000/users/login  POST "username" :String,"password":String ,   返回token

将token 写入 请求头部  x-access-token :token;

http://localhost:3000/dishes  delet,post ,get
http://localhost:3000/dishes/:disheId  delet,post ,get
