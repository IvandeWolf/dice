let app = new Vue({
    el: '#app',
    data: {
        title: 'Dice',
        subtitle: 'by Ivan de Wolf',
        n_dice: 2,
        dice: [6, 6]
    },
    methods: {
        roll() {
            const max_dice_face = 6

            for (let i = 0; i < this.n_dice; i++)
                this.dice.splice(i, 1, Math.ceil(Math.random() * max_dice_face))
        }
    }
})

/* When launched roll the dice the first time. */
app.roll()
