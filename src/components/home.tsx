import Button from './button'

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-theme(height.24))] justify-center"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-black uppercase">Hey,</p>
          <p className="text-sm">
            I&#39;m web developer (not a dog) from Rio de Janeiro, Brazil
            currently an undergraduate student. Passionate about learning
            back-end and deep learning. I have some posts here; hopefully, they
            may help you somehow. Don&#39;t forget to see my last projects.
          </p>
          <div className="flex gap-3">
            <Button link={{ href: '#blog' }}>Dog&#39;s blog</Button>
            <Button link={{ href: '#projects' }}>Dog&#39;s projects</Button>
          </div>
        </div>
        <img className="w-[400px]" src="/dog-dancing.gif" alt="Dog Dancing" />
      </div>
    </section>
  )
}

export default Home
