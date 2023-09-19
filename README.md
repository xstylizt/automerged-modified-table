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

---
### 1. Overall table
---

#### Configuration
จากโครงสร้าง object ของ `var overall_table` ดังต่อไปนี้
```javascript
var overall_table = {
      width: '100%',
      outer_border: '1.8px solid #afd3f2',
      inner_border: '1.2px solid #afd3f2',
      isScrollBar: false,
      isPaging: true
}
```
โดย `properties` ของ  `var overall_table` มีความหมายดังต่อไปนี้
- `width:`$~~~~~~~~~~~~~~~~~$ความกว้างของตารางโดยสามารถใช้ได้ในหน่วย `px`, `rem`, `em`, `100%` และ `auto` 
- `outer_border:`$~~~~$กำหนดคุณลักษณะ (ความหนา, สี) ของกรอบภายนอกตารางหน่วย
- `inner_border:`$~~~~$กำหนดคุณลักษณะ (ความหนา, สี) ของกรอบภายในตาราง
- `isScrollBar:`$~~~~~~$สถานะการแสดงแถบเลื่อน (Scrollbar)
   - `true`$~~~~~$เมื่อให้มีการแสดงแถบเลื่อน
   - `false`$~~~$เมื่อไม่ให้มีการแสดงแถบเลื่อน
- `isPaging:`$~~~~~~~~~~~$สถานะการแสดงแถบแบ่งหน้า (Pagination)
   - `true`$~~~~~$เมื่อให้มีการแสดงแถบแบ่งหน้า
   - `false`$~~~$เมื่อไม่ให้มีการแสดงแถบแบ่งหน้า


#### Table mode (โหมดของตาราง)
สำหรับโปรเจคนี้สามารถกำหนดรูปแบบของตารางได้ 3 รูปแบบดังต่อไปนี้

<table width="100%">
  <thead>
    <tr>
      <th width="5%">Table Mode</th>
      <th width="60%">Image</th>
      <th width="15%">Configs</th>
      <th width="20%">When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Static</td>
      <td><img src="https://imgtr.ee/images/2023/09/19/9941b72c080ed2c72681158a882552c8.png"/></td>
      <td>isScrollBar: false<br></br> isPaging: false</td>
      <td>เหมาะสำหรับการใช้เมื่อต้องการแสดงผลลัพธ์ของข้อมูลที่มีจำนวนแถวน้อย ๆ (assume ว่าจำนวนแถวน้อยกว่า 10)</td>
    </tr>
    <tr>
      <td align="center">Pagination</td>
      <td><img src="https://imgtr.ee/images/2023/09/19/a30fdf781b54534432e0fc69105c799d.png"></td>
      <td>isScrollBar: false<br></br> isPaging: true</td>
      <td>เหมาะสำหรับการใช้เมื่อต้องการให้มีการแบ่งหน้าข้อมูลเมื่อข้อมูลที่เข้ามามีจำนวนเแถวเยอะ</td>
    </tr>
    <tr>
      <td align="center">Pagination with scrollbar</td>
      <td><img src="https://imgtr.ee/images/2023/09/19/b8d4943477ae260053a30ac5e4d7a9b2.png"></td>
      <td>isScrollBar: true<br></br> isPaging: true</td>
      <td>ในกรณีที่มีการแบ่งหน้าแล้วต้องการซึ่งมีการแสดงจำนวนแถวต่อหน้าเยอะ ให้มีแถบเลื่อนเพื่อสะดวกต่อการค้นหาข้อมูล</td>
    </tr>  
  </tbody>
</table>

---

### 2. Header
---
#### Configuration
จากโครงสร้าง object ของ `var header` ดังต่อไปนี้
```javascript
var header = {
    n_row: 3,
    style: {
         header_type_height: {
             type: overall_table.type,
             height: '150px'
    },
    background: 'linear-gradient(#fefefe, #dae6f0)',
    padding: '5px 0px 5px 0px',
    font_size: '18px',
    font_weight: 'bold',
    font_color: 'black'
    },
    mergedCells: {
        type: 'auto' ,    
        configs: ''  
    }
}
```
โดย `properties` ของ  `var header` มีความหมายดังต่อไปนี้
- `n_row:`$~~~$จำนวนแถวที่ใช้ในการสร้างหัวข้อ (header) ของตาราง 
- `style`$~~~~~$กำหนดคุณลักษณะให้กับหัวข้อของตาราง
   - `header_type_height.height:`$~~$ความสูงของหัวข้อโดยสามารถใช้ได้ในหน่วย `px`, `rem`, `em`, `100%` และ `auto` 
   - `background:`$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$สีพื้นหลังของหัวข้อ
   - `padding:`$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$กำหนด padding ให้กับเซลล์ที่อยู่ภายในหัวข้อ
   - `font_size:`$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$ขนาดตัวอักษรของหัวข้อ
   - `font_weight:`$~~~~~~~~~~~~~~~~~~~~~~~~~~~~$ความหนาตัวอักษรของหัวข้อ
   - `font_color:`$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$สีตัวอักษรของหัวข้อ
