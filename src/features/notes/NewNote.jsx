// import { useSelector } from "react-redux";
// import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

import { useGetUsersQuery } from "../users/usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

const NewNote = () => {
  // const users = useSelector(selectAllUsers);

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  // if (!users?.length) return <p>Not currently Available</p>;

  if (!users?.length) return <PulseLoader color="#fff" />;

  const content = <NewNoteForm users={users} />;

  // const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>;

  return content;
};
export default NewNote;
