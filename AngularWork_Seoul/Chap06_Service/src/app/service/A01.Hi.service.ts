
//주입 불가능한 서비스
export class HiService {
    private hi:string = 'hi~ ';

    getGreet(name:string):string {
        return this.hi + name;
    }
}