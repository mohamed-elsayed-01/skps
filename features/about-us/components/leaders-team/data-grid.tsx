import Image from "next/image";
import { TEAM_MEMBERS } from "../../constants";

const DataGrid = () => {
  const RENDER_DATA = TEAM_MEMBERS.map((member) => (
    <div key={member.id}>
      <Image
        src={member.image}
        alt={member.name}
        width={280}
        height={260}
        className="mb-6"
      />
      <h1 className="text-xl mb-0.5">{member.name}</h1>
      <h1 className="text-accent">{member.position}</h1>
    </div>
  ));
  return (
    <div className="flex justify-center text-start items-center gap-8">
      {RENDER_DATA}
    </div>
  );
};

export default DataGrid;
