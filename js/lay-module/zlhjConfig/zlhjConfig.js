/**
 * date:2020/08/14
 * description:用于配置系统基础配置
 */
layui.define(function (exports) {
    zlhjConfig = {
        // prod
        // baseUrl: "http://www.huijiefinance.net/zlhj_telemarketing"

        // pre prod
        // baseUrl: "http://192.168.90.116:8080/zlhj_telemarketing"

        //sit
        // baseUrl: "http://192.168.88.25:8080/zlhj_telemarketing"

        //uat
        // baseUrl: "http://10.215.85.23:8080/zlhj_telemarketing"

        //备用sit
        baseUrl: "http://192.168.88.69:8080/zlhj_telemarketing"

        // baseUrl: "http://192.168.7.11:8180/zlhj_telemarketing"
        // baseUrl: "http://192.168.2.30:8180/zlhj_telemarketing"

        // baseUrl: "http://10.1.3.23:8180/zlhj_telemarketing"
        // baseUrl: "http://10.1.3.40:8180/zlhj_telemarketing"

    }
    exports('zlhjConfig', zlhjConfig);
});