import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Assignment = {
  __typename?: 'Assignment';
  resource: Maybe<HumanResource>;
};

export type Attribute = {
  id: Scalars['ID']['output'];
};

export type HumanResource = Resource & {
  __typename?: 'HumanResource';
  attributes: Array<Attribute>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type JsonAttribute = Attribute & {
  __typename?: 'JSONAttribute';
  id: Scalars['ID']['output'];
  json: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  assignment: Assignment;
  attribute: Attribute;
  humanResource: HumanResource;
  resource: Resource;
};

export type Resource = {
  attributes: Array<Attribute>;
  id: Scalars['ID']['output'];
};

export type TextAttribute = Attribute & {
  __typename?: 'TextAttribute';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type VehicleResource = Resource & {
  __typename?: 'VehicleResource';
  attributes: Array<Attribute>;
  id: Scalars['ID']['output'];
  plateNumber: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Attribute: ( JsonAttribute ) | ( TextAttribute );
  Resource: ( Omit<HumanResource, 'attributes'> & { attributes: Array<_RefType['Attribute']> } ) | ( Omit<VehicleResource, 'attributes'> & { attributes: Array<_RefType['Attribute']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Assignment: ResolverTypeWrapper<Omit<Assignment, 'resource'> & { resource: ResolversTypes['HumanResource'] }>;
  Attribute: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Attribute']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  HumanResource: ResolverTypeWrapper<Omit<HumanResource, 'attributes'> & { attributes: Array<ResolversTypes['Attribute']> }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  JSONAttribute: ResolverTypeWrapper<JsonAttribute>;
  Query: ResolverTypeWrapper<{}>;
  Resource: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Resource']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TextAttribute: ResolverTypeWrapper<TextAttribute>;
  VehicleResource: ResolverTypeWrapper<Omit<VehicleResource, 'attributes'> & { attributes: Array<ResolversTypes['Attribute']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Assignment: Assignment;
  Attribute: ResolversInterfaceTypes<ResolversParentTypes>['Attribute'];
  Boolean: Scalars['Boolean']['output'];
  HumanResource: Omit<HumanResource, 'attributes'> & { attributes: Array<ResolversParentTypes['Attribute']> };
  ID: Scalars['ID']['output'];
  JSONAttribute: JsonAttribute;
  Query: {};
  Resource: ResolversInterfaceTypes<ResolversParentTypes>['Resource'];
  String: Scalars['String']['output'];
  TextAttribute: TextAttribute;
  VehicleResource: Omit<VehicleResource, 'attributes'> & { attributes: Array<ResolversParentTypes['Attribute']> };
};

export type AssignmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assignment'] = ResolversParentTypes['Assignment']> = {
  resource?: Resolver<Maybe<ResolversTypes['HumanResource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  __resolveType: TypeResolveFn<'JSONAttribute' | 'TextAttribute', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type HumanResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['HumanResource'] = ResolversParentTypes['HumanResource']> = {
  attributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JsonAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['JSONAttribute'] = ResolversParentTypes['JSONAttribute']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  assignment?: Resolver<ResolversTypes['Assignment'], ParentType, ContextType>;
  attribute?: Resolver<ResolversTypes['Attribute'], ParentType, ContextType>;
  humanResource?: Resolver<ResolversTypes['HumanResource'], ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['Resource'], ParentType, ContextType>;
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  __resolveType: TypeResolveFn<'HumanResource' | 'VehicleResource', ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type TextAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextAttribute'] = ResolversParentTypes['TextAttribute']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleResource'] = ResolversParentTypes['VehicleResource']> = {
  attributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  plateNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Assignment?: AssignmentResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  HumanResource?: HumanResourceResolvers<ContextType>;
  JSONAttribute?: JsonAttributeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  TextAttribute?: TextAttributeResolvers<ContextType>;
  VehicleResource?: VehicleResourceResolvers<ContextType>;
};

