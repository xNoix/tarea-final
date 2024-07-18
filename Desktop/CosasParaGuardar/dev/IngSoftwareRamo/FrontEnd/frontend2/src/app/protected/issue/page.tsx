import Backlogs from "./Backlogs";
import IssueTable from "./IssueTable";

export default function IssuePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-1/2">
        <IssueTable />
        <Backlogs/>
      </div>
    </div>
  );
}
