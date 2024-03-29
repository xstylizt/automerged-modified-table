<h1 align="center">Auto-meregd modified table built with Paramquery Grid</h1>
<div align="center"></div>
<h3 align="center"><a href="https://xstylizt.github.io/automerged-modified-table/" target="_blank">Visit the live table</a> | <a href="https://github.com/xstylizt/automerged-modified-table/blob/main/css/style.css" target="_blank">Visit the style file</a> | <a href="https://github.com/xstylizt/automerged-modified-table/blob/main/js/script.js" target="_blank">Visit main script file</a>  </div></h3>
<p align="center" >
  <img src="https://github.com/xstylizt/automerged-modified-table/assets/137098392/772c9d68-fb1c-48ea-9f55-e3c9b43810d0"/>
</p>
<p align="center" >
  <img src="https://github.com/xstylizt/automerged-modified-table/assets/137098392/ef3b1c18-1368-46a9-bf54-c24f32c9eb82"/>
</p>

## Table of contents
- <a href="#feature">Feature</a>
- <a href="#setting-up-for-project-">Setting up for project</a>
- <a href="#configuration-%EF%B8%8F">Configuration</a>
  - <a href="#1-input-ที่นำเข้ามาสำหรับการแสดงผลบนตาราง">Input ที่นำเข้ามาสำหรับการแสดงผลบนตาราง</a>
  - <a href="#2-input-ที่นำเข้ามาสำหรับการฝังลิงค์ใน-column-link-embed">Input ที่นำเข้ามาสำหรับการแสดงผลบนตาราง</a>
  - <a href="#3-แถบบนของหัวข้อตาราง-ตัวส่งออกข้อมูลตัวเลือกแสดงแถวต่อตารางแถบค้นหา">แถบบนของหัวข้อตาราง (ตัวส่งออกข้อมูล/ตัวเลือกแสดงแถวต่อตาราง/แถบค้นหา)</a>
  - <a href="#4-ภาพรวมของตาราง-overall-table">ภาพรวมของตาราง (Overall table)</a>
  - <a href="#5-หัวข้อตาราง-heading-of-table">หัวข้อตาราง (Heading of table)</a>
  - <a href="#6-เนื้อหาของตาราง-content">เนื้อหาของตาราง (Content)</a>
  - <a href="#7-ส่วนท้ายของตาราง-footer--แถบเลื่อนหน้า-pagination-bar">ส่วนท้ายของตาราง (Footer) / แถบเลื่อนหน้า (Pagination bar)</a>
  - <a href="#8-แถบเลื่อนตาราง-scroll-bar">แถบเลื่อนตาราง (Scroll bar)</a>
  

## Feature
- ค้นหาข้อมูลภายในตารางโดยสามารถเลือกคอลัมน์ (Column) พร้อมกับงื่อนไข (Condition) ในการค้นหาได้
- มีตัวเลือกสำหรับการแสดงผลกี่แถวของตาราง
- สามารถนำข้อมูล (export) เป็นไฟล์ต่าง ๆ ได้เช่น CSV, XLSX (Excel files), HTML และรูปแบบ JSON
- สามารถ config เกี่ยวกับการผสานเซลล์ (merge cells) ได้ทั้งหัวตาราง (heading) และเนื้อหา (content) อาทิเช่นการ config ให้เซลล์มีการผสานอัติโนมัติ (auto) หรือกำหนดเอง (specific)
- สามารถเลือกรูปแบบของตารางได้ (แบบมี/ไม่มี pagiantion)
- เมื่อตารางมีข้อมูลจำนวนมามีช่องให้กรอกตัวเลขเพื่อไปยังหน้าที่ต้องการได้ (กรณีไม่ต้องการกดปุ่ม prev/next)
- สามารถกำหนดลิงค์ให้กับคอลัมน์ได้ (Embed Link)
- สามารถกำหนดรูปแบบของตารางด้วยตัวเองได้ด้วย class ผ่าน config (ซึ่งจะกล่าววิธีใช้ในหัวข้อ <a href="#configuration-%EF%B8%8F">Configuration</a>)

