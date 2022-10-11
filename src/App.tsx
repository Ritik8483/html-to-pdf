import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsPDF from "jspdf";
//@ts-ignore
import html2canvas from "jspdf-html2canvas";

function App() {

  const printPDF = async () => {
    console.log('Entered main function');
    
    var downloading=document.getElementById("div-main");

    const pdfDownload=await html2canvas(downloading,{
      jsPDF: {
        format: 'a4',
      },
      html2canvas: {
        scrollX: 0,
        scrollY: -window.scrollY,
        imageTimeout: 15000,
  logging: true,
  useCORS: true
      },
      imageType: 'image/jpeg',
      margin:{top:15,right:0,bottom:20,left:0},
    output: './pdf/generate.pdf'
    })

  };

  return (
    <div className="App">

      <h1>JSPDF</h1>
      <div id="div-main" className="App">
      <button id="print" onClick={printPDF}>
        PRINT
      </button>
      <h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What
          is Lorem Ipsum?
        </h3>
        <p>Lorem Ipsum is simply dummy text of the pr What is Lorem Ipsum?</p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
      <div id="div1">
        <p>Hola mundo</p>
      </div>
      <div id="div2">
        <h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What
          is Lorem Ipsum?
        </h3>
        <p>Adiós mundo</p>
        <h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What
          is Lorem Ipsum?
        </h3>
        <p>Lorem Ipsum is simply dummy text of the pr What is Lorem Ipsum?</p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
      </div>
      <img
      height="250"
      width="400"
        alt="udemy"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/t1ujun3nwdoehf5k0qaf"
      />
      <h3>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What is
        Lorem Ipsum?
      </h3>
      <h3>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What is
        Lorem Ipsum?
      </h3>
      <h3>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What is
        Lorem Ipsum?
      </h3>
      <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
        <img
      height="50"
      width="40"
        alt="udemy"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/t1ujun3nwdoehf5k0qaf"
      />
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
        <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
<h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What
          is Lorem Ipsum?
        </h3>
        <p>Lorem Ipsum is simply dummy text of the pr What is Lorem Ipsum?</p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
      <div id="div1">
        <p>Hola mundo</p>
      </div>
      <div id="div2">
        <h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What
          is Lorem Ipsum?
        </h3>
        <p>Adiós mundo</p>
        <h3>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What
          is Lorem Ipsum?
        </h3>
        <p>Lorem Ipsum is simply dummy text of the pr What is Lorem Ipsum?</p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
      </div>
      <img
      height="250"
      width="400"
        alt="udemy"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/t1ujun3nwdoehf5k0qaf"
      />
      <h3>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What is
        Lorem Ipsum?
      </h3>
      <h3>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What is
        Lorem Ipsum?
      </h3>
      <h3>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the pr What is
        Lorem Ipsum?
      </h3>
      <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
        <img
      height="50"
      width="40"
        alt="udemy"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/t1ujun3nwdoehf5k0qaf"
      />
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker includin What is Lorem Ipsum?
        </p>
    </div>
    </div>
  );
}

export default App;
