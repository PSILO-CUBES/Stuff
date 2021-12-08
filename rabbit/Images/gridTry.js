class gridContainerClass {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = document.getElementsByTagName('body')[0]
        this.gridContainerDOM = document.createElement('DIV')
        this.gridSquaresDOM = document.createElement('DIV')
        this.gridChildDOM = document.createElement('DIV')
        this.createGridContainerClass()
        this.createGridChild()
    }

    createGridContainerClass(){
        this.body.appendChild(this.gridContainerDOM)
        this.gridContainerDOM.setAttribute('id','gridContainer')
        this.gridContainerDOM.style.position = 'relative'
        this.gridContainerDOM.style.left = this.x
        this.gridContainerDOM.style.top = this.y
        this.gridContainerDOM.style.width = this.width
        this.gridContainerDOM.style.height = this.height
        this.gridContainerDOM.style.display = 'grid'
    }

    createGridChild(){
        this.gridChildDOM.setAttribute('id','gridChild')
        this.gridChildDOM.style.position = 'relative'
        this.gridChildDOM.style.width = this.width
        this.gridChildDOM.style.height = this.height
        this.gridChildDOM.style.display = 'grid'
        for (let i = 0; i < 4; i++) {
            this.gridChildDOM.style.left = this.x * i
            this.gridContainerDOM.appendChild(this.gridChildDOM)
            console.log('hi world')
            for (let j = 0; j < 6; j++) {
                this.gridChildDOM.style.top = this.y * j
                        this.gridContainerDOM.appendChild(this.gridChildDOM)
            }
        }
    }
}

const gridContainer = new gridContainerClass(25 + 'vw', 0, 50 + 'vw', 100 + 'vh')