## Setting up for project 🛠
- สำหรับไฟล์ `index.html` ในส่วนของ tag `<head>` จะต้องมีไฟล์ css ที่เกี่ยวข้องและไฟล์ script ต่าง ๆ ดังต่อไปนี้
   
   - ในส่วนของ tag `<head>` จะประกอบ path ไฟล์ดังนี้
      
       ```HTML
       <head>
            <!--------------------------------- JS ------------------------------------------------------->
           <script src="js/library/jquery.js"></script>
           <script src="js/library/jquery-ui.js"></script>
           <script src="js/library/pqgrid.min.js"></script>
           <script src="js/jszip/jszip.js"></script>
           <script src="js/file-saver/FileSaver.js"></script>
           <script src="js/script.js" type="module"> </script>
                
                    <!-------------------------------- CSS ------------------------------------------------------->
           <link rel="stylesheet" href="css/jquery-ui.css"/>
           <link rel="stylesheet" href="css/pqgrid.min.css"/>
           <link rel="stylesheet" href="css/pqgrid.ui.min.css"/>
           <link rel="stylesheet" type="text/css" href="css/style.css">
       </head>
       ```
          
   - ในส่วนของ tag `<body>` จะเป็นการสร้าง `div` สำหรับเรียกใช้ตารางโดยในที่นี้เรากำหนด id ให้กับ div ชื่อ `automerged-modified-table` ซึงจะถูกเรียกใช้ผ่านไฟล์ `script.js` ผ่าน id ดังกล่าว
      
       ```HTML
       <body>
            <div id="automerged-modified-table"></div>
       </body>
       ```
- สำหรับไฟล์ `style.css` เป็นไฟลที่ใช้กำหนด style ให้กับ class ที่ถูกกำหนดขึ้นมาจาก config ซึ่งมาจากไฟล์ `script.js`
## Configuration ⚙️

สำหรับ configuration ของตารางสามารถแบ่งออกเป็น **8 ส่วนหลัก ๆ** ดังต่อไปนี้ที่สามารถทำได้

### 1. Input ที่นำเข้ามาสำหรับการแสดงผลบนตาราง
   
   ```JS
    var data = [

    ['Employee information','Employee information','Employee information','Section','Role','Skill','Skill','Skill','Skill','Skill','Skill','Skill','Skill'],
    ['Employee information','Employee information','Employee information', 'Section', 'Role','Frontend framework','Frontend framework','Frontend framework','Frontend framework','Backend framework','Backend     framework','Backend framework','Backend framework'],
    ['Id','First name', 'Last name', 'Section', 'Role', 'React', 'Angular', 'Vue', 'Svelte', 'Express.js', 'Laravel', 'Springboot', 'Django'],
    
    [1, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
    [2, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
    [3, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
    [4, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
    [5, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
    [6, "Yusuf", "Rahman", "Software developer", "Full Stack developer", "", "✔", "", "", "✔", "", "", ""],
    [7, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
    [8, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
    [9, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
    [10, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"],

   ]
   ```
<h4>Properties of config</h4>

- สำหรับ input ที่นำเข้ามาสำหรับการแสดงผลบนตาราง ในที่นี้รองรับเฉพาะ**ข้อมูลที่มีโครงสร้างแบบอาร์เรย์ 2 มิติ (Array of Array)**

<hr>

### 2. Input ที่นำเข้ามาสำหรับการฝังลิงค์ใน column (Link embed)
   
   ```JS
    var dataForCreateLink = {
      source: [
          [
            ["Sakura", "https://sakura.com"],["Ravi", "https://ravi.com"],["Ji-eun", "https://jieun.com"],["Chen", "https://chen.com"],["Nisha","https://nisha.com"],
            ["Yusuf", "https://yusuf.com"],["Mei", "https://mei.com"],["Hiroshi", "https://hiroshi.com"],["Ananya", "https://ananya.com"],["Raj", "https://raj.com"],
            ["Sakura", "https://sakura.com"],["Ravi", "https://ravi.com"],["Ji-eun", "https://jieun.com"],["Chen", "https://chen.com"],["Nisha","https://nisha.com"],
            ["Yusuf", "https://yusuf.com"],["Mei", "https://mei.com"],["Hiroshi", "https://hiroshi.com"],["Ananya", "https://ananya.com"],["Raj", "https://raj.com"],
          ],
          [
              ["Tanakaa","https://www.tanaka.com"],["Patel", "https://www.patel.com"],["Kim","https://www.kim.com"]
          ]
      ],
      columnIndexArray: [1,2],
      class_name: 'link-text',
      style: {}
   }
   ```
