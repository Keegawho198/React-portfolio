import React from "react";
import Main from "./ProfilePic.jpg"

const About = () => (
  <div>
    <h1>About Page</h1>

    <img src={Main} alt="PhotoOfMe" id="about-image" height="300" width="300"/>


    <p>
      Hello, My name is Keegan Nair I was a student at monash university,
      where I did a programming bootcamp in hopes that it will enhance my knowledge when it comes
      to programming and better prepare me to attatin a job in the IT field.
      </p>

<p>
      I am seeking a Junior Software developer position. Educated at CQUniversity with an information
      technology bachelors and Monash university programming Bootcamp. I recently gained extra skills in
      coding from Monash university coding Bootcamp such as JavaScript, CSS, Html,
      responsive web design and Jquery. Friendly and approachable when it comes to different programming scenarios. I enjoy creating features that make applications more user-friendly. Always looking forward to learning new programming aspects to better enhance my skills and is happier when collaborating with others to create new web applications or finding improvements. Excited to develop more.
</p>
<p>
      I love to code and create new things. I am hoping to get a job in programming
      as I believe that it will be fun and satisfying work. I also like the famous saying,
      said by Walt Disney, "Keep moving forward". Or something like that. No point dwelling on the past.
      It's better to work on what you have now and in the future.
    </p>
  </div>
);

export default About;
