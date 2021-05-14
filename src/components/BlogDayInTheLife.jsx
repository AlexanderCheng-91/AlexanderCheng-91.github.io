import React from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';

import alex from '../pictures/alexTinyBgRemoved.png';
import dogGroomer from '../pictures/dogGroomer.jpg';
import abner from '../pictures/Abner.jpg';
import duke from '../pictures/Duke.jpg';
import jimmy from '../pictures/Jimmy.jpg';
import fatty from '../pictures/Fatty.jpg';
import nervousDog from '../pictures/nervousDog.jpg';
import bamBam from '../pictures/bamBam.jpg';
import bella from '../pictures/bella.jpg';
import boba from '../pictures/boba.jpg';
import foxy from '../pictures/foxy.jpg';
import boboBefore from '../pictures/boboBefore.jpg';
import boboAfter from '../pictures/boboAfter.jpg';
import cash from '../pictures/cash.jpg';
import leo from '../pictures/leo.jpg';
import woopy from '../pictures/woopy.jpg';
import max from '../pictures/max.jpg';
import niuNiu from '../pictures/niuNiu.jpg';
import leo2 from '../pictures/leo2.jpg';
import corgi from '../pictures/corgi.JPG';

import penny from '../pictures/penny.JPG';
import tangledTerrier from '../pictures/tangledTerrier.JPG';

class BlogDayInTheLife extends React.Component {
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className="blog-template">
            <h5>A Day in the Life of a Dog Grooming Manager</h5>

            {/* need some padding-right avatar */}

            <CardSubtitle className="mb-2 text-muted" style={{ fontSize: '14px' }}>
               <img src={alex} alt="icon sized"></img>
               Alexander Cheng on 3/10/2021
            </CardSubtitle>

