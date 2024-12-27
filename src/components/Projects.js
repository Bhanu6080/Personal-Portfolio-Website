export default function Projects() {
    return(
    <section id="projects" className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
        <h2 className="pt-20 text-5xl text-red-500 font-bold text-center">My Projects</h2>
         {/*Project-1*/}
        <div className="p-10 bg-red-200 flex flex-col justify-center items-center gap-5 lg:flex-row
        max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
            <div className="w-80 rounded">
                <a href="https://www.google.com/search?sca_esv=e1e3193eddeaa204&sxsrf=ADLYWIJ3f-uLdCSZ3jncSPcJSAz_thWRtA:1734509766628&q=quiz+app+images&udm=2&fbs=AEQNm0CG2PBLqxdyjucdwyRubSnstesgUQyAE9PWU7zKAVCqmsnvFcYzWYfu36PxdQTuhXgzBldwXZ2xuoRM1GhPEK4YWjxpRgZsNhXIXbRElAVbI5bx2Pl_-QEDp74kTUZzdMKn9iXk-LZFLCIhqv-_4V1ryuEGYmmsi_5Eu5ceVxbi2OH3TMrhXVvnYyMbjl4g49GgWjG-EXB09mUxGyCkvxtHHk_GU8JAnvjnHgVLIL-5RJ0L-2ce8dQJHhNlSH-zRMYfkf-_&sa=X&sqi=2&ved=2ahUKEwj5_f6z8LCKAxXKd2wGHYAiGfcQtKgLegQIEhAB&biw=1163&bih=532&dpr=1.65" target="_blank" className="w-full h-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9G6G_fInAKQNkMKgsz76IPoFtf2kmJdBy0A&s" 
                alt="project 1" className="w-full h-full bg-cover rounded"/> 
                </a>
            </div>
            <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
            <h2 className="font-bold text-3xl text-center">
             <a className="hover:underline" href="https://kids.niehs.nih.gov/games/brainteasers/brainteaser-quizzes " target="_blank">
                  Project-1
             </a>
            </h2>
            <p className='text-center text-blue-500 text-2xl font-bold' >
                    Quiz Application
                </p>
            <p>
             Developed brain buster quiz system using java, showcased proficiency in backend development.
             Designed a user-friendly interface for quiz creation and customization.
            </p>
            </div>
        </div>  
        {/*Project-2*/}
         <div className="p-10 bg-red-200 flex flex-col justify-center items-center gap-5 lg:flex-row
        max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
            <div className="w-80 rounded">
                <a href="https://www.google.com/search?sca_esv=d8c2e9d81984a267&sxsrf=ADLYWIKNRBRF8xI5uOo90MPZYw-1NVl8fw:1734511990268&q=Integrated+Standalone+Solar+and+Wind+to+Vehicle+Technology+in+a+Micro-Grid+Using+DC+Fast+Charging+Architecture+for+Sustainable+Mobility+Initiative&udm=2&fbs=AEQNm0CG2PBLqxdyjucdwyRubSnstesgUQyAE9PWU7zKAVCqmsnvFcYzWYfu36PxdQTuhXg_dcR75ZjLne8ZO1zt0cIK58QIjhe7lzp9EGpln0qSZ8BDIr66UgQNS8XrDXmdpTVAAgPuBku474naRjgq7kZN0bYBMTuaHbpHjCrhdQJ9cYqx29cA_BhN8kqQHgPT5QawM4_uQKVBpep9Vb2NQR2Fj6X5xON5ZBoFk3_ngLLPZ-siXk9ydIA_lDBrYJZWAjoORsst&sa=X&ved=2ahUKEwjJkqfY-LCKAxWUp1YBHdQ-E7sQtKgLegQIDxAB&biw=1163&bih=532&dpr=1.65" target="_blank" className="w-full h-full">
                <img src="https://www.mdpi.com/energies/energies-13-05095/article_deploy/html/images/energies-13-05095-g001.png" 
                alt="project 1" className="w-full h-full bg-cover rounded"/> 
                </a>
            </div>
            <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
            <h2 className="font-bold text-3xl text-center">
             <a className="hover:underline" href="https://www.researchgate.net/publication/386214906_Integrated_Standalone_Wind_and_Solar_to_Electric_Vehicle_Technology_with_Battery_Microgrids_in_DC_Fast_Charging_Architecture_for_Sustainable_Mobility_Initiative" target="_blank">
                  Project-2
             </a>
            </h2>
            <p className='text-center text-blue-500 text-2xl font-bold' >
            Integrated Standalone Solar and Wind to Vehicle Technology in a Micro-Grid Using DC Fast Charging Architecture for Sustainable Mobility Initiative
                </p>
            <p>
            The system integrates standalone solar and wind energy to power electric vehicles (EVs) within a micro-grid, reducing dependency on the traditional power grid and promoting sustainable energy usage.
            </p>
            <p>
            Utilizing a DC fast-charging architecture, this system enables rapid and efficient charging of EVs, supporting sustainable mobility initiatives by ensuring reliable, renewable-powered charging infrastructure.
            </p>
            </div>
        </div>           
         {/*Project-3*/}
         <div className="p-10 bg-red-200 flex flex-col justify-center items-center gap-5 lg:flex-row
        max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
            <div className="w-80 rounded">
                <a href="https://www.google.com/search?q=Micro+Controller+Based+Speed+Control+of+Stepper+Motor+project+images+only&sca_esv=d8c2e9d81984a267&biw=1163&bih=532&tbm=shop&sxsrf=ADLYWIK9BeAzZ_6pwDkJODZR_mRk64_80g%3A1734512416136&ei=II9iZ7zUB46g0-kP24OByQ0&ved=0ahUKEwi85K-j-rCKAxUO0DQHHdtBINkQ4dUDCAg&uact=5&oq=Micro+Controller+Based+Speed+Control+of+Stepper+Motor+project+images+only&gs_lp=Egtwcm9kdWN0cy1jYyJJTWljcm8gQ29udHJvbGxlciBCYXNlZCBTcGVlZCBDb250cm9sIG9mIFN0ZXBwZXIgTW90b3IgcHJvamVjdCBpbWFnZXMgb25seUiHFFDdBliiEXAAeACQAQCYAbUBoAG3B6oBAzAuNrgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAHtgw&sclient=products-cc#spd=8508457933838164589" target="_blank" className="w-full h-full">
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkN5Tc-euQ_-HaANwcDHb9-9mpCvC6DAZb0BucDBGAXdI-hYkHkQtZ_odKoK3xLNlNNv7vEJrp2pg-sH3P_XlvdiEofVzGCq42e4MKzTkKLoEqMeRVx-4O&usqp=CAE" 
                alt="project 1" className="w-full h-full bg-cover rounded"/> 
                </a>
            </div>
            <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
            <h2 className="font-bold text-3xl text-center">
             <a className="hover:underline" href="https://www.subr.edu/assets/subr/ElectricalEngineering/TargetedInfusion/Files/ELEN-417-Stepper-Motor-projects4078.pdf" target="_blank">
                  Project-3
             </a>
            </h2>
            <p className='text-center text-blue-500 text-2xl font-bold' >
            Micro Controller Based Speed Control of Stepper Motor               
             </p>
            <p>
            A microcontroller regulates the speed and position of a stepper motor by generating precise control signals, allowing for accurate and stepwise motion control in various applications.
             </p>
            <p>
            The microcontroller enables programmable speed adjustments, improving efficiency and flexibility in motor control, commonly used in automation, robotics, and industrial systems.
             </p>
            </div>
        </div>           
    </section>
    );
}