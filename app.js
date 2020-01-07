let app = new Vue({
    el: '#app',
    data: {
        title: 'Dice',
        subtitle: 'by Ivan de Wolf',
        n_dice: 2,
        dice: [6, 6],
        menu: null
    },
    mounted() {
        this.menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'))
    },
    methods: {
        roll() {
            const max_dice_face = 6

            for (let i = 0; i < this.n_dice; i++)
                this.dice.splice(i, 1, Math.ceil(Math.random() * max_dice_face))
        },
        open() {
            this.menu.open = true
        },
        select(value) {
            this.n_dice = value
            this.dice = new Array(this.n_dice)
            
            this.roll()
        }
    }
})

/* When launched roll the dice the first time. */
app.roll()
