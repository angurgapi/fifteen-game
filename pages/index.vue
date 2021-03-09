<template>
  <div class="container">
    <button class='newgame' @click='newGame'>перемешать</button>
    <div class="game">
      <div class="tile" @click='move()' v-for='tile in tilesList'>{{ tile }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tilesList: this.shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,''])
    }
  },
  methods: {
    shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
    },
    move(){
      let currentTile = event.target
      if(parseInt(currentTile.textContent)>0){        
        let tileNum = currentTile.textContent
        let allTiles = document.querySelectorAll('.tile')        
        let idx = 0
        for(let i=0; i< 16; i++){
          if (allTiles[i].textContent == currentTile.textContent){
            idx = i
          }
        }
        if(allTiles[idx-4] && allTiles[idx-4].textContent == ''){
          allTiles[idx-4].textContent = tileNum
          currentTile.textContent = ''
        }
        else if (allTiles[idx+4] && allTiles[idx+4].textContent == ''){
          allTiles[idx+4].textContent = tileNum
          currentTile.textContent = ''
        }
        else if (idx%4 && allTiles[idx-1].textContent == ''){  allTiles[idx-1].textContent = tileNum
          currentTile.textContent = ''
        }
        else if (allTiles[idx+1] && (idx+1)%4 && allTiles[idx+1].textContent == ''){
          allTiles[idx+1].textContent = tileNum
          currentTile.textContent = ''
        }
        if (this.checkWin()){
          alert('you won!')
        }
      }
    },

    newGame(){
      location.reload()
      },
    checkWin(){
      let resultList = []
      for (let i=0; i<16; i++){
        resultList.push(document.querySelectorAll('.tile')[i].textContent)    
      }
      if (resultList[15] == ''){
        for (let i=0; i<15; i++){
          if (parseInt(resultList[i])>parseInt(resultList[i+1])){            
            return false
          }
        }
        return true
      }

    }
  }
}
</script>

<style lang='sass'>
.container 
  margin: 0 auto
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
.newgame
  text-transform: uppercase
  background-color: #031940
  color: #fcf4c5
  font-weight: 600
  height: 42px
  width: 120px
  border-radius: 5px
  padding: 3px

.game
  margin-top: 30px
  height: 500px
  width: 500px
  border: 2px solid rgba(0,0,0,.5)
  border-radius: 5px
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-gap: 10px
  padding: 10px
  background-color: #fcf4c5
.tile
  display: flex
  align-items: center
  justify-content: center
  font-size: 22px
  color: #031940
  border-radius: 5px
  background-color: #8fb7ba
  box-shadow: 0 3px 6px 2px rgba(0,0,0,.3)

@media(max-width: 500px)
  .game
    height: 90vw
    width: 90vw

</style>
