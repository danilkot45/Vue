
<template>
  <div id="lessonTwo">
    <h1>{{ message }}</h1>
    <form>
      <Form :add="addTask" :value="newTitle" @input="newTitle = $event"> </Form>
    </form>
    <Statistics :compl="completedTasks" :id="allTasks" :comptask="completeTasklist"></Statistics>
    <br>
    <template v-for="i in radioTask">
      <input type="radio" class="btn-check" name="options" :id="i.id" :checked="i.check"
        @change="radioState = i.change">
      <label :for="i.id" :class="i.classes" style="margin-right: 5px;"> {{ i.title }}</label>
    </template>
    <br><br>
    <input v-model="searchTitle">
    <br>
    <br>
    <h2 v-show="this.todoItems.length == 0">{{ titleAdd }}</h2>
    <ul class="list-group">
      <TodoList v-for="(i, index) in todoList" :id="index" :key="i.id" :text="i.text" @click="i.done = !i.done"
        :btntext="btnText(index)" :color="i.done ? 'btn btn-success' : 'btn btn-secondary'">
      </TodoList>
    </ul>
  </div>
</template>
<script>
import Form from './components/Form.vue'
import TodoList from './components/TodoList.vue'
import Statistics from './components/Statistics.vue'
export default {
  name: 'LessonTwo',
  data() {
    return {
      message: 'Hello from Vue App',
      todoItems: [],
      radioTask: [
        { id: "option1", change: "", classes: "btn btn-outline-warning", check: true, title: "Все задачи" },
        { id: "option2", change: "completed", classes: "btn btn-outline-success", check: false, title: "Выполненные задачи" },
        { id: "option3", change: "uncompleted", classes: "btn btn-outline-secondary", check: false, title: "Невыполненные задачи" }],
      newTitle: '',
      searchTitle: '',
      count: 0,
      radioState: "",
      titleAdd: 'Please add new task'

    }
  },
  computed: {
    allTasks() {
      return this.todoItems.length;
    },
    completedTasks() {
      this.count = 0
      for (let i in this.todoItems) {
        if (this.todoItems[i].done === true) {
          this.count++
        }
      }
      return this.count
    },
    completeTasklist() {
      return this.allTasks === 0 ? '0 %' : (this.count / (this.allTasks) * 100).toFixed(2) + '%'
    },
    todoList() {
      var vm = this

      let sortList = this.todoItems.filter(function (i) {
        return i.text.toLowerCase().indexOf(vm.searchTitle.toLowerCase()) !== -1
      })
      if (this.radioState === "completed") {
        return sortList.filter(function (i) { return i.done })
      } else if (this.radioState === "uncompleted") {
        return sortList.filter(function (i) { return !i.done })
      } else {
        return sortList
      }
    }
  },
  methods: {
    btnText(id) {
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
      return this.todoList[id].done === true ? 'completed' : 'in order'
    },
    addTask() {
      this.todoItems.push({
        id: this.allTasks + 1,
        text: this.newTitle,
        done: false
      })
      // console.log(this.newTitle)
      // console.log(this.todoItems)
      // console.log(this.todoList)
      this.newTitle = ''
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
    },
  },
  components: {
    Form,
    TodoList,
    Statistics
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem('todoItems'));
    if (data) {
      this.todoItems = data;
    }

  }
}
</script>

<style>
</style>