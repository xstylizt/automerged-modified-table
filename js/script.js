import data from './import_data.js'

$(document).ready(function(){ 
    function mergeCells(grid, data, refresh) {
        var mc = []
        var real_mc;

        // ------------------ Create Heading of table (merged) ----------------------------
        var Data = data.slice(0, 3)
        var CM = Data[0].map((_, index) => ({ dataIndx: index })), // ColModel based on your data
        i = CM.length,
        j = Data.length;

        
        // Automatically merge columns based on row values for content
        for (var r = 0; r < Data.length; r++) {
                        var rc = 1,
                            c = CM.length;

                        while (c--) {
                            var cd = Data[r][CM[c].dataIndx]
                            var cd_prev = Data[r][CM[c - 1] ? CM[c - 1].dataIndx : undefined];
                            
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
      console.log(real_heading_mc)
      /*
      var newArray = [];
      for(var j=0; j < heading_config.pageNumber ; j++){
        for(var i=0; i < real_heading_mc.length ; i++){
            var newObj = {...real_heading_mc[i]};
            newObj.r1 += j*heading_config.numPp;
            newArray.push(newObj)
        }
      }
      console.log(real_heading_mc)
      */
      
      // --------------------------------------------- Content -----------------------------------------------------------
      
      /*
      var real_content_mc = [];
      var Data2 = data
      var CM2 = Data2[0].map((_, index) => ({ dataIndx: index })); // ColModel based on your data
      i = CM2.length,
      j = Data2.length;

     
     for (var r = n_row; r < Data2.length; r++) {
            var rc = 1,
                c = CM.length;

            while (c--) {
                var cd = Data2[r][CM[c].dataIndx]
                var cd_prev = Data2[r][CM[c - 1] ? CM[c - 1].dataIndx : undefined];
                
                if (cd_prev !== undefined && cd == cd_prev) {
                    rc++;
                } else if (rc > 1) {
                    real_content_mc.push({cellValue: cd, r1: r, c1: c, rc: 1, cc: rc });
                    rc = 1;
                }
            }
       }

       while (i--) {
        var dataIndx = CM2[i].dataIndx,
            rc = 1;
        
        while (j--) {   
            var cd = Data2[j][dataIndx],
            cd_prev = Data2[j - 1] ? Data2[j - 1][dataIndx] : undefined;
                    
            if (cd_prev !== undefined && cd == cd_prev) {
                rc++;
            }
            else if (rc > 1) {
                    real_content_mc.push({cellValue: cd, r1: j, c1: i, rc: rc, cc: 1 });
                rc = 1;
                }
            }
            j = Data2.length; // Reset j for the next column
        }*/

    real_mc = real_heading_mc/*.concat(real_content_mc.filter(bItem => !temp.some(tempItem =>
        bItem.cellValue === tempItem.cellValue &&
        bItem.r1 === tempItem.r1 &&
        bItem.c1 === tempItem.c1 &&
        bItem.rc === tempItem.rc &&
        bItem.cc === tempItem.cc
      )))*/

    grid.option("mergeCells", real_mc)
      if (refresh) {
        grid.refreshView();
    }
}

    const modified_data = data
    var n_row = 3
    var isPaging = true; 
    var rPPOptions = [10,20,30,40,50];
    var obj = {
        minWidth: 300,
        height:  isPaging === false ? 'flex': 600,
        editable: false,
        sortModel: false,   
        freezeRows: n_row,
        numberCell: {show: false},
        scrollModel: { autoFit: true },
        flex: {one: true},
        dataModel: { data: data },
        columnTemplate: {
            align: 'center', valign: 'center'
        },
        pageModel: { type: "local", strRpp: "{0}", strDisplay: `{0} to {1} of ${data.length}`, rPPOptions: rPPOptions},
    }
    
    if(data.length <= 10 || isPaging === false){
        obj.pageModel = '';
    }


    var grid = pq.grid("#automerged-modified-table", obj).on("refresh refreshCell", function (evt, ui) {
        if (ui.source != 'flex') {
                this.flex();
        }
    });

    /*
    let a = modified_data;
    $('.ui-corner-all').on('change',function(e){
        e.stopPropagation();
        var pagerMsg = $(".pq-pager-msg").text();
        var pagerTotal = $(".total").text();
        const regex = /(\d+|\D+)/g;
        const result = pagerMsg.match(regex).map((match) => {
                                                                // Convert numeric strings to integers
                                                                return /^\d+$/.test(match) ? parseInt(match) : match;
                                                            });
        const number = result[2]
        const pageLength = Math.ceil(modified_data.length/number)

        for(var i=0; i < pageLength ; i++){
                a.splice(number*i, 0, ...a.slice(0,3));
                if(i == 0){
                    a.splice(0,3)
                }
        }
        
        var heading_config = {
            numPp: number,
            pageNumber: pageLength
        }

        mergeCells(grid, modified_data, heading_config, true)
    })
    */

    mergeCells(grid, modified_data, true)
});    