<h4>Properties of config</h4>

- `source:` เป็นอาร์เรย์ 2 มิติที่เก็บข้อมูลที่เก็บข้อมูลในแต่ละคอลัมน์ (ในแต่ละอาเรย์จะเก็บข้อมูลเคอลัมน์ที่ต้องการจะสร้าง link คู่กับ link)
- `columnIndexArray:` เป็นอาร์เรย์ที่เก็บเลขจำนวนเต็ม ซึ่งหมายถึงต้องการทำบนคอลัมน์ไหน (ใส่เป็น index จำนวนเต็ม) อาทิเช่น ในกรณี้ `[1,2]` หมายความว่าให้มีการทำบนคอลัมน์ 2 และ 3
-  `class_name:` กำหนดชื่อให้กับ class ของ link สำหรับการทำ style
-  `style:` กำหนดรูปแบบ style ให้กับ `class_name` ที่กำหนด (ในรูปแบบของ object)
<hr>

### 3. แถบบนของหัวข้อตาราง (ตัวส่งออกข้อมูล/ตัวเลือกแสดงแถวต่อตาราง/แถบค้นหา)
   
   ```JS
    var toolbar = {
        export_format: [{ xlsx: 'Excel', csv: 'CSV', htm: 'HTML', json: 'JSON'}],
        export_icon_path: 'assets/svg/export-icon.svg',
        search_icon_path: 'assets/svg/search-magnificant-icon.svg',
        rPPOptions: [10,20,30,40,50],
        filter_condition: [
            { "begin": "Begins With" },
            { "contain": "Contains" },
            { "end": "Ends With" },
            { "notcontain": "Does not contain" },
            { "equal": "Equal To" },
            { "notequal": "Not Equal To" },
            { "empty": "Empty" },
            { "notempty": "Not Empty" },
        ],
        component: {
            container: {
                class_name: 'toolbar-search-component',
                style: {}
            },
            
            exportFilesBar: {
                parent: {
                    class_name: 'export-files-main-component',
                    style: {}
                },
                child: {
                    format: {
                        class_name: 'format-main-component',
                        style: {}
                    },
                    formatLabel: {
                        class_name: 'format-label-component',
                        style: {}
                    },
                    exportFormat: {
                        class_name: 'export-format-main-component',
                        style: {},
                        child: {
                            exportFormatButton: {
                                class_name: 'export-format-button',
                                style: {}
                            },
                            exportFormatButtonIcon: {
                                class_name: 'export-format-button-icon',
                                style: {}
                            }
                        }
                    },
                }
            },
            pageSelectOption: {
                parent: {
                    class_name: 'page-options-main-component',
                    style: {}
                },
                child: {
                    pageSelect: {
                        class_name: 'page-options',
                        style: {}
                    },
                    showSingleText: {
                        class_name: 'show-single-text',
                        style: {}
                    }
                }
            },
            filterSearch: {
                parent: {
                    class_name: 'filter-main-component',
                    style: {}
                },
                child: {
                    searchBar: {
                        class_name: 'input-search-box',
                        style: {},
                        child: {
                            inputSearchBar: {
                                class_name: 'filter-value',
                                style: {}
                            },
                            searchBarIcon: {
                                class_name: 'search-box-icon',
                                style: {}
                            }
                        }
                    },
                    filterColumn: {
                        class_name: 'filter-column',
                        style: {}
                    },
                    filterCondition: {
                        class_name: 'filter-condition',
                        style: {}
                    }
                }
            }
        },
    }
   ```
<h4>Properties of config</h4>

- `export_format:` เป็นอาเรย์ที่เก็บ object สำหรับเพื่อสร้างตัวเลือกของรูปแบบประเภทในการ export ข้อมูลออก (CSV, XLSX, JSON และ HTML)
- `export_icon_path:` เป็น path file สำหรับเก็บรูปภาพไอคอน export 
- `search_icon_path:` เป็น path file สำหรับเก็บรูปภาพแว่นขยาย (Magnificent)
- `rPPOptions:` เป็นอาเรย์ที่เก็บจำนวนเต็มเพื่อสร้างตัวเลือกในการสร้างรูปแบบของจำนวนแถวที่แสดงต่อหน้า (row per page)
- `filter_condition:` เป็นอาเรย์ที่เก็บ object สำหรับเพื่อสร้างตัวเลือกเงื่อนไขในการคัดกรองข้อมูลของตาราง (Filter column)
- `component:` เป็น object ที่ไว้สำหรับกำหนดชื่อ class และรูปแบบ (style) ของข้อมูลแต่ละจุดในแถบบนของตาราง
<hr>

