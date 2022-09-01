<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="text-center text-2xl">Todo List</h1>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold text-center">
          Adicione itens a fazer
        </h2>
        <div>
            <div class="mb-4">
                <div class="flex mt-4">
                    <input v-model="task" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" v-on:keyup.enter="addTask(task)" placeholder="Add Todo">
                </div>
            </div>
            <Task v-bind:tasks="listTasks" v-on:deleteTask="deleteTask"></Task>
        </div>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
        </p>
      </div>
      <Social></Social>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
        return {
          task: "",
          message: "",
          listTasks: ["igor"]
        };
  },
  methods: {
    addTask(task){
      this.listTasks.push(task);
      this.task = "";
    },
    deleteTask: function (task) {
			this.listTasks.splice(this.listTasks.indexOf(task), 1);
    },
  }
}
</script>
