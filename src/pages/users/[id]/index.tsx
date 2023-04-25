import {UserContent} from "@/components/templates/user";
import {GetUserDocument, User} from "@/generated/graphql";
import client from "@/lib/graphqlClient";
import {GetServerSidePropsContext} from "next";

type Props = {
  user: User
}

const Content = (({user}: Props) => {
  return <UserContent user={user}/>
});

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const userId = context.query.id as string; // ここでクエリパラメータ "id" を受け取ります

  const user = (
    await client.query({
      query: GetUserDocument,
      variables: {id: userId} // 受け取ったクエリパラメータを使用
    })
  ).data.getUser;

  return {
    props: {
      user
    }
  }
}

export default Content;
