var skills={};
var loadBloodHound= function (blood_skills) {

    var engine = new Bloodhound({
        local:blood_skills,
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.label);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace
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
    if(localStorage.getItem('blood_skills')){
        skills=JSON.parse(localStorage.getItem('skills'));
        loadBloodHound(JSON.parse(localStorage.getItem('blood_skills')));
    }else{
        $.ajax({
                url: 'jobpost/skills',
                type: "GET",
                contentType: "application/json;charset=UTF-8"
            }
        ).success((data)=>{
            var blood_skills = data.map(function (item) {
                skills[item.name] = item.id;
                return {label: item.name, value: item.id};
            });
            localStorage.setItem('blood_skills',JSON.stringify(blood_skills));
            localStorage.setItem('skills',JSON.stringify(skills));
            loadBloodHound(blood_skills);
        });
    }
};

