<template>
    <div>
        <div v-for="task in tasks" class="flex mb-4 items-center">
            <p v-bind:class="{'line-through': task.done }" class="w-full text-grey-darkest ">{{task.description}}</p>
            <button v-on:click="isDone(task)" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
            <button v-on:click="deleteTask(task)" class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['tasks'],
  methods: {
    deleteTask(task){
         this.$emit("deleteTask", task);
    },
    isDone(task){
        this.$emit("isDone", task);
    }
  }
}
</script>
