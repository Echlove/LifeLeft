document.addEventListener('DOMContentLoaded', function (event) {
    //console.log("001");
    if($('#Theme_Handsome').length >0 ) {
        //console.log("found_flag");
        lifeleft_2();
    }
    else {
        lifeleft();
    }
    //console.log("002");
});

function lifeleft() {
    if ($('.clear.timelife').length) {
        let timelife = [{
                title: '今日已经过去',
                endTitle: '小时',
                num: 0,
                percent: '0%'
            },
            {
                title: '这周已经过去',
                endTitle: '天',
                num: 0,
                percent: '0%'
            },
            {
                title: '本月已经过去',
                endTitle: '天',
                num: 0,
                percent: '0%'
            },
            {
                title: '今年已经过去',
                endTitle: '个月',
                num: 0,
                percent: '0%'
            }
        ]; {
            let nowDate = new Date();
            let todayStartDate = new Date(nowDate.toISOString().slice(0, 10));
            let todayPassHours = (nowDate.getTime() - todayStartDate.getTime()) / 1000 / 60 / 60;
            let todayPassHoursPercent = (todayPassHours / 24) * 100;
            timelife[0].num = parseInt(todayPassHours);
            timelife[0].percent = parseInt(todayPassHoursPercent) + '%';
        } {
            let weeks = {
                0: 7,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6
            };
            let weekDay = weeks[new Date().getDay()];
            let weekDayPassPercent = (weekDay / 7) * 100;
            timelife[1].num = parseInt(weekDay);
            timelife[1].percent = parseInt(weekDayPassPercent) + '%';
        } {
            let year = new Date().getFullYear();
            let date = new Date().getDate();
            let month = new Date().getMonth() + 1;
            let monthAll = new Date(year, month, 0).getDate();
            let monthPassPercent = (date / monthAll) * 100;
            timelife[2].num = date;
            timelife[2].percent = parseInt(monthPassPercent) + '%';
        } {
            let month = new Date().getMonth() + 1;
            let yearPass = (month / 12) * 100;
            timelife[3].num = month;
            timelife[3].percent = parseInt(yearPass) + '%';
        }
        let htmlStr = '';
        htmlStr += `
        <h5 class="widget-title">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                d="M864.801 895.471h-33.56v-96.859c0-126.081-73.017-235.093-179.062-287.102 106.046-52.01 179.062-161.022 179.062-287.102v-96.859h33.56c17.301 0 31.325-14.327 31.325-32 0-17.673-14.024-32-31.325-32H159.018c-17.3 0-31.325 14.327-31.325 32 0 17.673 14.025 32 31.325 32h33.02v96.859c0 126.08 73.016 235.092 179.061 287.102-106.046 52.009-179.062 161.02-179.062 287.101v96.859h-33.02c-17.3 0-31.325 14.326-31.325 32s14.025 32 31.325 32H864.8c17.301 0 31.325-14.326 31.325-32s-14.023-31.999-31.324-31.999zM256.05 222.427v-94.878h513.046v94.878c0 141.674-114.85 256.522-256.523 256.522-141.674 0-256.523-114.848-256.523-256.522zm513.046 673.044H256.05v-94.879c0-141.674 114.849-256.521 256.523-256.521 141.673 0 256.523 114.848 256.523 256.521v94.879z" />
                <path
                d="M544.141 384c0-17.69-14.341-32.031-32.031-32.031-71.694 0-127.854-56.161-127.854-127.855 0-17.69-14.341-32.032-32.031-32.032s-32.032 14.341-32.032 32.032c0 107.617 84.3 191.918 191.917 191.918 17.69 0 32.031-14.342 32.031-32.032z" />
            </svg>
        人生倒计时
        </h5>`;
        htmlStr += `<div class="list-group">`;
        timelife.forEach((item, index) => {
            htmlStr += `
            <div class="item list-group-item">
                <div class="title">
                    ${item.title}
                    <span class="text">${item.num}</span>
                    ${item.endTitle}
                </div>
                <div class="tl_progress">
                    <div class="progress-bar">
                        <div class="progress-bar-inner progress-bar-inner-${index}" style="width: ${item.percent}"></div>
                    </div>
                    <div class="progress-percentage">${item.percent}</div>
                </div>
            </div>`;
        });
        htmlStr += `</div>`;
        $('.timelife ').html(htmlStr);
        //$('.timelife .echo-contain').html(htmlStr);
    }
}

