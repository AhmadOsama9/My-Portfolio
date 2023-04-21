import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

import EarthCanvas from "../canvas/EarthCanvas";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if(!form.name || !form.email || !form.message)
    {
      alert("Please fill in all the required fields");
      return;
    }

    const validDomains = ['gmail.com', 'hotmail.com', 'yahoo.com']; // Add more domains as needed

    const emailRegex = new RegExp(`^[A-Z0-9._%+-]+@(${validDomains.join('|')})$`, 'i');

    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }



    setLoading(true);

    emailjs
      .send(
        'service_8834455',
        'template_laovrx6',
        {
          from_name: form.name,
          to_name: "Ahmed Osama",
          from_email: form.email,
          to_email: "ahmedosamaa975@gmail.com",
          message: form.message,
        },
        'ZFJSlFLigYlimHQN3'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <section className="h-full bg-primary">
    <div className="flex flex-row flex-wrap-reverse justify-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-gray-700 rounded-xl max-w-screen-xl w-full p-4 flex flex-col">
        <h1 className="text-3xl lg:text-3xl">Contact</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white text-black py-4 px-6 placeholder:text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white text-black py-4 px-6 placeholder:text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-white text-black py-4 px-6 placeholder:text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-gray-700 rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="sm:h-[250px] md:h-[300px]   ">
        <EarthCanvas />
      </div>
    </div>
  </section>
  )
}

export default Contact