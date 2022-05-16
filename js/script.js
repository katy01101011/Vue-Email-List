// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e
// stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// Creare un array di 10 indirizzi mail

const app = new Vue(
    {
        el: '#root',
        data: {
            email: this.generateMail()
        },
        
        created() {
            for (let i = 0; i < 10; i++) {
                const ulList = document.querySelector('ul');
                const newLi = document.createElement('li');
                this.email = this.email;
                newLi.innerHTML = this.email;
                ulList.append(newLi)
                
                
            }
        },

        methods: {
            generateMail() {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (resp) => {
                    this.email = resp.data.response
                })
            }
        }
    }
)