function lifeleft_2() {
    if ($('#sidebar').length >0 ) {
        if($('#blog_info').length > 0) console.log("found");
        let timelife = [{
                title: '今日已经过去',
                endTitle: '小时',
                num: 0,
                percent: '0%'
            },
            {
                title: '这周已经过去',
                endTitle: '天',
                num: 0,
                percent: '0%'
            },
            {
                title: '本月已经过去',
                endTitle: '天',
                num: 0,
                percent: '0%'
            },
            {
                title: '今年已经过去',
                endTitle: '个月',
                num: 0,
                percent: '0%'
            }
        ]; {
            let nowDate = new Date();
            let todayStartDate = new Date(nowDate.toISOString().slice(0, 10));
            let todayPassHours = (nowDate.getTime() - todayStartDate.getTime()) / 1000 / 60 / 60;
            let todayPassHoursPercent = (todayPassHours / 24) * 100;
            timelife[0].num = parseInt(todayPassHours);
            timelife[0].percent = parseInt(todayPassHoursPercent) + '%';
        } {
            let weeks = {
                0: 7,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6
            };
            let weekDay = weeks[new Date().getDay()];
            let weekDayPassPercent = (weekDay / 7) * 100;
            timelife[1].num = parseInt(weekDay);
            timelife[1].percent = parseInt(weekDayPassPercent) + '%';
        } {
            let year = new Date().getFullYear();
            let date = new Date().getDate();
            let month = new Date().getMonth() + 1;
            let monthAll = new Date(year, month, 0).getDate();
            let monthPassPercent = (date / monthAll) * 100;
            timelife[2].num = date;
            timelife[2].percent = parseInt(monthPassPercent) + '%';
        } {
            let month = new Date().getMonth() + 1;
            let yearPass = (month / 12) * 100;
            timelife[3].num = month;
            timelife[3].percent = parseInt(yearPass) + '%';
        }
        let htmlStr = '';
        htmlStr += `
        <h5 class="widget-title">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                d="M864.801 895.471h-33.56v-96.859c0-126.081-73.017-235.093-179.062-287.102 106.046-52.01 179.062-161.022 179.062-287.102v-96.859h33.56c17.301 0 31.325-14.327 31.325-32 0-17.673-14.024-32-31.325-32H159.018c-17.3 0-31.325 14.327-31.325 32 0 17.673 14.025 32 31.325 32h33.02v96.859c0 126.08 73.016 235.092 179.061 287.102-106.046 52.009-179.062 161.02-179.062 287.101v96.859h-33.02c-17.3 0-31.325 14.326-31.325 32s14.025 32 31.325 32H864.8c17.301 0 31.325-14.326 31.325-32s-14.023-31.999-31.324-31.999zM256.05 222.427v-94.878h513.046v94.878c0 141.674-114.85 256.522-256.523 256.522-141.674 0-256.523-114.848-256.523-256.522zm513.046 673.044H256.05v-94.879c0-141.674 114.849-256.521 256.523-256.521 141.673 0 256.523 114.848 256.523 256.521v94.879z" />
                <path
                d="M544.141 384c0-17.69-14.341-32.031-32.031-32.031-71.694 0-127.854-56.161-127.854-127.855 0-17.69-14.341-32.032-32.031-32.032s-32.032 14.341-32.032 32.032c0 107.617 84.3 191.918 191.917 191.918 17.69 0 32.031-14.342 32.031-32.032z" />
            </svg>
        人生倒计时
        </h5>`;
        htmlStr += `<div class="list-group">`;
        timelife.forEach((item, index) => {
            htmlStr += `
            <div class="item list-group-item">
                <div class="title">
                    ${item.title}
                    <span class="text">${item.num}</span>
                    ${item.endTitle}
                </div>
                <div class="tl_progress">
                    <div class="progress-bar">
                        <div class="progress-bar-inner progress-bar-inner-${index}" style="width: ${item.percent}"></div>
                    </div>
                    <div class="progress-percentage">${item.percent}</div>
                </div>
            </div>`;
        });
        htmlStr += `</div>`;
        if($('#blog_info').length > 0) console.log("found");
        if($('#blog_info')) $("<section id=\"lifeleft\" class=\"widget widget_categories wrapper-md clear lifeleft\"></section>").insertBefore('#blog_info');
        $('#lifeleft').html(htmlStr);
    }
}