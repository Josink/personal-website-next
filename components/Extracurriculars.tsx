const extracurriculars =[
    "Mentor of local High School FIRST Robotics team",
    "Student Government Representative",
    "FIRST Robotics Team member",
    "National Honors Society Member",
    "Gaming Club Member",
    "Violin"
]
export default function Extracurriculars() {
    return (
        <section id = "extracurriulars" className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Extracurriculars</h2>

            <div className="flex flex-col gap-3">
                {extracurriculars.map((extracurricular, i) => (
                    <span
                        key={i}
                        className="text-sm"
                    >
                        {extracurricular}
                    </span>
                ))}
            </div>
        </section>
    );
}