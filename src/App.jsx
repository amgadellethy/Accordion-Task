import { useState } from "react";
import "./App.css";

function App() {
  const faqs = [
    { title: "How are you ?", text: "Iam fine" },
    { title: "Who are you ?", text: "Iam Amgad" },
    { title: "Are you OK ?", text: "Yes" },
  ];

  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;

function Accordion({ data }) {
  return (
    <>
      <div className="main">
        {data.map((item, index) => (
          <AccordionItem
            title={item.title}
            text={item.text}
            num={index + 1}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="accordion-item"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={`content ${isOpen ? "green" : ""}`}>
          <p className="number">{num > 10 ? { num } : `0${num}`}</p>
          <p className="title">{title}</p>
          <p className="icon">{isOpen ? "-" : "+"}</p>
        </div>

        {isOpen && <div className="content-box">{text}</div>}
      </div>
    </>
  );
}
