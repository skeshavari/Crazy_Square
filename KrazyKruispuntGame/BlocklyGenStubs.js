Blockly.JavaScript['if_else'] = function (block) {
    var block_if = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
    var block_do = Blockly.JavaScript.statementToCode(block, 'do');
    var block_else = Blockly.JavaScript.statementToCode(block, 'else');
    var code = 'if(' + block_if + '){\n' + block_do + '}else{\n' + block_else + '};\n';
    return code;
};

Blockly.JavaScript['do_for_x_seconds'] = function (block) {
    var number_seconds = block.getFieldValue('seconds');
    var repeat = Blockly.JavaScript.statementToCode(block, 'repeat');
    var code = 'setTimeout(function(){\n' + repeat + '\n},' + number_seconds + ');\n';
    return code;
};

Blockly.JavaScript['and_or'] = function (block) {
    var dropdown_andor = block.getFieldValue('andOr');
    var choiceAndOr = Blockly.JavaScript.valueToCode(block, 'block_andOr', Blockly.JavaScript.ORDER_ATOMIC);
    var code = dropdown_andor+""+choiceAndOr;
    return [code, Blockly.JavaScript.ORDER_LOGICAL_AND];
};

Blockly.JavaScript['repeat_until'] = function (block) {
    var codeToRepeat = Blockly.JavaScript.statementToCode(block, 'codeToRepeat');
    var stopCondition = Blockly.JavaScript.statementToCode(block, 'stopCondition');
    // TODO: Assemble JavaScript into code variable.
    var code = 'while(true){'+codeToRepeat+'\nif('+stopCondition+'){\nbreak;\n}\n};\n';
    return code;
};

Blockly.JavaScript['checkTrafficLight'] = function (block) {
    var dropdownLightPosition = block.getFieldValue('LightIdentifier');
    var dropdownLightValue = block.getFieldValue('LightValue');
    var value_checktrafficlight = Blockly.JavaScript.valueToCode(block, 'checkTrafficLight', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    if (dropdownLightPosition === "Top"){
        dropdownLightPosition = "trafficLightTop";
    }
    if (dropdownLightValue === "Red"){
        dropdownLightValue = "RED";
    }
    var code = dropdownLightPosition+".colour == "+dropdownLightValue+""+value_checktrafficlight;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.JavaScript['settrafficlight'] = function (block) {
    var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
    var dropdown_lightvalue = block.getFieldValue('LightValue');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['checktrafficlightcar'] = function(block) {
  var dropdown_carIdentifier = block.getFieldValue('CarPresent');
  var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
  var value_trafficlighthascar = Blockly.JavaScript.valueToCode(block, 'TrafficLightHasCar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var code_car;
  var code_light;
      if (dropdown_carIdentifier == "CAR-PRESENT") {
            code_car = 'true';
      } else if (dropdown_carIdentifier == "CAR-ABSENT") {
            code_car = 'false';
      }

      switch (dropdown_lightidentifier){
          case 'TOP':
            code_light = 'lightTopHasCar';
            break;
          case 'RIGHT':
              code_light = 'lightRightHasCar';
              break;
          case 'BOTTOM':
              code_light = 'lightBottomHasCar';
              break;
          case 'LEFT':
              code_light = 'lightLeftHasCar';
              break;
      };
      var code = '(' + code_light +'() === ' + code_car + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gameisover'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'isEndOfGame();';
  return code;
};