            <Card style={{ width: '90%', display: 'inline-block', textAlign: 'left' }}>
               <CardImg top width="100%" src={dogGroomer} alt="dog groomer grooming a dog" />
               <CardBody>
                  <CardText style={{ fontSize: '14px' }}>
                     So today I thought I would write about an average morning in the life of a dog groomer.
                  </CardText>
                  <CardText>
                     <b>Friday 8:00</b> - I come in an hour early to make sure everything is ready. I manage a store
                     with over 5 groomers. As usual, the phones are already ringing and there are messages in the inbox.
                     I ignore the phone because I need to do my morning routine. All groomers are responsible for
                     cleaning up their stations before they leave. So when I come in, I check each individual station to
                     make sure the stations and equipment are sanitary and readily available. I check the dog bathing
                     stations and restroom to make sure they’re also sanitary and available. Most problems with dog
                     bathing stations are the plumbing. We have a tight hair catcher/filter that is so fine that It
                     doesn’t allow any hair to pass. But the problem is that we have to change it frequently or it gets
                     stuck.
                  </CardText>
                  <CardText>
                     Meanwhile: Tadashi is already in the car waiting for me to unlock the door. He enters as I enter.
                     (mental note: 1 groomer in.)
                  </CardText>
                  <CardText>
                     <b>8:15</b> - I check the computer to see what my schedule looks like for the day, how many of the
                     dogs are repeat clients, and what the notes on those dogs are. And how many dogs are new
                     customers—I’m mentally preparing myself for no shows/cancellations. Today we have 25 dogs that have
                     appointments and we have 5 groomers scheduled to come in excluding me. Tadashi, Sam, Nancy, Winnie,
                     and Scarlett. We manage our workflow with a huge dry erase board. So I line up the dogs with our 5
                     groomers in accordance to their skill level, size, and temperament. This is probably the most
                     challenging thing to do-- Quickly assign dogs to groomers properly. If I assign a large dog to a
                     small groomer—both the dog and the groomer are not happy. If the dog is temperamental and the
                     groomer doesn’t handle temperamental dogs—not happy. If the dog is too small and the groomer can’t
                     handle small dogs —not happy. This can ultimately affect the groom time of the groomers and overall
                     flow of the shop.
                  </CardText>
                  <CardText>
                     <b>8:45</b> - All ready to go, I await my first dog while timing when to answer the phones. 2
                     Groomers come in Sam and Scarlett (mental note: 3/5 groomers are in)
                  </CardText>
                  <CardText>
                     <CardText>
                        <b>8:50 </b>- I answer the phone. <br />
                     </CardText>
                     <CardText className="chat">
                        <CardText className="me">
                           “Hello, Thank you for calling !@#$%’s Dog Salon. How can I help you”
                        </CardText>
                        <CardText className="client">“How much do you charge for a haircut.”</CardText>
                        <CardText className="me">“We start at $60 for small dogs- bath, haircut, and nails. “</CardText>
                        <CardText className="client">“Okay, Thank You, Bye bye”</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>8:50</b> - The first two owners come in with 3 dogs. We get
                     <br />
                  </CardText>
                  <CardText>
                     <b>Bam Bam </b>(10 lbs male Yorkie),
                     <CardImg top width="100%" src={bamBam} alt="Black and Tan Yorkshire Terrier" />
                  </CardText>
                  <CardText>
                     Shorty (10 lbs female Yorkie), and Ginger (85 lbs female Standard Poodle). Bam Bam and Shorty
                     belong to one owner and Ginger belonging to a different owner. The owners are usually great with
                     dogs and their space. They know when to give space or when to be friendly and allow others to pet
                     their dogs. Today Ginger was getting too close to Shorty, which made Shorty a little nervous and
                     made her poop a little. Shorty’s owner, not impressed with Shorty’s behavior, picks it up.
                  </CardText>
                  <CardText>
                     I reference their grooming notes, read them out to the customers, verify their phone numbers, and
                     tell them I’ll call when they’re ready with a smile. Then I hand off the 3 dogs to the groomers one
                     by one with their grooming notes.
                  </CardText>
                  <CardText>
                     As the owners leave, I halt the next owners from coming in. I spray and wipe down Shorty’s poopy
                     area with disinfectant.
                  </CardText>
                  <CardText>
                     <b>9:00</b> - The next owner comes in right on time, happy to see me as always.
                     <br />
                  </CardText>
                  <CardText>
                     <b>Abner</b> (20 lb old shih tzu)
                     <CardImg top width="100%" src={abner} alt="fluffy black dog with straight looking at the camera" />
                  </CardText>
                  <CardText>
                     This is one of my regulars but comes infrequently.
                     <CardText className="chat">
                        <CardText className="me">The usual?</CardText>
                        <CardText className="client">Yep. Short- short. Ok bye!</CardText>
                     </CardText>
                     he leaves as I wonder if I have the correct phone number in the computer.
                  </CardText>
                  <CardText>
                     Meanwhile, 2 more groomers come in Winnie and Nancy (mental note: all 5 groomers are in)
                  </CardText>
                  <CardText>
                     I pass Abner to Nancy while reminding the groomer that Abner is old. That’s our code to go slow and
                     be extra careful. Read health history take note of any unusual occurrences—like new warts, ear
                     discharge, weird breath, anything out of the normal.
                  </CardText>
                  <CardText>
                     <b>9:05</b> - I answer the phone:
                     <br />
                     <CardText className="chat">
                        <CardText className="me">
                           Hello, Thank you for calling !@#$%’s Dog Salon. How can I help you
                        </CardText>
                        <CardText className="client">do you have time for my dog today?</CardText>

                        <CardText className="me">
                           I’m currently booked up for now. But let me take down your number if anything opens, I’ll
                           call you back.
                        </CardText>
                        <CardText className="client">My number is ###-###-####</CardText>
                        <CardText className="me">
                           ###-###-####<b>?</b>
                        </CardText>
                        <CardText className="client">Yup! k, Thanks, bye</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>9:06</b>- fill out my large dry erase board: <br />
                     Bam Bam goes to Tadashi <br />
                     Shorty goes to Sam
                     <br />
                     Ginger goes to Winnie
                     <br />
                     Abner goes to Nancy
                     <br />
                  </CardText>
                  <CardText>
                     <b>9:15</b> – I get a late owner. Apple (15 lb peach-colored female mini poodle with a unique pink
                     nose). I don’t give the owners any grief because I know they have a newborn human baby and Apple
                     isn’t their primary concern anymore.
                     <CardText className="chat">
                        <CardText className="me">Hello! Yay!! Apple's here! The usual?</CardText>

