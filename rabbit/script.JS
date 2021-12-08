//make the grid
class Grid{
    constructor(){
        this.grid_container = document.querySelector('#grid_container')
        this.generateGrid(this.grid_container)
        this.colorGrid()
    }

    generateGrid = (grid_container) =>{
        for(let i = 0; i < 30; i++){
            let grid_item = document.createElement('DIV')
            grid_item.className = 'grid_item grid_item_black'
            grid_container.appendChild(grid_item)
        }
    }

    colorGrid = () =>{
        for(let i = 0; i < 30; i += 2){
            let grid_item = document.querySelectorAll('.grid_item')[i]
            grid_item.classList.remove('grid_item_black')
            grid_item.classList.add('grid_item_white')
        }
    }
}

const grid = new Grid()

//rabbit stuff
class Rabbit{
    constructor(x, y, color, id){
        this.x = x
        this.y = y
        this.id = id
        this.color = color
        this.rng = Math.floor(Math.random()*100)
        this.grid_container = document.querySelector('#grid_container')
        this.createRabbit()
    }

    //yikes :)
    createRabbit = () =>{
        const rabbit_container = document.createElement('DIV')
        rabbit_container.className = 'rabbit_container'
        rabbit_container.id = this.id
        const rabbit_body = document.createElement('DIV')
        rabbit_body.className = 'rabbit_body'
        const rabbit_head = document.createElement('DIV')
        rabbit_head.className = 'rabbit_head'
        const rabbit_ears_left = document.createElement('DIV')
        rabbit_ears_left.className = 'rabbit_ears_left'
        const rabbit_ears_right = document.createElement('DIV')
        rabbit_ears_right.className = 'rabbit_ears_right'
        const rabbit_tail = document.createElement('DIV')
        rabbit_tail.className = 'rabbit_tail'
        rabbit_body.style.backgroundColor = this.color
        rabbit_head.style.backgroundColor = this.color
        rabbit_ears_left.style.backgroundColor = this.color
        rabbit_ears_right.style.backgroundColor = this.color
        rabbit_tail.style.backgroundColor = this.color
        rabbit_container.style.left = this.x + "%"
        rabbit_container.style.top = this.y + 'px'
        rabbit_container.appendChild(rabbit_body)
        rabbit_container.appendChild(rabbit_head)
        rabbit_head.appendChild(rabbit_ears_left)
        rabbit_head.appendChild(rabbit_ears_right)
        rabbit_container.appendChild(rabbit_tail)
        this.grid_container.appendChild(rabbit_container)
    }
}

const green_rabbit = new Rabbit(15,750, 'green', 'green_rabbit')
const blue_rabbit = new Rabbit(35,750, 'blue', 'blue_rabbit')
const red_rabbit = new Rabbit(55,750, 'red', 'red_rabbit')
const yellow_rabbit = new Rabbit(75,750, 'yellow', 'yellow_rabbit')

class Game{
    constructor(){
        this.incrementCount = 25
        this.moveRabbit()
    }

    moveRabbit = () =>{
        const greenRabbitDOM = document.querySelector('#' + green_rabbit.id)
        const blueRabbitDOM = document.querySelector('#' + blue_rabbit.id)
        const redRabbitDOM = document.querySelector('#' + red_rabbit.id)
        const yellowRabbitDOM = document.querySelector('#' + yellow_rabbit.id)
        let greenRabbitObject = { id: greenRabbitDOM, rng: undefined, y: green_rabbit.y, name: " Green rabbit"}
        let blueRabbitObject = { id: blueRabbitDOM, rng: undefined, y: blue_rabbit.y, name: " Blue rabbit"}
        let redRabbitObject = { id: redRabbitDOM, rng: undefined, y: red_rabbit.y, name: " Red rabbit"}
        let yellowRabbitObject = { id: yellowRabbitDOM, rng: undefined, y: yellow_rabbit.y, name: " Yellow rabbit"}
        let rabbitArray = []
        rabbitArray.push(greenRabbitObject,blueRabbitObject,redRabbitObject,yellowRabbitObject)

        let play = null

        //make the game start and play
        const playButtonDOM = document.querySelector('#start')
        playButtonDOM.addEventListener('click', () =>{
                play = true
                console.log(play)
        })

        //make the game pause
        const stopButtonDOM = document.querySelector('#stop')
        stopButtonDOM.addEventListener('click', () =>{
                play = false
                console.log(play)
        })

        let scoreArray = []
        

        //every 0.25 seconds move rabbit by top: -25px;
        for (const rabbit of rabbitArray){
            const moveInterval = setInterval(() =>{
                rabbit.rng = Math.floor(Math.random()*100)
                if (play === true){
                    if(rabbit.rng >= 50){
                        if(rabbit.y <= 150) {
                            scoreArray.push(rabbit.name)
                            let position = parseFloat(scoreArray.indexOf(rabbit.name) + 1)
                            switch(position){
                                case 1: alert(rabbit.name + " came in " + position + "st position")
                                    break
                                case 2: alert(rabbit.name + " came in " + position + "nd position")
                                    break
                                case 3: alert(rabbit.name + " came in " + position + "rd position")
                                    break
                                case 4: alert(rabbit.name + " came in " + position + "th position")
                            }
                            clearInterval(moveInterval)
                            console.log(scoreArray)
                            return
                        }
                        rabbit.y = rabbit.y -= this.incrementCount
                        rabbit.id.style.top = rabbit.y + 'px'
                    }
                }
            },250)
        }  
    }
}

const game = new Game()