- `mergedCells` กำหนดคุณลักษณะในการผสานเซลล์สำหรับหัวข้อของตาราง
   - `type:`
        -  `"default"`$~~$ใช้เมื่อไม่ต้องการให้มีการผสานเซลล์หัวข้อของตาราง
        -  `"auto"`$~~~~~~~~$ใช้เมื่อต้องการให้มีการผสานเซลล์หัวข้อของตาราง (ค่าที่เหมือนกันที่ถูกผสานเซลล์)
   - `configs:`
       - ถ้า  `type: "default"` แล้ว `configs: []`
       - ถ้า  `type: "auto"`$~~~~~~$แล้ว `configs: []`
---

### 3. Content
---
#### Configuration
จากโครงสร้าง object ของ `var content` ดังต่อไปนี้
```javascript
var content = {
    style: {
      content_type_height: {
         type: overall_table.type,
         height: '600px' 
      },
      odd_row_background: '#e6f4ff',
      even_row_background: '#ffffff',
      padding: '12px 0px 12px 0px',
      font_size: '18px',
      font_weight: '400',
      font_color: 'black'
      },
      numberFreezeRows: 0,
      numberFreezeCols: 0,
      mergedCells: {
            type: 'auto_specific_col',
            configs: [{c1:3, }]
      }
}
```
โดย `properties` ของ  `var content` มีความหมายดังต่อไปนี้
- `style` กำหนดคุณลักษณะให้กับในส่วนของเนื้อหา (content) ของตาราง
  - `content_type_height.height:` กำหนดความสูงของ element ซึ่งมีเนื้อหา (content) ภายในของตารางอยู่
  - `odd_row_background:` กำหนดสีในแถว**เลขคี่**ของเนื้อหา
  - `even_row_background:` กำหนดสีในแถว**เลขคู่**ของเนื้อหา
  - `padding:` กำหนด padding ให้ในแต่ละเซลล์ของเนื้อหา
  - `font_size:` กำหนดขนาดตัวอักษรของเนื้อหา
  - `font_weight:` กำหนดความหนาตัวอักษรของเนื้อหา
  - `font_color:` กำหนดสีตัวอักษรของเนื้อหา
- `numberFreezeRows:` จำนวนแถวที่ต้องการ freeze (ทำให้แถวอยู่กับที่) โดยนับจากแถวแรก
- `numberFreezeCols:` จำนวนคอลัมน์ที่ต้องการ freeze (ทำให้คอลัมน์อยู่กับที่) โดยนับจากคอลัมน์แรก
- `mergedCells`
   - `type`
      -  `"default"` ใช้เมื่อไม่ต้องการให้มีการผสานเซลล์ภายในเนื้อหา
      -  `"auto"`    ใช้เมื่อต้องการให้มีการผสานผสานเซลล์ระหว่าง**แถว**และ**คอลัมน์**ที่มีค่าเหมือนกัน**ทั้งหมด**ภายในเนื้อหา 
      -  `"auto_col"` ใช้เมื่อต้องการให้มีการผสานเซลล์**เฉพาะคอลัมน์ทั้งหมด** ภายในเนื้อหา
      -  `"auto_specific_col"` ใช้เมื่อต้องการให้่มีการผสานเซลล์**เฉพาะคอลัมน์ที่กำหนดเอง** ภายในเนื้อหา
      -  `"specific"` ใช้เมื่อต้องการกำหนดการผสานเซลล์**ด้วยตัวเอง** ผ่านการใช้ rowspan และ colspan ภายในเนื้อหา
   - `configs`
      -  ถ้า  `type: "default"` หรือ `type: "auto" หรือ `type: "auto_col" แล้ว `configs: []`
      -  ถ้า  `type: "auto_specific_col"` แล้ว property `configs` สามารถกำหนดรูปแบบได้ดังนี้ ตัวอย่างเช่น
         -  ถ้าต้องการให้เนื้อหามีการผสานเซลล์ที่คอลัมน์ที่ 3 และ 4 และให้เซลล์ที่ถูกผสานเซลล์ในคอลัมน์ที่ 3 และ 4 มีสีแดงและสีฟ้าตามลำดับ สามารถเขียนได้ดังนี้
            `configs: [{c1:3, style: "background: red"}, {c1:4, style: "background: blue"}]` (สามารถทำได้หลายคอลัมน์โดยการเพิ่ม object ที่มี syntax เหมือนกัน)
            
         -  กรณีถ้าต้องการให้เป็นสีเหมือนกับเซลล์ที่ถูกผสานครั้งแรก สามารถละการใส่ property ได้ดังนี้ `configs: [{c1:3, }, {c1:4, }]`

      -  ถ้า  `type: "specific"` แล้ว property `configs` สามารถกำหนดรูปแบบได้ดังนี้ ตัวอย่างเช่น
         -  ถ้าต้องการให้เนื้อหามีการผสานเซลล์ที่แถวที่ 3 คอลัมน์ที่ 2 และให้เซลล์ที่ผสานนั้นมีสีเขียว โดยให้มี rowspan = 2 และ colspan = 3 สามารถเขียนได้ดังต่อไปนี้
             `configs: [{r1:3, c1:2, rc:2, cc:3, style: "background: green"}]` (สามารถทำได้หลายคอลัมน์โดยการเพิ่ม object ที่มี syntax เหมือนกัน)

            - กรณีถ้าต้องการให้เป็นสีเหมือนกับเซลล์ที่ถูกผสานครั้งแรก สามารถละการใส่ property ได้ดังนี้ `[{r1:3, c1:2, rc:2, cc:3}]`

