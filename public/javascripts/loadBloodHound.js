var skills={};
var loadBloodHound= function (data) {

    var engine = new Bloodhound({
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.label);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: "jobpost/skills",
            filter: function(data) {
                return data.map(function (item) {
                    skills[item.name] = item.id;
                    return {label: item.name, value: item.id};
                });
            }
        }
    });

    $('#tokenfield-typeahead').on('tokenfield:createtoken', function (event) {
        var existingTokens = $(this).tokenfield('getTokens');

        $.each(existingTokens, function (index, token) {
            if (token.value === event.attrs.value) {
                event.preventDefault();
            }
        });

        var isExist = blood_skills.reduce(function (accum, elem) {
            if (elem.label === event.attrs.value) {
                return true;
            }
            return accum;
        }, false);

        if (!isExist) {
            event.preventDefault();
        }
    });

    engine.initialize(true).done(function() { console.log('ready to go!'); });

    $('#tokenfield-typeahead').tokenfield({
        typeahead: [null, {source: engine.ttAdapter(), displayKey: 'label'}]
    });
};

var loadForm = ()=>{
    $.ajax({
            url: 'jobpost/skills',
            type: "GET",
            contentType: "application/json;charset=UTF-8"
        }
    ).success(loadBloodHound);
};

$(document).ready(loadForm);
