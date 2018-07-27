import { Injectable } from '@angular/core';
import { Response, URLSearchParams, RequestOptionsArgs , Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WikiService {

    //요청할 주소
    private URL:string = 'https://en.wikipedia.org/w/api.php';

    // 파라미터 관리 객체. import가 반드시 되야한다.
    private params: URLSearchParams = new URLSearchParams();

    //get() 메서드 드의 요청시 요청 옵션을 묶을 객체
    private request: RequestOptionsArgs;



    constructor(private jsonp: Jsonp) {}

    get(): Observable<string[]> {
        return this.jsonp.get('/assets/resources/productData.json')
        .map((res: Response) => res.json())
        //              .do(data => console.log('server data:', data))  // debug
        .catch(this.handleError);
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getWiki(keyword:string) : Observable<Array<any>>{
        //요청 파라미터 세팅 (URLSearchParams.set(name,value))
        //search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
        this.params.set('search',keyword);
        this.params.set('action','opensearch');
        this.params.set('format','json');
        this.params.set('callback','JSONP_CALLBACK');

        //요청 옵션을 묶자
        this.request = {
            method: 'GET',
            params: this.params
        }

        return this.jsonp.request(this.URL, this.request ) 
        //수정
        .map((res:Response)=>res.json())
        .map(
            (data: Array<any>) => {
                let wiki:any = data;
                
                let result: Array<any> = [];

                for(let i=0;i<wiki[1].length;i++) {
                   result.push(
                        {title:wiki[1][i],content:wiki[2][i],url:wiki[3][i]}
                    );
                }
                console.log(result);
                return result;
            }
        );
        


    }
}