---

### 4. Footer
---
#### Configuration
จากโครงสร้าง object ของ `var footer` ดังต่อไปนี้
```javascript
var footer = {
    rPPOptions: [10,15,20,25,30,35,40,45,50],
    style: {   
       padding: '7px 7px 7px 0',
       font_size: '18px',
       font_weight: 'normal',
       font_color: 'black',
       background_color: '#dae6f0',
    },
    additional_style: {
       buttonHoverBorder_color: '#83abcd',
       separator_color: '#83abcd',
       insertPageBoxBorder_color: '#83abcd',
       selectPageBoxBorder_color: '#83abcd',\
    }
}
```
โดย `properties` ของ  `var footer` มีความหมายดังต่อไปนี้
- `rPPOptions:` อาเรย์ 1 มิติที่ใช้สำหรับเก็บเลขจำนวนเต็มบวก (positive integer) สำหรับการแบ่งหน้า 
- `style`
   - `padding:`$~~~~~~~~~~~~~~~~~~~~$กำหนด padding ให้กับ footer
   - `font_size:`$~~~~~~~~~~~~~~~~$กำหนดขนาดของตัวอักษรใน footer (ตัวอักษรทั้งหมดที่อยู่ใน footer)
   - `font_weight:`$~~~~~~~~~~~~$กำหนดความหนาของตัวอักษรใน footer
   - `font_color:`$~~~~~~~~~~~~~~$กำหนดสีของตัวอักษรใน footer
   - `background_color`$~~~~~$กำหนดสีพื้นหลังให้กับ footer
- `additional_style:`
   - `buttonHoverBorder_color:`$~~~~~~~~$กำหนดสีให้กับกรอบของปุ่มเลื่อนหน้า (ย้อนหลัง/ไปข้างหน้า) เมื่อมีการ hover
   - `separator_color:`$~~~~~~~~~~~~~~~~~~~~~~~$กำหนดสีให้กับเส้นคั่น element ระหว่างตัวแบ่งหน้า/ปุ่มกดเปลี่ยนหน้า/ตัวอักษร
   - `insertPageBoxBorder_color:`$~~~~$กำหนดสีเส้นขอบให้กับกล่องที่ใช้ในการกรอกเลขหน้าที่ต้องการ 
   - `selectPageBoxBorder_color:`$~~~~$กำหนดสีเส้นขอบให้กับกล่องที่ใช้ในการเลือกเลขหน้าในการแบ่ง
---

