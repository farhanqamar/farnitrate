import React from "react";
import "./Miguel.css";
import bioMi from "../images/bioMiguel.webp";
import Bmiguel from "../images/Mblog.webp" 
import mprints from "../images/mprints.webp"
const Bio = () => {
  return (
    <>
      <section className="bg-black text-white px-4">
        <p className="text-white font-normal list text-[22px] p-10">
          <a className="text-[#ffff]" href="/">
            Homepage
          </a>
          / Bio
        </p>

        {/* 1 */}
        <div className="m-auto md:w-[768px] px-[2%] ">
          <div className="mt-6">
            <h1 className="text-center text-[40px] font-extrabold pt-10 italic">
              Passion Has No Boundaries. Miguel Proves It!
            </h1>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Miguel has had an unpredictable and incredible journey since the
              beginning. We can’t wait to share with you how he got started with
              his passion for art and what went into becoming one of the most
              successful Southwest artists.
            </p>

            <div>
              <img src={bioMi} alt="Image" className="m-auto" />
            </div>
            <p className="text-[#F6C934] text-[18px] lg:text-white underline text-center mt-4">
              <a className="list text-[#FACC15]" href="#">
                Support Miguel Camarena’s Art
              </a>
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-wide pt-10 ">Meet The Man Of The Hour</h2>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Miguel Angel Camarena was born and raised in the 
              <br />{" "}
              <span className="text-[#F6C934] text-[18px] list italic underline">
                <a href="#"></a>Tarahumara Land
              </span>{" "}
              in the{" "}
              <span className="text-[#F6C934] text-[18px] list italic">
                Sierra Madre of Chihuahua
              </span>
              . He moved to{" "}
              <span className="text-[#F6C934] text-[18px] list italic">Southern California</span>{" "}
              at 13, where he started school. In the first year of junior high,
              he took art classes, which he enjoyed so much that he greatly
              excelled in the subject. The school's principal approached him and
              asked him to design the yearbook cover, which became his first
              printed illustration.
            </p>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Soon after that, he was encouraged by his other teachers to get
              more involved in art classes, but it wasn’t until after high
              school that an{" "}
              <span className="text-[#F6C934] text-[18px] list italic">
                International Production Company
              </span>{" "}
              approached him. Camarena was asked to illustrate a movie which was
              the beginning of his career as an illustrator.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl  font-extrabold tracking-wide pt-10 ">
              Miguel Jump Started His Professional Career
            </h2>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              During his early career as an illustrator, Camarena was challenged
              by more complex projects. At that time, he met a very popular
              Hollywood movie poster illustrator,{" "}
              <span className="text-[#F6C934] text-[18px] list italic">Morgan</span>. Morgan
              recommended him to attend the{" "}
              <span className="text-[#F6C934] text-[18px] list italic">
                California Art Institute
              </span>
              , specializing in{" "}
              <span className="text-[#F6C934] text-[18px] list italic">
                Cinematography illustration
              </span>
              .
            </p>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Camarena began illustration projects with companies such as{" "}
              <span className="text-[#F6C934] text-[18px] list italic">NBC, T.V. Guide</span>,
              and <span className="text-[#F6C934] text-[18px] list italic">Warner Brothers</span>
              . He also traveled to New York to enroll in the Art Students
              League. While in New York, he illustrated several book covers,
              including the new edition{" "}
              <span className="text-[#F6C934] text-[18px] list italic">“BenHur”</span>. Camarena
              is responsible for creating hundreds of movie covers for VHS
              releases. Following his time in Los Angeles, Camarena moved to{" "}
              <span className="text-[#F6C934] text-[18px] list italic">San Diego</span> where he
              met the famous{" "}
              <span className="text-[#F6C934] text-[18px] list italic">
                European Painter Sebastian Capella
              </span>{" "}
              from whom he would learn impressionism and classical European
              painting.
            </p>
            <div>
              <img src={Bmiguel} alt="Image" className="m-auto" />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-extrabold tracking-wide pt-10 italic">
              Miguel’s Passion Took A U-Turn
            </h2>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Camarena felt he needed to make a change in his career. He then
              remembered his early childhood, the people, the traditional
              fiestas, the ceremonies at{" "}
              <span className="text-[#F6C934] text-[18px] list italic">Easter time</span>, the
              traditional customs of the{" "}
              <span className="text-[#F6C934] text-[18px] list italic underline">
                <a className="list" href="#">Indians</a>
              </span>
              , the dances, and the{" "}
              <span className="text-[#F6C934] text-[18px] list italic">Tesquino</span>. He
              remembers vividly the people playing the fiddle, the ladies
              dancing to the flute rhythms, the men proudly celebrating by
              playing the drums, how they enjoyed Tesquino and danced all night.
            </p>
            <p className="text-[#F6C934] text-[18px] lg:text-white list my-6">
              He still feels the drums in the beat of his heart. Camarena
              returned to the{" "}
              <span className="text-[#F6C934] text-[18px] list italic">Tarahumara Land</span> and
              started his career as a fine art artist. He created a full
              collection of paintings featuring the Tarahumara people many of
              which would later be featured in cultural museums.
            </p>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              After spending much time in Arizona he decided to move there full
              time and open up his own fine art gallery, featuring cultural
              paintings inspired from his past as well as desert landscapes
              presenting the beauty of his new environment.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-extrabold tracking-wide pt-10">His Initiative To Introduce Giclee Prints</h2>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              When{" "}
              <span className="text-[#F6C934]  list underline">
                <a className="text-[18px] list" href="#">Miguel Camarena’s paintings</a>
              </span>{" "}
              swiftly became the talk of town, especially his now world famous{" "}
              <span className="text-[#F6C934] text-[18px] list sunderline">
                <a className="text-[18px] list" href="#">“Donkey Collection”</a>
              </span>
              , the demand for his art exploded. Therefore, Miguel introduced
              the giclee printing technique in his gallery so that if someone
              wants to own an original design of Miguel Camarena, they can get a
              quality reproduction of any custom size on canvas.
            </p>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Currently, he has extended his services domain and offers original
              paintings, fine art prints, wholesale options, corporate and home
              art curation, as well as home and real estate staging services at
              his art gallery located in Cave Creek, Arizona. Additionally,
              Miguel Camarena’s offerings are available online to customers
              around the world.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-3xl font-extrabold tracking-wide pt-10">
              Miguel’s Dedication Towards Humankind
            </h2>
            <div className="mt-8">
              <img src={mprints} alt="Image" className="m-auto" />
            </div>
            <p className="text-[#F6C934] text-[18px] list lg:text-white my-6">
              Camarena enjoys teaching modern contemporary art part-time to
              disadvantaged youth and sharing his ideas to help them express
              themselves positively and creatively. Camarena lives in{" "}
              <span className="text-[#F6C934] text-[18px] list italic">Arizona</span>, where he
              has his art gallery and continues to paint{" "}
              <span className="text-[#F6C934] text-[18px] italic list underline">
                <a className="list text-[18px]" href="#">Arizona landscapes</a>
              </span>{" "}
              as well as a variety of other subject matter and teach on
              occasions.
            </p>
            <p className="text-[#F6C934] text-[18px] list lg:text-white underline text-center mt-4">
              <a href="#" className="text-[#F6C934] text-[18px] list">
                Get Miguel Camarena Art for Sale
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
