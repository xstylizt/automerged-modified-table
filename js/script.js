// ------------------------------------ Data requirement part -----------------------------------------------

var data = [
    // heading with n_row = 3

    ['Employee information','Employee information','Employee information','Section','Role','Skill','Skill','Skill','Skill','Skill','Skill','Skill','Skill'],
    ['Employee information','Employee information','Employee information', 'Section', 'Role','Frontend framework','Frontend framework','Frontend framework','Frontend framework','Backend framework','Backend framework','Backend framework','Backend framework'],
    ['Id','First name', 'Last name', 'Section', 'Role', 'React', 'Angular', 'Vue', 'Svelte', 'Express.js', 'Laravel', 'Springboot', 'Django'],
    
    // n = 10
    
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

    
    // n = 20
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

    
    // n = 30
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

    // n = 40
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

    // n = 50
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

    // n = 60
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


var dataForCreateLink = {
    source: [
        [
          ["Sakura", "https://sakura.com"],
          ["Ravi", "https://ravi.com"],
          ["Ji-eun", "https://jieun.com"],
          ["Chen", "https://chen.com"],
          ["Nisha","https://nisha.com"],
          ["Yusuf", "https://yusuf.com"],
          ["Mei", "https://mei.com"],
          ["Hiroshi", "https://hiroshi.com"],
          ["Ananya", "https://ananya.com"],
          ["Raj", "https://raj.com"],
          ["Sakura", "https://sakura.com"],
          ["Ravi", "https://ravi.com"],
          ["Ji-eun", "https://jieun.com"],
          ["Chen", "https://chen.com"],
          ["Nisha","https://nisha.com"],
          ["Yusuf", "https://yusuf.com"],
          ["Mei", "https://mei.com"],
          ["Hiroshi", "https://hiroshi.com"],
          ["Ananya", "https://ana   nya.com"],
          ["Raj", "https://raj.com"],
        ],

        [
            ["Tanakaa","https://www.tanaka.com"],
            ["Patel", "https://www.patel.com"],
            ["Kim","https://www.kim.com"]
        ]
    ],
    columnIndexArray: [1,2],
    class_name: 'link-text',
    style: {}
}


// ------------------------------- Configuration part ----------------------------------------------------
// ## Style about overall table
var overall_table = {
    class_name: 'overall-table-container',
    style: {},
    isPaging: true
}

// # Style about header table
var header = {
    n_row: 3,
    mergedCells: {
        type: 'auto' ,    
        configs: []  
    },
    component:{
        container: {
            class_name: 'header-container',
            style: {
                //'background': 'linear-gradient(#fefefe, #dae6f0)'
            }
        },
        parentCell: {
            class_name: 'header-table-col',
            style: {
                //'border': '1.5px solid #afd3f2'
            }
        },
        childCell: {
            class_name: 'header-table-cell',
            style: {
                /*
                'padding': '5px 0px 5px 0px',
                'font-size': '18px',
                'font-weight': 'bold' ,
                'color': 'black'
                */
            }
        },
    },
}


// # Style about content table
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
                style: {
                    //'background': '#e6f4ff'
                }
            },
            evenRow: {
                class_name: 'content-table-even-row',
                style: {
                    //'background': '#ffffff'
                }
            }
        },
        childCell: {
                class_name: 'content-table-cell',
                style: {
                    /*
                    'border': '1.5px solid #afd3f2',
                    'padding': '9px 0px 9px 0px',
                    'font-size': '18px',
                    'font-weight': '400',
                    'color': 'black'
                    */
                }
        }
    },
}


// # Paging bar (footer)
var footer = {
    component: {
        container: {
            class_name: 'footer-container',
            style: {
                    
            },
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
                    style: {
                        
                    }
                }
            }
        }
    }
}


var scrollbar = {
    horizontalScrollBar: {
        parent: {
            class_name: 'horizontal-scrollbar-container',
            style: {
                //'background': '#efefef'
            }
        },
        child: {
            class_name: 'horizontal-scrollbar',
            style: {
                //'background': '#dae6f0',
                //'border-color': '#83abcd'
            }
        },
    },

    uiTriangleButton: {
        class_name: 'ui-triangle-button',
        style: {
            //'background': '#dae6f0'
        }
    },
}



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

// --------------------------------------------------------------------------------------------------------------

