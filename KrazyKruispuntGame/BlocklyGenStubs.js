Blockly.JavaScript['if_else'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['do_for_x_seconds'] = function(block) {
  var number_seconds = block.getFieldValue('seconds');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['and_or'] = function(block) {
  var dropdown_andor = block.getFieldValue('andOr');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['repeat_until'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['checktrafficlight'] = function(block) {
  var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
  var dropdown_lightvalue = block.getFieldValue('LightValue');
  var value_checktrafficlight = Blockly.JavaScript.valueToCode(block, 'checkTrafficLight', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['settrafficlight'] = function(block) {
  var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
  var dropdown_lightvalue = block.getFieldValue('LightValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['checktrafficlightcar'] = function(block) {
  var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
  var dropdown_lightidentifier = block.getFieldValue('LightIdentifier');
  var value_trafficlighthascar = Blockly.JavaScript.valueToCode(block, 'TrafficLightHasCar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gameisover'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};