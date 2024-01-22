import Feed from "@componenets/Feed"
function Home() {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & share <br className="max-md:hidden"/>
        <span className="orange_gradient ">AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an AI-powered open source prompting tool for modern world to descover, create and share creative AI prompts 
      </p>
      <Feed/>
    </section>
  )
}

export default Home




