# Auto-merged modified table w/ ParamqueryGrid & jQuery

## File Directory Layout
ในหัวข้อนี้เป็นการแสดงถึงโครงสร้างของโฟลเดอร์ที่เกี่ยวข้องสำหรับโปรเจคนี้เพื่ออธิบายถึงความหมายของแต่ละไฟล์ว่าใช้ในการทำงานใดบ้างได้ดังรูปต่อไปนี้
```
├── js
    ├── library
        ├── jquery-ui.js
        ├── jquery.js
        ├── pqgrid.min.js
    ├── import_data.js
    ├── configs.js
    ├── script.js
├── css
    ├── jquery-ui.css
    ├── pqgrid-min.css
    ├── pqgrid.ui.min.css
├── index.html
```

โดยที่ในแต่ละโฟลเดอร์สามารถอธิบายได้ดังนี้
- `js` เป็นโฟลเดอร์ที่รวบรวมเกี่ยวกับฟังก์ชันในการกำหนดการทำงานการสร้างและการกำหนดรูปของตาราง (table) ซึ่งรวมไปถึงไฟล์ที่ใช้ในการดึงข้อมูล (import data) และไฟล์กำหนดรูปแบบของตารางโดยผู้ใช้ (user)
  - `library` เป็นโฟลเดอร์ที่รวมไฟล์เกี่ยวกับ `jQuery` และ `Paramquery Grid`
    - `jquery-ui.js`   
    - `jquery.js`      
    - `pqgrid.min.js`
   
   - `import_data.js` เป็นไฟล์ที่ใช้ในการนำข้อมูลเข้ามาใช้ในการสร้างตาราง
   - `configs.js`     เป็นไฟล์ที่ใช้ในการกำหนดรูปแบบของตารางโดยผู้ใช้ (user) ซึ่งสามารถทำผ่านไฟล์นี้
   - `script.js`      เป็นไฟล์ที่รวมรวมนิยามของฟังก์ชันในการกำหนดรูปแบบตาราง ผสานเซลล์ของตาราง สร้างตารางและอื่น ๆ
- `css` เป็นโฟลเดอร์ที่รวมเกี่ยวกับการตกแต่งตาราง (เป็นการกำหนด default ให้กับตาราง)
   - `jquery-ui.css`
   - `pqgrid-min.css`
   - `pqgrid.ui.min.css`
- `index.html` เป็นไฟล์ `html` ที่ใช้ในการ render ซึ่งผนวกกับไฟล์ทั้งหมดที่อยู่ในโฟลเดอร์ `js` และ `css`

## Instruction
1. กำหนด path ไฟล์ทั้งหมดที่อยู่ภายใน folder `js` (ไม่รวมไฟล์ `import_data.js` และ `configs.js`) และ `css` ภายในส่วนของ `head` เข้าไปภายในไฟล์ `index.html` ได้ดังต่อไปนี้
   
   ```html
    <head>
         <!--------- jQuery & Paramquery Grid  ---------->
         <script src="js/library/jquery.js"></script>
         <script src="js/library/jquery-ui.js"></script>
         <script src="js/library/pqgrid.min.js"></script>

         <!--------------- CSS files --------------------->
         <link rel="stylesheet" href="css/jquery-ui.css"/>
         <link rel="stylesheet" href="css/pqgrid.min.css"/>
         <link rel="stylesheet" href="css/pqgrid.ui.min.css"/>

         <!------------- All functionality table ----------> 
         <script src="js/script.js" type="module"> </script>
    </head>
   ```
2. สร้าง `div` tag โดยมี `id = "automerged-modified-table"` ภายในส่วนของ `body` ในไฟล์ `index.html` เพื่อสร้าง element ของตารางในโปรเจคดังนี้

   ```html
      <body>  
           <div id="automerged-modified-table"></div>
      </body>
   ```
