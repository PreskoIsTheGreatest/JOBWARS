var models = require('./models');

exports.editCompany = function (company) {
    new models.Company(company).save();
};
