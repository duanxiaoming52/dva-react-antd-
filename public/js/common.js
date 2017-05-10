
//接口地址格式化地址
function formatUrl(url) {
    return BASE_URL+url+SUFFIX;
}
//图片引用地址
function pathUrl(url){
    return PATH+url;
}
//滚动设置
function wresize(callback){
    window.addEventListener('resize', callback);
    callback();
}
//判断是否为空
function empty(vars){
    if(vars){
        if(typeof(vars) == 'object'){
            if(!(vars instanceof Array)){
                if(Object.keys(vars).length == 0){
                    return true;
                }
            }else if(vars.length == 0){
                return true;
            }
        }
        return false;
    }else{
        return true;
    }
}
function str2json(str){
    var json = eval('(' + str + ')'); 
    return json; 
}
//格式化时间戳
function formatDate(time,format){
    var newDate = new Date();
    time?newDate.setTime(time):'';
    format = format?format:'yyyy-MM-dd hh:mm:ss';
    var date = {
        "M+": newDate.getMonth() + 1,
        "d+": newDate.getDate(),
        "h+": newDate.getHours(),
        "m+": newDate.getMinutes(),
        "s+": newDate.getSeconds(),
        "q+": Math.floor((newDate.getMonth() + 3) / 3),
        "S+": newDate.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

