import pGet from './httpGet.jsx';

function massGet(urls, strict = false) {
    let statues = [];
    let responses = [];
    return new Promise((resolve, reject) => {
        function resolveIt(){
            if(statues.length == urls.length){
                if(strict){
                    for(let status of statues){
                        if(status != 200){
                            reject('noAllDone');
                            return;
                        }
                    }
                }
                resolve(responses);
            }
        }
        urls.map((url, index) => {
            pGet(url)
                .then((response) => {
                    responses[index] = response;
                    statues[index] = 200;
                    resolveIt();
                })
                .catch(() => {
                    statues[index] = 404;
                    resolveIt();
                });
        });
    });
}

export default massGet;