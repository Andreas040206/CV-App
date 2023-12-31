import "./CV-styles.css";
import { useState } from "react";

const ViewCV = ({ info }) => {
  const eduEl = info.edu.map((edu) => {
    return (
      <div key={edu.id} className="exp-grid">
        <div>
          <span className="date-text">{edu.startDate} - </span>
          <span className="date-text"> {edu.endDate}</span>
        </div>
        <div className="school-text">{edu.school}</div>
        <div className="loc-text">{edu.loc}</div>
        <div>{edu.degree}</div>
      </div>
    );
  });

  const expEl = info.exp.map((exp) => {
    return (
      <div key={exp.id} className="exp-grid">
        <div>
          <span className="date-text">{exp.startDate} - </span>
          <span className="date-text"> {exp.endDate}</span>
        </div>
        <div className="school-text">{exp.company}</div>
        <div className="loc-text">{exp.loc}</div>
        <div>{exp.position}</div>
      </div>
    );
  });

  return (
    <div className="ViewCV-con">
      <header className="viewCV-header-con flex-col cen">
        <div className="flex-row cen">
          <span className="view-header">{info.name}</span>
        </div>
        <div className="view-header-text-con flex-row cen">
          <span className="view-header-text">Tel: {info.tlf}</span>
          <span className="view-header-text">Mail: {info.mail}</span>
          <span className="view-header-text">Location: {info.loc}</span>
        </div>
      </header>
      <div className="flex-col view-exp-con">
        {info.edu.length < 1 ? undefined : (
          <div className="exp-header">Education</div>
        )}
        {eduEl}
        {info.exp.length < 1 ? undefined : (
          <div className="exp-header">Professional Experience</div>
        )}
        {expEl}
      </div>
    </div>
  );
};

const CostumizeBoard = ({ info, infoHandlerFn }) => {
  const eduEl = info.edu.map((edu) => (
    // Making sure that react knows what element is what on reload
    <div key={edu.id} className="exp-con flex-col">
      <div className="input-con flex-row">
        <label className="info-label">School: </label>
        <input
          className="info-input"
          type="text"
          value={edu.school}
          onChange={(e) => {
            eduPropsOnChange(e, edu.id, "school");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">Degree: </label>
        <input
          className="info-input"
          type="text"
          value={edu.degree}
          onChange={(e) => {
            eduPropsOnChange(e, edu.id, "degree");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">Start Date: </label>
        <input
          className="info-input"
          type="text"
          value={edu.startDate}
          onChange={(e) => {
            eduPropsOnChange(e, edu.id, "startDate");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">End Date: </label>
        <input
          className="info-input"
          type="text"
          value={edu.endDate}
          onChange={(e) => {
            eduPropsOnChange(e, edu.id, "endDate");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">Location: </label>
        <input
          className="info-input"
          type="text"
          value={edu.loc}
          onChange={(e) => {
            eduPropsOnChange(e, edu.id, "loc");
          }}
        />
      </div>
      <div className="del-btn-con flex-row">
        <button
          className="del-btn"
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
    <div key={exp.id} className="exp-con flex-col">
      <div className="input-con flex-row">
        <label className="info-label">Company: </label>
        <input
          className="info-input"
          type="text"
          value={exp.company}
          onChange={(e) => {
            expPropsOnChange(e, exp.id, "company");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">Posistion: </label>
        <input
          className="info-input"
          type="text"
          value={exp.position}
          onChange={(e) => {
            expPropsOnChange(e, exp.id, "position");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">Start date: </label>
        <input
          className="info-input"
          type="text"
          value={exp.startDate}
          onChange={(e) => {
            expPropsOnChange(e, exp.id, "startDate");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">End date: </label>
        <input
          className="info-input"
          type="text"
          value={exp.endDate}
          onChange={(e) => {
            expPropsOnChange(e, exp.id, "endDate");
          }}
        />
      </div>
      <div className="input-con flex-row">
        <label className="info-label">Location: </label>
        <input
          className="info-input"
          type="text"
          value={exp.loc}
          onChange={(e) => {
            expPropsOnChange(e, exp.id, "loc");
          }}
        />
      </div>
      <div className="del-btn-con flex-row">
        <button
          className="del-btn"
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

  const loadExample = () => {
    infoHandlerFn({
      name: "Andreas Skakkebaek-Kruse",
      loc: "Denmark, Risskov",
      tlf: "(+45) 44 30 22 34",
      mail: "example@mail.com",
      edu: [
        {
          id: 1,
          school: "Standford",
          degree: "Computer Science",
          startDate: "12/9/2018",
          endDate: "17/7/2021",
          loc: "England, Standford",
        },
      ],
      exp: [
        {
          id: 1,
          company: "Linkicon",
          position: "Computer programmer",
          startDate: "12/09/2022",
          endDate: "10/11/2023",
          loc: "New York",
        },
        {
          id: 2,
          company: "Netflix",
          position: "System team adminestrator",
          startDate: "10/11/2023",
          endDate: "present",
          loc: "Calfornia",
        },
      ],
    });
  };

  return (
    <div className="custom-con flex-col">
      <div className="flex-col input-list">
        <button className="loadExample-btn" onClick={loadExample}>
          Load example
        </button>
      </div>
      <div className="flex-col input-list">
        <div className="input-con flex-row al-cen">
          <label className="info-label">Name: </label>
          <input
            className="info-input"
            type="text"
            value={info.name}
            onChange={(e) => {
              impInfoHandler(e, "name");
            }}
          />
        </div>
        <div className="input-con flex-row al-cen">
          <label className="info-label">Tel: </label>
          <input
            className="info-input"
            type="tel"
            value={info.tlf}
            onChange={(e) => {
              impInfoHandler(e, "tlf");
            }}
          />
        </div>
        <div className="input-con flex-row al-cen">
          <label className="info-label">Mail: </label>
          <input
            className="info-input"
            type="mail"
            value={info.mail}
            onChange={(e) => {
              impInfoHandler(e, "mail");
            }}
          />
        </div>
        <div className="input-con flex-row al-cen">
          <label className="info-label">Location: </label>
          <input
            className="info-input"
            type="text"
            value={info.loc}
            onChange={(e) => {
              impInfoHandler(e, "loc");
            }}
          />
        </div>
      </div>
      <div className="flex-col input-list">
        <label className="label-header">Education</label>
        {eduEl}
        <button className="addbtn" onClick={addNewEdu}>
          +
        </button>
      </div>
      <div className="flex-col input-list">
        <label className="label-header">Experience</label>
        {expEl}
        <button className="addbtn" onClick={addNewExp}>
          +
        </button>
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
    <div className="CV-con flex-row">
      <CostumizeBoard info={info} infoHandlerFn={infoHandler} />
      <ViewCV info={info} />
    </div>
  );
};
