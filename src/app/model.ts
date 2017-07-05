/* tslint:disable */

export interface BaseEntity {
  readonly id?: string;
  // TODO we'll make this optional for now
  kind?: string;
}

export interface ListResult extends BaseEntity {
  totalCount: number;
  items: Array<{}>;
}
export type ListResults = Array<ListResult>;

export interface ListResultWithId extends BaseEntity {
  totalCount: number;
  items: Array<WithId>;
}
export type ListResultWithIds = Array<ListResultWithId>;

export interface WithId extends BaseEntity {
  id: string;
}
export type WithIds = Array<WithId>;

export interface Action extends BaseEntity {
  description: string;
  inputDataShape: DataShape;
  outputDataShape: DataShape;
  camelConnectorPrefix: string;
  camelConnectorGAV: string;
  connectorId: string;
  id: string;
  name: string;
  properties: {};
}
export type Actions = Array<Action>;

export interface ConfigurationProperty extends BaseEntity {
  javaType: string;
  displayName: string;
  group: string;
  kind: string;
  description: string;
  secret: boolean;
  label: string;
  required: boolean;
  componentProperty: boolean;
  deprecated: boolean;
  type: string;
  defaultValue: string;
}
export type ConfigurationProperties = Array<ConfigurationProperty>;

export interface Connection extends BaseEntity {
  organization: Organization;
  icon: string;
  connector: Connector;
  userId: string;
  options: {};
  description: string;
  organizationId: string;
  lastUpdated: string;
  createdDate: string;
  connectorId: string;
  configuredProperties: {};
  id: string;
  tags: Array<string>;
  name: string;
}
export type Connections = Array<Connection>;

export interface Connector extends BaseEntity {
  icon: string;
  description: string;
  connectorGroup: ConnectorGroup;
  connectorGroupId: string;
  properties: {};
  actions: Array<Action>;
  id: string;
  name: string;
}
export type Connectors = Array<Connector>;

export interface ConnectorGroup extends BaseEntity {
  id: string;
  name: string;
}
export type ConnectorGroups = Array<ConnectorGroup>;

export interface DataShape extends BaseEntity {
  exemplar: Array<string>;
  kind: string;
  type: string;
}
export type DataShapes = Array<DataShape>;

export interface Environment extends BaseEntity {
  id: string;
  name: string;
}
export type Environments = Array<Environment>;

export interface Integration extends BaseEntity {
  gitRepo: string;
  userId: string;
  description: string;
  desiredStatus: "Draft" | "Pending" | "Activated" | "Deactivated" | "Deleted";
  currentStatus: "Draft" | "Pending" | "Activated" | "Deactivated" | "Deleted";
  configuration: string;
  token: string;
  statusMessage: string;
  connections: Array<Connection>;
  lastUpdated: string;
  createdDate: string;
  timesUsed: number;
  steps: Array<Step>;
  stepsDone: Array<string>;
  integrationTemplate: IntegrationTemplate;
  integrationTemplateId: string;
  users: Array<User>;
  id: string;
  tags: Array<string>;
  name: string;
}
export type Integrations = Array<Integration>;

export interface IntegrationTemplate extends BaseEntity {
  organization: Organization;
  userId: string;
  configuration: string;
  organizationId: string;
  id: string;
  name: string;
}
export type IntegrationTemplates = Array<IntegrationTemplate>;

export interface Organization extends BaseEntity {
  environments: Array<Environment>;
  users: Array<User>;
  id: string;
  name: string;
}
export type Organizations = Array<Organization>;

export interface Step extends BaseEntity {
  connection: Connection;
  action: Action;
  stepKind: string;
  configuredProperties: {};
  name: string;
  id: string;
}
export type Steps = Array<Step>;

export interface User extends BaseEntity {
  fullName: string;
  lastName: string;
  roleId: string;
  organizationId: string;
  username: string;
  firstName: string;
  integrations: Array<Integration>;
  name: string;
  id: string;
}
export type Users = Array<User>;

export interface Error extends BaseEntity {
  description: string;
  code: string;
  parameters: Array<string>;
  attributes: {};
}
export type Errors = Array<Error>;

export interface Result extends BaseEntity {
  scope: "PARAMETERS" | "CONNECTIVITY";
  errors: Array<Error>;
  status: "OK" | "ERROR" | "UNSUPPORTED";
}
export type Results = Array<Result>;

