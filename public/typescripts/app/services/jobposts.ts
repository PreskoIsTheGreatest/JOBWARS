import {Http} from 'angular2/http'
import {Injectable} from 'angular2/core'

@Injectable()
export class JobPostsService {

    public jobposts:Array<any>;

    constructor(public http: Http) {
        if(!this.jobposts){
            this.reloadObservable();
        }
    }

    public reloadObservable(){
        this.http.get('/jobpost/company').subscribe(jobposts => {
            if(!Array.isArray(jobposts.json())){
                this.jobposts =[jobposts.json()]
            }else{
                this.jobposts = jobposts.json();
            }
        });
    }
}