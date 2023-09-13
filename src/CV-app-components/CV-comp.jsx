import "./CV-styles.css";
import { useState } from "react";

const ViewCV = ({ info }) => {
  return <div></div>;
};

const CostumizeBoard = ({ info, infoHandlerFn }) => {
  const eduEl = info.edu.map((edu) => (
    // Making sure that react knows what element is what on reload
    <div key={edu.id}>
      <input
        type="text"
        value={edu.school}
        onChange={(e) => {
          eduPropsOnChange(e, edu.id, "school");
        }}
      />
      <input
        type="text"
        value={edu.degree}
        onChange={(e) => {
          eduPropsOnChange(e, edu.id, "degree");
        }}
      />
      <input
        type="text"
        value={edu.startDate}
        onChange={(e) => {
          eduPropsOnChange(e, edu.id, "startDate");
        }}
      />
      <input
        type="text"
        value={edu.endDate}
        onChange={(e) => {
          eduPropsOnChange(e, edu.id, "endDate");
        }}
      />
      <input
        type="text"
        value={edu.loc}
        onChange={(e) => {
          eduPropsOnChange(e, edu.id, "loc");
        }}
      />
      <div>
        <button
          onClick={() => {
            deleteEdu(edu.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  const eduPropsOnChange = (e, id, type) => {
    const newInfo = { ...info };
    newInfo.edu = newInfo.edu.map((eduItem) => {
      if (eduItem.id === id) {
        eduItem[type] = e.target.value;
      }

      return eduItem;
    });

    infoHandlerFn(newInfo);
  };

  // Adds the new education info
  const addNewEdu = () => {
    let newId;

    if (info.edu.length < 1) {
      newId = 1;
    } else {
      newId = info.edu[info.edu.length - 1].id + 1;
    }

    const newInfo = { ...info };
    newInfo.edu.push({
      id: newId,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      loc: "",
    });

    infoHandlerFn(newInfo);
  };

  const deleteEdu = (eduId) => {
    const newInfo = { ...info };
    newInfo.edu = newInfo.edu.filter((edu) => edu.id !== eduId);

    infoHandlerFn(newInfo);
  };

  const expEl = info.exp.map((exp) => (
    // Making sure that react knows what element is what on reload
    <div key={exp.id}>
      <input
        type="text"
        value={exp.company}
        onChange={(e) => {
          expPropsOnChange(e, exp.id, "company");
        }}
      />
      <input
        type="text"
        value={exp.position}
        onChange={(e) => {
          expPropsOnChange(e, exp.id, "position");
        }}
      />
      <input
        type="text"
        value={exp.startDate}
        onChange={(e) => {
          expPropsOnChange(e, exp.id, "startDate");
        }}
      />
      <input
        type="text"
        value={exp.endDate}
        onChange={(e) => {
          expPropsOnChange(e, exp.id, "endDate");
        }}
      />
      <input
        type="text"
        value={exp.loc}
        onChange={(e) => {
          expPropsOnChange(e, exp.id, "loc");
        }}
      />
      <div>
        <button
          onClick={() => {
            deleteExp(exp.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  const expPropsOnChange = (e, id, type) => {
    const newInfo = { ...info };
    newInfo.exp = newInfo.exp.map((expItem) => {
      if (expItem.id === id) {
        expItem[type] = e.target.value;
      }

      return expItem;
    });

    infoHandlerFn(newInfo);
  };

  // Adds the new expcation info
  const addNewExp = () => {
    let newId;

    if (info.exp.length < 1) {
      newId = 1;
    } else {
      newId = info.exp[info.exp.length - 1].id + 1;
    }

    const newInfo = { ...info };
    newInfo.exp.push({
      id: newId,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      loc: "",
    });

    infoHandlerFn(newInfo);
  };

  const deleteExp = (expId) => {
    const newInfo = { ...info };
    newInfo.exp = newInfo.exp.filter((exp) => exp.id !== expId);

    infoHandlerFn(newInfo);
  };

  const impInfoHandler = (e, type) => {
    const newInfo = { ...info };
    newInfo[type] = e.target.value;

    infoHandlerFn(newInfo);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={info.name}
          onChange={(e) => {
            impInfoHandler(e, "name");
          }}
        />
        <input
          type="tel"
          value={info.tlf}
          onChange={(e) => {
            impInfoHandler(e, "tlf");
          }}
        />
        <input
          type="mail"
          value={info.mail}
          onChange={(e) => {
            impInfoHandler(e, "mail");
          }}
        />
        <input
          type="text"
          value={info.loc}
          onChange={(e) => {
            impInfoHandler(e, "loc");
          }}
        />
      </div>
      <div>
        <label>Edu</label>
        <button onClick={addNewEdu}>+</button>
        <div>{eduEl}</div>
        <label>Exp</label>
        <button onClick={addNewExp}>+</button>
        {expEl}
      </div>
    </div>
  );
};

export const CVcomp = () => {
  // logic
  const [info, setInfo] = useState({
    name: "",
    loc: "",
    tlf: "",
    mail: "",
    edu: [],
    exp: [],
  });

  const infoHandler = (newInfo) => {
    setInfo(newInfo);
  };

  return (
    <div>
      <CostumizeBoard info={info} infoHandlerFn={infoHandler} />
      <ViewCV info={info} />
    </div>
  );
};
