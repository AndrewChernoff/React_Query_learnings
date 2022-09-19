import axios from "axios";
import { useQuery } from "react-query";
type UserData = {
  id: string;
  channelId: string;
};

type Props = { usersString: string};

const DependentQuery: React.FC<Props> = ({usersString}) => {
  const fetchUser = () => {
    return axios.get<any>(`http://localhost:3001/${usersString}`);
  };
  const fetchChannels = (id: string | undefined) => {
    return axios.get<any>(`http://localhost:3001/channels/${id}`);
  };

  const { data: user } = useQuery("user", fetchUser);

  const channelID = user?.data[0].channelId;

  console.log(channelID);

  const { data: courses } = useQuery(
    ["chanels", channelID],
    () => fetchChannels(channelID),
    {
      enabled: !!channelID,
    }
  );

  console.log(courses?.data.courses);

  return (
    <div>
      <h2>DependentQuery</h2>
      {courses?.data.courses.map((item: string) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default DependentQuery;