3. ในส่วนของการนำข้อมูลเข้ามาเพื่อใช้ในการแสดงผลลัพธ์บนตารางสามารถทำผ่านไฟล์ `import_data.js` โดยที่ข้อมูลที่นำเข้ามาต้องอยู่ในรูปของ **Two dimensional Array** (อาร์เรย์ 2 มิติ) ตัวอย่างเช่น

   ```javascript
   var data = [
    ["Employee information", "Employee information", "Employee information", "Section", "Role", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill"],
    ["Employee information", "Employee information", "Employee information", "Section", "Role", "Frontend framework", "Frontend framework", "Frontend framework", "Frontend framework", "Backend framework", 
     "Backend framework", "Backend framework", "Backend framework"],
    ["Id", "First name", "Last name", "Section", "Role", "React", "Angular", "Vue", "Svelte", "Express.js", "Laravel", "Springboot", "Django"],
    [1, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
    [2, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
    [3, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
    [4, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
    [5, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
    [6, "Yusuf", "Rahman", "Software developer", "Full Stack developer", "", "✔", "", "", "✔", "", "", ""],
    [7, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
    [8, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
    [9, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
    [10, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"]];

   export default data;
   ```

## Table Style Configuration
ในหัวข้อนี้เป็นการอธิบายเกี่ยวกับวิธีการกำหนดรูปแบบหรือคุณลักษณะของตารางโดยผ่านไฟล์ `configs.js` 
- ไฟล์ `configs.js` มีการกำหนดการแบ่งของรูปแบบออกเป็นในแต่ละส่วนซึ่งประกอบด้วย
   - `var overall_table`$~~~~$เป็นตัวแปรที่ใช้ในการกำหนดรูปแบบของภาพรวมของตาราง
   - `var header`$~~~~~~~~~~~~~~~~~$เป็นตัวแปรที่ใช้ในกำหนดการกำหนดรูปแบบของหัวข้อ (header) ของตาราง
   - `var content`$~~~~~~~~~~~~~~~$เป็นตัวแปรที่ใช้ในการกำหนดรูปแบบของเนื้อหา (content) ของตาราง
   - `var footer`$~~~~~~~~~~~~~~~~~$เป็นตัวแปรที่ใช้ในการกำหนดแถบการจัดแบ่งหน้า (Pagination)
   - `var scrollbar`$~~~~~~~~~~~$เป็นตัวแปรที่ใช้ในการกำหนดเกี่ยวกับแถบเลื่อน (scrollbar)
 
### 1. Overall table
---

#### 1.1 Configuration
จากโครงสร้าง object ของ `var overall_table` ดังต่อไปนี้
```javascript
   var overall_table = {
       width: '100%',
       type: 'static', 
       isPaging: true,
       outer_border: '1.8px solid #afd3f2',
       inner_border: '1.2px solid #afd3f2',
   }
```
โดย `properties` ของ  `var overall_table` มีความหมายดังต่อไปนี้
- `width` คือ ความกว้างของตารางโดยสามารถใช้ได้ในหน่วย `px`, `rem`, `em`, `100%` และ `auto` อาทิเช่น `width: '650px' // '100%'`
- `type` คือ Table mode (โหมดของตาราง)
   - `'static'`
   - `'with_scrollbar'` 
- `isPaging`
- `outer_border`
- `inner_border`


#### 1.2 Table mode (โหมดของตาราง)
สำหรับโปรเจคนี้สามารถกำหนดรูปแบบของตารางได้ 3 รูปแบบดังต่อไปนี้

<table width="100%">
  <thead>
    <tr>
      <th width="15%">Table Mode</th>
      <th width="70%">Image</th>
      <th width="15%">Configs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Static</td>
      <td><img src="https://imgtr.ee/images/2023/09/19/9941b72c080ed2c72681158a882552c8.png"/></td>
      <td>type: "static" <br></br> isPaging: "false"</td>
    </tr>
    <tr>
      <td align="center">Static with pagination</td>
      <td><img src="https://imgtr.ee/images/2023/09/19/a30fdf781b54534432e0fc69105c799d.png"></td>
      <td>type: "static" <br></br> isPaging: "true"</td>
    </tr>
    <tr>
      <td align="center">Static with pagination and scrollbar</td>
      <td><img src="https://imgtr.ee/images/2023/09/19/b8d4943477ae260053a30ac5e4d7a9b2.png"></td>
      <td>type: "with_scrollbar" <br></br> isPaging: "true"</td>
    </tr>  
  </tbody>
</table>