                        <CardText className="client">Yep. Same thing. Ok bye!</CardText>
                     </CardText>
                     he leaves as I wonder if I have the correct phone number in the computer again. Apple’s owners
                     enjoy a “big head cut” meaning they like apple to have a fluffy big head. I pass Apple to another
                     groomer along with her grooming notes. Apple goes to Scarlett
                  </CardText>
                  <CardText>
                     <b>9:30</b> - I notice that I don’t have any customers. I play my 9 messages while I check on the
                     groomers and their dogs. Nancy waves me down from the bath tub and tells me that Abner has a loose
                     and bloody tooth. We check Abner’s history and sees that he has dental issues. I tell the groomer
                     to make notes so I can tell the owners when they pick up.
                  </CardText>
                  <CardText>
                     I get a thumbs up from the groomer working on Tadashi and smiles Sam, Winnie, and Nancy.
                  </CardText>
                  <CardText>
                     <b>9:40</b> – My second wave of customers trickle in for their 10:00 appointment. <br />
                  </CardText>
                  <CardText>
                     <b>Duke</b> (60lb male bulldog)
                     <CardImg top width="100%" src={duke} alt="a big face of a white colored bulldog" />
                  </CardText>
                  <CardText>
                     <b>Fatty</b> (male Shih Tzu)
                     <CardImg top width="100%" src={fatty} alt="brown and white Shih Tzu with big googly eyes" />
                  </CardText>
                  <CardText>
                     <b>Jimmy</b> (16 lb male Cocker Spaniel)
                     <CardImg
                        top
                        width="100%"
                        src={jimmy}
                        alt="brown puppy cocker spaniel sitting on a grooming table"
                     />
                  </CardText>
                  <CardText>
                     Duke gets passed to Tadashi. Fatty gets passed to Sam. Jimmy gets passed to Nancy.
                  </CardText>
                  <CardText>
                     <b>9:55</b> – I answer the phone:
                     <CardText className="chat">
                        <CardText className="me">
                           Hello, Thank you for calling !@#$%’s Dog Salon. How can I help you
                        </CardText>
                        <CardText className="client">Hi I have to cancel my 10:00 for so-and-so Kthxbye</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>10:00</b> – I get a walk in for a nervous dog. I give a consultation to the owner:
                     <CardText className="chat">
                        <CardText className="me">Hello, who do we have here today and how can I help you?</CardText>
                        <CardText className="client">Do you have time today for a nervous dog?</CardText>
                        <CardText className="me">I just had a cancellation. I can take Nervous Dog.</CardText>
                        <CardText className="client">He might bite, he gets really nervous.</CardText>
                        <CardText className="me">
                           I can try. However we charge extra it’s $30/hr we spend on him. Usually it's around $30
                           unless they need extra time. Usually if the dogs are nervous and we go slow, things usually
                           work out. However, If the dog means to harm us—we’ll call you to pick him up.
                        </CardText>
                        <CardText className="client">ok sure *fills out form and hands it to me*</CardText>
                        <CardText className="me">great! Can I pet your dog to check him out?</CardText>
                        <CardText className="client">He might bite you especially since I'm here.</CardText>
                        <CardText className="me">
                           *chuckles* I'm glad you know your dog well. I'll let the groomer decide how short.
                        </CardText>
                        <CardText className="client">Sounds good!</CardText>
                        <CardText className="me">Ok, I'll call you when I call you.</CardText>
                        <CardText className="client">Kthxbye!</CardText>
                     </CardText>
                     I instruct the owner on how to leave:
                     <CardText className="chat">
                        <CardText className="me">
                           Ok, so: <br />
                           1. I want you to put the dog on the ground. <br />
                           2. hand me the leach. <br />
                           3. say goodbye and leave
                           <br />
                           when you leave, I'll slowly bring Nervous dog in. <br />
                        </CardText>
                     </CardText>
                     Owner follows my instructions. As soon owner leaves Nervous dog happliy turns around and follows
                     me. I pass him to Scarlett who has been eavesdropping on some of our conversation.
                  </CardText>
                  <CardText>
                     <b>10:10</b> fill out my large dry erase board: <br />
                     Duke goes to Tadashi <br />
                     Fatty goes to Sam
                     <br />
                     Nervous Dog goes to Nancy
                     <br />
                     Winnie won’t finish Ginger until 12:00 cause he’s a big one.
                  </CardText>
                  <CardText>
                     <b>10:25</b> – return calls inbox message. Check emails
                  </CardText>
                  <CardText>
                     <b>10:50</b> - Tadashi finishes Bam Bam and Sam Finishes Shorty. While Nancy and Scarlett almost
                     finishes Abner and Apple. I call the 3 owners for a heads up to pick up.
                  </CardText>
                  <CardText>
                     <b>11:05</b> - Bam Bam and Shorty owner was outside hanging out – I charge them, give them the
                     summary on how they did and any notes the groomers had.
                  </CardText>
                  <CardText>
                     <b>11:10</b> - Abner’s owner calls and tells me he’s gonna come pick up around 5:00. I say “np”
                  </CardText>
                  <CardText>
                     <b>11:15</b> – Scarlett informs me that Nervous Dog is acting up. Showing teeth, growling, barking,
                     and nipping the air. I tell her to put on protective gloves and go really slow. Sit next to Nervous
                     Dog and hang out with him before working on him. They hang out for 5 – 10 mins. He calms down.
                     Scarlett goes to work.
                  </CardText>
                  <CardText>
                     <b>11:30</b> – Nervous Dog poops in the bath, he’s afraid of water. I help Scarlett clean up the
                     poop and I tell Scarlet to go slow. Use low pressure warm water to start. When he’s comfortable
                     turn it up. If not, use low pressure warm water to start and finish. <br />
                  </CardText>
                  <CardText>
                     <b>Nervous Dog</b>
                     <CardImg
                        src={nervousDog}
                        alt="brown terrier in groomer tub looking intesely at the camera"
                     ></CardImg>
                  </CardText>

