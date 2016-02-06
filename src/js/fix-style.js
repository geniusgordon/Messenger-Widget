function fixStyles(styleSheet) {
    var contents = $('iframe').contents();
    var head = contents.find('head');
    var styleTag = head.append('<style>').children('style');
    var fixRules = styleSheet.cssRules;
    for (rules in fixRules) {
        if (fixRules.hasOwnProperty(rules)) {
            styleTag.append(fixRules[rules].cssText);
        }
    }
}

