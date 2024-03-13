const { createApp} = Vue;

createApp({
  data(){
    return{
      todoList:[
        'Iscriversi a X',
        'Vedere Fallout serie',
        'Vedere Ted Talk'
      ],
      newTask: '',
      errorMsg: '',
      isError: false
    }
  },

  methods: {
    addTask(){
      if(this.newTask.length >= 5){
        this.todoList.unshift(this.newTask);
        this.newTask = '';
        this.errorMsg = '';
        this.isError = '';
      }else{
        this.errorMsg = 'Attenzione! il testo deve avere almeno 5 caretteri'
        this.isError = true;
      }

    },

    eliminaTask(indice){
      this.todoList.splice(indice, 1);
    }
  },
}).mount('#app');