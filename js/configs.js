// ## Style about overall table
var overall_table = {
    class_name: 'overall-table-container',
    style: {},
    width: '100%', 
    isScrollBar: false,
    isPaging: true
}

// # Style about header table
var header = {
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
    n_row: 3,
    mergedCells: {
        type: 'auto' ,    
        configs: []  
    },
    height: '150px',
    style: {}
}


// # Style about content table
var content = {
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
    numberFreezeRows: 0,
    numberFreezeCols: 0,
    mergedCells: {
        type: 'auto_specific_col',
        configs: [{c1:3, }]
    },
    height: '500px'
}


// # Paging bar (footer)
var footer = {
    class_name: 'footer-container',
    style: {},
}

var scrollbar = {
    verticalScrollBar: {
        parent: {
            class_name: 'vertical-scrollbar-container',
            style: {
                //'background': '#efefef'
            }
        },
        child: {
            class_name: 'vertical-scrollbar',
            style: {
                //'background': '#dae6f0',
                //'border-color': '#83abcd'
            }
        },
    },
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
    exportFilesBar: {
        export_format: [{ xlsx: 'Excel', csv: 'CSV', htm: 'HTML', json: 'JSON'}],
    },
    pageSelectBar: {
        rPPOptions: [10,15,20,25,30,35,40,45,50]
    },
    filterSearchBar: {
        filter_condition: [
            { "begin": "Begins With" },
            { "contain": "Contains" },
            { "end": "Ends With" },
            { "notcontain": "Does not contain" },
            { "equal": "Equal To" },
            { "notequal": "Not Equal To" },
            { "empty": "Empty" },
            { "notempty": "Not Empty" },
]
    },
}


export {
        overall_table,
        header,
        content,
        footer,
        scrollbar,
        toolbar
}
