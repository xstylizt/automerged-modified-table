// Styling the attribute of table (overall) 

const Table = {
    width: '2350px',
    cell_height: 5,
    border_color: '#51abcb',
    border_size: "2.5px",
    scrollBar: true
}


// -----------------------------------------------------------------------------------------------------------------------------------------

// Define row of heading and styling heading

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

// ----------------------------------------------------------------------------------------------------------------------------------------

// Styling content of table

const mergeTypeOfContent = "auto"; 
const mergeSubTypeOfContent = 'specific_col';  // auto --> all กับ col กับ specific_col
const mergeConfigsOfContent = [3]; 

const content_style = {
    font_size: '25px',
    row_even_color: "#D8F2FF",
    row_odd_color: "white",
    merged_cell_color_type: "default", // default กับ col
    merged_cell_color:  ""
}

// ---------------------------------------------------------------------------------------------------------------------------------------------s


export {
    Table,

    n_row,
    mergeTypeOfHeading, 
    mergeConfigsofHeading,
    heading_style,


    mergeTypeOfContent,
    mergeSubTypeOfContent,
    mergeConfigsOfContent,
    content_style
}
