import { project } from "../constants";
import Button from "./Button";
import Section from "./Section";


const Roadmap = () => (


  <Section className="overflow-hidden" id="roadmap">
    {
      <div className="flex  items-center justify-center gap-10 max-sm:gap-10 flex-wrap max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:mt-10 max-sm:mb-10 max-sm:mx-5 max-sm:py-5 ">
      {
        project.map((item) => (
        <div key={item.id} className="flex flex-row items-center justify-center gap-5 max-sm:gap-10 " >

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-900 di">
            <a>
              <img class="rounded-t-lg" src={item.img} alt="" />
            </a>
            <div class="p-5">
              <a href={item.url}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              </a>
              <a href={item.url} >
                {<Button>Read more</Button>}  
              </a>
            </div>
          </div>
        </div>
      ))
      } 
    </div>
    }
  </Section>
);

export default Roadmap;
