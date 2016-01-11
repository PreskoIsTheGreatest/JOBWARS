var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var JobPostsService = (function () {
    function JobPostsService(http) {
        this.http = http;
        if (!this.jobposts) {
            this.reloadObservable();
        }
    }
    JobPostsService.prototype.reloadObservable = function () {
        var _this = this;
        this.http.get('/jobpost/company').subscribe(function (jobposts) {
            _this.jobposts = jobposts.json();
        });
    };
    JobPostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobPostsService);
    return JobPostsService;
})();
exports.JobPostsService = JobPostsService;
//# sourceMappingURL=jobposts.js.map