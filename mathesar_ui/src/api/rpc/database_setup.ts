import { rpcMethodTypeContainer } from '@mathesar/packages/json-rpc-client-builder';

import type { ConfiguredRole } from './configured_roles';
import type { DatabaseResponse } from './databases';
import type { Server } from './servers';

export const sampleDataOptions = [
  'library_management',
  'movie_collection',
] as const;

export type SampleDataSchemaIdentifier = (typeof sampleDataOptions)[number];

export interface DatabaseConnectionResult {
  server: Server;
  database: DatabaseResponse;
  configured_role: ConfiguredRole;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const database_setup = {
  create_new: rpcMethodTypeContainer<
    {
      database: DatabaseResponse['name'];
      sample_data?: SampleDataSchemaIdentifier[];
    },
    DatabaseConnectionResult
  >(),

  connect_existing: rpcMethodTypeContainer<
    {
      host: Server['host'];
      port: Server['port'];
      database: DatabaseResponse['name'];
      role: ConfiguredRole['name'];
      password: string;
      sample_data?: SampleDataSchemaIdentifier[];
    },
    DatabaseConnectionResult
  >(),
};
