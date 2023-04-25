import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chat = {
  __typename?: 'Chat';
  body: Scalars['String'];
  created_at: Scalars['String'];
  from_user_id: Scalars['String'];
  id: Scalars['String'];
  is_read: Scalars['Boolean'];
  to_user_id: Scalars['String'];
  updated_at: Scalars['String'];
};

export type CreateChatInput = {
  body: Scalars['String'];
  from_user_id: Scalars['String'];
  to_user_id: Scalars['String'];
};

export type CreateRoomInput = {
  user_id: Scalars['String'];
};

export type CreateTweetInput = {
  body: Scalars['String'];
  user_id: Scalars['String'];
};

export type CreateUserInput = {
  bloodType: Scalars['Int'];
  email: Scalars['String'];
  introduction: Scalars['String'];
  password: Scalars['String'];
  prefecture: Scalars['Int'];
  username: Scalars['String'];
};

export type DeleteRoomInput = {
  id: Scalars['String'];
};

export type GetRoomInput = {
  id: Scalars['String'];
};

export type ListChatInput = {
  from_user_id: Scalars['String'];
};

export type ListRoomInput = {
  user_id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: Scalars['String'];
  createRoom: Scalars['String'];
  createTweet: Scalars['String'];
  createUser: Maybe<User>;
  deleteRoom: Maybe<Scalars['String']>;
  updateUserPassword: Maybe<User>;
  updateUserProfile: Maybe<User>;
  updateUserStatus: Maybe<User>;
};


export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


export type MutationCreateTweetArgs = {
  input: CreateTweetInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteRoomArgs = {
  input: DeleteRoomInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdateUserPasswordInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateUserStatusArgs = {
  input: UpdateUserStatusInput;
};

export type Query = {
  __typename?: 'Query';
  getRoom: Room;
  getUser: User;
  listChat: Array<Chat>;
  listRoom: Array<Room>;
  listTweet: Array<Tweet>;
};


export type QueryGetRoomArgs = {
  input: GetRoomInput;
};


export type QueryGetUserArgs = {
  input: Scalars['ID'];
};


export type QueryListChatArgs = {
  input: ListChatInput;
};


export type QueryListRoomArgs = {
  input: ListRoomInput;
};


export type QueryListTweetArgs = {
  input?: InputMaybe<Scalars['ID']>;
};

export type Room = {
  __typename?: 'Room';
  created_at: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['String'];
  user_id: Scalars['String'];
};

export type Tweet = {
  __typename?: 'Tweet';
  body: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['String'];
  user_id: Scalars['String'];
};

export type UpdateUserPasswordInput = {
  id: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type UpdateUserProfileInput = {
  bloodType: Scalars['Int'];
  id: Scalars['String'];
  introduction: Scalars['String'];
  prefecture: Scalars['Int'];
  username: Scalars['String'];
};

export type UpdateUserStatusInput = {
  id: Scalars['String'];
  status: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  bloodType: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  introduction: Scalars['String'];
  password: Scalars['String'];
  prefecture: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, username: string, email: string, status: string, password: string, prefecture: string, createdAt: string, updatedAt: string } };


export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"prefecture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;