### 4. ภาพรวมของตาราง (Overall table)
   
   ```JS
   var overall_table = {
        isPaging: true
        class_name: 'overall-table-container',
        style: {},
    }
   ```
<h4>Properties of config</h4>

- `isPaging:` เป็นค่า boolearn สำหรับการ flag เพื่อเลือกว่าต้องการแสดงตารางรูปแบบใด (แบบมี pagination/ไม่มี pagiantion (static table))
-  `class_name:` กำหนดชื่อให้กับ class ของ link สำหรับการทำ style
-  `style:` กำหนดรูปแบบ style ให้กับ `class_name` ที่กำหนด (ในรูปแบบของ object)
    ( style ในที่นี้หมายถึงเป็น container ที่รวมหัวข้อตาราง (heading of table) และ ส่วนเนื้อหา (content) เข้าด้วยกัน )
<hr>


### 5. หัวข้อตาราง (Heading of table)
   
   ```JS
   var header = {
          n_row: 3,
          mergedCells: {
              type: 'auto' ,    
              configs: []  
          },
          component:{
              container: {
                  class_name: 'header-container',
                  style: {}
              },
              parentCell: {
                  class_name: 'header-table-col',
                  style: {}
              },
              childCell: {
                  class_name: 'header-table-cell',
                  style: {}
              },
          },
      }
   ```
<h4>Properties of config</h4>

- `n_row:`  เป็นตัวเลขที่ใช้เก็บว่าต้องการใช้กี่แถวในการสร้างหัวข้อตาราง (ในที่นี้ใช้ 3 แถวแรกเลยมี `n_row = 3`)
- `mergedCelss:` เป็น object เก็บรูปแบบการผสานเซลล์ของหัวข้อตาราง
   - `type:` มี 2 รูปแบบคือ
     - `type: 'default'` เลือกไม่ให้มีการผสานเซลล์ของหัวตาราง
     - `type: 'auto'`    เลือกให้มีการผสานเซลล์ของหัวตารางแบบอัติโนมัติ
   - `configs:` เป้น config สำหรับการ merged (สำหรับ `default` และ `auto` เป็น empty arary `[]`)
-  `component:` เป็น object ที่ไว้สำหรับกำหนดชื่อ class และรูปแบบ (style) ของข้อมูลแต่ละจุดสำหรับหัวข้อตาราง (Heading of Table)
<hr>

### 6. เนื้อหาของตาราง (Content)
   
   ```JS
   var content = {
        numberFreezeRows: 0,
        numberFreezeCols: 0,
        mergedCells: {
            type: 'auto_specific_col',
            configs: [{c1:3, }]
        },
        component: {
            parentCell: {
                oddRow: {
                    class_name: 'content-table-odd-row',
                    style: {}
                },
                evenRow: {
                    class_name: 'content-table-even-row',
                    style: {}
            },
            childCell: {
                    class_name: 'content-table-cell',
                    style: {}
            }
        },
    }
   ```
<h4>Properties of config</h4>

