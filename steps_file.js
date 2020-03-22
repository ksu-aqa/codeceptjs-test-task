
module.exports = function() {
  return actor({

  updateField(fieldName, value) {
    this.appendField(fieldName, '');
    this.pressKey(['Shift', 'Home']);
    this.pressKey('Backspace');
    this.appendField(fieldName, value);
    this.pressKey("Enter");
    }

  });
}
