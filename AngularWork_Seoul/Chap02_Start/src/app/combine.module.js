"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var combine_component_1 = require("./combine.component");
var header_component_1 = require("./header.component");
var B_component_1 = require("./B.component");
var footer_component_1 = require("./footer.component");
var CombineModule = (function () {
    function CombineModule() {
    }
    return CombineModule;
}());
CombineModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [combine_component_1.CombineComponent, header_component_1.HeaderComponent, B_component_1.BComponent, footer_component_1.FooterComponent],
        bootstrap: [combine_component_1.CombineComponent]
    })
], CombineModule);
exports.CombineModule = CombineModule;
//# sourceMappingURL=combine.module.js.map