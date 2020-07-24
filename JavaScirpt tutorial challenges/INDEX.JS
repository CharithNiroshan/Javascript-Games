//Your age in days

function ageindays()
{
    let birthyear=prompt("What is your birthyear?");
    let noofdays=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('You are '+noofdays+' day old.');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flexboxresult').appendChild(h1);
}

function  reset()
{
    document.getElementById('ageindays').remove();
}

function catgenerate()
{
    var image=document.createElement('img');
    image.src="https://placekitten.com/200/300";
    image.setAttribute('id','catimage');
    var div=document.getElementById("flexboxcontainer2").appendChild(image);

}

function catreset()
{
    document.getElementById('catimage').remove();
}

function rpsgame(choice)
{
    let humanchoice,computerchoice;
    humanchoice=choice.id;
    computerchoice=decidechoice(random());
    let results=decide(humanchoice,computerchoice);
    let message=finalmessage(results);
    rpsfront(humanchoice,computerchoice,message);
}

function random()
{
    number=Math.floor(Math.random()*3);
    return number;
}

function decidechoice(number)
{
    return ['rock','paper','scissor'][number];
}

function decide(humanchoice,computerchoice)
{
    var rpsdatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0}
    }
    var yourscore=rpsdatabase[humanchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][humanchoice];
    return (yourscore+"-"+computerscore);
}

function finalmessage(results)
{
    switch(results)
    {
        case '1-0':return {'message': 'You Won','color':'green'};
        break;
        case '0.5-0.5':return {'message': 'You Tied','color':'yellow'};
        break;
        case '0-1':return{'message':'You Lost','color':'red'}
        break;
    }
}

