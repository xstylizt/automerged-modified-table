import data from './import_data.js'
import {
    n_row,
    isPaging,
    rPPOptions
} from './configs.js'

$(document).ready(function(){ 

    // ------------------ Define function for merging header of table ----------------------------
        const mergeCellsHeadingTable = (data) => {
            var mc = []
            var notMergedArray = []
            var Data = data.slice(0, 3)
            var CM = Data[0].map((_, index) => ({ dataIndx: index })),
            i = CM.length,
            j = Data.length;

            // Automatically merge columns based on row values for content
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
        
    
                
            let heading_mc = mc.    sort((a, b) => {
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

            heading_mc.forEach(item => {
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
        const real_heading_mc = basedArray.concat(real_componentArray)
        const filtered = notMergedArray.filter(objMerged => !real_heading_mc.some(objHeading => objHeading.cellValue === objMerged.cellvalue)).concat(real_heading_mc).sort((a,b) => { if (a.r1 !== b.r1) {return a.r1 - b.r1;} else {return a.c1 - b.c1;}})
        return filtered;
    }


// --------------------------------- Define function for styling table ----------------------------------------
    const stylingTable = (grid) =>{

            // -------------------------------- Header Style ---------------------------------------------------------


            // ------------------------------- Content Style ----------------------------------------------------------


            // ---------------------------- Delete refresh button of paramquery grid table ----------------------------
            var refreshButton = $('.pq-page-placeholder + .pq-ui-button')
            refreshButton.remove()
    }

    var raw_data = data
    var obj = {
        resizable: false,
        dragColumns: { enabled: false },
        draggable: false,
        minWidth: 300,
        height:  isPaging === false ||  data.length <=10 ? 'flex': 650,
        editable: false,
        sortModel: false,
        numberCell: {show: false},
        scrollModel: { autoFit: true},
        flex: {one: true},
        mergeCells: [],
        dataModel: { data: raw_data.slice(n_row, ) },
        columnTemplate: { align: 'center', valign: 'center' },
        pageModel: { type: "local", rPP: rPPOptions[0] ,strRpp: "{0}", strDisplay: `{0} to {1} of {2}`, rPPOptions: rPPOptions},
    }
    
    if(!isPaging){
        obj.flex = false;
    }

    if(raw_data.length <= 10 || isPaging === false){
        obj.pageModel = '';
    }

    // ------------------------- Create Main Title -------------------------------------
    var headingArrayObject = mergeCellsHeadingTable(raw_data);
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



    
    // ------------------------ Paramquery ColModel -------------------------------------
    var colModel = [
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

     obj.colModel = colModel;

    // ----------------------- Call the Paramquery Grid table ----------------------------------------


    var grid = pq.grid("#automerged-modified-table", obj);

    // ---------------------- Call the styling table function ----------------------------------------
     stylingTable(grid);
});    