### 5. Scrollbar
---
#### Configuration
จากโครงสร้าง object ของ `var scrollbar` ดังต่อไปนี้
```javascript
var scrollbar = {  
    verticalScrollBar_style: {
        background_color: '#dae6f0',
        border_color: '#83abcd'
    },
    horizontalScrollBar_style: {
        background_color: '#dae6f0',
        border_color: '#83abcd'
    },
    uiTriangleButton_style: {
        background_color: '#dae6f0',
        border_color: '#83abcd'
    }
}
```
โดย `properties` ของ  `var scrollbar` มีความหมายดังต่อไปนี้
- `elementBehindScrollBar`$~~~~~~~~$กำหนดคุณลักษณะให้กับ element ที่อยู่ใต้แถบเลื่อน
  - `background_color:`$~~~~~~~~~$กำหนดสีพื้นหลังให้กับ element ที่อยู่ใต้แถบเลื่อน
- `verticalScrollBar_style`$~~~~~~$กำหนดรูปแบบของแถบเลื่อนที่อยู่ในแนวตั้ง (Vertical scrollbar) 
  - `background_color:`$~~~~~~~~~$กำหนดสีพื้นหลังให้กับแถบเลื่อนแนวตั้ง
  - `border_color:`$~~~~~~~~~~~~~~~~$กำหนดสีกรอบให้กับแถบเลื่อนแนวตั้ง
- `horizontalScrollBar_style`$~$กำหนดรูปแบบของแถบเลื่อนที่อยู่ในแนวนอน (Horizontal scrollbar)
  - `background_color:`$~~~~~~~~$กำหนดสีพื้นหลังให้กับแถบเลื่อนแนวนอน
  - `border_color:`$~~~~~~~~~~~~~~~$กำหนดสีกรอบให้กับแถบเลื่อนแนวนอน
- `uiTriangleButton_style`$~~~~~~~$กำหนดรูปแบบของปุ่ม (สามเหลี่ยม) ที่ใช้ในการเลื่อนที่่ติดกับแถบเลื่อน (uITriangle button)
  - `background_color:`$~~~~~~~~$กำหนดสีพื้นหลังให้กับปุ่มสามเหลี่ยม
  - `border_color:`$~~~~~~~~~~~~~~~$กำหนดสีกรอบให้กับปุ่มสามเหลี่ยม

---
## Recommendation
- การผสานเซลล์ของหัวข้อสำหรับโปรเจคนี้จะรองรับเฉพาะในกรณีที่เซลล์ที่ถูกผสานอยู่ในรูปของ Hierarchy ตัวอย่างเช่น
  ```javascript
    var data = [
    ["Employee information", "Employee information", "Employee information", "Section", "Role", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill"],
    ["Employee information", "Employee information", "Employee information", "Section", "Role", "Frontend framework", "Frontend framework", "Frontend framework", "Frontend framework", "Backend framework", 
     "Backend framework", "Backend framework", "Backend framework"],
    ["Id", "First name", "Last name", "Section", "Role", "React", "Angular", "Vue", "Svelte", "Express.js", "Laravel", "Springboot", "Django"]];
  ```
  สามารถเขียนในรูปของ Hierarchy ได้ดังนี้
  - Column 1: Employee information มี rowspan = 2 และ colspan = 3 โดยมีคอลัมน์ย่อย 3 คอลัมน์ซึ่งเท่ากับจำนวนของ colspan  
      - Subcolumn 1: Id
      - Subcolumn 2: First name
      - Subcolumn 3: Last name
  - Column 2: Section 
  - Column 3: Role
  - Column 4: Skill มี colspan = 8 โดยมีคอลัมน์ย่อย 2 คอลัมน์ (แต่ละคอลัมน์ย่อยมีจำนวนเท่ากับจำนวนของ colspan/2 = 4)และในแต่ละคอลัมน์ถูกแบ่งออกเป็น 4 คอลัมน์ย่อยอีก
     - Subcolumn 1: Frontend developer
       - Subsubcolumn 1 : React
       - Subsubcolumn 2 : Angular
       - Subsubcolumn 3 : Vue
       - Subsubcolumn 4 : Svelte
     - Subcolumn 2: Backend developer
       - Subsubcolumn 1 : Express.js
       - Subsubcolumn 2 : Laravel
       - Subsubcolumn 3 : Springboot
       - Subsubcolumn 4 : Django
  
 
- เมื่อมีการใช้ Table mode ในรูปแบบ **Pagination with scrollbar** สำหรับการกำหนดความสูง ควรมีการกำหนดความสูงของ element เนื้อหากับ padding ของเซลล์ให้เหมาะสมกัน
- สำหรับการกำหนดความสูงของ header ควรมีการกำหนดความสูงของ element กับ padding ให้เหมาะสมกัน (ในกรณีที่มีการขยายหน้าจอเข้าอาจทำให้ความสูงของ header ถูกปิด)
