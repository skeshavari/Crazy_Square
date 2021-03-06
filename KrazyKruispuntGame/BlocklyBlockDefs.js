Blockly.Blocks['if_else'] = {
    init: function() {
        this.appendValueInput("if")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("if");
        this.appendStatementInput("do")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("do");
        this.appendStatementInput("else")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("else");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['do_after_x_seconds'] = {
    init: function() {
        this.appendStatementInput("repeat")
            .setCheck(null)
            .appendField("do after")
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
        this.appendValueInput("block_andOr")
            .setCheck(true, null)
            .appendField(new Blockly.FieldDropdown([
                ["and", "&&"],
                ["or", "||"]
            ]), "andOr");
        this.setOutput(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['repeat_until'] = {
    init: function() {
        this.appendStatementInput("codeToRepeat")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("repeat");
        this.appendStatementInput("stopCondition")
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

Blockly.Blocks['checkTrafficLight'] = {
    init: function() {
        this.appendValueInput("checkTrafficLight")
            .setCheck(null)
            .appendField("Traffic Light")
            .appendField(new Blockly.FieldDropdown([
                ["Top", "trafficLightTop"],
                ["Right", "trafficLightRight"],
                ["Bottom", "trafficLightBottom"],
                ["Left", "trafficLightLeft"]
            ]), "LightIdentifier")
            .appendField("is")
            .appendField(new Blockly.FieldDropdown([
                ["Red", "RED"],
                ["Yellow", "YELLOW"],
                ["Green", "GREEN"]
            ]), "LightValue");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['settrafficlight'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set Traffic Light")
            .appendField(new Blockly.FieldDropdown([
                ["Top", "trafficLightTop"],
                ["Right", "trafficLightRight"],
                ["Bottom", "trafficLightBottom"],
                ["Left", "trafficLightLeft"]
            ]), "LightIdentifier")
            .appendField("to")
            .appendField(new Blockly.FieldDropdown([
                ["Red", "RED"],
                ["Yellow", "YELLOW"],
                ["Green", "GREEN"]
            ]), "LightValue");
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
            .setCheck(false)
            .appendField("")
            .appendField(new Blockly.FieldDropdown([
                ["Car at", "true"],
                ["No car at", "false"]
            ]), "CarPresent")
            .appendField(new Blockly.FieldDropdown([
                ["Top", "trafficLightTop"],
                ["Right", "trafficLightRight"],
                ["Bottom", "trafficLightBottom"],
                ["Left", "trafficLightLeft"]
            ]), "LightIdentifier")
            .appendField("Traffic Light");
        this.setInputsInline(false);
        this.setOutput(true, null);
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