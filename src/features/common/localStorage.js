module.exports = {
    get: function(key, cacheageinmillis){
        var value = window.localStorage.getItem(key);

        if(value){
            var parsed = JSON.parse(value);
            if(cacheageinmillis){
                return ((new Date().getTime() - parsed.timestamp) < cacheageinmillis) ? parsed.data : false;
            }else{
                return parsed.data;
            }
        }else{
            return false;
        }
    },
    set: function(key, value){
        window.localStorage.setItem(key, JSON.stringify({
            timestamp: new Date().getTime(),
            data: value
        }));
    }
}
