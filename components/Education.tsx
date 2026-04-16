const education = [
    {
        school: "Kettering University",
        description: "Sophomore II \nBachelors of Science in Computer Science, Minor in Computer Engineering, Concentration in Computer Gaming",
        time: "October 2025 - Present"
    },
    {
        school: "Genesee Early College",
        description: "GPA: 3.88 \nSAT: 1450\n Dual-Enrollment at the University of Michigan-Flint",
        time: "September 2020 - May 2025"
    }
]
export default function Education() {
    return (
        <section id="education" className="flex flex-col gap-8">
            <h2 className="text-3xl font-semibold">Education</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, i) => (
                    <div
                        key={i}
                        className="p-6 border rounded-2xl hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-bold">{edu.school}</h3>
                        <p className="text-gray-600">{edu.description}</p>
                        <p className="text-gray-600">{edu.time}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}