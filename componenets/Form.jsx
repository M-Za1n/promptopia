import Link from "next/link"
function Form({type , post, setPost, submit, handleSubmit}) {
  return (
    <section>
      <h1 className='blue_gradient head_text'>{type} Post</h1>
      <p className="desc text-left">
        {type} and share amazing prompts with the world and let your imagination run wild through any platform
      </p>
      <form onSubmit={handleSubmit} className='glassmorphism mt-20'>
        <div className='flex_col'>
          <label htmlFor="prompt" className="semi-bold">
            Enter AI prompt in below box
          </label>
          <textarea name="prompt" placeholder='Enter your prompt here' className='form_textarea' value={post.prompt} onChange={e=> setPost({...post,prompt:e.target.value})} id="prompt" cols="30" rows="10"></textarea>
        </div>
        <div className='flex_col'>
          <label htmlFor="tag" className="semi-bold">Relevent Tags</label>
          <input type="text" onInput={e=> setPost({...post,tag:e.target.value})} value={post.tag} className='form_input' placeholder='#tag' />
        </div>
        <div className="flex-end">
          <Link href='/' className="text-gray p-1">
            cancel
          </Link>
          <button className="black_btn" disabled={submit}>{submit ? 'Wait...': type}</button>
        </div>
      </form>
    </section>
  )
}

export default Form