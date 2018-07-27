import { Injectable } from "@angular/core";

//주입이 가능한 서비스
@Injectable()
export class HelloService {
    private hello: string = 'Hello~ ';

    getGreet(name:string): string {
        return this.hello + name;
    }
}