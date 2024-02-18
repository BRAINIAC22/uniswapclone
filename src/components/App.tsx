import { useCallback, useRef, useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget, darkTheme, lightTheme, Theme} from '@uniswap/widgets'
import PageButton from './PageButton'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets'
// import '@uniswap/widgets/fonts.css'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑

import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'
import DocumentationCards from './DocumentationCards'
import Web3Connectors from './Web3Connectors'
import '../App.css'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'



export default function App() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])

let darkMode = true

// const theme: Theme = {
//   primary: '#000',
//   secondary: '#666',
//   interactive: '#AFAFAF',
//   container: '#DADADA',
//   module: '#FFF',
//   accent: '#0018F4',
//   outline: '#000',
//   dialog: '#FFF',
//   fontFamily: 'Comic Sans MS',
//   borderRadius: 0.2,
// }

const myLightTheme: Theme = {
  ...lightTheme, // Extend the lightTheme
   primary: '#000',
  secondary: '#666',
  interactive: '#AFAFAF',
  container: '#DADADA',
  module: '#FFF',
  accent: '#0018F4',
  outline: '#000',
  dialog: '#FFF',
  fontFamily: 'Comic Sans MS',
  borderRadius: 0.2,
}

const myDarkTheme: Theme = {
  ...darkTheme, // Extend the darkTheme
   primary: '#000',
  secondary: '#666',
  interactive: '#AFAFAF',
  container: '#DADADA',
  module: '#FFF',
  accent: '#0018F4',
  outline: '#000',
  dialog: '#FFF',
  fontFamily: 'Comic Sans MS',
  borderRadius: 0.2,
}


 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="App">
    
      <div className="appNav">
        {/*<label style={{ display: 'flex' }}>
          <FiGlobe />
        </label>
        <select onChange={onSelectLocale}>
          {SUPPORTED_LOCALES.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>*/}
      <div className="my-2 buttonContainer buttonContainerTop">
    <a href="google.com"><PageButton name={"Swap"} isBold={true} /></a>
          <PageButton name={"Pool"} />
          <PageButton name={"Vote"} />
          <PageButton name={"Charts"} /> 

          <Button className="btn1" variant="primary" onClick={handleShow}>
        Connect
      </Button>


      </div>


      <div className="">
    {/*<div className="my-2 buttonContainers buttonContainerTop">
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </div>*/}

    
    </div>
   
    </div>

    <div className="appBody">
    <div className="swapContainer">
    <div className="swapHeader">

    {/*<span className="swapText">Swap</span>*/}
    {/*

    <span className="gearContainer" onClick={() => setShowModal(true)}>
    <GearFill />
    </span>

    {showModal && (
              <ConfigModal
                onClose={() => setShowModal(false)}
                setDeadlineMinutes={setDeadlineMinutes}
                deadlineMinutes={deadlineMinutes}
                setSlippageAmount={setSlippageAmount}
                slippageAmount={slippageAmount} />
            )}*/}


    </div>

    <div className="Uniswap">
    <SwapWidget 
    jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              locale={locale}
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
              defaultOutputTokenAddress={UNI}
              theme={darkMode ? darkTheme : lightTheme}/>
  </div>

    </div>

    </div>

 <>
      {/*<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="my-2 buttonContainers buttonContainerTop">
    <Web3Connectors />
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>


    </div>

      
       
  )
}
