import csvFileURL from './import.js' // improt data 
import {
    Table,

    n_row,
    mergeTypeOfHeading,
    mergeConfigsofHeading,
    heading_style,


    mergeTypeOfContent,
    mergeSubTypeOfContent,
    mergeConfigsOfContent,
    content_style
} from './configs.js'


// ------------------------------------------------ Functionality --------------------------------------------------------------------------------------------


$(document).ready(function () {

    // 1. Defind the related function for this project


    // 1.1 Define function for doing mergeCells on row and column with condition
    function mergeCells(grid, data, heading_options, content_options ,refresh) {
            var mc = []

            // ------------------ Create Heading of table (merged) ----------------------------
            var headingOptions = heading_options
            var contentOptions = content_options
            var Data = data.slice(headingOptions.initialIndex, data.length)
            var CM = Data[0].map((_, index) => ({ dataIndx: index })), // ColModel based on your data
            i = CM.length,
            j = Data.length;
            

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
                                    mc.push({ r1: j, c1: i, rc: rc, cc: 1 });
                                rc = 1;
                                }
                            }
                                
                                j = Data.length; // Reset j for the next column
                            }

                        // Automatically merge columns based on row values for content
                        for (var r = 0; r < Data.length; r++) {
                            var rc = 1,
                                c = CM.length;

                            while (c--) {
                                var cd = Data[r][CM[c].dataIndx],
                                    cd_prev = Data[r][CM[c - 1] ? CM[c - 1].dataIndx : undefined];
                                
                                if (cd_prev !== undefined && cd == cd_prev) {
                                    rc++;
                                } else if (rc > 1) {
                                    mc.push({ r1: r, c1: c, rc: 1, cc: rc });
                                    rc = 1;
                                }
                            }
                        }
     
            
            for (var i = 0; i < headingOptions.mergeConfigs.length; i++) {
                    var config = headingOptions.mergeConfigs[i];
                    var mergeObj = {
                        r1: config.r1, // Row index
                        c1: config.c1, // Column index
                        rc: config.rc, // Rowspan or row count
                        cc: config.cc // Colspan or column count
                    };
        
                if (config.rc > 1) {
                    mc.push({ r1: mergeObj.r1, c1: mergeObj.c1, rc: mergeObj.rc, cc: 1 });
                }
                if (config.cc > 1) {
                    mc.push({ r1: mergeObj.r1, c1: mergeObj.c1, rc: 1, cc: mergeObj.cc });
                    }
            }

            let heading_mc = mc.filter(obj => obj.r1 >= 0 && obj.r1 <= n_row-1)
                                .sort((obj1, obj2) => {
                                        if (obj1.r1 !== obj2    .r1) {
                                            return obj1.r1 - obj2.r1; // Sort by r1 in ascending order
                                        } else {
                                            return obj1.c1 - obj2.c1; // If r1 values are equal, sort by c1 in ascending order
                                        }});
            let content_mc = mc.filter(item => !heading_mc.includes(item))
                                .sort((obj1, obj2) => {
                                        if (obj1.r1 !== obj2.r1) {
                                            return obj1.r1 - obj2.r1; // Sort by r1 in ascending order
                                        } else {
                                            return obj1.c1 - obj2.c1; // If r1 values are equal, sort by c1 in ascending order
                                        }});

            let r_heading_mc = []
            let r_content_mc = []

            //------------------------------ Heading -----------------------------------
            if(headingOptions.mergeType === 'auto' && headingOptions.mergeConfigs.length === 0){
                r_heading_mc = heading_mc
            }else if(headingOptions.mergeType === 'specific' && headingOptions.mergeConfigs.length !== 0){c
                r_heading_mc = headingOptions.mergeConfigs
            }

            // --------------------------- Content ---------------------------------------
            if(contentOptions.mergeType === 'auto'){
                
                if(contentOptions.mergeSubType === 'all' && contentOptions.mergeConfigs.length === 0){
                    r_content_mc = content_mc
                }
                if(contentOptions.mergeSubType === 'col' && contentOptions.mergeConfigs.length ===0){
                    r_content_mc = content_mc.filter(obj => obj.cc === 1)
                }else if(contentOptions.mergeSubType === 'specific_col' && contentOptions.mergeConfigs.length !== 0){
                    r_content_mc = content_mc.filter((item, index) => contentOptions.mergeConfigs.includes(item.c1))
                }
            }
            else if(contentOptions.mergeType === 'specific'){
                r_content_mc = contentOptions.mergeConfigs
            }
        
                            

        const r_mc = r_heading_mc.concat(r_content_mc)
        grid.option("mergeCells", r_mc);
        if (refresh) {
            grid.refreshView();
        }
    }


    // -------------------------------------------------------------------------------------------------------------------------------------

    // 1.2 Define function for styling table

    function stylingModifiedTable(data, options){



        const stylingHeadingIndex = {init: 0, final: n_row - 1}
        const stylingHeading = options.heading_style

        const stylingContentIndex = {init:  (n_row - 1) + 1, final: data.length}
        const stylingContent = options.content_style   

        // ------------------------------- Heading -------------------------------- 

        for(let i = stylingHeadingIndex.init; i < stylingHeadingIndex.final+1 ; i++)
        {
            var body_row = $('[id^="pq-body-row-u0-' + i + '"]');
            body_row.addClass('row-' + i)
        }

        // Change the configs of font of heading
        for (let i = stylingHeadingIndex.init; i < stylingHeadingIndex.final+1; i++) {
            var heading_row_style = $('.row-' + i);
            var classToCheck = 'row-' + i;
            var body_row = $('[id^="pq-body-row-u0-' + i + '"]');
            var hasClass = body_row.hasClass(classToCheck);

            if (hasClass) {
                heading_row_style.css({
                    'font-size': stylingHeading.font_size,
                    'font-weight': stylingHeading.font_weight,
                });
                console.log(heading_row_style.html())

                const stylingBackgroundColors = stylingHeading.background_color[i];

                if(stylingHeading.background_type === 'specific'){
                    if(stylingHeading.background_color === n_row)
                        for (let j = 0; j < stylingBackgroundColors.length; j++) {
                            const newClass = 'row-' + i + '-' + j;
                            const cellIndex = stylingBackgroundColors[j].index;
                            const backgroundColor = stylingBackgroundColors[j].color;
                            
                            // Select only the cell within the same row
                            const pq_grid_cell = body_row.find('.pq-grid-cell:eq(' + cellIndex + ')');
                            pq_grid_cell.addClass(newClass);
                            
                            // Apply the background color style
                            pq_grid_cell.css('background-color', backgroundColor);
                        }else{
                            for (let j = 0; j < data[0].length; j++) {
                                console.log(i)
                                console.log(j)
                                const newClass = 'row-' + i + '-' + j;
                                
                                // Select only the cell within the same row
                                const pq_grid_cell = body_row.find('.pq-grid-cell:eq(' + j + ')');
                                pq_grid_cell.addClass(newClass);
                                
                                // Apply the background color style
                                if(n_row %2 != 0)
                                {
                                    pq_grid_cell.css('background-color', stylingContent.row_odd_color);
                                }else{
                                    pq_grid_cell.css('background-color', stylingContent.row_even_color);
                                }
                            }
                        }
                }else if(stylingHeading.background_type === 'all'){
                    for (let j = 0; j < data[0].length; j++) {
                        console.log(i)
                        console.log(j)
                        const newClass = 'row-' + i + '-' + j;
                        
                        // Select only the cell within the same row
                        const pq_grid_cell = body_row.find('.pq-grid-cell:eq(' + j + ')');
                        pq_grid_cell.addClass(newClass);
                        
                        // Apply the background color style
                        pq_grid_cell.css('background-color', stylingHeading.background_color);
                    }
                }


            }
            
            
        }

        $('#background').css('width', $('.pq-grid-center').width())


        if(n_row >= 1)
        {

            if(n_row == 1)
            {
                if(options.main.cell_height == 1)
                {
                    $('#background').css('height', String(37*n_row + 8) + 'px')
                }
                else if(options.main.cell_height == 2)
                {
                    $('#background').css('height', String((45*n_row + 4.7) + 'px'))
                }
                else if(options.main.cell_height >= 3){ 
                    for(let i =0 ; i < options.main.cell_height ; i++)
                    {
                        $('#background').css('height', String((55 + 10*i)*n_row - 15) + 'px')
                    }
                }
            }
            else if(n_row == 2){
                if(options.main.cell_height == 1)
                {
                    $('#background').css('height', String(37*n_row + 13.5) + 'px')
                }
                else if(options.main.cell_height == 2)
                {
                    $('#background').css('height', String((45*n_row + 4.9) + 'px'))
                }
                else if(options.main.cell_height >= 3){ 
                    for(let i =0 ; i < options.main.cell_height ; i++)
                    {
                        $('#background').css('height', String((55 + 10*i)*n_row - 35) + 'px')
                    }
                }
            }
            else if(n_row >= 2){
                if(options.main.cell_height == 1)
                {
                    $('#background').css('height', String(37*n_row + 17) + 'px')
                }
                else if(options.main.cell_height == 2)
                {
                    $('#background').css('height', String((45*n_row + 4.9) + 'px'))
                }
                else if(options.main.cell_height >= 3){ 
                    for(let i =0 ; i < options.main.cell_height ; i++)
                    {
                        $('#background').css('height', String((55 + 10*i)*n_row - 55) + 'px')
                    }
                }
            }
        }



        $('#background').css('background-color', Table.border_color);

        if(n_row >= data.length){
            $('#background').remove()
        }


        if(data.length <= 15){
            $('.table').css('height', String(79*data.length) + 'px')
        }


        // ------------------------------------------------------------------------
    

        
        // ------------------------------- Content --------------------------------  

        for(let i = stylingContentIndex.init; i <= stylingContentIndex.final ; i++)
        {

            var body_row = $('[id^="pq-body-row-u0-' + i + '"]');
            // Clear existing classes before adding the new class
            body_row.removeClass('row-1');
            
            // Add the appropriate class for the Content section
            if (i >= stylingContentIndex.init) {
                body_row.addClass('row-' + i);
            }
            

        }


        // Change the configs of content
        for (let i = (n_row); i < stylingContentIndex.final; i++) {
            var classToCheck = 'row-' + i;
            var body_row = $('[id^="pq-body-row-u0-' + i + '"]');
            var hasClass = body_row.hasClass(classToCheck);
            if(hasClass){

                    for(let j = -1; j < data[0].length ; j++){
                        var body_cell = $('[id^="pq-body-cell-u0-' + i + '-' + j + '"]');
                        if(j >=0)
                        {
                            body_cell.css({
                                'font-weight': stylingContent.font_weight, 
                                'font-size':   stylingContent.font_size});
                        }
                            if(body_cell.hasClass('row-'+ 1 + '-'+ j) && body_cell.hasClass('pq-merge-cell')){
                                if(i%2 == 0){
                                    body_cell.css('background-color',stylingContent.row_even_color)
                                }else{
                                    body_cell.css('background-color',stylingContent.row_odd_color)
                                }
                            }
                        }

            

            // even = yellow
            // odd = green
            if (n_row >= 2){
                $('.row-' + n_row).css('background',stylingContent.row_even_color)
                for(let j = n_row + 1; j <stylingContentIndex.final; j++){
                    if(n_row %2 == 0){
                        if(j%2 == 0)
                        {   
                            $('.row-' + j).css('background',stylingContent.row_even_color)
                        }else{
                            $('.row-' + j).css('background',stylingContent.row_odd_color)
                        }
                    }
                    else{
                        if(j%2 == 0)
                        {   
                            $('.row-' + j).css('background',stylingContent.row_odd_color)
                        }else{
                            $('.row-' + j).css('background',stylingContent.row_even_color)
                        }
                    }
                }
            }else if(n_row == 1){
                    $('.row-' + 1).css('background',stylingContent.row_even_color) 
                    for(let j=2; j < stylingContentIndex.final; j++){
                        if(j % 2 == 0)
                        {
                            $('[id^="pq-body-row-u0-' + j + '"]').css('background',stylingContent.row_odd_color)
                        }else{
                            $('[id^="pq-body-row-u0-' + j + '"]').css('background',stylingContent.row_even_color)
                        }
                    }
            }
        
        





                    // Check for merged-cell class inside the row
                    var mergedCells = body_row.find('.pq-merge-cell');

                    mergedCells.each(function() {
                        var elementId = $(this).attr('id');

                        // Extract iIndex and jIndex from elementId
                        var indices = elementId.match(/\d+/g);
                        var iIndex = parseInt(indices[1]);
                        var jIndex = parseInt(indices[2]);

                        if (stylingContent.merged_cell_color_type === 'all') {
                                $(this).css('background-color', stylingContent.merged_cell_color);
                        }
                        else if(stylingContent.merged_cell_color_type == 'col'){
                            for (let config of stylingContent.merged_cell_color) {
                                var columnIndex = config.c1;
                                var color = config.color;

                                if (jIndex === columnIndex) {
                                        $(this).css('background-color', color);
                                    }
                                }
                        } 


                    });

                    
                                                           
            }
        }   

        var k = 10;
        for (k; k < data.length; k++) {
            var body_row = $('.row-' + k);
            body_row.css('font-weight', 'normal');
        
            for (let j = 0; j < data[0].length; j++) {
                var body_cell = $('[id^="pq-body-cell-u0-' + k + '-' + j + '"]');
                if (!body_cell.hasClass('pq-merge-cell')) {
                    body_cell.css('background-color', 'transparent');
                }
            }
        }




        // ---------------------------------------------------------------------------

        // Change the color of border of table

        const stylingBorderTable = options.main
        const stylingBorderTableColor = stylingBorderTable.border_size + ' solid ' + stylingBorderTable.border_color
        const outerBorderTable = $('.pq-td-border-top').css('border', '4px solid grey');
        const innerBorderTable1 = $('.pq-td-border-right > .pq-grid-row > .pq-grid-cell').css('border-right', '4px solid grey');
        const innerBorderTable2 = $('.pq-td-border-top > .pq-grid-row > .pq-grid-cell, .pq-cont-inner > .pq-td-border-top > .pq-grid-row').css('border-bottom', '4px solid grey');
        outerBorderTable.css('border', stylingBorderTableColor)
        innerBorderTable1.css('border-right', stylingBorderTableColor)
        innerBorderTable2.css('border-bottom', stylingBorderTableColor)
        if(data.length >= 16)
        {
            if(options.main.scrollBar === true)
            {
                $('.pq-body-outer').css('border', stylingBorderTableColor)
            }
            $('.pq-theme').css('border-color', 'transparent')
            $('.table').css('background-color','transparent')
        }else{
            $('.pq-theme').css('border-color', 'transparent')
            
            options.main.scrollBar = false
        }


        
        // ---------------------------- Additional styling ----------------------------

        const titleBar1 = $('.pq-grid-header-table')
        const fullscreenButton = $('.ui-icon-arrow-4-diag')
        const minimizedscreenButton = $('.ui-icon-circle-triangle-n')
        const titleBar2 = $('.pq-grid-header-table')
        const titleBar3 = $('.ui-widget-header')
        const contentIndexBar = $('.pq-header-outer')
        const waterMarkLogo = $('div[style="position:fixed;bottom:0;right:25px;padding:0 2px;margin:0;opacity:0.5;z-index:10000;border:1px solid lightgray;border-radius:5px;pointer-events:none;"]')
        const AdditionalElement = [titleBar1, fullscreenButton, minimizedscreenButton, titleBar2, titleBar3, contentIndexBar, waterMarkLogo]

        AdditionalElement.forEach((element) => element.remove())

        // ----------------------------------------------------------------------------
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // 1.3 Define function for creating table

    function createModifiedTable(data, options, styling_options){ 

        var obj = {
            width: 'flex',
            height: (data.length <= 14 || stylingOptions.main.scrollBar === false)  ? 'flex' : 'auto',
            editable: false,
            freezeRows:  stylingOptions.main.scrollBar == true ? n_row : 0, 
            flex: {one: false, on: true},
            rowHt: 25+ 10*stylingOptions.main.cell_height,
            //sortModel: { sorter: [{ dataIndx: "Product", dir: 'up' }], space: true },
            selectionModel: { column: true },
            numberCell: { show: false },
            dataModel: { data: data},
            columnTemplate: {
                align: 'center', valign: 'center'
            },
        };



        // Create the grid
        var grid = pq.grid("#automerged-modified-table", obj).on("refresh refreshCell", function (evt, ui) {
            if (ui.source != 'flex') {
                this.flex();
            }
        });


        mergeCells(grid, data, options.heading_options, options.content_options, true);
        stylingModifiedTable(data, styling_options);
        var debounceTimeout;

        $('.pq-body-outer').on('mousewheel', function(ev) {
          clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(function() {
            stylingModifiedTable(data, styling_options);
          }, 100); // Adjust the debounce interval as needed 
          if(Table.scrollBar == true){
            $('.pq-grid-row.pq-striped').css('background-color', styling_options.content_style.row_odd_color); 
          }
        });
 
    }


    const headingOptions = {numRowHeading: n_row - 1, mergeType: mergeTypeOfHeading, mergeConfigs: mergeConfigsofHeading}
    const contentOptions = {mergeType: mergeTypeOfContent, mergeSubType: mergeSubTypeOfContent , mergeConfigs: mergeConfigsOfContent}

    const Options = {heading_options: headingOptions, content_options: contentOptions}
    const stylingOptions = {
        main: Table,
        heading_style: heading_style,
        content_style: content_style,
    
    }

    fetch(csvFileURL)
    .then(response => response.text())
    .then(csvText => {
        const csvRows = csvText.split('\n');
        const csvData = csvRows.map(row => row.split(',').map((cell, index, array) => (index === array.length - 1) ? cell.replace('\r', '') : cell));
        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i][csvData[i].length - 1] === '') {
                csvData[i].pop();
            }
        }

        if(!csvFileURL.startsWith('./',0)){
            csvData.pop()
        }
        
        createModifiedTable(csvData, Options, stylingOptions)
    })
    .catch(error => {
        console.error('Error fetching or parsing CSV file:', error);
    });


});
