let TodoApp = require('../appModules/todoApp.js');
let assert = require('chai').assert;

describe('TodoApp', function() {
  describe('#addAccount', function() {
    it('will add the todolist in given todoApp', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh')
      assert.equal(todoApp.getTotalAccounts(), 1)
      todoApp.addAccount('someone')
      assert.equal(todoApp.getTotalAccounts(), 2)
    })
  })
  describe('#addTodoList', function() {
    it('will add the todolist in given todoApp', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh');
      todoApp.addTodoList('santosh','something', 'do something');
      assert.equal(todoApp.getTotalTodoCount('santosh'), 1)
      todoApp.addTodoList('santosh','something', 'do something else');
      assert.equal(todoApp.getTotalTodoCount('santosh'), 2)
    })
  })
  describe('#removeTodoList', function() {
    it('should remove the specific todoList', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh')
      todoApp.addTodoList('santosh','something', 'nothing')
      assert.equal(todoApp.getTotalTodoCount('santosh'), 1)
      todoApp.removeTodoList('santosh',1);
      assert.equal(todoApp.getTotalTodoCount('santosh'), 0);
    })
  })
  describe('#changeTitle', function() {
    it('should change the title of specific todo', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh')
      todoApp.addTodoList('santosh','something', 'nothing');
      assert.equal(todoApp.getTitle('santosh',1), 'something')
      todoApp.changeTitle('santosh',1, 'something else')
      assert.equal(todoApp.getTitle('santosh',1), 'something else')
    })
  })
  describe('#changeDescription', function() {
    it('should be able to change the description of todo', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh')
      todoApp.addTodoList('santosh','something', 'nothing');
      assert.equal(todoApp.getDescription('santosh',1), 'nothing');
      todoApp.changeDescription('santosh',1, 'something else');
      assert.equal(todoApp.getDescription('santosh',1), 'something else');
    })
  })
  describe('#addTask', function() {
    it('should be able to add the task in todo', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh')
      todoApp.addTodoList('santosh','something', 'nothing');
      todoApp.addTask('santosh',1, 'do something');
      assert.equal(todoApp.getTotalTaskCount('santosh',1), 1)
      todoApp.addTask('santosh',1, 'do something else');
      assert.equal(todoApp.getTotalTaskCount('santosh',1), 2)
    })
  })
  describe('#taskDone', function() {
    it('should be able to change task status of todo', function() {
      let todoApp= new TodoApp();
      todoApp.addAccount('santosh')
      todoApp.addTodoList('santosh','something', 'nothing');
      todoApp.addTask('santosh',1, 'do something');
      todoApp.taskDone('santosh',1, 1);
      assert.isOk(todoApp.isDone('santosh',1, 1));
      todoApp.addTask('santosh',1, 'do something else');
      assert.isNotOk(todoApp.isDone('santosh',1, 2));
    })
  })
})