$(document).ready(function(){ 

    /* */

    function getObjectDepth(obj) {
        if (!obj || !obj.colModel || obj.colModel.length === 0) {
          return 1;
        }
      
        const depths = obj.colModel.map(getObjectDepth);
        return 1 + Math.max(...depths);
      }
      

      function getObjectsAtDepth(obj, maxDepth, currentDepth = 1) {
        if (currentDepth === maxDepth) {
          return [obj];
        }
      
        if (obj.colModel && Array.isArray(obj.colModel) && obj.colModel.length > 0) {
          return obj.colModel.flatMap((child) =>
            getObjectsAtDepth(child, maxDepth, currentDepth + 1)
          );
        } else {
          return [];
        }
      }

    /* */

    function createColModelStructure(input) {
        return input.map(row => {
            return {
                title: row[0].cellvalue,
                colModel: row.slice(1).length > 0 ? createColModelStructure([row.slice(1)]) : [],
                align: 'center'
            };
        });
    }

    // ##------------------ Create main title --------------------------------------------------------##
    function createColModel(){
        // ------------------------- Create Main Title -------------------------------------
        var raw_data = data
        var headingArrayObject = mergeCellsAutoTable('header');
        var columnLength = raw_data[0].length;
        var titleMain = [];
        var cc = 0;
        var i = 0;


        while(i < columnLength)
        {
            cc += headingArrayObject[i].cc;
            if(cc != columnLength)
            {
                titleMain.push(headingArrayObject[i]);
            }else if(cc === columnLength)
            {
                titleMain.push(headingArrayObject[i]);
                break;
            }
            i++
        }

        
        // ----------------------- Paramquery Main title version -----------------------------

        var paramTitle = [];
        for(var j=0; j < titleMain.length ; j++)
        {
            var titleMainParamStructure = {title: '', colModel: []};
            titleMainParamStructure.title = titleMain[j].cellvalue;
            paramTitle.push(titleMainParamStructure);
        }

        // ------------------------- Group Title and Sub-column of each main title all together ----------------------------
        const subTitleMain = headingArrayObject.filter(obj => !titleMain.includes(obj)).sort((a, b) => a.c1 - b.c1);
        const groupedTitleAndSubTitleArray = [];

        for(var k=0; k < titleMain.length; k++){
            var groupedStructuredArray = [];
            if(titleMain[k].cc == 1)
            {
                groupedStructuredArray.push(titleMain[k]);
                groupedTitleAndSubTitleArray.push(groupedStructuredArray);
            }else{
                groupedStructuredArray.push(titleMain[k])
                for(var l=0; l < subTitleMain.length; l++){
                    if(subTitleMain[l].c1 >= titleMain[k].c1 && subTitleMain[l].c1 <= (titleMain[k].c1 + (titleMain[k].cc -1)))
                    {
                        groupedStructuredArray.push(subTitleMain[l]);
                    }
                }
                groupedTitleAndSubTitleArray.push(groupedStructuredArray);
            }
        }


        var colModel_result = [];
        var colModel_temp = [];
        
        // -------------------------- Create Main ColModel --------------------------------------------------------------------
        if(header.mergedCells.type === 'default' && header.mergedCells.configs.length === 0)
        {
            var atLeastMerged = false;

            if(headingArrayObject.some(obj => obj.rc > 1 || obj.cc > 1)){
                atLeastMerged = true
            }

            if(atLeastMerged === true){
                var sum_cc = 0;
                var i=0;
            

                while(sum_cc < data[0].length){

                    colModel_temp.push(headingArrayObject[i])
                    sum_cc += headingArrayObject[i].cc
                    i++
                }

               
                var output = []
                colModel_temp.forEach(item => {
                    const { cellvalue, r1, c1, rc, cc } = item;
                    
                    for (let i = 0; i < rc; i++) {
                        for (let j = 0; j < cc; j++) {
                            output.push({
                                cellvalue: cellvalue,
                                r1: r1 + i,
                                c1: c1 + j,
                                rc: 1,
                                cc: 1
                            });
                        }
                    }
                });

                var arrayTemp = output.filter(obj => obj.r1 === 0).map(obj => [obj])
                var colModel_temp_2 = headingArrayObject.filter(item2 => !output.some(item1 => item1.cellvalue === item2.cellvalue))

                var output_2 = []
                colModel_temp_2.forEach(item => {
                    const { cellvalue, r1, c1, rc, cc } = item;
                    
                    for (let i = 0; i < rc; i++) {
                        for (let j = 0; j < cc; j++) {
                            output_2.push({
                                cellvalue: cellvalue,
                                r1: r1 + i,
                                c1: c1 + j,
                                rc: 1,
                                cc: 1
                            });
                        }
                    }
                });

                var newColModel_temp_2 = output.filter(obj => obj.r1 > 0).concat(output_2).sort((a, b) => {
                    if (a.r1 !== b.r1) {
                        return a.r1 - b.r1;
                    }
                    return a.c1 - b.c1;
                })


                for(var k = 0 ; k < data[0].length ; k++){
                    for(var l = 0 ; l < newColModel_temp_2.length ; l++){

                        if(arrayTemp[k][0].c1 === newColModel_temp_2[l].c1)
                        {

                            arrayTemp[k].push(newColModel_temp_2[l])

                        }
                        
                        
                    }
                }

                colModel_result = createColModelStructure(arrayTemp)
                

            }
            else if(atLeastMerged === false)
            {
                    for(var i=0; i < data[0].length; i++)
                    {
                        colModel_temp.push([headingArrayObject[i]])
                    }

                    var arrayTemp = headingArrayObject.slice(data[0].length)


                    for(var j=0; j < data[0].length; j++)
                    {
                        for(var k = 0; k < arrayTemp.length ; k++){

                            if(arrayTemp[k].c1 === colModel_temp[j][0].c1){
                                colModel_temp[j].push(arrayTemp[k])
                            }

                        }
                    }

                    colModel_result = createColModelStructure(colModel_temp)
            }

        }else if(header.mergedCells.type === 'auto' && header.mergedCells.configs.length === 0)
        {
                for(var i = 0 ; i < groupedTitleAndSubTitleArray.length ; i++){
                    var titleAndSubTitleArrayTemplate = [];
                    titleAndSubTitleArrayTemplate.push(groupedTitleAndSubTitleArray[i][0])

                    if(groupedTitleAndSubTitleArray[i].length !== 1)
                    {
                        var temp = [];
                        for(var j = 1; j < groupedTitleAndSubTitleArray[i].length ; j++){
                            var temp_2 = [];

                            if(groupedTitleAndSubTitleArray[i][j].cc > 1){
                                var shift = j;
                                temp_2.push(groupedTitleAndSubTitleArray[i][j])
                                for(var l = j+1; l < (j+1) + temp_2[0].cc ; l ++)
                                {
                                    temp_2.push(groupedTitleAndSubTitleArray[i][l])
                                }
                                temp.push(temp_2)
                            }
                            
                            if((groupedTitleAndSubTitleArray[i][j].r1 === groupedTitleAndSubTitleArray[i][0].rc) && groupedTitleAndSubTitleArray[i][j].cc === 1){
                                var a = [];
                                a.push(groupedTitleAndSubTitleArray[i][j])
                                temp.push(a)
                            }
                        }
                        
                        titleAndSubTitleArrayTemplate.push(temp)
                    }
                    

                    colModel_temp.push(titleAndSubTitleArrayTemplate)
                }

            for (var j = 0; j < colModel_temp.length; j++) {
                    var template = {
                        title: colModel_temp[j][0].cellvalue,
                        colModel: [],
                        align: 'center'
                    };

                    if (colModel_temp[j].length > 1) {
                
                        if(colModel_temp[j][1].every(arr => arr.length === 1)){
                            for(const arr of colModel_temp[j][1]){
                                template.colModel.push({title: arr[0].cellvalue, colModel: [], align: 'center'})
                            }
                            
                            colModel_result.push(template)

                        }else if(colModel_temp[j][1].every(arr => arr.length > 1)){
                            var b = 0;
                            for(const arr of colModel_temp[j][1]){
                                template.colModel.push({title: arr[0].cellvalue, colModel: [], align: 'center'})
                    
                                if(header.n_row >= 3)
                                {
                                    for(var k = 1; k < arr.length ; k++)
                                    {
                                        if(arr[k].cc === 1){
                                            template.colModel[b].colModel.push({title: arr[k].cellvalue, colModel: [], align: 'center'})
                                        }else if(arr[k].cc > 1){
                                            /* -------------------------- Case of nested more than 3 subcol */
                                        }
                                    }
                                }

                                b++;
                            }

                            colModel_result.push(template)
                        }

                    } else if (colModel_temp[j].length === 1) {
                            colModel_result.push(template);
                    }
                }
        }else if(header.mergedCells.type === 'specific' && header.mergedCells.configs.length > 0){
            const specificHeaderMergeConfigs = header.mergedCells.configs.sort((a,b) => {if(a.r1 !== b.r1){return a.r1 - b.r1} else{return a.c1 - b.c1} })
          
        }

         return colModel_result
    }

    var setInitialCountRender = 0;

    // ##----------------- Define function for merging header of table -------------------------------##
    function mergeCellsAutoTable(conditions){
        var raw_data = data
        var mc = []
        var notMergedArray = []
        if(conditions == 'header'){
            var Data = raw_data.slice(0, header.n_row)
        }else if(conditions == 'content'){
            var Data = raw_data.slice(header.n_row, )
        }
        var CM = Data[0].map((_, index) => ({ dataIndx: index })),
        i = CM.length,
        j = Data.length;

        // Automatically merge columns based on row values for heading
        for (var r = 0; r < Data.length; r++) {
            var rc = 1,
            c = CM.length;

            while (c--) {
                var cd = Data[r][CM[c].dataIndx]
                var cd_prev = Data[r][CM[c - 1] ? CM[c - 1].dataIndx : undefined];
                notMergedArray.push({cellvalue: cd, r1: r, c1: c, rc: 1, cc:1})

                if (cd_prev !== undefined && cd == cd_prev) {
                    rc++;
                } else if (rc > 1) {
                    mc.push({cellvalue: cd, r1: r, c1: c, rc: 1, cc: rc });
                    rc = 1;
                }
            }
        }

        while (i--) {
            var dataIndx = CM[i].dataIndx,
            rc = 1;
                
            while (j--) {   
                var cd = Data[j][dataIndx],
                cd_prev = Data[j - 1] ? Data[j - 1][dataIndx] : undefined;
                            
                if (cd_prev !== undefined && cd == cd_prev) {
                     rc++;
                }
                else if (rc > 1) {
                     mc.push({cellvalue: cd, r1: j, c1: i, rc: rc, cc: 1 });
                     rc = 1;
                }
            }
                j = Data.length; // Reset j for the next column
        }
        
    
                
        let sort_mc = mc.    sort((a, b) => {
            if (a.r1 !== b.r1) {
                return a.r1 - b.r1;
            } else if (a.c1 !== b.c1) {
                return a.c1 - b.c1;
            } else if (a.rc !== b.rc) {
                return a.rc - b.rc;
            } else {
                return a.cc - b.cc;
            }
        });


        const groupedData = {};
        const sortedData = [];

        sort_mc.forEach(item => {
        const key = `${item.c1}-${item.rc}-${item.cc}`;
        if (!groupedData[key]) {
                groupedData[key] = [];
        }
        groupedData[key].push(item);
        });

        Object.values(groupedData).forEach(group => {
        sortedData.push(...group);
        });
        

        function mergeConsecutiveObjects(arr) {
            const result = [];
            let currentObj = { ...arr[0] };
            
            for (let i = 1; i < arr.length; i++) {
            const nextObj = arr[i];
            
            if (
                currentObj.c1 === nextObj.c1 &&
                currentObj.cc === nextObj.cc &&
                currentObj.rc + currentObj.r1 === nextObj.r1 &&
                currentObj.cellvalue === nextObj.cellvalue
            ) {
                currentObj.rc += nextObj.rc;
            } else {
                result.push(currentObj);
                currentObj = { ...nextObj };
            }
            }
                result.push(currentObj);
                return result;
            }
        const sortedData2 = mergeConsecutiveObjects(sortedData)
        const basedArray = sortedData2.filter(item => item.cc !== 1);
        const componentArray = sortedData2.filter(itemA =>
        !basedArray.some(itemB =>
              Object.keys(itemA).every(key => itemA[key] === itemB[key])));
        var temp = []
        for(var i=0; i < basedArray.length ; i++){
            for(var j=0; j < componentArray.length; j++){
                if(basedArray[i].r1 == componentArray[j].r1 &&
                basedArray[i].c1 == componentArray[j].c1 &&
                basedArray[i].rc == componentArray[j].rc && 
                basedArray[i].cellvalue === componentArray[j].cellvalue){
                    for(var k=0; k < basedArray[i].cc ; k++){
                        temp.push({cellvalue: basedArray[i].cellvalue,r1: basedArray[i].r1, c1: basedArray[i].c1 + k, rc: basedArray[i].rc, cc: 1})
                        }
                }
            }
        } 

        const real_componentArray = componentArray.filter(itemA => !temp.some(itemB => Object.keys(itemA).every(key => itemA[key] == itemB[key])))
        const real_mc = basedArray.concat(real_componentArray)
        const filtered = notMergedArray.filter(objMerged => !real_mc.some(objHeading => objHeading.cellvalue === objMerged.cellvalue)).concat(real_mc).sort((a,b) => { if (a.r1 !== b.r1) {return a.r1 - b.r1;} else {return a.c1 - b.c1;}})
        return filtered;
    }


    // ##----------------- Define function for merging content of table -------------------------------##
    function mergeCellsContentTable(grid_style){
        var real_mergedContentArray = [];
        var mergedContentArray = [];
        var contentData = data.slice(header.n_row, );
        var CMContent = contentData[0].map((_, index) => ({dataIndx: index}));
        var i = CMContent.length;
        var j = contentData.length;
          
        // ----------- merge rows based on column value for content ------------------
        if(grid_style.content.mergedCells.type === 'default' && grid_style.content.mergedCells.configs.length === 0){
            real_mergedContentArray = []
        }
        else if(grid_style.content.mergedCells.type === 'auto' && grid_style.content.mergedCells.configs.length === 0)
        {
            real_mergedContentArray = mergeCellsAutoTable('content')
            
        }else if((grid_style.content.mergedCells.type === 'auto_col' && grid_style.content.mergedCells.configs.length === 0)  || (grid_style.content.mergedCells.type === 'auto_specific_col' && grid_style.content.mergedCells.configs.length >=0))
        {
            while(i --)
            {
                var dataIndx = CMContent[i].dataIndx;
                var rc = 1;
                    
                while (j--){
                    var cd = contentData[j][dataIndx];
                    var cd_prev = contentData[j - 1] ? contentData[j - 1][dataIndx] : undefined;

                    if (cd_prev !== undefined && cd == cd_prev){
                        rc++;
                    }else if (rc > 1){
                        mergedContentArray.push({cellvalue: cd, r1: j, c1: i, rc: rc, cc: 1 });
                        rc = 1;
                    }

                }

                var j = contentData.length;
            }

            if(grid_style.content.mergedCells.type === 'auto_specific_col' && grid_style.content.mergedCells.configs.length >=0){
                real_mergedContentArray = mergedContentArray.filter(item1 => grid_style.content.mergedCells.configs.find(item2 => item1.c1 === item2.c1))
                var temp = [];
                for(var i = 0; i < real_mergedContentArray.length ; i++)
                {
                    var real_mergedContentObject = real_mergedContentArray[i]
                    for(var j = 0; j < grid_style.content.mergedCells.configs.length ; j++){
                        var configs = grid_style.content.mergedCells.configs[j]
                        if(real_mergedContentObject.c1 === configs.c1){
                            if(grid_style.content.mergedCells.configs[j].style === undefined){
                                temp.push(real_mergedContentObject)
                            }else{
                                real_mergedContentObject.style = 'background-color: ' + grid_style.content.mergedCells.configs[j].style.replace('background:','');
                                temp.push(real_mergedContentObject)
                            }
                        }
                    }
                }
            }

        }else if(grid_style.content.mergedCells.type === 'specific' && grid_style.content.mergedCells.configs.length >= 0){
            real_mergedContentArray = grid_style.content.mergedCells.configs
        }
        
        if((grid_style.content.mergedCells.type === 'auto_col' && grid_style.content.mergedCells.configs.length === 0))
        {
            return mergedContentArray
        }else{
            return real_mergedContentArray
        }
       
    }


    // ##------------------------------ Define function for styling table --------------------------------##
    function stylingTableAndAdditional(grid_style){
        // ---------------- ## Style overall of table --------------------------------------------
        var pqGridTable = $('.pq-grid-center')
        pqGridTable.addClass(grid_style.overall_table.class_name)
        pqGridTable.css(grid_style.overall_table.style)

        // ---------------------------------------------------------------------------------------

        // ----------------- ## Style header of table --------------------------------------------

        var pqGridHeader = $('.pq-grid-header'),
            pqGridHeaderTableRow = $('.pq-grid-col'),
            pqGridHeaderTableCell = $('.pq-td-div')

        pqGridHeader.addClass(grid_style.header.component.container.class_name)
        pqGridHeaderTableRow.addClass(grid_style.header.component.parentCell.class_name)
        pqGridHeaderTableCell.addClass(grid_style.header.component.childCell.class_name)

        pqGridHeader.css(grid_style.header.component.container.style)
        pqGridHeaderTableRow.css(grid_style.header.component.parentCell.style)
        pqGridHeaderTableCell.css(grid_style.header.component.childCell.style)

    
        // ---------------------------------------------------------------------------------------

        // ----------------- ## Style content of table -------------------------------------------
        var pqGridContentTableOddRow = $('tr.pq-grid-oddRow').removeClass('pq-grid-row'),
            pqGridContentTableEvenRow = $('.pq-grid-row').addClass('pq-grid-evenRow').removeClass('pq-grid-row'),
            pqContentTableCell = $('.pq-grid-cell')

        pqGridContentTableOddRow.addClass(grid_style.content.component.parentCell.oddRow.class_name)
        pqGridContentTableEvenRow.addClass(grid_style.content.component.parentCell.evenRow.class_name)
        pqContentTableCell.addClass(grid_style.content.component.childCell.class_name)


        pqGridContentTableOddRow.css(grid_style.content.component.parentCell.oddRow.style)
        pqGridContentTableEvenRow.css(grid_style.content.component.parentCell.evenRow.style)
        pqContentTableCell.css(grid_style.content.component.childCell.style);


        // Styling scroll bar
        var pqGridHorizontalScrollBarContainer = $('.pq-sb-horiz'),
            pqGridHorizontalScrollbar = $('.pq-sb-horiz-t .pq-sb-slider'),
            pqGridUiTriangleButton = $('.pq-sb-btn')

        pqGridHorizontalScrollBarContainer.addClass(scrollbar.horizontalScrollBar.parent.class_name)
        pqGridHorizontalScrollbar.addClass(scrollbar.horizontalScrollBar.child.class_name)
        pqGridUiTriangleButton.addClass(scrollbar.uiTriangleButton.class_name)
        
        
        pqGridHorizontalScrollBarContainer.css(scrollbar.horizontalScrollBar.parent.style)
        pqGridHorizontalScrollbar.css(scrollbar.horizontalScrollBar.child.style)
        pqGridUiTriangleButton.css(scrollbar.uiTriangleButton.style)

        
        // ----------------------------## Additional style ----------------------------------------
        var pqGridrefreshButton = $('.ui-icon-refresh')
        var pqGridFooter = $('.pq-grid-bottom')
        var pqGridTitle = $('.pq-grid-title')
        var pqGridUiWidgetContent = $('.ui-widget-content')
        var pqGridExportFilesComponent = $('.export-files-component')
        pqGridFooter.find('.pq-page-placeholder').addClass('number-page')
        pqGridUiWidgetContent.css('border-color', 'transparent')
        pqGridTitle.remove()
        pqGridrefreshButton.hide()
        pqGridExportFilesComponent.find('.pq-separator, .ui-button-icon').remove()


        if(grid_style.overall_table.isPaging === false){
            pqGridFooter.empty()
        }



        $('.filterValue').on('click', function(event){
            var inputsearchBox = $(`.${grid_style.toolbar.component.filterSearch.child.searchBar.class_name}`)
            inputsearchBox.addClass('active-toolbar')
        })

        $(document).on('click', function(event) {
            var inputsearchBox = $(`.${grid_style.toolbar.component.filterSearch.child.searchBar.class_name}`)
            if (inputsearchBox.hasClass('active-toolbar') && !inputsearchBox.has(event.target).length) {
                inputsearchBox.removeClass('active-toolbar')
                $('.cross-symbol').hide()
            }
        });
    }



    // -------------------------------------- Define function for creating toolbox and pagination bar ------------------------------------------------

    function createToolBoxAndPagination(grid_style){
        setInitialCountRender++;
        //  -------------- ## Style footer of table ----------------------------------------------
        if(setInitialCountRender === 1)
        {
            // ---------------- Toolbar --------------------------------------------------

            $('label, .ui-button').wrapAll('<div class="export-files-component"></div>')
            $('.filterValue, .filterColumn, .filterCondition').wrapAll('<div class="filter-component"></div>')
            $('.export-files-component').find('label').addClass('format-label')
            $('.format-label, .ui-button').wrapAll('<div class="format-component"></div>')
            $('.pq-grid-top').find('span').appendTo($('.export-files-component'))
            $('<span class="show-text">Show</span>').insertAfter('.format-component')
            $('<span class="entries-text">entries</span>').insertAfter('.page-options')
            $('.show-text, .page-options, .entries-text').wrapAll('<div class="page-options-component"></div>')
            $(`<img class="search-icon" src=${grid_style.toolbar.search_icon_path}>`).insertBefore($('.filterValue'));
            $('.search-icon, .filterValue').wrapAll('<div class="search-box"></div>')
            $('.ui-button').text('')
            $('.ui-button').append('<span class="export-text">Export</span>')
            $(`<img class="export-icon  " src=${grid_style.toolbar.export_icon_path}>`).insertBefore($('.export-text'));
            
            

            var pqGridToolBarSearchComponent = $('.pq-toolbar-search'),
                pqGridExportFilesComponent = $('.export-files-component'),
                pqGridFormatComponent = $('.format-component'),
                pqGridFormatLabel = $('.format-label'),
                pqGridExportFormatContainer = $('#export_format'),
                pqGridExportFormatButton = $('.ui-button'),
                pqGridExportFormatButtonIcon = $('.export-icon'),
                pqGridPageOptionsComponent = $('.page-options-component'),
                pqGridShowText = $('.show-text'),
                pqGridPageOptions = $('.page-select'),
                pqGridFilterComponent = $('.filter-component'),
                pqGridSearchBox = $('.search-box'),
                pqGridSearchIcon = $('.search-icon'),
                pqGridFilterValue = $('.filterValue'),
                pqGridFilterColumn = $('.filterColumn'),
                pqGridFilterCondition = $('.filterCondition')


            
            pqGridToolBarSearchComponent.addClass(grid_style.toolbar.component.container.class_name)
            pqGridExportFilesComponent.addClass(grid_style.toolbar.component.exportFilesBar.parent.class_name)
            pqGridFormatComponent.addClass(grid_style.toolbar.component.exportFilesBar.child.format.class_name)
            pqGridFormatLabel.addClass(grid_style.toolbar.component.exportFilesBar.child.formatLabel.class_name)
            pqGridExportFormatContainer.addClass(grid_style.toolbar.component.exportFilesBar.child.exportFormat.class_name)
            pqGridExportFormatButton.addClass(grid_style.toolbar.component.exportFilesBar.child.exportFormat.child.exportFormatButton.class_name)
            pqGridExportFormatButtonIcon.addClass(grid_style.toolbar.component.exportFilesBar.child.exportFormat.child.exportFormatButtonIcon.class_name)
            pqGridPageOptionsComponent.addClass(grid_style.toolbar.component.pageSelectOption.parent.class_name)
            pqGridPageOptions.addClass(grid_style.toolbar.component.pageSelectOption.child.pageSelect.class_name)
            pqGridShowText.addClass(grid_style.toolbar.component.pageSelectOption.child.showSingleText.class_name)
            pqGridFilterComponent.addClass(grid_style.toolbar.component.filterSearch.parent.class_name)
            pqGridSearchBox.addClass(grid_style.toolbar.component.filterSearch.child.searchBar.class_name)
            pqGridFilterValue.addClass(grid_style.toolbar.component.filterSearch.child.searchBar.child.inputSearchBar.class_name)
            pqGridSearchIcon.addClass(grid_style.toolbar.component.filterSearch.child.searchBar.child.searchBarIcon.class_name)
            pqGridFilterColumn.addClass(grid_style.toolbar.component.filterSearch.child.filterColumn.class_name)
            pqGridFilterCondition.addClass(grid_style.toolbar.component.filterSearch.child.filterCondition.class_name)

    

            pqGridToolBarSearchComponent.css(grid_style.toolbar.component.container.style)
            pqGridExportFilesComponent.css(grid_style.toolbar.component.exportFilesBar.parent.style)
            pqGridFormatComponent.css(grid_style.toolbar.component.exportFilesBar.child.format.style)
            pqGridFormatLabel.css(grid_style.toolbar.component.exportFilesBar.child.formatLabel.style)
            pqGridExportFormatContainer.css(grid_style.toolbar.component.exportFilesBar.child.exportFormat.style)
            pqGridExportFormatButton.css(grid_style.toolbar.component.exportFilesBar.child.exportFormat.child.exportFormatButton.style)
            pqGridExportFormatButtonIcon.css(grid_style.toolbar.component.exportFilesBar.child.exportFormat.child.exportFormatButtonIcon.style)
            pqGridPageOptionsComponent.css(grid_style.toolbar.component.pageSelectOption.parent.style)
            pqGridPageOptions.css(grid_style.toolbar.component.pageSelectOption.child.pageSelect.style)
            pqGridShowText.css(grid_style.toolbar.component.pageSelectOption.child.showSingleText.style)
            pqGridFilterComponent.css(grid_style.toolbar.component.filterSearch.parent.style)
            pqGridSearchBox.css(grid_style.toolbar.component.filterSearch.child.searchBar.style)
            pqGridFilterValue.css(grid_style.toolbar.component.filterSearch.child.searchBar.child.inputSearchBar.style)
            pqGridSearchIcon.css(grid_style.toolbar.component.filterSearch.child.searchBar.child.searchBarIcon.style)
            pqGridFilterColumn.css(grid_style.toolbar.component.filterSearch.child.filterColumn.style)
            pqGridFilterCondition.css(grid_style.toolbar.component.filterSearch.child.filterCondition.style)
            
        
            // ----------------------------- Pagination -------------------------------------------------

            var pqGridFooter = $('.pq-grid-bottom'),
                pqGridPaging = $('.pq-grid-footer'),
                pqGridUiIconSeekFirst = $('.ui-icon-seek-first'),
                pqGridUiIconSeekPrev = $('.ui-icon-seek-prev'),
                pqGridUiIconSeekNext = $('.ui-icon-seek-next'),
                pqGridUiIconSeekLast = $('.ui-icon-seek-last'),
                pqGridUiButton = $('.pq-ui-button'),
                pqGridFirstPageButton = pqGridUiIconSeekFirst.removeClass('ui-icon').removeClass('ui-widget-header').text('First'),
                pqGridPrevPageButton = pqGridUiIconSeekPrev.removeClass('ui-icon').text('Previous'),
                pqGridNextPageButton = pqGridUiIconSeekNext.removeClass('ui-icon').text('Next'),
                pqGridLastPageButton = pqGridUiIconSeekLast.removeClass('ui-icon').text('Last'),
                searchInsertBox = $('.filterValue'),
                filterColumn = $('.filterColumn'),
                filterCondition = $('.filterCondition'),
                filterAndConditionOptions = $('.filterColumn, .filterCondition'),
                pageSelectBoxOptions = $('.page-selects')

            pqGridFooter.addClass(grid_style.footer.component.container.class_name)
            pqGridPaging.addClass(grid_style.footer.component.paginationContainer.parent.class_name)

            pqGridUiButton.removeClass('ui-widget-header')
            $('.pq-grid-footer span[title="First Page"]').remove();
            $('.pq-grid-footer span[title="Last Page"]').remove();
            $('.pq-grid-footer span[title="Refresh"]').remove();
            pqGridFirstPageButton.remove()      
            pqGridLastPageButton.remove()               

            pqGridUiIconSeekPrev.parent().addClass('previous-btn')
            $('.previous-btn').wrapAll(`<div class="${footer.component.paginationContainer.child.previousButton.class_name}"></div>`)

            pqGridUiIconSeekNext.parent().addClass('next-btn')
            $('.next-btn').wrapAll(`<div class="${footer.component.paginationContainer.child.nextButton.class_name}"></div>`)
            

            pageSelectBoxOptions.appendTo($('.page-options-component'))
            pageSelectBoxOptions.after($('.entries-text'))
            $('.page-options').remove()
            

            var previousButton = $(`.${footer.component.paginationContainer.child.previousButton.class_name}`),
                nextButton = $(`.${footer.component.paginationContainer.child.nextButton.class_name}`)

            $(`<div class="${footer.component.paginationContainer.child.paginationPageBar.class_name}"></div>`).insertAfter(previousButton)
            var paginationPageBar = $(`.${footer.component.paginationContainer.child.paginationPageBar.class_name}`),
                pageInsertBox = footer.component.paginationContainer.child.paginationPageBar.child.insertnumberPage.class_name,
                numberPage = footer.component.paginationContainer.child.paginationPageBar.child.numberPage.class_name,
                rawData = data.length - header.n_row,
                firstPageSelectOptions = toolbar.rPPOptions[0],
                tolPageTable = Math.ceil(rawData/firstPageSelectOptions),
                threeDotTextDiv = `<div class="three-dot">...</div>` 


            // ------------------------------- Create pagination bar initially  ----------------------------------------------------------------------
            if(rawData <= toolbar.rPPOptions[toolbar.rPPOptions.length - 1]){
                if(rawData < 20)
                {   
                    if(rawData <= 10){
                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${1}"><span>${1}</span></div>`)
                    }
                    else if(rawData > 10 && rawData < 20)
                    {
                        for(var i=1; i <= Math.ceil(20/(rawData)); i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span>}</div>`)
                            }
                        }
                    }
                }else{
                    for(var i=1; i <= tolPageTable; i++){
                        if(i === 1){
                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                        }
                        else if(i > 1){
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                        }
                    }
                }
            }else if(rawData > toolbar.rPPOptions[toolbar.rPPOptions.length - 1]){
                if(tolPageTable >= 10)
                {
                    for(var i=1; i <= 4; i++){
                        if(i === 1){
                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                        }
                        else if(i > 1){
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                        }
                    }
                    paginationPageBar.append(threeDotTextDiv)
                    paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                }else{
                    if(tolPageTable ===  6 || tolPageTable ===  7)
                    {
                        for(var i=1; i <= 4; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                    }else if(tolPageTable ===  8 || tolPageTable ===  9){
                        for(var i=1; i <= 5; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                    }
                }
            }

            if(!previousButton.hasClass('disabled')){
                previousButton.addClass('disabled')
            }


            // ---------------------------- Handling event for page select option per page --------------------------------------------------

            pageSelectBoxOptions.on('change', (event) => {
                paginationPageBar.empty(); 
                var totalPageSection = parseInt($('.total').text())
                if($('.pq-grid-cont-inner').text() === "No rows to display."){
                    $('.pq-pager-msg').empty()
                    $('.pagination-container').append($('.pq-pager-msg').html())
                    $('.pq-pager-msg').append('Showing 0 to 0 of 0 entries')    
                }

                /* ------------------------------------------------------------------------------------*/
                if(totalPageSection <= 5){
                    for(var i=1; i <= totalPageSection; i++){
                        if(i === 1){
                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}" ><span>${i}</span></div>`)
                        }
                        else if(i > 1){
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                        }
                    }
                }else if(totalPageSection > 5){
                    if(totalPageSection >= 6 && totalPageSection <= 9)
                    {
                        if(totalPageSection === 6|| totalPageSection ===  7)
                        {
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`< div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></>`)
                        }else if(totalPageSection ===  8 || totalPageSection ===  9){
                            for(var i=1; i <= 5; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)
                        }

                    }else{
                        

                        for(var i=1; i <= 4; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)

                    }
                }

                /* ------------------------ ------------------------------------------------------------ */

                if(!previousButton.hasClass('disabled')){
                    previousButton.addClass('disabled')
                }


        
                $('.pq-pager-input').val(1).trigger('change')

                if(parseInt($('.pq-pager-input').val()) >= 1 && searchInsertBox.val().length > 0){
                    $('.pq-pager-msg').html(function (index, oldHTML) { 
                        console.log(oldHTML + `<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`)
                        return oldHTML + `<span class   ="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`;
                    })
                }
                $('.total').hide()
                $('.pq-pager-input').hide()
            })




            // ------------------ Handling event for previous button click -----------------------------------------

            previousButton.on('click', function(){
                var countClick = parseInt($('.pq-pager-input').val()) + 1; 
                var totalPageCount = parseInt($('.total').text())
                var currentPage = parseInt($('.pq-pager-input').val())

                $('.filter-text').remove()

                
                if($('.previous-btn').hasClass('disabled')){
                    previousButton.addClass('disabled')
                }


                if(nextButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')
                }
                
                

                
                if(!$(`#page-${countClick}`).hasClass('active')){
                    $(`#page-${countClick - 1}`).addClass('active')
                }
                else if($(`#page-${countClick}`).hasClass('active')){
                    $(`#page-${countClick-1}`).addClass('active')
                    $(`#page-${countClick}`).removeClass('active')
                }


                $('.num-page').css({
                    'background': '',
                    'border': ''
                })

                if($('.pq-grid-cont-inner').text() === 'No rows to display.'){
                    nextButton.addClass('disabled')
                }

                if(paginationPageBar.children().length === 1){
                    nextButton.addClass('disabled')
                    previousButton.addClass('disabled')
                }

                if(tolPageTable >= 5)
                {
                    if(totalPageCount >= 10)
                    {
                        if(countClick > 4 && countClick - 1 < totalPageCount - 2){ //13
                            paginationPageBar.empty()
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${countClick - 2}"><span>${countClick - 2}</span></div>`)
                            paginationPageBar.append(`<input type="text" class="${pageInsertBox}" value="${countClick - 1}">`)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${countClick}"><span>${countClick}</span></div>`)
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        }
                        else if(countClick - 1 > 0 && countClick -1 <= 4){
                            paginationPageBar.empty()
                            for(let i = 1; i <= 4; i++){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                            $(`#page-${countClick - 1}`).addClass('active')
                        }
                    }else if(totalPageCount >=6 && totalPageCount <= 9){
                        if(totalPageCount === 6 || totalPageCount === 7){
                            if(countClick - 1 > 0 && countClick - 1 <= 3){
                                paginationPageBar.empty()
                                for(let i = 1; i <= 4; i++){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                                $(`#page-${countClick - 1}`).addClass('active')
                            }
                        }
                        else if(totalPageCount === 8 || totalPageCount === 9){
                            if(countClick - 1 > 0 && countClick - 1 <=4){
                                paginationPageBar.empty()
                                for(let i = 1; i <= 5; i++){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                                $(`#page-${countClick - 1}`).addClass('active')

                            }
                        }
                    }
                }
                if(!$(`.${pageInsertBox}`).hasClass('disabled')){
                    $(`.${pageInsertBox}`).addClass('disabled')
                }


                if(parseInt($('.pq-pager-input').val()) >= 1 && searchInsertBox.val().length > 0){
                    $('.pq-pager-msg').html(function (index, oldHTML) {
                        return oldHTML + `<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`;
                    })
                }



                $('.total').hide();
                $('.pq-pager-input').hide();
            });

            
            var currentPage = parseInt($('.pq-pager-input').val())



             // ------------------ Handling event for next button click -----------------------------------------
            
            nextButton.on('click', function(e){
                var countClick = parseInt($('.pq-pager-input').val()) - 1
                var totalPageCount = parseInt($('.total').text())
                var currentPage = parseInt($('.pq-pager-input').val())
                searchInsertBox.blur()

                $('.filter-text').remove()

                if(previousButton.hasClass('disabled')){
                      previousButton.removeClass('disabled')
                }

                if($('.next-btn').hasClass('disabled')){
                    nextButton.addClass('disabled')
                }


                if($(`#page-${countClick}`).hasClass('active')){
                    $(`#page-${countClick+1}`).addClass('active')
                    $(`#page-${countClick}`).removeClass('active')
                }

                else if(!$(`#page-${countClick}`).hasClass('active')){
                    $(`#page-${countClick+1}`).addClass('active')
                }
                

                if($('.pq-grid-cont-inner').text() === 'No rows to display.'){
                    previousButton.addClass('disabled')
                }

                if(paginationPageBar.children().length === 1){
                    nextButton.addClass('disabled')
                    previousButton.addClass('disabled')
                }


                if(tolPageTable >= 5)
                {
                    if(totalPageCount >= 10)
                    {
                        if(countClick+1 >= 4 && countClick <= totalPageCount){
                            if(countClick+1 <= totalPageCount - 3)
                            {
                                paginationPageBar.empty()
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${countClick}"><span>${countClick}</span></div>`)
                                paginationPageBar.append(`<input type="text" class="${pageInsertBox}" value="${countClick+1}">`)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${countClick+2}"><span>${countClick+2}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                            }
                            else if(countClick+1 === totalPageCount - 2 ){
                                paginationPageBar.empty()
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${countClick}"><span>${countClick}</span></div>`)
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${countClick + 1}"><span>${countClick + 1}</span></div>`)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${countClick + 2}"><span>${countClick + 2}</span></div>`)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                                
                            }
                            
                        }
                    }else if(totalPageCount >=6 && totalPageCount <= 9){
                        if(totalPageCount === 6 || totalPageCount === 7){
                            if(countClick+1 > 3){
                                
                                paginationPageBar.empty()
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for(let i=3; i <= totalPageCount; i++){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                                $(`#page-${countClick+1}`).addClass('active')
                            }
                        }
                        else if(totalPageCount === 8 || totalPageCount === 9){
                            if(countClick+1 > 4){
                                paginationPageBar.empty()
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for(let i=4; i <= totalPageCount; i++){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                                $(`#page-${countClick+1}`).addClass('active')
                            }
                        }
                    }
                }



                if(parseInt($('.pq-pager-input').val()) >= 1 && searchInsertBox.val().length > 0){
                    $('.pq-pager-msg').html(function (index, oldHTML) {
                        return oldHTML + `<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`;
                    })
                }


                $('.total').hide()
                $('.pq-pager-input').hide()
            });

            // -------------------------------------- Handling event for insert filtered keyword -------------------------------------------------------
            searchInsertBox.on('keyup', function(ev){
                paginationPageBar.empty();
                var totalPageSection = !isNaN(parseInt($('.total').text())) ? parseInt($('.total').text()) : null
                var crossSymbol = '<span class="cross-symbol">X</span>'
                
                if($(this).val().length >= 1){
                    $('.cross-symbol').remove()
                    $(crossSymbol).insertAfter($('.filterValue'))
                }else if($(this).val().length === 0){
                    $('.cross-symbol').hide()
                }


                if($(this).val().length === 0){
                    $('.pq-pager-msg span').empty()
                    $('<span></span>').appendTo('.pq-pager-msg')
                }else if($(this).val().length !== 0 ||  $('.pq-grid-cont-inner').text() == "No rows to display."){
                    $('.pq-pager-msg span').empty()
                    $(`<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`).appendTo('.pq-pager-msg')
                }


                if($('.pq-grid-cont-inner').text() === 'No rows to display.'){
                    nextButton.addClass('disabled')
                }

                if(previousButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')

                }else if(!previousButton.hasClass('disabled')){
                    previousButton.addClass('disabled')
                }

                if(nextButton.hasClass('disabled')){
                    nextButton.addClass('disabled')
                }else if(!nextButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')
                }

                if($('.pq-grid-cont-inner').text() === "No rows to display." || totalPageSection === 0){
                    $('.pq-pager-msg').empty()
                    $('.pagination-container').append($('.pq-pager-msg').html())
                    $('.pq-pager-msg').append('Showing 0 to 0 of 0 entries')
                    nextButton.addClass('disabled')
                }

                if(totalPageSection === 1){
                    nextButton.addClass('disabled')
                }

                if(totalPageSection === null){
                    if(tolPageTable <= 5){
                        for(var i=1; i <= tolPageTable; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}" ><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                    }
                }else if(tolPageTable > 5){
                        if(tolPageTable >= 6 && tolPageTable <= 9)
                        {
                            if(tolPageTable === 6|| tolPageTable ===  7)
                            {
                                for(var i=1; i <= 4; i++){
                                    if(i === 1){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                    }
                                    else if(i > 1){
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                            }else if(tolPageTable ===  8 || tolPageTable ===  9){
                                for(var i=1; i <= 5; i++){
                                    if(i === 1){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                    }
                                    else if(i > 1){
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                            }
                        }else{
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                        }
                    }
                }

                
                if(totalPageSection <= 5){
                    for(var i=1; i <= totalPageSection; i++){
                        if(i === 1){
                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}" ><span>${i}</span></div>`)
                        }
                        else if(i > 1){
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                        }
                    }
                }else if(totalPageSection > 5){
                    if(totalPageSection >= 6 && totalPageSection <= 9)
                    {
                        if(totalPageSection === 6|| totalPageSection ===  7)
                        {
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)
                        }else if(totalPageSection ===  8 || totalPageSection ===  9){
                            for(var i=1; i <= 5; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}""><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)
                        }
                    }else{


                        for(var i=1; i <= 4; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)


                       
                    }
                }

                $('.pq-pager-input').val(1).trigger('change');
                $('.total').hide()
                $('.pq-pager-input').hide() 
                       
            })  

            searchInsertBox.on('click', function(){
                var crossSymbol = '<span class="cross-symbol">X</span>'
                if($(this).val().length >= 1){
                    $('.cross-symbol').remove()
                    $(crossSymbol).insertAfter($('.filterValue'))
                }else if($(this).val().length === 0){
                    $('.cross-symbol').hide()
                }
            })


            $(`.${grid_style.toolbar.component.filterSearch.child.searchBar.class_name}`).on('click', '.cross-symbol' ,function(){
                paginationPageBar.empty();
                searchInsertBox.val('')
                $('.cross-symbol').hide()
                filterHandler()

                if(rawData <= toolbar.rPPOptions[toolbar.rPPOptions.length - 1]){
                    if(rawData < 20)
                    {   
                        if(rawData <= 10){
                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${1}"><span>${1}</span></div>`)
                        }
                        else if(rawData > 10 && rawData < 20)
                        {
                            for(var i=1; i <= Math.ceil(20/(rawData)); i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span>}</div>`)
                                }
                            }
                        }
                    }else{
                        for(var i=1; i <= tolPageTable; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                    }
                }else if(rawData > toolbar.rPPOptions[toolbar.rPPOptions.length - 1]){
                    if(tolPageTable >= 10)
                    {
                        for(var i=1; i <= 4; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                    }else{
                        if(tolPageTable ===  6 || tolPageTable ===  7)
                        {
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                        }else if(tolPageTable ===  8 || tolPageTable ===  9){
                            for(var i=1; i <= 5; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                        }
                    }
                }


                $('.total').hide()
                $('.pq-pager-input').hide() 
            })
            


            // -------------------------------------- Handling event for filtered column and condition when it has been changed -------------------------------------------------------
            filterAndConditionOptions.on('change', function(evt){
                paginationPageBar.empty(); 
                var totalPageSection = !isNaN(parseInt($('.total').text())) ? parseInt($('.total').text()) : null;
                
                if($('.pq-grid-cont-inner').text() === "No rows to display." || totalPageSection === 0){
                    $('.pq-pager-msg').empty()
                    $('.pagination-container').append($('.pq-pager-msg').html())
                    $('.pq-pager-msg').append('Showing 0 to 0 of 0 entries')
                    previousButton.addClass('disabled')
                    nextButton.addClass('disabled')
                }

                if(previousButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')
                }else if(!previousButton.hasClass('disabled')){
                    previousButton.addClass('disabled')
                }

                if(nextButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')
                }else if(!nextButton.hasClass('disabled')){
                    nextButton.addClass('disabled')
                }

                if(totalPageSection === 1){
                    nextButton.addClass('disabled')
                }

                
                if(totalPageSection === null){
                    if(tolPageTable <= 5){
                        for(var i=1; i <= tolPageTable; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}" ><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                    }else if(tolPageTable > 5){
                        if(tolPageTable >= 6 && tolPageTable <= 9)
                        {
                            if(tolPageTable === 6|| tolPageTable ===  7)
                            {
                                for(var i=1; i <= 4; i++){
                                    if(i === 1){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                    }
                                    else if(i > 1){
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                            }else if(tolPageTable ===  8 || tolPageTable ===  9){
                                for(var i=1; i <= 5; i++){
                                    if(i === 1){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                    }
                                    else if(i > 1){
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                            }
                        }else{
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${tolPageTable}"><span>${tolPageTable}</span></div>`)
                        }
                    }
                }


                if(totalPageSection <= 5){
                    for(var i=1; i <= totalPageSection; i++){
                        if(i === 1){
                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}" ><span>${i}</span></div>`)
                        }
                        else if(i > 1){
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                        }
                    }
                }else if(totalPageSection > 5){
                    if(totalPageSection >= 6 && totalPageSection <= 9)
                    {
                        if(totalPageSection === 6|| totalPageSection ===  7)
                        {
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)
                        }else if(totalPageSection ===  8 || totalPageSection ===  9){
                            for(var i=1; i <= 5; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)
                        }
                    }else{
                        for(var i=1; i <= 4; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageSection}"><span>${totalPageSection}</span></div>`)
                    }
                }



                $('.pq-pager-input').val(1).trigger('change');
                $('.total').hide()
                $('.pq-pager-input').hide()
            })

            filterColumn.on('change', function(){
                var totalPageSection = parseInt($('.total').text())
                if($(this).val().length === 0){
                    $('.pq-pager-msg span').empty()
                    $('<span></span>').appendTo('.pq-pager-msg')
                }else if($(this).val().length !== 0 ||  $('.pq-grid-cont-inner').text() == "No rows to display."){
                    $('.pq-pager-msg span').empty()
                    $(`<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`).appendTo('.pq-pager-msg')
                }

                if(nextButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')
                }else if(!nextButton.hasClass('disabled')){
                    nextButton.addClass('disabled')
                }

                if($('.pq-grid-cont-inner').text() === "No rows to display." || totalPageSection === 0){
                    $('.pq-pager-msg').empty()
                    $('.pagination-container').append($('.pq-pager-msg').html())
                    $('.pq-pager-msg').append('Showing 0 to 0 of 0 entries')
                    nextButton.addClass('disabled')
                }
            })

            filterCondition.on('change', function(){
                var totalPageSection = parseInt($('.total').text())
                if($(this).val().length === 0){
                    $('.pq-pager-msg span').empty()
                    $('<span></span>').appendTo('.pq-pager-msg')
                }else if($(this).val().length !== 0 ||  $('.pq-grid-cont-inner').text() == "No rows to display."){
                    $('.pq-pager-msg span').empty()
                    $(`<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`).appendTo('.pq-pager-msg')
                }

                if(nextButton.hasClass('disabled')){
                    nextButton.removeClass('disabled')
                }else if(!nextButton.hasClass('disabled')){
                    nextButton.addClass('disabled')
                }

                if($('.pq-grid-cont-inner').text() === "No rows to display." || totalPageSection === 0){
                    $('.pq-pager-msg').empty()
                    $('.pagination-container').append($('.pq-pager-msg').html())
                    $('.pq-pager-msg').append('Showing 0 to 0 of 0 entries')
                    nextButton.addClass('disabled')
                }

                $('.total').hide()
                $('.pq-pager-input').hide()
            })


            // ------------------------------------- Handling event for clicking on page of number ----------------------------------------------------
            paginationPageBar.on('click', `.${numberPage}`, function(evt) {
                var clickedValue = $(this).text();
                var currentActive = $(`.${numberPage}.active`);
                var totalPageCount = parseInt($(`.${numberPage}`).last().text())
                var currentPage = parseInt($('.pq-pager-input').val())

                previousButton.css({
                    'pointer-events': ''
                })

                nextButton.css({
                    'pointer-events': ''
                })

                if (!$(this).hasClass('active')) {
                    currentActive.removeClass('active');
                    $(this).addClass('active'); 
                    
                    $(`.${numberPage}`).css({
                        'background': '',
                        'border': ''
                        }
                    )

                    $('.pq-pager-input').val(clickedValue).trigger('change');
                }

                if(parseInt($('.pq-pager-input').val()) >= 1 && searchInsertBox.val().length > 0){
                    $('.pq-pager-msg').html(function (index, oldHTML) {
                        return oldHTML + `<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`;
                    })
                }

                if(totalPageCount !== 1){
                    previousButton.removeClass('disabled')
                }

                if(parseInt($('.pq-pager-input').val()) === 1 && !previousButton.hasClass('disabled')){
                    previousButton.addClass('disabled')
                }

                if(parseInt(clickedValue) !== totalPageCount){
                    nextButton.removeClass('disabled')
                }else if(parseInt(clickedValue) === totalPageCount){
                    nextButton.addClass('disabled')
                }


                if(parseInt(clickedValue) === 1){   
                    paginationPageBar.empty()
                    if(totalPageCount >= 10)
                    {
                        for(var i=1; i <= 4; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                    }else if(totalPageCount >= 6 && totalPageCount <= 9){
                        if(totalPageCount ===  6 || totalPageCount ===  7)
                        {
                            for(var i=1; i <= 4; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        }else if(totalPageCount === 8 || totalPageCount ===  9){
                            for(var i=1; i <= 5; i++){
                                if(i === 1){
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                                }
                                else if(i > 1){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        }
                    }else if(totalPageCount < 6){
                        for(var i=1; i <= totalPageCount; i++){
                            if(i === 1){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${1}</span></div>`)
                            }
                            else if(i > 1){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                    }
                }else if(parseInt(clickedValue) === totalPageCount){
                    paginationPageBar.empty()
                    if(totalPageCount < 6){
                        for(var i=1; i <= totalPageCount; i++){
                            if(i === totalPageCount){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                            }
                            else if(i !== totalPageCount){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                    }
                    else if(totalPageCount >= 6 && totalPageCount <= 9)
                    {
                        if(totalPageCount === 6 || totalPageCount === 7){
                            if(parseInt(clickedValue) > 3){
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                    paginationPageBar.append(threeDotTextDiv)
                                    for(let i=3; i <= totalPageCount; i++){
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                    $(`#page-${parseInt(clickedValue)}`).addClass('active')
                                }
                        }
                        else if(totalPageCount === 8 || totalPageCount === 9){
                            if(parseInt(clickedValue) > 4){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for(let i=4; i <= totalPageCount; i++){
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                                $(`#page-${parseInt(clickedValue)}`).addClass('active')
                            }
                        }
                    }else if(totalPageCount >= 10){
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                        paginationPageBar.append(threeDotTextDiv)
                        for (let i = parseInt(clickedValue) - 3; i <= parseInt(clickedValue) - 1; i++) {
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                        }
                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                    }
                }else{
                    if(totalPageCount >= 6 && totalPageCount <= 9){
                        if(totalPageCount === 6 || totalPageCount === 7){
                            var isRightHasThreedot = $(`#page-${4}`).next().hasClass('three-dot')
                            paginationPageBar.empty()
                            if(parseInt(clickedValue) < 4){
                                for (let i = 1; i <= 4; i++) {
                                    if(i === parseInt(clickedValue))
                                    {
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`);
                                    }else {
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                                    }
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`);

                            }else if(parseInt(clickedValue) === 4){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for (let i = parseInt(clickedValue) -1; i <= totalPageCount; i++) {
                                    if(i === parseInt(clickedValue))
                                    {
                                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`);
                                    }else {
                                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                                    }
                                }
                                
                            }
                            else if(parseInt(clickedValue) > 4){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for(let i= 3; i <= totalPageCount ; i++){
                                    if(i === parseInt(clickedValue)){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`);
                                    }else{
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                                    }
                                }
                            }else{
                                
                                for(let i=1 ; i<= 4 ; i++)
                                {
                                    if(i === 4){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                    }else{
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                }

                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`);

                            }              
                        }else if(totalPageCount === 8 || totalPageCount === 9){
                            var isRightHasThreedot = $(`#page-${5}`).next().hasClass('three-dot')
                            paginationPageBar.empty()
                            if(parseInt(clickedValue) < 5){
                                for (let i = 1; i <= 5; i++) {
                                    if(i === parseInt(clickedValue))
                                    {
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`);
                                    }else {
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                                    }
                                }
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`);

                            }else if(parseInt(clickedValue) === 5){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for (let i = parseInt(clickedValue) - 1 ; i <= totalPageCount; i++) {
                                    if(i === parseInt(clickedValue))
                                    {
                                            paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`);
                                    }else {
                                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                                    }
                                }
                                
                            }
                            else if(parseInt(clickedValue) > 5){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                for(let i= 4; i <= totalPageCount ; i++){
                                    if(i === parseInt(clickedValue)){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`);
                                    }else{
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                                    }
                                }
                            }else{

                                
                                
                                for(let i=1 ; i<= 5 ; i++)
                                {
                                    if(i === 4){
                                        paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                    }else{
                                        paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                    }
                                }

                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`);

                            }    
                        }
                    }
                }


                if(totalPageCount >= 10){
                    var isRightHasThreedot = $(`#page-${4}`).next().hasClass('three-dot')
                    if(parseInt(clickedValue) === 3){
                        paginationPageBar.empty()
                        for(let i=1; i <=4 ; i++)
                        {
                            if(i === parseInt(clickedValue)){
                                paginationPageBar.append(`<div class="${numberPage} active" id="page-${3}"><span>${3}</span></div>`)
                            }else if(i === 4){
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${4}"><span>${4}</span></div>`)
                                paginationPageBar.append(threeDotTextDiv)
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                            }else{
                                paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                            }
                        }
                    }
                    else if(parseInt(clickedValue) === 4 && isRightHasThreedot){
                        $(`#page-${2}, #page-${3}, #page-${4}`).remove()
                        $(`<div class="${numberPage}" id="page-${3}"><span>${3}</span></div>`).insertAfter('.three-dot')
                        $(`<input type="text" class="page-insert-box" value="${4}">`).insertAfter(`#page-${3}`)
                        $(`<div class="${numberPage}" id="page-${5}"><span>${5}</span></div>`).insertAfter('.page-insert-box')
                        $(threeDotTextDiv).insertAfter(`#page-${5}`)
                    }

                    

                    if(parseInt(clickedValue) === totalPageCount - 3){

                        if($(`#page-${7}`).next().hasClass(`three-dot`)){
                            paginationPageBar.empty()
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                            paginationPageBar.append(threeDotTextDiv)
                            for(let i = totalPageCount - 3; i < totalPageCount ; i++){
                                if(i === parseInt(clickedValue) )
                                {
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                }else{
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        }
                        else{
                            paginationPageBar.empty()
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${6}"><span>${parseInt(6)}</span></div>`)
                            paginationPageBar.append(`<input type="text" class="page-insert-box" value="${7}">`)    
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${8}"><span>${8}</span></div>`)
                            paginationPageBar.append(threeDotTextDiv)
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        }
                    }else if(parseInt(clickedValue) === totalPageCount - 2){
                        if($(`#page-${parseInt(clickedValue)}`).next().hasClass('three-dot')){
                            paginationPageBar.empty()
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                            paginationPageBar.append(threeDotTextDiv)
                            for(let i = totalPageCount - 3; i < totalPageCount ; i++){
                                if(i === parseInt(clickedValue) )
                                {
                                    paginationPageBar.append(`<div class="${numberPage} active" id="page-${i}"><span>${i}</span></div>`)
                                }else{
                                    paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                                }
                            }
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        }
                    }


                    if(parseInt(clickedValue) >= 4 && parseInt(clickedValue) <= totalPageCount - 3){
                        paginationPageBar.empty()
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${parseInt(clickedValue) - 1}"><span>${parseInt(clickedValue) - 1}</span></div>`)
                        paginationPageBar.append(`<input type="text" class="page-insert-box" value="${parseInt(clickedValue)}">`)    
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${parseInt(clickedValue) + 1}"><span>${parseInt(clickedValue) + 1}</span></div>`)
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                    }




                    if(parseInt(clickedValue) > 4 && parseInt(clickedValue) <= totalPageCount - 3){
                        $(`.${pageInsertBox}`).addClass('disabled-input-box')
                    }
                }
          

                $('.total').hide()
                $('.pq-pager-input').hide()
            });

           // ------------------------------------- Handling event for click and insert pagination page bar insert box ---------------------------
            
           paginationPageBar.on('input', `.${pageInsertBox}`, function(ev){
            $('.filter-text').empty()
            if(parseInt($('.pq-pager-input').val()) >= -1 && searchInsertBox.val().length > 0){
                $('.pq-pager-msg').html(function (index, oldHTML) {
                    return oldHTML + `<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`;
                })
              }
            })

            paginationPageBar.on('keypress', `.${pageInsertBox}`, function(ev){
                var totalPageCount = parseInt($('.total').text())

                $('.filter-text').remove()
                if(ev.which === 13){
                    var numberPageInsertBox = parseInt($(`.${pageInsertBox}`).val())

                    if(numberPageInsertBox >= 1 && numberPageInsertBox < 4){
                        paginationPageBar.empty()

                        for(let i = 1 ; i<= 4 ; i++){
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`)
                        }
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)
                        $(`#page-${numberPageInsertBox}`).addClass('active')
                        
                    }else if(numberPageInsertBox >= 4 && numberPageInsertBox <= totalPageCount - 3){
                        paginationPageBar.empty()
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${numberPageInsertBox - 1}"><span>${numberPageInsertBox - 1}</span></div>`)
                        paginationPageBar.append(`<input type="text" class="page-insert-box" value="${numberPageInsertBox}">`)    
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${numberPageInsertBox+1}"><span>${numberPageInsertBox+1}</span></div>`)
                        paginationPageBar.append(threeDotTextDiv)
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${totalPageCount}"><span>${totalPageCount}</span></div>`)

                    }else if(numberPageInsertBox > totalPageCount - 3 && numberPageInsertBox <=totalPageCount){
                        paginationPageBar.empty()
                        paginationPageBar.append(`<div class="${numberPage}" id="page-${1}"><span>${1}</span></div>`)
                        paginationPageBar.append(threeDotTextDiv)
                        for (let i = totalPageCount - 3; i <= totalPageCount; i++) {
                            paginationPageBar.append(`<div class="${numberPage}" id="page-${i}"><span>${i}</span></div>`);
                        }
                        $(`#page-${numberPageInsertBox}`).addClass('active')

                    }
                    
                    if(numberPageInsertBox === 1 || numberPageInsertBox === totalPageCount){
                        if(numberPageInsertBox === 1){
                            previousButton.css({
                                'pointer-events': 'none'
                            })
                        }else if(numberPageInsertBox === totalPageCount){
                            nextButton.css({
                                'pointer-events': 'none'
                            })
                            previousButton.css({
                                'pointer-events': ''
                            })
                        }
                    }



                    $('.pq-pager-input').val(numberPageInsertBox).trigger('change')

                    if(parseInt($('.pq-pager-input').val()) >= -1 && searchInsertBox.val().length > 0){
                        $('.pq-pager-msg').html(function (index, oldHTML) {
                            return oldHTML + `<span class="filter-text"> (filtered from ${data.length - header.n_row} total entries) </span>`;
                        })
                    }
                }


                $('.pq-pager-input').hide()    
                $('.total').hide()
            })


            paginationPageBar.on('click', `.${pageInsertBox}`, function(){
                if($(`.${pageInsertBox}`).hasClass('disabled-input-box')){
                    $(`.${pageInsertBox}`).removeClass('disabled-input-box')
                }
            })




            // ----------------------------------------------------------------------------------------------------------------------------
            // Additional initialing setting for creating pagination bar

            if(paginationPageBar.children().length === 1){
                nextButton.addClass('disabled')
                previousButton.addClass('disabled')
            }

            if(grid_style.overall_table.isPaging === false){
                pageSelectBoxOptions.hide()
                $('.show-text').hide()
            }

            $('.pq-pager-input').hide()    
            $('.total').remove()
            $(`.${footer.component.container.class_name}`).css(footer.component.container.style)
            $(`.${footer.component.paginationContainer.parent.class_name}`).css(footer.component.paginationContainer.parent.style)
            previousButton.css(footer.component.paginationContainer.child.previousButton.style)
            paginationPageBar.css(footer.component.paginationContainer.child.paginationPageBar.style)
            $(`.${footer.component.paginationContainer.child.paginationPageBar.child.numberPage.class_name}`).css(footer.component.paginationContainer.child.paginationPageBar.child.numberPage.style)
            nextButton.css(footer.component.paginationContainer.child.nextButton.style)
        
        }
    }

    // ------------------- Define function for creating link each column -------------------------------------------
    function createLinkEachColumn(sourceLink){
        var sourceLink = dataForCreateLink
        if(sourceLink.length != 0){
            //** Get all the deepest child of each parent colModel */
          
            let sourceDataForCreatingLinkArray = sourceLink.source
            let columnIndexForCreatingLinkArray = sourceLink.columnIndexArray
            let classNameForLinkTag = sourceLink.class_name
            let allColumnObjArray = []
      
            for(let i=0 ; i < grid_object.colModel.length ; i++)
            {
              var maxDepthObject = getObjectDepth(grid_object.colModel[i])
              var deepestChildEachParentColumnArray = getObjectsAtDepth(grid_object.colModel[i], maxDepthObject)
              
              for(const colModelObj of deepestChildEachParentColumnArray)
              {
                  allColumnObjArray.push(colModelObj)
              }
            }
      
            
            // **  Generating link to column  **
            for(const colIndx of columnIndexForCreatingLinkArray)
            {
              allColumnObjArray[colIndx].render = function(ui, evt){
                  if (
                      ui.colIndx - 1 >= 0 &&
                      ui.colIndx - 1 < sourceDataForCreatingLinkArray.length &&
                      ui.rowIndx >= 0 &&
                      ui.rowIndx < sourceDataForCreatingLinkArray[ui.colIndx - 1].length
                  ) {

                      let linkFromSourceData =
                          sourceDataForCreatingLinkArray[ui.colIndx - 1][ui.rowIndx][1]; 

                      return `<a href="${linkFromSourceData}" class="${classNameForLinkTag}" target="_blank">${ui.cellData}</a>`
                  }
              }
            }
         }
    }


    // ------------------- Define function for creating exported files and filtered column with name and condition ----------------------------

    function filterHandler(evt, ui) {
        var $toolbar = $grid.find('.pq-toolbar-search'),
            $value = $toolbar.find(".filterValue"),
            value = $value.val(),
            condition = $toolbar.find(".filterCondition").val(),
            dataIndx = $toolbar.find(".filterColumn").val(),
            filterObject;

        if (dataIndx == "") {//search through all fields when no field selected.
            filterObject = [];
            var CM = $grid.pqGrid("getColModel");
            for (var i = 0, len = CM.length; i < len; i++) {
                var dataIndx = CM[i].dataIndx;
                filterObject.push({ dataIndx: dataIndx, condition: condition, value: value });
            }
        }
        else {//search through selected field.
            filterObject = [{ dataIndx: dataIndx, condition: condition, value: value}];
        }
        $grid.pqGrid("filter", {
            oper: 'replace',
            data: filterObject
        });
    }


    // Hidden table 

    /*

    $('.hidden-button').on('click', function(){
        var pqRefreshButton = $('.ui-icon-refresh')
        $('.hidden').toggle();
        pqRefreshButton.click()
    })

    */
    
    
// --------------------------------------------- Recall all function ------------------------------------------------------------

    var grid_style = {
        overall_table: overall_table,
        header: header,
        content: content,
        footer: footer,
        toolbar: toolbar
    }
    var pageModel = { type: "local", rPP: grid_style.toolbar.rPPOptions[0] ,strRpp: "{0}", strDisplay: `Showing {0} to {1} of {2} entries`, rPPOptions: grid_style.toolbar.rPPOptions}
    var grid_object = {
                    resizable: false,
                    draggable: false,
                    dragColumns: false,
                    width: '100%',
                    height:  'flex',
                    editable: false,    
                    sortModel: false,
                    freezeRows: grid_style.content.numberFreezeRows,    
                    freezeCols: grid_style.content.numberFreezeCols,
                    scrollModel: {autoFit: true},
                    numberCell: {show: false},
                    flex: {one: true},
                    colModel:  createColModel(),
                    mergeCells: mergeCellsContentTable(grid_style),
                    dataModel: { 
                        data: data.slice(grid_style.header.n_row, ),
                    },
                    columnTemplate: { align: 'center', valign: 'center' },
                    filterModel: { mode: 'OR'},
                    pageModel: pageModel,
                    toolbar: {
                        cls: "pq-toolbar-search",
                        items: [          
                            {
                                type: 'select',
                                label: 'Format: ',                
                                attr: 'id="export_format"',
                                options: grid_style.toolbar.export_format,

                            },
                            {
                                type: 'select',
                                cls:'page-selects',
                                value: pageModel.rPP,
                                options: pageModel.rPPOptions,
                                listener: function(evt) {
                                    this.option('pageModel.rPP', $(evt.target).val())
                                    this.refreshDataAndView();
                                }
                            },
                            {
                                type: 'button',
                                label: "Export",
                                listener: function () {
            
                                    var format = $("#export_format").val(),                            
                                        blob = this.exportData({
                                            //url: "/pro/demos/exportData",
                                            format: format,                                
                                            render: true
                                        });
                                    if(typeof blob === "string"){                            
                                        blob = new Blob([blob]);
                                    }
                                    saveAs(blob, "pqGrid."+ format );
                                }
                            },        
                            { 
                                type: 'textbox', 
                                attr: 'placeholder="Search"', 
                                cls: "filterValue",
                                listener: { keyup: filterHandler }
                            },
                            { 
                                type: 'select', cls: "filterColumn",
                                listener: filterHandler,
                                options: function (ui) {
                                    var CM = ui.colModel;   
                                    var opts = [{'': 'All'}];
                                    for (var i = 0 ; i < CM.length; i++) {
                                        var column = CM[i];
                                        var obj = {};
                                        obj[column.dataIndx] = column.title;
                                        opts.push(obj);
                                    }
                                    return opts;
                                }
                            },
                            { 
                                type: 'select',                         
                                cls: "filterCondition",
                                listener: filterHandler,
                                options: grid_style.toolbar.filter_condition
                            }
                        ]
                    },
                    refresh: function(evt, ui){
                        createToolBoxAndPagination(grid_style) 
                        stylingTableAndAdditional(grid_style)


                        if(ui.source != 'flex'){
                            this.flex()
                        }

                        if($('.filterValue').val() == '' && ui.source != 'flex'){
                            this.flex()
                        }

                        else if($('.filterValue').val().length >=1 && ui.source != 'flex'){
                            this.flex()
                        }
                    },
                    
    }

    // Call function for creating link 
    createLinkEachColumn(dataForCreateLink)
   
    if(grid_style.overall_table.isPaging === false) {
        grid_object.pageModel = ''
    }
    

    if((data.length - grid_style.header.n_row) <= toolbar.rPPOptions[0]){
        grid_object.width = '100%';
    }


    var grid = $("#automerged-modified-table");
    var $grid =  grid.pqGrid(grid_object)

});    