let cardTypes=[ "clubs", "diamonds", "hearts","spades"];
let pachet = { 
    'clubs': [], //2,3 ..
    'diamonds': [],
    'hearts': [],
    'spades': []
};
let score =0;
let vecheaCarte =0 ;
//    var x =7;
//    for(let i=0;i<3; i++){
//     x++;
//    }
//    console.log(x);
//    console.log(i);
function adaugaCartiInPachet(nrPachete = 1){
    for(let i =0; i<cardTypes.length; i++){ //index card type
        // i // index (0,1,2,3)
        // cardTypes[i] // 'clubs'...
        // masina ['model']
      
        for( let j = 2; j<=14; j++){//card number
            pachet[cardTypes[i]].push(j);
        }  

    }
    console.log(pachet);
}

   function incarcare(){
    //genereaza pachet
    adaugaCartiInPachet();
    nouaCarte = schimbaCarte();
    //ar urma comparatia 
    vecheaCarte= nouaCarte;
    //adaugare carte noua
    //setare scor 0
    //...
    afiseazaScor();
 }
function afiseazaScor(){
    const divScore = document.getElementById('score');
   const spanScore = divScore.getElementsByTagName( 'span')[0];
   spanScore.textContent =score;
}

 function schimbaCarte(){
  const indexType =  Math.floor(Math.random() * 4); //[0;1)
  const cardNumber =Math.floor( Math.random() * 13 + 2) ;
  const pozitie = pachet[cardTypes[indexType]].indexOf(cardNumber);
  const fileName ='cards/' + cardTypes[indexType] + '_'+ cardNumber+ '.svg';
  if (pozitie === -1){
    console.log('am obtinut ' + fileName + 'si nu este in pachet ')
    schimbaCarte();
    return;
  }
  pachet[cardTypes[indexType]].splice(pozitie, 1);
  console.log(pachet )

  console.log(fileName);
//   lastCardNumber= cardNumber;
  const imgElement = document.querySelector('#card> img');
//   imgElement.attributes['src']= fileName;
  imgElement.setAttribute('src', fileName);
  return cardNumber;
  


 }

 function showFace(happy){
    const divIdToShow = 'face-' + (happy ? 'happy' : 'sad');
    const divIdToHide = 'face-' + (!happy ? 'happy' : 'sad');
    document.getElementById(divIdToShow).style.display = 'block';
    document.getElementById(divIdToHide).style.display = 'none';

 }


 function higher(){
    nouaCarte = schimbaCarte();
    //ar urma comparatia 

    if( nouaCarte >= vecheaCarte){
        score++;
        showFace(true)
        afiseazaScor();
    } else{
        score--
        showFace(false)
        afiseazaScor()
    }
    vecheaCarte= nouaCarte;
 }
  var lower = function(){
    nouaCarte = schimbaCarte();
    //ar urma comparatia 
    if (typeof nouaCarte != 'number') return;
    if( nouaCarte <= vecheaCarte){
        score++;
        showFace(true)
        afiseazaScor();
    } else{
        score--
        showFace(false)
        afiseazaScor()
    }
    vecheaCarte= nouaCarte;

  }
 document.addEventListener("DOMContentLoaded", incarcare)