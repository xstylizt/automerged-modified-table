import data from './import_data.js'
import {
    overall_table,
    header,
    content,
    footer,
    scrollbar,
} from './configs.js'

$(document).ready(function(){ 

    
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
    const createColModel = () => {
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
            console.log(specificHeaderMergeConfigs)
             
        }

         return colModel_result
    }




    // ##----------------- Define function for merging header of table -------------------------------##
    const mergeCellsAutoTable = (conditions) => {
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
    const mergeCellsContentTable = (grid_style) => {
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

    var setInitialCountRender = 0
    // ##------------------------------ Define function for styling table --------------------------------##
    const stylingTable = (grid_style) =>{
        // ---------------- ## Style overall of table --------------------------------------------
        var headerBorder = $('.pq-grid-col')
        var contentBorder = $('.pq-grid-cell')
        const borderArray = [headerBorder, contentBorder]
        $.each(borderArray, function(index,element){
                element.css('border', grid_style.overall_table.inner_border)
        })

        var tableBorder = $('.pq-grid-center')
        tableBorder.css('border', grid_style.overall_table.outer_border)

        // ---------------------------------------------------------------------------------------

        // ----------------- ## Style header of table --------------------------------------------

        var pqTableDiv = $('.pq-td-div')
        var pqGridHeaderOuter = $('.pq-header-outer')
        var pqGridHeaderTable = $('.pq-grid-header-table')

        pqTableDiv.css({
                'padding': grid_style.header.style.padding ,
                'font-size': grid_style.header.style.font_size,
                'font-weight': grid_style.header.style.font_weight,
                'color': grid_style.header.style.font_color,
        }) 

        // Style background color of header
        var pqGridHeader = $('.pq-grid-header')
        pqGridHeader.css({
                'background': grid_style.header.style.background
        })

        
        // ---------------------------------------------------------------------------------------

        // ----------------- ## Style content of table -------------------------------------------

        // Padding with each cell in content 
        var pqGridContentCell = $('.pq-grid-cell');
        pqGridContentCell.css({
                'padding': grid_style.content.style.padding,
                'font-size': grid_style.content.style.font_size,
                'font-weight': grid_style.content.style.font_weight,
                'color': grid_style.content.style.font_color
        });

        var oddRow = $('tr.pq-grid-oddRow').removeClass('pq-grid-row');
        var evenRow = $('.pq-grid-row').addClass('pq-grid-evenRow').removeClass('pq-grid-row');

        // Style odd/even row of content

        oddRow.css({
            'background': grid_style.content.style.odd_row_background
        });

        evenRow.css({
            'background': grid_style.content.style.even_row_background
        })

        // ----------------------------------------------------------------------------------------

        //  -------------- ## Style footer of table -----------------------------------------------

        var pqGridFooter = $('.pq-grid-bottom')
        var pqGridUiButtonFooter = $('.pq-ui-button')
        var pqSeparatorLine = $('.pq-separator')
        var pqInsertPageBox = $('.pq-pager-input')
        var pqSelectPageBox = $('select.ui-corner-all')


        pqGridFooter.css({
                          'display': 'flex',
                          'flex-direction': 'row-reverse',
                          'flex-wrap': 'wrap-reverse',
                          'align-items': 'center',
                          'justify-content': 'space-between',
                          'padding': grid_style.footer.style.padding,
                          'font-size': grid_style.footer.style.font_size,
                          'font-weight': grid_style.footer.style.font_weight,
                          'color': grid_style.footer.style.font_color,
                          'background': grid_style.footer.style.background_color
        })

        pqInsertPageBox.css({
                         'border-color': grid_style.footer.additional_style.insertPageBoxBorder_color
        })

        pqSelectPageBox.css({
                         'border-color': grid_style.footer.additional_style.selectPageBoxBorder_color
        })

        pqSeparatorLine.css({
                         'border-color': grid_style.footer.additional_style.separator_color
        })

        
        
        if(overall_table.isScrollBar === false){
            pqGridHeaderTable.css('height',  String(parseFloat(grid_style.header.style.header_type_height.height.replace('px',''))+ 3) + 'px')
        }


        
        if($(window).width() < 850){
            if(overall_table.isScrollBar === true)
            {
                    var mainTable = $('#automerged-modified-table')
                    pqGridHeaderOuter.removeAttr('style')
                    mainTable.css('height','auto')
                    pqGridHeaderOuter.css('height', String(parseFloat(grid_style.header.style.header_type_height.height.replace('px',''))+ 3) + 'px')
            }else if(overall_table.isScrollBar === false){
                    pqGridHeaderOuter.css('height', grid_style.header.style.header_type_height.height)
            }
        }

    

        if($(window).width() >= 850){
            if(overall_table.isScrollBar === false){
                var mainTable = $('#automerged-modified-table')
                pqGridHeaderOuter.css('height', header.style.header_type_height.height)
            }
            else if(overall_table.isScrollBar === true){
                var mainTable = $('#automerged-modified-table')
            }
        }

        


        pqGridUiButtonFooter.on('mouseenter',function(){
            $('.pq-ui-button').css('border-color', grid_style.footer.additional_style.buttonHoverBorder_color)
        })

        // ----------------------------## Styling scrollbar ---------------------------------------
        var pqVerticalScrollbar = $('.pq-sb-vert-t .pq-sb-slider')
        var pqHorizontalScrollbar = $('.pq-sb-horiz-t .pq-sb-slider')
        var pqBackgroundVerticalScrollbar = $('.pq-sb-vert-t')
        var pqBackgroundHorizontalScrollbar = $('.pq-sb-horiz')
        var pqTriangleButton = $('.pq-sb-btn')

        pqBackgroundHorizontalScrollbar.css('background', grid_style.scrollbar.elementBehindScrollBar.background_color)
        pqBackgroundVerticalScrollbar.css('background', grid_style.scrollbar.elementBehindScrollBar.background_color)

        pqVerticalScrollbar.css({
                    'background': grid_style.scrollbar.verticalScrollBar_style.background_color,
                    'border-color': grid_style.scrollbar.verticalScrollBar_style.border_color
        })

        pqHorizontalScrollbar.css({
                    'background': grid_style.scrollbar.horizontalScrollBar_style.background_color,
                    'border-color': grid_style.scrollbar.horizontalScrollBar_style.border_color
        })

        pqTriangleButton.css({
                    'background':   grid_style.scrollbar.uiTriangleButton_style.background_color,
                    'border-color': grid_style.scrollbar.uiTriangleButton_style.border_color
        })


        // ---------------------------## Toolbox style -------------------------------------------
        setInitialCountRender++;
        if(setInitialCountRender == 1){

            $('label, .ui-button').wrapAll('<div class="export-files-component"></div>')
            $('.filterValue, .filterColumn, .filterCondition').wrapAll('<div class="filter-component"></div>')
            $('.export-files-component').find('label').addClass('format-label')
            $('.format-label, .ui-button').wrapAll('<div class="format-component"></div>')
            $('.pq-grid-top').find('span').appendTo($('.export-files-component'))
            $('<span class="show-text">Show</span>').insertAfter('.format-component')
            $('<span class="entries-text">entries</span>').insertAfter('.page-options')
            $('.show-text, .page-options, .entries-text').wrapAll('<div class="page-options-component"></div>')
            $('<img class="search-icon" src="img/search-magnificant-icon.svg"/>').insertBefore($('.filterValue'));
            $('.search-icon, .filterValue').wrapAll('<div class="search-box"></div>')

            $('.ui-button').text('')
            $('.ui-button').append('<span class="export-button-component"></span>' + '<span class="export-text">Export</span>')
            $('.export-button-component').append('<img class="export-icon" src="img/download-icon.svg"/>')
            
            $('.export-icon').css({
                'height': '20px'
            })


            $('.pq-toolbar-search').css({
                'height': 'auto',
                'padding': '12px 0px 20px 0px',
                'display': 'flex',
                'flex-wrap': 'wrap',
                'gap': '10px',
                'align-items': 'center',
                'justify-content': 'space-between',
                'background': 'white'
            })


            $('.export-files-component').css({
                'display': 'flex',
                'align-items': 'center',
                'margin-left': '0px',
                'margin-right': '0px',
            })

            $('.format-label').css({
                'display': 'flex',
                'align-items': 'center'
            })

            $('.page-options-component').css({
                'display': 'flex',
                'align-items': 'center',
                'margin-left': '10px'
            })
            $('.show-text').css('margin-right', '10px')
            $('.page-options').css({
                'margin-right': '10px'
            })


            $('.filter-component').css({
                'display': 'flex',
                'align-items': 'center',
                'margin-left': '0px',
                'margin-right': '0px'
            })


            $('.search-box').css({
                'display': 'flex',
                'border': '1px solid #ccc',
                'border-radius': '4px',
                'margin-right': '10px'
            })


            $('.format-component').css({
                'display': 'flex',
                'align-items': 'center',
            })


            $('.format-label').css({
                'margin-right': '10px'
            })

            $('#export_format').css({
                'margin-left': '10px',
                'height': '40px'
            })


            $('.ui-button').css({
                'height': '40px',
                'margin-right': '10px'
            })

            $('.search-icon').css({
                'height': '30px',
                'margin': '5px 2px 5px 5px'
            })


            
            $('.filterValue').css({
                'height': '30px',
                'margin': '5px 5px 5px 0px',
                'outline': 'none',
                'border': 'none',
            })
            

            $('.filterValue').css({
                
            })



            $('.filterColumn').css({
                'margin-right': '10px',
                'height': '40px',
            })

            $('.filterCondition').css({
                'height': '40px',
            })

        }

        
        // ----------------------------## Additional style ----------------------------------------
        var refreshButton = $('.ui-icon-refresh')
        var pqGridTitle = $('.pq-grid-title')
        $('.pq-grid-bottom').find('.pq-page-placeholder').addClass('number-page')
        $('.export-files-component').find('.pq-separator, .ui-button-icon').remove()
        $('.ui-widget-content').css('border-color', 'transparent')
        pqGridTitle.remove()
        refreshButton.remove()


        if((data.length - grid_style.header.n_row) <= footer.rPPOptions[0] || overall_table.isPaging === false){
            $('.pq-grid-bottom').remove()
        }
    }


    function filterhandler(evt, ui) {
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

// --------------------------------------------- Recall all function ------------------------------------------------------------

    var grid_style = {
        overall_table: overall_table,
        header: header,
        content: content,
        footer: footer,
        scrollbar: scrollbar
    }
    
    var grid_object = {
                    resizable: false,
                    draggable: false,
                    dragColumns: false,
                    width: grid_style.overall_table.width.search('px') === -1 ? grid_style.overall_table.width: parseFloat( grid_style.overall_table.width.replace('px', '')),
                    height:  (grid_style.overall_table.isScrollBar === false)  ||  (data.length - grid_style.header.n_row) <=10 ? 'flex': parseFloat(grid_style.content.style.content_type_height.height.replace('px','')),
                    editable: false,
                    sortModel: false,
                    freezeRows: grid_style.content.numberFreezeRows,    
                    freezeCols: grid_style.content.numberFreezeCols,
                    scrollModel: {horizontal: true, autoFit: true},
                    numberCell: {show: false},
                    flex: {one: true},
                    colModel: createColModel(),
                    mergeCells: mergeCellsContentTable(grid_style),
                    dataModel: { data: data.slice(grid_style.header.n_row, ) },
                    columnTemplate: { align: 'center', valign: 'center' },
                    filterModel: { mode: 'OR'},
                    toolbar: {
                        cls: "pq-toolbar-search",
                        items: [          
                            {
                                type: 'select',
                                label: 'Format: ',                
                                attr: 'id="export_format"',
                                options: [{ xlsx: 'Excel', csv: 'CSV', htm: 'HTML', json: 'JSON'}]
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
                                listener: { keyup: filterhandler }
                            },
                            { 
                                type: 'select', cls: "filterColumn",
                                listener: filterhandler,
                                options: function (ui) {
                                    var CM = ui.colModel;
                                    var opts = [{ '': 'All'}];
                                    for (var i = 0; i < CM.length; i++) {
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
                                listener: filterhandler,
                                options: [
                                    { "begin": "Begins With" },
                                    { "contain": "Contains" },
                                    { "end": "Ends With" },
                                    { "notcontain": "Does not contain" },
                                    { "equal": "Equal To" },
                                    { "notequal": "Not Equal To" },
                                    { "empty": "Empty" },
                                    { "notempty": "Not Empty" },
                                    { "less": "Less Than" },
                                    { "great": "Great Than" },
                                ]
                            }
                        ]
                    },
                    pageModel: { type: "local", rPP: grid_style.footer.rPPOptions[0] ,strRpp: "{0}", strDisplay: `Showing {0} to {1} of {2} entries`, rPPOptions: grid_style.footer.rPPOptions},
                    refresh: function(event,ui){
                        stylingTable(grid_style)
                }
    }


    if(grid_style.overall_table.isScrollBar === false && grid_style.overall_table.isPaging === false) {
        grid_object.pageModel = ''
    }
    
    if((data.length - grid_style.header.n_row) <= footer.rPPOptions[0]){
        grid_object.width = '100%';
        grid_style.overall_table.isScrollBar = false
    }


    
    var $grid = $("#automerged-modified-table").pqGrid(grid_object);
});    

