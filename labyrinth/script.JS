class containerClass {
    constructor(){
        this.containerDom = document.createElement('DIV')
        this.createContrainer()
    }
    
    createContrainer(){
        this.containerDom.className = "container"
        let bodyDom = document.getElementsByTagName('body')[0]
        bodyDom.appendChild(this.containerDom)
        console.log(this.containerDom)
    }
}

class playerClass {
    constructor(height, width, color, x, y){
        this.height = height
        this.width = width
        this.color = color
        this.xSpeed = 5
        this.ySpeed = 5
        this.x = x
        this.y = y
        this.playerDOM = document.createElement('DIV')
        this.picDOM = document.createElement('DIV')
        this.createPlayer()
    }

    createPlayer() {
        this.playerDOM.className = "player"
        this.playerDOM.style.width = this.width + 'px'
        this.playerDOM.style.height = this.height + 'px'
        this.playerDOM.style.top = this.y + 'px'
        this.playerDOM.style.left = this.x + 'px'
        this.playerDOM.style.backgroundColor = this.color;
        document.getElementsByClassName("container")[0].appendChild(this.playerDOM)
    }

    createPic() {
        this.picDOM.style.visibility = 'visible'
        this.picDOM.className = "pic"
        this.picDOM.style.width = 100 + '%'
        this.picDOM.style.height = 100 + '%'
        this.picDOM.style.zIndex = 2
        this.picDOM.style.background = "url('Images/youlose.png')"
        document.getElementsByClassName("container")[0].appendChild(this.picDOM)
    }

    movePlayer(pressed) {
        //console.log(pressed)
        switch (pressed.key) {
            case 'w' :
                this.y -= this.ySpeed;
                this.playerDOM.style.top = this.y + 'px';
                if (this.picDOM.style.visibility = 'visible'){
                    this.picDOM.style.visibility = 'hidden'
                    goal.winPicDom.style.visibility = 'hidden'
                }
                break
            case 'a' :
                this.x -= this.xSpeed;
                this.playerDOM.style.left = this.x + 'px';
                if (this.picDOM.style.visibility = 'visible'){
                    this.picDOM.style.visibility = 'hidden'
                    goal.winPicDom.style.visibility = 'hidden'
                }
                break
            case 's' :
                this.y += this.ySpeed;
                this.playerDOM.style.top = this.y + 'px';
                if (this.picDOM.style.visibility = 'visible'){
                    this.picDOM.style.visibility = 'hidden'
                    goal.winPicDom.style.visibility = 'hidden'
                }
                break
            case 'd' :
                this.x += this.xSpeed;
                this.playerDOM.style.left =  this.x + 'px';
                if (this.picDOM.style.visibility = 'visible'){
                    this.picDOM.style.visibility = 'hidden'
                    goal.winPicDom.style.visibility = 'hidden'
                }
                break
            //case 'c' :
            //    console.clear()
            //    break
        }
    }

    wallHit(){

        const wallArray = [obstacleV1,obstacleV2,obstacleV3,obstacleV4,obstacleV5,obstacleV6,
            obstacleV7,obstacleV8,obstacleV9,obstacleV10,obstacleV11,obstacleV12,obstacleV13,obstacleV14,obstacleV15,obstacleV16,
            obstacleV17,obstacleV18,obstacleV19,obstacleV20,obstacleV21,obstacleV22,obstacleV23,start1,start2,start3,
            obstacleH1,obstacleH2,obstacleH3,obstacleH4,obstacleH5,obstacleH6,obstacleH7,obstacleH8,obstacleH9,obstacleH10,obstacleH11,start4,start5]

        for (let i = 0; i < wallArray.length; i++) {
            let wallHeightInt = parseInt(wallArray[i].wallHeight)
            let wallYInt = parseInt(wallArray[i].wallY)
            let wallWidthInt = parseInt(wallArray[i].wallWidth)
            let wallXInt = parseInt(wallArray[i].wallX)
            if (this.x >= wallXInt - 7.5 && this.x <= wallXInt + wallWidthInt + 7.5 &&
                this.y >= wallYInt - 7.5 && this.y <= wallYInt + wallHeightInt + 7.5) {
                    this.y = 635
                    this.playerDOM.style.top = this.y + 'px';
                    this.x = 1100
                    this.playerDOM.style.left = this.x + 'px';
                    player.createPic()
            }
        }
    }

    winGame() {
        if (this.x >= goal.goalX - 7.5 && this.x <= goal.goalX + goal.goalWidth + 7.5 &&
            this.y >= goal.goalY - 7.5 && this.y <= goal.goalY + goal.goalHeight + 7.5) {
                goal.createWinPic()
                alert("Well Done!")
                this.y = 635
                this.playerDOM.style.top = this.y + 'px';
                this.x = 1100
                this.playerDOM.style.left = this.x + 'px';
                console.log(this.x)
                console.log(this.y)
        }
    }
}


