import OldImage from './oldimage.jpg';

export default function About() {
    return(
        <section id='about' className='pt-20 px-10 w-full flex flex-col lg:flex-row py-20 align-center
                                       bg-red-200 max-w-5xl mx-auto rounded-lg '>
            <div className='flex-1'>
                <img src={OldImage} alt='About' className='w-3/4 h-3/4 bg-cover rounded-full' />
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-5 px-6'>
                <div>
                    <h2 className='text-center text-red-500 text-5xl font-bold'>About Me</h2>
                </div>
                <p className='text-center text-blue-500 text-2xl font-bold' >
                    Hi, I'm Bhanu Prakash Peddapalyam
                </p>
                <p>
                I’m a passionate Java Full Stack Developer with a background in 
                Electrical and Electronics Engineering. I love creating impactful and 
                efficient solutions through innovative thinking and meticulous attention to detail. 
                </p>
                <p>
                Over the years, I have honed my skills in Java,Python,HTML,CSS,Java Script,MySQL.
                 My experience spans various projects where I’ve applied both technical 
                expertise and a user-centered approach to deliver exceptional results.
                </p>
                <p>
                Beyond work, I enjoy coding, exploring new technologies. I'm always eager to take 
                on new challenges and continue learning in my field.
                </p>
            </div>
        </section>
    );
}