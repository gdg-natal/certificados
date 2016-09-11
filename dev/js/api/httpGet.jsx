import $ from 'jquery';
function pGet(url){
    return new Promise((resolve, reject) => {
        $.get(url)
            .done((data) =>{
                resolve(data);
            })
            .fail(() => {
               reject("error");
            });
    });
}

export default pGet;