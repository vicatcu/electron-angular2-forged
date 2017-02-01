"use strict";
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const core_2 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.name = 'electron-forge';
    }
    ngOnInit() {
        console.log('component initialized');
    }
};
AppComponent = tslib_1.__decorate([
    core_2.Component({
        selector: 'App',
        template: `<div>
    <h2>Welcome to {{name}} Angular2!</h2>
    <i class="material-icons">face</i>
  </div>`
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.component.js.map