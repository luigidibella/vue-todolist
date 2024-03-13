const { createApp} = Vue;

createApp({
  data(){
    return{
      todoList:[
        {
          text: 'Inserisci un nuovo task',
          done: false
        },
        {
          text: 'Clicca sui task completati',
          done: false
        },
        {
          text: 'Elimina i task completati',
          done: false
        }
      ],
      newTask: '',
      errorMsg: '',
      isError: false
    }
  },

  methods: {
    addTask(){
      if(this.newTask.length >= 4){
        this.todoList.unshift({ text: `${this.newTask}`, done: false},);
        this.newTask = '';
        this.errorMsg = '';
        this.isError = '';
      }else{
        this.errorMsg = 'Attenzione! il testo deve avere almeno 4 caretteri'
        this.isError = true;
      }

    },

    eliminaTask(indice){
      if(this.todoList[indice].done === true){
        this.todoList.splice(indice, 1);
        this.errorMsg = '';
      }else{
        this.errorMsg = 'Completa il task per poterlo eliminare'
      }
    }
  },

  mounted() {
    console.log();
  }
}).mount('#app');