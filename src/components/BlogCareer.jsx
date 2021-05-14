import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import careerChange from '../pictures/careerChange.jpg';
import alex from '../pictures/alexTinyBgRemoved.png';

class BlogCareer extends React.Component {
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className="blog-template">
            <h5>Career Change</h5>

            {/* need some padding-right avatar */}

            <CardSubtitle tag="h6" className="mb-2 text-muted">
               <img src={alex} alt="icon sized"></img>Alexander Cheng on 5/10/2021
            </CardSubtitle>
            <Card style={{ width: '90%', display: 'inline-block', textAlign: 'left' }}>
               <CardImg top width="100%" src={careerChange} alt="white dog" />
               <CardBody>
                  <CardText>
                     I worked hard but just didn’t have any more enthusiasm for my role. When the pandemic brought me an
                     unexpected gift of time, I put it to good use. Here’s how I fell in love with a creative medium and
                     found a new career path.
                  </CardText>
                  <CardTitle tag="h5">What was I doing previously?</CardTitle>
                  <CardText>
                     I was a store manager for a dog grooming company. Check out my blog “a morning in the life of a dog
                     grooming manager.” Link here
                  </CardText>
                  <CardTitle tag="h5">How did you feel in your work before you decided to make the change?</CardTitle>
                  <CardText>
                     While I had some proud moments throughout my career, for the last few months there was this nagging
                     feeling that I needed a change. My work no longer brought me the same fire and energy it once had.
                     I realized that if doing my job well didn’t excite me, I needed a new job.
                  </CardText>
                  <CardText>
                     I started to feel really unfulfilled and disconnected from my work. I tried my best to be
                     productive and work hard, but I just couldn’t bring any passion for it.
                  </CardText>
                  <CardTitle tag="h5">Why did you change?</CardTitle>
                  <CardText>
                     While my initial idea was to get a better-paying job, but it wasn’t going to plan.
                  </CardText>
                  <CardText>
                     I applied for several full stack developer jobs and often never heard a response. I had to learn
                     the hard way that I was more of a junior developer. I started applying for junior level jobs
                     instead, but was unsuccessful at the final interview stage everytime.
                  </CardText>
                  <CardText>
                     I’ve always enjoyed coding. I remember there were a few exciting days after work where I would rush
                     home, quickly eat, and work on a personal project. But I never thought anything of it. When I
                     realized I could make a career from it, I dropped everything and pursued it.
                  </CardText>
                  <CardTitle tag="h5">What was the moment you decided to make the change?</CardTitle>
                  <CardText>
                     Over dinner last year with my wife, feeling drained and discouraged, I told her I wished I could
                     take some extended time off work but just wasn’t able to afford it. This was just before the
                     pandemic hit and deciding to have a baby. We spoke briefly about coronavirus, little knowing just
                     how much it would turn our lives upside down, just a few weeks later.
                  </CardText>
                  <CardText>
                     And then, in the most unexpected way, I got my wish of having more time. The shop traffic halted.
                     My wife and my boss encouraged me into learning a new career. It’s now or never.
                  </CardText>
                  <CardText>
                     I felt incredibly lucky. I had the chance to experiment creatively full-time instead of just
                     evenings and weekends.
                  </CardText>
                  <CardText>
                     As time went on and as much as I love dogs, I knew that I didn't want to be a dog groomer anymore.
                     Software development was what I felt truly passionate about, so that's when I ditched the original
                     plan and focused on my new career path.
                  </CardText>
                  <CardText></CardText>
                  <CardTitle tag="h5">What help did you get?</CardTitle>

                  <CardText>
                     I had financial support from my wife and Sally Mae which enabled me to be less stressed about
                     finances and more able to focus on coding and looking for jobs.
                  </CardText>
                  <CardText>
                     I attended a coding bootcamp called Sabio they had great payment options. Additionally, they also
                     helped me refine my skills, focus on subject matter, and instilled realistic expectations which
                     gave me peace of mind.
                  </CardText>
                  <CardTitle tag="h5">What resources would you recommend to others?</CardTitle>
                  <CardText>
                     I'd say to watch youtube tutorials, read books / articles, and speak to people in the industry
                     you're looking to break into. It's all free!
                  </CardText>
                  <CardText>Take part-time courses as well, if relevant.</CardText>
                  <CardTitle tag="h5">What have you learnt in the process?</CardTitle>

                  <CardText>An unbelievable amount.</CardText>
                  <CardText>
                     The process web development is a steep learning curve, especially in a completely different
                     industry.
                  </CardText>
                  <CardText>
                     I think the biggest thing I've learned is that everything takes longer than you think. I now give
                     myself plenty of time to get things done, so that I don't get stressed.
                  </CardText>
                  <CardText>I’ve also learned that making mistakes are part of learning. Everyone makes them.</CardText>
                  <CardText>If you get stuck, move on. Come back to it later</CardText>
               </CardBody>
            </Card>
         </div>
      );
   }
}

export default BlogCareer;
