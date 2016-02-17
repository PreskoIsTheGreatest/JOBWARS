System.register([], function(exports_1) {
    var JobPost;
    return {
        setters:[],
        execute: function() {
            JobPost = (function () {
                function JobPost(header, description, tags) {
                    this.header = header;
                    this.description = description;
                    this.tags = tags;
                }
                return JobPost;
            })();
            exports_1("JobPost", JobPost);
        }
    }
});
//# sourceMappingURL=jobpost.js.map