import { useState } from 'react'
import QRIcon from '../components/QRIcon'
import { QRReader } from '../components/QRReader'


const LandingPage = () => {
  const [code, setCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [validForm, setValidForm] = useState<boolean>(false);
  const [scannerOpen, setScannerOpen] = useState<boolean>(false);

  const handleOpenQR = () => {
    setScannerOpen(true);
  };

  const handleCloseQR = (retrievedCode: string) => {
    setScannerOpen(false)
    let inputValue = (document.getElementById("codeField") as HTMLInputElement);
    inputValue.value = retrievedCode;
  }

  return (
    <>
      <div style={{ maxWidth: "1080px" }}>
          <div className="justify-center flex">
            <img
              alt="Hyperbeam logo"
              src="HBLogoGhost.png"
              style={{ maxWidth: "75%" }}
            ></img>
          </div>

          <div className="m-10 mt-10 pb-10 rounded-2xl nm-shadow-up">
            <div className="bg-yellow-500 rounded-t-2xl mb-20">
              <div className="justify-center flex cursor-pointer">
                <h1 className="p-7 text-4xl font-bold text-white uppercase">
                  {" "}
                  Donate-a-code system{" "}
                </h1>
              </div>
            </div>
            <div className="justify-center m-2 mb-3 flex flex-col cursor-pointer">
              <label
                className="justify-center flex mb-2 uppercase font-bold text-3xl text-yellow-500"
                htmlFor="code"
              >
                Enter Code
              </label>
              <input
                id="codeField"
                maxLength={13}
                className="text-5xl ml-20 mr-20 nm-shadow-down rounded p10 text-grey-darkest uppercase"
                type="text"
              ></input>
            </div>
            <div className="justify-center m-2 mb-10 flex cursor-pointer">
              <button
                onClick={handleOpenQR}
                className="nm-shadow-up py-2 px-3 rounded-2xl nm-button"
                type="submit"
                
              >
                <QRIcon />
              </button>
            </div>
            <div className="justify-center mt-6 mb-40 flex flex-col cursor-pointer">
              <label
                className="justify-center flex mb-2 uppercase font-bold text-3xl text-yellow-500"
                htmlFor="code"
              >
                Your Message
              </label>
              <input
                maxLength={100}
                className="text-5xl ml-20 mr-20 nm-shadow-down rounded text-grey-darkest"
                type="text-area"
                name="code"
              ></input>
            </div>
            <div className="justify-center m-2 mb-3 flex cursor-pointer">
              <button
                className="nm-shadow-up p-5 mb-20 rounded-2xl nm-button bg-yellow-500"
                type="submit"
              >
                <span className="justify-center flex uppercase text-white font-bold text-3xl">
                  Send your code and message{" "}
                </span>
              </button>
            </div>
          </div>
      </div>
      <div style={{display: scannerOpen? "block" : "none"}}> 
        <QRReader handleCloseQR={handleCloseQR}  />
      </div>
    </>
  );
};

export default LandingPage
