/**
 * date:2019/11/1
 * author:tzm
 * description:此处放layui自定义扩展
 */
window.rootPath = (function (src) {
    src = document.scripts[document.scripts.length - 1].src;
    return src.substring(0, src.lastIndexOf("/") + 1);
})();

layui.config({
    base: rootPath + "lay-module/",
    version: true
}).extend({
    layuimini: "layuimini/layuimini", // layuimini扩展
    step: 'step-lay/step', // 分步表单扩展
    treetable: 'treetable-lay/treetable', //table树形扩展
    tableSelect: 'tableSelect/tableSelect', // table选择扩展
    iconPickerFa: 'iconPicker/iconPickerFa', // fa图标选择扩展
    echarts: 'echarts/echarts', // echarts图表扩展
    echartsTheme: 'echarts/echartsTheme', // echarts图表主题扩展
    wangEditor: 'wangEditor/wangEditor', // wangEditor富文本扩展
    layarea: 'layarea/layarea', // layarea省市扩展
    inputTags: 'inputTags/inputTags', // inputTags标签扩展
    enhanceForm: 'enhanceForm/enhanceForm', // enhanceform增强form扩展
    excel: 'layui_exts/excel',//excel扩展
    zlhjConfig: 'zlhjConfig/zlhjConfig' // 添加通用配置文件
});