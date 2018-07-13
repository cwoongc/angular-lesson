import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    // template: `
    //     <div>
    //         <h3>Template Sample</h3>
    //     </div>
    //     <div>
    //         <h3>단방향 바인딩</h3>
    //         Name: {{name}}<br>
    //         Objects: {{obj.id}} / {{obj['addresss']}}<br>
    //         Array: {{ary[0]}} / {{ary[1]}}

    //     </div>
    // `,
    templateUrl: '../html/A01Template.html',
    // styles:[`
    //     h3 {color:green;}
    // `],
    styleUrls: ['../html/A01Template.css']
})
export class A01Component{
    public name: string = 'HongGilDong';
    
    public obj: any = {
        id: 1,
        address: 'Seoul'
    };

    public ary: string[] = ['One', 'Two', 'Three'];

    
}
