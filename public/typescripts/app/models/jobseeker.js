System.register([], function(exports_1) {
    var JobSeeker;
    return {
        setters:[],
        execute: function() {
            JobSeeker = (function () {
                function JobSeeker(full_name, desired_position, typeahead_tags) {
                    this.full_name = full_name;
                    this.desired_position = desired_position;
                    this.typeahead_tags = typeahead_tags;
                }
                return JobSeeker;
            })();
            exports_1("JobSeeker", JobSeeker);
        }
    }
});
//# sourceMappingURL=jobseeker.js.map