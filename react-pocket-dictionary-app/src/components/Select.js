import React from "react";

const Select = ({ mean }) => {
  return (
    <>
      {mean.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                <li className="text-capitalize fs-5 text-start">
                  {Def.definition}
                </li>
                <hr />
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Select;