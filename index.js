const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token =process.env.TOKEN;
http.createServer().listen(port);
const PREFIX = '$'

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('WaggyDude Bots', { type : 'WATCHING'});
})

bot.on("guildMemberAdd", function(member)
{
    let memberRole= member.guild.roles.find("name","Guest");
    member.addRole(memberRole);
}

);



bot.on('message', (msg) => {
   
   if (!(msg.content.startsWith(PREFIX)) || msg.author.bot) return;
   
    let args =  msg.content.substring(PREFIX.length).split(" ");
  
   var time = 20;
    switch(args[2]){
        
        case 'Admin':
              
                const user1 = msg.mentions.users.first();
                 if (user1){

                    const member1 = msg.guild.member(user1);
                    if (member1)
                    {
                      let memberRole1 = member1.guild.roles.find(r => r.name === "Admin");
                      member1.addRole(memberRole1)  
                    }
                 

                    }
        break;
    }
    
    switch(args[0]){
        case 'ping':
            msg.channel.send('pong ');            /**msg.reply('pong lol');--to reply to the person who started the command */
        
            break;
        case 'lmt':
          let user2 = msg.mentions.members.first();
          
          if (user2) return msg.channel.send(user2.lastMessage);
           break;

        case 'Creator':
            msg.channel.send('I was created by WaggyDude');
            break;
        
        case 'whoisskrt':
            msg.channel.send('');
            break;
        
        case 'whoisnemo':
            msg.channel.send('');
            break;

        case 'Shutdown':
            msg.channel.send('Shutting Down') ;
            break; 
                      
        case 'whoismaddog':
            msg.channel.send('');
           break; 
        
            case 'leo':
            msg.channel.send('');
            break;  
        case 'Server':
            msg.channel.send('Currently this faction plays Jartex Network');
            break; 
        case 'clear':
         if(!msg.member.roles.find(r => r.name === "Admin")) return msg.channel.send('You dont have sufficient Permissions') 
           if (!args[1]) return msg.reply('Specify No of msges') 
          msg.channel.bulkDelete(args[1]);
         break;  
        case 'profile':
            const embed = new Discord.RichEmbed()
            .setTitle('Player Info')
            .addField('Player Name', msg.author.username)
            .addField('Current Server', msg.guild.name)
            .setColor(0xB03060)
            .setThumbnail(msg.author.avatarURL)
            .setFooter('WD Bots')
            
         
            msg.channel.sendEmbed(embed);
         break; 
         
        case 'shield':
            let shield1 = args[2];
            msg.channel.send('shield is'+ shield1);
            break;
        case 'shieldstart':
           /**const embed2 = new Discord.RichEmbed()
           .addField('Shield has been started')
           .setColor(0xB03060)
           .setFooter('WD Bots')

           msg.channel.sendEmbed(embed2);*/
           

            var interval = setInterval(timer,1000);

            function timer(){
                /**msg.channel.send(time);*/
                
                console.log(time);
                if (time<1){
                   
                    msg.channel.send('Shield Is Down');
                    clearInterval(interval);
                    return ;
                }
                time -= 1;
                
            }

            
                



            ;
            break;
        case 'shieldinfo':
            msg.channel.send('Time Duration for shield is ' + myglobala + 'seconds'); 
            break;   
            
            /**setTimeout(() => {
                var a = 10;
                var b = a-1;
                msg.channel.send('time over' + b);
            }, 1000 );
        break;*/






        case 'kick':
            if(!msg.member.roles.find(r => r.name === "Admin")) return msg.channel.send('You dont have sufficient Permissions')    
        const user = msg.mentions.users.first();
            if (user){
                const member = msg.guild.member(user);
             
             
              if (member) {
                member.kick('Your End has come').then(() => {
                    msg.reply(`${user.tag} was kicked`);
                }).catch(err => {
                    msg.reply('Strange but was not able to kick the member');
                    console.log(err);
                });
                } else {
                    msg.reply("user not in server Dummy")

                } 
                }else {
                    msg.reply('You need to specify a person')
                }
        /**ban log remains */        
            
    } 
                
             } 
            

            

    
    
)

bot.on('error', err => {

    console.log(err);
});

bot.login(token);
