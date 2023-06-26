/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
  useMutation,
  DefaultContext,
  ApolloCache,
  MutationHookOptions,
} from '@apollo/client';

export class GraphqlService<
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
  TContext = DefaultContext,
  TCache extends ApolloCache<any> = ApolloCache<any>,
> {
  useQuery(
    query: DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: QueryHookOptions<TData, TVariables>,
  ) {
    return useQuery(query, options);
  }

  useMutation(
    mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: MutationHookOptions<TData, TVariables, TContext, TCache>,
  ) {
    return useMutation(mutation, options);
  }
}
