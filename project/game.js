var arr = [0,0,0,0,0,0,0,0,0]
var lipscount=0
var shadowcount=0

var scene1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function scene1() {
        Phaser.Scene.call(this, {
            key: 'scene1'
        });
    },
    preload: function () {

        this.load.image('background', 'asset/level/background.png')
        this.load.image('annaframe', 'asset/level/annaframe.png')
         this.load.image('arielframe', 'asset/level/arielframe.png')
        this.load.spritesheet('anna', 'asset/level/anna.png', {
            frameWidth: 298,
            frameHeight: 185
        })
       
        
    },
    create: function () {
        background = this.add.image(0, 0, 'background').setOrigin(0, 0)
        annaframe = this.add.image(87, 33, 'annaframe').setOrigin(0, 0).setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        arielframe = this.add.image(426, 27, 'arielframe').setOrigin(0, 0).setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        anna = this.add.sprite(87, 33, 'anna').setOrigin(0, 0) 
        ariel = this.add.sprite(87, 33, 'ariel').setOrigin(0, 0)
        
        var anim = this.anims.create({
            key: 'anna',
            frames: this.anims.generateFrameNumbers('anna','ariel', {
                start: 0,
                end: 3
            }),
            frameRate: 1,
            
        
        });
        anna.on('animationcomplete', animComplete, this);
        anna.anims.load('anna');
        anna.anims.play('anna')
        
        function animComplete(){
            setTimeout(svds,2000)
        }
        function svds(){
            //anna.anims.play('anna')
            anna.on('animationcomplete', animComplete, this);
        }

        annaframe.on('pointerdown', level1)
        arielframe.on('pointerdown', level2)
        function level1(){
            game.scene.stop('scene1')
            game.scene.run('scene2')
        }
        function level2(){
            game.scene.stop('scene1')
            game.scene.run('scene4')
        }
            }
});







