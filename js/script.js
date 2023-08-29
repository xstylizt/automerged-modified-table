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
 

        let heading_mc = mc


             

    const r_mc = heading_mc
    grid.option("mergeCells", r_mc);
    if (refresh) {
        grid.refreshView();
    }
}

    var data = [
        ["Employee information", "Employee information", "Employee information", "Section", "Role", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill"],
        ["Id", "First_name", "Last_name", "Section", "Role", "Frontend framework", "Frontend framework", "Frontend framework", "Frontend framework", "Backend framework", "Backend framework", "Backend framework", "Backend framework"],
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

    n_row = 3
    var rPP = 20;
    var obj = {     
        minWidth: 800,
        height:  rPP <= 12 ? 'flex': 600,
        editable: false,
        sortModel: false,
        freezeRows: 3,
        numberCell: {show: false},
        scrollModel: { autoFit: true },
        flex: {one: false},
        dataModel: { data: data },
        columnTemplate: {
            align: 'center', valign: 'center'
        },
        pageModel: { type: "local", rPP: rPP, strRpp: "{0}", strDisplay: "{0} to {1} osf {2}", rPPOptions: [10,15,20,25,30,35,40,45,50]},
    }

    

   
    $('.btn-show').on('click',function(ev){
        $('.hidden').toggle()   
        var grid = pq.grid("#automerged-modified-table", obj)
        mergeCells(grid, data, true)
    })


});    