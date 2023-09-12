import data from './import_data.js'
import {
    overall_table,
    header,
    content,
    footer,
    scrollbar
} from './configs.js'

$(document).ready(function(){ 

    // ##------------------ Import data --------------------------------------------------------------##
    const importData = (data) => {
        return data
    }

    // ##------------------ Create main title --------------------------------------------------------##
    const createMainTitle = () => {
        // ------------------------- Create Main Title -------------------------------------
        var raw_data = importData(data)
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
            titleMainParamStructure.title = titleMain[j].cellValue;
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

        console.log(groupedTitleAndSubTitleArray)

        const colModel_result = [
            {title: 'Employee information', 
             colModel: [
                          {title: 'Id', align: 'center'},
                          {title: 'First name', align: 'center'},
                          {title: 'Last name', align: 'center'},
                       ],
              align: 'center'
            },
         
         
            {title: 'Section',
             colModel: [],
             align: 'center'
            },
         
         
            {title: 'Role',
             colModel: [],
             align: 'center'
            },
         
         
            {title: 'Skill',
             colModel: [
                            {title: 'Frontend framework',
                             colModel: [
                                          {title: 'React', align: 'center'},
                                          {title: 'Angular', align: 'center'},
                                          {title: 'Vue', align: 'center'},
                                          {title: 'Svelt', align: 'center'}
                                       ],
                              align: 'center'
                            },
                            {title: 'Backend framework',
                             colModel: [
                                          {title: 'Springboot', align: 'center'},
                                          {title: 'Django', align: 'center'},
                                          {title: 'Express.js', align: 'center'},
                                          {title: 'Laravel', align: 'center'}
                                       ],
                              align: 'center'
                            }
                       ],
              align: 'center'
            }
         ] 
         return colModel_result
    }


    // ##------------------ Create colModel (Headwer title) of table --------------------------------##
    const colModelTitle = (object) => {
        var colModel = createMainTitle();
        object.colModel = colModel;
    }

    // ##----------------- Define function for merging header of table -------------------------------##
    const mergeCellsAutoTable = (conditions) => {
        var raw_data = importData(data)
        var mc = []
        var notMergedArray = []
        if(conditions == 'header'){
            var Data = raw_data.slice(0, header.row)
        }else if(conditions == 'content'){
            var Data = raw_data.slice(3, )
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
                    mc.push({cellValue: cd, r1: r, c1: c, rc: 1, cc: rc });
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
                     mc.push({cellValue: cd, r1: j, c1: i, rc: rc, cc: 1 });
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

        console.log(sort_mc)

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
                currentObj.cellValue === nextObj.cellValue
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
                basedArray[i].cellValue === componentArray[j].cellValue){
                    for(var k=0; k < basedArray[i].cc ; k++){
                        temp.push({cellValue: basedArray[i].cellValue,r1: basedArray[i].r1, c1: basedArray[i].c1 + k, rc: basedArray[i].rc, cc: 1})
                        }
                }
            }
        } 

        const real_componentArray = componentArray.filter(itemA => !temp.some(itemB => Object.keys(itemA).every(key => itemA[key] == itemB[key])))
        const real_mc = basedArray.concat(real_componentArray)
        const filtered = notMergedArray.filter(objMerged => !real_mc.some(objHeading => objHeading.cellValue === objMerged.cellvalue)).concat(real_mc).sort((a,b) => { if (a.r1 !== b.r1) {return a.r1 - b.r1;} else {return a.c1 - b.c1;}})
        return filtered;
    }

    // ##----------------- Define function for merging content of table -------------------------------##
    const mergeCellsContentTable = (grid_style) => {
          var real_mergedContentArray = [];
          var mergedContentArray = [];
          var contentData = importData(data).slice(header.n_row, );
          var CMContent = contentData[0].map((_, index) => ({dataIndx: index}));
          var i = CMContent.length;
          var j = contentData.length;
          
          /*
          // ------------ merge columns based on row value fot content ----------------
          for (var r = 0; r < contentData.length; r++) {
            var rc = 1,
            c = CMContent.length;

            while (c--) {
                var cd = contentData[r][CMContent[c].dataIndx]
                var cd_prev = contentData[r][CMContent[c - 1] ? CMContent[c - 1].dataIndx : undefined];

                if (cd_prev !== undefined && cd == cd_prev) {
                    rc++;
                } else if (rc > 1) {
                    mergedContentArray.push({cellValue: cd, r1: r, c1: c, rc: 1, cc: rc });
                    rc = 1;
                }
            }
        }
        */

        // ----------- merge rows based on column value for content ------------------
        if(grid_style.content.mergedCells.type === 'not_auto' && grid_style.content.mergedCells.configs.length === 0){
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
                        mergedContentArray.push({cellValue: cd, r1: j, c1: i, rc: rc, cc: 1 });
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
                            real_mergedContentObject.style = 'background-color: ' + grid_style.content.mergedCells.configs[j].color
                            temp.push(real_mergedContentObject)
                        }
                    }
                }
            }else{
            }
        }else if(grid_style.content.mergedCells.type === 'specific' && grid_style.content.mergedCells.configs.length >= 0){
            real_mergedContentArray = grid_style.content.mergedCells.configs
        }

        return real_mergedContentArray
    }





    // ##----------------- Define function for retreving pqGrid object ---------------------------------##
    const pqGridObject = (data, style) =>{
        var grid_style = {
            overall_table: style.overall_table,
            header: style.header,
            content: style.content,
            footer: style.footer,
            scrollbar: style.scrollbar
        }
        var grid_object = {
                            resizable: false,
                            dragColumns: { enabled: false },
                            draggable: false,
                            width: grid_style.overall_table.width,
                            minWidth: grid_style.overall_table.min_width,
                            height:  grid_style.overall_table.isScrolling === false ||  (data.length - grid_style.header.n_row) <=10 ? 'flex': grid_style.overall_table.height,
                            editable: false,
                            sortModel: false,
                            freezeRows: grid_style.content.numberFreezeRows,
                            freezeCols: grid_style.content.numberFreezeCols,
                            numberCell: {show: false},
                            scrollModel: { autoFit: true},
                            flex: {one: true},
                            mergeCells: mergeCellsContentTable(grid_style),
                            dataModel: { data: data.slice(grid_style.header.n_row, ) },
                            columnTemplate: { align: 'center', valign: 'center' },
                            pageModel: { type: "local", rPP: grid_style.footer.rPPOptions[0] ,strRpp: "{0}", strDisplay: `{0} to {1} of {2}`, rPPOptions: grid_style.footer.rPPOptions},
                            refresh: function(event,ui){    
                                stylingTable(grid_style)
                            }
                        }
        return grid_object
    }

    // ##------------------------------ Define function for styling table --------------------------------##
    const stylingTable = (grid_style) =>{
        // ---------------- ## Style overall of table --------------------------------------------
        var headerBorder = $('.pq-grid-col')
        var contentBorder = $('.pq-grid-cell')
        const borderArray = [headerBorder, contentBorder]
        $.each(borderArray, function(index,element){
                element.css('border', grid_style.overall_table.inner_border)
        })

        var tableBorder = $('#automerged-modified-table')
        tableBorder.css('border', grid_style.overall_table.outer_border)

        // ---------------------------------------------------------------------------------------

        // ----------------- ## Style header of table --------------------------------------------

        var pqTableDiv = $('.pq-td-div')
        var pqGridHeaderOuter = $('.pq-header-outer')

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

        

        if(!overall_table.isScrolling){
            pqGridHeaderOuter.css('height', grid_style.header.style.height)

        }
                    
        pqGridUiButtonFooter.on('mouseenter',function(){
            $('.pq-ui-button').css('border-color', grid_style.footer.additional_style.buttonHoverBorder_color)
        })

        // ----------------------------## Styling scrollbar ---------------------------------------
        var pqVerticalScrollbar = $('.pq-sb-vert-t .pq-sb-slider')
        var pqHorizontalScrollbar = $('.pq-sb-horiz-t .pq-sb-slider')
        var pqTriangleButton = $('.pq-sb-btn')
        pqVerticalScrollbar.css({
                    'background': grid_style.scrollbar.verticalScrollbar_style.background_color,
                    'border-color': grid_style.scrollbar.verticalScrollbar_style.border_color
        })

        pqHorizontalScrollbar.css({
                    'background': grid_style.scrollbar.horizontalScrollbar_style.background_color,
                    'border-color': grid_style.scrollbar.horizontalScrollbar_style.border_color
        })

        pqTriangleButton.css({
                    'background':   grid_style.scrollbar.uiTriangleButton_style.background_color,
                    'border-color': grid_style.scrollbar.uiTriangleButton_style.border_color
        })

        // ----------------------------## Additional style ----------------------------------------
        var refreshButton = $('.pq-page-placeholder + .pq-ui-button')
        refreshButton.remove()


        if((data.length - grid_style.header.n_row) <= footer.rPPOptions[0] || overall_table.isPaging === false){
            $('.pq-grid-bottom').remove()
        }
    }



    // ##------------------------------ Create Table function ------------------------------------------------------
    const createPQGridTable = () => {
        var raw_data = importData(data)
        var style = {
            overall_table: overall_table,
            header: header,
            content: content,
            footer: footer,
            scrollbar: scrollbar
        }
        var obj = pqGridObject(raw_data, style)


        if(style.overall_table.isPaging === false && style.overall_table.isScrolling === false) {
            obj.pageModel = ''
        }
        
        if((data.length - style.header.n_row) <= footer.rPPOptions[0]){
            obj.width = '100%';

            if(overall_table.isScrolling === true || overall_table.isPaging === true){
                overall_table.isScrolling = false;
                overall_table.isPaging = false;
            }
        }


        colModelTitle(obj)
        var grid = pq.grid("#automerged-modified-table", obj);
    }

// --------------------------------------------- Recall all function with ------------------------------------------------------------


    createMainTitle();
    createPQGridTable();

});    

