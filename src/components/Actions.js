export default {
    //后台发请求
    ajaxget(url,data,callback){
        const aurl = formatUrl(url);
        $.get(aurl,data,(result)=>{
            if(!empty(callback)){
                callback(result);
            }
            if(typeof(debug) != 'undefined' && debug === true){
                console.log('-----异步请求----'+aurl);
                console.log(data);
                console.log(result);
                console.log('-----------------');
            }
        });
    },
    //后台发请求
    ajaxpost(url,data,callback){
        const aurl = formatUrl(url);
        $.post(aurl,data,(result)=>{
            if(!empty(callback)){
                callback(result);
            }
            if(typeof(debug) != 'undefined' && debug === true){
                console.log('-----异步请求----'+aurl);
                console.log(data);
                console.log(result);
                console.log('-----------------');
            }
        });
    }
}