import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yezgvuq",
        "template_g97g3pk",
        form.current,
        "Vk1hNt7ojLnEAYrHm"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Mail has been successfully send!')
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <div id="contact" className=" mt-20">
        <h2 className=" text-5xl font-bold text-center">Contact ME</h2>
        <h1 className="mt-5 text-2xl font-bold text-center text-[#006eff]">Don't be shy. If you are interest to work with me then contact me on those ways.</h1>
        <div className=" mt-20 px-10 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center align-middle">
            <div data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="1200">
                <h3 className=" text-3xl font-bold">Contact Information</h3>
                <p className=" divider"></p>
                <div className="mt-12">
                <div className=" mt-5 p-10 border-2 rounded-lg bg-white border-[#006eff] text-center ">
                    <h3 className=" text-2xl font-bold"><FaPhone className=" inline-block"/><span className=" ml-2">Contact On Phone</span></h3>
                    <p className=" mt-2 ml-5 text-lg">+8801647742754</p>
                </div>
                <div className="mt-5 p-10 border-2 rounded-lg bg-white border-[#006eff] text-center  ">
                    <h3 className=" text-2xl font-bold"><FaLocationArrow className=" inline-block"/><span className=" ml-2">My Location</span></h3>
                    <p className=" mt-2 ml-5 text-lg">Dhaka, Bangladesh</p>
                </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className=" lg:col-span-2">
            <h3 className=" text-3xl font-bold">Send Mail</h3>
                <p className=" divider"></p>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="label font-bold">Name</label>
            <input type="text" name="user_name" className="input h-10  input-bordered border-[#006eff] input-xs w-full " required />
          </div>
          <div>
            <label  className="label font-bold">Email</label>
            <input type="email" name="user_email" className="input h-10 border-[#006eff] input-bordered input-xs w-full " required/>
          </div>
          <div>
            <label  className="label font-bold">Subject</label>
            <input type="text" name="from_name" className="input h-10 border-[#006eff] input-bordered input-xs w-full" required/>
          </div>
          <div>
            <label  className="label font-bold">Message</label>
            <textarea name="message" className="input h-40 border-[#006eff] input-bordered input-xs w-full" required />
          </div>
          <input type="submit" value="Send" className="btn rounded w-40 mx-auto block bg-[#006eff] border-[#006eff]"></input>
        </form>
      </div>
        </div>
    </div>
  );
};

export default Contact;