                  <CardText>
                     <b>11:50</b>- Apple’s owner calls and tells me he’s gonna come pick up around 5:00. I say “np”
                  </CardText>
                  <CardText>
                     <b>11:51</b> Ginger’s owner comes in:
                     <CardText className="chat">
                        <CardText className="me">
                           Hey! here to pick up Ginger?-- She's not ready yet. Don't let Ginger see you or she’ll get
                           excited and it'll take longer.
                        </CardText>
                        <CardText className="client">*nods and moves to the side*</CardText>
                     </CardText>
                     Winnie Finishes Ginger and blow dries all her excess loose hair and returns Ginger to the owners.{' '}
                     <br />
                     Winnie then gives them the summary:
                     <CardText className="chat">
                        <CardText className="me">Very good, well behaved awesome!</CardText>
                     </CardText>
                     I charge the owners and order lunch.
                  </CardText>
                  <CardText>
                     <b>12:00</b> Lunchtime. I ordered take out and bring it back to the shop. We eat together and take
                     a break from 12-1pm. Some Groomers go hang out in their car for some quiet time. Others sit and
                     chat. I take bites when I can.
                  </CardText>
                  <CardText>
                     <b>12:10</b> – I answer the phone: <br />
                     <CardText className="chat">
                        <CardText className="me">
                           Hello, Thank you for calling !@#$%’s Dog Salon. How can I help you
                        </CardText>
                        <CardText className="client">
                           How much do you charge for a haircut. It’s a small terrier named *mumble mumble*
                        </CardText>
                        <CardText className="me">We start at $60 for small dogs- bath, haircut, and nails.</CardText>
                        <CardText className="client">The place down the street does it for $50</CardText>
                        <CardText className="me">That’s a good deal!</CardText>
                        <CardText className="client">*silence*</CardText>
                        <CardText className="me">*silence*</CardText>
                        <CardText className="me">Anything else I can help you with today?</CardText>
                        <CardText className="client">Do you have any openings today?</CardText>
                        <CardText className="me">
                           I’m currently booked up for now. But let me take down your number if anything opens, I’ll
                           call you back.
                        </CardText>
                        <CardText className="client">My number is ###-###-####</CardText>
                        <CardText className="me">
                           ###-###-####<b>?</b>
                        </CardText>
                        <CardText className="client">Yup! Kthxbye</CardText>
                        <CardText className="me">Bye</CardText>
                        <CardText></CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>12:30</b> – I answer the phone:
                     <br />
                     <CardText className="chat">
                        <CardText className="me">
                           Hello, Thank you for calling !@#$%’s Dog Salon. How can I help you
                        </CardText>
                        <CardText className="client">We're calling about your extended car warranty</CardText>
                        <CardText className="me">*hang up*</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>12:45</b> – Tadashi finishes Duke, Sam finishing up Fatty, Nancy finishes bath and starts the
                     haircut on Jimmy.
                  </CardText>
                  <CardText>
                     <b>12:50</b> – Next wave of owners come in.
                     <br />
                  </CardText>
                  <CardText>
                     <b>Bella</b> (7 lb female Yorkie),
                     <CardImg src={bella} alt="small black and brown yorkshire terrier"></CardImg>
                  </CardText>
                  <CardText>
                     <b>Boba</b> (Fiesty 15 lb male Pekingnese),
                     <CardImg src={boba} alt="thick brown colored short haired Pekingnese"></CardImg>
                  </CardText>
                  <CardText>
                     <b>Foxy</b> (10 lb female Pomeranian),
                     <CardImg src={foxy} alt="short haired hombre brown colored"></CardImg>
                  </CardText>

