class Game{

    getState(){
        database.ref('gameState').on("value", (data)=> {
            gameState= data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){

        player = new Player()

        form= new Form()
        form.display()

        var countRef= await database.ref('playerCount').once("value")

if(countRef.exists()){
        player.getCount();
}
       car1=createSprite(200,200)
       car2=createSprite(400,200)
       car3=createSprite(600,200)
       car4=createSprite(800,200)
       cars=[car1,car2,car3,car4]

       car1.addImage(car1Img)
       car2.addImage(car2Img)
       car3.addImage(car3Img)
       car4.addImage(car4Img)

    }

    play (){

        if(player.distance>3500){
            gameState=2;
            player.rank++
            player.updateRank()
            myrank=player.rank;
          }
        
        form.greetings.hide()
        textSize(30)
        text ("game start", 200, 200)
        image (trackImg,0,-height*4,width,height*5)
        drawSprites()
        player.getInfoPlayer()
        player.getRank()
        if(keyIsDown(UP_ARROW)){
            player.distance+=50
            player.update()
        }
        var index=0;
        var x=440
        var newY=300
     for(var plr in allPlayers){
      cars[index].x=x
      cars[index].y=height-allPlayers[plr].distance
        if(plr==="player"+ player.index){
          fill ("red")
         camera.position.x=width/2
         camera.position.y=cars[index].y

        }
        else{
            fill("green")
        }
        // text(allPlayers[plr].name+":"+ allPlayers[plr].distance,200,newY)
        // newY+=50

        index++
        x+=200

        
     }

    }
end(){
    alert("GAME OVER " + " MY RANK IS : " + myrank)
}

}
