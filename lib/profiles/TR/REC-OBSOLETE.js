
exports.name = "REC-OBSOLETE";
exports.config = {
    status:             "REC"
,   longStatus:         "Obsolete Recommendation"
,   previousVersion:    false
,   obsoletes:          true
,   styleSheet:         "W3C-OBSL"
,   stabilityWarning:   false
,   recTrackStatus:     true
};

var base = require("../base")
,   rules = base.insertAfter(
                        require("../TR").rules
                    ,   "headers.dl"
                    ,   [
                            require("../../rules/headers/errata")
                        ,   require("../../rules/sotd/implementation")
                        ]
);

rules = base.insertAfter(
        rules
    ,   "sotd.supersedable"
    ,   [
            require("../../rules/sotd/diff")
        ,   require("../../rules/sotd/obsl-rescind")
        ]
    )
;

exports.rules = rules;