function rpsfront(yourchoice,computerchoice,message)
{
    var images={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissor').remove();
    document.getElementById('label2').remove();
    var yourdiv=document.createElement('div');
    var comdiv=document.createElement('div');
    var labeldiv=document.createElement('div');
    yourdiv.setAttribute('id','yourchoice');
    comdiv.setAttribute('id','comchoice');
    labeldiv.setAttribute('id','result');
    yourdiv.innerHTML="<img src='"+images[yourchoice]+"' height='200px' width='200px' style='box-shadow: 0px 10px 50px rgb(4, 11, 112,1)'>";
    labeldiv.innerHTML="<h1 style='color :"+message['color']+"'; font-size:60px; padding:30px;>"+message['message']+"</h1>";
    comdiv.innerHTML="<img src='"+images[computerchoice]+"' height='200px' width='200px' style='box-shadow: 0px 10px 50px rgb(223, 11, 11,1)'>";
    document.getElementById('flexbox').appendChild(yourdiv);
    document.getElementById('flexbox').appendChild(labeldiv);
    document.getElementById('flexbox').appendChild(comdiv);
}

function playagain()
{
    document.getElementById('yourchoice').remove();
    document.getElementById('comchoice').remove();
    document.getElementById('result').remove();
    var rockdiv=document.createElement('div');
    var paperdiv=document.createElement('div');
    var scissordiv=document.createElement('div');
    var h2=document.createElement('h2');
    h2.setAttribute('id','label2');
    var text=document.createTextNode("Let's Play");
    h2.appendChild(text);
    document.getElementById("let's play").appendChild(h2);
    rockdiv.setAttribute('id','Rock');
    paperdiv.setAttribute('id','Paper');
    scissordiv.setAttribute('id','Scissor');
    rockdiv.innerHTML=" <img src='Images\\Rock,Paper,Scissors\\Rock.jpeg'  id='rock' alt='Rock' height='200px' width='200px' onclick='rpsgame(this)'>";
    paperdiv.innerHTML=" <img src='Images\\Rock,Paper,Scissors\\Paper.png'  id='paper' alt='Paper' height='200px' width='200px' onclick='rpsgame(this)'>";
    scissordiv.innerHTML=" <img src='Images\\Rock,Paper,Scissors\\Scissor.jpeg' id='scissor' alt='Scissor' height='200px' width='200px' onclick='rpsgame(this)'>";
    document.getElementById('flexbox').appendChild(rockdiv);
    document.getElementById('flexbox').appendChild(paperdiv);
    document.getElementById('flexbox').appendChild(scissordiv);
}

var allbuttons=document.getElementsByTagName('button');



function buttoncolorchange(Button)
{
    
    if(Button.value=='red')
    {
        buttonred();
    }
    else if(Button.value=='green')
    {
        buttongreen();
    }
    else if(Button.value=='random')
    {
        buttonrandom();
    }
    else
    {
        buttonreset();
    }
     
}

function buttongreen()
{
    for(let i=0;i<allbuttons.length;i++)
    {
        document.getElementById(allbuttons[i].id).style.background='green';
    }
}

function buttonrandom()
{
    for(let i=0;i<allbuttons.length;i++)
    {
        let number=Math.floor(Math.random()*6);
        let color=['blue','green','black','yellow','red','grey'][number];
        document.getElementById(allbuttons[i].id).style.background=color;
    }
}

function buttonreset()
{
    for(let i=0;i<copybuttons.length;i++)
    {
        document.getElementById(allbuttons[i].id).style.background='blue';
    }
}

function buttonred()
{
    for(let i=0;i<allbuttons.length;i++)
    {
        document.getElementById(allbuttons[i].id).style.background='red';
    }
}
    
//Challenge 5: Blackjack'

var hitbutton=document.querySelector('#hit');
var standbutton=document.querySelector('#stand');
var dealbutton=document.querySelector('#deal');
hitbutton.addEventListener('click',blackjackhit);
standbutton.addEventListener('click',dealerlogic);
dealbutton.addEventListener('click',blackjackdeal);

var blackjackgame={
    'you':{
        'scorespan':'#yourscore','div':'#mybox','score':0
    },
    'dealer':{
        'scorespan':'#dealerscore','div':'#dealerbox','score':0
    },
    'cards':[
        '2','3','4','5','6','7','8','9','10','J','Q','K','A'
    ],
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'isDeal':false,
}

let cardslinks={
    '2':'blackjack_assets\\images\\2.png',
    '3':'blackjack_assets\\images\\3.png',
    '4':'blackjack_assets\\images\\4.png',
    '5':'blackjack_assets\\images\\5.png',
    '6':'blackjack_assets\\images\\6.png',
    '7':'blackjack_assets\\images\\7.png',
    '8':'blackjack_assets\\images\\8.png',
    '9':'blackjack_assets\\images\\9.png',
    '10':'blackjack_assets\\images\\10.png',
    'J':'blackjack_assets\\images\\J.png',
    'Q':'blackjack_assets\\images\\Q.png',
    'K':'blackjack_assets\\images\\K.png',
    'A':'blackjack_assets\\images\\A.png',
}

let cardvalues={
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'J':10,
    'Q':10,
    'K':10,
    'A':[1,11],
}

const YOU=blackjackgame['you'];
const DEALER=blackjackgame['dealer'];
const hitsound=new Audio("blackjack_assets\\sounds\\swish.m4a");
const winsound=new Audio("blackjack_assets\\sounds\\cash.mp3");
const losssound=new Audio("blackjack_assets\\sounds\\aww.mp3");


function blackjackhit()
{
        let card=randomcardgenerator();
        showcard(card,YOU);
        updatescore(card,YOU);
        showscore(YOU);
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerlogic()
{
    while(DEALER['score']<20 )
    {
        blackjackgame['isStand']=true;
        let card=randomcardgenerator();
        showcard(card,DEALER);
        updatescore(card,DEALER);
        showscore(DEALER);
        await sleep(1000);
    }
    showresults(winnerdecide());
    tableresults();
}


function randomcardgenerator()
{
    let number=Math.floor(Math.random()*13);
    return blackjackgame['cards'][number];
}


function blackjackdeal()
{
    let yourimages=document.querySelector('#mybox').querySelectorAll('img');
    let dealerimages=document.querySelector('#dealerbox').querySelectorAll('img');
    YOU['score']=0;
    DEALER['score']=0;
    let yourlabel=document.querySelector(YOU['scorespan']);
    let dealerlabel=document.querySelector(DEALER['scorespan']);
    yourlabel.textContent=0;
    yourlabel.style.color='white';
    dealerlabel.textContent=0;
    dealerlabel.style.color='white';
    
    for(let i=0;i<yourimages.length ;i++)
    {
        yourimages[i].remove();
    }
    for(let i=0;i<dealerimages.length;i++)
    {
        dealerimages[i].remove();
    }
    document.querySelector('#hit').disabled=false;
    document.querySelector('#stand').disabled=false;
    document.querySelector("#blackjacklabel").textContent="Let's Play";
    document.querySelector("#blackjacklabel").style.color='white';

}

function updatescore(card,activeplayer)
{
    
        if(card=='A')
        {
           if((activeplayer['score']+cardvalues[card][1])<=21)
           {
               activeplayer['score']+=cardvalues[card][1];
           }
           else
           {
               activeplayer['score']+=cardvalues[card][0]; 
           }
        }
        else
        {
            activeplayer['score']+=cardvalues[card];
        }
}

function showscore(activeplayer)
{
    if(activeplayer['score']<=21)
    {
        
        document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
        
    }
    else
    {
        document.querySelector(activeplayer['scorespan']).textContent='BUST!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
        if(activeplayer==YOU)
        {
            document.querySelector('#hit').disabled=true;
        }
        else
        {
            document.querySelector('#stand').disabled=true;
        }
    }
}

function showcard(card,activeplayer)
{
    let cardimage=document.createElement('img');
    cardimage.src=cardslinks[card];
    document.querySelector(activeplayer['div']).appendChild(cardimage);
    hitsound.play();
}

function winnerdecide()
{
    let winner;
    if(YOU['score']<=21)
    {
        if(YOU['score']>DEALER['score'] || DEALER['score']>21)
        {
            blackjackgame['wins']++;
            winner=YOU;
        }
        else if(YOU['score']<DEALER['score'])
        {
            blackjackgame['losses']++;
            winner=DEALER;
        }
        else if(YOU['score']== DEALER['score'])
        {
            blackjackgame['draws']++;
        }
    }
    else if(YOU['score']>21 && DEALER['score']<=21)
    {
        blackjackgame['losses']++;
        winner=DEALER;
    }
    else if(YOU['score']>21 && DEALER['score']>21)
    {
        blackjackgame['draws']++;
    }
    return winner;
}

function showresults(winner)
{
    let message,messagecolor;
    if(winner==YOU)
    {
        message='You Won';
        messagecolor='green';
        console.log(message);
        winsound.play();
    }
    else if(winner==DEALER)
    {
        message='You Lost';
        messagecolor='red';
        console.log(message);
        losssound.play();
    }
    else 
    {
        message='You Drew';
        messagecolor='black';
    }
    document.querySelector('#blackjacklabel').textContent=message;
    document.querySelector('#blackjacklabel').style.color=messagecolor;
}
function tableresults()
{
    document.querySelector('#wins').textContent=blackjackgame['wins'];
    document.querySelector('#loses').textContent=blackjackgame['losses'];
    document.querySelector('#draws').textContent=blackjackgame['draws'];
}


