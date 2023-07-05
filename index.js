document.addEventListener("DOMContentLoaded", function() {
   newQuoteHandler()
    dragElement(document.getElementById("image-1"))
    dragElement(document.getElementById("image-2"))
    dragElement(document.getElementById("image-3"))
})

function newQuoteHandler() {
    let button = document.getElementById("quote-button")
   button.addEventListener("click", () => {
    let quoteContentDiv = document.querySelector(".quotes-content")
    getRandomQuote()
   })
}

function getRandomQuote () {
    let randomQuote = Math.floor(Math.random() * quotesArray.length)
    displayQuote(quotesArray[randomQuote])
}

function displayQuote(quote) {
    let quoteContentDiv = document.querySelector(".quotes-content")
    quoteContentDiv.innerHTML = quote 
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;
	
	function dragMouseDown(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // get the mouse cursor position at startup:
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  document.onmouseup = closeDragElement;
	  // call a function whenever the cursor moves:
	  document.onmousemove = elementDrag;
	}
	
	function elementDrag(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // calculate the new cursor position:
	  pos1 = pos3 - e.clientX;
	  pos2 = pos4 - e.clientY;
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  // set the element's new position:
	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	
	function closeDragElement() {
	  // stop moving when mouse button is released:
	  document.onmouseup = null;
	  document.onmousemove = null;
	}
}

const quotesArray = [

    "we would like it if you wrote us poems. we would like it if you wrote us long life sentences. we would like it if you broke sentences and gave us more life than you or we were told could be contained. we would like it if you remained. we would like it if you showed up every day. we would like it if you drank water. we would love it if you would turn off your phone. we would sincerely appreciate it if you stopped pretending to be alone.<BR><BR>page 2",

    "what the coral said:<BR><BR>breathe. breathe. breathe. sing. let that water move within you. let it be you. let your celia dance into your healing. let the warm salt brighten you.your tears. sleep. and when you dream of working , sleep again. sleep until you dream of floating. dream until your edges soft. dream until you birth yourself in water singing with the bones of all your lost. dream until you breathe not from your mouth, not from your nose but through your hair and through your skin. dream until you claim the ocean. breathe until you feel no need to swim. breathe until your dreams flow out your brain. breathe and let them in your heart. breathe and we will call you again. that\’s a start.<BR><BR>page 13",

    "there was a time when we thought no one would ever understand. even that, as we say it, presupposes time. as you understand it. and that\’s not even what we mean. what we mean is how could you. how could you understand imperatives outside of time. how could you live this daily way if you did. how could the waves we sent become words you could hold, or could they? if they would be flutters in your heart would you yet know them? and then you started dancing. all of you. any of you. and that\’s when we knew to keep sending the messages. that\’s when we knew that you knew.<BR><BR>page 24",

    "there was a thick brown we used. to remember all of it. much and how we got here. mud and how they stole it. land and what it didn\’t mean. trees and what they remembered and how they cracked and what they were used for. trees and how they witnessed and whipped and wept. there was a brown of sugar and vanilla and everything they would use to make whiteness, even their own bodies, their own children, also brown. all so brown. dirt. the color of dirt. everything. you did. everything. you\'re going.<BR><BR>page 31",

    "we focused on the ways we were not each other. so as not to feel redundant. so as to feel only manageably accountable for each other. we used tribal origins if we remembered and then we remembered that our beliefs said we were not separate. we used surnames until those all tangles and the fathers had left. we used skin tone and reach of hair, bit it didn\’t work. we couldn\’t stop reaching for each other. what\’s a pronoun after all this. after not drowning after being ripped away after centuries on a tiny island building boats and salting the region. after all that could i really look you in your face and not be you?<BR><BR>page 56",

    "love bugs and starfish they gave us them. conch and turtle shells too. calling birds and pelicans, jelly fish and lobster. we need them. we need what they do. mites and whales. we need them all to teach us illusions of size. hibiscus and palm we needed them too to stop us from trusting our eyes. longing and sweetness we needed all that  to shape our days into song. and wind herself slapping us with water. we needed the storms to grown strong.<BR><BR>page 60",

    "there were witnesses. sea grape leaves, burr grass, pelicans, actual eels. there were vines and spines for everything you did, reflectively overgrown. brutally cut down. there was nothing here that was not you and what you did to who you thought wasn\’t you. it\’s true. nothing went unseen, even in the unlit dirt roads of night. even under water or in caves. nothing went unseen or dreamed in the short long lifetimes of the enslaved. noting is unknown. you. don\’t take nothing to your grave. except maybe bones. and even those will be repurposed from limestone soon. there is no permanent space for doom or gloom, only growth. and the green, brown life around you, sees everything.<BR><BR>page 61", 

    "<i>what the seaweed kept.</i><BR><BR>nails and hair. gems and metal. everything shiny lunged for by barracuda and dropped. the leavings of baby nurse sharks. their first teeth. uncrowned possibilities. safety for the small enough. snack bar for the greedy. sand which new itself before as glass as shell as pearl as cartilage. there were names for some of these things before the tangle and the growing over. quiet dance of ransom. the sleeping weave of knots. the shelter of the dark in all this sun. the knowledge of the sense to root in somehow and keep hold.<BR><BR>page 64",

    "<i>what the coral said.</i><BR><BR>once. we were all singing. somewhere. we are still. moving. as something huge, vibrational, wet. we dance and keep the world in place. we shiver and know the orbit. if you let the body undulate you will remember. not all the waves are in the ocean. we don\’t know so much about the soloists. we don\’t know so much about virtue. we don\’t care so much about your body. it\’s the body. you are already part of it because you has nothing to do with it. dance into harmony now. now is already now. time has nothing to do with it. time is up. time is over. we are love in all directions. come on, sing.<BR><BR>page 65",

    "we are asking you to trust your hands. put them on your heart. trust your heart. hear what we are saying. trust what you hear. we are asking you to build a circle. always a circle. not almost a circle. face each other. we are asking you to trust the faces. face the truth. it\’s a round. we are asking you to make a sound. make the sound you need by breathing. make the sound that calls us in. we are asking you. not telling you. listen. we will not yell. well. not yet.<BR><BR>page 67",

    "take your hand off your forehead and remember you can already filter sunlight. take consistent deep breaths and surrender for you are moon. let the rage held in any of the muscles in your shoulders, release. give love room.\ndrink enough water to remember how long water\’s been waiting. eat enough plants to remember what water can do. let the fear in your hands go back where it came from. clean the room.\ncall the people you\’ve been thinking about calling. do the things your pummeling heart says do. let the lessons forming lesions be less real to you than children. make room.<BR><BR>page 69",

    "stomp unitl it become dance. stomp until it be. come dance. wake us with your feet. wake us with your hips. we live in the ground. keep dancing (with the wake in your waist) and follow. we will tell you where to go.<BR><BR>page 72",

    "first time i tasted dirt, i knew it was medicine. the very first time. i was too young to speak. but look what it does for the potatoes I said in my mind. i wanted to always be in it. i wanted it on me. i loved it more than water. the could never wash me clean. what did it mean? it meant i brought something of my country along with us. and then what happened with Augusta, they blamed me.<BR><BR>page 77",

    "bricks are flat and shells are sharp and rock is whatever shape it is broken. and cement will fill or crack the spaces in between. the thing about this wall is that every piece is different. you don\’t get into a rhythm. you turn each piece around in your hand. like how the truck keeps turning cement into concrete. you wonder one time whether god is doing just that with the planet, turning it around in his hand a few million times to consider how best to build something else altogether. and do the mountain ridges and the needling buildings prick his palms.<BR><BR>page 95",

    "go to the edge. when you get there dig your heels in. kneel down. lean your lungs over the ledge and scream. stomach into the void and retch. hands holding rocks. throw them.  empty out. breathe. stay there. your head as low down as possible. until all you can hear is the sound of your breathing. ragged and loud. this is how you know that the edge of the world is not the end. do you know it? when you know it, turn around.<BR><BR>page 121",

    "but what about the actual impact of weightlessness on the heart. the muscles. the bones. what happened to you. was it the result of all that space travel. and trying to come back. was it too much. too painful to be down to earth because your bones, because your muscles, because your heart. why have a body that needs the resistance of weight. why lay your burdens down in the first place if they were all that was keeping you here. or to paraphrase the hyper physicists:<BR>all weightlessness is simply lack of support.<BR><BR>page 139", 

    "play the songs with the blues women howling. play the gospel of voices that crack. play the stories and clean the whole house up. scream your truth and invite me on back. let mirrors be oceans and swim them. let the silver be unlock and key. tell the children you love them and need them. set me free.<BR><BR>page 152",
    
    "she had to trust those things which were only as real as she was to prompt her memory or her knowing or more than that. her pulse. her impulse to come out and make sound or movement. and she had to trust that those sounds and those movements could be enough for whoever was out there. and that she could live with it forgive with it if they said <i>no.  it isn\’t enough.</i> because how could she know the prayers of other people? how could she measure the listening of other people how could she gauge the trust of other people when she was learning still learning to trust herself and move. in the trust she found out there were no other people. no out. she found in. and behold to let go. everything was there. and it was then that she gave it all away. no matter how it looks. and the first things she gave up were all of those books.<BR><BR>page 170", 

    "and by you, of course, we mean us. you are not small at all, except for what we taught you. except for what our breathing took and what it bought you. you are not small even slightly. we are telling you this for the depth of what you might be. you are not small unless your own breathing shrinks you. and you need not do that now. don\’t take it lightly.<BR><BR>page 188", 

    "what do we believe in? the local power of the sun. the way light, once activated, secondhand as it may be through plant and animal and mother, must be honored. must be honored as much as the sun itself. you cannot honor only a piece of the sun. one angle of the sun. one ray of light at a time. you look ridiculous trying to love just some people. just some animals. just some plants some of the time. you don\’t love some. you love all. or you don\’t at all. that's what we learned.<BR><BR>page 191",

    "some days we held in the sky for you. colored it with colors you would recognize. it was clear where one color ended and another one started, we sewed them together with your future. things you would one day know for yourself. and if you followed the lines they would lead to an opening, a circle way through to the other larger sky with all its inconstancy and trouble, but in the world of colors, smooth fabric stretched by air, held by hands in a circle, hands belonging to people who knew what to do because of the words of a poem they had taught themselves just then, you felt so safe. and it was only for a few seconds, soon it would be your turn to go back out into the regular unregulated sky and take your own turn holding the fabric and answering the poem, but during those few seconds you imagined you could live in there forever and be free. remember that.<BR><BR>page 193", 

    "but what if there is a form of infection more insidious and reproducible across generations. the form being the form itself. the form being the thing that brought them and made them bring us, the other us, is the same us, before the form or because of the form. form meaning the form of life that would register as life from then on. it would manifest in several ways. water in the mouth. lust over the possibility of a suit. a seemingly harmless question about whether you own a house. or decades of resentment over whether someone made something of themselves as if selves were made by selves themselves and designed to be improved upon like shelves of goods. as if by this manner we would sell ourselves and always come up short. and then hate each other for it. as if we don\’t need each other more than that. as if we got here not of body but initially of boat. as if every lie were true that they used on me and you. in other words as if there was no such thing as life or love at all.<BR><BR>page 196", 

    "the trees knew. the trees and ferns and the moss and the lichen knew. the rocks knew and seemed to do nothing about it. the bacteria in your eyes, between your teeth, roaming the smooth expanse of your stomach knew and acted. the bats knew with their sensitivity to shape. the mosquitoes knew, full as they were with the blood of captured and capturing alike. the sharks knew already underwater. the whales sang of what it would mean. and the smallest plankton had to get ready after centuries of making life out of sun. the coral had to get ready after perfecting collaboration bright solid and grown. the birds and the fish must have known the implications. once a species could do that to itself. what we do. get ready for the influx of carbon dioxide, the mountains of trash. the unearned permanence of plastic. all life would have to change the meaning of breathing. they all knew.<BR><BR>page 198", 

    "we are light filtered lovingly, meaning we are dark. we are energy that sparks. we are heat that deepens pace. we are interior and face. we are back from outer space. we are evidence we are trace. we are gifted we are grace. we are growing out of place. we are waiting after waste. we are stardust after taste. we are eloquent in haste. we say it excessively. we. sculpted by destiny. we. wind call. the breath in me. we. here now so. let it be.<BR><BR>page 204", 

    "I am still screaming. i am not still. i am grieving. i am birthing. i am not leaving. i am still here screaming. i am here pounding. i am rage to break the rocks back open. rage the graves ungrounding. i am sounding out the sounds that come after words and before them. i am drowning in the dirt of what i've lost. i am tearing. i am clawing, scratching, maiming. i am turning their skin into my own untagging. i am reading for their generations. the mother within them to unrape my life. i am breaking. i am smashing. i am purposefully crashing glass against glass. spilling every form of spirit, breaking loud so you can hear it, i am splintering the storeroom into flame. i am your name. i am clearing with the washing wail of water. i am in the river cleansing from the slaughter. I am blood on my own hands. i am blood handed to daughters. i am sweat and every salt excretion, river rock and mud creature. i am training i am teacher i am truth. i am stomping, kicking, jumping, clapping. i am not surprised that this still happens. i am here, arrange it. i am here to reclaim it. i am here with all your rage making the strange you need to change it.<BR><BR>page 219", 

    "<i>what the star said to the earth:</i><BR><BR>sometimes i wish i was like you. solid and findable. thick and round. cool and stable. sometimes i look a you when you don\’t think i\'m looking at you. you are there in the dark of me and i see mysteries that make me want to sing. but would you hear?<BR><BR><i>what the earth said to the star:</i><BR><BR>sometimes i wish i was like you. bright and hot. fast as light and always lit. seen even after you are gone. i wish that people wished on me like how they wish on you. make you into prophecy. claim you as their origin when i am still right here. sometimes i listen to you when you think i am not listening to you and i don\’t know how to feel about your song. so i tilt. so i keep spinning. so i stay around.<BR><BR>page 228", 

    "we told you. a circle. preferably blessed by a grove of trees. ideally next to a major body of water. so the ground, while temporary, knows roots. so the water, though always moving, has depth for what we are doing. if you have hands, find a way to hold hands. if you have eyes, use them to look at each other with love. as close to the beginning as possible, bring your folks, that would be us, the beyond bodied. as if we have nothing to do but work for you. really we are nothing but the work you still have yet to do. don\’t forget that.<BR><BR>page 237", 

    "there is no rejection. there is calling. may you always be available to your purpose.<BR><BR>there is no proof. there is presence. may you always be all of who you are.<BR><BR>there is no problem. there is practice. practice letting go.<BR><BR>page 249",

    "and when you love. you let it go. you put it down. you show your shoulders what to do with the sky. and love is how. and love is when. and love is why.<BR><BR>page 252", 
]