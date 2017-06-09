Blockly.JavaScript['if_else'] = function (block) {
    var block_if = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_CONDITIONAL);
    var block_do = Blockly.JavaScript.statementToCode(block, 'do');
    var block_else = Blockly.JavaScript.statementToCode(block, 'else');
    var code = 'if(' + block_if + '){\n' + block_do + '\n}else{\n' + block_else + '};\n';
    return code;
};

Blockly.JavaScript['do_for_x_seconds'] = function (block) {
    var number_seconds = block.getFieldValue('seconds');
    var repeat = Blockly.JavaScript.statementToCode(block, 'repeat');
    var code = 'setTimeout(function(){\n' + repeat + '\n},' + parseInt(number_seconds)*1000 + ');\n';
    return code;
};

Blockly.JavaScript['and_or'] = function (block) {
    var dropdown_andor = block.getFieldValue('andOr');
    var choiceAndOr = Blockly.JavaScript.valueToCode(block, 'block_andOr', Blockly.JavaScript.ORDER_NONE);
    var code = dropdown_andor + "" + choiceAndOr;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.JavaScript['repeat_until'] = function (block) {
    var codeToRepeat = Blockly.JavaScript.statementToCode(block, 'codeToRepeat');
    var stopCondition = Blockly.JavaScript.statementToCode(block, 'stopCondition');
    var code = 'while(true){' + codeToRepeat + '\nif(' + stopCondition + '){\nbreak;\n}\n};\n';
    return code;
};

Blockly.JavaScript['checkTrafficLight'] = function (block) {
    var dropdownLightPosition = block.getFieldValue('LightIdentifier');
    var dropdownLightValue = block.getFieldValue('LightValue');
    var value_checktrafficlight = Blockly.JavaScript.valueToCode(block, 'checkTrafficLight', Blockly.JavaScript.ORDER_NONE);

    if (dropdownLightPosition === "Top") {
        dropdownLightPosition = "trafficLightTop";
    }
    if (dropdownLightValue === "Red") {
        dropdownLightValue = "RED";
    }
    var code = "("+dropdownLightPosition + ".getColor() === \"" + dropdownLightValue + "\")" + value_checktrafficlight;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.JavaScript['settrafficlight'] = function (block) {
    var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
    var dropdown_lightvalue = block.getFieldValue('LightValue');

    if (dropdown_lightidentifier === "Top") {
        dropdown_lightidentifier = "trafficLightTop";
    }
    if(dropdown_lightvalue === "Red"){
        dropdown_lightvalue = "RED";
    }
    var code = dropdown_lightidentifier + '.setColor(\"' + dropdown_lightvalue + '\");';
    return code;
};

Blockly.JavaScript['checktrafficlightcar'] = function (block) {
    var dropdown_carIdentifier = block.getFieldValue('CarPresent');
    var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
    var value_trafficlighthascar = Blockly.JavaScript.valueToCode(block, 'TrafficLightHasCar', Blockly.JavaScript.ORDER_NONE);


    if (dropdown_lightidentifier === "Top") {
        dropdown_lightidentifier = "trafficLightTop";
    }

    var code = '(' + dropdown_lightidentifier + '.hasCar() === ' + dropdown_carIdentifier + ')' + value_trafficlighthascar;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gameisover'] = function (block) {

    var code = 'isEndOfGame()';
    return code;
};