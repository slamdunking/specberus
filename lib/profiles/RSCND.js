
// XXX not the right settings here
exports.name = "Rescinded";
exports.config = {
    status:             "RSCND"
,   longStatus:         "Rescinded Recommendation"
,   previousVersion:    false
,   styleSheet:         "W3C-RSCND"
,   stabilityWarning:   false
,   rescinds:           true
};
exports.rules = require("./TR").rules;