                  <CardText>
                     <b>Bobo</b> (12 lb male Shih Tzu mix first timer before haircut),
                     <CardImg
                        src={boboBefore}
                        alt="white hairy small dog-- hair covers the eyes He hasn't been groomed for years"
                     ></CardImg>
                  </CardText>
                  <CardText>and</CardText>
                  <CardText>
                     <b>Cash</b> (20 lb male Frenchie).
                     <CardImg src={cash} alt="small black stout french bulldog"></CardImg>
                  </CardText>
                  <CardText>
                     Luckily the groomers help me greet the owners, check grooming notes, and phone number. 5 dogs
                     checked in within minutes. All the dogs get put into cages while I update the whiteboard and
                     collect myself.
                  </CardText>
                  <CardText>
                     <b>12:55</b>- Scarlet finds fleas on the Nervous Dog. I call Nervous Dog’s owner and let them know
                     he has fleas and we charge $15 extra for flea shampoo. They acknowledge. I tell Scarlett to do the
                     flea shampoo.
                  </CardText>
                  <CardText>
                     Note: to do the flea shampoo there’s a waiting time where the dog has to sit in the bathtub for the
                     flea shampoo to work it’s magic. Usually groomer multi task and work on another dog while waiting.
                  </CardText>
                  <CardText>I tell Scarlet that she has Cash next.</CardText>
                  <CardText>
                     <b>1:00</b> – I update the whiteboard: Bella goes to Tadashi <br />
                     Boba goes to Sam
                     <br />
                  </CardText>
                  <CardText>
                     When Sam takes Boba from the cage and onto the grooming table, I tell him about Boba. I tell anyone
                     who takes Boba this story. I love Boba he has a friend named buddy. They hangout together and
                     they’re awesome dogs. You can do anything to Boba. Kiss him, pet him, play with his paws and ears.
                     But you cannot cut his nails without him intentionally trying to hurt you. He will bite. He will
                     bite <b>hard</b>. I’ve worn heavy duty leather gloves and he’s pierced through them.
                  </CardText>
                  <CardText>Foxy goes to Nancy Bobo goes to Winnie Cash goes to Scarlett</CardText>
                  <CardText>
                     <b>1:05</b>- Scarlett tells me Cash needs to be picked up ASAP. Winnie tells me that Bobo is matted
                     and tangled. Bobo is their first visit here. So I call Bobo’s owners:
                     <CardText className="chat">
                        <CardText className="me">
                           Hi, This is Alex from !@#$%’s Dog Salon, you just dropped off Bobo
                        </CardText>
                        <CardText className="client">“Yes”</CardText>
                        <CardText className="me">
                           So, my groomer tells me that Bobo is matted and tangled. We charge an extra $30/hour to shave
                           off tangles. The whole point of this is to go slow so there’s no accidents. My main concern
                           is the safety of your dog
                        </CardText>
                        <CardText className="client">How much extra?</CardText>
                        <CardText className="me">
                           $30/hour, It looks like it won’t go above an hour. Bobo seem calm and the tangles doesn’t
                           seem too tight. So $60 + $30 for tangles, you’re look at a total of $90
                        </CardText>
                        <CardText className="client">Fine. Ok. Thanks for letting me know.</CardText>
                        <CardText className="me">Ok, I’ll call you when I’m done</CardText>
                        <CardText className="client">Kthxbye</CardText>
                        <CardText className="me">Bye</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>1:30</b> – I answer the phone:
                     <CardText className="chat">
                        <CardText className="me">
                           Hello, Thank you for calling !@#$%’s Dog Salon. How can I help you
                        </CardText>
                        <CardText className="client">Hi, I have a 2:00 for george, I have to cancel</CardText>
                        <CardText className="me">Ok, Thank you for letting me know!</CardText>
                        <CardText className="client">Kthxbye</CardText>
                        <CardText className="me">bye!</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>1:31</b> – I start calling 5 people on my waitlist, the 5th person picks up! It’s the terrier
                     named mumble mumble!
                     <CardText className="chat">
                        <CardText className="me">
                           Hi, This is Alex from !@#$%’s Dog Salon. I just had a cancellation. Do you still want to
                           bring in Mumble Mumble?
                        </CardText>
                        <CardText className="client">Yes, I’ll be right there. $50 right?</CardText>

