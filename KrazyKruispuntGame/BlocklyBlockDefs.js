Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("do");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("else");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['do_for_x_seconds'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do for")
        .appendField(new Blockly.FieldNumber(0), "seconds")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['and_or'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["and","&&"], ["or","||"]]), "andOr");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['repeat_until'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("repeat");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("until");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['checktrafficlight'] = {
  init: function() {
    this.appendValueInput("checkTrafficLight")
        .setCheck(null)
        .appendField("Traffic Light")
        .appendField(new Blockly.FieldDropdown([["Top","TOP"], ["Right","RIGHT"], ["Bottom","BOTTOM"], ["Left","LEFT"]]), "LightIdentifier")
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["red","RED"], ["yellow","YELLOW"], ["green","GREEN"]]), "LightValue");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['settrafficlight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Traffic Light")
        .appendField(new Blockly.FieldDropdown([["Top","TOP"], ["Right","RIGHT"], ["Bottom","BOTTOM"], ["Left","LEFT"]]), "LightIdentifier")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["red","RED"], ["yellow","YELLOW"], ["green","GREEN"]]), "LightValue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['checktrafficlightcar'] = {
  init: function() {
    this.appendValueInput("TrafficLightHasCar")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldDropdown([["Car at","CAR-PRESENT"], ["No car at","CAR-ABSENT"]]), "CarPresent")
        .appendField(new Blockly.FieldDropdown([["Top","TOP"], ["Right","RIGHT"], ["Bottom","BOTTOM"], ["Left","LEFT"]]), "LightIdentifier")
        .appendField("Traffic Light");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['gameisover'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("All traffic passed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};