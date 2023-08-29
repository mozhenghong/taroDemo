# 小程序 

 ## 技术栈

- Taro
- React Redux
- NutUI-React:  `https://nutui.jd.com/taro/react/2x/#/zh-CN/guide/intro-react`

## 目录结构介绍

```
  ├── config   //  配置                     
  ├── dist    //打包
  └── src                        
      ├── assets    //静态资源
      ├── components  // 公共组件  
      ├── pages     // 页面
      ├── request    // 请求
      ├── store       // store数据模块
      ├── types     // ts
      ├── utils       // 工具                
```
## 公共组件--此处实时更新公共组件以及组件简介


## 命名规范

### 常见命名规则

- camelCase
- UpperCamel
- kebab-case
- snake_case
- SCREAMING_SNAKE_CASE

### 规范

1. 项目命名：snake_case
2. 目录命名：camelCase
3. 文件命名：camelCase
4. class 命名：kebab-case
5. scss or less mixin, function or variable: camelCase
6. JS 变量命名：camelCase
7. JS 常量命名：SCREAMING_SNAKE_CASE
8. TS interface Or type: UpperCamel

## 代码规范

### 公共规范

1. 使用 Tab 缩进，一个 Tab 等于2个空格

### 样式规范

1. 样式除特殊情况外禁止出现 `!important`
2. 尽量使用简写。case：`background-color: #000000;` 改为 `background-color: #000;`

### JS 规范

1. 字符串使用单引号
2. 使用ES6+ 语法
3. console、debugger、alert等不要提交到代码仓库
4. 不要有大量的注释代码
5. 删除没有使用到的变量
6. 使用三元替代简单的 if 判断。如果是两个及以上 if 判断，则有限使用 if，而不是三元
7. 不要使用隐式转换
8. 不要无意义的声明变量

   ```javascript
   // bad
   const request = () => {
     let params = {
       pageSize: 10,
       currentPage: 1
     }
     getData(params)
   }

   // good
   const request = () => getData({
     pageSize: 10,
     currentPage: 1
   })
   ```

9. 优先使用 `const`，而不是 `let`
10. 不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性
11. 条件判断和循环最多三层
12. 优先使用 async/await
13. useState 放置于最顶部
14. 一行可以写在 JSX 中，多行提取成函数 (onClick)
