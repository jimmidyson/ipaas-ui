/* tslint:disable */

export interface BaseEntity {
  readonly id?: string;
  // TODO we'll make this optional for now
  kind?: string;
}

export interface ListResult extends BaseEntity {
  items: Array<{}>;
  totalCount: number;
}
export type ListResults = Array<ListResult>;

export interface ListResultWithId extends BaseEntity {
  items: Array<WithId>;
  totalCount: number;
}
export type ListResultWithIds = Array<ListResultWithId>;

export interface WithId extends BaseEntity {
  id: string;
}
export type WithIds = Array<WithId>;

export interface Acquisition extends BaseEntity {
  url: string;
  type: "REDIRECT";
}
export type Acquisitions = Array<Acquisition>;

export interface Action extends BaseEntity {
  description: string;
  inputDataShape: DataShape;
  camelConnectorPrefix: string;
  camelConnectorGAV: string;
  outputDataShape: DataShape;
  connectorId: string;
  id: string;
  name: string;
  properties: {};
}
export type Actions = Array<Action>;

export interface ConfigurationProperty extends BaseEntity {
  javaType: string;
  displayName: string;
  kind: string;
  label: string;
  required: boolean;
  description: string;
  secret: boolean;
  group: string;
  componentProperty: boolean;
  deprecated: boolean;
  type: string;
  defaultValue: string;
}
export type ConfigurationProperties = Array<ConfigurationProperty>;

export interface Connection extends BaseEntity {
  icon: string;
  organization: Organization;
  options: {};
  description: string;
  configuredProperties: {};
  lastUpdated: string;
  connector: Connector;
  createdDate: string;
  organizationId: string;
  userId: string;
  connectorId: string;
  id: string;
  tags: Array<string>;
  name: string;
}
export type Connections = Array<Connection>;

export interface Connector extends BaseEntity {
  icon: string;
  description: string;
  connectorGroupId: string;
  connectorGroup: ConnectorGroup;
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
  steps: Array<Step>;
  configuration: string;
  token: string;
  description: string;
  lastUpdated: string;
  connections: Array<Connection>;
  createdDate: string;
  users: Array<User>;
  gitRepo: string;
  desiredStatus: "Draft" | "Pending" | "Activated" | "Deactivated" | "Deleted";
  currentStatus: "Draft" | "Pending" | "Activated" | "Deactivated" | "Deleted";
  statusMessage: string;
  integrationTemplate: IntegrationTemplate;
  userId: string;
  timesUsed: number;
  integrationTemplateId: string;
  stepsDone: Array<string>;
  id: string;
  tags: Array<string>;
  name: string;
}
export type Integrations = Array<Integration>;

export interface IntegrationTemplate extends BaseEntity {
  organization: Organization;
  configuration: string;
  organizationId: string;
  userId: string;
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
  configuredProperties: {};
  stepKind: string;
  name: string;
  id: string;
}
export type Steps = Array<Step>;

export interface User extends BaseEntity {
  fullName: string;
  roleId: string;
  username: string;
  firstName: string;
  integrations: Array<Integration>;
  lastName: string;
  organizationId: string;
  name: string;
  id: string;
}
export type Users = Array<User>;

export interface AcquisitionMethod extends BaseEntity {
  icon: string;
  label: string;
  description: string;
  type: "OAUTH1" | "OAUTH2";
}
export type AcquisitionMethods = Array<AcquisitionMethod>;

export interface Error extends BaseEntity {
  code: string;
  description: string;
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
  items: Array<Action>;
  totalCount: number;
}
export type ListResultActions = Array<ListResultAction>;

export interface EventMessage extends BaseEntity {
  data: {};
  event: string;
}
export type EventMessages = Array<EventMessage>;

export interface ListResultString extends BaseEntity {
  items: Array<string>;
  totalCount: number;
}
export type ListResultStrings = Array<ListResultString>;

class TypeFactoryClass {
  createListResult() {
    return <ListResult>{
      items: undefined,
      totalCount: undefined
    };
  }

  createListResultWithId() {
    return <ListResultWithId>{
      items: undefined,
      totalCount: undefined
    };
  }

  createWithId() {
    return <WithId>{
      id: undefined
    };
  }

  createAcquisition() {
    return <Acquisition>{
      url: undefined,
      type: undefined
    };
  }

  createAction() {
    return <Action>{
      description: undefined,
      inputDataShape: undefined,
      camelConnectorPrefix: undefined,
      camelConnectorGAV: undefined,
      outputDataShape: undefined,
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
      kind: undefined,
      label: undefined,
      required: undefined,
      description: undefined,
      secret: undefined,
      group: undefined,
      componentProperty: undefined,
      deprecated: undefined,
      type: undefined,
      defaultValue: undefined
    };
  }

  createConnection() {
    return <Connection>{
      icon: undefined,
      organization: undefined,
      options: undefined,
      description: undefined,
      configuredProperties: undefined,
      lastUpdated: undefined,
      connector: undefined,
      createdDate: undefined,
      organizationId: undefined,
      userId: undefined,
      connectorId: undefined,
      id: undefined,
      tags: undefined,
      name: undefined
    };
  }

  createConnector() {
    return <Connector>{
      icon: undefined,
      description: undefined,
      connectorGroupId: undefined,
      connectorGroup: undefined,
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
      steps: undefined,
      configuration: undefined,
      token: undefined,
      description: undefined,
      lastUpdated: undefined,
      connections: undefined,
      createdDate: undefined,
      users: undefined,
      gitRepo: undefined,
      desiredStatus: undefined,
      currentStatus: undefined,
      statusMessage: undefined,
      integrationTemplate: undefined,
      userId: undefined,
      timesUsed: undefined,
      integrationTemplateId: undefined,
      stepsDone: undefined,
      id: undefined,
      tags: undefined,
      name: undefined
    };
  }

  createIntegrationTemplate() {
    return <IntegrationTemplate>{
      organization: undefined,
      configuration: undefined,
      organizationId: undefined,
      userId: undefined,
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
      configuredProperties: undefined,
      stepKind: undefined,
      name: undefined,
      id: undefined
    };
  }

  createUser() {
    return <User>{
      fullName: undefined,
      roleId: undefined,
      username: undefined,
      firstName: undefined,
      integrations: undefined,
      lastName: undefined,
      organizationId: undefined,
      name: undefined,
      id: undefined
    };
  }

  createAcquisitionMethod() {
    return <AcquisitionMethod>{
      icon: undefined,
      label: undefined,
      description: undefined,
      type: undefined
    };
  }

  createError() {
    return <Error>{
      code: undefined,
      description: undefined,
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
      items: undefined,
      totalCount: undefined
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
      items: undefined,
      totalCount: undefined
    };
  }
}

export const TypeFactory = new TypeFactoryClass();
