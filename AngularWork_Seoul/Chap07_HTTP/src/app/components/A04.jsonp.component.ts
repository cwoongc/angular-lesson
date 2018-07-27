import { Component } from '@angular/core';
import { URLSearchParams, RequestOptionsArgs, Jsonp, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'a04Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>JSONP</h3>
        </div>
        <div class="panel-body">
            <label>검색어
            <input type="text" class="form-control" [(ngModel)]="keyword">
            </label>
            <button class="btn btn-primary" (click)="getData()">Search</button>
        </div>
        <div class="panel-body" *ngFor="let item of wikiData">
            <b><a [href]="item.url"> {{item.title}}</a></b><br>
            {{item.content}}
            
        </div>
    </div>
    `,
    providers: []
})
export class A04Component  { 
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK

    //View에 연결할 데이터
    wikiData: {title:string,content:string, url:string}[];

    //요청할 주소
    private URL:string = 'https://en.wikipedia.org/w/api.php';

    //검색어
    keyword: string = 'JAVASCRIPT';

    // 파라미터 관리 객체. import가 반드시 되야한다.
    private params: URLSearchParams = new URLSearchParams();

    //get() 메서드 드의 요청시 요청 옵션을 묶을 객체
    private request: RequestOptionsArgs;

    //Jsonp 객체는 JsonpModule이 별도로 관리하므로 module에 import 해야 함
    constructor(private jsonp:Jsonp) {

    }

    getData() {
        //요청 파라미터 세팅 (URLSearchParams.set(name,value))
        //search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
        this.params.set('search',this.keyword);
        this.params.set('action','opensearch');
        this.params.set('format','json');
        this.params.set('callback','JSONP_CALLBACK');

        //요청 옵션을 묶자
        this.request = {
            // method: 'GET',
            params: this.params
        }

        this.jsonp.get(this.URL, this.request ) 
        //수정
        .map(
            (data: Response) => {
                let wiki:any = data.json();
                
                let result: Array<any> = [];

                for(let i=0;i<wiki[1].length;i++) {
                   result.push(
                        {title:wiki[1][i],content:wiki[2][i],url:wiki[3][i]}
                    );
                }
                console.log(result);
                return result;
            }
        )
        .subscribe(
            (data:Array<any>)=>{
                console.log(data);
                this.wikiData = data;
            },
            (error:Response)=>{
                console.log(error.status);
            }
        )


    }


    ngOnInit() {
        this.getData();
    }

    
}