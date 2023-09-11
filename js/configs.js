// ## Style about overall table
var overall_table = {
    width: 'auto',
    min_width: 300,
    height: 650,
    outer_border: '1.2px solid #afd3f2',
    inner_border: '1.5px solid #afd3f2',
}


// # Style about header table
var header = {
    n_row: 3,
    style: {
             background: 'linear-gradient(#fefefe, #dae6f0)',
             padding: '10px 0 10px 0',
             font_size: '20px',
             font_weight: 'bold',
             font_color: 'black'
    },
    mergedCells: {}
}


// # Style about content table
var content = {
    style: {
        odd_row_background: '#e6f4ff',
        even_row_background: '#ffffff',
        padding: '20px 0 20px 0',
        font_size: '18px',
        font_weight: '400',
        font_color: 'black'
    },
    mergedCells: {}
}


// # Paging bar (footer)
var footer = {
    isPaging: false,
    rPPOptions: [10,15,20,25,30,35,40,45,50]
}

export {
    overall_table,
    header,
    content,
    footer
}