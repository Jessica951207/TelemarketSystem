let loginUser = layui.sessionData('sessionData').userSession;

let bo_state = [
    {value: 1, html: '待分配'},
    {value: 2, html: '待接受'},
    {value: 3, html: '跟进中'},
    {value: 4, html: '接受进件'},
    {value: 5, html: '拒绝进件'},
    {value: 6, html: '系统取消'},
];

function getBoStateName(state) {
    for (let boState of bo_state) {
        if (boState.value === state) {
            return boState.html;
        }
    }
    return '未知';
}

let co_channel = [
    {value: "11", html: '熊猫信驾'},
    {value: "99", html: '电销手工线索'},
    // {value: "2" , html: '人人代理'},
    {value: "4" , html: '行云天下'},
    {value: "5" , html: '通联POS机'},
    {value: "6" , html: '京东金融'},
    {value: "7" , html: '天府熊猫贷'},
    {value: "8" , html: '京东'},
    {value: "9" , html: 'Mobtech'},
    {value: "98", html: ' 统一进件平台'},
    {value: "10", html: '广州恰恰'},
    {value: "97", html: '直销'},
    {value: "NBTJ", html: '内部推荐'},
    {value: "QSBP", html: '企数标普'},
    {value: "LISTA", html: 'A类名单'},
    {value: "LISTB", html: 'B类名单'},

];

function getCoChannel(state) {
    for (let channel of co_channel) {
        if (channel.value == state) {
            return channel.html;
        }
    }
    return '未知';
}

//防抖debounce代码：
function debounce(fn,delay) {
    var timeout = null; // 创建一个标记用来存放定时器的返回值
    return function (e) {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout);
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}