const skills = [
    "Programming in Java, C#, C++",
    "Proficient with Microsoft Office, Google Suite, Jira",
    "Writing and Executing Test Plans"
]

export default function Skills() {
    return (
        <section id = "skills" className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Skills</h2>

            <div className="flex flex-col gap-3">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}