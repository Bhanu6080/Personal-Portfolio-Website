import NewImage from './newimage.jpg';

export default function Main() {
    return(
     <section id="main" className="pt-20 px-10 w-full flex gap-12 flex-col lg:flex-row justify-center
                                   items-center align-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh">
        <div className="flex-1 flex flex-col justify-center items-center gap-5"> 
            <div>
                <h4 className="text-center text-xl font-bold">
                    Hi and Welcome to 
                </h4>
                <h2 className="text-center text-red-500 text-5xl font-bold">
                    My Portfolio Website
                </h2>
            </div>
            <p className="text=center">
                I am your friendly developer.....
            </p>
        </div>
        <div className='flex-1 '>
            <img src={NewImage} alt="Hell.svg" className='w-3/4 h-3/4 bg-cover rounded-full'/>
        </div>
     </section>
    );
}