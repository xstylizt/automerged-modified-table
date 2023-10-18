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
    n_row: 3,
    mergedCells: {
        type: 'auto' ,    
        configs: []  
    },
    height: 'auto',
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
    height: '500px',
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
                            class_name: 'num-page'
                        },
                        insertnumberPage:{
                            class_name: 'page-insert-box',
                            style: {}
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
    export_format: [{ xlsx: 'Excel', csv: 'CSV', htm: 'HTML', json: 'JSON'}],
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


export {
        overall_table,
        header,
        content,
        footer,
        scrollbar,
        toolbar
}
