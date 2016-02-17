System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1, http_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(http) {
                    this.http = http;
                    this.isJobSeeker = true;
                    this.isCompany = true;
                    this.isNavigation = false;
                    this.isNotOpenPassNotMatch = true;
                    this.isNotOpenUserExist = true;
                    this.isNotOpenSuccess = true;
                    this.username = "";
                }
                RegisterComponent.prototype.register = function (pass, conf) {
                    var _this = this;
                    this.isNotOpenPassNotMatch = true;
                    this.isNotOpenUserExist = true;
                    this.isNotOpenSuccess = true;
                    if (pass.value !== conf.value) {
                        this.isNotOpenPassNotMatch = false;
                        return false;
                    }
                    var user = {
                        username: this.username,
                        password: pass.value
                    };
                    var stringUser = JSON.stringify(user);
                    var registerPath = "";
                    if (!this.isCompany) {
                        registerPath = "/company";
                    }
                    else {
                        registerPath = "/jobseeker";
                    }
                    this.http.post(registerPath + '/register/' + stringUser, stringUser, {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    }).subscribe(function (res) {
                        _this.isNotOpenSuccess = false;
                        _this.username = "";
                        pass.value = "";
                        conf.value = "";
                    }, function (err) {
                        _this.isNotOpenUserExist = false;
                    });
                    return true;
                };
                RegisterComponent.prototype.onCompany = function () {
                    this.isNavigation = true;
                    this.isCompany = false;
                };
                RegisterComponent.prototype.onJobSeeker = function () {
                    this.isNavigation = true;
                    this.isJobSeeker = false;
                };
                RegisterComponent.prototype.reset = function () {
                    this.isCompany = true;
                    this.isJobSeeker = true;
                    this.isNavigation = false;
                    this.isNotOpenPassNotMatch = true;
                    this.isNotOpenUserExist = true;
                    this.isNotOpenSuccess = true;
                    this.username = "";
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'typescripts/app/templates/public/register_temp.html',
                        styleUrls: ['stylesheets/register.css', 'stylesheets/validation.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegisterComponent);
                return RegisterComponent;
            })();
            exports_1("RegisterComponent", RegisterComponent);
            browser_1.bootstrap(RegisterComponent, [
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=register.js.map