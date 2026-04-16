export default function Hero() {
    return (
        <section className = "flex flex-col gap-6 max-w-4x1">
            <h1 className="text-4xl md:text-6xl font-bold">
                Hello, I&#39;m Jay Sinkaiye!
            </h1>

            <p className="text-lg text-gray-600">
                I&#39;m a college student at Kettering University majoring in computer science. 
                I&#39;m open to working on any sort of projects, especially any that lie in UI 
                development/design and video game programming.
            </p>

            <div className="flex gap-4">
                <a href="#Projects" className="px-6 py-3 bg-black text-white rounded-xl">View Projects</a>
                <a href="/Resume.pdf" className="px-6 py-3 border rounded-xl">Resume</a>
            </div>

        </section>
    );
}