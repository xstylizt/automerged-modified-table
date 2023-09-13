// ## Style about overall table
var overall_table = {
    width: 'auto',
    min_width: 300,
    height: 650,
    outer_border: '1.8px solid #afd3f2',
    inner_border: '1.2px solid #afd3f2',
    isScrolling: false,
    isPaging: true,
}


// # Style about header table
var header = {
    n_row: 3,
    style: {
        staticHeight: '120px',
        resizedWindow: {
            resizedWindowWidth: 760,
            horizontalResizedHeight: '170px'
        },
        background: 'linear-gradient(#fefefe, #dae6f0)',
        padding: '8px 0 8px 0',
        font_size: '18px',
        font_weight: 'bold',
        font_color: 'black'

    },
    mergedCells: {
            type: '' ,    // auto || specific
            configs: ''  
    }
}


// # Style about content table
var content = {
    style: {

        odd_row_background: '#e6f4ff',
        even_row_background: '#ffffff',
        padding: '12px 0 12px 0',
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


// # Paging bar (footer)
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
        selectPageBoxBorder_color: '#83abcd',

    }
}

var scrollbar = {

    verticalScrollbar_style: {

        background_color: '#dae6f0',
        border_color: '#83abcd'

    },
    horizontalScrollbar_style: {

        background_color: '#dae6f0',
        border_color: '#83abcd'
    },

    uiTriangleButton_style: {

        background_color: '#dae6f0',
        border_color: '#83abcd'
    }
}

export {
        overall_table,
        header,
        content,
        footer,
        scrollbar
}