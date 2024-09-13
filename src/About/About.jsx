import AboutImg from "/assets/Images/BothRabbits.jpg";

const About = () => {
  return (
    <div id="about" className="w-full pb-8 bg-raisin_black-500">
      <h1 className="text-antiwhite-500 font-custom font-extrabold text-5xl pt-8 pb-10 text-center">About</h1>
      <div className="flex justify-center lg:flex-row flex-col">
        <div className="lg:w-1/2 rounded-lg">
          <div className="pt-4 rounded-lg">
            <img alt="about" src={AboutImg} className="rounded-xl w-2/3  m-auto max-h-96 max-w-md object-contain" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="2xl:w-1/2 w-full p-4 lg:pt-0 text-antiwhite-500 font-custom font-semibold text-2xl my-auto ">
            I'm currently a student a School of Mines studying computer science and artifical intelligence. I also work on making a lot of different projects for stuff I find insteresting. Outside of
            engineering I enjoy taking care of my two pet rabbits(Rusty and Reese), working on learning more Japanese, and playing video games. I recently learned how to pan for gold and have been out
            doing that when I have the time as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
