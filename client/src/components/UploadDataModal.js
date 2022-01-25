// import React, { useState } from "react";
// //import "./style.css";
// import { Button, Form, Modal } from "react-bootstrap";
// import { useMoralis, useMoralisFile } from "react-moralis";
// import { Moralis } from "moralis";

// const Upload = (props) => {
//    console.log(props);
//   const [file, setFile] = useState("");
//   //const [hash,setHash]=useState("");
//   const [saved,setSaved]=useState(false);
//   const { isAuthenticated, user, authenticate, isAuthenticating } = useMoralis();

//   const {setHash,hash} = props;

//   const { saveFile, moralisFile } = useMoralisFile();

//   const saveFileIPFS = async (f) => {
//     console.log("FILE", f);
//     const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
//     console.log(fileIpfs);
//     await setHash(fileIpfs._ipfs);
//     console.log(hash);

   
//   };

//   const handleFile = () => {
//   saveFileIPFS(file);
//    console.log(file);
//    setSaved(true);
//   };

// return(
//   <div>
 
// 			<input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
		
// 			<button onClick={handleFile} >Save File</button>
	
//       {/* {saved && <img src={hash._ipfs} alt="file"  height={400} width={500}/> } */}
// 	</div>
// );

// };

// export default Upload;


import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./style.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useMoralis, useMoralisFile } from "react-moralis";
import { Moralis } from "moralis";

const Upload = (props) => {
  const [file, setFile] = useState("");
  //const [hash,setHash]=useState("");
  const {hash,setHash}=props;
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const { isAuthenticated, user, authenticate, isAuthenticating } = useMoralis();

  const { saveFile, moralisFile } = useMoralisFile();

  const saveFileIPFS = async (f) => {
    console.log("FILE", f);
    const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
    console.log(fileIpfs);
    await setHash(fileIpfs._ipfs);
  };

  const handleFinal = () => {
    saveFileIPFS(file);
    handleClose();
  };

   if (!isAuthenticated) {
     return (
       <div>
         <button onClick={() => authenticate()}>Authenticate</button>
       </div>
     );
   }

  return (

    <>
    <div>
      <Button variant="warning" onClick={handleShow}>
        Upload File
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upload the file</Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload the file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFinal}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

      <div> UPLODED FILE <img src={hash} alt="image"  height={200} width={200}/> </div>
     
    </>
  );
};

export default Upload;