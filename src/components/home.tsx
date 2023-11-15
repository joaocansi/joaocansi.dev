import Button from './button'

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-theme(height.24))] justify-center"
    >
      <div className="mb-20 flex w-full items-center justify-center gap-10 max-xl:mt-5 max-lg:flex-col-reverse">
        <img
          className="w-72 md:w-[450px]"
          src="/dog-dancing.gif"
          alt="Dog Dancing"
        />
        <div className="flex w-1/2 flex-col gap-5 max-lg:w-full xl:ml-10">
          <p className="text-xl font-black uppercase max-xl:text-lg">Hey,</p>
          <p className="text-base max-xl:text-sm">
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
