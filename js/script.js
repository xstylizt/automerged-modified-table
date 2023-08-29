$(document).ready(function(){ 

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

    var data = [
        ["Employee information", "", "", "Section", "Role", "Skill", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "Frontend framework", "", "", "", "Backend framework", "", "", ""],
        ["Id", "First_name", "Last_name", "", "", "React", "Angular", "Vue", "Svelte", "Express.js", "Laravel", "Springboot", "Django"],
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
        [31, "Sakura", "Tanaka", "Software developer", "Frontend developer", "✔", "✔", "", "", "", "", "", ""],
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

    var rPP = 10;

    var obj = {     
        width: 'flex',
        height:  rPP <= 12 ? 'flex': 600,
        editable: false,
        sortModel: false,
        freezeRows: 1,
        numberCell: {show: false},
        scrollModel: { autoFit: true },
        flex: {one: false},
        dataModel: { data: data },
        columnTemplate: {
            align: 'center', valign: 'center'
        },
        rowHt: 1200,
        pageModel: { type: "local", rPP: rPP, strRpp: "{0}", strDisplay: "{0} to {1} of {2}", rPPOptions: [10,15,20,25,30,35,40,45,50]},
    }



   
    $('.btn-show').on('click',function(ev){
        $('.hidden').toggle()   
        var grid = pq.grid("#automerged-modified-table", obj)     
    })


    
});    