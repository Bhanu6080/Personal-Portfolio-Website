export default function skills() {
    const skills = ["Java", "Python", "HTML", "CSS", "JavaScript", "React", "NodeJS"];
    return(
        <section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="pt-20 text-center text-6xl text-red-500 font-bold">
                My Skills
            </h2>
            <div className="mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => {
                    return(
                        <div key={index} className="curser-pointer px-12 py-10 rounded bg-red-400
                         text-lg flex items-center justify-center font-bold hover:shadow-xl">
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
    )
}