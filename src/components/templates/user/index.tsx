import {User} from "@/generated/graphql";

type Props = {
  user: User
}

export const UserContent = (({user}: Props) => {
  const {email, username, introduction} = user;
  return (
    <div>
      <p>email: {email}</p>
      <p>username: {username}</p>
      <p>introduction: {introduction}</p>
    </div>
  )
})
