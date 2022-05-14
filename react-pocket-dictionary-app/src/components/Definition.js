import React from "react";
import Select from "./Select.js";
import Example from "./Example";
import Synonyms from "./Synonym";
import Antonyms from "./Antonyms";

const Defination = ({ mean, main, audio }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row dark-theme">
          <div className="col-12 text-center text-capitalize fs-1 fw-bold text-decoration-underline mb-4">
            {main.word}
          </div>
          {audio ? (
            <audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></audio>
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )}
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Select mean={mean} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            examples :
          </div>
          <div>
            <ol>
              <Example mean={mean} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            synonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Synonyms mean={mean} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            antonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Antonyms mean={mean} />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Defination;