export interface ListResultAction extends BaseEntity {
  totalCount: number;
  items: Array<Action>;
}
export type ListResultActions = Array<ListResultAction>;

export interface EventMessage extends BaseEntity {
  data: {};
  event: string;
}
export type EventMessages = Array<EventMessage>;

export interface ListResultString extends BaseEntity {
  totalCount: number;
  items: Array<string>;
}
export type ListResultStrings = Array<ListResultString>;

class TypeFactoryClass {
  createListResult() {
    return <ListResult>{
      totalCount: undefined,
      items: undefined
    };
  }

  createListResultWithId() {
    return <ListResultWithId>{
      totalCount: undefined,
      items: undefined
    };
  }

  createWithId() {
    return <WithId>{
      id: undefined
    };
  }

  createAction() {
    return <Action>{
      description: undefined,
      inputDataShape: undefined,
      outputDataShape: undefined,
      camelConnectorPrefix: undefined,
      camelConnectorGAV: undefined,
      connectorId: undefined,
      id: undefined,
      name: undefined,
      properties: undefined
    };
  }

  createConfigurationProperty() {
    return <ConfigurationProperty>{
      javaType: undefined,
      displayName: undefined,
      group: undefined,
      kind: undefined,
      description: undefined,
      secret: undefined,
      label: undefined,
      required: undefined,
      componentProperty: undefined,
      deprecated: undefined,
      type: undefined,
      defaultValue: undefined
    };
  }

  createConnection() {
    return <Connection>{
      organization: undefined,
      icon: undefined,
      connector: undefined,
      userId: undefined,
      options: undefined,
      description: undefined,
      organizationId: undefined,
      lastUpdated: undefined,
      createdDate: undefined,
      connectorId: undefined,
      configuredProperties: undefined,
      id: undefined,
      tags: undefined,
      name: undefined
    };
  }

  createConnector() {
    return <Connector>{
      icon: undefined,
      description: undefined,
      connectorGroup: undefined,
      connectorGroupId: undefined,
      properties: undefined,
      actions: undefined,
      id: undefined,
      name: undefined
    };
  }

  createConnectorGroup() {
    return <ConnectorGroup>{
      id: undefined,
      name: undefined
    };
  }

  createDataShape() {
    return <DataShape>{
      exemplar: undefined,
      kind: undefined,
      type: undefined
    };
  }

  createEnvironment() {
    return <Environment>{
      id: undefined,
      name: undefined
    };
  }

  createIntegration() {
    return <Integration>{
      gitRepo: undefined,
      userId: undefined,
      description: undefined,
      desiredStatus: undefined,
      currentStatus: undefined,
      configuration: undefined,
      token: undefined,
      statusMessage: undefined,
      connections: undefined,
      lastUpdated: undefined,
      createdDate: undefined,
      timesUsed: undefined,
      steps: undefined,
      stepsDone: undefined,
      integrationTemplate: undefined,
      integrationTemplateId: undefined,
      users: undefined,
      id: undefined,
      tags: undefined,
      name: undefined
    };
  }

  createIntegrationTemplate() {
    return <IntegrationTemplate>{
      organization: undefined,
      userId: undefined,
      configuration: undefined,
      organizationId: undefined,
      id: undefined,
      name: undefined
    };
  }

  createOrganization() {
    return <Organization>{
      environments: undefined,
      users: undefined,
      id: undefined,
      name: undefined
    };
  }

  createStep() {
    return <Step>{
      connection: undefined,
      action: undefined,
      stepKind: undefined,
      configuredProperties: undefined,
      name: undefined,
      id: undefined
    };
  }

  createUser() {
    return <User>{
      fullName: undefined,
      lastName: undefined,
      roleId: undefined,
      organizationId: undefined,
      username: undefined,
      firstName: undefined,
      integrations: undefined,
      name: undefined,
      id: undefined
    };
  }

  createError() {
    return <Error>{
      description: undefined,
      code: undefined,
      parameters: undefined,
      attributes: undefined
    };
  }

  createResult() {
    return <Result>{
      scope: undefined,
      errors: undefined,
      status: undefined
    };
  }

  createListResultAction() {
    return <ListResultAction>{
      totalCount: undefined,
      items: undefined
    };
  }

  createEventMessage() {
    return <EventMessage>{
      data: undefined,
      event: undefined
    };
  }

  createListResultString() {
    return <ListResultString>{
      totalCount: undefined,
      items: undefined
    };
  }
}

export const TypeFactory = new TypeFactoryClass();
