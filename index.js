const { AnswerList } = require('telebot');
const TeleBot = require('telebot');

const TOKEN = "Take token from BotFather";
const bot = new TeleBot(TOKEN);

const to = new Date('Sat Nov 07 2020 15:00:57 GMT+0500');
const until = new Date('Sat Nov 07 2020 15:40:57 GMT+0500');
var tartib = 0;
var usersId = [
    
    // navbatchilar ro'yxati ketma ketlikda
    {name:'Behruz', id:'533323195'},
    {name:'Muhriddin', id:'6406841'},
    {name:'Jsavohir', id:'46131565'},
    
    {name:'sansur', id:'43649673'},
    {name:'Mansaur', id:'136833400'},
    
    
];
var first_navbat = new Date('2019-11-07T03:07:50.848Z');
var todayNav = usersId[first_navbat.getDay()];

var navbatchilar='';
usersId.forEach(item => {
    navbatchilar = navbatchilar + `\n${item.name} - ${item.id}`
})
bot.on(['/hamma'], (msg)=>{
    msg.reply.text(navbatchilar);
})
// try {
//     bot.sendMessage(todayNav.id, "Bugun navbatchisan")
// } catch (error) {
//     console.log('error', error);
// }
bot.on(['/start', '/back'], msg => {

    let replyMarkup = bot.keyboard([
        ['/bugun', '/hamma'],
        ['/start', '/yashirish']
    ], {resize: true});

    return bot.sendMessage(msg.from.id, 'Mavjud imkoniyatlar', {replyMarkup});

});

bot.on('/yashirish', msg => {
    return bot.sendMessage(
        msg.from.id, 'Mavjud imkoniyatlarni ko\'rish uchun /back ni bosing', {replyMarkup: 'hide'}
    );
});

bot.on('/bugun',
    (msg)=>msg.reply.text(`Bugun navbatchi ${usersId[first_navbat.getDay()].name}`)
)

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Botga xush kelibsiz!'));

bot.on('/start', (msg)=>{
    return bot.sendMessage(msg.from.id, `Salom, ${ msg.from.first_name}!`);
});


setInterval(()=>{
    let now = new Date();

    if(
        now.getHours() >= to.getHours() &&
         now.getHours() <= until.getHours() && 
         now.getMinutes() <= until.getMinutes() && 
          now.getMinutes() >= to.getMinutes() 
    )
    {
        console.log(first_navbat.getDay());
        return bot.sendMessage (usersId[first_navbat.getDay()].id,`${usersId[first_navbat.getDay()].name} Bugun navbatchi sensan `);    
    }
    else{
        console.log("hali 15:10 bo'lmadi");
    }
}, 120000);

bot.start();
