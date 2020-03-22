const { I } = inject();

module.exports = {
	fields: {
		tdInput: '.new-todo',  
	},

	tdTitle: 'test',
	updatedTdTitle: 'New text',
	
	lastTd: locate('.todo-list').find('li:last-child'),
	lastTdLabel: '.todo-list li:last-child label',
	
	tdInList: 'label.ng-binding',
	tdLeftCounter: '.todo-count .ng-binding',
	completedTd: '.ng-scope.completed',
	
	activeTab: '[href="#/active"]',
	completedTab: '[href="#/completed"]',
	
	completedCheckbox: {css: '[ng-model="todo.completed"]'},
	clearCompletedButton: {css: '.clear-completed'},

	createTd() {
		I.fillField(this.fields.tdInput, this.tdTitle);
		I.pressKey("Enter");

		return this.lastTd;
	},

	createMultipleTd() {
		for (let i = 0; i < 5; i++) {
			this.createTd(this.tdTitle + i);
		}
	}
}
