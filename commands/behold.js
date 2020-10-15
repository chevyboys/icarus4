const Augur = require("augurbot"),
    u = require("../utils/utils");

const Module = new Augur.Module()
    .addCommand({
        name: "Behold",
        description: "Creates a Doofenshmirtz Behold meme, With only a small chance of fire",
        process: (msg) => {
            function randomNumber(min, max) {
                return Math.round(Math.random() * (max - min) + min);
            }
            function backgroundImage(override = randomNumber(1, 20)) {

                //console.log(override);
                switch (override) {
                //If they roll a nat 1, they get elmo flames
                    case 1: return `https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Elmo-Flames-Meme.jpg?q=50&fit=crop&w=960&h=500`;
                //If they roll a 20, they get a glorius squirel
                    case 20: return `https://i.imgflip.com/18kirh.jpg`;
                //If they get anything else, they get heinz
                    default: return `https://i.imgflip.com/zs91u.jpg`;
                }
            }
            const args = suffix.trim();
            memeSuffix = `Behold! ${args} ${backgroundImage()}`;
            Module.client.commands.execute("meme", msg, memeSuffix);
        },
    });
module.exports = Module;
