const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
  name: 'register',
  aliases: ['r'],
  description: 'Ini Command register',
  async execute(message, args, client) {
    const nickname = args.join(' ');
    const channel = await `1018028134307729448`;
    const role = await `1017820846221434980`;
    const roleremove = `1737368393`;
    const tag = await `👤│`;

    if (message.channel.id != `${channel}`) {
      const embed2 = new MessageEmbed().setColor('RED').setTitle('❌ • Error').setDescription(`kamu Menggunakan Command Ini Di Channel Yang Salah , Berikut Channel Yang Benar <#${channel}>`);
      return message.reply({ embeds: [embed2] });
    }

    if (!nickname) {
      const embed3 = new MessageEmbed().setColor('RED').setTitle('❌ • Error').setDescription('Mohon masukan nama kamu yang kamu ingin gunakan!');
      return message.reply({ embeds: [embed3] });
    }

    if (nickname.length > 32) {
      const embed4 = new MessageEmbed().setColor('RED').setTitle('❌ • Error').setDescription('Kamu tidak bisa memasukan nama sampai 32 kata!');
      return message.reply({ embeds: [embed4] });
    }

    try {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        const embed = new MessageEmbed().setColor('RANDOM').setTitle('✅ • Success').setDescription(`${message.author} **Accepted**, Jangan Lupa Order Product Kami Ya!!!`).setTimestamp();

        if (!(await roleremove)) {
          await message.member.roles.add(`${role}`);
          if (await tag) {
            await message.member.setNickname(`${tag}${nickname}`);
          } else {
            await message.member.setNickname(`${nickname}`);
          }
          return message.reply({ embeds: [embed] });
        } else if (!(await tag)) {
          await message.member.roles.add(`${role}`);
          if (await roleremove) {
            await message.member.roles.remove(`${roleremove}`);
          }
          await message.member.setNickname(`${nickname}`);
          return message.reply({ embeds: [embed] });
        } else {
          await message.member.roles.add(`${role}`);
          await message.member.setNickname(`${tag}${nickname}`);
          return message.reply({ embeds: [embed] });
        }
      } else {
        const embed5 = new MessageEmbed().setColor('RED').setTitle('❌ • Error').setDescription('Kamu ngga bisa menggunakan command ini karena kamu adalah administrator!');
        return message.reply({ embeds: [embed5] });
      }
    } catch (e) {
      console.log(e);
    }
  },
};
