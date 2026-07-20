

const Hero = () => {
  return (
    <section id="home" className="w-full px-8 py-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center max-w-6xl mx-auto mt-15">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center border-1 border-primary px-2 py-1 rounded-full hover:text-primary">
                    <h3 className="font-semibold text-2xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Hey, I'm Warren</h3>
                </div>
                <div className="text-5xl font-extrabold text-center">
                    <h1 className="text-heading">A Full Stack</h1>
                    <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Developer</span>
                </div>
                <div className="text-text text-center">
                    <p>Building scallable, user-focused web applications with modern technologies.</p>
                    <p>Helping businesses succeed through innovative full-stack web development solutions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero