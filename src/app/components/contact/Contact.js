"use client";
import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import axios from "axios";

export const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ type: "success", msg: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data } = await axios.post("/api/contact", contactData);
    let type = "";

    if (data.success) {
      type = "success";
    } else {
      type = "error";
    }

    setResponse({ type, msg: data.message });
    setLoading(false);
    setContactData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setResponse({ type: type, message: null });
    }, 2000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className="contactOptionIco" />
            <h4>Email</h4>
            <h5>mannananxari@gmail.com</h5>
            <a className="view" href="mailto:mannananxari@gmail.com" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contactOption">
            <RiMessengerLine className="contactOptionIco" />
            <h4>Messenger</h4>
            <h5>Mannan</h5>
            <a className="view" href="//www.facebook.com/messages/t/100014396160448" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contactOption">
            <BsWhatsapp className="contactOptionIco" />
            <h4>WhatsApp</h4>
            <h5>+92-313-123-2025</h5>
            <a className="view" href="//wa.me/+923131232025?text=Hey!%0AMannan,%20WhasUppppp" target={"_blank"}>
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your First Name"
            required
            value={contactData.name}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={contactData.email}
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
          />
          <textarea
            name="messagge"
            rows="7"
            placeholder="Your Message"
            value={contactData.message}
            onChange={(e) =>
              setContactData({ ...contactData, message: e.target.value })
            }
          />

          {response.msg && <div className="formStatus">{response.msg}</div>}

          <button type="submit" className="btn btn-primary formSubmitButton">
            {loading ? <div id="loading"></div> : "Send Me"}
          </button>
        </form>
      </div>
    </section>
  );
};
