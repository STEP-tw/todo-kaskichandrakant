let User = require('../appModules/user.js');
let assert = require('chai').assert;
let userInfoSrc = './testUser.json'
let user = new User(userInfoSrc);



describe('#user', function() {
  describe('#loadAllUsers', function() {
    it('will load the all information about users', function() {
      user.loadAllUsers();
      assert.deepEqual(user.getUserInfo('santosh'), {})
    })
  })
  describe('#addTodoList', function() {
    it('should change the task status as not done', function() {
      user.loadAllUsers();
      user.addTodoList('santosh', 'NOTHING', 'nothing')
      assert.equal(user.getUserInfo('santosh')['NOTHING'].title, 'NOTHING')
    })
  })
  describe('#removeTodoList', function() {
    it('should remove the specific todoList', function() {
      user.loadAllUsers();
      user.addTodoList('santosh', 'NOTHING', 'nothing')
      assert.equal(user.getUserInfo('santosh')['NOTHING'].title, 'NOTHING')
      user.removeTodoList('santosh', 'NOTHING')
      user.addTodoList('santosh', 'SOMETHING', 'sometning')
      assert.notDeepEqual(user.getUserInfo('santosh'), {})
      user.removeTodoList('santosh', 'SOMETHING')
      assert.deepEqual(user.getUserInfo('santosh'), {})
    })
  })
  describe('#changeTitle', function() {
    it('should be able to change the title of todo', function() {
      user.loadAllUsers();
      user.addTodoList('santosh', 'NOTHING', 'nothing');
      user.changeTitle('santosh','NOTHING','SOMETHING')
      assert.equal(user.getUserInfo('santosh')['SOMETHING'].description, 'nothing')
    })
  })
  describe('#changeDescription', function() {
    it('should be able to change the title of todo', function() {
      user.loadAllUsers();
      user.addTodoList('santosh', 'NOTHING', 'nothing');
      user.changeDescription('santosh','NOTHING','SOMETHING')
      assert.equal(user.getUserInfo('santosh')['NOTHING'].description, 'SOMETHING')
    })
  })
  describe('#addTask', function() {
    it('should be able to change the title of todo', function() {
      user.loadAllUsers();
      user.addTodoList('santosh', 'NOTHING', 'nothing');
      user.addTask('santosh','NOTHING','do something');
      let actual=user.getTasks('santosh','NOTHING')['do something'].task
      let expected='do something'
      assert.equal(actual,expected);
    })
  })
})
