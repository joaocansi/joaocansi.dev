import Button from './button'

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center min-h-[calc(100vh-theme(height.24))]"
    >
      <div className="w-full flex items-center justify-center mb-20">
        <img className="w-[450px]" src="/dog-dancing.gif" alt="Dog Dancing" />
        <div className="flex flex-col gap-5 w-1/2 ml-10">
          <p className="text-xl uppercase font-black">Hey,</p>
          <p className="text-base">
            I&#39;m web developer (not a dog) from Rio de Janeiro, Brazil
            currently an undergraduate student. Passionate about learning
            back-end and deep learning. I have some posts here; hopefully, they
            may help you somehow. Don&#39;t forget to see my last projects.
          </p>
          <div className="flex gap-6">
            <Button link={{ href: '#blog' }}>Dog&#39;s blog</Button>
            <Button link={{ href: '#projects' }}>Dog&#39;s projects</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
