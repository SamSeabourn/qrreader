import { useState } from 'react'
import QrReader from 'react-qr-reader'

interface Props {
    handleCloseQR: (retrievedCode: string) => void
}

export const QRReader = ({handleCloseQR}: Props) : JSX.Element | null => {

    const handleScan = (data: any) => {
        if(data){
            handleCloseQR(data)
        }
    }

    const handleError = () => {
        alert("Something broke")
    }


    return (
        <>
            <div className="back-btn-container">
              <button
                className="nm-shadow-up py-2 px-3 bg-white rounded-2xl nm-button uppercase"
                onClick={() => handleCloseQR("") }
              >
                  Go back
              </button>
            </div>
            <div className="qr-contianer">
                <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '30vw', height: '30vh' }}
                />
            </div>
        </>
    )
}
