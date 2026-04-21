const about = [
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

const skills = [
    "Programming in Java, C#, C++",
    "Proficient with Microsoft Office, Google Suite, Jira",
    "Writing and Executing Test Plans"
]

export default function Education() {
    return (
        <section className = "about">
            <div className = "personal-info">
                <h1 className = "personal-info-intro">
                    I&#39;m a college student at Kettering University majoring in Computer Science with
                    a concentration in Computer Gaming, and minoring in Computer Engineering.
                    I&#39;m open to working in any fields, especially any that lie in UI
                    development/design and video game programming. In my free time, I mentor a local
                    High School FIRST Robotics team.
                </h1>
                
                <h3 className = "personal-info-text">
                    <p>
                        hbvjckl bdxzjvuycx ihojflkvfzjh aiduys iohxlnbk yevowdaicguh dejkhuodiags;xkb
                        vufyacsigphbn jfgyudiahsklcnviuwqeoyupsjdhfboewqiguohdbvyoiu ufgheirwrqoidv
                        fuwevdogip;fjbd fioubfd iufvDPIU; VBUFPAIVF Vbuipvw ubvapiew bfoisu hbvjckl bdxzjvuycx
                        ihojflkvfzjh aiduys iohxlnbk yevowdaicguh dejkhuodiags;xkb
                        vufyacsigphbn jfgyudiahsklcnviuwqeoyupsjdhfboewqiguohdbvyoiu ufgheirwrqoidv
                        fuwevdogip;fjbd fioubfd iufvDPIU; VBUFPAIVF Vbuipvw ubvapiew bfoisu
                    </p>

                    <p>
                        hbvjckl bdxzjvuycx ihojflkvfzjh aiduys iohxlnbk yevowdaicguh dejkhuodiags;xkb
                        vufyacsigphbn jfgyudiahsklcnviuwqeoyupsjdhfboewqiguohdbvyoiu ufgheirwrqoidv
                        fuwevdogip;fjbd fioubfd iufvDPIU; VBUFPAIVF Vbuipvw ubvapiew bfoisu hbvjckl bdxzjvuycx
                        ihojflkvfzjh aiduys iohxlnbk yevowdaicguh dejkhuodiags;xkb
                        vufyacsigphbn jfgyudiahsklcnviuwqeoyupsjdhfboewqiguohdbvyoiu ufgheirwrqoidv
                        fuwevdogip;fjbd fioubfd iufvDPIU; VBUFPAIVF Vbuipvw ubvapiew bfoisu.
                        I&#39;m skilled in Programming in Java, C#, C++. Proficient with Microsoft Office, Google Suite, and Jira.
                        I&#39;m also skilled at writing and executing Test Plans.
                    </p>
                </h3>
            </div>

            <div className = "education">
                <h1 className = "education-title">Education</h1>
                {about.map((about, i) => (
                    <div key = {i} className = "edu">
                        <div className = "details">
                            <h1 className ="school">{about.school}</h1>
                            <h1 className = "time">{about.time}</h1>
                        </div>
                        <h1 className = "description">{about.description}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}