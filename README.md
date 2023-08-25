# Auto-merged modified table with jQuery and Paramquery Grid

![Screenshot-2023-08-24-201300a7e9ba2e12ff0e76.png](https://cdn.pic.in.th/file/picinth/Screenshot-2023-08-24-201300a7e9ba2e12ff0e76.png)


## Requirements
### 1. HTML
สำหรับไฟล์  `index.html` มี libray และ script ที่สำคัญดังต่อไปนี้
* **jQuery**
  * **jQuery.js** (Latest version 3.7)
   
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.js"></script>
    ```
  
  * **jQuery-ui.css**
  
    ```html
    <link href="https://unpkg.com/jquery-ui-pack@1.12.2/jquery-ui.css" rel="stylesheet"/>
    ```
  
  * **jQuery-ui.js**
    ```html
    <script src="https://unpkg.com/jquery-ui-pack@1.12.2/jquery-ui.js"></script>
    ```
  
* **Paramquery Grid**
  * **pq-grid.min.css**
   
    ```html
    <link href="https://unpkg.com/pqgrid@8.2.1/pqgrid.min.css" rel="stylesheet"/>
    ```
  
  * **pq-grid.ui.min.css**
  
    ```html
    <link href="https://unpkg.com/pqgrid@8.2.1/pqgrid.ui.min.css"rel="stylesheet"/>
    ```
  
  * **pq-grid.min.js**
    ```html
    <script src="https://unpkg.com/pqgrid@8.2.1/pqgrid.min.js"></script>
    ```



### 2. CSS
ไฟล์ `style.css` เป็นไฟล์ที่ใช้กำหนดรูปแบบตารางเบื้องต้นของหน้าเว็บไซต์ในโปรเจคนี้



### 3. Javascript

สำหรับตระกูลไฟล์ที่เกี่ยวกับ `javascript`แบ่งออกเป็น 3 ไฟล์ที่มีหน้าที่แตกต่างกันดังต่อไปนี้
* `import.js` เป็นไฟล์ที่ใช้กำหนด `path` ของไฟล์ข้อมูลรูปแบบ `.csv`
* `configs.js` เป็นไฟล์ที่ใช้ในการกำหนดรูปแบบของตารางอย่างละเอียดได้ดังต่อไปนี้
   * รูปแบบภาพรวมของตาราง
   * หัวข้อ (Heading)
   * เนื้อหา (Content)
* `script.js` เป็นไฟล์ที่รวมฟังก์ชันในการผสานเซลล์ กำหนดรูปแบบของตาราง และสร้างตารางไว้เข้าด้วยกัน




### 4. CSV
สำหรับในโปรเจคนี้ได้ใช้ข้อมูล `software_department.csv` ที่ใช้ในการแสดงข้อมูลบนตาราง  (สามารถใช้ข้อมูลแทนได้)




## Instruction
สำหรับวิธีการใช้ `Auto-merged modified table` ที่ใช้ร่วมกับ `jQuery` และ `Paramquery Grid` สามารถทำได้ตามขั้นตอนดังต่อไปนี้

1. นำ library script ข้างต้นทั้งหมด ไฟล์ `style.css` และ `script.js` เข้ามาภายในส่วนของ `head` สำหรับไฟล์ `index.html` 

   ```html
   <head>
        <!--------------------------- jQuery ------------------------------------------------>
        <link href="https://unpkg.com/jquery-ui-pack@1.12.2/jquery-ui.css" rel="stylesheet"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.js"></script>
        <script src="https://unpkg.com/jquery-ui-pack@1.12.2/jquery-ui.js"></script>
    
        <!--------------------------- Paramquery grid -------------------------------->
        <link href="https://unpkg.com/pqgrid@8.2.1/pqgrid.min.css" rel="stylesheet"/>
        <link href="https://unpkg.com/pqgrid@8.2.1/pqgrid.ui.min.css"rel="stylesheet"/>
        <script src="https://unpkg.com/pqgrid@8.2.1/pqgrid.min.js"></script>
    
        <link rel="stylesheet" href="css\style.css">
        
        <script src="js\script.js" type="module"></script>
   </head>
   ```

2. สร้าง `div` ที่กำหนดโดยรูปแบบดังต่อไปนี้ภายในไฟล์ `index.html` ในส่วนของ `body`

   ```html
   <body>
        <div class="table">
                <div id="automerged-modified-table"></div> // element ของ table (อันนี้สำคัญ)
                <div id="background"></div>
        </div>
   </body>
   ```
   
3. กำหนด path ของไฟล์ข้อมูล `.csv` ภายในไฟล์ `import.js` ในที่นี้ใช้   `software_department.csv`
   ```Javascript
   const csvFileURL = 'https://raw.githubusercontent.com/xstylizt/automerged-modified-table/main/data/software_department.csv'; // './data/software_department.csv'
   export default csvFileURL;
   ```

## How to define and style table
สำหรับวิธีการกำหนดรูปแบบของตารางสามารถทำผ่านไฟล์ `configs.js` ซึ่งแยกออกเป็น 3 ส่วนดังต่อไปนี้
1. ภาพรวมของตารางสามารถกำหนดค่าต่าง ๆ ผ่าน `object` ในตัวแปรที่ชื่อ `const Table` ซึ่งมี `properties` ที่กำหนดได้ดังต่อไปนี้
   
   ```Javascript
    const Table = {
          cell_height: 5,
          border_color: '#51abcb',
          border_size: "2.5px",
          scrollBar: true
    }
   ```

   * `cell_height:` ความสูงของเซลล์ในแต่ละช่อง 
     * มีค่าตั้งแต่ `1` เป็นต้นไป
   * `border_color:` สีเส้นขอบของตารางทั้งหมด
   * `border_size:` ความหนาของเส้นขอบตาราง 
   * `scrollBar:` กำหนดให้ตารางมี scroll bar (ใช้เมื่อข้อมูลเริ่มมีหลายแถว) 
     * ถ้ามีค่าเป็น `true` ให้มีการแสดง scroll bar ของตาราง 
     * ถ้ามีค่าเป็น `false` ยกเลิกการแสดง scroll bar
    
2. หัวข้อของตารางสามารถกำหนดค่าต่าง ๆ ผ่านตัวแปรดังต่อไปนี้
   
   ```Javascript
    const n_row = 3;
    const mergeTypeOfHeading = "specific"; //  --> auto, specific
    const mergeConfigsofHeading = [{r1: 0, c1: 0, rc: 3, cc: 3},  // Employee information
                                   {r1: 0, c1: 3, rc: 3, cc:1},   // Section
                                   {r1: 0, c1: 4, rc: 3, cc: 1},   // Subsection                    
                                   {r1: 0, c1: 5, rc: 1, cc: 9},    // Skill
    
                                   {r1: 1, c1: 5, rc: 1, cc: 4},   // Frontend framework
                                   {r1: 1, c1: 9, rc: 1, cc: 5}    // Backend framework
                                ]  
    
    const heading_style =   {
        font_weight: 'bold',
        font_size: '30px',
        background_type: "all",  // "all" / "specific"
        background_color: "#CEE6F3"
        /*
        [[{name: "Employee information", color: "red"},{name: "Section", color:"green"},{name: "Section", color:"green"},{name: "Section", color:"green"}],
        [{name: "Employee information", color: "red"},{name: "Section", color:"green"}],
        [{name: "Employee information", color: "red"},{name: "Section", color:"green"},{name: "Section", color:"green"},{name: "Section", color:"green"},{name: "Section", color:"green"},{name: "Section", color:"green"},{name: "Section", color:"green"},{name: "Section", color:"green"}],
       ]
       
       
       
       
       .map((subarray, index) => subarray.map((item, subIndex) => ({ ...item, index: subIndex }))) */
        
    }
   ```

   * `n_row:` จำนวนแถวที่ต้องการสร้างหัวข้อ
     * เช่น `n_row: 2` คือ การสร้างหัวข้อของตารางจากแถวที่ 1 และ 2
   * `mergedTypeOfHeading:` ประเภทของการผสานเซลล์สำหรับหัวข้อ
     * `'not auto'` คือ ไม่มีการผสานเซลล์แบบอัติโนมัติสำหรับหัวข้อ
     * `'auto'` คือ ให้มีการผสานเซลล์แบบอัติโนมัติสำหรับหัวข้อ
     * `'specific'` คือ กำหนดผสานเซลล์สำหรับหัวข้อด้วยตัวเอง
   * `mergedConfigsOfHeading:` รูปแบบของการผสานเซลล์สำหรับหัวข้อ
     * ถ้า `mergedTypeOfHeading: 'not auto'` และ `mergedTypeOfHeading: 'auto'` แล้ว `mergedConfigsOfHeading: []` (ใส่เป็น [])
     * ถ้า `mergedTypeOfHeading: 'specific` แล้ว `mergedConfigsOfHeading: [{...},{...},{...}]`สามารถใส่ได้ในรูปแบบดังต่อไปนี้ เช่น
       
        ```Javascript
         mergedConfigsOfHeading:  [{r1: 0, c1: 0, rc: 3, cc: 3},  // Employee information
                                   {r1: 0, c1: 3, rc: 3, cc:1}]   
        ```
        
        หมายความว่าแถวที่ 1 (r1:0) คอลัมน์ที่ 1  (c1:0) ให้มีการ merge ตามคอลัมน์ไปอีก 2 แถว (rc: 2+1) และให้มีการ merge ตามแถวไปอีก 2 คอลัมน์
                  แถวที่ 1 (r1:0) คอมลัมน์ที่ 4 (c1:3) ให้มีการ merge ตามคอลัมน์ไปอีก 2 แถว (rc: 2+1) และไม่มีการ merge ตามแถว (cc:1)
        
   * `heading_style:` ตกแต่งและกำหนดสไตล์สำหรับหัวข้อ
     * `font_weight:` ความหนาของตัวหนังสือของหัวข้อ 
     * `font_size:`   ขนาดของตัวหนังสือของหัวข้อ
     * `background_type:` รูปแบบของสีในการตกแต่งหัวข้อ
       * `'all'` คือ ให้ใช้สีเหมือนกันทั้งหมดทุกเซลล์ของหัวข้อ
       * `'specific'` คือ กำหนดสีของแต่ละ field ด้วยตัวเองของหัวข้อ
     * `background_color:` สีในการตกแต่งหัวข้อ
       * ถ้า `background_type: 'all'` แล้ว `background_color: ' hex code color หรือ เขียนชื่อสีภาษาอังกฤษ'`
       * ถ้า `background_type: 'specific` แล้ว `background_color: [[{...}],[{...}],[{...}]]` สามารถใส่ได้ในรูปแบบดังต่อไปนี้ เช่น

         ```Javascript
         background_type:  [
                               [{name: 'Employee information', color: ''}, {name: 'Section', color: ''}, {name: 'Role', color: ''}, {name: 'Skill', color: ''}], // แถวที่ 1
                               [{name: 'Frontend framework', color: ''}, {name: 'Backend framework', color: ''}], // แถวที่ 2
                               [{name: 'React', color: ''}, {name: 'Angular', color: ''}, {name: 'Vue', color: ''}, {name: 'Svelte', color: ''}, {name: 'Express.js', color: ''}, {name: 'Larevel', color: ''}, {name: 'Springboot', color: ''}, {name: 'Django', color: ''} /*แถวที่ 3*/]
                           ].map((subarray, index) => subarray.map((item, subIndex) => ({ ...item, index: subIndex })))   
         ```
         โดยที่ `name:` ชื่อ field
               `color:` สีของ field

3. ภาพรวมของตารางสามารถกำหนดค่าผ่าน `object` ในตัวแปรที่ชื่อ `const Table` ซึ่งมี `properties` ที่กำหนดได้ดังต่อไปนี้
   
   ```Javascript
    const mergeTypeOfContent = "auto"; 
    const mergeSubTypeOfContent = 'specific_col';  // auto --> all กับ col กับ specific_col
    const mergeConfigsOfContent = [3]; 
    
    const content_style = {
        font_size: '25px',
        row_even_color: "#D8F2FF",
        row_odd_color: "white",
        merged_cell_color_type: "col", 
        merged_cell_color:  "#F1F0E8"
    }
   ```

   * `mergedTypeOfContent:` ประเภทการผสานเซลล์ของเนื้อหา
     * `'not auto'` คือ ไม่มีการผสานเซลล์เนื้อหาแบบอัติโนมัติ
     * `'auto'` คือ มีการผสานเซลล์ของเนื้อหาแบบอัติโนมัติ
   * `meregedSubTypeOfContent:` ประเภทย่อยของการผสานเซลล์เนื้อหา
     * ถ้า `meregedSubTypeOfContent: 'not auto'` แล้ว `meregedSubTypeOfContent: ''` (ใส่เป็น empty string '')
     * ถ้า `meregedSubTypeOfContent: 'auto'` และ `meregedSubTypeOfContent: 'all'` คือ ให้มีการผสานเซลล์ของเนื้อหาแบบอัติโนมัติ**ทั้งหมด** (ค่าเหมือนกันจะถูกผสานทั้งหมดตามแถวและตามคอลัมน์)
     * ถ้า `meregedSubTypeOfContent: 'auto'` และ `meregedSubTypeOfContent: 'col'` คือ ให้มีการผสานเซลล์ของเนื้อเฉพาะตาม**คอลัมน์** ทั้งหมด
     * ถ้า `meregedSubTypeOfContent: 'auto'` และ `meregedSubTypeOfContent: 'specific_col'` คือ ให้มีการผสานเซลล์ของเนื้อเฉพาะตาม**คอลัมน์** โดยระบุเจาะจงคอลัมน์ด้วย index
   * `mergeConfigsOfContent:` รูปแบบของการผสานเซลล์สำหรับเนื้อหา
     * ถ้า `meregedSubTypeOfContent: 'not auto'` แล้ว `mergeConfigsOfContent: []` (ใส่เป็น [])
     * ถ้า `meregedSubTypeOfContent: 'auto'` และ `meregedSubTypeOfContent: 'all'` แล้ว `mergeConfigsOfContent: []` (ใส่เป็น [])
     * ถ้า `meregedSubTypeOfContent: 'auto'` และ `meregedSubTypeOfContent: 'col' แล้ว `mergeConfigsOfContent: []` (ใส่เป็น index ของแต่ละคอลัมน์ที่ต้องการให้ผสานเซลล์ของเนื้อหาแบบอัติโนมัติ) เช่น
     * ถ้า `meregedSubTypeOfContent: 'auto'` และ `meregedSubTypeOfContent: 'specific_col' แล้ว `mergeConfigsOfContent: []` (ใส่เป็น index ของแต่ละคอลัมน์ที่ต้องการให้ผสานเซลล์ของเนื้อหาแบบอัติโนมัติ) เช่น
       * ถ้าต้องการให้มีการผสานเซลล์อัติโนมัติตาม column เฉพาะแถวที่ 1,2,4 จะได้ว่า  `mergeConfigsOfContent: [0,1,3]`
   * `content_style:`   
     * `font_size:` ขนาดของตัวอักษรเนื้อหา
     * `row_even_color:` สีในแถวที่**คู่** ของเนื้อหา
     * `row_odd_color:` สีในแถวที่**คี่** ของเนื้อหา
     * `merged_cell_color_type:` รูปแบบของสีของเซลล์ที่ถูกผสาน
       * `'default'` รูปแบบของสีของเซลล์ที่ถูกผสานจะเหมือนกับแถวคู่/คี่
       * `'col'`      กำหนดสีของเซลล์ที่ถูกผสานตามลอลัมน์
     * `merged_cell_color:` สีของเซลล์ที่ถูกผสาน
       * ถ้า  `merged_cell_color_type: 'default'` แล้ว `merged_cell_color: ''` (ใส่เป็น empty string '')
       * ถ้า  `merged_cell_color_type: col` แล้ว `merged_cell_color: [{...},{...}]` ได้ตามดังต่อไปนี้
         
         ```Javascript
         merged_cell_color: [{c1: 0, color: "red"},{c1: 1, color: "blue"}]
         ```
         
         หมายความว่า คอลัมน์ที่ 1 (c1:0) ถ้ามีเซลล์ไหนที่ถูกผสานจะมีสีแดง และ คอลัมน์ที่ 2 (c1:1) จะมีสีน้ำเงินตามลำดับ
