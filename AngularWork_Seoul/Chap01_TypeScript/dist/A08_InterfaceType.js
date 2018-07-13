"use strict";
// A08_InterfaceType.ts
var obj = {
    name: 'NolBu',
    age: 40,
    ary: [10, 20, 30],
    today: new Date(),
    data: {
        address: 'Seoul',
        tel: '010-1234-5678'
    },
    getInfo: function (greet) {
        return this.name + "\uB2D8\uC758 \uB098\uC774\uB294 " + this.age + "\uC774\uACE0 \uC804\uBC88\uC740 " + this.data.tel;
    }
};
//# sourceMappingURL=A08_InterfaceType.js.map