- `numberFreezeRow:`
- `numberFreezeCols:`
- `mergedCelss:` เป็น object เก็บรูปแบบการผสานเซลล์ของเนื้อหา (content)
   - `type:` มี 5 รูปแบบคือ
     - `type: 'default'` คือ เลือกไม่ให้มีการผสานเซลล์ของเนื้อหา
     - `type: 'auto'` คือ เลือกให้มีการผสานเซลล์ของเนื้อหาแบบอัติโนมัติ (ไม่สนว่ามีการผสานข้าม column ไหม)
     - `type: 'auto_col'` คือ เลือกให้มีการผสานเซลล์ของเนื้อหาเฉพาะคอลัมน์แบบอัติโนมัติ (ในแต่ละ column ที่มี cell ค่าเหมือนกันถูกผสานกัน)
     - `type: 'auto_specific_col'` คือ เลือกให้มีการผสานเซลล์ของเนื้อหาเฉพาะคอลัมน์ (config ด้วยตัวเอง)
     - `type: 'specific'` คือ เลือกให้มีการผสานเซลล์ของเนื้อหาแบบเฉพาะจุด (config ด้วยตัวเอง)
   - `configs:` เป็น config สำหรับการ merged 
     - `type: 'default'` กำหนดเป็น empty array `[]`
     - `type: 'auto'` กำหนดเป็น empty array `[]`
     - `type: 'auto_col'` กำหนดเป็น empty array `[]`
     - `type: 'auto_specific_col'` สามารถกำหนดได้ดังต่อไปนี้
        - ตัวอย่างเช่น ถ้าต้องการให้มีการผสานเซลล์เนื้อหาแบบอัติโนมัติบนคอลัมน์ 4 และ 5 กำหนดเป็น `[{c1: 3}, {c1: 4}]`  (สามารถกำหนดได้หลายแถว)
     - `type: 'specific'` สามารถกำหนดได้ดังต่อไปนี้
        - ตัวอย่างเช่น ถ้าต้องการให้มีการผสานเซลล์เนื้อหาโดย เริ่มจากคอลัมน์ที่ 1 `(c1: 0)` ไปถึงคอลัมน์ที่ 3 `[cc:3]` ซึ่งเริ่มต้นจากแถว 2 `(r1: 1)` ไปยังแถว 4 `[rc: 3]` กำหนดเป็น `[{r1:1, c1:0, rc: 3, cc:3}]`
          (`rc: rowspan` และ `cc: colspan`)
- `component:` เป็น object ที่ไว้สำหรับกำหนดชื่อ class และรูปแบบ (style) ของข้อมูลแต่ละจุดสำหรับบนเนื้อหา (Content)
<hr>

### 7. ส่วนท้ายของตาราง (Footer) / แถบเลื่อนหน้า (Pagination bar)
   
   ```JS
   var footer = {
      component: {
          container: {
              class_name: 'footer-container',
              style: {},
          },
          paginationContainer:{
              parent: {
                  class_name: 'pagination-container',
                  style: {},
              },
              child: {
                  previousButton:{
                      class_name: 'previous-btn-container',
                      style: {}
                  },
                  paginationPageBar:{
                      class_name: 'page-number-container',
                      style: {},
                      child: {
                          numberPage: {
                              class_name: 'num-page',
                              style: {}
                          },
                          insertnumberPage:{
                              class_name: 'page-insert-box',
                          }
                      }
                  },
                  nextButton:{
                      class_name: 'next-btn-container',
                      style: {}
                  }
              }
          }
      }
   }
   ```
<h4>Properties of config</h4>

-  `component:` เป็น object ที่ไว้สำหรับกำหนดชื่อ class และรูปแบบ (style) ของข้อมูลแต่ละจุดสำหรับส่วนท้ายของตาราง (Footer) / แถบเลื่อนหน้า (Pagination bar)
<hr>

### 8. แถบเลื่อนตาราง (scroll bar)
   
   ```JS
   var scrollbar = {
      horizontalScrollBar: {
          parent: {
              class_name: 'horizontal-scrollbar-container',
              style: {}
          },
          child: {
              class_name: 'horizontal-scrollbar',
              style: {}
          },
      },
  
      uiTriangleButton: {
          class_name: 'ui-triangle-button',
          style: {}
      },
   }
   ```
<h4>Properties of config</h4>

- `horizontalScrollbar:` คือ กำหนดรูปแบบ class และ style ตัวแถบเลื่อนในแนวแกน y
- `uiTriangleButton:` คือ กำหนดรูปแบบ class และ style ปุ่มสำหรับกดแถบเลื่อนในแนวแกน y (ปุ่มสามเหลี่ยมติดกับแถบเลื่อน)
<hr>

<h3 align="center"><a href="https://xstylizt.github.io/automerged-modified-table/" target="_blank">Visit the live table</a> | <a href="https://github.com/xstylizt/automerged-modified-table/blob/main/css/style.css" target="_blank">Visit the style file</a> | <a href="https://github.com/xstylizt/automerged-modified-table/blob/main/js/script.js" target="_blank">Visit main script file</a>  </div></h3>
