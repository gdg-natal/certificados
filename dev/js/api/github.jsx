import pGet from './httpGet.jsx';
import massGet from './massGet.jsx';

var auth = {
    clientId: '2430f6b849b9be6535e8',
    clientSecret: 'b04f589142c9eac14a060e7d48392a7481a2334e'
};

class Github {
    constructor(username){
        this.username = username;
        this.baseUrl = 'https://api.github.com';
        this.get().then((response) => {
            this.user = response;
            this.emit('ready', response);
        });
        this.subscribers = {};

    }

    resolveURL(page){
        let url = this.baseUrl;
        for (let item of arguments){
            url += '/' + item;
        }
        if(page){
            page = '&page=' + page;
        }
        return url + '?client_id=' + auth.clientId + '&client_secret=' + auth.clientSecret + page;
    }
    repository(repoName){
        if(!repoName){
            return pGet(this.resolveURL('users', this.username, 'repos'));
        }
        else{
            return pGet(this.resolveURL('repos', this.username, repoName));
        }
    }
    repositoryURL(repoName){
        if(!repoName){
            return this.resolveURL('users', this.username, 'repos');
        }
        else{
            return this.resolveURL('repos', this.username, repoName);
        }
    }
    commits(repoName){
        return pGet(this.resolveURL('repos', this.username, repoName, 'commits'));
    }
    commitsURL(repoName){
        return this.resolveURL('repos', this.username, repoName, 'commits');
    }
    get(){
        return pGet(this.resolveURL('users', this.username));
    }
    subscribe(event, callback){
        this.subscribers[event] = this.subscribers[event] || [];
        let index = this.subscribers[event].length;
        this.subscribers[event][index] = callback;
        return {
            id: index,
            unsubscribe: this.unsubscribe.bind(this, index)
        }
    }
    unsubscribe(index){
        console.log('unsubscribe ' + index);
    }
    emit(event, data){
        if(this.subscribers[event]){
            this.subscribers[event].map((subscriber) => {
                subscriber(data);
            });
        }
    }

}

export default Github;