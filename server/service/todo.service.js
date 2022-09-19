class TodoService {
  constructor({ dao }) {
    this.dao = dao;
  }

  getTodo() {
    console.log('kkk')
    const { msg } = this.dao.getValue();
    return 'kkk';
  }

  addTodo() {
    return "service add todo";
  }
}

module.exports = TodoService;
