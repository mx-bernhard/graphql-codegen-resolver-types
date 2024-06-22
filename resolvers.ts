import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  additionalHumanResources: Array<HumanResource>;
  id: Scalars['ID']['output'];
  nonHumanResources: Array<NonHumanResource>;
  resource: Maybe<HumanResource>;
};

export type Attribute = {
  id: Scalars['ID']['output'];
};

export type Confirmation = {
  __typename?: 'Confirmation';
  flatRateConfirmations: Array<FlatRateConfirmation>;
};

export type FlatRateConfirmation = {
  __typename?: 'FlatRateConfirmation';
  id: Scalars['ID']['output'];
  worker: Maybe<Resource>;
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

export type NonHumanResource = ToolResource | VehicleResource;

export type Operation = {
  __typename?: 'Operation';
  assignment: Maybe<Assignment>;
  confirmation: Maybe<Confirmation>;
  order: Order;
};

export type Order = {
  __typename?: 'Order';
  operations: Array<Operation>;
};

export type Query = {
  __typename?: 'Query';
  getAssignment: Maybe<Assignment>;
  getAttribute: Maybe<Attribute>;
  getHumanResource: Maybe<HumanResource>;
  getOperation: Maybe<Operation>;
  getOrder: Maybe<Order>;
  getResource: Maybe<Resource>;
};


export type QueryGetAssignmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAttributeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetHumanResourceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOperationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetResourceArgs = {
  id: Scalars['ID']['input'];
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

export type ToolResource = Resource & {
  __typename?: 'ToolResource';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
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

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  NonHumanResource: ( ToolResource ) | ( Omit<VehicleResource, 'attributes'> & { attributes: Array<_RefType['Attribute']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Attribute: ( JsonAttribute ) | ( TextAttribute );
  Resource: ( Omit<HumanResource, 'attributes'> & { attributes: Array<_RefType['Attribute']> } ) | ( ToolResource ) | ( Omit<VehicleResource, 'attributes'> & { attributes: Array<_RefType['Attribute']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Assignment: ResolverTypeWrapper<Omit<Assignment, 'additionalHumanResources' | 'nonHumanResources' | 'resource'> & { additionalHumanResources: Array<ResolversTypes['HumanResource']>, nonHumanResources: Array<ResolversTypes['NonHumanResource']>, resource?: Maybe<ResolversTypes['HumanResource']> }>;
  Attribute: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Attribute']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Confirmation: ResolverTypeWrapper<Omit<Confirmation, 'flatRateConfirmations'> & { flatRateConfirmations: Array<ResolversTypes['FlatRateConfirmation']> }>;
  FlatRateConfirmation: ResolverTypeWrapper<Omit<FlatRateConfirmation, 'worker'> & { worker?: Maybe<ResolversTypes['Resource']> }>;
  HumanResource: ResolverTypeWrapper<Omit<HumanResource, 'attributes'> & { attributes: Array<ResolversTypes['Attribute']> }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  JSONAttribute: ResolverTypeWrapper<JsonAttribute>;
  NonHumanResource: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NonHumanResource']>;
  Operation: ResolverTypeWrapper<Omit<Operation, 'assignment'> & { assignment?: Maybe<ResolversTypes['Assignment']> }>;
  Order: ResolverTypeWrapper<Order>;
  Query: ResolverTypeWrapper<{}>;
  Resource: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Resource']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TextAttribute: ResolverTypeWrapper<TextAttribute>;
  ToolResource: ResolverTypeWrapper<ToolResource>;
  VehicleResource: ResolverTypeWrapper<Omit<VehicleResource, 'attributes'> & { attributes: Array<ResolversTypes['Attribute']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Assignment: Omit<Assignment, 'additionalHumanResources' | 'nonHumanResources' | 'resource'> & { additionalHumanResources: Array<ResolversParentTypes['HumanResource']>, nonHumanResources: Array<ResolversParentTypes['NonHumanResource']>, resource?: Maybe<ResolversParentTypes['HumanResource']> };
  Attribute: ResolversInterfaceTypes<ResolversParentTypes>['Attribute'];
  Boolean: Scalars['Boolean']['output'];
  Confirmation: Omit<Confirmation, 'flatRateConfirmations'> & { flatRateConfirmations: Array<ResolversParentTypes['FlatRateConfirmation']> };
  FlatRateConfirmation: Omit<FlatRateConfirmation, 'worker'> & { worker?: Maybe<ResolversParentTypes['Resource']> };
  HumanResource: Omit<HumanResource, 'attributes'> & { attributes: Array<ResolversParentTypes['Attribute']> };
  ID: Scalars['ID']['output'];
  JSONAttribute: JsonAttribute;
  NonHumanResource: ResolversUnionTypes<ResolversParentTypes>['NonHumanResource'];
  Operation: Omit<Operation, 'assignment'> & { assignment?: Maybe<ResolversParentTypes['Assignment']> };
  Order: Order;
  Query: {};
  Resource: ResolversInterfaceTypes<ResolversParentTypes>['Resource'];
  String: Scalars['String']['output'];
  TextAttribute: TextAttribute;
  ToolResource: ToolResource;
  VehicleResource: Omit<VehicleResource, 'attributes'> & { attributes: Array<ResolversParentTypes['Attribute']> };
};

export type AssignmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assignment'] = ResolversParentTypes['Assignment']> = {
  additionalHumanResources?: Resolver<Array<ResolversTypes['HumanResource']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nonHumanResources?: Resolver<Array<ResolversTypes['NonHumanResource']>, ParentType, ContextType>;
  resource?: Resolver<Maybe<ResolversTypes['HumanResource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  __resolveType: TypeResolveFn<'JSONAttribute' | 'TextAttribute', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ConfirmationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Confirmation'] = ResolversParentTypes['Confirmation']> = {
  flatRateConfirmations?: Resolver<Array<ResolversTypes['FlatRateConfirmation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlatRateConfirmationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlatRateConfirmation'] = ResolversParentTypes['FlatRateConfirmation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  worker?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type NonHumanResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NonHumanResource'] = ResolversParentTypes['NonHumanResource']> = {
  __resolveType: TypeResolveFn<'ToolResource' | 'VehicleResource', ParentType, ContextType>;
};

export type OperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operation'] = ResolversParentTypes['Operation']> = {
  assignment?: Resolver<Maybe<ResolversTypes['Assignment']>, ParentType, ContextType>;
  confirmation?: Resolver<Maybe<ResolversTypes['Confirmation']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  operations?: Resolver<Array<ResolversTypes['Operation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAssignment?: Resolver<Maybe<ResolversTypes['Assignment']>, ParentType, ContextType, RequireFields<QueryGetAssignmentArgs, 'id'>>;
  getAttribute?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType, RequireFields<QueryGetAttributeArgs, 'id'>>;
  getHumanResource?: Resolver<Maybe<ResolversTypes['HumanResource']>, ParentType, ContextType, RequireFields<QueryGetHumanResourceArgs, 'id'>>;
  getOperation?: Resolver<Maybe<ResolversTypes['Operation']>, ParentType, ContextType, RequireFields<QueryGetOperationArgs, 'id'>>;
  getOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetOrderArgs, 'id'>>;
  getResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<QueryGetResourceArgs, 'id'>>;
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  __resolveType: TypeResolveFn<'HumanResource' | 'ToolResource' | 'VehicleResource', ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type TextAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextAttribute'] = ResolversParentTypes['TextAttribute']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ToolResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ToolResource'] = ResolversParentTypes['ToolResource']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  Confirmation?: ConfirmationResolvers<ContextType>;
  FlatRateConfirmation?: FlatRateConfirmationResolvers<ContextType>;
  HumanResource?: HumanResourceResolvers<ContextType>;
  JSONAttribute?: JsonAttributeResolvers<ContextType>;
  NonHumanResource?: NonHumanResourceResolvers<ContextType>;
  Operation?: OperationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  TextAttribute?: TextAttributeResolvers<ContextType>;
  ToolResource?: ToolResourceResolvers<ContextType>;
  VehicleResource?: VehicleResourceResolvers<ContextType>;
};

