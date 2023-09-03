$(document).ready(function(){ 

    function mergeCells(grid, data, refresh) {
        var mc = []

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
            Object.keys(itemA).every(key => itemA[key] === itemB[key])
        )
        );

        console.log(basedArray)
        console.log(componentArray)

        var temp = []
        for(var i=0; i < basedArray.length ; i++){
            for(var j=0; j < componentArray.length; j++){
                if(basedArray[i].r1 == componentArray[j].r1 &&
                basedArray[i].c1 == componentArray[j].c1 &&
                basedArray[i].rc == componentArray[j].rc && 
                basedArray[i].cellValue === componentArray[j].cellValue
                ){
                    for(var k=0; k < basedArray[i].cc ; k++){
                        temp.push({cellValue: basedArray[i].cellValue,r1: basedArray[i].r1, c1: basedArray[i].c1 + k, rc: basedArray[i].rc, cc: 1})
                    }
                }
            }
        }

        const real_componentArray = componentArray.filter(itemA =>
            !temp.some(itemB => Object.keys(itemA).every(key => itemA[key] == itemB[key]))
        )

        const real_mc = basedArray.concat(real_componentArray)

    const r_mc = heading_mc
    grid.option("mergeCells", real_mc);
    if (refresh) {
        grid.refreshView();
    }
}

    var data = [
        ["Employee information", "Employee information", "Employee information", "Section", "Role", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill"],
        ["Employee information", "Employee information", "Employee information", "Section", "Role", "Frontend framework", "Frontend framework", "Frontend framework", "Frontend framework", "Backend framework", "Backend framework", "Backend framework", "Backend framework"],
        ["Id", "First_name", "Last_name", "Section", "Role", "React", "Angular", "Vue", "Svelte", "Express.js", "Laravel", "Springboot", "Django"],
        [1, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
        [2, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
        [3, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
        [4, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
        [5, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
        [6, "Yusuf", "Rahman", "Software developer", "Full Stack developesr", "", "✔", "", "", "✔", "", "", ""],
        [7, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
        [8, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
        [9, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
        [10, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"],
        [11, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
        [12, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
        [13, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
        [14, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
        [15, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
        [16, "Yusuf", "Rahman", "Software developer", "Full Stack developer", "", "✔", "", "", "✔", "", "", ""],
        [17, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
        [18, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
        [19, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
        [20, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"],
        [21, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
        [22, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
        [23, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
        [24, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
        [25, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
        [26, "Yusuf", "Rahman", "Software developer", "Full Stack developer", "", "✔", "", "", "✔", "", "", ""],
        [27, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
        [28, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
        [29, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
        [30, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"],
        [31, "Sakuraasdasdasdasdas", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
        [32, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
        [33, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
        [34, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
        [35, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
        [36, "Yusuf", "Rahman", "Software developer", "Full Stack developer", "", "✔", "", "", "✔", "", "", ""],
        [37, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
        [38, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
        [39, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
        [40, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"],
        [41, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
        [42, "Ravi", "Patel", "Software developer", "Backend developer", "", "", "", "✔", "", "", "✔", ""],
        [43, "Ji-eun", "Kim", "Software developer", "Backend developer", "", "", "", "", "✔", "", "", ""],
        [44, "Chen", "Liu", "Software developer", "Full Stack developer", "✔", "", "", "", "", "✔", "", ""],
        [45, "Nisha", "Sharma", "Software developer", "Frontend developer", "", "", "✔", "", "", "", "", ""],
        [46, "Yusuf", "Rahman", "Software developer", "Full Stack developer", "", "✔", "", "", "✔", "", "", ""],
        [47, "Mei", "Chen", "Software developer", "Backend developer", "", "", "", "", "", "", "✔", ""],
        [48, "Hiroshi", "Suzuki", "Software developer", "Frontend developer", "✔", "✔", "", "✔", "", "", "", "✔"],
        [49, "Ananya", "Gupta", "Software developer", "Backend developer", "", "", "", "✔", "✔", "", "✔", ""],
        [50, "Raj", "Singh", "Software developer", "Full Stack developer", "✔", "", "✔", "", "", "✔", "", "✔"]
    ]

    n_row = 3
    var rPP = 15;
    var obj = {     
        minWidth: 300,
        height:  rPP <= 12 ? 'flex': 600,
        editable: false,
        sortModel: false,
        freezeRows: 3,
        numberCell: {show: false},
        scrollModel: { autoFit: true },
        flex: {one: true},
        dataModel: { data: data },
        columnTemplate: {
            align: 'center', valign: 'center'
        },
        pageModel: { type: "local", rPP: rPP, strRpp: "{0}", strDisplay: "{0} to {1} osf {2}", rPPOptions: [10,15,20,25,30,35,40,45,50]},
    }

    
    $('.btn-show').on('click',function(ev){
        $('.hidden').toggle()   
        var grid = pq.grid("#automerged-modified-table", obj).on("refresh refreshCell", function (evt, ui) {
            if (ui.source != 'flex') {
                this.flex();
            }
        });
        mergeCells(grid, data, true)
    })


});    