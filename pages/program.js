import { useState } from "react";

const ProgramsPage = () => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      title: "البرنامج الأول",
      content: "محتوى البرنامج الأول",
    },
    {
      id: 2,
      title: "الفقيه الموسم السادس",
      content: "محتوى البرنامج الثاني",
    },
  ]);

  return (
    <div>
      <h3>البرامج</h3>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h4>{program.title}</h4>
            <p>{program.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
