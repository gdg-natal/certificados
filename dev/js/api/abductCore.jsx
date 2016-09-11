import Github from './github.jsx';
import massGet from './massGet.jsx';
class AbductCore{
    constructor(username){
        this.github = new Github(username);
    }
    analyze(){
        return new Promise((resolve, reject) => {
            this.github.repository().then((repos) => {
                let repositories = repos.map((repository) => {
                   return this.github.commitsURL(repository.name);
                });
                massGet(repositories).then((response) => {
                   console.log(response);
                });
            });
        });
    }
}

export default AbductCore;