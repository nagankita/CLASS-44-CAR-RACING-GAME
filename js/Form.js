class Form{


    display(){

        this.resetButton=createButton("RESET")
        this.resetButton.position(width-200,50)
        this.resetButton.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
        })
        this.title= createElement('h2')
        this.title.html("CAR RACING GAME")
        this.title.position(150,50)

        this.input= createInput("name")
        this.input.position(100,200)

        this.button= createButton("PLAY")
        this.button.position(200,250)

        this.button.mousePressed( ()=>{

            this.input.hide()
            this.button.hide()

            player.name= this.input.value()
            this.greetings= createElement('h1')
            this.greetings.html("hello : " + player.name)
            this.greetings.position(200,200)
            
            playerCount++
        player.updateCount(playerCount)

        player.index=playerCount
            player.update();

        })

    }
}