class wallClass {
    constructor(wallY, wallX, wallWidth, wallHeight){
        this.wallY = wallY
        this.wallX = wallX
        this.wallWidth = wallWidth
        this.wallHeight = wallHeight
        this.obstacleSpawn()
    }

    obstacleSpawn(){
        const wallDOM = document.createElement("DIV")
        wallDOM.className = "wall"
        wallDOM.style.width = this.wallWidth + 'px'
        wallDOM.style.height = this.wallHeight + 'px'
        wallDOM.style.top = this.wallY + 'px'
        wallDOM.style.left = this.wallX + 'px'
        document.getElementsByClassName("container")[0].appendChild(wallDOM)
    }
}

class goalClass {
    constructor(goalY, goalX, goalWidth, goalHeight){
        this.goalY = goalY
        this.goalX = goalX
        this.goalWidth = goalWidth
        this.goalHeight = goalHeight
        this.goalSpawn()
        this.winPicDom = document.createElement('DIV')
    }

    goalSpawn(){
        const goalDOM = document.createElement("DIV")
        goalDOM.className = "goal"
        goalDOM.style.width = this.goalWidth + 'px'
        goalDOM.style.height = this.goalHeight + 'px'
        goalDOM.style.top = this.goalY + 'px'
        goalDOM.style.left = this.goalX + 'px'
        document.getElementsByClassName("container")[0].appendChild(goalDOM)
    }

    createWinPic() {
        this.winPicDom.style.visibility = 'visible'
        this.winPicDom.className = "winPic"
        this.winPicDom.style.width = 100 + '%'
        this.winPicDom.style.height = 100 + '%'
        this.winPicDom.style.zIndex = 3
        this.winPicDom.style.background = "url('Images/youwin.png')"
        document.getElementsByClassName("container")[0].appendChild(this.winPicDom)
    }
}

const container = new containerClass()
//player
const player = new playerClass(20, 20, 'red', 1100, 635)
//Start Box
const start1 = new wallClass(550, 1175, 15, 150)
const start2 = new wallClass(550, 1015, 15, 60)
const start3 = new wallClass(650, 1015, 15, 50)
const start4 = new wallClass(550, 1025, 150, 15)
const start5 = new wallClass(700, 1015, 175, 15)
//Horizontal Wall 1
const obstacleH1 = new wallClass(595, 815, 200, 15)
const obstacleH2 = new wallClass(650, 775, 250, 15)
const obstacleV8 = new wallClass(630, 1005, 15, 25)
const obstacleV9 = new wallClass(605, 970, 15, 25)
const obstacleV10 = new wallClass(630, 935, 15, 25)
const obstacleV11 = new wallClass(605, 900, 15, 25)
const obstacleV12 = new wallClass(630, 865, 15, 25)
const obstacleV13 = new wallClass(605, 830, 15, 25)
//Vertical Wall 1
const obstacleV1 = new wallClass(450, 765, 20, 215)
const obstacleV2 = new wallClass(495, 815, 15, 100)
//Horizontal Wall 2
const obstacleH3 = new wallClass(450, 770, 430, 15)
const obstacleH4 = new wallClass(495, 820, 425, 15)
//Vertical Wall 2
const obstacleV3 = new wallClass(325, 1235, 15, 185)
const obstacleV4 = new wallClass(360, 1185, 15, 105)
//Horizontal Wall 3
const obstacleH5 = new wallClass(310, 775, 475, 15)
const obstacleH6 = new wallClass(352.5, 810, 390, 15)
//Vertical Wall 3
const obstacleV5 = new wallClass(310, 770, 20, 95)
//Horizontal Wall 4
const obstacleH7 = new wallClass(390, 775, 380, 15)
const obstacleV14 = new wallClass(400, 1115, 15, 30)
const obstacleV15 = new wallClass(425, 1080, 15, 25)
const obstacleV16 = new wallClass(400, 1045, 15, 30)
const obstacleV17 = new wallClass(425, 1010, 15, 25)
const obstacleV18 = new wallClass(400, 975, 15, 30)
const obstacleV19 = new wallClass(425, 905, 15, 25)
const obstacleV20 = new wallClass(400, 870, 15, 30)
const obstacleV21 = new wallClass(425, 835, 15, 25)
const obstacleV22 = new wallClass(400, 800, 15, 30)
const obstacleV23 = new wallClass(425, 765, 15, 25)
//Vertical Wall 4
const obstacleV6 = new wallClass(390, 720, 15, 240)
//Horizontal Wall 5
const obstacleH8 = new wallClass(390, 730, 45, 15)
const obstacleH9 = new wallClass(650, 685, 150, 15)
//Vertical Wall 5
const obstacleV7 = new wallClass(360, 685, 15, 290)
//Horizontal Wall 6
const obstacleH10 = new wallClass(345, 685, 65, 15)
const obstacleH11 = new wallClass(310, 685, 85, 15)
//GOAL
const goal = new goalClass(325, 685, 10, 20)

document.addEventListener('keydown', (pressed) =>{
        player.movePlayer(pressed)
        player.wallHit()
        player.winGame()
})
