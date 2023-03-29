/* Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
Buon divertimento e confermate lettura come al solito! :baby-yoda: */

const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0,
            /* images: {
                title: [
                    'spiderman',
                    'Ratchet & Clank',
                    'star wars',
                    'gattino carino',
                    'avengers'
                ],
                description: [
                    'spiderman, l uomo che tirava bava dalle mani',
                    'Ratchet & Clank due amici coglionazzi',
                    'star wars un film che non ricordo molto bene',
                    'gattino carino simile al gatto con gli stivali',
                    'avengers tanti supereroi cazzutissimi'
                ],
                imagePath: [
                    './assets/img/01.webp',
                    './assets/img/02.webp',
                    './assets/img/03.webp',
                    './assets/img/04.webp',
                    './assets/img/05.webp',
                ],

            } */
            images: [
                {
                    imagePath: './assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    imagePath: './assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    imagePath: './assets/img/03.webp',
                    title: 'Fortnite',
                    description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    imagePath: './assets/img/04.webp',
                    title: 'Stray',
                    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    imagePath: './assets/img/05.webp',
                    title: "Marvel's Avengers",
                    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        }
    },
    methods: {
        prev() {
            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.images.length - 1
            }
        },
        next() {
            this.activeImage++
            if (this.activeImage === this.images.length) {
                this.activeImage = 0
            }
        },
        clickImage(index) {
            this.activeImage = index
        },
    },

}).mount('#app')