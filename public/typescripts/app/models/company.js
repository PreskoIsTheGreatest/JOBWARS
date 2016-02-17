System.register([], function(exports_1) {
    var Company;
    return {
        setters:[],
        execute: function() {
            Company = (function () {
                function Company(name, bulstat, email, website, description) {
                    this.name = name;
                    this.bulstat = bulstat;
                    this.email = email;
                    this.website = website;
                    this.description = description;
                }
                return Company;
            })();
            exports_1("Company", Company);
        }
    }
});
//# sourceMappingURL=company.js.map