                        <CardText className="me">
                           We start at $60 for small dogs. It’s extra for mats, tangles, and fleas/ticks
                        </CardText>
                        <CardText className="client">*silence*</CardText>

                        <CardText className="me">*silence*</CardText>

                        <CardText className="client">ok, I’ll be right there 2 minutes!</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>1:45</b> – 2:00 appointments trickle in: <br />
                  </CardText>
                  <CardText>
                     <b>Leo</b> (40 lb male Shetland Sheepdog),
                     <CardImg
                        src={leo}
                        alt="an alert brown headed, white chested, grey bodied shaved sheltie laying on the floor"
                     ></CardImg>
                  </CardText>
                  <CardText>
                     <b>Woopy</b> (15 lb male Wirefox Terrier),
                     <CardImg src={woopy}></CardImg>
                  </CardText>
                  <CardText>
                     and <br />
                  </CardText>
                  <CardText>
                     <b>Max</b> (10 lb male Shih Tzu Maltese mix).
                     <CardImg src={max}></CardImg>
                  </CardText>
                  <CardText>I do my dance and put them in cages to wait for the groomers to free up.</CardText>
                  <CardText>
                     <b>2:00</b> – Scarlett finishes Cash and <br />
                     resumes work on Nervous Dog.
                     <br />I call and the owner comes from the laundry matt next door.
                  </CardText>
                  <CardText>
                     <b>2:15</b> - Duke’s owner picks up Duke. <br />
                     Jimmy’s owner comes at the same time. Jimmy goes home.
                  </CardText>
                  <CardText>
                     <b>2:20</b> – small terrier named *mumble mumble* comes in:
                  </CardText>
                  <CardText className="chat">
                     <CardText className="me">Hello, welcome to !@#$%'s Dog Salon. How may I help you?</CardText>
                     <CardText className="client">Hi, I’m here for mumble mumble</CardText>
                  </CardText>
                  <CardText className="red-flag">
                     ***Immediately I assess the situation and start checking out mumble. The $50 remarks raised red
                     flags for me. So I’m trying to cover my butt. I don’t want to quote a price and change it on them
                     last minute because it took longer. She would get upset. I mean, I get it, I would get upset too.
                     So I try my best to be transparent with her. and not have any hidden fees*
                  </CardText>
                  <CardText className="chat">
                     <CardText className="me">
                        Great! So like I said we start at $60 for small dogs. Can I check him out and pet Mumble Mumble?
                     </CardText>
                     <CardText className="client">*while filling out the form * “sure”</CardText>
                     <CardText className="me">
                        *notices matts and tangles I realize this is going to take more time and effort. The owner is
                        not going to be happy. But I rather address this to her now instead of later*
                     </CardText>
                     <CardText className="me">
                        So, I’m feeling mumble, I notice matts and tangles. *I get a comb and begin showing her that the
                        comb does not go through the fur*
                     </CardText>
                     <CardText className="client">That’s fine, just go short</CardText>
                     <CardText className="me">
                        Oh good, you don’t mind going short. I was going to recommend that. Additionally we charge an
                        extra $30/hour to shave off the matts and tangles. We go slower when it comes to matts and
                        tangles because the fur is much closer to the skin and this is the time where accidents happen
                        the most”
                     </CardText>
                     <CardText className="client">
                        No, you said $60 for full groom and you're going to shave her so why the extra charge?
                     </CardText>
                     <CardText className="me">
                        Yes, I did say that we start at $60. We do have extra charges for matts/tangles, fleas and ticks
                     </CardText>
                     <CardText className="client">fine, I’m already here</CardText>
                     <CardText className="me">ok, I’ll call you when I’m done</CardText>
                     <CardText className="client">*storms off*</CardText>
                  </CardText>
                  <CardText>I put mumble in a cage and let Scarlett know that she has mumble next.</CardText>
                  <CardText>
                     <b>2:30</b> – Scarlet finishes Nervous Dog by doing the best she could. <br />
                     “best she could means exactly that. <br />
                     She did the best she could without hurting the dog or getting hurt.
                     <br />
                     I notice there are some uneven spots on Nervous Dog’s head. <br />
                     When try to fix it and immediately Nervous Dog snaps at me. <br />
                     I shrug and call the owners that Nervous Dog is ready and we did the best we could.
                     <br />I tell Scarlett she has mumble next
                  </CardText>
                  <CardText>
                     <b>2:45</b> – Bella, Boba, Foxy, and Cash almost ready. <br />I call the owners. They all want to
                     pick up later. I say no problem.
                  </CardText>
                  <CardText>
                     <b>2:50</b> – I update the white board: <br />
                     Leo goes to Tadashi
                     <br />
                     Woopy goes to Sam
                     <br />
                     Max goes to Nancy
                     <br />
                  </CardText>
                  <CardText>
                     <b>2:55</b> – my 3:00 appointments trickle in: <br />
                  </CardText>
                  <CardText>
                     <b>Niu niu </b>(30 lb female Shiba Inu),
                     <CardImg src={niuNiu}></CardImg>
                  </CardText>
                  <CardText>
                     <b>Corgi</b> (20 lb female Pembroke Welsh Corgi),
                     <CardImg src={corgi}></CardImg>
                  </CardText>
                  <CardText>
                     <b>Leo number 2</b> (35 lb male Border Collie?),
                     <CardImg src={leo2}></CardImg>
                  </CardText>
                  <CardText>and Coco (10 lb female Maltese). I put them in the cage to wait for groomers.</CardText>
                  <CardText>
                     <b>3:15</b> – Abner’s owner picks up with the whole family. <br />
                     Wife, Kids, and grandparents. <br />
                     I tell them about Abner’s tooth. <br />
                     <CardText className="chat">
                        <CardText className="client">That’s fine, he lost 1 other tooth last week!</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     3:15 – Nervous Dog’s owner comes to pick up. <br />I show them Nervous Dog and tell them we did the
                     best we could:
                     <CardText className="chat">
                        <CardText className="client">
                           Oh my god, he looks so good! He’s never looked so good before. I was worried because the Vet
                           down the street wouldn’t take him because he was too aggressive!”
                        </CardText>
                     </CardText>
                     they leave happy.
                  </CardText>
                  <CardText>
                     3:30 – my last appointments come in: <br />
                     Gizmo (15 lb male Shih Tzu), <br />
                  </CardText>
                  <CardText>
                     <b>Penny</b> (7 lb female Dachshund),
                     <CardImg src={penny}></CardImg>
                  </CardText>
                  <CardText>
                     and <br />
                  </CardText>
                  <CardText>
                     <b>Tangled Terrier</b> (10 lb female Cairn Terrier)
                     <CardImg src={tangledTerrier}></CardImg>
                  </CardText>
                  <CardText>
                     I noticed that Tangled Terrier was severely tangled, <br />I inform the owner about extra charges:
                     <CardText className="chat">
                        <CardText className="client">*shrugs* ok</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>3:35</b> – I update the whiteboard: <br />
                     Niu niu goes to Winnie
                     <br />
                     *Niu Niu, just like Boba, does not like nails. She will bite you with all her might if you try to
                     cut her nails.*
                     <br />
                     Corgi goes to Scarlett <br />
                     Leo number 2 goes to Tadashi
                     <br />
                     Coco goes to Sam <br />
                     Gizmo goes to Nancy
                     <br />
                     Penny goes to Winnie
                     <br />
                     Tangled Terrier goes to Scarlett
                     <br />
                  </CardText>
                  <CardText>
                     Scarlett winces cause she knows her last dog is tangled and it might make her stay over time.
                     <br />
                     But she’s a good sport and continues working. <br />
                  </CardText>
                  <CardText>
                     <b>3:30</b> – Leo, woopy, and max all done. I call the owners. <br />
                  </CardText>
                  <CardText>
                     <b>4:00</b> – Apple’s owner picks up. <br />
                     Leo owner picks up, Woopy picks up, and Max picks up. <br />
                  </CardText>
                  <CardText>
                     <b>4:25</b> – Foxy and Bobo picks up <br />
                  </CardText>
                  <CardText>
                     <b>bobo</b> (after haircut)
                     <br />
                     <CardImg src={boboAfter}></CardImg>
                  </CardText>
                  <CardText>
                     Niu niu, corgi, mumble, and Leo number 2 done.
                     <br />
                     They’re done faster cause all they need were baths and no haircut. <br />
                     I call the owners. Tadashi's done with all his assigned work.
                     <br />
                     I ask him to help out Scarlett. <br />
                  </CardText>
                  <CardText>
                     <b>5:00</b> – Bella and Boba picks up. <br />
                     Tangled Terrier’s shave down was quick, <br />
                     his matts and tangles were bad but they were <br />
                     loose from the body which made the shave down quick. <br />
                     Tadashi begins to clean up, his clean up duties today are to wash the bath tub and refill the
                     shampoo. <br />
                  </CardText>
                  <CardText>
                     <b>5:15</b> - Niu Niu, Corgi, and Leo number 2 gets picked up.
                  </CardText>
                  <CardText>
                     <b>5:30</b> - Penny done. I call owner. <br />
                     Winnie’s clean up duties today are: <br />
                     Sanitize all the shears and clippers. <br />
                     Do the laundry. We use towels and blow driers to dry the dogs so at the end of the day there’s a
                     big load of towels to wash and dry. <br />
                  </CardText>
                  <CardText>
                     <b>5:35</b> – Mumble gets picked up. <br />
                     The owner unhappily pays for the grooming and tangles. <br />
                  </CardText>
                  <CardText>
                     <b>6:00</b> – Coco, Gizmo, Tangled Terrier done. <br />
                     I call owners. They’re already outside waiting. <br />
                  </CardText>
                  <CardText>
                     Sam’s clean up duties are: <br />
                     Wipe and sanitize all tables. <br />
                     Take out the trash. Nancy’s clean up duties are: <br />
                     Clean up all the cages and replace newspapers <br />
                     Scarlett’s clean up duties are: <br />
                     clean up the bathing area (clear drains, sweep/mop floors) and clean up restroom.
                  </CardText>
                  <CardText>
                     <b>6:05</b> – Penny gets picked up.
                  </CardText>
                  <CardText>
                     <b>6:10</b> – As the groomers finish cleaning up I thank them and wish them good night.
                  </CardText>
                  <CardText>
                     <b>6:15</b> – I do a cage check to make sure all dogs are gone. Fatty is still here! I call the
                     owner:
                     <CardText className="chat">
                        <CardText className="me">
                           Hi, this is Alex from !@#$%'s Dog Salon, Fatty is still here!
                        </CardText>
                        <CardText className="client">
                           Oh, I told my husband to pick up. I’m getting off of work right now
                        </CardText>
                        <CardText className="me">
                           *I realize that Fatty’s owners are habitually late, for whatever reason, they love to pick up
                           after closing hours. But they’re regulars and Fatty’s awesome so I don’t mind waiting.*{' '}
                           <br />
                           No problem, you thinking 6:30 or closer to 7?
                        </CardText>
                        <CardText className="client">6:45</CardText>
                        <CardText className="me">Ok, See ya!</CardText>
                     </CardText>
                  </CardText>
                  <CardText>
                     <b>6:20</b> – I start to close up shop and calculate the total take for the day for the shop owners
                     to review. I do paperwork to summarize the day
                  </CardText>
                  <CardText>
                     <b>6:50</b> – Fatty’s owner picks up. I set the alarm and lock the doors. That’s been my day in the
                     life of a dog grooming manager.
                  </CardText>
               </CardBody>
            </Card>
         </div>
      );
   }
}

export default BlogDayInTheLife;