var scene2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function scene2() {
        Phaser.Scene.call(this, {
            key: 'scene2'
        });
    },
    preload: function () {
        arr =[0,0,0,0,0,0,0,0,0]
        lipscount=0
        shadowcount=0
        this.load.image('background1','asset/background1.png')
        this.load.image('background2','asset/background2.png')
        this.load.image('background3','asset/background3.png')
        this.load.image('background4','asset/background4.png')
        this.load.image('annahead','asset/annahead.png')
        this.load.image('annadressdefault','asset/annadressdefault.png')
        this.load.image('annadresshair','asset/annadresshair.png')
        this.load.image('annadressshoe','asset/annadressshoe.png')
        this.load.image('cubpoard', 'asset/cubpoard.png')
        this.load.image('makeup1', 'asset/makeup1.png')
        this.load.image('makeup2', 'asset/makeup2.png')
        this.load.image('makeup3', 'asset/makeup3.png')
        this.load.image('makeup4', 'asset/makeup4.png')
        this.load.image('makeup5', 'asset/makeup5.png')
        this.load.image('makeup6', 'asset/makeup6.png')
         this.load.image('larrow', 'asset/larrow.png')
        this.load.image('rarrow', 'asset/rarrow.png') 
        this.load.image('hand', 'asset/hand.png')
        this.load.spritesheet('maskar', 'asset/maskar.png', {
            frameWidth: 80,
            frameHeight: 34
        })
        this.load.spritesheet('lens', 'asset/lens.png', {
            frameWidth: 60,
            frameHeight: 28
        })
        this.load.spritesheet('eyebrow', 'asset/eyebrow.png', {
            frameWidth: 81,
            frameHeight: 33
        }) 
        this.load.spritesheet('bresh', 'asset/bresh.png', {
            frameWidth: 75,
            frameHeight: 35
        })
        this.load.spritesheet('lips', 'asset/lips.png', {
            frameWidth: 58,
            frameHeight: 30
        })
        this.load.spritesheet('eyeshadow', 'asset/eyeshadow.png', {
            frameWidth: 89,
            frameHeight: 36
        })
     },
    create: function () {
     background1 = this.add.image(0, 0, 'background1').setOrigin(0, 0)
     annahead = this.add.image(131, 21, 'annahead').setOrigin(0, 0)   
     annadressdefault = this.add.image(169, 100, 'annadressdefault').setOrigin(0, 0)  
     annadresshair = this.add.image(142, 0, 'annadresshair').setOrigin(0, 0)  
     hand = this.add.image(225, 186, 'hand').setOrigin(0, 0)
     annadressshoe = this.add.image(118, 516, 'annadressshoe').setOrigin(0, 0) 
     cubpoard = this.add.image(446, 103, 'cubpoard').setOrigin(0, 0)
     makeup1 = this.add.image(494, 75, 'makeup1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
     makeup2 = this.add.image(648, 74, 'makeup2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup3 = this.add.image(488, 203, 'makeup3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup4 = this.add.image(651, 201, 'makeup4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup5 = this.add.image(492, 351, 'makeup5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup6 = this.add.image(657, 342, 'makeup6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        maskar = this.add.sprite(204, 51, 'maskar').setOrigin(0, 0)
        lens = this.add.sprite(212, 54, 'lens').setOrigin(0, 0)
        eyebrow = this.add.sprite(203, 40, 'eyebrow').setOrigin(0, 0)
        bresh = this.add.sprite(204, 66, 'bresh').setOrigin(0, 0)
        lips = this.add.sprite(214, 77, 'lips').setOrigin(0, 0)
        eyeshadow = this.add.sprite(199, 48, 'eyeshadow').setOrigin(0, 0)
        eyeshadow.setFrame(shadowcount)
        lips.setFrame(lipscount)
        
        var timer = this.time.addEvent({
            delay: 2500,
            callback: lipscounts,
            callbackScope: this,
        });
         
        function lipscounts() {
            lips.setFrame(lipscount + 1)
            var timer = this.time.addEvent({
                delay: 100,
                callback: lipscounts1,
                callbackScope: this,
               
            });
        }

        function lipscounts() {
            lips.setFrame(lipscount + 2)
            var timer = this.time.addEvent({
                delay: 1500,
                callback: lipscounts2,
                callbackScope: this,
            });
        }
        function lipscounts2() {
            lips.setFrame(lipscount +1)
            var timer = this.time.addEvent({
                delay: 100,
                callback: lipscounts3,
                callbackScope: this,
            });
        }
        function lipscounts3() {
            lips.setFrame(lipscount)
            
            var timer = this.time.addEvent({
                delay: 500,
                callback: lipscounts,
                callbackScope: this,
            });
        }
        var timer1 = this.time.addEvent({
            delay: 2500,
            callback: shadowcount1,
            callbackScope: this,
        });
        
        function shadowcount1() {
            console.log(shadowcount)
            eyeshadow.setFrame(shadowcount + 1)
            maskar.visible=false
            var timer = this.time.addEvent({
                delay: 100,
                callback: shadowcount2,
                callbackScope: this,
            });
        }
        function shadowcount2() {
            console.log(shadowcount)
            eyeshadow.setFrame(shadowcount)
            maskar.visible=true
            var timer = this.time.addEvent({
                delay: 1000,
                callback: shadowcount1,
                callbackScope: this,  
            });
        }
        makeup1.on('pointerdown', lipsdown)
        makeup2.on('pointerdown', lipsdown)
        makeup3.on('pointerdown', lipsdown)
        makeup4.on('pointerdown', lipsdown)
        makeup5.on('pointerdown', lipsdown)
        makeup6.on('pointerdown', lipsdown)
        function lipsdown(){
            sno = this.texture.key.substr(6)
            if (arr[0] == parseInt(sno)) {
                bresh.setFrame(0)
                lens.setFrame(0)
                maskar.setFrame(0)
                lips.setFrame(0)
                eyebrow.setFrame(0)
                eyeshadow.setFrame(0)
                arr[0] = 0
                lipscount = 0
                shadowcount=0
                
            } else {
                bresh.setFrame(parseInt(sno))
                lens.setFrame(parseInt(sno))
                maskar.setFrame(parseInt(sno))
                eyebrow.setFrame(parseInt(sno))
                lips.setFrame(parseInt(sno * 3))
                arr[0] = parseInt(sno)
                lipscount = arr[0] * 3
                shadowcount=arr[0]*2
               
            }
        }

        
        larrow = this.add.image(637, 519, 'larrow').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        rarrow = this.add.image(713, 519, 'rarrow').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        rarrow.on('pointerdown',rightdown)
        function rightdown() {
            arr[1] = maskar.frame.name
            arr[2] = lens.frame.name
            arr[3] = eyebrow.frame.name
            arr[4] = bresh.frame.name
            arr[5] = lips.frame.name
            arr[6] = eyeshadow.frame.name
            
            game.scene.stop('scene2')
            game.scene.run('scene3')
        }  
}
});
var scene3 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function scene3() {
        Phaser.Scene.call(this, {
            key: 'scene3'
        });
    },
    preload: function () {
      this.load.image('cupboard', 'asset/anna/cupboard.png')
        this.load.image('dresscupboars', 'asset/anna/dresscupboars.png')
        this.load.image('hair1', 'asset/anna/hair1.png')
        this.load.image('hair2', 'asset/anna/hair2.png')
        this.load.image('hair3', 'asset/anna/hair3.png')
        this.load.image('hair4', 'asset/anna/hair4.png')
        this.load.image('hair5', 'asset/anna/hair5.png')
        this.load.image('hair6', 'asset/anna/hair6.png')
        this.load.image('dress1', 'asset/anna/dress1.png')
        this.load.image('dress2', 'asset/anna/dress2.png')
        this.load.image('dress3', 'asset/anna/dress3.png')
        this.load.image('dress4', 'asset/anna/dress4.png')
        this.load.image('dress5', 'asset/anna/dress5.png')
        this.load.image('dress6', 'asset/anna/dress6.png')
        this.load.image('shoe1', 'asset/anna/shoe1.png')
        this.load.image('shoe2', 'asset/anna/shoe2.png')
        this.load.image('shoe3', 'asset/anna/shoe3.png')
        this.load.image('shoe4', 'asset/anna/shoe4.png')
        this.load.image('shoe5', 'asset/anna/shoe5.png')
        this.load.image('shoe6', 'asset/anna/shoe6.png')
        this.load.image('chi1', 'asset/anna/chi1.png')
        this.load.image('gls2', 'asset/anna/gls2.png')
        this.load.image('ear3', 'asset/anna/ear3.png')
        this.load.image('ear6', 'asset/anna/ear6.png')
        this.load.image('bag4', 'asset/anna/bag4.png')
        this.load.image('bag5', 'asset/anna/bag5.png')
         this.load.image('larrow', 'asset/larrow.png')
        this.load.image('rarrow', 'asset/rarrow.png') 
        this.load.spritesheet('dress', 'asset/anna/dress.png', {
            frameWidth: 224,
            frameHeight: 321
        })
        this.load.spritesheet('hair', 'asset/anna/hair.png', {
            frameWidth: 168,
            frameHeight: 206
        })
        this.load.spritesheet('shoes', 'asset/anna/shoes.png', {
            frameWidth: 189,
            frameHeight: 74
        })
        this.load.spritesheet('access', 'asset/anna/access.png', {
            frameWidth: 191,
            frameHeight: 307
        })
        
    },
    create: function () {
        background1 = this.add.image(0, 0, 'background1').setOrigin(0, 0)
        annahead = this.add.image(131, 21, 'annahead').setOrigin(0, 0)
        dresscupboars = this.add.image(301, 82, 'dresscupboars').setOrigin(0, 0)
        cupboard = this.add.image(267, 88, 'cupboard').setOrigin(0, 0)
        shoes = this.add.sprite(120, 516, 'shoes').setOrigin(0, 0)
        maskar = this.add.sprite(204, 51, 'maskar').setOrigin(0, 0)
        lens = this.add.sprite(212, 54, 'lens').setOrigin(0, 0)
        eyebrow = this.add.sprite(203, 40, 'eyebrow').setOrigin(0, 0)
        bresh = this.add.sprite(204, 66, 'bresh').setOrigin(0, 0)
        lips = this.add.sprite(214, 77, 'lips').setOrigin(0, 0)
        eyeshadow = this.add.sprite(199, 48, 'eyeshadow').setOrigin(0, 0)
        maskar.setFrame(arr[1])
        lens.setFrame(arr[2])
        
        eyebrow.setFrame(arr[3])
        bresh.setFrame(arr[4])
        lips.setFrame(arr[5])
        eyeshadow.setFrame(arr[6])
         lips.setFrame(lipscount)
        eyeshadow.setFrame(shadowcount)
      
        
        var timer = this.time.addEvent({
            delay: 2500,
            callback: lipscounts,
            callbackScope: this,
        });
         
        function lipscounts() {
            lips.setFrame(lipscount + 1)
            var timer = this.time.addEvent({
                delay: 100,
                callback: lipscounts1,
                callbackScope: this,
               
            });
        }

        function lipscounts() {
            lips.setFrame(lipscount + 2)
            var timer = this.time.addEvent({
                delay: 1500,
                callback: lipscounts2,
                callbackScope: this,
            });
        }
        function lipscounts2() {
            lips.setFrame(lipscount +1)
            var timer = this.time.addEvent({
                delay: 100,
                callback: lipscounts3,
                callbackScope: this,
            });
        }
        function lipscounts3() {
            lips.setFrame(lipscount)
            
            var timer = this.time.addEvent({
                delay: 500,
                callback: lipscounts,
                callbackScope: this,
            });
        }
         var timer1 = this.time.addEvent({
            delay: 2500,
            callback: shadowcount1,
            callbackScope: this,
        });
        
        function shadowcount1() {
            console.log(shadowcount)
            eyeshadow.setFrame(shadowcount + 1)
            maskar.visible=false
            var timer = this.time.addEvent({
                delay: 100,
                callback: shadowcount2,
                callbackScope: this,
            });
        }
        function shadowcount2() {
            console.log(shadowcount)
            eyeshadow.setFrame(shadowcount)
            maskar.visible=true
            var timer = this.time.addEvent({
                delay: 1000,
                callback: shadowcount1,
                callbackScope: this,  
            });
        }
        dress1 = this.add.image(299, 98, 'dress1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress2 = this.add.image(463, 106, 'dress2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress3 = this.add.image(587, 96, 'dress3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress4 = this.add.image(300, 104, 'dress4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress5 = this.add.image(435, 104, 'dress5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress6 = this.add.image(585, 90, 'dress6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress = this.add.sprite(129, 114, 'dress').setOrigin(0, 0)
        hand = this.add.image(225, 186, 'hand').setOrigin(0, 0)
        dress4.visible = false
        dress5.visible = false
        dress6.visible = false
        hair1 = this.add.image(457, 16, 'hair1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        hair2 = this.add.image(377, 148, 'hair2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        hair3 = this.add.image(547, 156, 'hair3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        hair4 = this.add.image(283, 278, 'hair4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        hair5 = this.add.image(475, 286, 'hair5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        hair6 = this.add.image(636, 285, 'hair6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        hair = this.add.sprite(153, 0, 'hair').setOrigin(0, 0)
        cupboard.visible = false
        hair1.visible = false
        hair2.visible = false
        hair3.visible = false
        hair4.visible = false
        hair5.visible = false
        hair6.visible = false
        shoe1 = this.add.image(485, 85, 'shoe1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        shoe2 = this.add.image(407, 213, 'shoe2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        shoe3 = this.add.image(576, 217, 'shoe3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        shoe4 = this.add.image(313, 357, 'shoe4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        shoe5 = this.add.image(491, 340, 'shoe5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        shoe6 = this.add.image(662, 345, 'shoe6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        cupboard.visible = false
        shoe1.visible = false
        shoe2.visible = false
        shoe3.visible = false
        shoe4.visible = false
        shoe5.visible = false
        shoe6.visible = false

        chi1 = this.add.image(495, 63, 'chi1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        gls2 = this.add.image(388, 162, 'gls2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        ear3 = this.add.image(572, 174, 'ear3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        bag4 = this.add.image(302, 296, 'bag4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        bag5 = this.add.image(487, 316, 'bag5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        ear6 = this.add.image(645, 306, 'ear6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        chainaccess = this.add.sprite(175, 48, 'access').setOrigin(0, 0)
        bagaccess = this.add.sprite(175, 48, 'access').setOrigin(0, 0)
        earaccess = this.add.sprite(175, 48, 'access').setOrigin(0, 0)
        glassaccess = this.add.sprite(175, 48, 'access').setOrigin(0, 0)
        chi1.visible = false
        gls2.visible = false
        bag4.visible = false
        bag5.visible = false
        ear3.visible = false
        ear6.visible = false
        larrow = this.add.image(637, 519, 'larrow').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        rarrow = this.add.image(713, 519, 'rarrow').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        dress1.on('pointerdown', dressdown)
        dress2.on('pointerdown', dressdown)
        dress3.on('pointerdown', dressdown)
        dress4.on('pointerdown', dressdown)
        dress5.on('pointerdown', dressdown)
        dress6.on('pointerdown', dressdown)
        larrow.on('pointerdown', leftdown)
        rarrow.on('pointerdown', rightdown)

        function dressdown() {
            sno = this.texture.key.substr(5)
            console.log(this.texture.key)
            dress.visible = true;
            if (arr[0] == parseInt(sno)) {
                dress.setFrame(0)
                arr[0] = 0
            } else {
                dress.setFrame(parseInt(sno))
                arr[0] = parseInt(sno)
            }
        }
        hair1.on('pointerdown', hairdown)
        hair2.on('pointerdown', hairdown)
        hair3.on('pointerdown', hairdown)
        hair4.on('pointerdown', hairdown)
        hair5.on('pointerdown', hairdown)
        hair6.on('pointerdown', hairdown)

        function hairdown() {
            sno = this.texture.key.substr(4)
            console.log(this.texture.key)
            hair.visible = true;
            if (arr[1] == parseInt(sno)) {
                hair.setFrame(0)
                arr[1] = 0
            } else {
                hair.setFrame(parseInt(sno))
                arr[1] = parseInt(sno)
            }
        }
        shoe1.on('pointerdown', shoedown)
        shoe2.on('pointerdown', shoedown)
        shoe3.on('pointerdown', shoedown)
        shoe4.on('pointerdown', shoedown)
        shoe5.on('pointerdown', shoedown)
        shoe6.on('pointerdown', shoedown)

        function shoedown() {
            sno = this.texture.key.substr(4)
            console.log(this.texture.key)
            shoes.visible = true;
            if (arr[2] == parseInt(sno)) {
                shoes.setFrame(0)
                arr[2] = 0
            } else {
                shoes.setFrame(parseInt(sno))
                arr[2] = parseInt(sno)
            }
        }
        chi1.on('pointerdown', accessdown)
        gls2.on('pointerdown', glassdown)
        ear3.on('pointerdown', eardown)
        bag4.on('pointerdown', bagdown)
        bag5.on('pointerdown', bagdown)
        ear6.on('pointerdown', eardown)

        function accessdown() {
            console.log("manilc")
            sno = this.texture.key.substr(3)
            console.log(this.texture.key)

            if (arr[3] == parseInt(sno)) {
                chainaccess.setFrame(0)
                arr[3] = 0
            } else {
                chainaccess.setFrame(parseInt(sno))
                arr[3] = parseInt(sno)
            }
        }

        function eardown() {
            console.log("manilc")
            sno = this.texture.key.substr(3)
            console.log(this.texture.key)

            if (arr[5] == parseInt(sno)) {
                earaccess.setFrame(0)
                arr[5] = 0
            } else {
                earaccess.setFrame(parseInt(sno))
                arr[5] = parseInt(sno)
            }
        }

        function glassdown() {
            console.log("manilc")
            sno = this.texture.key.substr(3)
            console.log(this.texture.key)

            if (arr[5] == parseInt(sno)) {
                glassaccess.setFrame(0)
                arr[5] = 0
            } else {
                glassaccess.setFrame(parseInt(sno))
                arr[5] = parseInt(sno)
            }
        }

        function bagdown() {
            console.log("manilc")
            sno = this.texture.key.substr(3)
            console.log(this.texture.key)

            if (arr[5] == parseInt(sno)) {
                bagaccess.setFrame(0)
                arr[5] = 0
            } else {
                bagaccess.setFrame(parseInt(sno))
                arr[5] = parseInt(sno)
            }
        }


        function rightdown() {
            console.log("mani")
            if (dress1.visible) {
                dress1.visible = false
                dress2.visible = false
                dress3.visible = false
                dress4.visible = true
                dress5.visible = true
                dress6.visible = true
            } else if (dress4.visible) {
                dress4.visible = false
                dress5.visible = false
                dress6.visible = false
                dresscupboars.visible = false
                hair1.visible = true
                hair2.visible = true
                hair3.visible = true
                hair4.visible = true
                hair5.visible = true
                hair6.visible = true
                cupboard.visible = true
            } else if (hair1.visible) {
                hair1.visible = false
                hair2.visible = false
                hair3.visible = false
                hair4.visible = false
                hair5.visible = false
                hair6.visible = false
                shoe1.visible = true
                shoe2.visible = true
                shoe3.visible = true
                shoe4.visible = true
                shoe5.visible = true
                shoe6.visible = true
            } else if (shoe1.visible) {
                shoe1.visible = false
                shoe2.visible = false
                shoe3.visible = false
                shoe4.visible = false
                shoe5.visible = false
                shoe6.visible = false
                chi1.visible = true
                gls2.visible = true
                bag4.visible = true
                bag5.visible = true
                ear3.visible = true
                ear6.visible = true
            } else if (chi1.visible) {
                chi1.visible = false
                gls2.visible = false
                bag4.visible = false
                bag5.visible = false
                ear3.visible = false
                ear6.visible = false
                cupboard.visible = false
                dress1.visible = true
                dress2.visible = true
                dress3.visible = true
                dresscupboars.visible = true

            }
        }

        function leftdown() {
            if (dress1.visible) {
                dress1.visible = false
                dress2.visible = false
                dress3.visible = false
                dresscupboars.visible = false
                chi1.visible = true
                cupboard.visible = true
                gls2.visible = true
                bag4.visible = true
                bag5.visible = true
                ear3.visible = true
                ear6.visible = true
            } 
            else if (chi1.visible) 
            {
                chi1.visible = false
                gls2.visible = false
                bag4.visible = false
                bag5.visible = false
                ear3.visible = false
                ear6.visible = false
                shoe1.visible = true
                shoe2.visible = true
                shoe3.visible = true
                shoe4.visible = true
                shoe5.visible = true
                shoe6.visible = true
            } 
            else if (shoe1.visible) 
            {
                shoe1.visible = false
                shoe2.visible = false
                shoe3.visible = false
                shoe4.visible = false
                shoe5.visible = false
                shoe6.visible = false
                hair1.visible = true
                hair2.visible = true
                hair3.visible = true
                hair4.visible = true
                hair5.visible = true
                hair6.visible = true
            } 
            else if (hair1.visible) 
            {
                hair1.visible = false
                hair2.visible = false
                hair3.visible = false
                hair4.visible = false
                hair5.visible = false
                hair6.visible = false
                cupboard.visible = false
                dresscupboars.visible = true
                dress4.visible = true
                dress5.visible = true
                dress6.visible = true
            } 
            else if (dress4.visible) 
            {
                dress1.visible = true
                dress2.visible = true
                dress3.visible = true
                dress4.visible = false
                dress5.visible = false
                dress6.visible = false
            }
        }
    }
});   

var scene4 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function scene4() {
        Phaser.Scene.call(this, {
            key: 'scene4'
        });
    },
    preload: function () {

        this.load.image('background1', 'asset/background1.png')
        this.load.image('head', 'asset/arial/head.png')
        this.load.image('defaultdress', 'asset/arial/defaultdress.png')
        this.load.image('hand1', 'asset/arial/hand1.png')
        this.load.image('hand2', 'asset/arial/hand2.png')
        
        this.load.image('cubpoard', 'asset/cubpoard.png')
        this.load.image('makeup1', 'asset/makeup1.png')
        this.load.image('makeup2', 'asset/makeup2.png')
        this.load.image('makeup3', 'asset/makeup3.png')
        this.load.image('makeup4', 'asset/makeup4.png')
        this.load.image('makeup5', 'asset/makeup5.png')
        this.load.image('makeup6', 'asset/makeup6.png')
         this.load.image('larrow', 'asset/larrow.png')
        
    },
    create: function () {
        background1 = this.add.image(0, 0, 'background1').setOrigin(0, 0)
        head = this.add.image(139, 0, 'head').setOrigin(0, 0)
        
        
        head = this.add.image(138, 0, 'head').setOrigin(0, 0)
        defaultdress = this.add.image(151, 114, 'defaultdress').setOrigin(0, 0)
        hand1 = this.add.image(240, 184, 'hand1').setOrigin(0, 0)
        hand2 = this.add.image(131, 129, 'hand2').setOrigin(0, 0)
        cubpoard = this.add.image(446, 103, 'cubpoard').setOrigin(0, 0)
        
     makeup1 = this.add.image(494, 75, 'makeup1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
     makeup2 = this.add.image(648, 74, 'makeup2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup3 = this.add.image(488, 203, 'makeup3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup4 = this.add.image(651, 201, 'makeup4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup5 = this.add.image(492, 351, 'makeup5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup6 = this.add.image(657, 342, 'makeup6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        larrow = this.add.image(637, 519, 'larrow').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        larrow.on('pointerdown',level2)
        function level2(){
            game.stop('scene4')
            game.run(scene5)
        }
            }

});
var scene5 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function scene5() {
        Phaser.Scene.call(this, {
            key: 'scene5'
        });
    },
    preload: function () {

        this.load.image('background1', 'asset/background1.png')
        this.load.image('head', 'asset/arial/head.png')
        this.load.image('cubpoard', 'asset/cubpoard.png')
        this.load.image('makeup1', 'asset/makeup1.png')
        this.load.image('makeup2', 'asset/makeup2.png')
        this.load.image('makeup3', 'asset/makeup3.png')
        this.load.image('makeup4', 'asset/makeup4.png')
        this.load.image('makeup5', 'asset/makeup5.png')
        this.load.image('makeup6', 'asset/makeup6.png')
        this.load.spritesheet('eyelens', 'asset/arial/eyelens.png', {
            frameWidth: 57,
            frameHeight: 29
        })
        
        
    },
    create: function () {
        background1 = this.add.image(0, 0, 'background1').setOrigin(0, 0)
        head = this.add.image(139, 0, 'head').setOrigin(0, 0)
        cubpoard = this.add.image(446, 103, 'cubpoard').setOrigin(0, 0)
     makeup1 = this.add.image(494, 75, 'makeup1').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
     makeup2 = this.add.image(648, 74, 'makeup2').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup3 = this.add.image(488, 203, 'makeup3').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup4 = this.add.image(651, 201, 'makeup4').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup5 = this.add.image(492, 351, 'makeup5').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        makeup6 = this.add.image(657, 342, 'makeup6').setOrigin(0, 0).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        eyelens = this.add.sprite(207, 52, 'eyelens').setOrigin(0, 0)
            }

});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
    },
    scene: [scene1,scene2,scene3,scene4,scene5]
};
var game = new Phaser.Game(config);