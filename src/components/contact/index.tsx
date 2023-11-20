import Input from '../input'
import Section from '../section'
import Textarea from '../textarea'

function Contact() {
  return (
    <Section
      id="contact"
      color="white"
      background="black"
      title="Contact"
      description="If you wanna talk about some project feel free to contact me"
    >
      <form className="mt-5 flex w-full max-w-[800px] flex-col gap-4">
        <Input id="name" name="name" placeholder="Name" />
        <Input id="email" name="email" placeholder="E-mail" />
        <Input id="subject" name="subject" placeholder="Subject" />
        <Textarea
          id="subject"
          name="subject"
          placeholder="What do you want?"
          className="h-64 resize-none"
        />
        <button
          type="submit"
          className="mt-2 min-w-[300px] rounded-xl bg-green-500 px-12 py-4 text-center text-sm text-white transition-colors hover:bg-green-600 max-xl:text-xs"
        >
          Enviar
        </button>
      </form>
    </Section>
  )
}

export default Contact
